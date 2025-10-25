'use client';
import React, { useEffect, useState } from 'react';

import { MoonIcon } from './icons/MoonIcon';
import { SunIcon } from './icons/SunIcon';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <button
          type="button"
          aria-label="Toggle dark mode"
          className="group rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <SunIcon className="[@media(prefers-color-scheme:dark)]:stroke-primary [@media(prefers-color-scheme:dark)]:group-hover:stroke-primary-dark h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden [@media(prefers-color-scheme:dark)]:fill-teal-50 [@media(prefers-color-scheme:dark)]:group-hover:fill-teal-50" />
          <MoonIcon className="[@media_not_(prefers-color-scheme:dark)]:stroke-primary hidden h-6 w-6 fill-zinc-700 stroke-zinc-500 transition dark:block [@media_not_(prefers-color-scheme:dark)]:fill-teal-400/10 [@media(prefers-color-scheme:dark)]:group-hover:stroke-zinc-400" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
