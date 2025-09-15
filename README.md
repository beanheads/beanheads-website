# Beanheads Website

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
There are two common GitHub Pages targets. Choose one and follow the corresponding base path settings:
- User/Organization site (username.github.io): base path is `/`.
- Project site (username.github.io/repo): base path is `'/repo'`.

1) Install the static adapter
- `npm i -D @sveltejs/adapter-static`

2) Configure SvelteKit for static output and base path
Edit `svelte.config.js` to use the static adapter and allow a configurable base path via an environment variable (useful for project pages):

Example `svelte.config.js` snippet:
```
import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
  kit: {
    adapter: adapter(),
    paths: {
      // For user/organization site use '' (empty) or '/'
      // For project site use '/your-repo-name'
      base: process.env.BASE_PATH ?? ''
    },
    prerender: { entries: ['*'] }
  },
  preprocess: vitePreprocess()
};

export default config;
```

3) Create a GitHub Actions workflow
Add a workflow to build and publish the static site to the `gh-pages` branch. This uses the widely adopted `peaceiris/actions-gh-pages` action.

Create `.github/workflows/deploy.yml` with:
```
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install deps
        run: npm ci

      - name: Build
        env:
          # For user/organization site, leave BASE_PATH empty ('')
          # For project site, set to '/your-repo-name'
          BASE_PATH: '/your-repo-name'
        run: |
          npm run build
          # Prevent GitHub Pages from running Jekyll
          touch build/.nojekyll

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: build
          publish_branch: gh-pages
```

4) Enable GitHub Pages
- In your repository: Settings → Pages → Build and deployment → Source: GitHub Actions.
- On first successful run, your site will be live at:
  - User/Organization site: `https://username.github.io/`
  - Project site: `https://username.github.io/your-repo-name/`

5) Verify locally
- Run `npm run build && npm run preview` to ensure the site works with the configured base path.

Notes
- For a user/organization site, set `BASE_PATH` to an empty string in the workflow or remove it entirely from `paths.base`.
- If you deploy to a custom domain, do not set a base path and configure your DNS/Pages settings as needed.

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
