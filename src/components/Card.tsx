import React from 'react';

import Link, { LinkProps } from 'next/link';

import clsx from 'clsx';

const CardRoot = ({
  as: Component = 'div',
  className,
  children,
}: React.PropsWithChildren<{ as?: React.ElementType; className?: string }>) => {
  return (
    <Component
      className={clsx(className, 'group relative flex flex-col items-start')}
    >
      {children}
    </Component>
  );
};

const CardLink = ({
  children,
  ...props
}: React.PropsWithChildren<LinkProps>) => {
  return (
    <>
      <span className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 sm:-inset-x-6 sm:rounded-2xl dark:bg-zinc-800/50" />
      <Link {...props}>
        <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{children}</span>
      </Link>
    </>
  );
};

const CardTitle = ({
  as: Component = 'h2',
  href,
  children,
}: React.PropsWithChildren<{ as?: React.ElementType; href?: string }>) => {
  return (
    <Component className="text-base font-semibold tracking-tight text-balance text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </Component>
  );
};

const CardDescription = ({ children }: React.PropsWithChildren) => {
  return <p className="relative z-10 mt-2 text-sm">{children}</p>;
};

const CardCta = ({ children }: React.PropsWithChildren) => {
  return (
    <div
      aria-hidden="true"
      className="text-primary relative z-10 mt-4 flex items-center text-sm font-medium"
    >
      {children}
      <span className="ml-1">→</span>
    </div>
  );
};

const CardEyebrow = ({
  as: Component = 'p',
  decorate = false,
  className,
  children,
  ...props
}: React.PropsWithChildren<
  {
    as?: React.ElementType;
    decorate?: boolean;
    className?: string;
  } & React.AllHTMLAttributes<HTMLElement>
>) => {
  return (
    <Component
      className={clsx(
        className,
        'relative z-10 order-first mb-3 flex items-center text-sm text-zinc-400 dark:text-zinc-500',
        decorate && 'pl-3.5'
      )}
      {...props}
    >
      {decorate && (
        <span
          className="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
        </span>
      )}
      {children}
    </Component>
  );
};

export const Card = Object.assign(CardRoot, {
  Link: CardLink,
  Title: CardTitle,
  Description: CardDescription,
  Cta: CardCta,
  Eyebrow: CardEyebrow,
});
