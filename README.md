# Asif Sadat Portfolio

Production portfolio built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**.

## Overview

This repository contains a personal portfolio site with:

- Home, About, Projects, and Skills pages
- Structured content managed from typed data modules
- Dark mode support with `next-themes`
- Animated UI using `motion`
- RSS endpoint and dynamic OG image generation

## Tech Stack

- Next.js 15 (App Router)
- React 19
- TypeScript (strict mode)
- Tailwind CSS 4
- ESLint 9 + Prettier 3
- Vercel Analytics

## Project Structure

```txt
src/
  app/            # Routes, layout, metadata, route handlers
  components/     # Reusable UI components
  data/           # Typed static content (projects, tools, profile, etc.)
  images/         # Local image assets and logos
  lib/            # Shared helpers and lightweight utilities
  styles/         # Global style primitives
public/           # Static assets (favicons, fonts, images, robots, sitemap)
```

## Getting Started

### Prerequisites

- Node.js 20+ (recommended)
- pnpm 10+ (lockfile is `pnpm-lock.yaml`)

### Install

```bash
pnpm install
```

### Run Dev Server

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Available Scripts

- `pnpm dev` - Start local development server (Turbopack)
- `pnpm build` - Create production build (Turbopack)
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint in check mode
- `pnpm lint:fix` - Run ESLint with auto-fixes
- `pnpm typecheck` - Run TypeScript type-checking without emit
- `pnpm validate:push` - Run strict lint, typecheck, and production build
- `pnpm format` - Run Prettier write mode
- `pnpm format:check` - Run Prettier check mode

## Git Hooks (Lefthook)

This project uses Lefthook to enforce a strict pre-push validation gate.

- Hook: `pre-push`
- Command: `pnpm validate:push`
- Behavior: blocks push when lint warnings/errors, type errors, or build failures are present

Install hooks locally (also runs automatically via the `prepare` script):

```bash
pnpm exec lefthook install
```

Run the hook manually:

```bash
pnpm exec lefthook run pre-push
```

## Content Editing Guide

Most portfolio content is maintained in:

- `src/data/lifeApi.tsx` (name, about text, social links, projects, tools, work history)

Page routes:

- `/` -> `src/app/page.tsx`
- `/about` -> `src/app/about/page.tsx`
- `/projects` -> `src/app/projects/page.tsx`
- `/skills` -> `src/app/skills/page.tsx`

## API and Metadata Notes

- `/rss.xml` is rewritten by middleware to `src/app/api/rss.xml/route.ts`
- OG image endpoint: `src/app/api/og/route.tsx`
- Root metadata is defined in `src/app/layout.tsx`

## Environment Variables

Optional:

```bash
NEXT_PUBLIC_URL=https://your-domain.com
```

Used to set `metadataBase` for canonical metadata generation.

## Design and Engineering Rules

- System design guidance: `DESIGN.md`
- Engineering operating rules and architecture boundaries: `AGENTS.md`

If you modify shared layout, route structure, static data contracts, or styling primitives, update code in the owning folder and verify with lint/build checks.

## Deployment

This app is ready for Vercel deployment:

1. Create a new project in Vercel
2. Connect this repository
3. Configure `NEXT_PUBLIC_URL`
4. Deploy

## License

Private project. All rights reserved unless stated otherwise by the repository owner.
