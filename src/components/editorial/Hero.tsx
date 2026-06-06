import Image from 'next/image';

import { CONTACT } from '@/data/portfolio';

export function Hero() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pt-20 pb-16 lg:px-10">
      <div className="grid grid-cols-12 items-start gap-8 lg:gap-10">
        {/* Left: headline + sub-text + CTA all in one natural column */}
        <div className="col-span-12 flex flex-col lg:col-span-9">
          <h1
            className="font-heading tracking-display leading-display text-ink font-bold"
            style={{ fontSize: 'clamp(52px, 7.5vw, 108px)' }}
          >
            I turn business
            <br />
            problems into
            <br />
            <span className="text-accent">shipped software.</span>
          </h1>

          <p className="text-ink-soft mt-10 max-w-[620px] font-serif text-[clamp(17px,1.6vw,22px)] leading-normal">
            Staff engineer, frontend lead, and quiet operator. Seven years
            building back-office systems, sales engines, and AI tools that move
            metrics — not just merge requests. I read the P&L before the PRD,
            and I run code reviews that start with{' '}
            <em className="text-accent not-italic">
              &ldquo;what is this trying to do for the business?&rdquo;
            </em>
          </p>

        </div>

        {/* Right: portrait + CTA */}
        <aside className="col-span-3 hidden lg:flex lg:flex-col lg:items-center lg:gap-6">
          <div
            className="relative w-full overflow-hidden rounded-full"
            style={{ aspectRatio: '1/1' }}
          >
            <Image
              src="/assets/blog/authors/asif-sadat.jpeg"
              alt="Asif Sadat"
              fill
              className="object-cover"
              style={{ filter: 'grayscale(15%) contrast(1.02)' }}
              priority
              sizes="(min-width: 1024px) 280px, 0px"
            />
          </div>

          <div className="flex flex-col items-center gap-3 w-full">
            <a
              href={`mailto:${CONTACT.email}`}
              className="bg-accent text-paper font-heading tracking-heading inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[14px] font-semibold transition-transform hover:scale-[1.02]"
            >
              Email me about a role
              <span aria-hidden>→</span>
            </a>
            <a
              href="/#work"
              className="text-muted hover:text-ink-soft text-[13px] underline underline-offset-2 transition-colors"
            >
              or skim the work first
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
