'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

import { NOW } from '@/data/portfolio';

const NAV_LINKS = [
  { label: 'Work',     href: '/#work' },
  { label: 'Beliefs',  href: '/#beliefs' },
  { label: 'Writing',  href: '/#writing' },
  { label: 'Contact',  href: '/#contact' },
] as const;

export function EditorialNav() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0 });
  const [overflow, setOverflow] = useState({ left: false, right: false });

  useEffect(() => setMounted(true), []);

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
    dragRef.current = { active: true, startX: e.clientX, scrollLeft: el.scrollLeft };
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

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur-sm border-b border-rule">
      {/* Main bar */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 h-14 flex items-center justify-between gap-6">
        {/* Wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/"
            className="group flex items-center gap-3"
            aria-label="Asif Sadat — home"
          >
            <div
              className="w-7 h-7 rounded-full bg-accent flex items-center justify-center select-none"
              aria-hidden
            >
              <span className="font-heading font-bold text-paper text-[11px] tracking-heading">
                AS
              </span>
            </div>
            <span className="font-heading font-semibold text-[16px] tracking-heading transition-colors group-hover:text-accent">
              Asif Sadat
            </span>
          </Link>
          <span className="text-muted text-[13px] hidden md:inline">Staff Software Engineer</span>
        </div>

        {/* Nav links + toggle */}
        <nav className="flex items-center gap-5 text-[14px]">
          {NAV_LINKS.map(item => (
            <a
              key={item.href}
              href={item.href}
              className="text-ink-soft hover:text-ink transition-colors hidden sm:inline"
            >
              {item.label}
            </a>
          ))}

          {/* Theme toggle pill */}
          <button
            type="button"
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="relative ml-1 h-[22px] w-[42px] shrink-0 cursor-pointer overflow-hidden rounded-full bg-ink transition-colors duration-200"
          >
            <span
              className={clsx(
                'absolute top-[2px] left-[2px] h-[18px] w-[18px] rounded-full bg-paper transition-transform duration-200',
                isDark && 'translate-x-5'
              )}
            />
          </button>
        </nav>
      </div>

      {/* Now strip — swipe / drag to see the rest */}
      <div className="relative hidden border-t border-rule md:block">
        <div className="relative mx-auto max-w-[1200px]">
          <div
            ref={scrollerRef}
            onScroll={updateOverflow}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            className="hide-scrollbar cursor-grab touch-pan-x select-none overflow-x-auto overscroll-x-contain px-6 py-2 active:cursor-grabbing lg:px-10"
          >
            <div className="flex w-max items-center gap-4 text-[13px]">
              <div className="flex shrink-0 items-center gap-2">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
                <span className="text-muted">Now —</span>
              </div>
              {NOW.items.map((item, i) => (
                <span key={item.label} className="flex shrink-0 items-center gap-3">
                  {i > 0 && <span className="select-none text-rule" aria-hidden>·</span>}
                  <span className="font-medium text-accent">{item.label}</span>
                  <span className="text-ink-soft">{item.text}</span>
                </span>
              ))}
            </div>
          </div>
          <div
            aria-hidden
            className={clsx(
              'pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-paper to-transparent transition-opacity',
              overflow.left ? 'opacity-100' : 'opacity-0'
            )}
          />
          <div
            aria-hidden
            className={clsx(
              'pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-paper to-transparent transition-opacity',
              overflow.right ? 'opacity-100' : 'opacity-0'
            )}
          />
        </div>
      </div>
    </header>
  );
}
