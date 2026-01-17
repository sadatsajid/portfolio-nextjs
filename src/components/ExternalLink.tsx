import React, { PropsWithChildren } from 'react';

import clsx from 'clsx';

type Props = {
  className?: string | null;
  href: string;
};

export const ExternalLink = ({
  className = 'underline text-zinc-900 hover:text-primary dark:text-zinc-100 dark:hover:text-primary-light transition',
  href,
  children,
  ...otherProps
}: PropsWithChildren<Props>) => {
  return (
    <a
      className={clsx(className)}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...otherProps}
    >
      {children}
    </a>
  );
};
