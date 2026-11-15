import { CONTACT, CONTRIBUTIONS, type Contribution } from '@/data/portfolio';

import { SectionHeading } from './SectionHeading';

const DAY = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
});
const MONTH = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

function prUrl(c: Contribution) {
  return `https://github.com/${c.repo}/pull/${c.number}`;
}

/** "Oct – Nov 2026" from the oldest and newest merge dates. */
function mergedRange(items: Contribution[]) {
  const dates = items.map(c => new Date(c.merged)).sort((a, b) => +a - +b);
  const first = dates[0];
  const last = dates[dates.length - 1];
  if (!first || !last) return null;
  return MONTH.formatRange(first, last);
}

export function OpenSource() {
  const repos = new Set(CONTRIBUTIONS.map(c => c.repo)).size;
  const range = mergedRange(CONTRIBUTIONS);

  return (
    <section
      id="open-source"
      aria-labelledby="open-source-title"
      className="page-frame scroll-mt-24 pb-24"
    >
      <SectionHeading
        id="open-source-title"
        index="04"
        label="Open source"
        title={<>{CONTRIBUTIONS.length} PRs merged upstream.</>}
        meta={
          <div className="flex flex-col items-start gap-1 sm:items-end">
            <span>
              {repos} repos{range ? ` · ${range}` : ''}
            </span>
            <a
              href={CONTACT.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group font-heading tracking-heading text-ink hover:text-accent inline-flex min-h-11 items-center gap-1.5 text-[14px] font-semibold transition-colors"
            >
              GitHub profile
              <span
                aria-hidden
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                ↗
              </span>
            </a>
          </div>
        }
      />

      <ol data-reveal className="border-rule border-t">
        {CONTRIBUTIONS.map(c => (
          <li key={`${c.repo}#${c.number}`} className="border-rule border-b">
            <a
              href={prUrl(c)}
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:bg-paper-deep grid min-h-11 grid-cols-[minmax(0,1fr)_auto] items-baseline gap-x-4 px-1 py-4 text-[13px] transition-colors md:grid-cols-[15rem_minmax(0,1fr)_5rem_4rem] lg:grid-cols-[17rem_minmax(0,1fr)_5rem_4rem] lg:gap-x-6"
            >
              <span className="min-w-0 md:contents">
                <span className="text-muted block truncate tabular-nums">
                  {c.repo}
                  <span className="text-accent"> #{c.number}</span>
                </span>
                <span className="font-heading tracking-heading text-ink group-hover:text-accent mt-1 block text-[16px] font-semibold transition-colors md:mt-0 md:text-[17px]">
                  {c.summary}
                </span>
              </span>
              <span className="text-muted hidden md:block">{c.kind}</span>
              <span className="text-muted text-right tabular-nums">
                <time dateTime={c.merged}>
                  {DAY.format(new Date(c.merged))}
                </time>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
