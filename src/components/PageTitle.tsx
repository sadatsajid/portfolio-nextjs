import { PropsWithChildren } from 'react';

import clsx from 'clsx';

export const PageTitle = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <h1
      className={clsx(
        className,
        'text-4xl font-bold tracking-tight text-balance text-zinc-800 dark:text-zinc-100'
      )}
    >
      {children}
    </h1>
  );
};
