'use client';

import { useEffect, useState } from 'react';

import {
  CloseButton,
  Dialog,
  DialogBackdrop,
  DialogPanel,
} from '@headlessui/react';
import clsx from 'clsx';

import { CloseIcon } from '@/components/icons/CloseIcon';
import {
  FEATURED,
  PERSONAL_PROJECTS,
  type FeaturedProject,
} from '@/data/portfolio';

const MOBILE_QUERY = '(max-width: 767px)';

function isMobileViewport() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

function ProjectDetail({
  project,
  className,
}: {
  project: FeaturedProject;
  className?: string;
}) {
  return (
    <article className={className}>
      <div className="text-muted flex flex-wrap items-center gap-3 text-[13px]">
        <span>{project.kind}</span>
        <span aria-hidden>·</span>
        <span>{project.year}</span>
        <span className="ml-auto">{project.company}</span>
      </div>

      <h3
        className="font-heading tracking-display leading-display text-ink mt-5 font-bold"
        style={{ fontSize: 'clamp(32px, 3.5vw, 48px)' }}
      >
        {project.title}
      </h3>
      <div className="text-muted mt-2 text-[13px]">{project.role}</div>

      <p className="text-ink-soft mt-6 font-serif text-[clamp(17px,1.5vw,22px)] leading-[1.4]">
        &ldquo;{project.tagline}&rdquo;
      </p>

      <div className="mt-8">
        <div className="font-heading tracking-heading text-accent mb-3 text-[12px] font-semibold">
          Impact
        </div>
        <p className="text-ink font-serif text-[16px] leading-[1.6]">
          {project.impact}
        </p>
      </div>

      <div className="mt-7">
        <div className="font-heading tracking-heading text-accent mb-3 text-[12px] font-semibold">
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
        <div className="font-heading tracking-heading text-muted mb-2 text-[12px] font-semibold">
          Stack
        </div>
        <div className="text-ink-soft text-[14px]">
          {project.stack.map((s, j) => (
            <span key={s}>
              {s}
              {j < project.stack.length - 1 && (
                <span className="text-muted mx-2" aria-hidden>
                  ·
                </span>
              )}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Work() {
  const [active, setActive] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const project = FEATURED[active];

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY);
    const closeOnDesktop = () => {
      if (!mq.matches) setDrawerOpen(false);
    };
    closeOnDesktop();
    mq.addEventListener('change', closeOnDesktop);
    return () => mq.removeEventListener('change', closeOnDesktop);
  }, []);

  const selectProject = (index: number) => {
    setActive(index);
    if (isMobileViewport()) setDrawerOpen(true);
  };

  return (
    <section
      id="work"
      className="mx-auto max-w-[1200px] scroll-mt-24 px-6 py-24 lg:px-10"
    >
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <h2
          className="font-heading tracking-display-tight leading-display text-ink font-bold"
          style={{ fontSize: 'clamp(36px, 4.5vw, 64px)' }}
        >
          Six projects I&apos;d point to
          <br />
          <span className="text-ink-soft">in an interview.</span>
        </h2>
        <span className="text-muted text-[13px]">
          {FEATURED.length} featured · {11} in the archive
        </span>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        {/* Left: project list */}
        <div className="min-w-0 md:col-span-5">
          {FEATURED.map((p, i) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => selectProject(i)}
              className={clsx(
                'border-rule -mx-4 w-full cursor-pointer border-b px-4 py-5 text-left transition-colors',
                i === active ? 'bg-paper-deep' : 'hover:bg-paper-deep/60'
              )}
            >
              <div className="flex items-baseline justify-between gap-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-muted w-6 shrink-0 text-[12px] tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <div className="font-heading tracking-heading text-ink text-[22px] font-semibold">
                      {p.title}
                    </div>
                    <div className="text-muted mt-1 text-[13px]">
                      {p.year} · {p.company}
                    </div>
                  </div>
                </div>
                <span
                  className={clsx(
                    'shrink-0 text-[16px] transition-colors',
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

        {/* Right: sticky detail — desktop only */}
        <div className="hidden min-w-0 self-start md:sticky md:top-[100px] md:col-span-7 md:block">
          {project && (
            <ProjectDetail
              project={project}
              className="bg-paper-deep rounded-[2px] p-8 lg:p-10"
            />
          )}
        </div>
      </div>

      {project && (
        <Dialog
          open={drawerOpen}
          onClose={setDrawerOpen}
          className="relative z-50 md:hidden"
          aria-label={`${project.title} project details`}
        >
          <DialogBackdrop
            transition
            className="bg-ink/45 fixed inset-0 duration-200 ease-out data-closed:opacity-0 dark:bg-black/70"
          />
          <div className="fixed inset-0 flex justify-end overflow-hidden">
            <DialogPanel
              transition
              className="border-rule bg-paper-deep flex h-full w-[88vw] flex-col overflow-y-auto overscroll-contain border-l duration-200 ease-out data-closed:translate-x-full"
            >
              <div className="border-rule bg-paper-deep sticky top-0 z-10 flex items-center justify-end border-b px-4 py-3">
                <CloseButton
                  aria-label="Close project details"
                  className="text-muted hover:text-ink cursor-pointer p-1.5 transition-colors"
                >
                  <CloseIcon className="h-5 w-5" />
                </CloseButton>
              </div>
              <ProjectDetail project={project} className="px-6 pb-10" />
            </DialogPanel>
          </div>
        </Dialog>
      )}

      {/* ── Side projects ───────────────────────────── */}
      <div className="border-rule mt-24 border-t pt-12">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h3
            className="font-heading tracking-display-tight leading-display text-ink font-bold"
            style={{ fontSize: 'clamp(24px, 2.5vw, 36px)' }}
          >
            Side projects.
          </h3>
          <span className="text-muted text-[13px]">
            Personal work · 2025 — 2026
          </span>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {PERSONAL_PROJECTS.map(p => (
            <div
              key={p.title}
              className="bg-paper-deep flex flex-col gap-4 rounded-[2px] p-6"
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="font-heading tracking-heading text-ink text-[20px] font-semibold">
                  {p.title}
                </span>
                <span className="text-muted shrink-0 text-[12px]">
                  {p.year}
                </span>
              </div>

              <p className="text-ink-soft font-serif text-[15px] leading-[1.5]">
                {p.tagline}
              </p>

              <p className="text-muted flex-1 text-[13px] leading-[1.6]">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.stack.map(s => (
                  <span
                    key={s}
                    className="bg-paper text-muted rounded-[2px] px-2 py-0.5 font-mono text-[11px]"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between gap-3 text-[12px]">
                <span className="text-muted">
                  {p.status === 'live' ? 'Live' : 'In development'}
                </span>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-ink cursor-pointer underline underline-offset-2 transition-colors"
                  >
                    GitHub →
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
