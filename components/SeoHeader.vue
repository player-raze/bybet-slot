<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next'

interface Props {
  title: string
  metaTitle?: string
  description?: string
  keywords?: string
  ogImage?: string
  ogType?: 'website' | 'article' | 'book' | 'profile'
  backTo?: string
  showBack?: boolean
  showFlag?: boolean
  sticky?: boolean
  customClass?: string
}

const props = withDefaults(defineProps<Props>(), {
  description: 'ByBet — Premier Online Gaming, Live Casino, Sports Betting, and Slots in the Philippines.',
  keywords: 'ByBet, sports betting, online casino, slots, live casino, Philippines gaming',
  ogImage: '/brand/bybet-logo.webp',
  showBack: true,
  showFlag: true,
  sticky: false,
  customClass: '',
})

const emit = defineEmits<{
  (e: 'back'): void
}>()

const router = useRouter()
const route = useRoute()
const config = useRuntimeConfig()

const fullTitle = computed(() => {
  if (props.metaTitle) {
    return props.metaTitle.includes('ByBet') ? props.metaTitle : `${props.metaTitle} | ByBet`
  }
  return props.title ? `${props.title} | ByBet` : 'ByBet'
})

// Set reactive SEO metadata
useSeoMeta({
  title: fullTitle,
  ogTitle: fullTitle,
  description: () => props.description,
  ogDescription: () => props.description,
  keywords: () => props.keywords,
  ogImage: () => props.ogImage,
  ogType: () => props.ogType || 'website',
  twitterTitle: fullTitle,
  twitterDescription: () => props.description,
  twitterImage: () => props.ogImage,
  twitterCard: 'summary_large_image',
})

useHead(() => ({
  link: [
    {
      rel: 'canonical',
      href: `https://bybet.com${route.path}`,
    },
  ],
}))

const handleBack = (): void => {
  emit('back')
  if (props.backTo) {
    router.push(props.backTo)
    return
  }
  if (import.meta.client && window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}
</script>

<template>
  <div
    v-if="sticky"
    class="seo-header-sticky-wrapper sticky top-[var(--content-sticky-top)] z-20  -mx-1 px-1 pb-1"
  >
    <header
      class="seo-header flex items-center justify-between gap-2 rounded-lg bg-[#1f1f1f] px-2.5 py-2 shadow-sm select-none"
      :class="customClass"
    >
      <!-- Left: Back Button & Title -->
      <div class="flex items-center gap-1.5 min-w-0">
        <button
          v-if="showBack"
          type="button"
          class="flex items-center justify-center h-6 w-6 bg-[#141414] rounded-full text-[#1FA779] transition-colors cursor-pointer shrink-0"
          aria-label="Go back"
          @click="handleBack"
        >
          <ChevronLeft class="h-3 w-3" />
        </button>

        <!-- Page Title (SEO H1) -->
        <h1 class="text-[16px] font-bold text-white tracking-tight truncate leading-tight">
          <slot name="title">
            {{ title }}
          </slot>
        </h1>
      </div>

      <slot name="actions" />
    </header>
  </div>

  <header
    v-else
    class="seo-header flex items-center justify-between gap-2 rounded-lg  px-1 py-2 mb-2 shadow-sm select-none"
    :class="customClass"
  >
    <!-- Left: Back Button & Title -->
    <div class="flex items-center gap-1.5 min-w-0">
      <button
        v-if="showBack"
        type="button"
        class="flex items-center justify-center h-6 w-6 bg-[#141414] rounded-full text-[#1FA779] transition-colors cursor-pointer shrink-0"
        aria-label="Go back"
        @click="handleBack"
      >
        <ChevronLeft class="h-3 w-3" />
      </button>

      <!-- Page Title (SEO H1) -->
      <h1 class="text-[15px] font-bold text-white tracking-tight truncate leading-tight">
        <slot name="title">
          {{ title }}
        </slot>
      </h1>
    </div>

    <slot name="actions" />
  </header>
</template>

<style scoped>
.seo-header {
  min-height: 40px;
}
</style>

