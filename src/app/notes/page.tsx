import type { Metadata } from 'next';
import Link from 'next/link';

import { formatNoteDate, getAllNotes } from '@/lib/notes';

const DESCRIPTION =
  'Stories from the work: adapting to AI-assisted React, rebuilding the systems CRM agents live in, moving a team off Angular, and learning the backend on a frontend clock.';

export const metadata: Metadata = {
  title: 'Writing | Asif Sadat',
  description: DESCRIPTION,
  // Images inherit from the root layout's portfolio card.
  openGraph: {
    title: 'Writing | Asif Sadat',
    description: DESCRIPTION,
    url: '/notes',
    siteName: 'Asif Sadat',
    type: 'website',
  },
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <section className="bg-paper">
      <div className="page-frame pt-16 pb-24 lg:pt-20">
        <header className="mb-16 max-w-2xl">
          <p className="eyebrow text-muted mb-4 flex items-center gap-3">
            <span className="text-accent tabular-nums">{notes.length}</span>
            <span aria-hidden className="bg-rule-strong h-px w-8" />
            <span>Writing</span>
          </p>
          <h1
            className="font-heading leading-display tracking-display-tight text-ink font-bold text-balance"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Stories from the work.
          </h1>
          <p className="text-ink-soft mt-6 font-serif text-[clamp(17px,1.6vw,20px)] leading-normal">
            Longer-form notes on the systems I&apos;ve built, the calls
            I&apos;ve made, and the things I learned the hard way.
          </p>
        </header>

        <ul className="border-rule border-t">
          {notes.map(note => (
            <li key={note.slug} data-reveal className="border-rule border-b">
              <Link
                href={`/notes/${note.slug}`}
                className="group hover:bg-paper-deep -mx-4 flex flex-col gap-3 px-4 py-8 transition-colors sm:flex-row sm:items-baseline sm:gap-8"
              >
                <div className="flex shrink-0 items-center gap-4 sm:w-44">
                  <span className="eyebrow text-accent">{note.kind}</span>
                  <span className="text-muted text-[12px]">
                    {formatNoteDate(note.date)}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="font-heading tracking-heading text-ink group-hover:text-accent text-[22px] leading-[1.2] font-semibold transition-colors">
                    {note.title}
                  </h2>
                  <p className="text-ink-soft mt-2 max-w-2xl font-serif text-[16px] leading-normal">
                    {note.description}
                  </p>
                  <span className="text-muted mt-4 flex items-center gap-3 text-[12px]">
                    {note.readingTime}
                    <span
                      aria-hidden
                      className="text-accent transition-transform duration-200 group-hover:translate-x-0.5"
                    >
                      Read →
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
