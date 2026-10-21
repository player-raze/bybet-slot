<script setup lang="ts">
import {
  Handshake,
  DollarSign,
  TrendingUp,
  Users,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Headphones,
  Calendar,
  Layers,
  ChevronLeft,
} from 'lucide-vue-next'

const router = useRouter()
const { showDemoMessage } = useDemoInteraction()

useSeoMeta({
  title: 'ByBet Affiliate Program — Earn up to 50% Revenue Share | ByBet Partners',
  description: 'Join the highest-paying gaming affiliate program in the Philippines. Zero negative carryover, weekly payouts via GCash & Bank, and dedicated manager support.',
  ogTitle: 'ByBet Affiliate Program — Earn up to 50% Revenue Share | ByBet Partners',
  ogDescription: 'Monetize your sports and casino traffic with ByBet Partners. Up to 50% RevShare and fast weekly settlements.',
})

const handleBack = (): void => {
  if (import.meta.client && window.history.length > 1) {
    router.back()
  } else {
    router.push('/explore/account/me')
  }
}

// Commission Estimator State
const monthlyRevenue = ref<number>(800000)
const activePlayers = ref<number>(35)

const commissionRate = computed(() => {
  if (monthlyRevenue.value >= 3000000) return 0.50
  if (monthlyRevenue.value >= 1500000) return 0.45
  if (monthlyRevenue.value >= 500000) return 0.38
  return 0.30
})

const estimatedMonthlyEarnings = computed(() => {
  return Math.round(monthlyRevenue.value * commissionRate.value)
})

const tiers = [
  { level: 'Tier 1', revenue: '₱100k – ₱500k', rate: '30%', minPlayers: '5 Active' },
  { level: 'Tier 2', revenue: '₱500k – ₱1.5M', rate: '38%', minPlayers: '15 Active' },
  { level: 'Tier 3', revenue: '₱1.5M – ₱3M', rate: '45%', minPlayers: '30 Active' },
  { level: 'VIP Partner', revenue: '₱3M+', rate: '50%', minPlayers: '50+ Active' },
]

const steps = [
  {
    step: 1,
    title: 'Register Free in 2 Minutes',
    desc: 'Submit your basic contact details and traffic channels. Our affiliate management team approves applications in under 24 hours.',
  },
  {
    step: 2,
    title: 'Promote With High-Converting Tools',
    desc: 'Access custom affiliate links, tailored landing pages, animated banners, and high-converting marketing creative assets.',
  },
  {
    step: 3,
    title: 'Get Paid Every Monday',
    desc: 'Enjoy reliable weekly commission disbursements straight to your verified GCash, Maya, or local Philippine bank account with zero fees.',
  },
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'No Negative Carryover',
    desc: 'If your players have a winning month, your negative balance is reset to zero on the 1st of every month.',
  },
  {
    icon: Calendar,
    title: 'Weekly Automated Settlements',
    desc: 'No waiting 30 days. Receive your affiliate earnings every single Monday directly to your wallet.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Account Manager',
    desc: 'Get personal 1-on-1 strategy assistance via Telegram, WhatsApp, or Skype from gaming marketing veterans.',
  },
  {
    icon: Layers,
    title: 'Multi-Tier Sub-Affiliate Program',
    desc: 'Earn an additional 5% lifetime override commission on every partner you invite to the ByBet affiliate network.',
  },
]
</script>

<template>
  <div class="affiliate-page max-w-4xl mx-auto pb-16 px-2 sm:px-4 text-white">
    <!-- Reusable Top SEO Header Bar -->
    <SeoHeader
      title="ByBet Affiliate Partnership Program"
      description="Join the official ByBet Affiliate Program. Earn up to 50% revenue share, instant CPA commissions, and dedicated VIP affiliate account managers."
      back-to="/explore/account/me"
      custom-class="mb-4"
    >
      <template #title>
        <div>
          <span class="text-sm sm:text-base font-bold text-white tracking-tight flex items-center gap-1.5">
            <Handshake class="h-4 w-4 text-[#32d49a]" />
            ByBet Affiliate Partnership Program
          </span>
          <p class="text-[11px] text-[#9eaea5] hidden sm:block font-normal">
            Highest revenue share and weekly payouts in the gaming sector
          </p>
        </div>
      </template>
      <template #right>
        <div class="flex items-center gap-2">
          <span class="text-base select-none">🇵🇭</span>
          <button
            type="button"
            class="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#32d49a] text-black hover:bg-[#28b884] transition-colors cursor-pointer"
            @click="showDemoMessage('Opening Affiliate Application Form...')"
          >
            Join as Partner
          </button>
        </div>
      </template>
    </SeoHeader>

    <!-- Hero Card -->
    <div class="rounded-2xl bg-gradient-to-br from-[#036242]/40 via-[#141414] to-[#141414] p-6 sm:p-8 mb-6 border border-[#32d49a]/20 shadow-2xl">
      <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#036242] text-[#32d49a] text-xs font-bold mb-3">
        <Sparkles class="h-3.5 w-3.5" />
        Up to 50% Lifetime RevShare
      </div>
      <h2 class="text-2xl sm:text-3xl font-extrabold text-white leading-tight max-w-xl">
        Partner with the Fastest-Growing Gaming Brand
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] mt-2 max-w-xl leading-relaxed">
        Turn your traffic, sports fan communities, and social followings into steady weekly income with ByBet’s market-leading commission structure.
      </p>

      <div class="flex flex-wrap items-center gap-4 mt-6">
        <button
          type="button"
          class="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#32d49a] text-black font-extrabold text-xs sm:text-sm hover:bg-[#28b884] transition-all shadow-lg cursor-pointer transform hover:-translate-y-0.5"
          @click="showDemoMessage('Affiliate Portal Registration Modal')"
        >
          <span>Become a Partner Today</span>
          <ArrowRight class="h-4 w-4" />
        </button>
        <span class="text-xs text-[#9eaea5] font-medium">100% Free to Join • Instant Approval</span>
      </div>
    </div>

    <!-- 3-Step Process -->
    <div class="mb-8">
      <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-3">
        How the Partnership Works
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div
          v-for="s in steps"
          :key="s.step"
          class="rounded-xl bg-[#141414] p-4 border border-white/5 flex flex-col justify-between"
        >
          <div>
            <div class="h-8 w-8 rounded-lg bg-[#036242] text-white font-extrabold text-xs flex items-center justify-center mb-2 shadow">
              {{ s.step }}
            </div>
            <h4 class="text-xs font-bold text-white mb-1">{{ s.title }}</h4>
            <p class="text-[11px] text-[#9eaea5] leading-relaxed">{{ s.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Interactive Commission Calculator -->
    <div class="rounded-xl bg-[#141414] p-5 border border-white/5 mb-8">
      <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-2">
        <DollarSign class="h-4 w-4 text-[#32d49a]" />
        Interactive Earnings Estimator
      </h3>
      <p class="text-xs text-[#9eaea5] mb-5">
        Adjust the sliders below to calculate your estimated weekly and monthly commission potential:
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div class="space-y-4">
          <div>
            <div class="flex items-center justify-between text-xs mb-1">
              <span class="text-[#d1d5db]">Monthly Net Gaming Revenue (NGR):</span>
              <span class="font-mono font-bold text-[#32d49a]">₱{{ monthlyRevenue.toLocaleString() }}</span>
            </div>
            <input
              v-model.number="monthlyRevenue"
              type="range"
              min="100000"
              max="5000000"
              step="50000"
              class="w-full accent-[#32d49a] cursor-pointer"
            >
          </div>

          <div>
            <div class="flex items-center justify-between text-xs mb-1">
              <span class="text-[#d1d5db]">Active Monthly Players:</span>
              <span class="font-mono font-bold text-white">{{ activePlayers }} players</span>
            </div>
            <input
              v-model.number="activePlayers"
              type="range"
              min="5"
              max="150"
              step="5"
              class="w-full accent-[#32d49a] cursor-pointer"
            >
          </div>
        </div>

        <!-- Calculator Result Card -->
        <div class="rounded-xl bg-[#1c1c1c] p-5 border border-white/10 flex flex-col items-center text-center">
          <span class="text-[10px] text-[#7a807d] uppercase font-bold tracking-wider mb-1">Estimated Monthly Commission</span>
          <div class="text-2xl sm:text-3xl font-mono font-extrabold text-[#32d49a] mb-1">
            ₱{{ estimatedMonthlyEarnings.toLocaleString() }}
          </div>
          <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#036242]/40 text-[#32d49a] font-mono">
            {{ (commissionRate * 100).toFixed(0) }}% Commission Tier
          </span>
          <p class="text-[10px] text-[#7a807d] mt-2">
            Estimated weekly payout: ~₱{{ Math.round(estimatedMonthlyEarnings / 4).toLocaleString() }}
          </p>
        </div>
      </div>
    </div>

    <!-- Commission Tiers Table -->
    <div class="rounded-xl bg-[#141414] p-5 border border-white/5 mb-8 overflow-hidden">
      <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-3">
        Commission Tiers & Requirements
      </h3>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="border-b border-white/10 text-[#7a807d] uppercase tracking-wider text-[11px]">
              <th class="py-2.5 pr-4 font-bold">Partner Tier</th>
              <th class="py-2.5 px-4 font-bold">Monthly Net Revenue</th>
              <th class="py-2.5 px-4 font-bold">Min Active Players</th>
              <th class="py-2.5 pl-4 font-bold text-[#32d49a]">Revenue Share</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-white/5 font-mono text-[11px] sm:text-xs">
            <tr v-for="t in tiers" :key="t.level" class="hover:bg-white/[0.02]">
              <td class="py-3 pr-4 font-bold text-white whitespace-nowrap">{{ t.level }}</td>
              <td class="py-3 px-4 text-[#d1d5db] font-sans">{{ t.revenue }}</td>
              <td class="py-3 px-4 text-[#d1d5db] font-sans">{{ t.minPlayers }}</td>
              <td class="py-3 pl-4 font-bold text-[#32d49a]">{{ t.rate }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Key Benefits Grid -->
    <div>
      <h3 class="text-sm font-bold text-white uppercase tracking-wider mb-3">
        Why Partners Choose ByBet
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div
          v-for="b in benefits"
          :key="b.title"
          class="rounded-xl bg-[#141414] p-4 border border-white/5 flex gap-3.5 items-start"
        >
          <div class="h-9 w-9 rounded-lg bg-[#036242]/30 text-[#32d49a] flex items-center justify-center shrink-0">
            <component :is="b.icon" class="h-4 w-4" />
          </div>
          <div>
            <h4 class="text-xs font-bold text-white mb-1">{{ b.title }}</h4>
            <p class="text-[11px] text-[#9eaea5] leading-relaxed">{{ b.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

