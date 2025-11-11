'use client';

import { motion } from 'framer-motion';

import { PageLayout } from '../../components/PageLayout';
import { ProjectCard } from '../../components/ProjectCard';
import {
  MyCurrentProjects,
  MyPastProjects,
  MyPersonalProjects,
} from '../../data/lifeApi';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '../../lib/animation';

export default function Projects() {
  return (
    <PageLayout
      title="Projects"
      intro="A collection of projects I&apos;ve worked on professionally and personally. From enterprise applications to personal experiments, each project represents a learning journey and a step forward in my development career."
    >
      {/* Personal Projects Section */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Personal Projects
        </h2>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Side projects and personal experiments I&apos;ve built to explore new technologies and solve
          interesting problems.
        </p>
        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {MyPersonalProjects.map((project) => (
            <motion.li
              key={project.title}
              initial={ANIMATION_FROM_PROPS}
              whileInView={ANIMATION_TO_PROPS}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Professional Projects - Current */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Professional Projects - Current
        </h2>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Projects I&apos;m currently working on in my professional capacity.
        </p>
        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {MyCurrentProjects.map((project) => (
            <motion.li
              key={project.title}
              initial={ANIMATION_FROM_PROPS}
              whileInView={ANIMATION_TO_PROPS}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Professional Projects - Past */}
      <section>
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          Professional Projects - Past
        </h2>
        <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">
          Projects I&apos;ve worked on in the past. Some are still live, while others are internal
          systems or have been completed.
        </p>
        <ul
          role="list"
          className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {MyPastProjects.map((project) => (
            <motion.li
              key={project.title}
              initial={ANIMATION_FROM_PROPS}
              whileInView={ANIMATION_TO_PROPS}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.li>
          ))}
        </ul>
      </section>
    </PageLayout>
  );
}

