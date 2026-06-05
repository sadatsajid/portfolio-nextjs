import { ESSAYS } from '@/data/portfolio';

export function Writing() {
  return (
    <section id="writing" className="scroll-mt-24 bg-paper-deep border-y border-rule">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <h2
            className="font-heading font-bold tracking-display-tight leading-display text-ink"
            style={{ fontSize: 'clamp(28px, 3vw, 44px)' }}
          >
            Things I&apos;ve written down.
          </h2>
          <span className="text-[13px] text-muted">More coming soon</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-rule">
          {ESSAYS.map(essay => (
            <div key={essay.title} className="p-6 lg:p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="text-[12px] font-heading font-semibold tracking-heading text-accent">
                  {essay.kind}
                </span>
                <span className="text-[12px] text-muted">{essay.read}</span>
              </div>
              <h3 className="font-heading font-semibold text-[20px] tracking-heading leading-[1.2] text-ink mb-10">
                {essay.title}
              </h3>
              <div className="flex items-center justify-between text-[12px] text-muted">
                <span>{essay.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
