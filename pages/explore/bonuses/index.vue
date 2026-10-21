<script setup lang="ts">
import {
  Camera,
  ChevronRight,
  CircleDollarSign,
  Coins,
  Crown,
  Flame,
  Gift,
  Megaphone,
  Percent,
  Sparkles,
  Spade,
  Trophy,
  UserCheck,
  Users,
  Wallet,
  Zap,
} from 'lucide-vue-next'
import SeoHeader from '~/components/SeoHeader.vue'
import ReminderModal from '~/components/modals/ReminderModal.vue'
import {
  PROMO_CATEGORIES,
  FEATURED_PROMOTIONS,
  PROMOTION_SECTIONS,
  type FeaturedPromo,
  type PromotionItem,
} from '~/data/promotions'

const router = useRouter()
const bybetRedirectUrl = useRuntimeConfig().public.bybetRedirectUrl

const selectedCategory = ref('all')
const isReminderOpen = ref(false)
const carouselRef = ref<HTMLElement | null>(null)
const activeCarouselIndex = ref(0)
const currentTime = ref(Date.now())
let timer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timer = setInterval(() => {
    currentTime.value = Date.now()
  }, 1000)
})

onBeforeUnmount(() => {
  if (timer) clearInterval(timer)
})

const selectCategory = (key: string): void => {
  selectedCategory.value = key
}

// Navigate directly to inner bonus page
const navigateToBonus = (promo: PromotionItem | FeaturedPromo): void => {
  const targetId = promo.slug || promo.id
  router.push(`/explore/bonuses/${targetId}`)
}

const handleModalOk = (): void => {
  isReminderOpen.value = false
  window.location.href = bybetRedirectUrl
}

const onCarouselScroll = (): void => {
  if (!carouselRef.value) return
  const scrollLeft = carouselRef.value.scrollLeft
  const cardWidth = carouselRef.value.offsetWidth * 0.8
  const index = Math.round(scrollLeft / (cardWidth || 1))
  activeCarouselIndex.value = Math.max(0, Math.min(index, FEATURED_PROMOTIONS.length - 1))
}

const scrollToSlide = (index: number): void => {
  if (!carouselRef.value) return
  const children = carouselRef.value.children
  if (children[index]) {
    (children[index] as HTMLElement).scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    })
    activeCarouselIndex.value = index
  }
}

// Real-time countdown calculator from end date
const getCountdownText = (endDateStr: string, fallback?: string): string => {
  const target = new Date(endDateStr).getTime()
  const diff = target - currentTime.value

  if (diff <= 0) {
    return 'Event Ended'
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const months = Math.floor(days / 30)
  const remainingDays = days % 30

  if (months >= 1) {
    return `Event Countdown: ${months} Month ${remainingDays} Day`
  }

  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((diff % (1000 * 60)) / 1000)

  return `Event Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`
}

const filteredSections = computed(() => {
  if (selectedCategory.value === 'all') {
    return PROMOTION_SECTIONS
  }
  return PROMOTION_SECTIONS.filter(s => s.category === selectedCategory.value)
})

const getIconComponent = (type?: string) => {
  switch (type) {
    case 'deposit':
      return Wallet
    case 'spins':
      return Flame
    case 'rebate':
      return Percent
    case 'loss':
      return Coins
    case 'chest':
      return Gift
    case 'angpao':
      return Sparkles
    case 'sports':
      return Trophy
    case 'basketball':
      return Zap
    case 'streak':
      return Zap
    case 'soccer':
      return Trophy
    case 'live-casino':
      return Spade
    case 'referral':
      return Users
    case 'profile':
      return UserCheck
    case 'vip':
      return Crown
    case 'giveaway':
      return Megaphone
    case 'camera':
      return Camera
    default:
      return CircleDollarSign
  }
}
</script>

<template>
  <div class="bonuses-page w-full min-w-0 pb-16 pt-1 text-white">
    <!-- Reusable SEO Top Header Bar & Category Filter Bar -->
    <div class="sticky top-[var(--header-height)] z-20 bg-[#000000] -mx-1 px-1 -mt-1 pb-1">
      <SeoHeader
        title="Bonuses"
        description="Explore the latest bonuses, daily slot rebates, free spins, deposit matches, and VIP promotions on ByBet Philippines."
        keywords="ByBet bonuses, Philippines casino bonus, deposit reward, free spins, daily slot rebate"
      />

      <!-- Category Filter Bar -->
      <div class="category-nav-bar flex items-center gap-1.5 overflow-x-auto no-scrollbar rounded-lg bg-[#171817] px-2 py-1.5 mb-1 shadow-sm">
        <button
          v-for="cat in PROMO_CATEGORIES"
          :key="cat.key"
          type="button"
          class="category-pill px-3 py-1 rounded-md text-[13px] whitespace-nowrap transition-all cursor-pointer select-none font-medium"
          :class="selectedCategory === cat.key ? 'bg-[#036242] text-white font-bold shadow' : 'text-[#8e9491] hover:text-white'"
          @click="selectCategory(cat.key)"
        >
          {{ cat.label }}
        </button>
      </div>
    </div>

    <!-- Featured Promotions Carousel (Top Banners) -->
    <section class="featured-promos-section mb-5" aria-label="Featured Promotions">
      <div
        ref="carouselRef"
        class="featured-grid flex gap-2.5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory pb-1"
        @scroll.passive="onCarouselScroll"
      >
        <article
          v-for="promo in FEATURED_PROMOTIONS"
          :key="promo.id"
          class="featured-card flex-none w-[80%] sm:w-[48%] lg:w-[24.2%] rounded-xl overflow-hidden bg-[#181918] border border-white/5 shadow-md flex flex-col group cursor-pointer select-none snap-start hover:border-emerald-500/30 transition-all"
          @click="navigateToBonus(promo)"
        >
          <!-- Banner Graphic Area -->
          <div class="relative w-full aspect-[200/100] overflow-hidden bg-gradient-to-br from-[#12281d] via-[#101c15] to-[#0a110d] flex items-center justify-between p-3">
            <!-- Decorative Visual Glow -->
            <div class="absolute inset-0 bg-radial from-emerald-500/20 via-transparent to-transparent pointer-events-none" />

            <!-- Content inside Banner -->
            <div class="relative z-10 flex flex-col justify-between h-full">
              <!-- Top Badge -->
              <span class="text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-950/80 px-1.5 py-0.5 rounded w-fit border border-emerald-500/30 shadow-sm">
                {{ promo.rate || 'PROMO' }}
              </span>

              <!-- Banner Title Overlay -->
              <div class="mt-1">
                <div class="text-[14px] font-black leading-tight text-white drop-shadow">
                  {{ promo.badgeText || promo.title }}
                </div>
              </div>

              <!-- Payment Method Badges (Maya, GCash) -->
              <div class="flex items-center gap-1 mt-1.5">
                <span class="inline-flex items-center px-1.5 py-0.2 rounded-full bg-black/60 border border-white/10 text-[9px] font-bold text-white shadow-sm">
                  <span class="text-[#22c55e] mr-0.5">●</span> Maya
                </span>
                <span class="inline-flex items-center px-1.5 py-0.2 rounded-full bg-black/60 border border-white/10 text-[9px] font-bold text-white shadow-sm">
                  <span class="text-[#3b82f6] mr-0.5">●</span> GCash
                </span>
              </div>
            </div>

            <!-- Right Side Graphic / Mascot Icon -->
            <div class="relative z-10 h-14 w-14 shrink-0 rounded-xl bg-gradient-to-br from-emerald-600/30 to-black/40 border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Trophy v-if="promo.category === 'sports'" class="h-7 w-7 text-emerald-400 drop-shadow" />
              <Spade v-else-if="promo.category === 'live-casino'" class="h-7 w-7 text-amber-400 drop-shadow" />
              <Sparkles v-else-if="promo.rate === '₱60,000'" class="h-7 w-7 text-blue-400 drop-shadow" />
              <Gift v-else class="h-7 w-7 text-pink-400 drop-shadow" />
            </div>
          </div>

          <!-- Bottom Metadata -->
          <div class="px-2.5 py-2 flex flex-col bg-[#141514]">
            <h3 class="text-[13px] font-bold text-white truncate group-hover:text-emerald-400 transition-colors">
              {{ promo.title }}
            </h3>
            <span class="text-[11px] text-[#8e9491] truncate font-mono mt-0.5">
              {{ getCountdownText(promo.endDate, promo.countdownText) }}
            </span>
          </div>
        </article>
      </div>

      <!-- Carousel Pagination Dots -->
      <div class="flex items-center justify-center gap-1.5 mt-2">
        <button
          v-for="(_, index) in FEATURED_PROMOTIONS"
          :key="index"
          type="button"
          class="h-1.5 rounded-full transition-all cursor-pointer"
          :class="activeCarouselIndex === index ? 'w-4 bg-emerald-500' : 'w-1.5 bg-white/20 hover:bg-white/40'"
          :aria-label="`Slide ${index + 1}`"
          @click="scrollToSlide(index)"
        />
      </div>
    </section>

    <!-- Promotion Section Lists -->
    <div class="promo-sections space-y-4">
      <section
        v-for="section in filteredSections"
        :key="section.id"
        class="promo-section"
      >
        <!-- Section Title with Right Arrow -->
        <header
          class="flex items-center justify-between mb-2 px-0.5 cursor-pointer"
          @click="selectedCategory = section.category"
        >
          <h2 class="text-[15px] font-bold text-white tracking-tight flex items-center gap-1">
            {{ section.title }}
          </h2>
          <ChevronRight class="h-4 w-4 text-[#8e9491] hover:text-white transition-colors" />
        </header>

        <!-- Section Items Card Group -->
        <div class="rounded-xl bg-[#141414] border border-white/5 divide-y divide-white/5 overflow-hidden shadow-sm">
          <article
            v-for="item in section.items"
            :key="item.id"
            class="promo-row flex items-center justify-between p-2.5 sm:p-3 hover:bg-white/[0.025] transition-colors cursor-pointer group"
            @click="navigateToBonus(item)"
          >
            <!-- Left: Thumbnail + Titles -->
            <div class="flex items-center gap-3 min-w-0 flex-1 pr-2.5">
              <!-- Visual Icon Badge -->
              <div
                class="promo-thumbnail h-11 w-11 shrink-0 rounded-lg flex items-center justify-center p-1 relative overflow-hidden border border-white/5 shadow-inner"
                :style="{ background: `linear-gradient(135deg, ${item.accentColor}30, #171817)` }"
              >
                <component
                  :is="getIconComponent(item.thumbnailType)"
                  class="h-5 w-5 drop-shadow"
                  :style="{ color: item.accentColor || '#10b981' }"
                />

                <!-- Mini ByBet brand watermark -->
                <span class="absolute bottom-0.5 right-0.5 text-[7px] font-extrabold text-white/50 bg-black/60 px-0.5 rounded leading-none">
                  ByBet
                </span>
              </div>

              <!-- Titles and Description -->
              <div class="min-w-0 flex-1">
                <h3 class="text-[13px] font-semibold text-white leading-snug group-hover:text-emerald-400 transition-colors">
                  {{ item.title }}
                </h3>
                <p class="text-[11px] text-[#8e9491] leading-tight line-clamp-1 mt-0.5">
                  {{ item.description }}
                </p>
              </div>
            </div>

            <!-- Right: Details Button -->
            <button
              type="button"
              class="details-btn shrink-0 px-3 py-1 rounded-full text-[11px] font-medium text-[#9ca3af] bg-[#222423] hover:bg-[#2c2f2d] hover:text-white transition-colors cursor-pointer"
              @click.stop="navigateToBonus(item)"
            >
              Details
            </button>
          </article>
        </div>
      </section>
    </div>

    <!-- Login Reminder Modal -->
    <ReminderModal
      v-if="isReminderOpen"
      title="Reminder"
      message="Please login first"
      @close="isReminderOpen = false"
      @ok="handleModalOk"
    />
  </div>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
