[← Getting Started](getting-started.md) · [Back to README](../README.md) · [Configuration →](configuration.md)

# Architecture

## Overview

`docs.pepperfm.com` is a content-first Nuxt 4 application.
Markdown files in `content/` are the source of truth, while Vue/Nuxt code in `app/` handles rendering, layout, and reusable UI blocks.

## High-Level Layers

| Layer | Location | Responsibility |
|-------|----------|----------------|
| Content | `content/` | Documentation pages, frontmatter metadata, navigation source |
| Routing & Layout | `app/pages/`, `app/layouts/` | Route matching, content loading, shared page shell |
| Presentation Components | `app/components/` | Header/footer, menu, MDC/global content components |
| Configuration | `nuxt.config.ts`, `app/app.config.ts`, `content.config.ts` | Modules, theme, content schema, runtime behavior |

## Data Flow

1. A user opens a route, for example `/filament-json`.
2. `app/pages/[...slug].vue` resolves the slug and requests page content from Nuxt Content.
3. The docs layout (`app/layouts/docs.vue`) applies global page structure.
4. Rendered markdown can use global MDC components from `app/components/global/`.

## Project Structure

```text
app/
  pages/           # Route-level data loading and rendering
  layouts/         # Shared docs layout
  components/      # Reusable UI + MDC components
  assets/css/      # Global styles
content/
  *.md             # Docs pages
  .navigation.yml  # Sidebar/navigation control
public/            # Static files
```

## Boundaries and Rules

- Keep documentation data in `content/`, not in hardcoded page components.
- Keep route-level content fetching in page files, not in low-level UI components.
- Keep global styling and branding in app-level config/CSS, not spread through docs content.
- Use `content.config.ts` schema as the contract for allowed frontmatter fields.

## See Also

- [Getting Started](getting-started.md) — Setup and daily workflow
- [Configuration](configuration.md) — Nuxt/content settings and env vars
- [Back to README](../README.md) — Project overview
