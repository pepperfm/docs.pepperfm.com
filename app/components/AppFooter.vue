<script setup lang="ts">
const { footer } = useAppConfig()
interface ILink {
  to: string
  icon: string
  target: string
}
const links: ILink[] = [{
  to: 'https://t.me/pepper_fm',
  icon: 'i-simple-icons:telegram',
  target: '_blank',
}, {
  to: 'https://github.com/pepperfm',
  icon: 'i-simple-icons:github',
  target: '_blank',
}, {
  to: 'https://www.linkedin.com/in/dmitry-gaponenko-849692271',
  icon: 'i-simple-icons:linkedin',
  target: '_blank',
}]
</script>

<template>
  <UFooter>
    <template #left>
      {{ footer.credits }}
    </template>

    <template #right>
      <UColorModeButton v-if="footer?.colorMode" />

      <UButton
        v-for="(link, index) of links"
        :key="index"
        color="neutral"
        variant="ghost"
        :to="link.to"
        target="_blank"
      >
        <template #trailing>
          <UIcon :name="link.icon" class="w-7 h-7" />
        </template>
      </UButton>
    </template>
  </UFooter>
</template>
