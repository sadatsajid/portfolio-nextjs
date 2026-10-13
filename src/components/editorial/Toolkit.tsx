import { SKILLS } from '@/data/portfolio';

import { SectionHeading } from './SectionHeading';

export function Toolkit() {
  const entries = Object.entries(SKILLS);

  return (
    <section
      id="toolkit"
      aria-labelledby="toolkit-title"
      className="page-frame scroll-mt-24 py-24"
    >
      <SectionHeading
        id="toolkit-title"
        index="05"
        label="Toolkit"
        title="The tools I reach for first."
      />

      <div data-reveal className="space-y-7">
        {entries.map(([category, items]) => (
          <div
            key={category}
            className="border-rule grid grid-cols-1 items-baseline gap-2 border-b pb-6 lg:grid-cols-12 lg:gap-6"
          >
            <div className="lg:col-span-3">
              <span
                className={`font-heading tracking-heading text-[15px] font-semibold ${
                  category === 'Currently learning'
                    ? 'text-accent'
                    : 'text-ink-soft'
                }`}
              >
                {category === 'Currently learning' && (
                  <span aria-hidden>↗ </span>
                )}
                {category}
              </span>
            </div>
            <ul className="flex min-w-0 flex-wrap gap-2 lg:col-span-9">
              {items.map(s => (
                <li
                  key={s}
                  className="border-rule bg-paper-deep font-heading tracking-heading text-ink-soft inline-flex items-center rounded-full border px-3 py-1 text-[13px] font-medium"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
