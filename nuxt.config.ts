// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    'nuxt-og-image',
  ],

  components: true,

  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1,
        },
        highlight: {
          theme: {
            default: 'github-light-high-contrast',
            dark: 'material-theme-palenight',
          },
          langs: [
            'php',
            'sql',
            'json',
            'dotenv',
          ],
        },
      },
    },
  },

  ui: {
    content: true,
    mdc: true,
    fonts: false,
  },

  devtools: {
    enabled: false,
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2025-07-11',

  nitro: {
    routeRules: {
      '/_nuxt/**': {
        headers: {
          'cache-control': 'public, max-age=31536000, immutable',
        },
      },
      '/_payload.json': {
        headers: {
          'cache-control': 'public, max-age=3600, stale-while-revalidate=86400',
        },
      },
      '/**/_payload.json': {
        headers: {
          'cache-control': 'public, max-age=3600, stale-while-revalidate=86400',
        },
      },
    },
    prerender: {
      routes: [
        '/',
      ],
      crawlLinks: true,
    },
    experimental: {
      openAPI: false,
    },
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs',
      },
    },
  },
})
