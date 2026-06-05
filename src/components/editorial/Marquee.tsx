import { MARQUEE_ITEMS } from '@/data/portfolio';

export function Marquee() {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="bg-paper-deep py-6 overflow-hidden border-y border-rule">
      <div
        className="marquee-track flex whitespace-nowrap items-center gap-10 font-heading font-bold tracking-display-tight"
        style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
        aria-hidden
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-10 shrink-0">
            <span className="text-ink">{item}</span>
            <span className="text-accent">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
