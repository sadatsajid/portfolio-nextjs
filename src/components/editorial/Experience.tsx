import Image from 'next/image';

import MghLogo from '@/images/logos/mgh.png';
import SeliseLogo from '@/images/logos/selise.png';
import { WORK, type WorkEntry, type WorkRole } from '@/data/portfolio';

import { SectionHeading } from './SectionHeading';

const LOGOS: Record<string, typeof SeliseLogo> = {
  'SELISE Digital Platforms': SeliseLogo,
  'MGH Group': MghLogo,
};

/** Normalize an entry to a role list so single- and multi-role companies share one timeline. */
function rolesOf(entry: WorkEntry): WorkRole[] {
  if (entry.roles?.length) return entry.roles;
  if (entry.role)
    return [{ title: entry.role, start: entry.start, end: entry.end }];
  return [];
}

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-title"
      className="page-frame scroll-mt-24 pb-24"
    >
      <SectionHeading
        id="experience-title"
        index="03"
        label="Experience"
        title="Work experience."
        meta="2018-Present"
      />

      <ol data-reveal className="relative">
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

function CompanyEntry({
  entry,
  isLast,
}: {
  entry: WorkEntry;
  isLast: boolean;
}) {
  const logo = LOGOS[entry.company];
  const roles = rolesOf(entry);

  return (
    <li className="relative pb-12 pl-16 last:pb-0">
      {/* Rail connecting this company's node to the next */}
      {!isLast && (
        <span
          aria-hidden
          className="bg-rule absolute top-10 -bottom-2 left-5 w-px -translate-x-1/2"
        />
      )}

      {/* Node — the company logo sits on the rail */}
      <div className="absolute top-0 left-5 -translate-x-1/2">
        <div className="bg-paper-deep border-rule relative h-10 w-10 overflow-hidden rounded-full border">
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
      <div className="flex flex-wrap items-baseline gap-3 pt-1.5">
        <h3 className="font-heading tracking-heading text-ink text-[18px] font-semibold">
          {entry.company}
        </h3>
        <span className="text-muted text-[13px] tabular-nums">
          {entry.start}-{entry.end}
        </span>
      </div>

      {/* Roles — multiple roles render as a nested sub-timeline */}
      <ul className="relative mt-4 space-y-3.5 pl-5">
        {roles.length > 1 && (
          <span
            aria-hidden
            className="bg-rule absolute top-[0.55em] bottom-2 left-0 w-px -translate-x-1/2"
          />
        )}
        {roles.map((role, i) => (
          <li
            key={role.title}
            className="relative flex items-baseline justify-between gap-4"
          >
            <span
              aria-hidden
              className={`absolute top-[0.55em] -left-5 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                i === 0 ? 'bg-accent' : 'border-rule bg-paper border'
              }`}
            />
            <span
              className={`text-[14px] leading-[1.5] ${i === 0 ? 'text-ink' : 'text-ink-soft'}`}
            >
              {role.title}
            </span>
            <span className="text-muted shrink-0 text-[12px] tabular-nums">
              {role.start}-{role.end}
            </span>
          </li>
        ))}
      </ul>
    </li>
  );
}
