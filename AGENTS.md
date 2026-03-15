Architected and built by the one and only Claudesy.
# Agents — Puskesmas Website

## Project
Public-facing website for UPTD Puskesmas Poned Balowerti.

## Stack
- Vite + React + TypeScript + Tailwind CSS + shadcn/ui
- Dev port: http://localhost:5173

## Commands
- `npm run dev` — start dev server
- `npm run lint` — run ESLint
- `npm run build` — production build
- `npm run sync:reviews` — sync Google Reviews

## Structure
- `src/` — React components, pages, and utilities
- `public/` — static assets

## Rules
- TypeScript strict mode: no `any`, no `@ts-ignore`
- Preserve all SEO meta tags and structured data (JSON-LD)
- Preserve Google Search Console verification files
- Accessibility: maintain ARIA attributes and semantic HTML

## Cursor Cloud specific instructions

### Services
Single service: **Vite dev server** on port 5173. No backend, database, or Docker required.

### Running
- `npm run dev` starts the dev server. The site is a purely static SPA — all external API calls (telemedicine, Google Places) degrade gracefully with fallbacks.
- `npm run build` runs `tsc -b && vite build` — TypeScript must compile cleanly first.
- `npm run lint` runs ESLint (flat config). Zero errors expected on a clean checkout.
- `npx vitest run` runs tests. No test files exist yet, so vitest exits with code 1 (expected).

### Gotchas
- Node.js `^20.19.0 || >=22.12.0` is required (see `engines` in `package.json`).
- The reservation form opens a `wa.me` link in a new tab — no local WhatsApp service needed to verify the flow works.
- `sharp` (native image dependency) is in devDependencies; `npm install` handles it automatically.
