<script setup lang="ts">
import { ChevronLeft, ShieldCheck, Clock, Share2, Printer, ChevronDown } from 'lucide-vue-next'

const props = defineProps<{
  title: string
  subtitle: string
  lastUpdated?: string
  complianceBadge?: string
  sections?: Array<{ id: string, title: string }>
}>()

const router = useRouter()
const { showDemoMessage } = useDemoInteraction()
const activeSectionId = ref<string>('')
const mobileTocOpen = ref<boolean>(false)

const handleBack = (): void => {
  if (import.meta.client && window.history.length > 1) {
    router.back()
  } else {
    router.push('/explore/account/me')
  }
}

const handlePrint = (): void => {
  if (import.meta.client) {
    window.print()
  }
}

const handleShare = (): void => {
  if (import.meta.client && navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href)
    showDemoMessage('Link copied to clipboard')
  } else {
    showDemoMessage('Sharing document...')
  }
}

const scrollToSection = (id: string): void => {
  if (!import.meta.client) return
  const el = document.getElementById(id)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
    activeSectionId.value = id
    mobileTocOpen.value = false
  }
}
</script>

<template>
  <div class="legal-page-shell max-w-5xl mx-auto pb-16 text-white px-2 sm:px-4">
    <!-- Reusable Top SEO Header Bar -->
    <SeoHeader
      :title="title"
      :description="subtitle"
      back-to="/explore/account/me"
      custom-class="mb-4"
    >
      <template #title>
        <div>
          <span class="text-sm sm:text-base font-bold text-white tracking-tight">{{ title }}</span>
          <p class="text-[11px] text-[#9eaea5] hidden sm:block font-normal">{{ subtitle }}</p>
        </div>
      </template>
      <template #right>
        <div class="flex items-center gap-2">
          <span class="text-base select-none">🇵🇭</span>
          <button
            type="button"
            class="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#141414] text-xs text-[#9eaea5] hover:text-white border border-white/5 transition-colors cursor-pointer"
            @click="handleShare"
          >
            <Share2 class="h-3.5 w-3.5" />
            <span>Share</span>
          </button>
          <button
            type="button"
            class="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#141414] text-xs text-[#9eaea5] hover:text-white border border-white/5 transition-colors cursor-pointer"
            @click="handlePrint"
          >
            <Printer class="h-3.5 w-3.5" />
            <span>Print</span>
          </button>
        </div>
      </template>
    </SeoHeader>

    <!-- Document Meta Card -->
    <div class="rounded-xl bg-gradient-to-r from-[#036242]/20 via-[#141414] to-[#141414] p-4 sm:p-5 mb-5 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-lg">
      <div>
        <div class="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#036242]/50 text-[#32d49a] text-[11px] font-semibold mb-1.5">
          <ShieldCheck class="h-3.5 w-3.5" />
          {{ complianceBadge || 'Official Document • Verified' }}
        </div>
        <h2 class="text-lg sm:text-xl font-extrabold text-white">{{ title }}</h2>
        <p class="text-xs text-[#9eaea5] mt-0.5">{{ subtitle }}</p>
      </div>

      <div v-if="lastUpdated" class="flex items-center gap-1.5 text-xs text-[#7a807d] bg-[#141414] px-3 py-1.5 rounded-lg border border-white/5 self-start sm:self-auto font-mono">
        <Clock class="h-3.5 w-3.5 text-[#32d49a]" />
        <span>Updated: {{ lastUpdated }}</span>
      </div>
    </div>

    <!-- Mobile Table of Contents Accordion -->
    <div v-if="sections && sections.length" class="lg:hidden mb-4 rounded-xl bg-[#141414] border border-white/5 overflow-hidden">
      <button
        type="button"
        class="flex w-full items-center justify-between p-3 text-xs font-bold text-white bg-[#1a1a1a]"
        @click="mobileTocOpen = !mobileTocOpen"
      >
        <span>Table of Contents ({{ sections.length }} Sections)</span>
        <ChevronDown class="h-4 w-4 transition-transform" :class="{ 'rotate-180': mobileTocOpen }" />
      </button>
      <div v-show="mobileTocOpen" class="p-3 grid grid-cols-1 gap-1.5 text-xs">
        <button
          v-for="(sec, idx) in sections"
          :key="sec.id"
          type="button"
          class="text-left py-1 px-2 rounded hover:bg-white/5 text-[#9eaea5] hover:text-white transition-colors"
          @click="scrollToSection(sec.id)"
        >
          <span class="text-[#32d49a] font-mono mr-1.5">{{ idx + 1 }}.</span>
          {{ sec.title }}
        </button>
      </div>
    </div>

    <!-- Content Layout (Grid on Desktop with Sticky Sidebar) -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
      <!-- Desktop Sidebar TOC -->
      <aside v-if="sections && sections.length" class="hidden lg:block lg:col-span-1 sticky top-20 rounded-xl bg-[#141414] p-4 border border-white/5">
        <h3 class="text-xs font-bold uppercase tracking-wider text-[#7a807d] mb-3">Contents</h3>
        <nav class="space-y-1 text-xs">
          <button
            v-for="(sec, idx) in sections"
            :key="sec.id"
            type="button"
            class="block w-full text-left py-1.5 px-2 rounded-lg text-[#9eaea5] hover:text-white hover:bg-white/5 transition-all truncate"
            @click="scrollToSection(sec.id)"
          >
            <span class="text-[#32d49a] font-mono mr-1">{{ idx + 1 }}.</span>
            {{ sec.title }}
          </button>
        </nav>
      </aside>

      <!-- Main Document Body -->
      <main class="space-y-6" :class="sections && sections.length ? 'lg:col-span-3' : 'lg:col-span-4'">
        <slot />
      </main>
    </div>
  </div>
</template>

