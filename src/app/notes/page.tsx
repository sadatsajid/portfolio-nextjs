import type { Metadata } from 'next';
import Link from 'next/link';

import { formatNoteDate, getAllNotes } from '@/lib/notes';

export const metadata: Metadata = {
  title: 'Writing — Asif Sadat',
  description:
    'Stories from the work: rebuilding the systems CRM agents live in, moving a team off Angular, and learning the backend on a frontend clock.',
};

export default function NotesPage() {
  const notes = getAllNotes();

  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-[1200px] px-6 py-24 lg:px-10">
        <header className="mb-16 max-w-2xl">
          <p className="mb-4 font-heading text-[12px] font-semibold tracking-heading text-accent">
            Writing
          </p>
          <h1
            className="font-heading font-bold leading-display tracking-display-tight text-ink"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Stories from the work.
          </h1>
          <p className="mt-6 text-[17px] leading-relaxed text-ink-soft">
            Longer-form notes on the systems I&apos;ve built, the calls I&apos;ve made,
            and the things I learned the hard way.
          </p>
        </header>

        <ul className="border-t border-rule">
          {notes.map(note => (
            <li key={note.slug} className="border-b border-rule">
              <Link
                href={`/notes/${note.slug}`}
                className="group flex flex-col gap-3 py-8 transition-colors hover:bg-paper-deep sm:flex-row sm:items-baseline sm:gap-8"
              >
                <div className="flex shrink-0 items-center gap-4 sm:w-44">
                  <span className="font-heading text-[12px] font-semibold tracking-heading text-accent">
                    {note.kind}
                  </span>
                  <span className="text-[12px] text-muted">
                    {formatNoteDate(note.date)}
                  </span>
                </div>
                <div className="flex-1">
                  <h2 className="font-heading text-[22px] font-semibold leading-[1.2] tracking-heading text-ink transition-colors group-hover:text-accent">
                    {note.title}
                  </h2>
                  <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
                    {note.description}
                  </p>
                  <span className="mt-3 inline-block text-[12px] text-muted">
                    {note.readingTime}
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
