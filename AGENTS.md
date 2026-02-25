# AGENTS.md

> Project map for AI agents. Keep this file up-to-date as the project evolves.

## Project Overview
Documentation website for PepperFM's open-source Laravel/PHP packages, built with Nuxt 4 and Nuxt UI.

## Tech Stack
- **Language:** TypeScript
- **Framework:** Nuxt 4.3.1 (Vue.js)
- **UI Library:** Nuxt UI 4.5.0 (Nuxt UI Pro)
- **Content:** Nuxt Content 3.11.2 (Markdown/MDC)
- **Deployment:** Cloudflare Workers (Nitro preset)

## Project Structure
```
docs.pepperfm.com/
├── app/                          # Nuxt application source
│   ├── app.vue                   # Root Vue component
│   ├── app.config.ts             # App-level configuration (colors, header, footer)
│   ├── assets/css/main.css       # Global CSS styles
│   ├── components/               # Vue components
│   │   ├── AppHeader.vue         # Shared docs header component
│   │   ├── AppFooter.vue         # Shared docs footer component
│   │   ├── TemplateMenu.vue      # Package/template navigation menu
│   │   ├── LogoPro.vue           # Brand logo component
│   │   ├── content/              # Content-rendering components
│   │   ├── global/               # Reusable MDC components (Api, Filament, Moonshine, JsonColumn)
│   │   └── OgImage/              # OG image template components
│   ├── error.vue                 # Global Nuxt error page
│   ├── layouts/                  # Page layouts
│   │   └── docs.vue              # Documentation layout
│   └── pages/                    # Route pages
│       ├── index.vue             # Landing page
│       └── [...slug].vue         # Catch-all docs route
├── content/                      # Markdown documentation files
│   ├── index.md                  # Landing page content
│   ├── .navigation.yml           # Navigation structure
│   ├── 1.api-responder-for-laravel.md
│   ├── 2.simple-slim-dto.md
│   ├── 3.socialment.md
│   ├── 4.filament-json.md
│   ├── 5.laravel-starter-kit.md
│   ├── 6.anilib-test.md
│   └── filament-json/            # Versioned docs
│       └── v3.md
├── public/                       # Static assets (favicons, preview images)
├── nuxt.config.ts                # Nuxt configuration
├── content.config.ts             # Content collections schema
├── package.json                  # Dependencies and scripts
├── docs/                         # Developer documentation
│   ├── getting-started.md        # Setup and development guide
│   ├── configuration.md          # Configuration reference
│   ├── security.md               # Security workflow and risk register
│   └── security/                 # Security deep-dive docs
│       └── vulnerability-triage.md # Audit baseline and remediation matrix
├── Makefile                      # Build automation
├── .github/workflows/            # CI/CD pipelines
│   ├── lint.yml                  # ESLint + TypeScript checks
│   ├── build.yml                 # Production build verification
│   └── security-audit.yml        # Scheduled and PR dependency audit
├── .mcp.json                     # MCP server configuration
└── .ai-factory/                  # AI agent context
    ├── DESCRIPTION.md            # Project specification
    └── ARCHITECTURE.md           # Architecture guidelines
```

## Key Entry Points
| File | Purpose |
|------|---------|
| `nuxt.config.ts` | Nuxt modules, content config, prerendering, ESLint |
| `app/app.config.ts` | Site name, colors, header/footer, navigation |
| `content.config.ts` | Content collections schema (landing, docs) |
| `content/.navigation.yml` | Sidebar navigation structure |
| `app/pages/[...slug].vue` | Catch-all route rendering all doc pages |
| `app/components/global/` | MDC components usable in markdown files |

## Documentation
| Document | Path | Description |
|----------|------|-------------|
| README | README.md | Project landing page |
| Getting Started | docs/getting-started.md | Setup, development, adding content |
| Architecture | docs/architecture.md | Layers, data flow, and module boundaries |
| Configuration | docs/configuration.md | Nuxt config, app config, content schema |
| Security | docs/security.md | Audit workflow and residual risks |
| Vulnerability Triage | docs/security/vulnerability-triage.md | Baseline and remediation matrix |

## AI Context Files
| File | Purpose |
|------|---------|
| AGENTS.md | This file - project structure map |
| .ai-factory/DESCRIPTION.md | Project specification and tech stack |
| .ai-factory/ARCHITECTURE.md | Architecture decisions and guidelines |
| CLAUDE.md | Claude Code project-specific instructions |
| .ai-factory.json | AI agent skill registry |
| .mcp.json | MCP server configuration |
