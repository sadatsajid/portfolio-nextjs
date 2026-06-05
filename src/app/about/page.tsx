import React from 'react';

import Image from 'next/image';

import AvatarImage from '../../../public/assets/blog/authors/asif-sadat.jpeg';
import { Container } from '../../components/Container';
import { ExternalLink } from '../../components/ExternalLink';
import { PageTitle } from '../../components/PageTitle';
import { Section } from '../../components/Section';
import { SocialLink } from '../../components/SocialLink';
import { GitHubIcon } from '../../components/icons/GitHubIcon';
import { LinkedInIcon } from '../../components/icons/LinkedInIcon';
import {
  AboutExtended,
  Bio,
  MghLink,
  SeliseLink,
  SocialMedia,
} from '../../data/lifeApi';

const SOCIAL_ICONS: Record<
  (typeof SocialMedia)[number]['name'],
  React.ElementType
> = {
  LinkedIn: LinkedInIcon,
  Github: GitHubIcon,
};

export const metadata = {
  title: 'About - Asif Sadat',
  description:
    'Learn more about Asif Sadat, a Full Stack Developer with 7+ years of experience.',
};

export default function AboutMe() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={AvatarImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <PageTitle>Hi, I&apos;m Asif Sadat.</PageTitle>
          <div className="mt-6 text-base">{AboutExtended}</div>
          <div className="mt-6 flex gap-6">
            {SocialMedia.map(socialProfile => (
              <SocialLink
                key={socialProfile.name}
                aria-label={`Follow on ${socialProfile.name}`}
                href={socialProfile.link}
                icon={SOCIAL_ICONS[socialProfile.name]}
              />
            ))}
          </div>

          <Section>
            <Section.Title as="h2">Work</Section.Title>
            <Section.Content>
              I&apos;m a Full Stack Developer with over 7 years of experience
              building scalable web applications. I started as a Junior Frontend
              Developer and have progressed to Staff Software Engineer, leading
              teams and managing complex projects.
              <br />
              <br />
              {Bio.specialisation} {Bio.companiesIntro}{' '}
              <ExternalLink href={SeliseLink.href}>
                {SeliseLink.name}
              </ExternalLink>{' '}
              and{' '}
              <ExternalLink href={MghLink.href}>{MghLink.name}</ExternalLink>.{' '}
              {Bio.systems}
              <br />
              <br />
              {Bio.leadership} I enjoy solving complex technical challenges and
              building products that make a real impact. If you&apos;d like to
              work with me,{' '}
              <ExternalLink href="https://linkedin.com/in/asif-sadat">
                connect with me on LinkedIn
              </ExternalLink>{' '}
              or{' '}
              <ExternalLink href="mailto:sadatsajid@gmail.com">
                email me.
              </ExternalLink>
            </Section.Content>
          </Section>
        </div>
      </div>
    </Container>
  );
}
