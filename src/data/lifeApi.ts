import MghLogo from '../images/logos/mgh.png';
import SeliseLogo from '../images/logos/selise.png';

export const Name = 'ASIF SADAT';

export const About = {
  text: "I'm a Full Stack Developer with 7+ years of experience building scalable applications. I enjoy leading teams and creating solutions that make a real impact. If you'd like to get in touch,",
  contactLinkText: 'send me an email.',
  contactHref: 'mailto:sadatsajid@gmail.com',
} as const;

export const AboutExtended = `I'm a passionate Full Stack Developer based in Dhaka, Bangladesh, with over 7 years of experience in building scalable web applications. I have a B.Sc. in Computer Science & Engineering from BRAC University. I specialize in React, TypeScript, Node.js, and have extensive experience in team leadership and project management. I enjoy mentoring junior developers, solving complex technical challenges, and building products that make a difference in people's lives.`;

/** Company link facts — the authoritative source for names and hrefs used across pages. */
export const SeliseLink = {
  name: 'SELISE Digital Platforms',
  href: 'https://selise.com/',
} as const;

export const MghLink = {
  name: 'MGH Group',
  href: 'https://mghgroup.com/',
} as const;

/**
 * Shared bio prose — facts that appear on both the home and about pages.
 * Update here; both pages consume these strings.
 */
export const Bio = {
  specialisation:
    'I specialize in React, TypeScript, Node.js, and have extensive experience with Angular, Material-UI, and various backend technologies.',
  companiesIntro: "I've led development teams and managed projects for companies like",
  systems:
    "I've built comprehensive systems including ride-sharing platforms, EMR systems, warehouse management solutions, and real-time monitoring platforms.",
  leadership:
    'I have a strong background in team leadership, project management, and mentoring junior developers.',
} as const;

// Project listings retired 2026-09 — now live in src/data/portfolio.ts
// (FEATURED / ARCHIVE / CLIENT_PROJECTS / PERSONAL_PROJECTS), rendered on
// the homepage. /projects and /skills redirect there — see src/app/projects
// and src/app/skills.

// Icon field removed — resolved at the callsite via SOCIAL_ICONS map
export const SocialMedia = [
  { name: 'LinkedIn' as const, link: 'https://linkedin.com/in/asif-sadat' },
  { name: 'Github' as const, link: 'https://github.com/sadatsajid' },
] as const;

export const Work = [
  {
    company: 'SELISE Digital Platforms',
    title: 'Staff Software Engineer',
    logo: SeliseLogo,
    start: '2024',
    end: 'Present',
  },
  {
    company: 'MGH Group',
    logo: MghLogo,
    roles: [
      {
        title: 'Manager - Full Stack Developer',
        start: '2023',
        end: '2024',
      },
      {
        title: 'Assistant Manager - Full Stack Developer',
        start: '2021',
        end: '2023',
      },
      {
        title: 'Senior Executive - Lead Frontend Developer',
        start: '2019',
        end: '2020',
      },
      {
        title: 'Trainee Executive - Junior Frontend Developer',
        start: '2018',
        end: '2019',
      },
    ],
    start: '2018',
    end: '2024',
  },
] as const;

export const CompaniesLinks = [
  { name: 'VisionMedia', link: 'https://www.visionmedia.com/' },
  { name: 'DKMS', link: 'https://www.dkms.org/en' },
  { name: 'AAA', link: 'https://www.aaa.com/' },
  { name: 'PolskaPress', link: 'https://polskapress.pl/pl' },
  { name: 'Canal Digital', link: 'https://www.canaldigital.no/' },
] as const;

export const Books = [
  {
    name: 'Shoe Dog: A Memoir by the Creator of Nike by Phil Knight',
    link: 'https://www.amazon.com/Shoe-Dog-Memoir-Creator-Nike-ebook/dp/B0176M1A44',
  },
  {
    name: 'The Black Swan: The Impact of the Highly Improbable by Nassim Nicholas Taleb',
    link: 'https://amzn.to/2NwihaS',
  },
  {
    name: 'Antifragile: Things That Gain from Disorder by Nassim Nicholas Taleb',
    link: 'https://amzn.to/3aIG805',
  },
  {
    name: 'Fooled by Randomness: The Hidden Role of Chance in Life and in the Markets by Nassim Nicholas Taleb',
    link: 'https://amzn.to/3kbvaD9',
  },
  { name: 'Daily stoic by Ryan Holiday', link: 'https://amzn.to/3n8ATuC' },
  {
    name: 'A Guide to the Good Life: The Ancient Art of Stoic Joy by William B. Irvine',
    link: 'https://amzn.to/3iuL1ud',
  },
  { name: 'Atomic Habits by James Clear', link: 'https://amzn.to/3iqimpZ' },
] as const;

export const VideosWorthWatching = [
  {
    name: 'Steve Jobs 2005 Stanford Commencement Address',
    link: 'https://www.youtube.com/watch?v=UF8uR6Z6KLc',
  },
  {
    name: 'Falcon Heavy & Starman',
    link: 'https://www.youtube.com/watch?v=A0FZIwabctw',
  },
] as const;

export const Podcasts = [
  { name: 'Lex Fridman Podcast', link: 'https://www.youtube.com/@lexfridman' },
  { name: 'Huberman Lab', link: 'https://www.youtube.com/@hubermanlab' },
  { name: 'Joe Rogan', link: 'https://www.youtube.com/@joerogan' },
  {
    name: 'The Tim Ferriss Show',
    link: 'https://www.youtube.com/channel/UCznv7Vf9nBdJYvBagFdAHWw',
  },
  { name: 'Build your SaaS', link: 'https://saas.transistor.fm/' },
] as const;

export const PeopleWorthFollowingOnTwitter = [
  { name: 'Andrew Wilkinson', link: 'https://twitter.com/awilkinson' },
  { name: 'Oliur', link: 'https://twitter.com/UltraLinx' },
  { name: 'Jack Butcher', link: 'https://twitter.com/jackbutcher' },
  { name: 'Sahil Lavingia', link: 'https://twitter.com/shl' },
  { name: 'James Clear', link: 'https://twitter.com/JamesClear' },
  { name: 'Naval', link: 'https://twitter.com/naval' },
  { name: 'Paul Graham', link: 'https://twitter.com/paulg' },
  { name: "John O'Nolan", link: 'https://twitter.com/JohnONolan' },
  { name: 'Jon Yongfook', link: 'https://twitter.com/yongfook' },
  { name: 'Joel Gascoigne', link: 'https://twitter.com/joelgascoigne' },
  { name: 'Pieter Levels', link: 'https://twitter.com/levelsio' },
] as const;

export const Blogs = [
  { name: 'Wait but why', link: 'https://waitbutwhy.com/' },
  { name: 'Paul Graham', link: 'http://www.paulgraham.com/' },
  { name: 'Joel Hooks', link: 'https://joelhooks.com' },
  { name: 'David Perell', link: 'https://www.perell.com/' },
  { name: 'Dan Abramov', link: 'https://overreacted.io' },
  { name: 'Lee Robinson', link: 'https://leerob.io' },
  { name: 'Naval Ravikant', link: 'https://nav.al/' },
] as const;

// Tools/tech list retired 2026-09 — see src/data/portfolio.ts SKILLS,
// rendered by src/components/editorial/Toolkit.tsx on the homepage.
