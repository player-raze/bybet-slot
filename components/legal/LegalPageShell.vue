<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    title: string
    backTo?: string
    bannerSrc?: string
    bannerAlt?: string
  }>(),
  {
    backTo: '/explore/account/me',
    bannerSrc: '/brand/about-hero-banner.webp',
    bannerAlt: 'ByBet',
  }
)

const router = useRouter()

const handleBack = (): void => {
  if (import.meta.client && window.history.length > 1) {
    router.back()
  } else {
    router.push(props.backTo)
  }
}
</script>

<template>
  <div class="legal-doc-page max-w-4xl mx-auto pb-16 px-2 sm:px-4 text-white">
    <!-- Top Sticky Header Bar with black background wrapper -->
    <div class="sticky top-[var(--header-height)] z-20 bg-[#000000] -mx-1 px-1 pt-0.5 pb-1 mb-2">
      <div class="header-card flex items-center gap-2 rounded-lg bg-[#141414] px-3 py-2 text-white shadow-sm border border-white/5">
        <button
          type="button"
          class="flex h-6 w-6 items-center justify-center rounded-full bg-[#1f1f1f] text-[#1fa779] hover:bg-[#252525] transition-colors cursor-pointer shrink-0"
          aria-label="Go back"
          @click="handleBack"
        >
          <ChevronLeft class="h-3.5 w-3.5" />
        </button>

        <h1 class="text-[15px] font-bold text-white tracking-tight leading-tight">
          {{ title }}
        </h1>
      </div>
    </div>

    <!-- Main Content Card -->
    <div class="doc-card rounded-2xl bg-[#141414] p-4 sm:p-6 lg:p-8 border border-white/5 shadow-md">
      <!-- Top Hero Banner -->
      <div class="hero-banner-wrapper mb-6 overflow-hidden rounded-2xl">
        <img
          :src="bannerSrc"
          :alt="bannerAlt"
          class="w-full h-auto object-cover rounded-2xl block"
          loading="eager"
        />
      </div>

      <!-- Centered Document Title -->
      <h2 class="text-center font-bold text-base sm:text-lg text-white mb-6">
        {{ title }}
      </h2>

      <!-- Document Body Content -->
      <div class="doc-body text-[#959799] text-xs sm:text-[13.5px] leading-relaxed space-y-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.legal-doc-page {
  opacity: 1 !important;
  transform: none !important;
}

.doc-card {
  word-break: break-word;
}
</style>
