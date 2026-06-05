import Image from 'next/image';

import MghLogo from '@/images/logos/mgh.png';
import SeliseLogo from '@/images/logos/selise.png';
import { WORK, type WorkEntry } from '@/data/portfolio';

const LOGOS: Record<string, typeof SeliseLogo> = {
  'SELISE Digital Platforms': SeliseLogo,
  'MGH Group': MghLogo,
};

export function Experience() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-24">
      <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
        <h2
          className="font-heading font-bold tracking-display-tight leading-display text-ink"
          style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}
        >
          Work experience.
        </h2>
        <span className="text-[13px] text-muted">2018 — Present</span>
      </div>

      <div className="space-y-10">
        {WORK.map((entry) => (
          <CompanyEntry key={entry.company} entry={entry} />
        ))}
      </div>
    </section>
  );
}

function CompanyEntry({ entry }: { entry: WorkEntry }) {
  const logo = LOGOS[entry.company];

  return (
    <div className="grid grid-cols-12 gap-6 items-start border-t border-rule pt-8">
      {/* Logo + company */}
      <div className="col-span-12 md:col-span-4 flex items-start gap-4">
        {logo && (
          <div className="relative w-10 h-10 rounded-full bg-paper-deep border border-rule shrink-0 overflow-hidden">
            <Image
              src={logo}
              alt={`${entry.company} logo`}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        )}
        <div>
          <div className="font-heading font-semibold text-[18px] tracking-heading text-ink">
            {entry.company}
          </div>
          <div className="text-[13px] text-muted mt-0.5 tabular-nums">
            {entry.start} — {entry.end}
          </div>
        </div>
      </div>

      {/* Role(s) */}
      <div className="col-span-12 md:col-span-8">
        {entry.role ? (
          /* Single role */
          <div className="text-[15px] text-ink-soft">{entry.role}</div>
        ) : (
          /* Promotion timeline */
          <div className="border-l border-rule pl-5 space-y-3">
            {entry.roles?.map((r, i) => (
              <div key={r.title} className="flex items-baseline justify-between gap-4">
                <span className={`text-[14px] leading-[1.5] ${i === 0 ? 'text-ink' : 'text-ink-soft'}`}>
                  {r.title}
                </span>
                <span className="text-[12px] text-muted tabular-nums shrink-0">
                  {r.start} — {r.end}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
