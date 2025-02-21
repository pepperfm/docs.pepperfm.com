<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'
import { findPageHeadline } from '#ui-pro/utils/content'

definePageMeta({
  layout: 'docs',
})

const route = useRoute()
const { toc, seo } = useAppConfig()
const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const { data } = await useAsyncData(route.path, () => Promise.all([
  queryCollection('docs').path(route.path).first(),
  queryCollectionItemSurroundings('docs', route.path, {
    fields: ['title', 'description'],
  }),
]), {
  transform: ([page, surround]) => ({ page, surround }),
})
if (!data.value || !data.value.page) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true })
}

const page = computed(() => data.value?.page)
const surround = computed(() => data.value?.surround)

useSeoMeta({
  title: page.value.seo.title,
  ogTitle: `${page.value.seo.title} - ${seo?.siteName}`,
  description: page.value.seo.description,
  ogDescription: page.value.seo.description,
})

defineOgImageComponent('Docs')

const headline = computed(() => findPageHeadline(navigation.value, page.value))

const links = computed(() => {
  const path = route.path

  if (path === '/socialment') {
    return [
      {
        label: 'Laravel Socialite',
        to: 'https://laravel.com/docs/master/socialite',
        target: '_blank',
      },
      {
        label: 'Socialite Providers',
        to: 'https://socialiteproviders.com/',
        target: '_blank',
      },
      {
        label: 'Azure Socialite Provider',
        to: 'https://socialiteproviders.com/Microsoft-Azure/',
        target: '_blank',
      },
      {
        label: 'ChrisReedIO/Socialment-Demo',
        to: 'https://github.com/chrisreedio/socialment-demo',
        target: '_blank',
      },
      {
        label: 'Blade Font Awesome package',
        to: 'https://github.com/owenvoke/blade-fontawesome',
        target: '_blank',
      },
      {
        label: 'Owen Voke',
        to: 'https://github.com/owenvoke',
        target: '_blank',
      },
      {
        label: 'Font Awesome Website',
        to: 'https://fontawesome.com/search?o=r\\&f=brands',
        target: '_blank',
      },
    ]
  }

  return []
})
</script>

<template>
  <UPage v-if="page">
    <UPageHeader
      :title="page.title"
      :description="page.description"
      :links="page.links"
      :headline="headline"
    />

    <UPageBody>
      <ContentRenderer
        v-if="page"
        :value="page"
      />

      <USeparator v-if="surround?.length" />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template
      v-if="page?.body?.toc?.links?.length"
      #right
    >
      <UContentToc
        :title="toc?.title"
        :links="page.body?.toc?.links"
        class="min-w-xs"
      >
        <template
          v-if="links.length"
          #bottom
        >
          <div
            class="hidden lg:block space-y-6"
            :class="{ '!mt-6': page.body?.toc?.links?.length }"
          >
            <USeparator
              v-if="page.body?.toc?.links?.length"
              type="dashed"
            />

            <UPageLinks
              title="Resources"
              :links="links"
            />
          </div>
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
