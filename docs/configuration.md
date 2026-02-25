[← Architecture](architecture.md) · [Back to README](../README.md)

# Configuration

## Nuxt Config (`nuxt.config.ts`)

Core Nuxt configuration including modules, content settings, and build options.

| Setting | Purpose |
|---------|---------|
| `modules` | Enabled Nuxt modules (UI, Content, ESLint, OG Image, NuxtHub) |
| `content.build.markdown` | Syntax highlighting theme and supported languages |
| `ui.content` / `ui.mdc` | Enables Nuxt UI content components and MDC support |
| `nitro.prerender` | Static prerendering with link crawling |
| `eslint.config.stylistic` | Code style rules (no trailing commas, 1tbs braces) |

### Adding a New Syntax Language

To highlight a new language in code blocks, add it to the `langs` array:

```ts
// nuxt.config.ts
content: {
  build: {
    markdown: {
      highlight: {
        langs: ['php', 'sql', 'json', 'dotenv', 'bash']
      }
    }
  }
}
```

## App Config (`app/app.config.ts`)

Runtime configuration for UI theming, header, footer, and SEO.

| Setting | Purpose |
|---------|---------|
| `ui.colors.primary` | Primary color (`indigo`) |
| `ui.colors.neutral` | Neutral color (`neutral`) |
| `seo.siteName` | Site name for meta tags |
| `header` | Header configuration (search, color mode toggle) |
| `footer` | Footer text and color mode toggle |

## Content Config (`content.config.ts`)

Defines content collections and their schemas.

### Collections

| Collection | Source | Purpose |
|------------|--------|---------|
| `landing` | `index.md` | Landing page |
| `docs` | `**` (excluding `index.md`) | All documentation pages |

### Schema

The `docs` collection supports an optional `links` field in frontmatter:

```yaml
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/pepperfm/package
    target: _blank
```

To add new frontmatter fields, extend the schema in `content.config.ts`:

```ts
schema: z.object({
  links: z.array(z.object({
    label: z.string(),
    icon: z.string(),
    to: z.string(),
    target: z.string().optional()
  })).optional(),
  version: z.string().optional() // new field
})
```

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NUXT_UI_PRO_LICENSE` | Yes | Nuxt UI Pro license key |
| `NUXT_PUBLIC_SITE_URL` | No | Public site URL (default: `https://docs.pepperfm.com`) |

## See Also

- [Getting Started](getting-started.md) — Setup, development, adding content
- [Architecture](architecture.md) — Layers and boundaries
- [Back to README](../README.md) — Project overview
