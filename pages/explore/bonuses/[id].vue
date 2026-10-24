<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import SeoHeader from '~/components/SeoHeader.vue'
import PromotionComplianceFooter from '~/components/PromotionComplianceFooter.vue'
import ReminderModal from '~/components/modals/ReminderModal.vue'
import {
  PROMOTION_PLACEHOLDER_IMAGES,
  getBonusDetail,
  getPromoHeaderUrl,
  type BonusDetail,
} from '~/data/promotions'

const route = useRoute()
const bybetRedirectUrl = useRuntimeConfig().public.bybetRedirectUrl

const bonusId = computed(() => {
  const id = route.params.id
  return Array.isArray(id) ? id[0] : (id as string) || 'spins-bring-spins'
})

const bonus = computed<BonusDetail>(() => getBonusDetail(bonusId.value))
const bannerImageError = ref(false)
const isReminderOpen = ref(false)
const reminderMessage = ref('Please login first to join this promotion.')

const bonusHeaderImageSrc = computed(() => {
  return getPromoHeaderUrl(bonus.value.headerImage || bonus.value.bannerImage, bonus.value.slug)
})

const isSvgString = (icon?: string): boolean => {
  return Boolean(icon && typeof icon === 'string' && icon.trim().startsWith('<svg'))
}

const seoTitle = computed(() => bonus.value.seoTitle || `${bonus.value.title} — ByBet Bonus & Promotions`)

const seoDescription = computed(() => {
  if (bonus.value.seoDesc) return bonus.value.seoDesc
  if (bonus.value.seoDescription) return bonus.value.seoDescription
  const desc = bonus.value.subtitle || bonus.value.eventContent?.description || `Participate in ${bonus.value.title} on ByBet.`
  return `${desc} Join ByBet Philippines for exclusive casino promotions, free spins, deposit bonuses, and daily rebates.`
})

const seoKeywords = computed(() => {
  return [
    bonus.value.title,
    'ByBet bonus',
    'ByBet promotion',
    bonus.value.slug,
    'Philippines online casino',
    'free spins',
    'daily rebate',
    'casino bonus 2026',
    'sports betting promotion',
  ].join(', ')
})

const seoImage = computed(() => {
  const raw = bonusHeaderImageSrc.value || (typeof bonus.value.bannerImage === 'string' ? bonus.value.bannerImage : bonus.value.bannerImage?.banner) || bonus.value.thumbnailImage || '/brand/bybet-logo.webp'
  return raw.startsWith('http') ? raw : `https://bybet.com${raw}`
})

const canonicalUrl = computed(() => `https://bybet.com/explore/bonuses/${bonus.value.slug}`)

const jsonLd = computed(() => ({
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'BreadcrumbList',
      'itemListElement': [
        {
          '@type': 'ListItem',
          'position': 1,
          'name': 'Home',
          'item': 'https://bybet.com',
        },
        {
          '@type': 'ListItem',
          'position': 2,
          'name': 'Bonuses',
          'item': 'https://bybet.com/explore/bonuses',
        },
        {
          '@type': 'ListItem',
          'position': 3,
          'name': bonus.value.title,
          'item': canonicalUrl.value,
        },
      ],
    },
    {
      '@type': 'SaleEvent',
      'name': bonus.value.title,
      'description': seoDescription.value,
      'url': canonicalUrl.value,
      'image': seoImage.value,
      'eventStatus': 'https://schema.org/EventScheduled',
      'eventAttendanceMode': 'https://schema.org/OnlineEventAttendanceMode',
      'location': {
        '@type': 'VirtualLocation',
        'url': canonicalUrl.value,
      },
      'organizer': {
        '@type': 'Organization',
        'name': 'ByBet Philippines',
        'url': 'https://bybet.com',
        'logo': 'https://bybet.com/brand/bybet-logo.webp',
      },
    },
  ],
}))

useHead(() => ({
  title: seoTitle.value,
  meta: [
    { name: 'description', content: seoDescription.value },
    { name: 'keywords', content: seoKeywords.value },
    { property: 'og:title', content: seoTitle.value },
    { property: 'og:description', content: seoDescription.value },
    { property: 'og:image', content: seoImage.value },
    { property: 'og:url', content: canonicalUrl.value },
    { property: 'og:type', content: 'website' },
    { property: 'og:site_name', content: 'ByBet' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: seoTitle.value },
    { name: 'twitter:description', content: seoDescription.value },
    { name: 'twitter:image', content: seoImage.value },
  ],
  link: [
    { rel: 'canonical', href: canonicalUrl.value },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(jsonLd.value),
    },
  ],
}))

watch(bonusId, () => {
  bannerImageError.value = false
})

const handleJoinNow = (): void => {
  reminderMessage.value = 'Please login first to participate in this promotion.'
  isReminderOpen.value = true
}

const handleProgressClick = (): void => {
  reminderMessage.value = 'Please login first to view your mission progress.'
  isReminderOpen.value = true
}

const handleModalOk = (): void => {
  isReminderOpen.value = false
  if (import.meta.client) {
    window.location.href = bybetRedirectUrl
  }
}

const handleContentClick = (event: MouseEvent): void => {
  const target = (event.target as HTMLElement)?.closest('.promotion-terms-trigger, .text-green-1')
  if (target) {
    navigateTo('/explore/legal/bonus-terms')
  }
}
</script>

<template>
  <div class="bonus-detail-page" :class="{ 'bonus-detail-page--with-action': bonus.hasJoinButton }">
    <SeoHeader
      sticky
      title="Bonuses"
      :meta-title="seoTitle"
      :description="seoDescription"
      :keywords="seoKeywords"
      :og-image="seoImage"
      back-to="/explore/bonuses"
      custom-class="bonus-detail-header"
    >
      <template #actions>
        <span class="philippines-badge" role="img" aria-label="Philippines">🇵🇭</span>
      </template>
    </SeoHeader>

    <main class="bonus-detail-content">
      <section class="promotion-banner" :aria-label="`${bonus.title} banner`">
        <span class="promotion-banner__save">◎ Save</span>
        <img
          v-if="!bannerImageError"
          :src="bonusHeaderImageSrc"
          :alt="bonus.title"
          decoding="async"
          @error="bannerImageError = true"
        >
        <div v-else class="promotion-banner__fallback">
          <strong>{{ bonus.title }}</strong>
          <span>{{ bonus.subtitle }}</span>
        </div>
      </section>

      <article class="promotion-sheet">
        <div
          v-if="bonus.contentHtml"
          class="promotion-custom-content"
          @click="handleContentClick"
          v-html="bonus.contentHtml"
        />

        <template v-else>
          <div class="flex w-full flex-col lg:px-0 p-0">
            <!-- Header with Icon and Titles -->
            <header class="flex items-center lg:px-0">
              <div
                v-if="bonus.innerIcon || bonus.innerPageIcon"
                class="min-w-10 min-h-9 flex items-center justify-center fill-tab-bar-big-button"
              >
                <div
                  v-if="isSvgString(bonus.innerIcon || bonus.innerPageIcon)"
                  class="promotion-title__svg fill-tab-bar-big-button"
                  v-html="bonus.innerIcon || bonus.innerPageIcon"
                />
                <img
                  v-else
                  :src="(bonus.innerIcon || bonus.innerPageIcon)!"
                  :alt="bonus.title"
                  width="40"
                  height="41"
                  decoding="async"
                >
              </div>
              <img
                v-else
                :src="bonus.thumbnailImage || (typeof bonus.bannerImage === 'object' && bonus.bannerImage.thumbnail) || PROMOTION_PLACEHOLDER_IMAGES.thumbnail"
                :alt="bonus.title"
                width="40"
                height="40"
                class="min-w-10 min-h-9 rounded-8 object-cover"
                decoding="async"
              >
              <div class="h-full w-full overflow-hidden ml-3">
                <h1 class="mb-1 break-words text-button-8 font-semibold not-italic text-lgx leading-6 max-h-unset">{{ bonus.title }}</h1>
                <p class="break-words text-button-8 font-normal not-italic text-sm leading-4_5">{{ bonus.subtitle }}</p>
              </div>
            </header>

            <!-- Requirements Panel (if any) -->
            <section
              v-if="bonus.showRequirements && bonus.requirements?.items.length"
              class="requirements-panel mt-6"
              aria-labelledby="requirements-title"
            >
              <div class="requirements-panel__heading">
                <h2 id="requirements-title">Requirements:</h2>
                <button type="button" @click="handleProgressClick">
                  View Progress
                  <ChevronRight :size="13" />
                </button>
              </div>

              <ul>
                <li v-for="requirement in bonus.requirements.items" :key="requirement.text">
                  <span class="requirement-check" :class="{ 'requirement-check--complete': requirement.completed }">
                    {{ requirement.completed ? '✓' : '' }}
                  </span>
                  {{ requirement.text }}
                </li>
              </ul>
            </section>

            <!-- Period -->
            <section v-if="bonus.period" class="text-sm leading-4_75 mt-6 text-text-4 lg:px-0" aria-labelledby="period-title">
              <div id="period-title" class="text-text-4 font-normal not-italic text-sm leading-4_5">Period：</div>
              <small class="text-text-4 font-normal not-italic text-sm leading-4_5 mt-1 block">
                <span>{{ bonus.period }}</span>
              </small>
            </section>

            <!-- Qualifications -->
            <section
              v-if="bonus.qualifications?.length"
              class="mt-6"
              aria-labelledby="qualifications-title"
            >
              <div id="qualifications-title" class="text-lg font-bold leading-7">Qualifications:</div>
              <div class="overflow-hidden border border-button-8 mt-4 rounded-8">
                <div
                  v-for="qualification in bonus.qualifications"
                  :key="qualification.label"
                  class="last:border-b-0 border-button-8 border-b-0_25 _row_18lm5_1 flex"
                >
                  <div class="tw-layout-center flex flex-wrap content-center items-center justify-center text-theme-tab-text bg-primary font-semibold not-italic text-sm leading-4_5 w-30 min-w-24 px-1 py-3 text-center">
                    {{ qualification.label }}
                  </div>
                  <div class="self-center flex-1 px-4 text-button-8 font-normal not-italic text-sm leading-4_5 py-3">
                    {{ qualification.value }}
                  </div>
                </div>
              </div>
            </section>

            <!-- Event Content -->
            <section v-if="bonus.eventContent" class="mt-6" aria-labelledby="reward-content-title">
              <div class="flex items-center mb-4 gap-2">
                <div id="reward-content-title" class="text-lg font-bold leading-5_25">Event Content:</div>
                <span v-if="bonus.eventContent.badge" class="px-2 py-0.5 rounded text-xs bg-primary text-theme-tab-text font-semibold">{{ bonus.eventContent.badge }}</span>
              </div>

              <p v-if="bonus.eventContent.description" class="text-button-8 font-normal not-italic text-sm leading-4_5 mb-4">{{ bonus.eventContent.description }}</p>

              <!-- Method Card -->
              <div v-if="bonus.eventContent.methodCard" class="overflow-hidden border border-button-8 rounded-8 mb-4">
                <div class="tw-layout-center text-theme-tab-text bg-primary font-semibold text-sm py-2 px-3 text-center">
                  {{ bonus.eventContent.methodCard.title }}
                </div>
                <div class="text-button-8 text-sm py-2 px-3 text-center bg-layer-12">
                  {{ bonus.eventContent.methodCard.content }}
                </div>
              </div>

              <!-- Tables -->
              <div v-if="bonus.eventContent.tables?.length" class="flex flex-col gap-4">
                <div
                  v-for="(table, tableIndex) in bonus.eventContent.tables"
                  :key="`${table.headerTitle || 'reward'}-${tableIndex}`"
                  class="overflow-hidden border border-button-8 rounded-8"
                >
                  <div v-if="table.headerTitle" class="text-theme-tab-text bg-primary font-semibold text-sm py-2 px-3 text-center">
                    {{ table.headerTitle }}
                  </div>
                  <div v-if="table.subHeaderTitle" class="text-button-8 text-xs py-1.5 px-3 text-center border-b border-button-8 bg-layer-12">
                    {{ table.subHeaderTitle }}
                  </div>

                  <div class="overflow-x-auto">
                    <table class="w-full text-center border-collapse">
                      <thead>
                        <tr class="bg-primary text-theme-tab-text">
                          <th v-for="column in table.columns" :key="column.key" class="py-2.5 px-3 text-sm font-semibold border-r border-button-8 last:border-r-0">
                            <span v-if="column.icon">{{ column.icon }} </span>
                            {{ column.label }}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(row, rowIndex) in table.rows" :key="rowIndex" class="border-t border-button-8 text-button-8 hover:bg-layer-12/40">
                          <td v-for="column in table.columns" :key="column.key" class="py-2.5 px-3 text-sm border-r border-button-8 last:border-r-0">
                            {{ row[column.key] }}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <p v-if="table.footnote" class="text-xs text-text-4 p-2 text-center border-t border-button-8">{{ table.footnote }}</p>
                </div>
              </div>

              <!-- Bullets -->
              <div v-if="bonus.eventContent.bullets?.length" class="mt-4 flex flex-col font-normal text-sm leading-4_5 text-button-8 space-y-1">
                <span v-for="bullet in bonus.eventContent.bullets" :key="bullet" class="font-normal not-italic text-sm leading-4_5 text-button-8">
                  • {{ bullet.replace(/^[•\-\*]\s*/, '') }}
                </span>
              </div>
            </section>

            <!-- Promotion T&C -->
            <section v-if="bonus.promotionTerms" class="mt-6 text-text-2">
              <div class="mb-4 text-lg font-bold leading-7">Promotion T&amp;C:</div>
              <ol v-if="Array.isArray(bonus.promotionTerms)" class="list-decimal pl-4 mb-0 text-button-8 font-normal not-italic text-sm leading-4_5 space-y-1">
                <li v-for="term in bonus.promotionTerms" :key="term" class="mb-0">{{ term.replace(/^\d+\.\s*/, '') }}</li>
              </ol>
              <p v-else class="text-button-8 font-normal not-italic text-sm leading-4_5">{{ bonus.promotionTerms }}</p>
            </section>

            <!-- Rules -->
            <section v-if="bonus.rules?.length" class="mt-6 text-button-8">
              <div class="mb-4 font-semibold not-italic text-lg leading-5_5 text-button-8">Rules:</div>
              <div class="flex flex-col font-normal not-italic text-sm leading-4_5 text-button-8 space-y-1">
                <span v-for="rule in bonus.rules" :key="rule" class="font-normal not-italic text-sm leading-4_5 text-button-8">
                  • {{ rule.replace(/^[•\-\*]\s*/, '') }}
                </span>
              </div>
            </section>

            <!-- Withdrawal Terms -->
            <section v-if="bonus.withdrawalTerms" class="mt-6 text-button-8">
              <div class="mb-4 font-semibold not-italic text-lg leading-5_5 text-button-8">Withdrawal Terms:</div>
              <p class="font-normal not-italic text-sm leading-4_5 text-button-8">{{ bonus.withdrawalTerms }}</p>
            </section>

            <!-- Terms Link -->
            <NuxtLink to="/explore/legal/bonus-terms" class="cursor-pointer underline font-normal not-italic text-sm leading-4_5 text-green-1 pt-6 block">
              Terms and Conditions for Promotion
            </NuxtLink>
          </div>
        </template>
      </article>
    </main>

    <PromotionComplianceFooter />

    <div v-if="bonus.hasJoinButton" class="join-bar">
      <button type="button" @click="handleJoinNow">Join Now</button>
    </div>

    <ReminderModal
      v-if="isReminderOpen"
      title="Notice"
      :message="reminderMessage"
      @close="isReminderOpen = false"
      @ok="handleModalOk"
    />
  </div>
</template>

<style scoped>
.bonus-detail-page {
  width: 100%;
  min-width: 0;
  color: #e8e9e8;
}

/* A transformed ancestor makes position: fixed relative to that ancestor.
   Disable the shared page-reveal transform here so Join Now stays viewport-sticky. */
.bonus-detail-page.section-reveal,
.bonus-detail-page.section-reveal--visible {
  transform: none !important;
}

.bonus-detail-page--with-action {
  padding-bottom: 2.9rem;
}

:deep(.seo-header-sticky-wrapper) {
  margin-right: -0.05rem;
  margin-left: -0.05rem;
  /* padding: 0 0.05rem 0.28rem; */
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

:deep(.bonus-detail-header) {
  min-height: 2.15rem;
  padding: 0.26rem 0.45rem;
  border: 1px solid rgba(255, 255, 255, 0.035);
  border-radius: 0.48rem;
  background: #171817;
}

.philippines-badge {
  display: grid;
  width: 1.2rem;
  height: 1.2rem;
  place-items: center;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 50%;
  font-size: 0.7rem;
  line-height: 1;
  background: #272827;
}

.bonus-detail-content {
  display: flex;
  flex-direction: column;
  gap: 0.34rem;
}

.promotion-banner {
  position: relative;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 5 / 1;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 0.48rem;
  background: #171817;
}

.promotion-banner > img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.promotion-banner__save {
  position: absolute;
  z-index: 2;
  top: 0.35rem;
  left: 0.35rem;
  padding: 0.13rem 0.36rem;
  border-radius: 999px;
  color: #ffffff;
  font-size: 0.47rem;
  font-weight: 800;
  background: #ed174b;
  box-shadow: 0 0.12rem 0.35rem rgba(0, 0, 0, 0.34);
}

.promotion-banner__fallback {
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  background: radial-gradient(circle at center, #6a3f00, #211404 60%, #111111);
}

.promotion-banner__fallback strong {
  color: #ffcf4b;
  font-size: 1.25rem;
}

.promotion-banner__fallback span {
  margin-top: 0.2rem;
  color: #f2f2f2;
  font-size: 0.65rem;
}

.promotion-sheet {
  padding: 0.72rem 0.62rem 0.85rem;
  border: 1px solid rgba(255, 255, 255, 0.035);
  border-radius: 0.48rem;
  background: #151515;
}

.promotion-custom-content {
  width: 100%;
  color: #e8e9e8;
}

.promotion-custom-content :deep(.text-button-8) {
  color: #f4f7f5;
}

.promotion-custom-content :deep(.text-text-4) {
  color: #8e9491;
}

.promotion-custom-content :deep(.text-text-2) {
  color: #f4f7f5;
}

.promotion-custom-content :deep(.text-green-1) {
  color: #32d49a;
}

.promotion-custom-content :deep(.border-button-8) {
  border-color: rgba(255, 255, 255, 0.12);
}

.promotion-custom-content :deep(.rounded-8) {
  border-radius: 8px;
}

.promotion-custom-content :deep(.w-30) {
  width: 8.5rem;
}

.promotion-custom-content :deep(.text-lgx) {
  font-size: 1.15rem;
  font-weight: 700;
}

.promotion-custom-content :deep(.leading-4_5) {
  line-height: 1.15rem;
}

.promotion-custom-content :deep(.leading-4_75) {
  line-height: 1.2rem;
}

.promotion-custom-content :deep(.leading-5_25) {
  line-height: 1.35rem;
}

.promotion-custom-content :deep(.leading-5_5) {
  line-height: 1.4rem;
}

.promotion-custom-content :deep(.bg-primary) {
  background-color: #036242;
}

.promotion-custom-content :deep(.text-theme-tab-text) {
  color: #ffffff;
}

.promotion-custom-content :deep(._row_18lm5_1) {
  display: flex;
}

.promotion-custom-content :deep(.fill-tab-bar-big-button) {
  fill: #32d49a;
}

.promotion-custom-content :deep(iframe) {
  display: block;
  border: none;
  background: transparent;
  color-scheme: dark;
}

.promotion-custom-content :deep(._component-treasure-box__grid-common_1eql6_1) {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  padding: 0.35rem 0.25rem 0.45rem;
  background-color: #1a1e1b;
  border: 1px solid rgba(255, 255, 255, 0.08);
  min-height: 9.375rem;
}

.promotion-custom-content :deep(._component-treasure-box__qualification_1eql6_5) {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0.25rem 0;
}

.promotion-custom-content :deep([data-testid^="treasure-box-button"]) {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% - 0.5rem);
  margin: 0 auto;
  border: none;
  cursor: not-allowed;
  border-radius: 10px;
  height: 1.35rem;
  font-size: 0.72rem;
  font-weight: 600;
}

.promotion-custom-content :deep(._tableColumn_1k2zb_1) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1a1e1b;
}

.promotion-custom-content :deep(.bg-layer-12) {
  background-color: #1a1e1b;
}

.promotion-custom-content :deep(.bg-icon-5) {
  background-color: #242c27;
}

.promotion-custom-content :deep(.text-button-11) {
  color: #8e9491;
}

.promotion-custom-content :deep(.text-item-4) {
  color: #ffc83b;
  font-weight: 600;
}

.promotion-custom-content :deep(.text-primary-text) {
  color: #32d49a;
  font-weight: 600;
}

.promotion-custom-content :deep(.border-dividers-7) {
  border-color: rgba(255, 255, 255, 0.12);
}

.promotion-custom-content :deep(.text-dividers-7) {
  color: #e4e7e6;
}

.promotion-custom-content :deep(.border-primary) {
  border-color: #036242;
}

.promotion-custom-content :deep(.text-black-1) {
  color: #f4f7f5;
}

.promotion-custom-content :deep(.rounded-10) {
  border-radius: 10px;
}

.promotion-custom-content :deep(.rounded-20) {
  border-radius: 20px;
}

.promotion-custom-content :deep(.h-37_5) {
  height: 9.375rem;
}

.promotion-custom-content :deep(.h-6_25) {
  height: 1.5625rem;
}

.promotion-custom-content :deep(.min-w-24) {
  min-width: 6rem;
}

.promotion-custom-content :deep(.w-11) {
  width: 2.75rem;
}

.promotion-custom-content :deep(.border-b-0_25) {
  border-bottom-width: 1px;
}

.promotion-custom-content :deep(.leading-4) {
  line-height: 1rem;
}

.promotion-custom-content :deep(.leading-6) {
  line-height: 1.5rem;
}

.promotion-custom-content :deep(.leading-6_75) {
  line-height: 1.6875rem;
}

.promotion-custom-content :deep(.leading-7) {
  line-height: 1.75rem;
}

.promotion-custom-content :deep(.max-h-unset) {
  max-height: unset;
}

.promotion-custom-content :deep(.tw-layout-center) {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.promotion-custom-content :deep(picture) {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.promotion-custom-content :deep(picture img) {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

:global(html[data-theme='light']) .promotion-custom-content {
  color: #14251d;
}

:global(html[data-theme='light']) .promotion-custom-content :deep(.text-button-8) {
  color: #14251d;
}

:global(html[data-theme='light']) .promotion-custom-content :deep(.text-text-4) {
  color: #5d7066;
}

:global(html[data-theme='light']) .promotion-custom-content :deep(.text-text-2) {
  color: #14251d;
}

:global(html[data-theme='light']) .promotion-custom-content :deep(.border-button-8) {
  border-color: rgba(3, 98, 66, 0.14);
}

:global(html[data-theme='light']) .promotion-custom-content :deep(.text-green-1) {
  color: #036242;
}

:global(html[data-theme='light']) .promotion-custom-content :deep(._component-treasure-box__grid-common_1eql6_1) {
  background-color: #f0f5f2;
  border-color: rgba(3, 98, 66, 0.12);
}

:global(html[data-theme='light']) .promotion-custom-content :deep(._tableColumn_1k2zb_1) {
  background-color: #ffffff;
}

:global(html[data-theme='light']) .promotion-custom-content :deep(.bg-layer-12) {
  background-color: #f0f5f2;
}

:global(html[data-theme='light']) .promotion-custom-content :deep(.bg-icon-5) {
  background-color: #e2e8e5;
}

:global(html[data-theme='light']) .promotion-custom-content :deep(.text-button-11) {
  color: #5d7066;
}

:global(html[data-theme='light']) .promotion-custom-content :deep(.text-primary-text) {
  color: #036242;
}

:global(html[data-theme='light']) .promotion-custom-content :deep(.border-dividers-7) {
  border-color: rgba(3, 98, 66, 0.14);
}

:global(html[data-theme='light']) .promotion-custom-content :deep(.text-dividers-7) {
  color: #22332a;
}

:global(html[data-theme='light']) .promotion-custom-content :deep(.text-black-1) {
  color: #14251d;
}

.promotion-title {
  display: flex;
  align-items: center;
  margin-bottom: 0.72rem;
  gap: 0.52rem;
}

.promotion-title img {
  display: block;
  width: 2.35rem;
  height: 2.35rem;
  flex: 0 0 2.35rem;
  border-radius: 0.43rem;
  object-fit: cover;
}

.promotion-title__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2.5rem;
  border-radius: 0.43rem;
}

.promotion-title__svg {
  display: flex;
  align-items: center;
  justify-content: center;
}

.promotion-title__svg :deep(svg) {
  display: block;
}

:deep(.fill-tab-bar-big-button) {
  fill: var(--bright, #32d49a);
}

.requirements-panel {
  padding: 0.65rem 0.75rem;
  border-radius: 0.48rem;
  background: #050505;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.requirements-panel__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  gap: 0.5rem;
}

.requirements-panel h2 {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 700;
  color: #f1f1f1;
}

.requirements-panel button {
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: 0;
  color: #888c89;
  background: transparent;
  font-size: 0.75rem;
  cursor: pointer;
  gap: 0.15rem;
}

.requirements-panel ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.requirements-panel li {
  display: flex;
  align-items: center;
  min-height: 1.5rem;
  color: #d0d1d0;
  font-size: 0.875rem;
  gap: 0.5rem;
}

.requirement-check {
  display: grid;
  width: 1rem;
  height: 1rem;
  flex: 0 0 1rem;
  place-items: center;
  border: 1px solid #707370;
  border-radius: 50%;
  color: #ffffff;
  font-size: 0.65rem;
}

.requirement-check--complete {
  border-color: #0f8d64;
  background: #0f8d64;
}

:global(html[data-theme='light']) .requirements-panel {
  background: #f0f5f2;
  border-color: rgba(3, 98, 66, 0.14);
}

:global(html[data-theme='light']) .requirements-panel h2 {
  color: #14251d;
}

:global(html[data-theme='light']) .requirements-panel li {
  color: #14251d;
}

.join-bar {
  display: flex;
  position: fixed;
  z-index: 45;
  right: 0;
  bottom: 0;
  left: var(--sidebar-width);
  padding: 0.38rem 0.58rem;
  background: rgba(0, 0, 0, 0.92);
  backdrop-filter: blur(12px);
}

.join-bar button {
  width: 100%;
  min-height: 2.15rem;
  border: 0;
  border-radius: 0.46rem;
  color: #ffffff;
  font-size: 0.64rem;
  font-weight: 800;
  background: #087653;
  cursor: pointer;
}

.join-bar button:hover {
  background: #0a8960;
}

@media (max-width: 63.99rem) {
  .join-bar {
    right: 0;
    left: 0;
  }
}

@media (max-width: 35rem) {
  .promotion-banner {
    aspect-ratio: 3.3 / 1;
  }

  .promotion-sheet {
    padding: 0.8rem 0.68rem 0.95rem;
  }

  .promotion-title h1 {
    font-size: 0.9rem;
  }

  .promotion-title p,
  .period-section h2,
  .period-section p,
  .qualification-table dt,
  .qualification-table dd,
  .reward-section__description,
  .text-section p,
  .promotion-list li,
  .promotion-terms-link {
    font-size: 0.62rem;
  }

  .requirements-panel li,
  .method-card strong,
  .method-card span,
  .reward-table__title,
  .reward-table__subtitle,
  .reward-table th,
  .reward-table td {
    font-size: 0.59rem;
  }

  .qualification-table > div {
    grid-template-columns: 5.4rem minmax(0, 1fr);
  }
}
</style>
