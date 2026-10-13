---
name: Cobalt Press
lineage: Editorial, work-led single page. Replaced the Spotlight / Tailwind UI template in 2026; legacy Spotlight components remain only under `/about`.
colors:
  light:
    paper: '#F4F5F7'          # page canvas
    paper-deep: '#E9EBF0'     # banded sections, cards, active rows
    ink: '#14161A'            # headings, primary text
    ink-soft: '#3A3F4A'       # body, secondary text
    muted: '#5B6170'          # meta, dates, labels — 5.2:1 on paper-deep
    rule: 'rgba(20,22,26,0.12)'
    rule-strong: 'rgba(20,22,26,0.24)'  # outlined buttons, card hover borders
    accent: '#2B45FF'
    accent-soft: 'rgba(43,69,255,0.08)'
  dark:
    paper: '#0B0D12'
    paper-deep: '#12151C'
    ink: '#E8EAF0'
    ink-soft: '#C2C7D2'
    muted: '#8A90A2'
    rule: 'rgba(232,234,240,0.11)'
    rule-strong: 'rgba(232,234,240,0.24)'
    accent: '#5B74FF'
    accent-soft: 'rgba(91,116,255,0.12)'
typography:
  display: Schibsted Grotesk 600–800 (`font-heading`) — headlines, titles, buttons, labels
  body: Inter (`font-sans`) — UI text, meta
  serif: Source Serif 4 (`font-serif`) — long-form lines, taglines, beliefs
  mono: system mono — stack tags only
  hero: clamp(46px, 6.4vw, 96px), line-height 0.98, tracking -0.045em
  section-lg: clamp(36px, 4.5vw, 64px)   # Work, Why me
  section-md: clamp(28px, 3vw, 44px)     # all other sections
  eyebrow: 12px, 600, uppercase, 0.08em  # `eyebrow` utility
  body-serif: clamp(17px, 1.6vw, 22px)
  meta: 12–13px
layout:
  frame: '`page-frame` utility — max-width 75rem, 1.5rem gutter (2.5rem ≥ lg)'
  section-padding: py-24 (py-28 for banded / closing sections)
  grid: 12 columns from md/lg, collapsing to one column
radii:
  sharp: rounded-xs — cards, detail panels, stack tags
  pill: rounded-full — buttons, chips, toggle, avatar
motion:
  ease: '--ease-out-quint: cubic-bezier(0.22, 1, 0.36, 1)'
  hero: CSS `rise` (transform only on h1) / `rise-fade`, staggered 0–220ms
  reveal: '`[data-reveal]` + RevealObserver, 24px rise over 700ms'
  swap: '`swap-in` on the project detail when selection changes'
  reduced-motion: every animation is gated on prefers-reduced-motion: no-preference
---

## Brand

Editorial, confident, quiet. The page reads like a well-set magazine spread:
one huge claim, proof in numbers, then the work. Hierarchy comes from type
scale and whitespace, not from shadows, gradients, or decoration. Cobalt is the
only colour that carries meaning: actions, the current section, the impact
line, and section numbers.

Avoid: gradients, glass blur on content, drop shadows on cards, new signal
colours, extra radii.

## Colour

Tokens live in `src/app/globals.css` as CSS variables, switched by the `.dark`
class (`next-themes`, `attribute="class"`), and exposed to Tailwind via
`@theme inline` (`bg-paper`, `text-ink-soft`, `border-rule-strong`, ...).
Never hard-code hex values in components.

- Text on `paper` / `paper-deep` uses `ink`, `ink-soft`, or `muted` only. All
  three pass WCAG AA at 12px in both themes.
- `accent` on paper is 5.7:1 (light) / 4.7:1+ (dark); text on an accent fill
  uses `text-paper`.
- Banded sections (`Why me`, `Writing`, `Marquee`) use `paper-deep` with
  `border-y border-rule`.

## Type

Three families loaded through `next/font` in `src/app/fonts.ts`. Display type
earns weight through size and tight tracking (`tracking-display`,
`tracking-display-tight`, `tracking-heading`). Serif is reserved for prose that
should read like a voice: the hero paragraph, project taglines, beliefs, note
descriptions.

## Structure

Homepage order (`src/app/page.tsx`): Hero, Metrics, Marquee, 01 Work
(featured list + sticky detail, client projects, side projects), 02 Archive,
03 Experience, 04 Why me, 05 Toolkit, 06 Writing, 07 Contact.

Every section after the hero starts with `SectionHeading`
(`src/components/editorial/SectionHeading.tsx`): numbered eyebrow, display
title, optional right-aligned meta. Keep the numbering in sync when sections
move. Sections that the nav targets carry an `id` plus `scroll-mt-24`.

## Components

- **Nav** (`editorial/Nav.tsx`): sticky, blurred paper bar. Desktop links show
  an accent underline for the section in view (IntersectionObserver, home route
  only). The "Now" strip collapses after 160px of scroll. Below `md` a Headless
  UI `Popover` opens a full-width menu. Theme control is a `role="switch"`.
  Note: the header's `backdrop-filter` is the containing block for `fixed`
  children, so menu layers size themselves explicitly.
- **Buttons**: primary is an accent pill (`min-h-12`), secondary is an outlined
  pill on `border-rule-strong`. Arrows nudge on hover; `active:scale-[0.98]`.
- **Work list**: buttons with `aria-pressed`; active row gets `paper-deep` and
  a 3px accent bar. On mobile the detail opens in a right-hand drawer.
- **Project cards**: `paper-deep`, sharp corners, whole card clickable via a
  stretched link. Status is an accent dot (live) or hollow dot (in development).
  Link labels say where they go: Read case study, View on GitHub, Visit site.
- **Stack tags**: `font-mono` 11px on `paper` with a hairline border.
- **Contact**: email pill, copy-email button with a `role="status"` message,
  and 44px LinkedIn / GitHub / Resume chips.

## Accessibility

- Global `:focus-visible` ring: 2px accent, 3px offset. Don't remove outlines.
- Skip link to `#main` is the first focusable element.
- Interactive targets are at least 44px tall on touch layouts.
- One `h1` per page; sections use `h2`, their sub-blocks `h3`/`h4`.
- Decorative glyphs (arrows, separators, dots) are `aria-hidden`.

## Motion

CSS only, no animation library on the homepage. Scroll reveal is opt-in: add
`data-reveal` to a block; `RevealObserver` (mounted once in the root layout)
adds `.reveal-ready` to `<html>` after first paint, so content is visible
without JS. Animate section-level blocks, not individual words. Everything is
off under `prefers-reduced-motion: reduce`.
