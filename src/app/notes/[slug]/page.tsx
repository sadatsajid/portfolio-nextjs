import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import rehypePrism from '@mapbox/rehype-prism';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

import { formatNoteDate, getAllNotes, getNoteBySlug } from '@/lib/notes';
import '@/styles/prism.css';

export const dynamic = 'force-static';
export const dynamicParams = false;

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

  const ogImage = `/api/og?title=${encodeURIComponent(
    note.title
  )}&description=${encodeURIComponent(note.description)}`;

  return {
    title: `${note.title} — Asif Sadat`,
    description: note.description,
    openGraph: {
      title: note.title,
      description: note.description,
      type: 'article',
      publishedTime: note.date,
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: note.title,
      description: note.description,
      images: [ogImage],
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
      <div className="mx-auto max-w-[760px] px-6 pb-24 pt-12 lg:px-10">
        <Link
          href="/notes"
          className="mb-8 inline-block text-[13px] text-muted transition-colors hover:text-accent"
        >
          ← All writing
        </Link>

        <header className="mb-12 border-b border-rule pb-12">
          <div className="mb-5 flex items-center gap-4">
            <span className="font-heading text-[12px] font-semibold tracking-heading text-accent">
              {note.kind}
            </span>
            <span className="text-[12px] text-muted">
              {formatNoteDate(note.date)}
            </span>
            <span className="text-[12px] text-muted">{note.readingTime}</span>
          </div>
          <h1
            className="font-heading font-bold leading-display tracking-display-tight text-ink"
            style={{ fontSize: 'clamp(32px, 4.5vw, 52px)' }}
          >
            {note.title}
          </h1>
          <p className="mt-6 text-[18px] leading-relaxed text-ink-soft">
            {note.description}
          </p>
        </header>

        <div className="prose prose-lg max-w-none prose-headings:font-heading prose-headings:tracking-heading prose-headings:text-ink prose-p:text-ink-soft prose-a:text-accent prose-strong:text-ink prose-blockquote:border-accent prose-blockquote:text-muted prose-code:text-ink">
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
