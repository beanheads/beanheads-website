# Beanheads Website

Landing page for Beanheads built with SvelteKit and Tailwind CSS. The right side features a sticky phone mock that updates as you scroll through features.

## Prerequisites
- Node.js 18+
- pnpm, npm, or yarn

## Install
```bash
npm install
```

## Develop
```bash
npm run dev
```
App runs on the Vite dev server. Open the printed local URL.

## Build
```bash
npm run build
npm run preview
```

## Project Structure
- `src/app.html`: Loads Inter from Google Fonts and Ionicons.
- `src/app.css`: Tailwind base and small utilities; brand theming.
- `src/routes/+layout.svelte`: Global CSS import.
- `src/routes/+page.svelte`: Landing page sections and scroll-sync logic.
- `src/lib/components/PhoneMock.svelte`: Phone UI that switches screens.
- `src/lib/components/Navbar.svelte`, `Footer.svelte`: Layout components.
- `src/lib/actions/inView.ts`: IntersectionObserver helper for section enter.

## Brand & Typography
- Colors (Tailwind theme keys): `night`, `blackbean`, `coffee`, `khaki`, `racinggreen`.
- Fonts: Inter 400 (paragraph), 600 (subheadings), 700 (headings).

## Icons
- Ionicons via CDN already included in `src/app.html`.
- Usage example in Svelte: `<ion-icon name="cafe-outline"></ion-icon>`.

## Adding Images
- Place assets in `static/images/` and reference as `/images/your-file.png`.
- Replace placeholder blocks (class `placeholder-tile`) in `+page.svelte`.

## Scroll Sync
- Each feature section uses `use:inView` to update the phone screen.
- Adjust thresholds in `src/lib/actions/inView.ts` (e.g., `rootMargin`, `threshold`).

## Notes
- Only official brand colors are used; see `tailwind.config.cjs` for mapping.
- If deploying with an adapter (Vercel/Netlify), adapter output folders are ignored by `.gitignore`.
