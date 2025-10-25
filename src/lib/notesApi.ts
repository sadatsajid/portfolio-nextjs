import { Client, isFullPage } from '@notionhq/client';
import {
  BlockObjectResponse,
  ListBlockChildrenResponse,
  GetBlockResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { compareAsc, compareDesc } from 'date-fns';
import { getPlaiceholder } from 'plaiceholder';

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export type Note = {
  id: string;
  createdAt: string;
  lastEditedAt: string;
  coverImage: string | null;
  tags: string[];
  title: string;
  description: string;
  slug: string;
  isPublished: boolean;
  publishedAt: string;
  inProgress: boolean;
};

// Define the transformed block type to include image properties
type TransformedBlockObjectResponse = BlockObjectResponse & { 
  image?: { 
    size?: { height: number; width: number }; 
    placeholder?: string 
  } 
};

const noop = async (block: BlockObjectResponse) => block as TransformedBlockObjectResponse;

/**
 * Union type of all block types
 * @see https://developers.notion.com/reference/block
 */
type BlockType = BlockObjectResponse['type'];

/**
 * Lookup table for transforming block types
 * Allows to transform an api response for a specific block type into a more usable format
 */
const BlockTypeTransformLookup: Record<
  BlockType,
  (block: BlockObjectResponse) => Promise<BlockObjectResponse>
> = {
  file: noop,
  paragraph: noop,
  heading_1: noop,
  heading_2: noop,
  heading_3: noop,
  bulleted_list_item: noop,
  numbered_list_item: noop,
  quote: noop,
  to_do: noop,
  toggle: noop,
  template: noop,
  synced_block: noop,
  child_page: noop,
  child_database: noop,
  equation: noop,
  code: noop,
  callout: noop,
  divider: noop,
  breadcrumb: noop,
  table_of_contents: noop,
  column_list: noop,
  column: noop,
  link_to_page: noop,
  table: noop,
  table_row: noop,
  embed: noop,
  bookmark: noop,
  image: async (block: BlockObjectResponse) => {
    if (block.type === 'image') {
      const contents = block[block.type];
      if (contents.type === 'external' && contents.external?.url) {
        const buffer = await fetch(contents.external.url).then(async res =>
          Buffer.from(await res.arrayBuffer())
        );
        const {
          base64,
          metadata: { height, width },
        } = await getPlaiceholder(buffer, { size: 64 });
        (block as any).image = { size: { height, width }, placeholder: base64 };
      }
    }

    return block as TransformedBlockObjectResponse;
  },
  video: noop,
  pdf: noop,
  audio: noop,
  link_preview: noop,
  unsupported: noop,
};

const CompareFunctionLookup = {
  asc: compareAsc,
  desc: compareDesc,
};

class NotesApi {
  constructor(
    private readonly notion: Client,
    private readonly databaseId: string
  ) {}

  async getNotes(sortOrder: 'asc' | 'desc' = 'desc', limit?: number) {
    const notes = await this.getDatabaseContent(this.databaseId);

    return notes
      .sort((a, b) => {
        return CompareFunctionLookup[sortOrder](
          new Date(a.publishedAt),
          new Date(b.publishedAt)
        );
      })
      .slice(0, limit);
  }

  async getNotesByTag(
    tag: string,
    sortOrder: 'asc' | 'desc' = 'desc',
    limit?: number
  ) {
    const notes = await this.getNotes(sortOrder, limit);
    const relatedNotes = notes.filter(post => post.tags.includes(tag));

    return relatedNotes;
  }

  async getNote(id: string) {
    return this.getPageContent(id);
  }

  async getAllTags() {
    const posts = await this.getNotes();

    return Array.from(new Set(posts.map(note => note.tags).flat()));
  }

  private getDatabaseContent = async (databaseId: string): Promise<Note[]> => {
    // Use type assertion to ensure TypeScript doesn't error about the query method
    let db: any = await (this.notion.databases as any).query({ database_id: databaseId });

    while (db.has_more && db.next_cursor) {
      const result: any = await (this.notion.databases as any).query({
        database_id: databaseId,
        start_cursor: db.next_cursor,
      });
      db.results = [...db.results, ...result.results];
      db.has_more = result.has_more;
      db.next_cursor = result.next_cursor;
    }

    return db.results
      .map((page: any) => {
        if (!isFullPage(page)) {
          throw new Error('Notion page is not a full page');
        }

        return {
          id: page.id,
          createdAt: page.created_time,
          lastEditedAt: page.last_edited_time,
          coverImage:
            page.cover?.type === 'external' ? page.cover.external.url : null,
          tags:
            'multi_select' in page.properties.hashtags
              ? page.properties.hashtags.multi_select.map((tag: any) => tag.name)
              : [],
          title:
            'title' in page.properties.title
              ? page.properties.title.title[0].plain_text
              : '',
          description:
            'rich_text' in page.properties.description
              ? page.properties.description.rich_text[0].plain_text
              : '',
          slug:
            'rich_text' in page.properties.slug
              ? page.properties.slug.rich_text[0].plain_text
              : '',
          isPublished:
            'checkbox' in page.properties.published
              ? page.properties.published.checkbox
              : false,
          publishedAt:
            'date' in page.properties.publishedAt
              ? page.properties.publishedAt.date!.start
              : '',
          inProgress:
            'checkbox' in page.properties.inProgress
              ? page.properties.inProgress.checkbox
              : false,
        };
      })
      .filter((post: Note) => post.isPublished);
  };

  private getPageContent = async (pageId: string) => {
    const blocks = await this.getBlocks(pageId);

    const blocksChildren = await Promise.all(
      blocks.map(async (block: any) => {
        const id = block.id;
        if (
          !['unsupported', 'child_page'].includes(block.type) &&
          block.has_children
        ) {
          // Properly type the block to include children property when needed
          (block as any).children = await this.getBlocks(id);
        }

        return block;
      })
    );

    return Promise.all(
      blocksChildren.map(async (block: BlockObjectResponse) => {
        return BlockTypeTransformLookup[block.type as BlockType](block);
      })
    ).then((transformedBlocks: any[]) => {
      return transformedBlocks.reduce((acc: any[], curr: any) => {
        if (curr.type === 'bulleted_list_item') {
          if (acc[acc.length - 1]?.type === 'bulleted_list') {
            const lastBlock = acc[acc.length - 1];
            if (!lastBlock.bulleted_list) {
              lastBlock.bulleted_list = { children: [] };
            }
            lastBlock.bulleted_list.children?.push(curr);
          } else {
            acc.push({
              type: 'bulleted_list',
              bulleted_list: { children: [curr] },
            });
          }
        } else if (curr.type === 'numbered_list_item') {
          if (acc[acc.length - 1]?.type === 'numbered_list') {
            const lastBlock = acc[acc.length - 1];
            if (!lastBlock.numbered_list) {
              lastBlock.numbered_list = { children: [] };
            }
            lastBlock.numbered_list.children?.push(curr);
          } else {
            acc.push({
              type: 'numbered_list',
              numbered_list: { children: [curr] },
            });
          }
        } else {
          acc.push(curr);
        }
        return acc;
      }, []);
    });
  };

  private getBlocks = async (blockId: string): Promise<BlockObjectResponse[]> => {
    let list: ListBlockChildrenResponse = await this.notion.blocks.children.list({
      block_id: blockId,
    });

    while (list.has_more && list.next_cursor) {
      const result: ListBlockChildrenResponse = await this.notion.blocks.children.list({
        block_id: blockId,
        start_cursor: list.next_cursor,
      });
      list.results = list.results.concat(result.results);
      list.has_more = result.has_more;
      list.next_cursor = result.next_cursor;
    }

    return list.results as BlockObjectResponse[];
  };
}

// Only create the instance if required environment variables are present
let notesApi: NotesApi | null = null;
if (process.env.NOTION_TOKEN && process.env.NOTION_DATABASE_ID) {
  notesApi = new NotesApi(notion, process.env.NOTION_DATABASE_ID);
} else {
  console.warn('NOTION_TOKEN or NOTION_DATABASE_ID is not set. Notes API will not be available.');
}

export { notesApi };