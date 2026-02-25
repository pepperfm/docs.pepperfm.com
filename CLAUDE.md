# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Documentation website for PepperFM's open-source Laravel/PHP packages, built with Nuxt 4 + Nuxt UI Pro + Nuxt Content. Deployed as a static site to Cloudflare via NuxtHub.

Live: https://docs.pepperfm.com

## Commands

```bash
pnpm dev          # Start dev server at localhost:3000
pnpm build        # Production build (requires NUXT_UI_PRO_LICENSE env)
pnpm generate     # Static site generation
pnpm preview      # Preview production build
pnpm lint         # ESLint check
pnpm lint:fix     # ESLint auto-fix
pnpm typecheck    # TypeScript type checking
make ci           # Run lint + typecheck + build
```

## Code Style

- ESLint uses `@antfu/eslint-config` with Vue support
- **No trailing commas** (`commaDangle: 'never'`)
- **1tbs brace style** (`braceStyle: '1tbs'`)
- 2-space indentation, LF line endings, UTF-8
- TypeScript config extends Nuxt's generated `tsconfig.json`

## Architecture

Content-driven static site following Nuxt conventions. No custom architecture layers.

**Data flow:** `content/*.md` → Nuxt Content collections → `pages/[...slug].vue` → Static HTML

### Content Collections (`content.config.ts`)

Two collections:
- **`landing`** — sources from `index.md` only (landing page)
- **`docs`** — sources from `**` excluding `index.md` (all documentation pages)

The `docs` collection has an optional `links` schema field for header action buttons (GitHub links, etc.).

### Content Files (`content/`)

- Numeric prefixes control sidebar ordering: `1.api-responder.md`, `2.simple-slim-dto.md`, etc.
- Navigation title set in `content/.navigation.yml`
- Versioned docs use subdirectories: `content/filament-json/v3.md`
- Syntax highlighting supports: `php`, `sql`, `json`, `dotenv`

### Pages

- `app/pages/index.vue` — Landing page, queries `landing` collection
- `app/pages/[...slug].vue` — Catch-all route, queries `docs` collection

### Global MDC Components (`app/components/global/`)

These are usable directly in Markdown via MDC syntax (e.g., `::Api{...}`):
- `Api.vue` — API reference icon/display
- `Filament.vue` — Filament panel branding
- `Moonshine.vue` — Moonshine panel branding
- `JsonColumn.vue` — JSON column icon

### Key Content Component

`app/components/content/DocVersionSwitcher.vue` — Handles version switching with localStorage persistence, URL syncing, and content rendering. Used for packages with multiple versions.

### Theming (`app/app.config.ts`)

- Primary color: `indigo`, Neutral: `neutral`
- Custom font: Public Sans (configured in `app/assets/css/main.css` via `@theme`)
- Dark/light mode toggle in header

## Environment Variables

| Variable | Required | Purpose |
|----------|----------|---------|
| `NUXT_UI_PRO_LICENSE` | Yes (build) | Nuxt UI Pro license key |
| `NUXT_PUBLIC_SITE_URL` | No | Public URL for OG images (default: https://docs.pepperfm.com) |

## Adding a New Package's Documentation

1. Create `content/N.package-name.md` with numeric prefix
2. Add frontmatter: `title`, `description`, optional `links` array
3. The page auto-appears at `/package-name`

## CI/CD

GitHub Actions workflows in `.github/workflows/`:
- `lint.yml` — ESLint + TypeScript checks on push to master and PRs
- `build.yml` — Production build verification (needs `NUXT_UI_PRO_LICENSE` secret)
