// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui-pro',
    '@nuxt/content',
    'nuxt-og-image',
    '@nuxthub/core',
  ],

  content: {
    build: {
      markdown: {
        highlight: {
          theme: {
            default: 'github-light-high-contrast',
            dark: 'material-theme-palenight',
          },
          langs: [
            'php',
            'json',
            'dotenv',
          ],
        },
      },
    },
  },

  uiPro: {
    content: true,
    mdc: true,
  },

  devtools: {
    enabled: true,
  },

  css: ['~/assets/css/main.css'],

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-07-11',

  nitro: {
    prerender: {
      routes: [
        '/',
      ],
      crawlLinks: true,
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

  icon: {
    provider: 'iconify',
  },
})
