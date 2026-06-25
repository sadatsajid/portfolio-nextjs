export type NowItem = { label: string; text: string };

export type Metric = { value: string; label: string; context: string };

export type FeaturedProject = {
  slug: string;
  title: string;
  role: string;
  year: string;
  company: string;
  tagline: string;
  impact: string;
  contributions: string[];
  stack: string[];
  kind: string;
};

export type ArchiveProject = {
  title: string;
  year: string;
  kind: string;
  note: string;
};

export type PersonalProject = {
  title: string;
  year: string;
  tagline: string;
  description: string;
  stack: string[];
  href?: string;
  status: 'live' | 'in-development';
};

export type Skills = Record<string, readonly string[]>;

// ── Identity ────────────────────────────────────────────
export const CONTACT = {
  email: 'sadatsajid@gmail.com',
  linkedin: 'https://linkedin.com/in/asif-sadat',
  github: 'https://github.com/sadatsajid',
  resume: '/resume.pdf',
  location: 'Dhaka, Bangladesh',
  role: 'Staff Software Engineer',
  company: 'Selise Digital Platforms',
} as const;

// ── Now (update this each week) ──────────────────────────
export const NOW: { week: string; items: NowItem[] } = {
  week: 'Jun 2026',
  items: [
    { label: 'Shipping', text: 'AI Summary v2 — interest-based threat insights at Selise' },
    { label: 'Reading', text: 'Designing Data-Intensive Applications, ch. 7' },
    { label: 'Building', text: 'A side project in React Native + Expo' },
    { label: 'Learning', text: 'Docker + AWS, the slow proper way' },
  ],
};

// ── Metrics ──────────────────────────────────────────────
export const METRICS: Metric[] = [
  { value: '60%', label: 'faster driver onboarding', context: 'MGH Group' },
  { value: '40%', label: 'server cost reduction', context: 'OBHAI ride-share' },
  { value: '15+', label: 'production apps shipped', context: 'across teams' },
  { value: '7yr', label: 'leading & mentoring', context: 'junior to senior' },
];

// ── Featured projects ────────────────────────────────────
export const FEATURED: FeaturedProject[] = [
  {
    slug: 'creolytix',
    title: 'Creolytix',
    role: 'Staff Engineer · Frontend Lead',
    year: '2024 — present',
    company: 'Selise Digital Platforms',
    tagline: "Real-time threat monitoring for organizations who can't afford to miss a signal.",
    impact:
      'Led the AI Summary feature end-to-end — from shapeless PM ask to a UI that turns 200-line threat feeds into one-paragraph decisions.',
    contributions: [
      'Designed & shipped the AI Summary interface (country-based + interest-based)',
      'Built the Insights module: drag-resize widgets, per-tab filters, global filters',
      'Unified Axios service layer across multi-environment APIs',
      'Vitest coverage for the critical path',
    ],
    stack: ['React', 'TypeScript', 'Vitest', 'Axios', 'Zustand'],
    kind: 'Enterprise SaaS',
  },
  {
    slug: 'obhai-sales',
    title: 'OBHAI Sales Manager Panel',
    role: 'Fullstack · Architect',
    year: '2022',
    company: 'MGH Group',
    tagline: 'A performance engine for the people who run the people who run the rides.',
    impact:
      'Sales managers now monitor target attainment, active drivers, and onboarding flow in real time. Replaced a spreadsheet ritual.',
    contributions: [
      'Role-based access from super-admin down to manager',
      "Web Push alerts so managers don't live in the tab",
      'PWA install — works on the warehouse floor',
      'Reducer + Context state, no Redux bloat',
    ],
    stack: ['React', 'MUI', 'Node.js', 'Web Push', 'PWA'],
    kind: 'Internal tool',
  },
  {
    slug: 'obhai-admin',
    title: 'OBHAI Admin Panel',
    role: 'Lead Frontend',
    year: '2019 — 2022',
    company: 'MGH Group',
    tagline: 'The single pane of glass for a ride-sharing back office.',
    impact:
      'Eight modules, one panel. Asset management, issue tracking, sales monitoring, express delivery, intercity fares, task distribution, push notifications. The CRM team\'s home screen.',
    contributions: [
      'Cut server costs 40% by collapsing redundant API calls',
      'Revamped Request Ride flow used by every CRM agent',
      'Built the notification system used by the branding team',
    ],
    stack: ['AngularJS', 'Bootstrap', 'FCM'],
    kind: 'Back office',
  },
  {
    slug: 'warehouse',
    title: 'NWS — Warehouse Management',
    role: 'Fullstack · Designer',
    year: '2024',
    company: 'MGH Group',
    tagline: 'QR-driven inventory across every warehouse and branch.',
    impact:
      'Designed the system from data model to QR scanner UX. Replaced clipboard inventory across multiple warehouses.',
    contributions: [
      'QR code reader integrated into the warehouse worker flow',
      'Multi-warehouse, multi-branch hierarchy',
      'Audit trails for every movement',
    ],
    stack: ['React', 'MUI', 'TailwindCSS', 'Node.js'],
    kind: 'Logistics',
  },
  {
    slug: 'ride-tracker',
    title: 'OBHAI Ride Tracker',
    role: 'Frontend',
    year: '2020',
    company: 'MGH Group',
    tagline: 'Share your ride link with someone who worries.',
    impact:
      'Real-time map + ETA + shareable trip URL. Built for the moment a customer texts mum "I\'m in the cab."',
    contributions: [
      'Google Maps API integration with live polling',
      'Shareable emergency-contact URL',
      'Optimised for low-bandwidth Dhaka networks',
    ],
    stack: ['React', 'MUI', 'Google Maps API'],
    kind: 'Consumer',
  },
  {
    slug: 'peyala',
    title: 'Peyala Admin Panel',
    role: 'Fullstack',
    year: '2021',
    company: 'MGH Group',
    tagline: 'A food-delivery brain for branch managers who think in tickets, not tabs.',
    impact:
      'Branches manage menus, orders, and deliveries from one panel. Payments through SSL Commerz, addresses through Google Maps Autocomplete.',
    contributions: [
      'End-to-end fullstack: schema → API → UI',
      'Payment gateway integration (SSL Commerz)',
      'Address autocomplete for delivery accuracy',
    ],
    stack: ['React', 'Express', 'Sequelize', 'MySQL'],
    kind: 'Fullstack',
  },
];

// ── Archive ──────────────────────────────────────────────
export const ARCHIVE: ArchiveProject[] = [
  { title: 'OBHAI Owner Panel', year: '2022', kind: 'Fullstack', note: 'Fleet management for car owners — daily driver performance' },
  { title: 'Registration Portal', year: '2021', kind: 'Web', note: 'Secure driver onboarding, 60% faster than the previous flow' },
  { title: 'mgX Landing Page', year: '2023', kind: 'Marketing', note: 'Domestic + international order tracking, public site' },
  { title: 'mgX Hub Admin', year: '2023', kind: 'Internal', note: 'Hub-side logistics management' },
  { title: 'mgX Customer Panel', year: '2023', kind: 'Customer', note: 'Order placement and tracking' },
  { title: 'mgX Customer Service', year: '2020', kind: 'Internal', note: 'Angular 8 portal for call-centre agents' },
  { title: 'Jatra Flagship Landing', year: '2023', kind: 'Marketing', note: '5-star travel brand under MGH Group' },
  { title: 'MGH PowerBI Embed', year: '2024', kind: 'Fullstack', note: 'Authenticated PowerBI embedding inside React' },
  { title: 'MGH Query Management', year: '2023', kind: 'Fullstack', note: 'Internal issue & query tracking' },
  { title: 'Leave Management', year: '2023', kind: 'Internal', note: 'HR leave workflow' },
  { title: 'DristiVan — SAAF', year: '2024', kind: 'Healthcare', note: 'EMR for glaucoma-screening patients' },
];

// ── Beliefs ──────────────────────────────────────────────
export const BELIEFS: string[] = [
  'The best code review starts with "what is this trying to do for the business?"',
  'Junior devs grow faster when you explain the why, not the what.',
  'Refactoring is a feature. Schedule it.',
  "If the PM can't read your component names, they're wrong.",
];

// ── Skills ───────────────────────────────────────────────
export const SKILLS: Skills = {
  Frontend: ['React', 'Next.js', 'Angular', 'TypeScript', 'Tailwind', 'MUI', 'Zustand', 'Redux'],
  Backend: ['Node.js', 'Express', 'NestJS', 'MySQL', 'Sequelize'],
  'Realtime & Tooling': ['Pusher', 'SignalR', 'FCM', 'Web Push', 'PWA', 'Google Maps', 'Vitest'],
  'Currently learning': ['Docker', 'AWS', 'React Native'],
};

// Writing now lives in src/content/notes/*.mdx — see src/lib/notes.ts

// ── Work experience ──────────────────────────────────────
export type WorkRole = { title: string; start: string; end: string };

export type WorkEntry = {
  company: string;
  start: string;
  end: string;
  role?: string;
  roles?: WorkRole[];
};

export const WORK: WorkEntry[] = [
  {
    company: 'SELISE Digital Platforms',
    start: '2024',
    end: 'Present',
    role: 'Staff Software Engineer (Frontend)',
  },
  {
    company: 'MGH Group',
    start: '2018',
    end: '2024',
    roles: [
      { title: 'Manager — Full Stack Developer',               start: '2023', end: '2024' },
      { title: 'Assistant Manager — Full Stack Developer',     start: '2021', end: '2023' },
      { title: 'Senior Executive — Lead Frontend Developer',   start: '2019', end: '2020' },
      { title: 'Trainee Executive — Junior Frontend Developer',start: '2018', end: '2019' },
    ],
  },
];

// ── Personal / side projects ─────────────────────────────
export const PERSONAL_PROJECTS: PersonalProject[] = [
  {
    title: 'TrySpecta',
    year: '2025',
    tagline: 'AI-powered virtual glasses try-on for ecommerce.',
    description:
      'Turbo monorepo — NestJS API + Next.js storefront. Customers upload a selfie; FAL/Gemini overlays frames in real time. PostgreSQL + Redis backend, shared Zod validation across the stack.',
    stack: ['Next.js', 'NestJS', 'TypeScript', 'FAL', 'Gemini', 'PostgreSQL', 'Redis'],
    status: 'in-development',
  },
  {
    title: 'ReadSaver',
    year: '2025',
    tagline: 'Paste any article. Get a TL;DR, key points, and Q&A with citations.',
    description:
      'Full RAG pipeline: Jina Reader extracts content, OpenAI embeds and chunks it into pgvector. Semantic search returns grounded answers with source attribution. Streaming UI, magic-link auth.',
    stack: ['Next.js', 'OpenAI', 'pgvector', 'Supabase', 'Prisma', 'TypeScript'],
    status: 'in-development',
  },
  {
    title: 'MoneyQ',
    year: '2025',
    tagline: 'Personal finance for Bangladesh — AI categorisation, savings buckets, EMI tracking.',
    description:
      'BDT-primary expense tracker. GPT-4o-mini auto-categorises transactions, decimal.js handles financial precision, Vercel crons process recurring entries nightly, Recharts renders monthly insights.',
    stack: ['Next.js', 'OpenAI', 'Supabase', 'Prisma', 'Recharts', 'TypeScript'],
    status: 'in-development',
  },
];

// ── Marquee ──────────────────────────────────────────────
export const MARQUEE_ITEMS = [
  'Frontend depth',
  'Fullstack range',
  'Team leadership',
  'Business fluency',
  'Plain-English code reviews',
] as const;
