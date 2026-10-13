'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import {
  CloseButton,
  Popover,
  PopoverBackdrop,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react';
import clsx from 'clsx';
import { useTheme } from 'next-themes';

import { CONTACT, NOW } from '@/data/portfolio';

const NAV_LINKS = [
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'beliefs', label: 'Why me' },
  { id: 'writing', label: 'Writing' },
  { id: 'contact', label: 'Contact' },
] as const;

type SectionId = (typeof NAV_LINKS)[number]['id'];

/** Tracks which homepage section sits under the header. */
function useActiveSection(enabled: boolean) {
  const [active, setActive] = useState<SectionId | null>(null);

  useEffect(() => {
    if (!enabled) {
      setActive(null);
      return;
    }
    const sections = NAV_LINKS.map(l => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    const visible = new Map<string, number>();

    const io = new IntersectionObserver(
      entries => {
        for (const e of entries) {
          if (e.isIntersecting)
            visible.set(e.target.id, e.boundingClientRect.top);
          else visible.delete(e.target.id);
        }
        // The topmost intersecting section wins.
        let best: string | null = null;
        let bestTop = Infinity;
        for (const [id, top] of visible) {
          if (top < bestTop) {
            best = id;
            bestTop = top;
          }
        }
        setActive(best as SectionId | null);
      },
      // A band just below the sticky header.
      { rootMargin: '-96px 0px -55% 0px' }
    );
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, [enabled]);

  return active;
}

function useScrolled(threshold: number) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [threshold]);
  return scrolled;
}

function ThemeSwitch({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Dark mode"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={clsx(
        'group relative grid h-11 w-12 shrink-0 cursor-pointer place-items-center rounded-full',
        className
      )}
    >
      <span className="bg-ink relative h-[22px] w-[42px] rounded-full transition-colors duration-200">
        <span
          className={clsx(
            'bg-paper absolute top-[2px] left-[2px] grid h-[18px] w-[18px] place-items-center rounded-full transition-transform duration-300 ease-(--ease-out-quint)',
            isDark && 'translate-x-5'
          )}
        >
          <span
            aria-hidden
            className={clsx(
              'block h-2 w-2 rounded-full transition-colors',
              isDark ? 'bg-accent' : 'bg-ink/25'
            )}
          />
        </span>
      </span>
    </button>
  );
}

function NowStrip() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const [overflow, setOverflow] = useState({ left: false, right: false });

  const updateOverflow = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setOverflow({
      left: el.scrollLeft > 4,
      right: el.scrollLeft + el.clientWidth < el.scrollWidth - 4,
    });
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateOverflow();
    const ro = new ResizeObserver(updateOverflow);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== 'mouse') return;
    const el = scrollerRef.current;
    if (!el) return;
    dragRef.current = {
      active: true,
      startX: e.clientX,
      scrollLeft: el.scrollLeft,
    };
    el.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active || !scrollerRef.current) return;
    scrollerRef.current.scrollLeft =
      dragRef.current.scrollLeft - (e.clientX - dragRef.current.startX);
  };

  const onPointerUp = () => {
    dragRef.current.active = false;
  };

  return (
    <div className="relative mx-auto max-w-300">
      <div
        ref={scrollerRef}
        onScroll={updateOverflow}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="hide-scrollbar cursor-grab touch-pan-x overflow-x-auto overscroll-x-contain px-6 py-2 select-none active:cursor-grabbing lg:px-10"
      >
        <p className="flex w-max items-center gap-4 text-[13px]">
          <span className="flex shrink-0 items-center gap-2">
            <span
              aria-hidden
              className="bg-accent h-1.5 w-1.5 rounded-full motion-safe:animate-pulse"
            />
            <span className="text-muted">Now:</span>
          </span>
          {NOW.items.map((item, i) => (
            <span key={item.label} className="flex shrink-0 items-center gap-3">
              {i > 0 && (
                <span className="text-rule-strong select-none" aria-hidden>
                  ·
                </span>
              )}
              <span className="text-accent font-medium">{item.label}</span>
              <span className="text-ink-soft">{item.text}</span>
            </span>
          ))}
        </p>
      </div>
      <div
        aria-hidden
        className={clsx(
          'from-paper pointer-events-none absolute inset-y-0 left-0 w-10 bg-linear-to-r to-transparent transition-opacity',
          overflow.left ? 'opacity-100' : 'opacity-0'
        )}
      />
      <div
        aria-hidden
        className={clsx(
          'from-paper pointer-events-none absolute inset-y-0 right-0 w-10 bg-linear-to-l to-transparent transition-opacity',
          overflow.right ? 'opacity-100' : 'opacity-0'
        )}
      />
    </div>
  );
}

function MobileMenu({ active }: { active: SectionId | null }) {
  return (
    <Popover className="md:hidden">
      <PopoverButton
        aria-label="Open menu"
        className="text-ink group grid h-11 w-11 cursor-pointer place-items-center rounded-full"
      >
        <span aria-hidden className="relative block h-3 w-5">
          <span className="absolute top-0 left-0 h-[1.5px] w-5 bg-current transition-transform duration-200 group-data-open:translate-y-[5.25px] group-data-open:rotate-45" />
          <span className="absolute bottom-0 left-0 h-[1.5px] w-5 bg-current transition-transform duration-200 group-data-open:-translate-y-[5.25px] group-data-open:-rotate-45" />
        </span>
      </PopoverButton>

      {/* The header's backdrop-filter is the containing block for these
          fixed layers, so sizes are explicit rather than inset-0. */}
      <PopoverBackdrop
        transition
        className="bg-ink/30 fixed inset-x-0 top-14 z-30 h-dvh duration-200 ease-out data-closed:opacity-0 dark:bg-black/60"
      />
      <PopoverPanel
        transition
        className="border-rule bg-paper fixed inset-x-0 top-14 z-40 origin-top border-b px-6 pt-2 pb-8 shadow-[0_24px_48px_-24px_rgb(0_0_0/0.25)] duration-200 ease-out data-closed:-translate-y-2 data-closed:opacity-0"
      >
        <nav aria-label="Primary">
          <ul>
            {NAV_LINKS.map((item, i) => (
              <li key={item.id} className="border-rule border-b">
                <CloseButton
                  as={Link}
                  href={`/#${item.id}`}
                  aria-current={active === item.id ? 'true' : undefined}
                  className="font-heading tracking-heading text-ink aria-[current]:text-accent flex min-h-14 items-center justify-between text-[24px] font-semibold"
                >
                  {item.label}
                  <span className="text-muted text-[12px] tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </CloseButton>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={`mailto:${CONTACT.email}`}
          className="bg-accent text-paper font-heading tracking-heading mt-8 flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-[15px] font-semibold"
        >
          Email me about a role <span aria-hidden>→</span>
        </a>
      </PopoverPanel>
    </Popover>
  );
}

export function EditorialNav() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const active = useActiveSection(isHome);
  const scrolled = useScrolled(160);

  return (
    <header
      className={clsx(
        'bg-paper/85 sticky top-0 z-40 border-b backdrop-blur-md transition-[border-color,box-shadow] duration-300',
        scrolled
          ? 'border-rule shadow-[0_8px_24px_-16px_rgb(0_0_0/0.18)]'
          : 'border-rule'
      )}
    >
      <div className="page-frame flex h-14 items-center justify-between gap-6">
        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Asif Sadat, home"
          >
            <span
              className="bg-accent grid h-7 w-7 place-items-center rounded-full transition-transform duration-300 select-none group-hover:rotate-[-8deg]"
              aria-hidden
            >
              <span className="font-heading text-paper tracking-heading text-[11px] font-bold">
                AS
              </span>
            </span>
            <span className="font-heading tracking-heading group-hover:text-accent text-[16px] font-semibold transition-colors">
              Asif Sadat
            </span>
          </Link>
          <span className="text-muted hidden text-[13px] lg:inline">
            Staff Software Engineer
          </span>
        </div>

        <div className="flex items-center gap-1 md:gap-2">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1 text-[14px]">
              {NAV_LINKS.map(item => {
                const isActive = active === item.id;
                return (
                  <li key={item.id}>
                    <Link
                      href={`/#${item.id}`}
                      aria-current={isActive ? 'true' : undefined}
                      className={clsx(
                        'relative inline-flex h-11 items-center px-3 transition-colors',
                        isActive ? 'text-ink' : 'text-ink-soft hover:text-ink'
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden
                        className={clsx(
                          'bg-accent absolute inset-x-3 bottom-2 h-[2px] origin-left transition-transform duration-300 ease-(--ease-out-quint)',
                          isActive ? 'scale-x-100' : 'scale-x-0'
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <ThemeSwitch />
          <MobileMenu active={active} />
        </div>
      </div>

      {/* Now strip collapses once the reader is past the hero. */}
      <div
        className={clsx(
          'hidden transition-[grid-template-rows,opacity] duration-300 ease-(--ease-out-quint) md:grid',
          scrolled ? 'grid-rows-[0fr] opacity-0' : 'grid-rows-[1fr] opacity-100'
        )}
        aria-hidden={scrolled || undefined}
        inert={scrolled || undefined}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-rule border-t">
            <NowStrip />
          </div>
        </div>
      </div>
    </header>
  );
}
