import { BELIEFS } from '@/data/portfolio';

export function Beliefs() {
  return (
    <section id="beliefs" className="scroll-mt-24 bg-paper-deep border-y border-rule">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-28">
        <h2
          className="font-heading font-bold tracking-display leading-display text-ink"
          style={{ fontSize: 'clamp(40px, 5.5vw, 80px)' }}
        >
          Why hire me?
        </h2>
        <p className="font-serif text-[clamp(17px,1.6vw,22px)] leading-[1.45] text-ink-soft mt-5 max-w-[640px]">
          Because most engineers ship code. I ship outcomes — and I can explain
          them to your CFO.
        </p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
          {BELIEFS.map((belief, i) => (
            <div key={i} className="flex gap-6">
              <div
                className="font-heading font-bold text-accent shrink-0"
                style={{ fontSize: 'clamp(42px, 4vw, 60px)', letterSpacing: '-0.06em', lineHeight: 0.85 }}
                aria-hidden
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <p className="font-serif text-[clamp(16px,1.4vw,20px)] leading-[1.4] text-ink pt-1">
                {belief}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
