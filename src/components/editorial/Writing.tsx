import Link from 'next/link';

import { formatNoteDate, getAllNotes } from '@/lib/notes';

export function Writing() {
  const notes = getAllNotes().slice(0, 3);

  return (
    <section id="writing" className="scroll-mt-24 bg-paper-deep border-y border-rule">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <h2
            className="font-heading font-bold tracking-display-tight leading-display text-ink"
            style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}
          >
            Things I&apos;ve written down.
          </h2>
          <Link
            href="/notes"
            className="text-[13px] text-muted transition-colors hover:text-accent"
          >
            Read all →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-rule">
          {notes.map(note => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="group block p-6 lg:p-8 transition-colors hover:bg-paper"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-[12px] font-heading font-semibold tracking-heading text-accent">
                  {note.kind}
                </span>
                <span className="text-[12px] text-muted">{note.readingTime}</span>
              </div>
              <h3 className="font-heading font-semibold text-[20px] tracking-heading leading-[1.2] text-ink mb-10 transition-colors group-hover:text-accent">
                {note.title}
              </h3>
              <div className="flex items-center justify-between text-[12px] text-muted">
                <span>{formatNoteDate(note.date)}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
