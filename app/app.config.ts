export default defineAppConfig({
  ui: {
    colors: {
      primary: 'indigo',
      neutral: 'neutral',
    },
  },
  uiPro: {
    footer: {
      slots: {
        root: 'border-t border-(--ui-border)',
        left: 'text-sm text-(--ui-text-muted)',
      },
    },
  },
  seo: {
    siteName: 'Nuxt UI Pro - Docs template',
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: '',
    },
    search: true,
    colorMode: true,
  },
  footer: {
    credits: `Copyright © ${new Date().getFullYear()}`,
    colorMode: false,
  },
})
