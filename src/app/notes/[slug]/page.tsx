import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import rehypePrism from '@mapbox/rehype-prism';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

import { ShareButton } from '@/components/editorial/ShareButton';
import { formatNoteDate, getAllNotes, getNoteBySlug } from '@/lib/notes';
import '@/styles/prism.css';

export const dynamic = 'force-static';
export const dynamicParams = false;

const SITE_URL = process.env.NEXT_PUBLIC_URL ?? 'https://www.asifsadat.com';

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllNotes().map(note => ({ slug: note.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) return {};

  const noteUrl = new URL(`/notes/${note.slug}`, SITE_URL);
  const ogImage = new URL('/api/og', SITE_URL);
  ogImage.searchParams.set('title', note.title);
  ogImage.searchParams.set('kind', note.kind);
  ogImage.searchParams.set('date', note.date);
  const imageAlt = `${note.title} — ${note.kind} note by Asif Sadat`;

  return {
    title: `${note.title} | Asif Sadat`,
    description: note.description,
    openGraph: {
      title: note.title,
      description: note.description,
      url: noteUrl,
      siteName: 'Asif Sadat',
      type: 'article',
      publishedTime: note.date,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          type: 'image/png',
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: note.title,
      description: note.description,
      images: [{ url: ogImage, alt: imageAlt }],
    },
  };
}

export default async function NotePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);
  if (!note) notFound();

  return (
    <article className="bg-paper">
      <div className="mx-auto max-w-190 px-6 pt-12 pb-24 lg:px-10">
        <Link
          href="/notes"
          className="text-muted hover:text-accent mb-8 inline-block text-[13px] transition-colors"
        >
          ← All writing
        </Link>

        <header className="border-rule mb-12 border-b pb-12">
          <div className="mb-5 flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <span className="font-heading tracking-heading text-accent text-[12px] font-semibold">
                {note.kind}
              </span>
              <span className="text-muted text-[12px]">
                {formatNoteDate(note.date)}
              </span>
              <span className="text-muted text-[12px]">{note.readingTime}</span>
            </div>
            <ShareButton
              title={note.title}
              url={new URL(`/notes/${note.slug}`, SITE_URL).toString()}
            />
          </div>
          <h1
            className="font-heading leading-display tracking-display-tight text-ink font-bold"
            style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}
          >
            {note.title}
          </h1>
          <p className="text-ink-soft mt-6 text-[18px] leading-relaxed">
            {note.description}
          </p>
        </header>

        <div className="prose prose-lg prose-headings:font-heading prose-headings:tracking-heading prose-headings:text-ink prose-p:text-ink-soft prose-a:text-accent prose-strong:text-ink prose-blockquote:border-accent prose-blockquote:text-muted prose-code:text-ink max-w-none">
          <MDXRemote
            source={note.content}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [[rehypePrism, { ignoreMissing: true }]],
              },
            }}
          />
        </div>
      </div>
    </article>
  );
}
