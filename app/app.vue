<script setup lang="ts">
const { seo } = useAppConfig()
const route = useRoute()
const siteUrl = useRuntimeConfig().public.siteUrl
const canonicalUrl = computed(() => `${siteUrl}${route.path === '/' ? '/' : route.path.replace(/\/+$/, '')}`)

const { data: navigation } = await useAsyncData('navigation', () => queryCollectionNavigation('docs'))
const { data: files } = useLazyAsyncData('search', () => queryCollectionSearchSections('docs'), {
  server: false,
})

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ],
  link: [
    { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
    { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    { rel: 'canonical', href: canonicalUrl },
  ],
  htmlAttrs: {
    lang: 'en',
  },
})

useSeoMeta({
  titleTemplate: `%s | ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  description: 'Practical guides for API responses, typed DTOs, Filament JSON, OAuth, and OpenAPI documentation in Laravel.',
  ogDescription: 'Practical guides for API responses, typed DTOs, Filament JSON, OAuth, and OpenAPI documentation in Laravel.',
  ogType: 'website',
  ogLocale: 'en_US',
  ogUrl: canonicalUrl,
  ogImage: `${siteUrl}/og-default.png`,
  ogImageType: 'image/png',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'PepperFM Docs — Laravel packages, documented.',
  twitterImage: `${siteUrl}/og-default.png`,
  twitterImageAlt: 'PepperFM Docs — Laravel packages, documented.',
  twitterCard: 'summary_large_image',
})

provide('navigation', navigation)
</script>

<template>
  <UApp>
    <NuxtLoadingIndicator />

    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation"
      />
    </ClientOnly>
  </UApp>
</template>
