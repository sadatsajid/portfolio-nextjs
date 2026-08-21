import { SKILLS } from '@/data/portfolio';

export function Toolkit() {
  const entries = Object.entries(SKILLS);

  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24">
      <h2
        className="font-heading font-bold tracking-display-tight leading-display text-ink mb-14"
        style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}
      >
        The tools I reach for first.
      </h2>

      <div className="space-y-7">
        {entries.map(([category, items]) => (
          <div
            key={category}
            className="grid grid-cols-1 items-baseline gap-2 border-b border-rule pb-6 lg:grid-cols-12 lg:gap-6"
          >
            <div className="lg:col-span-3">
              <span
                className={`font-heading font-semibold text-[15px] tracking-heading ${
                  category === 'Currently learning' ? 'text-accent' : 'text-ink-soft'
                }`}
              >
                {category === 'Currently learning' && <span aria-hidden>↗ </span>}
                {category}
              </span>
            </div>
            <div className="flex min-w-0 flex-wrap items-baseline gap-x-2.5 gap-y-1 text-[17px] leading-[1.55] text-ink-soft lg:col-span-9">
              {items.map((s, j) => (
                <span key={s} className="inline-flex items-baseline gap-2.5">
                  {j > 0 ? (
                    <span className="text-muted" aria-hidden>
                      ·
                    </span>
                  ) : null}
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
