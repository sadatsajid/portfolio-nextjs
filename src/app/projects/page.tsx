import { AnimatedProjectList } from '../../components/AnimatedProjectList';
import { PageLayout } from '../../components/PageLayout';
import {
  MyCurrentProjects,
  MyPastProjects,
  MyPersonalProjects,
} from '../../data/lifeApi';

export const metadata = {
  title: 'Projects - Asif Sadat',
  description:
    "A collection of projects I've worked on professionally and personally — from enterprise applications to personal experiments.",
};

export default function Projects() {
  return (
    <PageLayout
      title="Projects"
      intro="A collection of projects I've worked on professionally and personally. From enterprise applications to personal experiments, each project represents a learning journey and a step forward in my development career."
    >
      <section className="mb-24">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Personal Projects
        </h2>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Side projects and personal experiments I&apos;ve built to explore new
          technologies and solve interesting problems.
        </p>
        <AnimatedProjectList projects={MyPersonalProjects} />
      </section>

      <section className="mb-24">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Professional Projects - Current
        </h2>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Projects I&apos;m currently working on in my professional capacity.
        </p>
        <AnimatedProjectList projects={MyCurrentProjects} />
      </section>

      <section>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Professional Projects - Past
        </h2>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Projects I&apos;ve worked on in the past. Some are still live, while others
          are internal systems or have been completed.
        </p>
        <AnimatedProjectList projects={MyPastProjects} />
      </section>
    </PageLayout>
  );
}
