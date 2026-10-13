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
  ARCHIVE,
  CLIENT_PROJECTS,
  FEATURED,
  PERSONAL_PROJECTS,
  type ClientProject,
  type FeaturedProject,
  type PersonalProject,
} from '@/data/portfolio';

import { SectionHeading } from './SectionHeading';

const MOBILE_QUERY = '(max-width: 767px)';

/** Side projects shown on phones before "Show all"; desktop always shows every card. */
const SIDE_PREVIEW_COUNT = 2;

function isMobileViewport() {
  return window.matchMedia(MOBILE_QUERY).matches;
}

function linkLabel(href: string) {
  if (href.startsWith('/notes/')) return 'Read case study';
  if (href.includes('github.com')) return 'View on GitHub';
  return 'Visit site';
}

function ProjectCard({
  p,
  className,
}: {
  p: ClientProject | PersonalProject;
  className?: string;
}) {
  const external = p.href ? !p.href.startsWith('/') : false;

  return (
    <article
      data-reveal
      className={clsx(
        className,
        'group bg-paper-deep relative flex flex-col gap-4 rounded-xs border border-transparent p-6 transition-[border-color,transform] duration-300',
        p.href &&
          'hover:border-rule-strong focus-within:border-rule-strong hover:-translate-y-0.5'
      )}
    >
      <div className="flex items-baseline justify-between gap-2">
        <h4 className="font-heading tracking-heading text-ink text-[20px] font-semibold">
          {p.title}
        </h4>
        <span className="text-muted shrink-0 text-[12px] tabular-nums">
          {p.year}
        </span>
      </div>

      <p className="text-ink-soft font-serif text-[15px] leading-normal">
        {p.tagline}
      </p>

      <ul className="text-muted flex-1 list-none space-y-1.5 ps-0 text-[13px] leading-[1.6]">
        {p.description.map(item => (
          <li
            key={item}
            className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-x-2"
          >
            <span
              className="bg-accent mt-[0.55em] block size-1 shrink-0 rounded-full"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <StackTags stack={p.stack} />

      <div className="border-rule flex items-center justify-between gap-3 border-t pt-4 text-[13px]">
        <span className="text-muted flex items-center gap-2">
          <span
            aria-hidden
            className={clsx(
              'h-1.5 w-1.5 rounded-full',
              p.status === 'live' ? 'bg-accent' : 'border-muted border'
            )}
          />
          {p.status === 'live' ? 'Live' : 'In development'}
        </span>
        {p.href ? (
          <a
            href={p.href}
            target={external ? '_blank' : undefined}
            rel={external ? 'noopener noreferrer' : undefined}
            className="text-accent font-heading tracking-heading font-semibold after:absolute after:inset-0 after:content-['']"
          >
            {linkLabel(p.href)}
            <span className="sr-only">: {p.title}</span>
            <span
              aria-hidden
              className="ml-1 inline-block transition-transform duration-200 group-hover:translate-x-0.5"
            >
              {external ? '↗' : '→'}
            </span>
          </a>
        ) : null}
      </div>
    </article>
  );
}

function StackTags({ stack }: { stack: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label="Stack">
      {stack.map(s => (
        <li
          key={s}
          className="bg-paper border-rule text-ink-soft rounded-xs border px-2 py-0.5 font-mono text-[11px]"
        >
          {s}
        </li>
      ))}
    </ul>
  );
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

      <div className="mt-6">
        <h4 className="eyebrow text-muted mb-2">Problem</h4>
        <p className="text-ink-soft font-serif text-[clamp(17px,1.5vw,22px)] leading-[1.4]">
          {project.tagline}
        </p>
      </div>

      <div className="border-accent mt-8 border-l-2 pl-5">
        <h4 className="eyebrow text-accent mb-2">Impact</h4>
        <p className="text-ink font-serif text-[16px] leading-[1.6]">
          {project.impact}
        </p>
      </div>

      <div className="mt-7">
        <h4 className="eyebrow text-muted mb-3">What I did</h4>
        <ul className="space-y-2.5">
          {project.contributions.map((c, j) => (
            <li key={j} className="flex gap-3 text-[14px] leading-[1.55]">
              <span className="text-accent shrink-0 pt-px text-[12px] tabular-nums">
                {String(j + 1).padStart(2, '0')}
              </span>
              <span className="text-ink-soft">{c}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-7">
        <h4 className="eyebrow text-muted mb-3">Stack</h4>
        <StackTags stack={project.stack} />
      </div>
    </article>
  );
}

export function Work() {
  const [active, setActive] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [showAllSide, setShowAllSide] = useState(false);
  const hiddenSideCount = PERSONAL_PROJECTS.length - SIDE_PREVIEW_COUNT;
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
      aria-labelledby="work-title"
      className="page-frame scroll-mt-24 py-24"
    >
      <SectionHeading
        id="work-title"
        index="01"
        label="Selected work"
        size="lg"
        title={
          <>
            Six projects I&apos;d point to
            <br />
            <span className="text-ink-soft">in an interview.</span>
          </>
        }
        meta={`${FEATURED.length} featured · ${ARCHIVE.length} in the archive`}
      />

      <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
        {/* Left: project list */}
        <ul data-reveal className="border-rule min-w-0 border-t md:col-span-5">
          {FEATURED.map((p, i) => (
            <li key={p.slug}>
              <button
                type="button"
                onClick={() => selectProject(i)}
                aria-pressed={i === active}
                aria-controls="project-detail"
                className={clsx(
                  'group border-rule relative -mx-4 w-[calc(100%+2rem)] cursor-pointer border-b px-4 py-5 text-left transition-colors',
                  i === active ? 'bg-paper-deep' : 'hover:bg-paper-deep/60'
                )}
              >
                <span
                  aria-hidden
                  className={clsx(
                    'bg-accent absolute inset-y-0 left-0 w-[3px] origin-top transition-transform duration-300 ease-(--ease-out-quint)',
                    i === active ? 'scale-y-100' : 'scale-y-0'
                  )}
                />
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
                        {p.kind} · {p.year} · {p.company}
                      </div>
                    </div>
                  </div>
                  <span
                    className={clsx(
                      'shrink-0 text-[16px] transition-[color,transform] duration-200',
                      i === active
                        ? 'text-accent translate-x-0.5'
                        : 'text-muted/50 group-hover:text-ink-soft'
                    )}
                    aria-hidden
                  >
                    →
                  </span>
                </div>
              </button>
            </li>
          ))}
        </ul>

        {/* Right: sticky detail — desktop only */}
        <div
          id="project-detail"
          className="hidden min-w-0 self-start md:sticky md:top-20 md:col-span-7 md:block"
        >
          {project && (
            <ProjectDetail
              key={project.slug}
              project={project}
              className="swap-in bg-paper-deep rounded-xs p-8 lg:p-10"
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

      {/* ── Client projects ─────────────────────────── */}
      <div className="border-rule mt-24 border-t pt-12">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h3
            data-reveal
            className="font-heading tracking-display-tight leading-display text-ink font-bold"
            style={{ fontSize: 'clamp(24px, 2.5vw, 36px)' }}
          >
            Client projects.
          </h3>
          <span className="text-muted text-[13px]">Freelance</span>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {CLIENT_PROJECTS.map(p => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
      </div>

      {/* ── Side projects ───────────────────────────── */}
      <div className="border-rule mt-16 border-t pt-12">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h3
            data-reveal
            className="font-heading tracking-display-tight leading-display text-ink font-bold"
            style={{ fontSize: 'clamp(24px, 2.5vw, 36px)' }}
          >
            Side projects.
          </h3>
          <span className="text-muted text-[13px]">
            Personal work · 2025-2026
          </span>
        </div>

        <div
          id="side-projects"
          className="grid grid-cols-1 gap-5 md:grid-cols-2"
        >
          {PERSONAL_PROJECTS.map((p, i) => (
            <ProjectCard
              key={p.title}
              p={p}
              className={clsx(
                !showAllSide && i >= SIDE_PREVIEW_COUNT && 'max-md:hidden!'
              )}
            />
          ))}
        </div>

        {hiddenSideCount > 0 && (
          <button
            type="button"
            onClick={() => setShowAllSide(v => !v)}
            aria-expanded={showAllSide}
            aria-controls="side-projects"
            className="border-rule-strong text-ink font-heading tracking-heading hover:border-ink mt-6 flex min-h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full border text-[15px] font-semibold transition-colors md:hidden"
          >
            {showAllSide
              ? 'Show fewer'
              : `Show ${hiddenSideCount} more side project${hiddenSideCount === 1 ? '' : 's'}`}
            <span
              aria-hidden
              className={clsx(
                'transition-transform duration-200',
                showAllSide && 'rotate-180'
              )}
            >
              ↓
            </span>
          </button>
        )}
      </div>
    </section>
  );
}
