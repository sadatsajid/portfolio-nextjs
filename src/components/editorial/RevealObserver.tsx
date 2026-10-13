'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Opts the page into scroll-reveal once JS is running, then marks each
 * `[data-reveal]` element as revealed when it enters the viewport.
 * Without JS (or with reduced motion) everything simply renders visible.
 */
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>(
        '[data-reveal]:not([data-revealed])'
      )
    );

    // Anything already on screen is revealed before the class lands, so the
    // first paint never flickers out.
    const fold = window.innerHeight * 0.95;
    for (const el of targets) {
      if (el.getBoundingClientRect().top < fold)
        el.setAttribute('data-revealed', '');
    }
    root.classList.add('reveal-ready');

    const io = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.setAttribute('data-revealed', '');
          io.unobserve(entry.target);
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.05 }
    );
    for (const el of targets) {
      if (!el.hasAttribute('data-revealed')) io.observe(el);
    }
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
