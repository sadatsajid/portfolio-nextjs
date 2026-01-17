import React from 'react';

import Link from 'next/link';

import clsx from 'clsx';

export interface Props {
  className?: string;
  href: string;
  icon: React.ElementType;
  children?: React.ReactNode;
}

export const SocialLink = ({
  className,
  href,
  children,
  icon: Icon,
}: Props) => {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex items-center justify-center rounded-full bg-zinc-50 p-3 shadow-md ring-1 ring-zinc-900/5 transition hover:bg-zinc-100 hover:shadow-lg hover:ring-zinc-900/10 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:bg-zinc-800 dark:hover:ring-white/20"
      >
        <Icon className="h-5 w-5 fill-zinc-500 transition group-hover:fill-zinc-700 group-hover:scale-110 dark:fill-zinc-400 dark:group-hover:fill-zinc-200" />
        {children && <span className="ml-4 text-sm font-medium text-zinc-800 dark:text-zinc-200">{children}</span>}
      </Link>
    </li>
  );
};
