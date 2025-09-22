# Beanheads Website

[![Deploy to GitHub Pages](https://github.com/beanheads/beanheads-website/actions/workflows/pages.yml/badge.svg)](https://github.com/beanheads/beanheads-website/actions/workflows/pages.yml)

Landing page for Beanheads built with SvelteKit and Tailwind CSS. The right side features a sticky phone mock that updates as you scroll through features.

## Tech Stack
- Framework: SvelteKit (Svelte 4, Vite 5)
- Styling: Tailwind CSS + PostCSS + Autoprefixer
- Fonts: Inter (Google Fonts)
- Icons: Ionicons (CDN in `src/app.html`)
- Tooling: TypeScript, svelte-check

## Run Locally
- Prerequisites: Node.js 18+ and npm (or pnpm/yarn)
- Install dependencies:
  - `npm install`
- Start dev server:
  - `npm run dev`
- Build and preview locally:
  - `npm run build`
  - `npm run preview`

## Deploy: GitHub Pages
This repo uses the native GitHub Pages workflow (`actions/deploy-pages`) with a single workflow at `.github/workflows/pages.yml`.

Key points for this project:
- SvelteKit uses the static adapter and outputs to `build/`.
- We deploy the `build/` folder as a Pages artifact (no `gh-pages` branch).
- Custom domain `beanheads.social` is tracked via a `CNAME` file at the repo root and copied into `build/` during the workflow.
- Because a custom domain serves at the site root, `BASE_PATH` is set to an empty string.

Steps to verify locally:
- `npm ci && npm run build && npm run preview`
- Ensure the site works with a root base path.

## Project Structure
- `src/app.html`: Loads Inter from Google Fonts and Ionicons.
- `src/app.css`: Tailwind base and small utilities; brand theming.
- `src/routes/+layout.svelte`: Global CSS import.
- `src/routes/+page.svelte`: Landing page sections and scroll-sync logic.
- `src/lib/components/PhoneMock.svelte`: Phone UI that switches screens.
- `src/lib/components/Navbar.svelte`, `Footer.svelte`: Layout components.
- `src/lib/actions/inView.ts`: IntersectionObserver helper for section enter.

## Brand & Typography
- Colors (Tailwind theme keys): `night`, `blackbean`, `coffee`, `khaki`, `racinggreen`, `ivory`.
- Fonts: Inter 400 (paragraph), 600 (subheadings), 700 (headings).

## Icons
- Ionicons via CDN already included in `src/app.html`.
- Usage in Svelte: `<ion-icon name="cafe-outline"></ion-icon>`.

## Adding Images
- Place assets in `static/assets/` and reference as `/assets/your-file.ext`.
- Replace the phone screen mappings in `src/lib/components/PhoneMock.svelte` with your actual files.

## Scroll Sync
- Each feature section uses `use:inView` to update the phone screen.
- Adjust thresholds in `src/lib/actions/inView.ts` (e.g., `rootMargin`, `threshold`).
