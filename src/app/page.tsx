import Image from 'next/image';
import AvatarImage from '../../public/assets/blog/authors/asif-sadat.jpeg';

import { AnimatedSection } from '../components/AnimatedSection';
import { Container } from '../components/Container';
import { ExternalLink } from '../components/ExternalLink';
import { Resume } from '../components/Resume';
import { SocialLinks } from '../components/SocialLinks';
import { About, AboutExtended, Bio, MghLink, Name, SeliseLink } from '../data/lifeApi';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Container className="mt-16 sm:mt-20">
        <AnimatedSection className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {Name}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400 text-balance">
            {About.text}{' '}
            <ExternalLink href={About.contactHref}>
              {About.contactLinkText}
            </ExternalLink>
          </p>
          <SocialLinks />
        </AnimatedSection>
      </Container>

      {/* About Section */}
      <Container className="mt-24 sm:mt-32">
        <AnimatedSection
          delay={0.4}
          className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-12"
        >
          <div className="lg:order-first">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
              About Me
            </h2>
            <div className="mt-6 space-y-7 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              <p>{AboutExtended}</p>
              <p>
                {Bio.specialisation} {Bio.companiesIntro}{' '}
                <ExternalLink href={SeliseLink.href}>
                  {SeliseLink.name}
                </ExternalLink>{' '}
                and{' '}
                <ExternalLink href={MghLink.href}>{MghLink.name}</ExternalLink>.
              </p>
              <p>
                {Bio.systems} {Bio.leadership}
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
        </AnimatedSection>
      </Container>

      {/* Work Experience Section */}
      <Container className="mt-24 sm:mt-32">
        <AnimatedSection delay={0.6} className="mx-auto max-w-2xl lg:max-w-none">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100 mb-12">
            Work Experience
          </h2>
          <Resume />
        </AnimatedSection>
      </Container>
    </>
  );
}
