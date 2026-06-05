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
            className="grid grid-cols-12 gap-6 pb-6 border-b border-rule items-baseline"
          >
            <div className="col-span-12 md:col-span-3">
              <span
                className={`font-heading font-semibold text-[15px] tracking-heading ${
                  category === 'Currently learning' ? 'text-accent' : 'text-ink-soft'
                }`}
              >
                {category === 'Currently learning' && <span aria-hidden>↗ </span>}
                {category}
              </span>
            </div>
            <div className="col-span-12 md:col-span-9 text-[17px] text-ink-soft leading-[1.55]">
              {items.map((s, j) => (
                <span key={s}>
                  {s}
                  {j < items.length - 1 && (
                    <span className="text-muted mx-2.5" aria-hidden>·</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
