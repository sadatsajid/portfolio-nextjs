'use client';

import { motion } from 'motion/react';
import React from 'react';

import { SocialMedia } from '../data/lifeApi';
import { GitHubIcon } from './icons/GitHubIcon';
import { LinkedInIcon } from './icons/LinkedInIcon';
import { SocialLink } from './SocialLink';

const SOCIAL_ICONS: Record<
  (typeof SocialMedia)[number]['name'],
  React.ElementType
> = {
  LinkedIn: LinkedInIcon,
  Github: GitHubIcon,
};

export function SocialLinks() {
  return (
    <div className="mt-8 flex gap-6">
      {SocialMedia.map((socialProfile, index) => (
        <motion.div
          key={socialProfile.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 * index }}
        >
          <SocialLink
            aria-label={`Follow on ${socialProfile.name}`}
            href={socialProfile.link}
            icon={SOCIAL_ICONS[socialProfile.name]}
            className="group"
          />
        </motion.div>
      ))}
    </div>
  );
}
