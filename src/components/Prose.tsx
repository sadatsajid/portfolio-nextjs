import { PropsWithChildren } from 'react';

import clsx from 'clsx';

type Props = PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>;

export const Prose = ({ children, className }: Props) => {
  return (
    <div
      className={clsx(
        className,
        'md:prose-md xl:prose-lg prose prose-zinc dark:prose-dark w-full'
      )}
    >
      {children}
    </div>
  );
};
