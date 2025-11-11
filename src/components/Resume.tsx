import Image from 'next/image';

import { Work } from '../data/lifeApi';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

export const Resume = () => {
  // Separate single roles from companies with multiple roles
  const singleRoles = Work.filter((work) => 'title' in work);
  const multiRoleCompanies = Work.filter(
    (work) => 'roles' in work && Array.isArray(work.roles)
  );

  return (
    <div className="max-w-[420px] rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <div className="flex h-10 w-10 flex-none items-center justify-center">
          <BriefcaseIcon className="h-6 w-6" />
        </div>
        <span className="ml-1">Work</span>
      </h2>
      <ol className="mt-6 space-y-6">
        {/* Single role entries (like SELISE) */}
        {singleRoles.map((work, index) => {
          if (!('title' in work)) return null;

          return (
            <li key={index} className="flex gap-4">
              <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={work.logo}
                  alt="Logo"
                  className="h-7 w-7 rounded-full object-cover"
                  unoptimized
                />
              </div>
              <div className="flex flex-auto flex-col gap-2">
                <dl className="flex flex-wrap gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {work.company}
                  </dd>
                  <dt className="sr-only">Date</dt>
                  <dd
                    className="ml-auto text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap"
                    aria-label={`${work.start} until ${work.end}`}
                  >
                    <time dateTime={work.start}>{work.start}</time>{' '}
                    <span aria-hidden="true">—</span>{' '}
                    <time dateTime={work.end}>{work.end}</time>
                  </dd>
                </dl>
                <dl className="flex flex-wrap gap-x-2">
                  <dt className="sr-only">Role</dt>
                  <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                    {work.title}
                  </dd>
                </dl>
              </div>
            </li>
          );
        })}

        {/* Multi-role companies with timeline (like MGH Group) */}
        {multiRoleCompanies.map((work, companyIndex) => {
          if (!('roles' in work) || !Array.isArray(work.roles)) return null;

          // Sort roles by start date (most recent first)
          const sortedRoles = [...work.roles].sort((a, b) => {
            const yearA = parseInt(a.start);
            const yearB = parseInt(b.start);
            return yearB - yearA;
          });

          return (
            <li key={companyIndex} className="space-y-4">
              {/* Company header */}
              <div className="flex items-center gap-4">
                <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                  <Image
                    src={work.logo}
                    alt="Logo"
                    className="h-7 w-7 rounded-full object-cover"
                    unoptimized
                  />
                </div>
                <div className="flex flex-auto items-center gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    {work.company}
                  </dd>
                  <dt className="sr-only">Date</dt>
                  <dd
                    className="ml-auto text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap"
                    aria-label={`${work.start} until ${work.end}`}
                  >
                    <time dateTime={work.start}>{work.start}</time>{' '}
                    <span aria-hidden="true">—</span>{' '}
                    <time dateTime={work.end}>{work.end}</time>
                  </dd>
                </div>
              </div>

              {/* Timeline for roles */}
              <div className="relative">
                {/* Timeline line - positioned to align with center of logo */}
                {/* Logo is 40px wide (h-10 w-10), center at 20px from parent left */}
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-zinc-200 dark:bg-zinc-800" />

                <ul className="relative space-y-4">
                  {sortedRoles.map((role, roleIndex) => (
                    <li key={roleIndex} className="relative flex gap-4">
                      {/* Timeline dot - centered on the timeline line and aligned with first line of content */}
                      <div className="relative z-10 flex h-10 w-10 flex-none items-start">
                        <div className="absolute left-5 top-[0.375rem] h-3 w-3 -translate-x-1/2 rounded-full bg-zinc-400 ring-4 ring-white dark:bg-zinc-600 dark:ring-zinc-900" />
                      </div>

                      {/* Timeline content - aligned with company header */}
                      <div className="flex flex-auto flex-col gap-1 pb-1">
                        <div className="text-xs text-zinc-500 dark:text-zinc-400">
                          {role.title}
                        </div>
                        <div className="text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
                          <time dateTime={role.start}>{role.start}</time>{' '}
                          <span aria-hidden="true">—</span>{' '}
                          <time dateTime={role.end}>{role.end}</time>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
};
