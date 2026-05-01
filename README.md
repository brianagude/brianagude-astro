# brianagude.com

Personal portfolio and creative showcase for Briana Gude — creative technologist. Migrated from Next.js to Astro 5.

Live site: **[brianagude.com](https://brianagude.com)**

## What it is

A portfolio organized into four content collections:

- **Work** — client and freelance projects
- **Case Studies** — deep-dive write-ups with embedded components (MDX)
- **Experiments** — personal side projects and explorations
- **Thoughts** — blog-style writing

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
- MDX — rich content for case studies
- [Mux](https://mux.com) — video player for project pages
- sharp — image optimization
- pnpm — package manager

## Project structure

```
src/
  content/     # four collections: case-studies, work, experiments, thoughts
  pages/       # routes mirror collections + about, index
  components/  # Card, Navigation, Mux, and layout variants
  styles/      # global SCSS and CSS variables
  layouts/     # BaseLayout, CaseStudyLayout, ProjectLayout, BlogLayout
public/        # static assets
```
