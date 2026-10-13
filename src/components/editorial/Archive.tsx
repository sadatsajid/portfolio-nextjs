import { ARCHIVE, FEATURED } from '@/data/portfolio';

import { SectionHeading } from './SectionHeading';

export function Archive() {
  const offset = FEATURED.length + 1;

  return (
    <section aria-labelledby="archive-title" className="page-frame pb-24">
      <SectionHeading
        id="archive-title"
        index="02"
        label="Archive"
        title={<>{ARCHIVE.length} more I&apos;m proud of.</>}
        meta="2018-2025"
      />

      <ol data-reveal className="border-rule border-t">
        {ARCHIVE.map((item, i) => (
          <li
            key={item.title}
            className="border-rule grid grid-cols-[1.75rem_minmax(0,1fr)_auto] items-baseline gap-x-3 border-b py-4 text-[13px] sm:gap-x-4 md:grid-cols-[1.75rem_13rem_minmax(0,1fr)_6rem_3rem] lg:grid-cols-[1.75rem_16rem_minmax(0,1fr)_6rem_3rem] lg:gap-x-6"
          >
            <span className="text-muted tabular-nums">
              {String(i + offset).padStart(2, '0')}
            </span>
            <span className="min-w-0">
              <span className="font-heading tracking-heading text-ink block text-[17px] font-semibold md:text-[18px]">
                {item.title}
              </span>
              {/* On small screens the note tucks under the title instead of disappearing. */}
              <span className="text-ink-soft mt-1 block font-serif text-[14px] md:hidden">
                {item.note}
              </span>
            </span>
            <span className="text-ink-soft hidden font-serif text-[14px] md:block">
              {item.note}
            </span>
            <span className="text-muted hidden text-right md:block">
              {item.kind}
            </span>
            <span className="text-muted text-right tabular-nums">
              {item.year}
            </span>
          </li>
        ))}
      </ol>
    </section>
  );
}
