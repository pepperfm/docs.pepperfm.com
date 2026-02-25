# PepperFM Docs

> Documentation website for PepperFM open-source Laravel/PHP packages.

[![Nuxt](https://img.shields.io/badge/Nuxt-4.x-00DC82?logo=nuxt.js&labelColor=0b1020)](https://nuxt.com/)
[![Nuxt UI](https://img.shields.io/badge/Nuxt%20UI-4.x-00DC82?logo=nuxt.js&labelColor=0b1020)](https://ui.nuxt.com/)
[![Nuxt Content](https://img.shields.io/badge/Nuxt%20Content-3.x-00DC82?logo=nuxt.js&labelColor=0b1020)](https://content.nuxt.com/)

This repository hosts the source code for `docs.pepperfm.com`.
It is a Nuxt 4 application that renders package documentation from Markdown files in `content/`.

## Quick Start

```bash
bun install
bun run dev
```

Open `http://localhost:3000`.

## Key Features

- **Content-first docs** via Nuxt Content collections and schema validation.
- **Reusable UI components** for docs pages and embedded MDC blocks.
- **Typed Nuxt app** with linting and type checks in CI.
- **SEO-ready pages** with OG image support and prerendering.

## Example

Create a new documentation page:

```bash
cat > content/7.new-package.md <<'MD'
---
title: New Package
description: Package overview
---

## Installation

Install with Composer: `composer require pepperfm/new-package`
MD
```

Then run `bun run dev` and open `/new-package`.

## Scripts

```bash
bun run dev         # Run development server
bun run build       # Build for production
bun run generate    # Generate static site
bun run preview     # Preview production build
bun run lint        # Run ESLint
bun run typecheck   # Run Nuxt type checks
bun audit           # Run dependency vulnerability audit
```

## Documentation

| Guide | Description |
|-------|-------------|
| [Getting Started](docs/getting-started.md) | Installation, setup, first steps |
| [Architecture](docs/architecture.md) | Layers, data flow, boundaries |
| [Configuration](docs/configuration.md) | Nuxt, content, environment settings |
| [Security](docs/security.md) | Vulnerability workflow and risk register |

## License

This repository contains documentation infrastructure for PepperFM packages.
License terms are defined per package repository.
