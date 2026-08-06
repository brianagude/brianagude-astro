# brianagude.com

Personal portfolio and creative showcase for Briana Gude — creative technologist. Migrated from Next.js to Astro 5.

Live site: **[brianagude.com](https://brianagude.com)**

## What it is

A portfolio built around a single **Work** content collection — client and freelance projects plus personal side projects and explorations.

## What it looks like

Warm cream background (`#FCFCF8`), soft pastel accents, three custom fonts (Host Grotesk, Instrument Serif, DM Mono), staggered card grid on the homepage, smooth hover animations. No CSS framework — hand-written SCSS with a custom design token system.

See it live at [brianagude.com](https://brianagude.com).

## Running locally

```bash
pnpm install
pnpm dev        # dev server at localhost:4321
pnpm build      # production build → ./dist/
pnpm preview    # preview the production build locally
```

## Tech stack

- [Astro 5](https://astro.build) — static site framework
- SCSS — custom design system, no Tailwind
- TypeScript — strict mode, `@/*` path aliases
- [Mux](https://mux.com) — video player for project pages
- sharp — image optimization
- pnpm — package manager

## Project structure

```
src/
  content/     # one collection: work
  pages/       # routes mirror collections + about, resources, index
  components/  # Card, Navigation, Mux, and layout variants
  styles/      # global SCSS and CSS variables
  layouts/     # BaseLayout, ProjectLayout
public/        # static assets
```
