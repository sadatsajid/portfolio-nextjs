import type { ReactNode } from 'react';

import clsx from 'clsx';

const SIZES = {
  lg: 'clamp(36px, 4.5vw, 64px)',
  md: 'clamp(28px, 3vw, 44px)',
} as const;

/**
 * Shared section header: numbered eyebrow, display title, optional meta on
 * the right. Keeps the type scale and rhythm identical across sections.
 */
export function SectionHeading({
  index,
  label,
  title,
  meta,
  size = 'md',
  id,
  className,
}: {
  index: string;
  label: string;
  title: ReactNode;
  meta?: ReactNode;
  size?: keyof typeof SIZES;
  id?: string;
  className?: string;
}) {
  return (
    <header
      data-reveal
      className={clsx(
        'mb-12 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 lg:mb-14',
        className
      )}
    >
      <div className="min-w-0">
        <p className="eyebrow text-muted mb-4 flex items-center gap-3">
          <span className="text-accent tabular-nums">{index}</span>
          <span aria-hidden className="bg-rule-strong h-px w-8" />
          <span>{label}</span>
        </p>
        <h2
          id={id}
          className="font-heading tracking-display-tight leading-display text-ink font-bold text-balance"
          style={{ fontSize: SIZES[size] }}
        >
          {title}
        </h2>
      </div>
      {meta ? <div className="text-muted text-[13px]">{meta}</div> : null}
    </header>
  );
}
