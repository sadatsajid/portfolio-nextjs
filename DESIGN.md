---
name: Personal Portfolio
lineage: Derived from the Spotlight / jarocki.me developer-portfolio idiom — zinc neutrals, single warm accent, glass-pill chrome, ambient gradient atmosphere, sans-serif throughout.
colors:
  light:
    background: '#fafafa'        # zinc-50 — page canvas
    surface: '#ffffff'            # white — inner panels, cards, resume
    surface-muted: '#f4f4f5'      # zinc-100 — badges, small chips, card hover fill
    surface-sunken: '#fafafa'     # zinc-50 — logo wells inside cards
    text: '#3f3f46'               # zinc-700 — body
    text-strong: '#27272a'        # zinc-800 — headings, prominent labels
    text-stronger: '#18181b'      # zinc-900 — hero/resume emphasis
    text-muted: '#52525b'         # zinc-600 — long-form paragraphs
    text-meta: '#71717a'          # zinc-500 — footer, captions
    text-faint: '#a1a1aa'         # zinc-400 — eyebrows, dates, dim CTAs
    border: '#f4f4f5'             # zinc-100 — hairline dividers
    ring: 'rgb(24 24 27 / 0.05)'  # zinc-900/5 — 1px card rings
    accent: '#dc2626'             # red-600 — primary, hover, active nav
    accent-hover: '#f87171'       # red-400
    accent-active: '#991b1b'      # red-800
    atmosphere-warm: 'linear-gradient(to bottom right, #fee2e2, #ffedd5)'  # red-100 → orange-100, 20% opacity, blurred
    atmosphere-cool: 'linear-gradient(to bottom right, #dbeafe, #f3e8ff)'  # blue-100 → purple-100, 20% opacity, blurred
  dark:
    background: '#000000'         # black — page canvas
    surface: '#18181b'            # zinc-900 — inner panels, cards, resume
    surface-muted: '#27272a'      # zinc-800 — badges, glass-pill fills (at /90 opacity)
    surface-sunken: '#27272a'     # zinc-800 — logo wells inside cards
    text: '#d4d4d8'               # zinc-300 — body
    text-strong: '#f4f4f5'        # zinc-100 — headings
    text-muted: '#a1a1aa'         # zinc-400 — long-form paragraphs
    text-meta: '#a1a1aa'          # zinc-400 — footer, captions
    text-faint: '#71717a'         # zinc-500 — eyebrows, dates
    border: 'rgb(63 63 70 / 0.4)' # zinc-700/40 — hairline dividers
    ring: 'rgb(255 255 255 / 0.1)'# white/10 — 1px card rings
    accent: '#dc2626'             # unchanged — works on both themes
    atmosphere-warm: 'linear-gradient(to bottom right, #7f1d1d, #7c2d12)'  # red-900 → orange-900, 10% opacity, blurred
    atmosphere-cool: 'linear-gradient(to bottom right, #1e3a8a, #581c87)'  # blue-900 → purple-900, 10% opacity, blurred
typography:
  font-sans: Geist Sans (loaded via `geist/font/sans`, applied on `<html>`)
  font-mono: Geist Mono (token: `--font-mono`; used for tech-stack badges on project cards)
  # No serif face. Headings and body share Geist Sans.
  hero-h1:        { size: 2.25rem / 3rem, weight: 700, tracking: -0.025em, balance: true }  # text-4xl → sm:text-5xl
  section-h2:     { size: 1.875rem / 2.25rem, weight: 700, tracking: -0.025em }             # text-3xl → sm:text-4xl
  page-title-h1:  { size: 2.25rem, weight: 700, tracking: -0.025em, balance: true }         # text-4xl
  card-title:     { size: 1rem, weight: 600, tracking: -0.025em, balance: true }            # text-base
  body-lg:        { size: 1.125rem, weight: 400, leading: 1.625 }                           # text-lg / leading-relaxed
  body:           { size: 1rem, weight: 400, leading: 1.625 }                               # text-base
  body-sm:        { size: 0.875rem, weight: 400 }                                           # text-sm — card descriptions
  meta:           { size: 0.75rem, weight: 500 }                                            # text-xs — dates, role labels
  badge:          { size: 0.75rem, weight: 400, leading: 1rem }                             # text-xs — pill badges
spacing:
  container-outer-max: 80rem         # max-w-7xl — outer frame, page backdrop
  container-inner-max-default: 42rem # max-w-2xl — prose-width content
  container-inner-max-wide: 64rem    # max-w-5xl — grids, wide sections
  gutter-mobile: 1rem                # px-4
  gutter-tablet: 2rem                # sm:px-8
  gutter-desktop: 3rem               # lg:px-12
  section-gap-primary: 4rem / 5rem   # mt-16 → sm:mt-20 (hero → intro children)
  section-gap-standard: 6rem / 8rem  # mt-24 → sm:mt-32 (between stacked sections)
  section-gap-footer: 8rem / 10rem   # mt-32 → sm:mt-40 (before footer)
radii:
  sharp: 0.375rem    # rounded-md — buttons, quotes
  soft: 0.5rem       # rounded-lg — resume row hover target
  card: 1rem         # rounded-2xl — cards, hero portrait, resume panel
  panel: 1.5rem      # rounded-3xl — mobile nav panel
  pill: 9999px       # rounded-full — nav, theme toggle, badges, social icons, logo chips, dot indicators
elevation:
  card-resting: shadow-lg + ring-1 ring-zinc-900/5 (dark: ring-white/10)
  card-hover: shadow-xl (transition)
  glass-pill: bg-white/90 + backdrop-blur + shadow-lg + ring-1 ring-zinc-900/5 (dark: bg-zinc-800/90 + ring-white/10)
  logo-chip: shadow-md + ring-1 ring-zinc-900/5 (dark: border border-zinc-700/50, no ring)
  hero-portrait: shadow-xl + ring-1 ring-zinc-900/5 (dark: ring-white/10)
motion:
  library: motion (formerly framer-motion)
  entrance-default: { opacity: 0→1, y: 20→0, duration: 0.5s, staggered delay 0.1–0.6s }
  entrance-icon:    { opacity: 0→1, scale: 0.8→1, duration: 0.3s }
  transition-ui: 150ms ease (nav/popover), 200ms (theme toggle hover)
---

## Brand & Style

This is a modern developer-portfolio aesthetic derived from the Spotlight / jarocki.me template family. It reads as clean, technical, and quietly warm — zinc grays anchor the layout, a single red accent punctuates interactions, and two blurred gradient orbs sit behind the content to add soft atmosphere without decoration.

The vibe is personal site, not editorial magazine: one sans-serif family (Geist), friendly rounded corners, glass-morphic pill navigation, and layered shadows rather than flat editorial blocks. Dark mode is a first-class surface, not an afterthought.

## Colors

The palette is zinc neutrals plus a single warm accent. Light mode layers white surfaces onto a zinc-50 canvas; dark mode layers zinc-900 surfaces onto pure black. The accent is red-600 (`#dc2626`), intentionally shared across both themes so interactive signal reads the same in either mode.

Text uses a 5-step zinc ramp (zinc-400 → zinc-900 in light, zinc-500 → zinc-100 in dark) rather than a full Material-3 token set. Structural separation comes from surface tint + hairline rings, not from many named tokens.

Two large blurred gradient orbs (warm red/orange top-right, cool blue/purple mid-left) sit at `-z-10` behind the content. They are atmospheric only — opacity 20% in light, 10% in dark — and must not carry semantic meaning.

Status signals are minimal: a `bg-green-700` dot for "live" links, `bg-red-700` dot for "shut down." Avoid introducing new signal colors without a reason.

## Typography

One family, Geist Sans, for everything. There is no serif face. Headings earn weight through `font-bold` (700) and `tracking-tight` (-0.025em) on `text-3xl`/`text-4xl`/`text-5xl`, not through a display face. Long-form paragraphs use `text-base leading-relaxed` or `text-lg leading-relaxed` at the hero intro.

Use `text-balance` on headline H1s and card titles — it's already set as a global utility class in `globals.css` and applied consistently in `PageTitle`, hero, and `Card.Title`. Meta/eyebrow rows use `text-xs` in zinc-400 (light) / zinc-500 (dark) at `font-medium`.

The only place `font-mono` (Geist Mono) appears is tech-stack badges on project cards.

## Layout & Spacing

Content sits inside a two-tier container:

- **OuterContainer** (`max-w-7xl`, `sm:px-8 lg:px-8`) frames the page; this is where the ambient background panel and gradient orbs live.
- **InnerContainer** (`max-w-2xl` default, `lg:max-w-5xl` for grids, `px-4 sm:px-8 lg:px-12`) holds the actual content column.

There is no 12-column grid. Sections are composed with CSS grid / flex on a per-section basis and rely on `max-w-2xl` (prose) vs `max-w-5xl` (wide) as the two canonical widths. Page-level headers in `PageLayout` use `max-w-3xl`.

Vertical rhythm uses the Tailwind scale with a mobile/desktop step:
- `mt-16 sm:mt-20` — hero to first child
- `mt-24 sm:mt-32` — between stacked sections
- `mt-32 sm:mt-40` — before footer

Don't introduce hardcoded pixel gaps. Stay on the Tailwind scale.

## Elevation & Depth

This system uses **real shadows** combined with **1px rings**, not flat tonal layering. Cards rest at `shadow-lg + ring-1 ring-zinc-900/5` and lift to `shadow-xl` on hover. In dark mode, rings shift to `ring-white/10` and some surfaces pick up an explicit 1px `border-zinc-700/50` instead of a ring.

Three elevation idioms recur:

- **Card elevation** — white/zinc-900 surface, ring-1 hairline, shadow-lg at rest, shadow-xl on hover. Applied to `Resume`, logo chips inside `ProjectCard` and `Resume`, and the hero portrait.
- **Glass pill** — `bg-white/90` + `backdrop-blur` + shadow-lg + ring-1. Used by `DesktopNavigation`, `MobileNavigation` trigger, and `ThemeToggle`. This is the signature chrome element.
- **Ambient gradient orbs** — two large blurred radial gradients behind content at `-z-10`. Purely atmospheric.

`Card` also uses a secondary hover idiom: a full-bleed `bg-zinc-50` / `dark:bg-zinc-800/50` layer behind the card content that scales from 95% → 100% and fades in on `group-hover`, creating a soft "pickup" effect without moving the card itself.

## Shapes

Corners are soft, with three distinct radii in use:

- `rounded-full` — dominant chrome shape: navigation, theme toggle, badges, social icons, logo chips, status dots, avatar.
- `rounded-2xl` — cards, the resume panel, the hero portrait (with a deliberate `rotate-3` tilt), hover fill layers.
- `rounded-3xl` — mobile navigation popover panel only.
- `rounded-md` — buttons and the `Quote` component.
- `rounded-lg` — row-level hover hit areas inside the resume list.

There is no 0px / "sharp" aesthetic. If a new component needs a radius, pick one of the above — don't introduce a new step.

## Motion

Page and section entrances use the `motion` package with a consistent `opacity: 0 → 1, y: 20 → 0` over 0.5s, staggered via `delay: 0.1 * index` or fixed delays (`0.4`, `0.6`) to cascade hero → about → work. Icon entrances use `opacity + scale: 0.8 → 1` over 0.3s.

UI transitions (nav hover, theme toggle, popover open/close) are short — 150ms for popovers, 200ms for toggles — and prefer `transition` + color/shadow changes over transform-based choreography.

Avoid adding entrance animations to small text elements. The pattern is: animate the section wrapper, let children inherit.

## Components

### Button (`src/components/Button.tsx`)
Rounded-md, `px-3 py-2 text-sm`, two variants:
- `primary` — `bg-zinc-800` with `text-zinc-100` (dark: `bg-zinc-700`).
- `secondary` — `bg-zinc-50` with `text-zinc-900` (dark: `bg-zinc-800/50` with `text-zinc-300`).

Buttons polymorph via `as` prop (default `button`). No circular CTA, no border-only ghost variant in the current system — don't invent one without a reason.

### Card (`src/components/Card.tsx`)
Compound: `Card`, `Card.Link`, `Card.Title`, `Card.Description`, `Card.Cta`, `Card.Eyebrow`. Cards are **not** split 50/50 image/content — they are vertical stacks where the hover reveals a soft scaled `bg-zinc-50` layer behind the content. `Card.Cta` renders the accent-colored `→` action row. `Card.Eyebrow` is a zinc-400 caption that can optionally render a vertical divider line to its left via `decorate`.

### ProjectCard (`src/components/ProjectCard.tsx`)
Uses `Card` + a circular logo chip (`h-16 w-16 rounded-full bg-white shadow-md ring-1`) at the top, title, description, tech-stack `Badge` row in `font-mono`, then a footer link row with a small colored dot (green = live, red = shut down) next to the label.

### Badge (`src/components/Badge.tsx`)
Pill chip: `rounded-full bg-zinc-100 px-2.5 py-0.5 text-xs`, hover shifts text to `text-primary`. Supports either `href` (renders `next/link`) or `onClick` (renders button) via discriminated props.

### Navigation (`src/components/Navigation.tsx`)
Desktop is the signature glass pill: `rounded-full bg-white/90 backdrop-blur shadow-lg ring-1`. Active and hover states both switch text to `text-primary`. Mobile uses a Headless UI `Popover` triggered by a matching glass pill, opening to a `rounded-3xl` panel with a divided item list.

### Header (`src/components/Header.tsx`)
On the home route only, the header includes a scroll-choreographed avatar that shrinks from 64px to 36px and slides right as the user scrolls, using CSS custom properties written from a `useLayoutEffect` scroll handler. Keep this logic in `Header.tsx`; do not generalize it.

### Footer (`src/components/Footer.tsx`)
Hairline top border (`border-t border-zinc-100` / `dark:border-zinc-700/40`), small centered nav + copyright row. It is **not** an inverted high-contrast "moment" — keep it quiet.

### Resume (`src/components/Resume.tsx`)
Single card (`max-w-[420px] rounded-2xl`) with two list modes: single-role entries and multi-role companies that render a vertical gradient timeline line with dots. Row-level hover uses `bg-zinc-50` / `dark:bg-zinc-800/50` at `rounded-lg`.

### Quote (`src/components/Quote.tsx`)
`rounded-md bg-zinc-100` / `dark:bg-zinc-800` block with a decorative SVG quote mark positioned at the top-left. Medium-weight sans-serif body — not a serif literary treatment.

### ThemeToggle (`src/components/ThemeToggle.tsx`)
Glass pill button using `next-themes`. Moon/sun icons swap via Tailwind `dark:` classes, wrapped in `AnimatePresence` for mount fade. Must remain the only path that writes theme state.

## Dark Mode

Dark mode is enabled via `next-themes` with `darkMode: 'class'` in Tailwind config, toggled by `ThemeToggle`, and suppressed during hydration via `suppressHydrationWarning` on `<html>`.

Rules:
- Every surface, text, border, and ring color **must** ship a `dark:` variant. The only exception is the red accent, which is shared.
- Dark surfaces step zinc-900 → zinc-800, not black → zinc-900; black is reserved for the outermost page canvas.
- Rings switch from `ring-zinc-900/5` to `ring-white/10`; some cards add `dark:border-zinc-700/50` alongside.
- Gradient orbs drop from 20% → 10% opacity in dark and switch to `-900` color stops.
- Test both modes when touching surfaces — use the toggle, don't trust screenshots of one mode.
