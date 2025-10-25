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
        className="group hover:text-primary flex text-sm font-medium text-zinc-800 transition dark:text-zinc-200"
      >
        <Icon className="group-hover:fill-primary h-6 w-6 flex-none fill-zinc-500 transition" />
        {children && <span className="ml-4">{children}</span>}
      </Link>
    </li>
  );
};
