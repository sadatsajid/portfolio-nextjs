'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { FEATURED, PERSONAL_PROJECTS } from '@/data/portfolio';

export function Work() {
  const [active, setActive] = useState(0);
  const project = FEATURED[active];

  return (
    <section
      id="work"
      className="scroll-mt-24 max-w-[1200px] mx-auto px-6 lg:px-10 py-24"
    >
      <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
        <h2
          className="font-heading font-bold tracking-display-tight leading-display text-ink"
          style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
        >
          Six projects I&apos;d point to
          <br />
          <span className="text-ink-soft">in an interview.</span>
        </h2>
        <span className="text-[13px] text-muted">
          {FEATURED.length} featured · {11} in the archive
        </span>
      </div>

      <div className="grid grid-cols-12 gap-10">
        {/* Left: project list */}
        <div className="col-span-12 md:col-span-5">
          {FEATURED.map((p, i) => (
            <button
              key={p.slug}
              onClick={() => setActive(i)}
              className={clsx(
                'w-full text-left py-5 px-4 -mx-4 border-b border-rule transition-colors',
                i === active ? 'bg-paper-deep' : 'hover:bg-paper-deep/60'
              )}
            >
              <div className="flex items-baseline justify-between gap-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-[12px] text-muted tabular-nums w-6 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="font-heading font-semibold text-[22px] tracking-heading text-ink">
                      {p.title}
                    </div>
                    <div className="text-[13px] text-muted mt-1">
                      {p.year} · {p.company}
                    </div>
                  </div>
                </div>
                <span
                  className={clsx(
                    'text-[16px] transition-colors shrink-0',
                    i === active ? 'text-accent' : 'text-rule'
                  )}
                  aria-hidden
                >
                  ↗
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Right: sticky detail */}
        <div className="col-span-12 md:col-span-7 md:sticky md:top-[100px] self-start">
          {project && (
            <article className="bg-paper-deep p-8 lg:p-10 rounded-[2px]">
              <div className="flex items-center gap-3 text-[13px] text-muted flex-wrap">
                <span>{project.kind}</span>
                <span aria-hidden>·</span>
                <span>{project.year}</span>
                <span className="ml-auto">{project.company}</span>
              </div>

              <h3
                className="font-heading font-bold tracking-display leading-display text-ink mt-5"
                style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}
              >
                {project.title}
              </h3>
              <div className="text-[13px] text-muted mt-2">{project.role}</div>

              <p className="font-serif text-[clamp(17px,1.5vw,22px)] leading-[1.4] mt-6 text-ink-soft">
                &ldquo;{project.tagline}&rdquo;
              </p>

              <div className="mt-8">
                <div className="text-[12px] font-heading font-semibold tracking-heading text-accent mb-3">
                  Impact
                </div>
                <p className="font-serif text-[16px] leading-[1.6] text-ink">
                  {project.impact}
                </p>
              </div>

              <div className="mt-7">
                <div className="text-[12px] font-heading font-semibold tracking-heading text-accent mb-3">
                  What I did
                </div>
                <ul className="space-y-2.5">
                  {project.contributions.map((c, j) => (
                    <li key={j} className="flex gap-3 text-[14px] leading-[1.55]">
                      <span className="text-accent shrink-0 tabular-nums">
                        {String(j + 1).padStart(2, '0')}
                      </span>
                      <span className="text-ink-soft">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-7">
                <div className="text-[12px] font-heading font-semibold tracking-heading text-muted mb-2">
                  Stack
                </div>
                <div className="text-[14px] text-ink-soft">
                  {project.stack.map((s, j) => (
                    <span key={s}>
                      {s}
                      {j < project.stack.length - 1 && (
                        <span className="text-muted mx-2" aria-hidden>·</span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          )}
        </div>
      </div>

      {/* ── Side projects ───────────────────────────── */}
      <div className="mt-24 pt-12 border-t border-rule">
        <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
          <h3
            className="font-heading font-bold tracking-display-tight leading-display text-ink"
            style={{ fontSize: 'clamp(24px, 2.5vw, 36px)' }}
          >
            Side projects.
          </h3>
          <span className="text-[13px] text-muted">Personal work · 2025</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PERSONAL_PROJECTS.map(p => (
            <div
              key={p.title}
              className="bg-paper-deep p-6 rounded-[2px] flex flex-col gap-4"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-heading font-semibold text-[20px] tracking-heading text-ink">
                  {p.title}
                </span>
                <span className="text-[12px] text-muted shrink-0">{p.year}</span>
              </div>

              <p className="font-serif text-[15px] leading-[1.5] text-ink-soft">
                {p.tagline}
              </p>

              <p className="text-[13px] leading-[1.6] text-muted flex-1">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.stack.map(s => (
                  <span
                    key={s}
                    className="font-mono text-[11px] px-2 py-0.5 bg-paper rounded-[2px] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="text-[12px]">
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent underline underline-offset-2 hover:text-ink transition-colors"
                  >
                    Visit site →
                  </a>
                ) : (
                  <span className="text-muted">In development</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
