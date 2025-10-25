import { ExternalLink } from '../components/ExternalLink';
import { GitHubIcon } from '../components/icons/GitHubIcon';
import { LinkedInIcon } from '../components/icons/LinkedInIcon';
import AmbitLogo from '../images/logos/ambit.png';
import BimLogo from '../images/logos/bim.png';
import ClevertechLogo from '../images/logos/clevertech.png';
import Consultly from '../images/logos/consultly.svg';
import EvercastLogo from '../images/logos/evercast.svg';
import FilmIoLogo from '../images/logos/filmio.jpg';
import Howdy from '../images/logos/howdy.png';
import JarockiMeLogo from '../images/logos/jarocki.svg';
import JojoMobileLogo from '../images/logos/jojomobile.png';
import MonitoLogo from '../images/logos/monito.svg';
import MotionLogo from '../images/logos/motion.svg';
import MobileVikingsLogo from '../images/logos/mv.png';
import ParabolLogo from '../images/logos/parabol.svg';
import TastyCloudLogo from '../images/logos/tastycloud.png';

import { StaticImageData } from 'next/image';

export const Name = 'ASIF SADAT';

export const About = (
  <>
    {`I'm a Full Stack Developer with 7+ years of experience building scalable applications. I enjoy leading teams and creating solutions that make a real impact. If you'd like to get in touch,`}{' '}
    <ExternalLink href="mailto:sadatsajid@gmail.com">
      send me an email.
    </ExternalLink>
  </>
);
export const AboutExtended = `I'm a passionate Full Stack Developer based in Dhaka, Bangladesh, with over 7 years of experience in building scalable web applications. I have a B.Sc. in Computer Science & Engineering from BRAC University. I specialize in React, TypeScript, Node.js, and have extensive experience in team leadership and project management. I enjoy mentoring junior developers, solving complex technical challenges, and building products that make a difference in people's lives.`;

export type Project = {
  title: string;
  techStack: string[];
  description: string;
  logo: StaticImageData;
  link?: {
    label: string;
    href: string;
  };
};

export const MyCurrentProjects: Project[] = [
  {
    title: 'Creolytix',
    techStack: ['Full Stack', 'React', 'TypeScript', 'Node.js', 'Vitest'],
    description:
      'Advanced online platform providing real-time monitoring and threat analysis, helping organizations quickly detect and respond to risks.',
    logo: Consultly,
    link: {
      label: 'In Development',
      href: '#',
    },
  },
  {
    title: 'OBHAI Ride-Sharing Admin Panel',
    techStack: ['AngularJS', 'Bootstrap', 'FCM', 'Google Maps API'],
    description:
      'Master Admin Panel for ride-sharing platform with promo notifications, issue management, and asset tracking modules.',
    logo: MonitoLogo,
    link: {
      label: 'Internal System',
      href: '#',
    },
  },
  {
    title: 'OBHAI Ride Tracker',
    techStack: ['React', 'Google Maps API', 'Real-time Tracking'],
    description:
      'Real-time location tracking feature utilizing Google Maps API for customers to securely share their ride progress with contacts.',
    logo: JarockiMeLogo,
    link: {
      label: 'Live System',
      href: '#',
    },
  },
];

export const MyPastProjects: Project[] = [
  {
    title: 'OBHAI Sales Performance Management',
    techStack: ['NodeJS', 'React', 'MUI', 'RBAC', 'Web Push'],
    description:
      'Sales performance tracking application with real-time web push alerts, in-app calling, and driver leaderboard system.',
    logo: ParabolLogo,
    link: {
      label: 'Internal System',
      href: '#',
    },
  },
  {
    title: 'OBHAI Driver Registration Portal',
    techStack: ['React', 'MUI', 'PWA', 'Mobile-First'],
    description:
      'Revamped driver onboarding process enabling registration from personal devices with CRM agent verification, reducing onboarding time by 40%.',
    logo: EvercastLogo,
    link: {
      label: 'Live System',
      href: '#',
    },
  },
  {
    title: 'OBHAI Fleet Owner Panel',
    techStack: ['React', 'MUI', 'PWA', 'Real-time Updates'],
    description:
      'Progressive Web App for Fleet Owners to track rides and earnings from each vehicle registered with OBHAI.',
    logo: MobileVikingsLogo,
    link: {
      label: 'Live System',
      href: '#',
    },
  },
  {
    title: 'Peyala Food Ordering Admin Panel',
    techStack: ['NodeJS', 'React', 'MUI', 'RBAC'],
    description:
      'Fullstack Admin Panel for managing customer orders with role-based access control, delivery charge module, and buzzer notifications.',
    logo: Howdy,
    link: {
      label: 'Live System',
      href: '#',
    },
  },
  {
    title: 'Warehouse Management System',
    techStack: ['React', 'MUI', 'Barcode Scanning', 'Inventory Tracking'],
    description:
      'WMS solution for inventory tracking with barcode scanning for faster data entry and bulk PO upload system.',
    logo: TastyCloudLogo,
    link: {
      label: 'Internal System',
      href: '#',
    },
  },
  {
    title: 'Power BI Report Embedding System',
    techStack: ['NodeJS', 'React', 'MUI', 'MSAL', 'Microsoft Auth'],
    description:
      'Admin Panel for embedding Power BI reports with Microsoft Authentication and dynamic report management features.',
    logo: AmbitLogo,
    link: {
      label: 'Internal System',
      href: '#',
    },
  },
  {
    title: 'DristiVan - SAAF EMR System',
    techStack: ['React', 'MUI', 'Medical Equipment Integration'],
    description:
      'Electronic Medical Records system for glaucoma detection through screening patients with different medical equipment.',
    logo: BimLogo,
    link: {
      label: 'Medical System',
      href: '#',
    },
  },
];

export const SocialMedia = [
  {
    name: 'LinkedIn',
    link: 'https://linkedin.com/in/asif-sadat',
    icon: LinkedInIcon,
  },
  { name: 'Github', link: 'https://github.com/sadatsajid', icon: GitHubIcon },
] as const;

export const Work = [
  {
    company: 'SELISE Digital Platforms',
    title: 'Staff Software Engineer (Frontend)',
    logo: MotionLogo,
    start: '2024',
    end: 'Present',
  },
  {
    company: 'MGH Group',
    title: 'Manager - Full Stack Developer',
    logo: FilmIoLogo,
    start: '2023',
    end: '2024',
  },
  {
    company: 'MGH Group',
    title: 'Assistant Manager - Full Stack Developer',
    logo: ParabolLogo,
    start: '2021',
    end: '2023',
  },
  {
    company: 'MGH Group',
    title: 'Senior Executive - Lead Frontend Developer',
    logo: ClevertechLogo,
    start: '2019',
    end: '2020',
  },
  {
    company: 'MGH Group',
    title: 'Trainee Executive - Junior Frontend Developer',
    logo: JojoMobileLogo,
    start: '2018',
    end: '2019',
  },
] as const;

export const CompaniesLinks = [
  {
    name: 'VisionMedia',
    link: 'https://www.visionmedia.com/',
  },
  {
    name: 'DKMS',
    link: 'https://www.dkms.org/en',
  },
  {
    name: 'AAA',
    link: 'https://www.aaa.com/',
  },
  {
    name: 'PolskaPress',
    link: 'https://polskapress.pl/pl',
  },
  {
    name: 'Canal Digital',
    link: 'https://www.canaldigital.no/',
  },
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
  {
    name: 'Daily stoic by Ryan Holiday',
    link: 'https://amzn.to/3n8ATuC',
  },
  {
    name: 'A Guide to the Good Life: The Ancient Art of Stoic Joy by William B. Irvine',
    link: 'https://amzn.to/3iuL1ud',
  },
  {
    name: 'Atomic Habits by James Clear',
    link: 'https://amzn.to/3iqimpZ',
  },
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
  {
    name: 'Lex Fridman Podcast',
    link: 'https://www.youtube.com/@lexfridman',
  },
  {
    name: 'Huberman Lab',
    link: 'https://www.youtube.com/@hubermanlab',
  },
  {
    name: 'Joe Rogan',
    link: 'https://www.youtube.com/@joerogan',
  },
  {
    name: 'The Tim Ferriss Show',
    link: 'https://www.youtube.com/channel/UCznv7Vf9nBdJYvBagFdAHWw',
  },
  {
    name: 'Build your SaaS',
    link: 'https://saas.transistor.fm/',
  },
] as const;

export const PeopleWorthFollowingOnTwitter = [
  {
    name: 'Andrew Wilkinson',
    link: 'https://twitter.com/awilkinson',
  },
  {
    name: 'Oliur',
    link: 'https://twitter.com/UltraLinx',
  },
  {
    name: 'Jack Butcher',
    link: 'https://twitter.com/jackbutcher',
  },
  {
    name: 'Sahil Lavingia',
    link: 'https://twitter.com/shl',
  },
  {
    name: 'James Clear',
    link: 'https://twitter.com/JamesClear',
  },
  {
    name: 'Naval',
    link: 'https://twitter.com/naval',
  },
  {
    name: 'Paul Graham',
    link: 'https://twitter.com/paulg',
  },
  {
    name: "John O'Nolan",
    link: 'https://twitter.com/JohnONolan',
  },
  {
    name: 'Jon Yongfook',
    link: 'https://twitter.com/yongfook',
  },
  {
    name: 'Joel Gascoigne',
    link: 'https://twitter.com/joelgascoigne',
  },
  {
    name: 'Pieter Levels',
    link: 'https://twitter.com/levelsio',
  },
] as const;

export const Blogs = [
  {
    name: 'Wait but why',
    link: 'https://waitbutwhy.com/',
  },
  {
    name: 'Paul Graham',
    link: 'http://www.paulgraham.com/',
  },
  {
    name: 'Joel Hooks',
    link: 'https://joelhooks.com',
  },
  {
    name: 'David Perell',
    link: 'https://www.perell.com/',
  },
  {
    name: 'Dan Abramov',
    link: 'https://overreacted.io',
  },
  {
    name: 'Lee Robinson',
    link: 'https://leerob.io',
  },
  {
    name: 'Naval Ravikant',
    link: 'https://nav.al/',
  },
] as const;

export const Quotes = [
  {
    content:
      'We have two lives, and the second begins when we realize we only have one.',
    author: '― Confucius',
  },
  {
    content:
      'The man who moves a mountain begins by carrying away small stones.',
    author: '― Confucius',
  },
  {
    content:
      'The man who asks a question is a fool for a minute, the man who does not ask is a fool for life.',
    author: '― Confucius',
  },
  {
    content:
      "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did so. So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.",
    author: '― Mark Twain',
  },
  {
    content:
      "You have no responsibility to live up to what other people think you ought to accomplish. I have no responsibility to be like they expect me to be. It's their mistake, not my failing.",
    author: '― Mark Twain',
  },
  {
    content:
      'Watch your thoughts, they become your words; watch your words, they become your actions; watch your actions, they become your habits; watch your habits, they become your character; watch your character, it becomes your destiny.',
    author: '― Laozi',
  },
  {
    content: 'If you are going through hell, keep going.',
    author: '― Winston S. Churchill',
  },
  {
    content: 'Attitude is a little thing that makes a big difference.',
    author: '― Winston S. Churchill',
  },
  {
    content:
      'To think is easy. To act is hard. But the hardest thing in the world is to act in accordance with your thinking.',
    author: '― Johann Wolfgang von Goethe',
  },
  {
    content:
      'It is not death that a man should fear, but he should fear never beginning to live.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'If it is not right do not do it; if it is not true do not say it.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'You have power over your mind - not outside events. Realize this, and you will find strength.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'The happiness of your life depends upon the quality of your thoughts.',
    author: '― Marcus Aurelius',
  },
  {
    content:
      'If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment.',
    author: '― Marcus Aurelius',
  },
  {
    content: 'There is no easy way from the earth to the stars',
    author: '― Seneca',
  },
  {
    content: 'We suffer more often in imagination than in reality',
    author: '― Seneca',
  },
] as const;

export const Tools = {
  'Frontend Technologies': [
    {
      title: 'React',
      description:
        'My go-to library for building user interfaces. I use it with TypeScript for type safety and better development experience.',
      href: 'https://reactjs.org/',
    },
    {
      title: 'TypeScript',
      description:
        'Essential for large-scale applications. Provides type safety and better IDE support, making development more efficient.',
      href: 'https://www.typescriptlang.org/',
    },
    {
      title: 'Next.js',
      description:
        'Perfect for building production-ready React applications with server-side rendering and static site generation.',
      href: 'https://nextjs.org/',
    },
    {
      title: 'Angular',
      description:
        'Used extensively in enterprise applications. Great for building complex, scalable frontend applications.',
      href: 'https://angular.io/',
    },
    {
      title: 'Material-UI (MUI)',
      description:
        'My preferred component library for React applications. Provides consistent design and excellent theming capabilities.',
      href: 'https://mui.com/',
    },
    {
      title: 'Tailwind CSS',
      description:
        'Utility-first CSS framework that speeds up development and ensures consistent styling across applications.',
      href: 'https://tailwindcss.com/',
    },
  ],
  'Backend Technologies': [
    {
      title: 'Node.js',
      description:
        'JavaScript runtime for building scalable server-side applications. Perfect for full-stack development.',
      href: 'https://nodejs.org/',
    },
    {
      title: 'Express.js',
      description:
        'Minimal and flexible web application framework for Node.js. Great for building APIs and web applications.',
      href: 'https://expressjs.com/',
    },
    {
      title: 'NestJS',
      description:
        'Progressive Node.js framework for building efficient and scalable server-side applications.',
      href: 'https://nestjs.com/',
    },
    {
      title: 'SQL & Sequelize',
      description:
        'Database management and ORM for Node.js applications. Essential for data persistence and management.',
      href: 'https://sequelize.org/',
    },
  ],
  'Development Tools': [
    {
      title: 'Visual Studio Code',
      description:
        'My primary code editor with excellent TypeScript support and a vast ecosystem of extensions.',
      href: 'https://code.visualstudio.com/',
    },
    {
      title: 'Git',
      description:
        'Version control system essential for collaborative development and code management.',
      href: 'https://git-scm.com/',
    },
    {
      title: 'Postman',
      description:
        'API development and testing tool. Essential for backend development and API documentation.',
      href: 'https://www.postman.com/',
    },
    {
      title: 'Figma',
      description:
        'Design tool for creating mockups and collaborating with designers on UI/UX projects.',
      href: 'https://www.figma.com/',
    },
    {
      title: 'Vitest',
      description:
        'Fast unit testing framework for Vite-based projects. Essential for maintaining code quality.',
      href: 'https://vitest.dev/',
    },
    {
      title: 'Playwright',
      description:
        'End-to-end testing framework for web applications. Great for testing user workflows.',
      href: 'https://playwright.dev/',
    },
  ],
  'Integrations & APIs': [
    {
      title: 'Google Maps API',
      description:
        'Used extensively for location-based features in ride-sharing and tracking applications.',
      href: 'https://developers.google.com/maps',
    },
    {
      title: 'Firebase Cloud Messaging (FCM)',
      description:
        'Push notification service for real-time updates and user engagement.',
      href: 'https://firebase.google.com/docs/cloud-messaging',
    },
    {
      title: 'Microsoft Authentication (MSAL)',
      description:
        'Secure authentication solution for enterprise applications and Power BI integrations.',
      href: 'https://docs.microsoft.com/en-us/azure/active-directory/develop/',
    },
    {
      title: 'Power BI',
      description:
        'Business intelligence platform for creating interactive reports and dashboards.',
      href: 'https://powerbi.microsoft.com/',
    },
  ],
} as const;
