<script setup lang="ts">
import {
  AlertCircle,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleDollarSign,
  Clock,
  Coins,
  Crown,
  ExternalLink,
  Flame,
  Gift,
  HelpCircle,
  Info,
  Percent,
  ShieldCheck,
  Smartphone,
  Spade,
  Sparkles,
  Trophy,
  Users,
  Wallet,
} from 'lucide-vue-next'
import SeoHeader from '~/components/SeoHeader.vue'
import ReminderModal from '~/components/modals/ReminderModal.vue'
import { getBonusDetail, type BonusDetail } from '~/data/promotions'

const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()
const bybetRedirectUrl = config.public?.bybetRedirectUrl || 'https://bybet.com'

const bonusId = computed(() => {
  const p = route.params.id
  return Array.isArray(p) ? p[0] : (p as string) || 'unlimited-rebate'
})

const bonus = computed<BonusDetail>(() => {
  return getBonusDetail(bonusId.value)
})

const isReminderOpen = ref(false)
const reminderMessage = ref('Please login first to join this promotion.')
const bannerImageError = ref(false)

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

const getCategoryIcon = (type?: string) => {
  switch (type) {
    case 'deposit':
      return Wallet
    case 'spins':
      return Flame
    case 'rebate':
      return Percent
    case 'loss':
      return Coins
    case 'sports':
      return Trophy
    case 'live-casino':
      return Spade
    default:
      return Sparkles
  }
}
</script>

<template>
  <div class="bonus-detail-page w-full min-w-0 pb-24 pt-1 text-white">
    <!-- Reusable Top SEO Navigation Header -->
    <SeoHeader
      :title="bonus.title"
      :description="bonus.subtitle || `Participate in ${bonus.title} promotion on ByBet Philippines.`"
      back-to="/explore/bonuses"
    />

    <!-- Main Container -->
    <div class="space-y-3.5 mt-2">
      <!-- 1. Top Promotion Banner with Responsible Gaming Strip -->
      <section class="banner-wrapper rounded-xl overflow-hidden bg-[#181918] border border-white/5 shadow-md">
        <!-- Banner Image Area (Pluggable: User will add custom images later) -->
        <div class="relative w-full aspect-[21/9] sm:aspect-[24/9] max-h-[260px] bg-gradient-to-br from-[#0c2419] via-[#0f1713] to-[#080d0a] overflow-hidden flex items-center justify-between p-4 sm:p-6">
          <!-- Background Glow Effect -->
          <div
            class="absolute inset-0 pointer-events-none opacity-40"
            :style="{ background: `radial-gradient(circle at 75% 50%, ${bonus.accentColor || '#10b981'}44 0%, transparent 65%)` }"
          />

          <!-- Actual Image with Graceful Stylized Fallback -->
          <img
            v-if="bonus.bannerImage && !bannerImageError"
            :src="bonus.bannerImage"
            :alt="bonus.title"
            class="absolute inset-0 w-full h-full object-cover z-0"
            @error="bannerImageError = true"
          />

          <!-- Stylized Overlay Banner Content (renders gracefully even without custom image) -->
          <div class="relative z-10 flex flex-col justify-between h-full max-w-[70%]">
            <span class="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30 w-fit backdrop-blur-sm">
              <Sparkles class="h-3 w-3" />
              BYBET PROMOTION
            </span>

            <div class="my-auto py-1">
              <h2 class="text-lg sm:text-2xl font-black text-white drop-shadow-md tracking-tight leading-tight">
                {{ bonus.title }}
              </h2>
              <p class="text-xs sm:text-sm text-emerald-300/90 font-medium drop-shadow mt-0.5 line-clamp-1">
                {{ bonus.subtitle }}
              </p>
            </div>

            <!-- Payment Methods Pill Strip -->
            <div class="flex items-center gap-1.5">
              <span class="px-2 py-0.5 rounded-full bg-black/60 border border-white/10 text-[10px] font-bold text-white shadow">
                <span class="text-[#22c55e] mr-1">●</span>Maya
              </span>
              <span class="px-2 py-0.5 rounded-full bg-black/60 border border-white/10 text-[10px] font-bold text-white shadow">
                <span class="text-[#3b82f6] mr-1">●</span>GCash
              </span>
            </div>
          </div>

          <!-- Right Icon Graphic -->
          <div class="relative z-10 h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-center shadow-2xl backdrop-blur-sm">
            <component
              :is="getCategoryIcon(bonus.iconType)"
              class="h-9 w-9 sm:h-11 sm:w-11 drop-shadow"
              :style="{ color: bonus.accentColor || '#10b981' }"
            />
          </div>
        </div>

        <!-- Official Responsible Gaming Strip (Matching Reference Designs) -->
        <div class="responsible-gaming-bar bg-[#0d0e0d] border-t border-white/5 px-3 py-2 flex flex-wrap items-center justify-between gap-2 text-[10px] sm:text-[11px] text-[#8e9491]">
          <!-- Left: Regulatory Badges -->
          <div class="flex items-center gap-2">
            <!-- PAGCOR Logo -->
            <img
              src="/responsible-gaming/pagcor.png"
              alt="PAGCOR"
              class="h-4 sm:h-5 object-contain"
              loading="lazy"
            />

            <!-- 21+ Badge -->
            <span class="inline-flex items-center justify-center h-4 w-4 rounded-full border border-amber-500/80 text-amber-400 font-black text-[8px] leading-none shrink-0">
              21+
            </span>

            <span class="font-bold text-white/90 hidden sm:inline">
              KEEP IT FUN. GAMING CAN BE ADDICTIVE.
            </span>
          </div>

          <!-- Center: Responsible Gaming Support Contact -->
          <div class="flex items-center gap-1 text-[9px] sm:text-[10px] text-[#9ca3af]">
            <span>ResponsibleGaming@pagcor.ph</span>
            <span class="hidden md:inline">| Hotline (02) 8521-0299</span>
          </div>

          <!-- Right: ByBet Mini Logo -->
          <div class="flex items-center gap-1 shrink-0">
            <img
              src="/brand/bybet-logo.png"
              alt="ByBet"
              class="h-3.5 object-contain opacity-80"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <!-- 2. Promotion Title & Period Section -->
      <section class="rounded-xl bg-[#171817] border border-white/5 p-3.5 sm:p-4 shadow-sm">
        <div class="flex items-start gap-3">
          <!-- Left Icon Badge -->
          <div
            class="h-10 w-10 sm:h-12 sm:w-12 rounded-xl flex items-center justify-center shrink-0 border border-white/10 shadow-inner"
            :style="{ background: `linear-gradient(135deg, ${bonus.accentColor || '#10b981'}33, #1c1d1c)` }"
          >
            <component
              :is="getCategoryIcon(bonus.iconType)"
              class="h-5 w-5 sm:h-6 sm:w-6"
              :style="{ color: bonus.accentColor || '#10b981' }"
            />
          </div>

          <!-- Title & Subtitle -->
          <div class="min-w-0 flex-1">
            <h1 class="text-base sm:text-lg font-black text-white uppercase tracking-tight leading-snug">
              {{ bonus.title }}
            </h1>
            <p class="text-xs sm:text-[13px] text-[#9ca3af] font-medium uppercase mt-0.5">
              {{ bonus.subtitle }}
            </p>
          </div>
        </div>

        <!-- Period Row -->
        <div class="mt-3 pt-2.5 border-t border-white/5 flex items-center gap-2 text-xs text-[#8e9491]">
          <Clock class="h-3.5 w-3.5 text-emerald-400 shrink-0" />
          <span class="font-mono text-[11px] sm:text-xs">
            Period: {{ bonus.period }}
          </span>
        </div>
      </section>

      <!-- 3. Requirements Checklist Box (e.g. Spins Bring Spins) -->
      <section
        v-if="bonus.requirements && bonus.requirements.items?.length"
        class="rounded-xl bg-[#171817] border border-white/5 p-3.5 sm:p-4 shadow-sm"
      >
        <div class="flex items-center justify-between gap-2 mb-2.5">
          <span class="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
            <CheckCircle2 class="h-3.5 w-3.5 text-emerald-400" />
            Daily Requirements
          </span>

          <button
            type="button"
            class="text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors inline-flex items-center gap-0.5 cursor-pointer"
            @click="handleProgressClick"
          >
            View Progress
            <ChevronRight class="h-3.5 w-3.5" />
          </button>
        </div>

        <div class="space-y-1.5">
          <div
            v-for="(req, idx) in bonus.requirements.items"
            :key="idx"
            class="flex items-center gap-2.5 rounded-lg bg-[#202120] px-3 py-2 text-xs text-white/90 border border-white/5"
          >
            <div class="h-4 w-4 rounded-full border border-emerald-500/40 flex items-center justify-center shrink-0 bg-emerald-950/40">
              <Check v-if="req.completed" class="h-3 w-3 text-emerald-400" />
              <span v-else class="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
            <span class="font-medium">{{ req.text }}</span>
          </div>
        </div>
      </section>

      <!-- 4. Qualifications Table Box (e.g. Registration Platform, Total Deposits) -->
      <section
        v-if="bonus.qualifications && bonus.qualifications.length"
        class="rounded-xl bg-[#171817] border border-white/5 overflow-hidden shadow-sm"
      >
        <div class="divide-y divide-white/5">
          <div
            v-for="(qual, idx) in bonus.qualifications"
            :key="idx"
            class="grid grid-cols-1 sm:grid-cols-3 p-3 sm:px-4 text-xs"
          >
            <span class="text-emerald-400 font-semibold mb-0.5 sm:mb-0">
              {{ qual.label }}
            </span>
            <span class="text-white/90 sm:col-span-2 font-medium">
              {{ qual.value }}
            </span>
          </div>
        </div>
      </section>

      <!-- 5. Event Content Section -->
      <section class="rounded-xl bg-[#171817] border border-white/5 p-3.5 sm:p-4 shadow-sm space-y-3.5">
        <!-- Event Content Header & Badge -->
        <div class="flex flex-wrap items-center justify-between gap-2">
          <h2 class="text-sm sm:text-base font-bold text-white flex items-center gap-1.5">
            <span class="h-2 w-2 rounded-full bg-emerald-400" />
            Event Content
          </h2>

          <span
            v-if="bonus.eventContent.badge"
            class="px-2.5 py-0.5 rounded-full bg-[#036242] text-white text-[11px] font-bold shadow-sm"
          >
            {{ bonus.eventContent.badge }}
          </span>
        </div>

        <!-- Description -->
        <p class="text-xs sm:text-[13px] text-[#cbd5e1] leading-relaxed">
          {{ bonus.eventContent.description }}
        </p>

        <!-- Method Card (e.g. Deposit Method for Promotion Participation) -->
        <div
          v-if="bonus.eventContent.methodCard"
          class="rounded-lg bg-[#202120] border border-white/5 p-3 text-xs"
        >
          <div class="text-[#8e9491] font-semibold text-[11px] uppercase tracking-wider mb-1">
            {{ bonus.eventContent.methodCard.title }}
          </div>
          <div class="text-white font-medium">
            {{ bonus.eventContent.methodCard.content }}
          </div>
        </div>

        <!-- Tables (Exact Layouts from Screenshots) -->
        <div
          v-if="bonus.eventContent.tables && bonus.eventContent.tables.length"
          class="space-y-4"
        >
          <div
            v-for="(tbl, tIdx) in bonus.eventContent.tables"
            :key="tIdx"
            class="table-container rounded-lg overflow-hidden border border-emerald-600/30 bg-[#141514] shadow-sm"
          >
            <!-- Optional Table Title Bar -->
            <div
              v-if="tbl.headerTitle || tbl.subHeaderTitle"
              class="bg-gradient-to-r from-[#0a3826] to-[#042418] px-3 py-2 flex items-center justify-between border-b border-emerald-600/30 text-xs font-bold text-emerald-300"
            >
              <span>{{ tbl.headerTitle }}</span>
              <span v-if="tbl.subHeaderTitle" class="text-white/80 font-medium">
                {{ tbl.subHeaderTitle }}
              </span>
            </div>

            <!-- Table -->
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs">
                <!-- Columns Header -->
                <thead class="bg-[#1b2520] text-emerald-400 font-semibold border-b border-emerald-600/20">
                  <tr>
                    <th
                      v-for="col in tbl.columns"
                      :key="col.key"
                      class="px-3 py-2.5 font-bold tracking-tight whitespace-nowrap"
                    >
                      <span class="inline-flex items-center gap-1">
                        <span v-if="col.icon">{{ col.icon }}</span>
                        {{ col.label }}
                      </span>
                    </th>
                  </tr>
                </thead>

                <!-- Rows -->
                <tbody class="divide-y divide-white/5 text-white/90">
                  <tr
                    v-for="(row, rIdx) in tbl.rows"
                    :key="rIdx"
                    class="hover:bg-white/[0.02] transition-colors"
                  >
                    <td
                      v-for="col in tbl.columns"
                      :key="col.key"
                      class="px-3 py-2 whitespace-nowrap font-medium"
                    >
                      {{ row[col.key] }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <!-- Footnote if present -->
            <div
              v-if="tbl.footnote"
              class="px-3 py-1.5 bg-[#0f1110] border-t border-white/5 text-[11px] text-[#8e9491] italic"
            >
              {{ tbl.footnote }}
            </div>
          </div>
        </div>

        <!-- Event Bullets (e.g. Spins Bring Spins mission rules) -->
        <ul
          v-if="bonus.eventContent.bullets && bonus.eventContent.bullets.length"
          class="space-y-1.5 text-xs text-[#9ca3af] list-disc list-inside pt-1"
        >
          <li
            v-for="(bullet, bIdx) in bonus.eventContent.bullets"
            :key="bIdx"
            class="leading-relaxed"
          >
            {{ bullet }}
          </li>
        </ul>
      </section>

      <!-- 6. Promotion Terms & Conditions -->
      <section
        v-if="bonus.promotionTerms"
        class="rounded-xl bg-[#171817] border border-white/5 p-3.5 sm:p-4 shadow-sm space-y-2.5"
      >
        <h2 class="text-sm font-bold text-white flex items-center gap-1.5">
          <Info class="h-4 w-4 text-emerald-400" />
          Promotion Terms & Conditions
        </h2>

        <!-- Array format (e.g. 1. Bind phone number, 2. Bind email...) -->
        <div v-if="Array.isArray(bonus.promotionTerms)" class="space-y-1 text-xs text-[#cbd5e1]">
          <div
            v-for="(term, tIdx) in bonus.promotionTerms"
            :key="tIdx"
            class="leading-relaxed"
          >
            {{ term }}
          </div>
        </div>

        <!-- String format -->
        <p v-else class="text-xs text-[#cbd5e1] leading-relaxed">
          {{ bonus.promotionTerms }}
        </p>
      </section>

      <!-- 7. General Rules & Disclaimer -->
      <section class="rounded-xl bg-[#171817] border border-white/5 p-3.5 sm:p-4 shadow-sm space-y-2.5">
        <h2 class="text-sm font-bold text-white flex items-center gap-1.5">
          <ShieldCheck class="h-4 w-4 text-emerald-400" />
          Rules
        </h2>

        <ul class="space-y-1.5 text-xs text-[#9ca3af] list-disc list-inside">
          <li
            v-for="(rule, rIdx) in bonus.rules"
            :key="rIdx"
            class="leading-relaxed"
          >
            {{ rule }}
          </li>
        </ul>

        <!-- Underlined Link to Terms and Conditions (Present in all 3 screenshots) -->
        <div class="pt-2">
          <NuxtLink
            to="/explore/legal/bonus-terms"
            class="text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline underline-offset-4 inline-flex items-center gap-1"
          >
            Terms and Conditions for Promotion
            <ExternalLink class="h-3 w-3" />
          </NuxtLink>
        </div>
      </section>

      <!-- 8. Withdrawal Terms (When present, e.g. Your Deposit. Your Reward.) -->
      <section
        v-if="bonus.withdrawalTerms"
        class="rounded-xl bg-[#171817] border border-white/5 p-3.5 sm:p-4 shadow-sm space-y-2"
      >
        <h2 class="text-sm font-bold text-white flex items-center gap-1.5">
          <Wallet class="h-4 w-4 text-emerald-400" />
          Withdrawal Terms
        </h2>
        <p class="text-xs text-[#cbd5e1] leading-relaxed">
          {{ bonus.withdrawalTerms }}
        </p>
      </section>
    </div>

    <!-- 9. Sticky Bottom Action Bar (e.g. "Join Now") -->
    <div
      v-if="bonus.hasJoinButton"
      class="fixed bottom-0 left-0 right-0 z-30 p-3 bg-[#121312]/95 backdrop-blur-md border-t border-white/10 flex items-center justify-center max-w-7xl mx-auto shadow-2xl"
    >
      <button
        type="button"
        class="w-full sm:max-w-md py-3 px-6 rounded-xl bg-gradient-to-r from-[#00c269] to-[#036242] hover:from-[#05d977] hover:to-[#047750] text-white font-extrabold text-sm sm:text-base tracking-wide shadow-lg hover:shadow-emerald-500/20 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
        @click="handleJoinNow"
      >
        <span>Join Now</span>
        <ChevronRight class="h-4 w-4" />
      </button>
    </div>

    <!-- Reminder Modal -->
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
.table-container table {
  border-collapse: separate;
  border-spacing: 0;
}
</style>
