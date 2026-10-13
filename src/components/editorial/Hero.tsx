import type { CSSProperties } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { CONTACT } from '@/data/portfolio';

const delay = (ms: number) => ({ '--rise-delay': `${ms}ms` }) as CSSProperties;

function HeroActions({ className }: { className?: string }) {
  return (
    <div className={className}>
      <a
        href={`mailto:${CONTACT.email}`}
        className="group bg-accent text-paper font-heading tracking-heading inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-[transform,box-shadow] duration-200 hover:shadow-[0_10px_30px_-10px_var(--accent)] active:scale-[0.98]"
      >
        Email me about a role
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        >
          →
        </span>
      </a>
      <Link
        href="/#work"
        className="group border-rule-strong text-ink font-heading tracking-heading hover:border-ink inline-flex min-h-12 items-center justify-center gap-2 rounded-full border px-6 text-[15px] font-semibold transition-colors"
      >
        See the work
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-y-0.5"
        >
          ↓
        </span>
      </Link>
    </div>
  );
}

export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="page-frame pt-14 pb-20 lg:pt-20 lg:pb-24"
    >
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-10">
        <aside className="rise-fade order-first flex min-w-0 items-center gap-4 lg:order-last lg:col-span-3 lg:flex-col lg:items-stretch lg:gap-6">
          <div className="relative aspect-square h-20 w-20 shrink-0 overflow-hidden rounded-full sm:h-24 sm:w-24 lg:h-auto lg:w-full">
            <Image
              src="/assets/blog/authors/asif-sadat.jpeg"
              alt="Portrait of Asif Sadat"
              fill
              className="object-cover"
              style={{ filter: 'grayscale(15%) contrast(1.02)' }}
              priority
              sizes="(min-width: 1024px) 280px, 96px"
            />
          </div>

          {/* Identity — who, where, and whether he's available, before the claim. */}
          <dl className="lg:border-rule text-[13px] leading-snug lg:grid lg:grid-cols-[auto_1fr] lg:gap-x-4 lg:gap-y-2 lg:border-t lg:pt-5">
            <dt className="lg:text-muted sr-only lg:not-sr-only">Name</dt>
            <dd className="font-heading tracking-heading text-ink text-[16px] font-semibold lg:text-[13px] lg:font-medium">
              Asif Sadat
            </dd>
            <dt className="lg:text-muted sr-only lg:not-sr-only">Role</dt>
            <dd className="text-ink-soft">{CONTACT.role}</dd>
            <dt className="text-muted hidden lg:block">Based</dt>
            <dd className="text-ink-soft hidden lg:block">
              {CONTACT.location}
            </dd>
            <dt className="lg:text-muted sr-only lg:not-sr-only">Status</dt>
            <dd className="text-ink-soft mt-1 flex items-center gap-2 lg:mt-0">
              <span aria-hidden className="relative flex h-2 w-2">
                <span className="bg-accent absolute inline-flex h-full w-full rounded-full opacity-60 motion-safe:animate-ping" />
                <span className="bg-accent relative inline-flex h-2 w-2 rounded-full" />
              </span>
              Open to remote roles
            </dd>
          </dl>
        </aside>

        <div className="flex min-w-0 flex-col lg:col-span-9">
          <h1
            id="hero-title"
            className="rise font-heading tracking-display text-ink font-bold"
            style={{ fontSize: 'clamp(46px, 6.4vw, 96px)', lineHeight: 0.98 }}
          >
            I turn business
            <br />
            problems into
            <br />
            <span className="text-accent lg:whitespace-nowrap">
              shipped software.
            </span>
          </h1>

          <p
            className="rise-fade text-ink-soft mt-8 max-w-155 font-serif text-[clamp(17px,1.6vw,22px)] leading-normal lg:mt-10"
            style={delay(120)}
          >
            Staff engineer, full-stack from React to .NET, and quiet operator.
            Seven years building back-office systems, sales engines, and AI
            tools that move metrics, not just merge requests. I read the P&L
            before the PRD, and I run code reviews that start with{' '}
            <em className="text-accent not-italic">
              &ldquo;what is this trying to do for the business?&rdquo;
            </em>
          </p>

          <div className="rise-fade" style={delay(220)}>
            <HeroActions className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap" />
          </div>
        </div>
      </div>
    </section>
  );
}
