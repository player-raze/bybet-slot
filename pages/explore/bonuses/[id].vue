<script setup lang="ts">
import { ChevronRight } from 'lucide-vue-next'
import SeoHeader from '~/components/SeoHeader.vue'
import PromotionComplianceFooter from '~/components/PromotionComplianceFooter.vue'
import ReminderModal from '~/components/modals/ReminderModal.vue'
import {
  PROMOTION_PLACEHOLDER_IMAGES,
  getBonusDetail,
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
</script>

<template>
  <div class="bonus-detail-page" :class="{ 'bonus-detail-page--with-action': bonus.hasJoinButton }">
    <SeoHeader
      sticky
      title="Bonuses"
      :description="bonus.subtitle || `Participate in ${bonus.title} on ByBet.`"
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
          :src="bonus.bannerImage"
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
        <header class="promotion-title">
          <img
            :src="bonus.thumbnailImage || PROMOTION_PLACEHOLDER_IMAGES.thumbnail"
            :alt="bonus.title"
            width="64"
            height="64"
            decoding="async"
          >
          <div>
            <h1>{{ bonus.title }}</h1>
            <p>{{ bonus.subtitle }}</p>
          </div>
        </header>

        <section
          v-if="bonus.showRequirements && bonus.requirements?.items.length"
          class="requirements-panel"
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

        <section class="period-section" aria-labelledby="period-title">
          <h2 id="period-title">Period:</h2>
          <p>{{ bonus.period }}</p>
        </section>

        <section
          v-if="bonus.qualifications.length"
          class="qualifications-section"
          aria-labelledby="qualifications-title"
        >
          <h2 id="qualifications-title">Qualifications:</h2>
          <dl class="qualification-table">
            <div v-for="qualification in bonus.qualifications" :key="qualification.label">
              <dt>{{ qualification.label }}</dt>
              <dd>{{ qualification.value }}</dd>
            </div>
          </dl>
        </section>

        <section class="reward-section" aria-labelledby="reward-content-title">
          <div class="reward-section__heading">
            <h2 id="reward-content-title">Event Content:</h2>
            <span v-if="bonus.eventContent.badge">{{ bonus.eventContent.badge }}</span>
          </div>

          <p class="reward-section__description">{{ bonus.eventContent.description }}</p>

          <div v-if="bonus.eventContent.methodCard" class="method-card">
            <strong>{{ bonus.eventContent.methodCard.title }}</strong>
            <span>{{ bonus.eventContent.methodCard.content }}</span>
          </div>

          <div v-if="bonus.eventContent.tables?.length" class="reward-tables">
            <div
              v-for="(table, tableIndex) in bonus.eventContent.tables"
              :key="`${table.headerTitle || 'reward'}-${tableIndex}`"
              class="reward-table"
            >
              <div v-if="table.headerTitle" class="reward-table__title">
                {{ table.headerTitle }}
              </div>
              <div v-if="table.subHeaderTitle" class="reward-table__subtitle">
                {{ table.subHeaderTitle }}
              </div>

              <div class="reward-table__scroller">
                <table>
                  <thead>
                    <tr>
                      <th v-for="column in table.columns" :key="column.key">
                        <span v-if="column.icon">{{ column.icon }}</span>
                        {{ column.label }}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(row, rowIndex) in table.rows" :key="rowIndex">
                      <td v-for="column in table.columns" :key="column.key">
                        {{ row[column.key] }}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p v-if="table.footnote" class="reward-table__footnote">{{ table.footnote }}</p>
            </div>
          </div>

          <ul v-if="bonus.eventContent.bullets?.length" class="promotion-list">
            <li v-for="bullet in bonus.eventContent.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
        </section>

        <section v-if="bonus.promotionTerms" class="text-section">
          <h2>Promotion T&amp;C:</h2>
          <div v-if="Array.isArray(bonus.promotionTerms)" class="text-section__stack">
            <p v-for="term in bonus.promotionTerms" :key="term">{{ term }}</p>
          </div>
          <p v-else>{{ bonus.promotionTerms }}</p>
        </section>

        <section class="text-section">
          <h2>Rules:</h2>
          <ul class="promotion-list">
            <li v-for="rule in bonus.rules" :key="rule">{{ rule }}</li>
          </ul>
        </section>

        <section v-if="bonus.withdrawalTerms" class="text-section">
          <h2>Withdrawal Terms:</h2>
          <p>{{ bonus.withdrawalTerms }}</p>
        </section>

        <NuxtLink to="/explore/legal/bonus-terms" class="promotion-terms-link">
          Terms and Conditions for Promotion
        </NuxtLink>
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
  padding-top: 0.2rem;
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
  padding: 0.2rem 0.05rem 0.28rem;
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

.promotion-title h1 {
  margin: 0;
  color: #f6f6f6;
  font-size: 0.82rem;
  font-weight: 800;
  line-height: 1.2;
}

.promotion-title p {
  margin: 0.12rem 0 0;
  color: #a2a5a3;
  font-size: 0.58rem;
  line-height: 1.25;
}

.requirements-panel {
  margin-bottom: 0.78rem;
  padding: 0.52rem 0.55rem 0.58rem;
  border-radius: 0.42rem;
  background: #050505;
}

.requirements-panel__heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.35rem;
  gap: 0.5rem;
}

.requirements-panel h2,
.requirements-panel button {
  margin: 0;
  font-size: 0.52rem;
}

.requirements-panel h2 {
  color: #f1f1f1;
  font-weight: 800;
}

.requirements-panel button {
  display: inline-flex;
  align-items: center;
  padding: 0;
  border: 0;
  color: #888c89;
  background: transparent;
  cursor: pointer;
  gap: 0.08rem;
}

.requirements-panel ul,
.promotion-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.requirements-panel li {
  display: flex;
  align-items: center;
  min-height: 1.25rem;
  color: #d0d1d0;
  font-size: 0.54rem;
  gap: 0.34rem;
}

.requirement-check {
  display: grid;
  width: 0.66rem;
  height: 0.66rem;
  flex: 0 0 0.66rem;
  place-items: center;
  border: 1px solid #707370;
  border-radius: 50%;
  color: #ffffff;
  font-size: 0.42rem;
}

.requirement-check--complete {
  border-color: #0f8d64;
  background: #0f8d64;
}

.period-section {
  margin-bottom: 0.76rem;
}

.period-section h2,
.period-section p {
  margin: 0;
  color: #747875;
  font-size: 0.56rem;
  font-weight: 500;
  line-height: 1.35;
}

.qualifications-section,
.reward-section,
.text-section {
  margin-top: 0.8rem;
}

.qualifications-section > h2,
.reward-section h2,
.text-section h2 {
  margin: 0 0 0.5rem;
  color: #ececec;
  font-size: 0.72rem;
  font-weight: 800;
}

.qualification-table {
  overflow: hidden;
  margin: 0;
  border: 1px solid #8d918f;
  border-radius: 0.38rem;
}

.qualification-table > div {
  display: grid;
  min-height: 2.1rem;
  grid-template-columns: 5.2rem minmax(0, 1fr);
}

.qualification-table > div + div {
  border-top: 1px solid #8d918f;
}

.qualification-table dt,
.qualification-table dd {
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0.34rem 0.5rem;
  font-size: 0.55rem;
}

.qualification-table dt {
  color: #ffffff;
  font-weight: 800;
  text-align: center;
  background: #087653;
}

.qualification-table dd {
  justify-content: center;
  color: #d9d9d9;
}

.reward-section__heading {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  gap: 0.28rem;
}

.reward-section__heading h2 {
  margin: 0;
}

.reward-section__heading > span {
  padding: 0.12rem 0.35rem;
  border-radius: 0.18rem;
  color: #d4f6e8;
  font-size: 0.46rem;
  background: #087653;
}

.reward-section__description,
.text-section p,
.promotion-list li {
  color: #d0d1d0;
  font-size: 0.55rem;
  line-height: 1.42;
}

.reward-section__description {
  margin: 0 0 0.72rem;
}

.method-card,
.reward-table {
  overflow: hidden;
  border: 1px solid #8d918f;
  border-radius: 0.38rem;
}

.method-card {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.7rem;
  text-align: center;
}

.method-card strong,
.reward-table__title {
  padding: 0.36rem 0.45rem;
  color: #ffffff;
  font-size: 0.54rem;
  font-weight: 800;
  text-align: center;
  background: #087653;
}

.method-card span,
.reward-table__subtitle {
  padding: 0.42rem 0.5rem;
  color: #d4d5d4;
  font-size: 0.54rem;
  text-align: center;
}

.reward-tables {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.reward-table__scroller {
  overflow-x: auto;
}

.reward-table table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.reward-table th,
.reward-table td {
  min-width: 5.5rem;
  padding: 0.43rem 0.46rem;
  color: #d7d8d7;
  font-size: 0.53rem;
  font-weight: 500;
  text-align: center;
}

.reward-table th {
  color: #ffffff;
  font-weight: 800;
  background: #087653;
}

.reward-table tbody tr + tr,
.reward-table tbody tr:first-child {
  border-top: 1px solid #8d918f;
}

.reward-table td:not(:first-child) {
  color: #0ca477;
}

.reward-table__footnote {
  margin: 0;
  padding: 0.35rem 0.48rem;
  border-top: 1px solid #8d918f;
  color: #8e918f;
  font-size: 0.48rem;
}

.promotion-list {
  margin-top: 0.65rem;
}

.promotion-list li {
  position: relative;
  padding-left: 0.54rem;
}

.promotion-list li::before {
  position: absolute;
  left: 0;
  content: '•';
}

.text-section__stack p,
.text-section > p {
  margin: 0;
}

.text-section__stack p + p {
  margin-top: 0.1rem;
}

.promotion-terms-link {
  display: inline-block;
  margin-top: 0.8rem;
  color: #79a600;
  font-size: 0.54rem;
  text-decoration: underline;
  text-underline-offset: 0.09rem;
}

.join-bar {
  display: flex;
  position: fixed;
  z-index: 45;
  right: max(0px, calc((100vw - var(--site-max-width)) / 2));
  bottom: 0;
  left: max(var(--sidebar-width), calc((100vw - var(--site-max-width)) / 2 + var(--sidebar-width)));
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
