'use client';
import { Container } from '../components/Container';
import { Resume } from '../components/Resume';
import { SocialLink } from '../components/SocialLink';
import { NotePreview } from '../components/notes/NotePreview';
import { About, AboutExtended, Name, SocialMedia } from '../data/lifeApi';
import { Note } from '../lib/notesApi';
import { motion } from 'motion/react';
import Image from 'next/image';
import AvatarImage from '../../public/assets/blog/authors/asif-sadat.jpeg';
import { ExternalLink } from '../components/ExternalLink';

type Props = {
  latestNotes?: Note[];
};

export default function Home({ latestNotes = [] }: Props) {
  return (
    <>
      {/* Hero Section */}
      <Container className="mt-16 sm:mt-20">
        <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {Name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 text-balance">
            {About}
          </p>
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
                  icon={socialProfile.icon}
                  className="group"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>

      {/* About Section */}
      <Container className="mt-24 sm:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12"
        >
          <div className="lg:order-first">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
              About Me
            </h2>
            <div className="mt-6 space-y-7 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              <p>{AboutExtended}</p>
              <p>
                I specialize in React, TypeScript, Node.js, and have extensive experience with Angular, Material-UI, and various backend technologies. I&apos;ve led development teams and managed projects for companies like{' '}
                <ExternalLink href="https://selise.com/">
                  SELISE Digital Platforms
                </ExternalLink>{' '}
                and{' '}
                <ExternalLink href="https://mghgroup.com/">
                  MGH Group
                </ExternalLink>
                .
              </p>
              <p>
                I&apos;ve built comprehensive systems including ride-sharing platforms, EMR systems, warehouse management solutions, and real-time monitoring platforms. I have a strong background in team leadership, project management, and mentoring junior developers.
              </p>
            </div>
          </div>
          <div className="lg:pl-16">
            <div className="max-w-xs lg:max-w-none">
              <Image
                src={AvatarImage}
                alt="Asif Sadat"
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover shadow-xl ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10"
                priority
              />
            </div>
          </div>
        </motion.div>
      </Container>
      {/* Work Experience Section */}
      <Container className="mt-24 sm:mt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto max-w-2xl lg:max-w-none"
        >
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100 mb-12">
            Work Experience
          </h2>
          <Resume />
        </motion.div>
      </Container>
    </>
  );
}
