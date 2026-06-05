import Image from 'next/image';

import { Work } from '../data/lifeApi';
import { BriefcaseIcon } from './icons/BriefcaseIcon';

// Discriminate the Work union via type predicates so filtered arrays are
// properly narrowed — no redundant runtime guards needed inside .map().
type WorkEntry = (typeof Work)[number];
type SingleRoleWork = Extract<WorkEntry, { title: string }>;
type MultiRoleWork = Extract<WorkEntry, { roles: readonly unknown[] }>;

function isSingleRole(w: WorkEntry): w is SingleRoleWork {
  return 'title' in w;
}
function isMultiRole(w: WorkEntry): w is MultiRoleWork {
  return 'roles' in w;
}

export const Resume = () => {
  const singleRoles = Work.filter(isSingleRole);
  const multiRoleCompanies = Work.filter(isMultiRole);

  return (
    <div className="max-w-[420px] rounded-2xl border border-zinc-100 bg-white p-6 shadow-lg ring-1 ring-zinc-900/5 transition hover:shadow-xl dark:border-zinc-700/40 dark:bg-zinc-900 dark:ring-white/10">
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-zinc-50 dark:bg-zinc-800">
          <BriefcaseIcon className="h-6 w-6 fill-zinc-500 dark:fill-zinc-400" />
        </div>
        <span className="ml-3">Work Experience</span>
      </h2>
      <ol className="mt-6 space-y-6">
        {/* Single-role entries (e.g. SELISE) */}
        {singleRoles.map((work) => (
          <li
            key={work.company}
            className="group flex gap-4 transition hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg p-2 -mx-2"
          >
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 transition group-hover:shadow-lg group-hover:ring-zinc-900/10 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:group-hover:border-zinc-600">
              <Image
                src={work.logo}
                alt="Logo"
                className="h-7 w-7 rounded-full object-cover transition group-hover:scale-110"
                unoptimized
              />
            </div>
            <div className="flex flex-auto flex-col gap-2">
              <dl className="flex flex-wrap gap-x-2">
                <dt className="sr-only">Company</dt>
                <dd className="flex-none text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                  {work.company}
                </dd>
                <dt className="sr-only">Date</dt>
                <dd
                  className="ml-auto text-xs font-medium text-zinc-400 dark:text-zinc-500 whitespace-nowrap"
                  aria-label={`${work.start} until ${work.end}`}
                >
                  <time dateTime={work.start}>{work.start}</time>{' '}
                  <span aria-hidden="true">—</span>{' '}
                  <time dateTime={work.end}>{work.end}</time>
                </dd>
              </dl>
              <dl className="flex flex-wrap gap-x-2">
                <dt className="sr-only">Role</dt>
                <dd className="text-xs text-zinc-600 dark:text-zinc-400">
                  {work.title}
                </dd>
              </dl>
            </div>
          </li>
        ))}

        {/* Multi-role companies with timeline (e.g. MGH Group) */}
        {multiRoleCompanies.map((work) => {
          const sortedRoles = [...work.roles].sort(
            (a, b) => parseInt(b.start) - parseInt(a.start)
          );

          return (
            <li key={work.company} className="space-y-4">
              {/* Company header */}
              <div className="flex items-center gap-4 rounded-lg p-2 -mx-2 transition hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 transition hover:shadow-lg hover:ring-zinc-900/10 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:hover:border-zinc-600">
                  <Image
                    src={work.logo}
                    alt="Logo"
                    className="h-7 w-7 rounded-full object-cover transition hover:scale-110"
                    unoptimized
                  />
                </div>
                <div className="flex flex-auto items-center gap-x-2">
                  <dt className="sr-only">Company</dt>
                  <dd className="flex-none text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {work.company}
                  </dd>
                  <dt className="sr-only">Date</dt>
                  <dd
                    className="ml-auto text-xs font-medium text-zinc-400 dark:text-zinc-500 whitespace-nowrap"
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
                <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-zinc-200 via-zinc-300 to-zinc-200 dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800" />
                <ul className="relative space-y-4">
                  {sortedRoles.map((role) => (
                    <li
                      key={role.title}
                      className="group relative flex gap-4 transition hover:bg-zinc-50 dark:hover:bg-zinc-800/50 rounded-lg p-2 -mx-2"
                    >
                      <div className="relative z-10 flex h-10 w-10 flex-none items-start">
                        <div className="absolute left-5 top-[0.375rem] h-3 w-3 -translate-x-1/2 rounded-full bg-zinc-400 ring-4 ring-white transition group-hover:bg-zinc-500 group-hover:ring-zinc-50 dark:bg-zinc-600 dark:ring-zinc-900 dark:group-hover:bg-zinc-500 dark:group-hover:ring-zinc-800" />
                      </div>
                      <div className="flex flex-auto flex-col gap-1 pb-1">
                        <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                          {role.title}
                        </div>
                        <div className="text-xs font-medium text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
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
