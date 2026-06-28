import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

import { format, parseISO } from 'date-fns';
import matter from 'gray-matter';

const NOTES_DIR = join(process.cwd(), 'src/content/notes');
const WORDS_PER_MINUTE = 200;

export type NoteMeta = {
  slug: string;
  title: string;
  description: string;
  /** ISO date, e.g. 2026-01-15 */
  date: string;
  kind: string;
  /** e.g. "8 min read" */
  readingTime: string;
  published: boolean;
};

export type Note = NoteMeta & { content: string };

type Frontmatter = {
  title: string;
  description: string;
  // YAML parses an unquoted `2026-01-15` into a Date, a quoted one into a string.
  date: string | Date;
  kind: string;
  published?: boolean;
};

/** Normalize a frontmatter date to an ISO `yyyy-mm-dd` string. */
function toIsoDate(value: string | Date): string {
  return value instanceof Date ? value.toISOString().slice(0, 10) : String(value);
}

function readNote(fileName: string): Note {
  const slug = fileName.replace(/\.mdx$/, '');
  const raw = readFileSync(join(NOTES_DIR, fileName), 'utf8');
  const { data, content } = matter(raw);
  const fm = data as Frontmatter;

  const words = content.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));

  return {
    slug,
    title: fm.title,
    description: fm.description,
    date: toIsoDate(fm.date),
    kind: fm.kind,
    readingTime: `${minutes} min read`,
    published: fm.published ?? false,
    content,
  };
}

function allNotes(): Note[] {
  return readdirSync(NOTES_DIR)
    .filter(name => name.endsWith('.mdx'))
    .map(readNote)
    .filter(note => note.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

/** Published notes, newest first — metadata only (no MDX body). */
export function getAllNotes(): NoteMeta[] {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return allNotes().map(({ content, ...meta }) => meta);
}

/** A single published note with its raw MDX body, or null if not found. */
export function getNoteBySlug(slug: string): Note | null {
  return allNotes().find(note => note.slug === slug) ?? null;
}

/** Display format for a note's ISO date, e.g. "Jan 2026". */
export function formatNoteDate(isoDate: string): string {
  return format(parseISO(isoDate), 'MMM yyyy');
}
