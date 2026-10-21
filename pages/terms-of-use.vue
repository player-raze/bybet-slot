<script setup lang="ts">
import LegalPageShell from '~/components/legal/LegalPageShell.vue'

useSeoMeta({
  title: 'Terms of Use & Service Agreement | ByBet',
  description: 'ByBet official terms of use. Account eligibility, 21+ policy, wagering terms, payment compliance, and PAGCOR player protection regulations.',
  ogTitle: 'Terms of Use & Service Agreement | ByBet',
  ogDescription: 'Read the official ByBet terms and conditions. Fair play standards, legal age requirements, and betting rules.',
})

const sections = [
  { id: 'sec-1', title: 'Introduction & Acceptance' },
  { id: 'sec-2', title: 'Player Eligibility & 21+ Rule' },
  { id: 'sec-3', title: 'Account Creation & Verification' },
  { id: 'sec-4', title: 'Deposits & Wagering Rules' },
  { id: 'sec-5', title: 'Withdrawals & AML Standards' },
  { id: 'sec-6', title: 'Prohibited Conduct & Fair Play' },
  { id: 'sec-7', title: 'Intellectual Property' },
  { id: 'sec-8', title: 'Limitation of Liability' },
  { id: 'sec-9', title: 'Account Suspension & Closure' },
  { id: 'sec-10', title: 'Governing Law & Jurisdiction' },
]
</script>

<template>
  <LegalPageShell
    title="Terms of Use"
    subtitle="Please review these terms and conditions carefully before opening an account or placing wagers."
    last-updated="October 2026"
    compliance-badge="PAGCOR Certified • Official Legal Terms"
    :sections="sections"
  >
    <!-- Section 1 -->
    <section id="sec-1" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">1.0</span>
        Introduction & Acceptance of Agreement
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        These Terms of Use ("Terms", "Agreement") constitute a legally binding agreement between you ("User", "Player") and ByBet ("we", "us", "our"). By registering an account, depositing funds, or using our online casino, live dealer, and sports betting platform, you explicitly affirm that you have read, understood, and agreed to be bound by these Terms and our Privacy Policy.
      </p>
    </section>

    <!-- Section 2 -->
    <section id="sec-2" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">2.0</span>
        Player Eligibility & Strict 21+ Policy
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        Under the rules and regulations of the Philippine Amusement and Gaming Corporation (PAGCOR), real-money gaming is strictly prohibited for individuals under twenty-one (21) years of age. You must be at least 21 years old and legally competent to enter into binding agreements. Furthermore, government officials, law enforcement personnel, and members of the Armed Forces of the Philippines are legally prohibited from participating.
      </p>
    </section>

    <!-- Section 3 -->
    <section id="sec-3" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">3.0</span>
        Account Registration, Verification (KYC) & Security
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        Each individual user is permitted to hold strictly ONE (1) active account on ByBet. Creating duplicate accounts, using false identities, or registering on behalf of someone else will result in immediate termination of all associated profiles. Players must submit valid government identification for Know Your Customer (KYC) verification before processing large transactions or initial withdrawals.
      </p>
    </section>

    <!-- Section 4 -->
    <section id="sec-4" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">4.0</span>
        Deposits, Wagers & Wagering Requirements
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        Funds deposited must originate from verified payment methods (GCash, Maya, Bank Transfer) bearing the identical registered name of the account holder. All deposited balances require a minimum 1x turnover rollover before becoming eligible for withdrawal. Wagers once placed and confirmed by our system cannot be cancelled or retracted by the player.
      </p>
    </section>

    <!-- Section 5 -->
    <section id="sec-5" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">5.0</span>
        Withdrawals & Anti-Money Laundering (AML) Compliance
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        ByBet adheres strictly to the Anti-Money Laundering Act of 2001 (Republic Act No. 9160) and its implementing rules. Withdrawals are processed solely to bank accounts or e-wallets held in the verified player’s name. We reserve the right to audit gaming histories and withhold payment if suspicious laundering activity, chip dumping, or identity theft is detected.
      </p>
    </section>

    <!-- Section 6 -->
    <section id="sec-6" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">6.0</span>
        Prohibited Conduct & Fair Play Standards
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        The following practices are expressly forbidden on ByBet: automated bot betting, syndicate wagering, latency exploitation (courtsiding), bonus abuse through opposite-outcome hedging, and taking unfair advantage of system glitches. Violating these provisions will trigger account forfeiture and voiding of ill-gotten profits.
      </p>
    </section>

    <!-- Section 7 -->
    <section id="sec-7" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">7.0</span>
        Intellectual Property & Trademarks
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        All software, branding, logos, graphics, and interface assets presented across ByBet are the exclusive intellectual property of Global Play Hub Innovations Corp. and its licensed partners. You are granted a limited, personal, non-transferable license to access the services strictly for private entertainment.
      </p>
    </section>

    <!-- Section 8 -->
    <section id="sec-8" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">8.0</span>
        Limitation of Liability & System Disclaimers
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        ByBet provides games and odds "as is". While we maintain 99.9% platform availability, we are not liable for telecommunication outages, device malfunctions, or internet latency impacting bet submission. In the rare event of a server disruption during an active game round, our audited database logs are final and will restore bet stakes safely.
      </p>
    </section>

    <!-- Section 9 -->
    <section id="sec-9" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">9.0</span>
        Account Suspension, Self-Exclusion & Closure
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        Players may close their accounts or request responsible gaming self-exclusion at any time by contacting our 24/7 Customer Support. ByBet reserves the right to suspend or terminate accounts in breach of these Terms, pending administrative or regulatory review.
      </p>
    </section>

    <!-- Section 10 -->
    <section id="sec-10" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">10.0</span>
        Governing Law & Dispute Resolution
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        These Terms are governed by and construed in accordance with the laws of the Republic of the Philippines and the regulatory authority of the Philippine Amusement and Gaming Corporation (PAGCOR). Any unresolved disputes shall be submitted to the exclusive jurisdiction of the competent courts in the Philippines.
      </p>
    </section>
  </LegalPageShell>
</template>

