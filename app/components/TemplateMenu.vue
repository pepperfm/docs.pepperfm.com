<template>
  <UDropdownMenu
    v-slot="{ open }"
    :modal="false"
    :items="[{
      label: `Landing`,
      to: 'https://pepperfm.com/',
      external: true,
      target: '_blank',
    }, {
      label: `Docs`,
      to: 'https://docs.pepperfm.com',
      color: 'primary',
      checked: true,
      type: 'checkbox',
    }]"
    :ui="{ content: 'w-(--reka-dropdown-menu-trigger-width) min-w-0' }"
    size="xs"
  >
    <UButton
      label="Docs"
      variant="subtle"
      trailing-icon="i-lucide-chevron-down"
      size="xs"
      class="-mb-[6px] font-semibold rounded-full truncate"
      :class="[open && 'bg-(--ui-primary)/15']"
      :ui="{
        trailingIcon: ['transition-transform duration-200', open ? 'rotate-180' : undefined].filter(Boolean).join(' '),
        base: 'w-20 flex justify-around',
      }"
    />
  </UDropdownMenu>
</template>
