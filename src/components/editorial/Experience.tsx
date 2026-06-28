import Image from 'next/image';

import MghLogo from '@/images/logos/mgh.png';
import SeliseLogo from '@/images/logos/selise.png';
import { WORK, type WorkEntry, type WorkRole } from '@/data/portfolio';

const LOGOS: Record<string, typeof SeliseLogo> = {
  'SELISE Digital Platforms': SeliseLogo,
  'MGH Group': MghLogo,
};

/** Normalize an entry to a role list so single- and multi-role companies share one timeline. */
function rolesOf(entry: WorkEntry): WorkRole[] {
  if (entry.roles?.length) return entry.roles;
  if (entry.role) return [{ title: entry.role, start: entry.start, end: entry.end }];
  return [];
}

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

      <ol className="relative">
        {WORK.map((entry, i) => (
          <CompanyEntry
            key={entry.company}
            entry={entry}
            isLast={i === WORK.length - 1}
          />
        ))}
      </ol>
    </section>
  );
}

function CompanyEntry({ entry, isLast }: { entry: WorkEntry; isLast: boolean }) {
  const logo = LOGOS[entry.company];
  const roles = rolesOf(entry);

  return (
    <li className="relative pl-16 pb-12 last:pb-0">
      {/* Rail connecting this company's node to the next */}
      {!isLast && (
        <span
          aria-hidden
          className="absolute left-5 top-10 -bottom-2 w-px -translate-x-1/2 bg-rule"
        />
      )}

      {/* Node — the company logo sits on the rail */}
      <div className="absolute left-5 top-0 -translate-x-1/2">
        <div className="relative w-10 h-10 rounded-full bg-paper-deep border border-rule overflow-hidden">
          {logo && (
            <Image
              src={logo}
              alt={`${entry.company} logo`}
              fill
              className="object-cover"
              unoptimized
            />
          )}
        </div>
      </div>

      {/* Company + dates */}
      <div className="flex items-baseline gap-3 flex-wrap pt-1.5">
        <h3 className="font-heading font-semibold text-[18px] tracking-heading text-ink">
          {entry.company}
        </h3>
        <span className="text-[13px] text-muted tabular-nums">
          {entry.start} — {entry.end}
        </span>
      </div>

      {/* Roles — multiple roles render as a nested sub-timeline */}
      <ul className="relative mt-4 space-y-3.5 pl-5">
        {roles.length > 1 && (
          <span
            aria-hidden
            className="absolute left-0 top-[0.55em] bottom-2 w-px -translate-x-1/2 bg-rule"
          />
        )}
        {roles.map((role, i) => (
          <li
            key={role.title}
            className="relative flex items-baseline justify-between gap-4"
          >
            <span
              aria-hidden
              className={`absolute -left-5 top-[0.55em] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                i === 0 ? 'bg-accent' : 'border border-rule bg-paper'
              }`}
            />
            <span
              className={`text-[14px] leading-[1.5] ${i === 0 ? 'text-ink' : 'text-ink-soft'}`}
            >
              {role.title}
            </span>
            <span className="text-[12px] text-muted tabular-nums shrink-0">
              {role.start} — {role.end}
            </span>
          </li>
        ))}
      </ul>
    </li>
  );
}
