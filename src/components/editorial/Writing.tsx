import Link from 'next/link';

import { formatNoteDate, getAllNotes } from '@/lib/notes';

import { SectionHeading } from './SectionHeading';

export function Writing() {
  const notes = getAllNotes().slice(0, 3);

  return (
    <section
      id="writing"
      aria-labelledby="writing-title"
      className="bg-paper-deep border-rule scroll-mt-24 border-y"
    >
      <div className="page-frame py-24">
        <SectionHeading
          id="writing-title"
          index="06"
          label="Writing"
          title="Things I've written down."
          meta={
            <Link
              href="/notes"
              className="group font-heading tracking-heading text-ink hover:text-accent inline-flex min-h-11 items-center gap-1.5 text-[14px] font-semibold transition-colors"
            >
              All {getAllNotes().length} notes
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          }
        />

        <div
          data-reveal
          className="divide-rule border-rule grid grid-cols-1 divide-y border-y md:grid-cols-3 md:divide-x md:divide-y-0"
        >
          {notes.map(note => (
            <Link
              key={note.slug}
              href={`/notes/${note.slug}`}
              className="group hover:bg-paper flex flex-col p-6 transition-colors lg:p-8"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="font-heading tracking-heading text-accent text-[12px] font-semibold">
                  {note.kind}
                </span>
                <span className="text-muted text-[12px]">
                  {note.readingTime}
                </span>
              </div>
              <h3 className="font-heading tracking-heading text-ink group-hover:text-accent text-[20px] leading-[1.2] font-semibold transition-colors">
                {note.title}
              </h3>
              <p className="text-ink-soft mt-3 mb-8 line-clamp-3 font-serif text-[15px] leading-normal">
                {note.description}
              </p>
              <div className="text-muted mt-auto flex items-center justify-between text-[12px]">
                <span>{formatNoteDate(note.date)}</span>
                <span
                  aria-hidden
                  className="text-accent transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  Read →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
