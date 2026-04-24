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
- npm (lockfile is `package-lock.json`)

### Install

```bash
npm install
```

### Run Dev Server

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

- `npm run dev` - Start local development server (Turbopack)
- `npm run build` - Create production build (Turbopack)
- `npm run start` - Start production server
- `npm run lint` - Run ESLint with `--fix`
- `npm run format` - Run Prettier write mode
- `npm run format:check` - Run Prettier check mode

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
