'use client';
import React, { useEffect, useState } from 'react';

import { MoonIcon } from './icons/MoonIcon';
import { SunIcon } from './icons/SunIcon';
import { AnimatePresence, motion } from 'motion/react';
import { useTheme } from 'next-themes';

export const ThemeToggle = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="relative z-[60]"
      >
        <button
          type="button"
          aria-label="Toggle dark mode"
          className="group cursor-pointer rounded-full bg-white/90 px-3 py-2 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur transition-all duration-200 hover:bg-white hover:shadow-xl dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20 dark:hover:bg-zinc-700"
          onClick={toggleTheme}
        >
          <MoonIcon className="h-6 w-6 fill-zinc-700 stroke-zinc-500 transition group-hover:fill-zinc-900 group-hover:stroke-zinc-700 dark:hidden" />
          <SunIcon className="hidden h-6 w-6 fill-amber-200 stroke-amber-400 transition group-hover:fill-amber-100 group-hover:stroke-amber-300 dark:block" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
