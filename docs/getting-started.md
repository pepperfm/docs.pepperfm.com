[Back to README](../README.md) · [Architecture →](architecture.md)

# Getting Started

## Prerequisites

- [Bun](https://bun.sh/) 1.1+
- [Nuxt UI Pro license](https://ui.nuxt.com/pro) (set `NUXT_UI_PRO_LICENSE` env var)

## Setup

```bash
# Run from the repository root
bun install
```

Copy the environment file:

```bash
cp .env.example .env
```

Set your Nuxt UI Pro license key:

```
NUXT_UI_PRO_LICENSE=your-license-key
NUXT_PUBLIC_SITE_URL=https://docs.pepperfm.com
```

## Development

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000). Changes to content files and Vue components hot-reload automatically.

## Adding a New Package's Documentation

1. Create a Markdown file in `content/` with a numeric prefix for ordering:

```
content/7.new-package.md
```

Example from this repository:

```
content/7.swagger-nuxt-ui-for-laravel.md
```

2. Add frontmatter with title, description, and optional links:

```markdown
---
title: New Package
description: What this package does
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/pepperfm/new-package
    target: _blank
  - label: Packagist
    icon: i-lucide-package
    to: https://packagist.org/packages/pepperfm/new-package
    target: _blank
---

## Installation

Your content here...
```

3. The page is automatically available at `/new-package` after the dev server picks it up.

### Route-specific Resources (right sidebar)

If a package page needs custom `Resources` links in the right TOC area, add route mapping in:

`app/pages/[...slug].vue`

## Versioned Documentation

For packages with multiple versions, create a subdirectory:

```
content/filament-json/v3.md
content/filament-json/v4.md
```

## Navigation

Sidebar navigation is controlled by:
- **File ordering:** Numeric prefixes (`1.`, `2.`, etc.) determine the order
- **`.navigation.yml`:** Override titles and structure in `content/.navigation.yml`

## Custom MDC Components

Rich content beyond Markdown is handled via MDC (Markdown Components). Available components:

| Component | Usage | Purpose |
|-----------|-------|---------|
| `Api` | `::Api{...}` | API reference display |
| `Filament` | `::Filament{...}` | Filament panel docs |
| `Moonshine` | `::Moonshine{...}` | Moonshine panel docs |
| `JsonColumn` | `::JsonColumn{...}` | JSON column documentation |

These live in `app/components/global/` and are auto-imported.

## Building for Production

```bash
bun run build       # Build for server deployment
bun run generate    # Generate static site
bun run preview     # Preview the production build locally
```

## See Also

- [Architecture](architecture.md) — Project structure and data flow
- [Configuration](configuration.md) — Nuxt config, app config, content schema
- [Back to README](../README.md) — Project overview
