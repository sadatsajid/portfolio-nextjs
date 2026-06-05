'use client';

import { motion } from 'motion/react';

import { Project } from '../data/lifeApi';
import { ANIMATION_FROM_PROPS, ANIMATION_TO_PROPS } from '../lib/animation';
import { ProjectCard } from './ProjectCard';

interface Props {
  projects: readonly Project[];
}

export function AnimatedProjectList({ projects }: Props) {
  return (
    <ul
      role="list"
      className="mt-12 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
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
  );
}
