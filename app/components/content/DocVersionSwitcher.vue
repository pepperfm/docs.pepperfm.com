<script setup lang="ts">
interface VersionItem { label: string, value: string, path: string | undefined }

const props = defineProps<{
  versions: VersionItem[]
  storageKey?: string
  persist?: boolean
  latestValue?: string // если не указан — берём первый элемент как latest
}>()

const route = useRoute()
const router = useRouter()

const persist = props.persist ?? true
const key = props.storageKey ?? 'doc:version'
const latestValue = props.latestValue ?? String(props.versions[0]?.value ?? '')

const byValue = new Map(props.versions.map(v => [String(v.value), v]))
const byPath = new Map(props.versions.filter(v => v.path).map(v => [v.path!, v]))

// 1) init от URL, затем из localStorage (если включён persist)
const selected = ref<string>(byPath.get(route.path)?.value ?? latestValue)
if (persist && process.client && selected.value === latestValue) {
  const saved = localStorage.getItem(key)
  if (saved && byValue.has(saved))
    selected.value = saved
}

// 2) синхронизируем селект -> URL
watch(selected, (v) => {
  const item = byValue.get(v)
  if (!item)
    return
  if (persist && process.client)
    localStorage.setItem(key, v)
  if (item.path && item.path !== route.path)
    router.replace(item.path)
})

// 3) синхронизируем URL -> селект (back/forward и прямой ввод пути)
watch(() => route.path, (p) => {
  const item = byPath.get(p)
  if (item && item.value !== selected.value)
    selected.value = item.value
})

const isLatest = computed(() => selected.value === latestValue)
const target = computed(() => byValue.get(selected.value))
const isSelf = computed(() => !!target.value?.path && target.value.path === route.path)

// 4) грузим документ ТОЛЬКО когда НЕ latest и НЕ self (иначе будет рекурсия)
const { data: doc } = await useAsyncData(
  'doc-version-switcher',
  async () => {
    if (isLatest.value || isSelf.value || !target.value?.path)
      return null
    return await queryCollection('docs').path(target.value.path).first()
  },
  { watch: [isLatest, isSelf, () => target.value?.path] },
)

// 5) заглушка для отключения вложенного свитчера внутри рендеримого md
const Null = defineComponent({ name: 'Null', setup: () => () => null })
const overrideComponents = { 'doc-version-switcher': Null }
</script>

<template>
  <div class="mb-6 flex items-center gap-3">
    <span class="text-sm opacity-70">Version</span>
    <USelect
      v-model="selected"
      :items="Array.from(byValue.values())"
      value-key="value"
      class="w-56"
    />
  </div>

  <!-- показываем документ версии только если это НЕ latest и НЕ текущая страница -->
  <ContentRenderer
    v-if="doc"
    :value="doc"
    :components="overrideComponents"
  />
</template>
