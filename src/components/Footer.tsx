'use client';
import React from 'react';

import { Container } from './Container';
import { NavLink, NavigationItems } from './Navigation';

export const Footer = () => {
  return (
    <footer className="mt-32 sm:mt-40">
      <Container.Outer>
        <div className="border-t border-zinc-100 pt-12 pb-16 dark:border-zinc-700/40">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {NavigationItems.map(item => (
                  <NavLink key={item.href} href={item.href}>
                    {item.name}
                  </NavLink>
                ))}
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                &copy; {new Date().getFullYear()} Asif Sadat. All rights reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  );
};
