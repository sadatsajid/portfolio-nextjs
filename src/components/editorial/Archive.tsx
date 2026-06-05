import { ARCHIVE, FEATURED } from '@/data/portfolio';

export function Archive() {
  const offset = FEATURED.length + 1;

  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-24">
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <h2
          className="font-heading font-bold tracking-display-tight leading-display text-ink"
          style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}
        >
          {ARCHIVE.length} more I&apos;m proud of.
        </h2>
        <span className="text-[13px] text-muted">2018 — 2025</span>
      </div>

      <div className="border-t border-rule">
        {ARCHIVE.map((item, i) => (
          <div
            key={item.title}
            className="flex items-baseline gap-4 lg:gap-6 py-4 border-b border-rule text-[13px] hover:bg-paper-deep/50 px-2 -mx-2 transition-colors"
          >
            <span className="text-muted tabular-nums w-7 shrink-0">
              {String(i + offset).padStart(2, '0')}
            </span>
            <span className="font-heading font-semibold text-[18px] tracking-heading text-ink w-[200px] lg:w-[260px] shrink-0">
              {item.title}
            </span>
            <span className="font-serif text-[14px] text-ink-soft flex-1 hidden md:block">
              {item.note}
            </span>
            <span className="text-muted w-20 text-right shrink-0">{item.kind}</span>
            <span className="text-muted tabular-nums w-10 text-right shrink-0">{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
