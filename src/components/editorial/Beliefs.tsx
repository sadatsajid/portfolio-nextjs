import { BELIEFS } from '@/data/portfolio';

import { SectionHeading } from './SectionHeading';

export function Beliefs() {
  return (
    <section
      id="beliefs"
      aria-labelledby="beliefs-title"
      className="bg-paper-deep border-rule scroll-mt-24 border-y"
    >
      <div className="page-frame py-28">
        <SectionHeading
          id="beliefs-title"
          index="04"
          label="Why me"
          size="lg"
          title="Why hire me?"
          className="mb-0! lg:mb-0!"
        />
        <p
          data-reveal
          className="text-ink-soft mt-5 max-w-160 font-serif text-[clamp(17px,1.6vw,22px)] leading-[1.45]"
        >
          Because most engineers ship code. I ship outcomes, and I can explain
          them to your CFO.
        </p>

        <ol className="mt-16 grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
          {BELIEFS.map((belief, i) => (
            <li
              key={i}
              data-reveal
              style={{ transitionDelay: `${(i % 2) * 90}ms` }}
              className="border-rule flex gap-6 border-t pt-8"
            >
              <div
                className="font-heading text-accent shrink-0 font-bold"
                style={{
                  fontSize: 'clamp(42px, 4vw, 60px)',
                  letterSpacing: '-0.06em',
                  lineHeight: 0.85,
                }}
                aria-hidden
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <p className="text-ink pt-1 font-serif text-[clamp(16px,1.4vw,20px)] leading-[1.4]">
                {belief}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
