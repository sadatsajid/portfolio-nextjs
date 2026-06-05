import { METRICS } from '@/data/portfolio';

export function Metrics() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pb-20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10 pt-16 border-t border-rule">
        {METRICS.map(m => (
          <div key={m.label}>
            <div
              className="font-heading font-bold text-accent leading-none"
              style={{ fontSize: 'clamp(48px, 5vw, 72px)', letterSpacing: '-0.06em' }}
            >
              {m.value}
            </div>
            <div className="text-[14px] mt-2 text-ink-soft leading-tight">{m.label}</div>
            <div className="text-[12px] text-muted mt-1">{m.context}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
