import Image from 'next/image';

import { CONTACT } from '@/data/portfolio';

export function Hero() {
  return (
    <section className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-20 pb-16">
      {/* Headline + portrait */}
      <div className="grid grid-cols-12 gap-8 lg:gap-10 items-start">
        <div className="col-span-12 lg:col-span-9">
          <h1
            className="font-heading font-bold tracking-display leading-display text-ink"
            style={{ fontSize: 'clamp(52px, 7.5vw, 108px)' }}
          >
            I turn business
            <br />
            problems into
            <br />
            <span className="text-accent">shipped software.</span>
          </h1>
        </div>

        <aside className="hidden lg:block col-span-3">
          <div className="relative w-full overflow-hidden rounded-[2px]" style={{ aspectRatio: '3/4' }}>
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
        </aside>
      </div>

      {/* Sub-text + CTA */}
      <div className="mt-12 grid grid-cols-12 gap-8 lg:gap-10 items-end">
        <p className="col-span-12 md:col-span-7 font-serif text-[clamp(17px,1.6vw,22px)] leading-[1.5] text-ink-soft">
          Staff engineer, frontend lead, and quiet operator. Seven years building
          back-office systems, sales engines, and AI tools that move metrics —
          not just merge requests. I read the P&L before the PRD, and I run code
          reviews that start with{' '}
          <em className="text-accent not-italic">
            "what is this trying to do for the business?"
          </em>
        </p>

        <div className="col-span-12 md:col-span-5 flex flex-col items-start gap-3">
          <a
            href={`mailto:${CONTACT.email}`}
            className="bg-accent text-paper font-heading font-semibold text-[15px] tracking-heading px-6 py-4 rounded-full inline-flex items-center gap-3 hover:scale-[1.02] transition-transform"
          >
            Email me about a role
            <span aria-hidden>→</span>
          </a>
          <a
            href="/#work"
            className="text-[14px] text-muted ml-2 underline underline-offset-2 hover:text-ink-soft transition-colors"
          >
            or skim the work first
          </a>
        </div>
      </div>
    </section>
  );
}
