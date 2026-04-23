# AGENTS.md

> Engineering operating rules for AI agents and developers working in this repository.
> Stack: **Next.js + TypeScript**
> Goal: **fast delivery with clear boundaries and low-regret architecture**

---

## 1. Purpose

This file defines the repo-wide rules that apply across the portfolio app.

The standard is not "it works on my machine."
The standard is:

- correct
- explicit
- bounded
- typed
- verifiable
- easy for another engineer to understand quickly

When rules conflict, prefer:

1. correctness
2. simplicity
3. explicitness
4. bounded ownership
5. consistency with the existing system

---

## 2. Repo Ownership

This repository is a single Next.js application split by responsibility.

- `src/app` owns routes, layouts, rendering boundaries, metadata, route handlers, and page composition.
- `src/components` owns reusable UI components and component-specific presentation logic.
- `src/components/icons` owns local icon components.
- `src/components/notes` owns note-specific presentation components.
- `src/components/tools` owns tool-specific UI components.
- `src/data` owns static portfolio content and structured display data.
- `src/images` owns local image assets used by the app.
- `src/lib` owns shared utilities, helpers, and integration-light app logic.
- `src/styles` owns global styles and styling primitives that are not local to a component.
- `public` owns static browser-served assets.
- Root config files own build, lint, formatting, TypeScript, Tailwind, Next.js, and package-manager behavior.

Do not blur these boundaries casually.

---

## 3. Dependency Rules

Allowed direction:

```txt
src/app -> src/components, src/data, src/lib, src/images, src/styles
src/components -> src/lib, src/data, src/images
src/lib -> framework-light utilities and shared helpers
src/data -> plain data and types only
```

Rules:

- Route composition belongs in `src/app`.
- Reusable visual building blocks belong in `src/components`.
- App pages may import components, data, utilities, images, and styles.
- Components may import utilities, static data, and images when needed.
- `src/data` should not import route modules or UI components.
- `src/lib` should not become a junk drawer for one-off page code.
- Keep browser-only code out of server-only paths unless the component is explicitly marked with `"use client"`.
- Cross-cutting changes should happen through explicit helpers, typed data structures, or component props.
- Do not create hidden coupling by copying internal file paths across unrelated folders.

---

## 4. Shared Code Rules

Promote code into shared locations only when it is actually reused and stable.

Put in `src/lib`:

- shared TypeScript helpers
- formatting utilities
- framework-light data transforms
- small integration helpers that are used from more than one route or component

Put in `src/data`:

- portfolio project data
- profile/about content
- skills/tooling content
- typed static content used for rendering

Put in `src/components`:

- reusable UI components
- section-level components used by multiple pages
- presentation components with clear props

Do not put in shared locations:

- app-specific business logic disguised as a utility
- route-only composition code
- component-specific helpers used only once
- "temporary" helpers that are only reused once

---

## 5. Planning and Execution

Plan before non-trivial work, especially when changing:

- route structure
- metadata or SEO behavior
- data shape used across pages
- shared UI components
- styling primitives
- build, lint, or TypeScript configuration
- image or asset loading behavior

Before implementing, identify:

- which folder owns the change
- whether the change crosses rendering boundaries
- what data contracts or component props are affected
- how the result will be verified

If the chosen design stops matching reality, re-plan instead of forcing a bad implementation through.

---

## 6. Validation and Verification

Untrusted input must be validated at the boundary where it enters the system.

That includes:

- route handlers in `src/app/api`
- form submissions
- search params used to affect rendering or data access
- external API responses when trust is low

A task is not done because code compiles.
A task is done when the relevant checks have passed.

Typical checks:

- lint
- typecheck
- build
- unit or integration tests if present
- route or page verification
- realistic manual validation where appropriate

---

## 7. Code Health and Static Analysis

Keep repo-level code-health enforcement aligned with the actual application structure.

Rules:

- Keep lint, format, TypeScript, Tailwind, and Next.js config explicit and narrow.
- Treat Next.js file-based routes, metadata files, route handlers, and framework bootstraps as intentional entrypoints.
- When adding a new route convention, framework bootstrap, or shared export surface, update the relevant analysis config instead of adding broad ignores.
- Do not commit generated build output into authored `src/` trees unless there is a strong reason and it is clearly accounted for in tooling.
- Use dead-code or stale-dependency tooling only when it reflects the app's real entrypoints and does not fight Next.js conventions.
- Do not add dependency-cruiser-style architecture enforcement unless boundary drift becomes a real recurring problem.

---

## 8. Anti-Patterns to Reject

Do not introduce:

- route code hidden inside generic utility folders
- shared junk drawers
- duplicated data contracts drifting between pages
- validation only in the UI
- silent fallbacks hiding broken logic
- `any` at important boundaries
- architecture docs that describe a system the repo does not actually have
- oversized abstractions for one-off portfolio sections

---

## 9. App-Specific Rules

Use this file together with the design guidance in [DESIGN.md](/Users/asifsadat/Desktop/Sadat/Personal/Projects/portfolio-nextjs/DESIGN.md).

If local guidance is added later for a specific folder, prefer the more specific guidance unless it breaks a repo-wide boundary above.
