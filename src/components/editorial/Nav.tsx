'use client';

import { useEffect, useState } from 'react';
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
  useEffect(() => setMounted(true), []);

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

      {/* Now strip — hidden on mobile */}
      <div className="hidden md:block border-t border-rule">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-2 flex items-center gap-4 text-[13px] overflow-x-auto hide-scrollbar">
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-muted">Now —</span>
          </div>
          {NOW.items.map((item, i) => (
            <span key={item.label} className="flex items-center gap-3 shrink-0">
              {i > 0 && <span className="text-rule select-none" aria-hidden>·</span>}
              <span className="text-accent font-medium">{item.label}</span>
              <span className="text-ink-soft">{item.text}</span>
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
