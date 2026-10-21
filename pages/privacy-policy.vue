<script setup lang="ts">
import LegalPageShell from '~/components/legal/LegalPageShell.vue'

useSeoMeta({
  title: 'Privacy Policy & Data Protection (RA 10173) | ByBet',
  description: 'ByBet official privacy policy. Learn how player personal data, payment information, and betting logs are safeguarded in compliance with RA 10173.',
  ogTitle: 'Privacy Policy & Data Protection (RA 10173) | ByBet',
  ogDescription: 'Your privacy matters. Discover how ByBet protects and processes your personal data securely.',
})

const sections = [
  { id: 'sec-1', title: 'Data Controller & Overview' },
  { id: 'sec-2', title: 'Information We Collect' },
  { id: 'sec-3', title: 'Purposes of Data Processing' },
  { id: 'sec-4', title: 'Data Security & Storage' },
  { id: 'sec-5', title: 'Third-Party Disclosures' },
  { id: 'sec-6', title: 'Cookie & Tracking Technologies' },
  { id: 'sec-7', title: 'Data Retention Timelines' },
  { id: 'sec-8', title: 'Your Rights as a Data Subject' },
  { id: 'sec-9', title: 'Data Protection Officer (DPO)' },
]
</script>

<template>
  <LegalPageShell
    title="Privacy Policy"
    subtitle="How ByBet collects, utilizes, safeguards, and respects your personal data under the Data Privacy Act of 2012."
    last-updated="October 2026"
    compliance-badge="RA 10173 (DPA 2012) • DPO Registered"
    :sections="sections"
  >
    <!-- Section 1 -->
    <section id="sec-1" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">1.0</span>
        Data Controller & Overview
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        ByBet, operated by Global Play Hub Innovations Corp., acts as the Personal Information Controller (PIC) responsible for the collection and processing of your personal data under the Philippine Data Privacy Act of 2012 (Republic Act No. 10173) and National Privacy Commission (NPC) regulations. We are committed to safeguarding player confidentiality with enterprise-grade standards.
      </p>
    </section>

    <!-- Section 2 -->
    <section id="sec-2" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">2.0</span>
        Personal Information We Collect
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        We collect only the minimum information necessary to provide safe and compliant gaming services:
      </p>
      <ul class="list-disc list-inside text-xs text-[#9eaea5] space-y-1 pl-1">
        <li><strong>Identity Information:</strong> Full legal name, date of birth, nationality, and government ID scans (Passport, Driver’s License, UMID) for KYC verification.</li>
        <li><strong>Contact Information:</strong> Active Philippine mobile phone number, email address, and residential address.</li>
        <li><strong>Financial & Payment Data:</strong> GCash/Maya phone numbers, bank account numbers, transaction reference IDs, and payment verification receipts.</li>
        <li><strong>Technical & Usage Data:</strong> IP address, device fingerprints, browser version, operating system, and geographic location logs.</li>
        <li><strong>Gaming History:</strong> Betting slips, game round outcomes, livestream chat messages, and deposit/withdrawal timestamps.</li>
      </ul>
    </section>

    <!-- Section 3 -->
    <section id="sec-3" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">3.0</span>
        Purposes & Legal Grounds for Processing
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        Your data is processed strictly for legitimate contractual and regulatory objectives:
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#9eaea5]">
        <div class="p-3 rounded-lg bg-[#1a1a1a] border border-white/5">
          <strong class="text-[#32d49a] block mb-1">Regulatory & Legal Compliance</strong>
          Fulfilling mandatory KYC age verification (21+ rule) and anti-money laundering reporting required by PAGCOR and the AMLC.
        </div>
        <div class="p-3 rounded-lg bg-[#1a1a1a] border border-white/5">
          <strong class="text-amber-400 block mb-1">Service Execution</strong>
          Authenticating login credentials, processing automated deposits/payouts, and calculating accurate sports settlements.
        </div>
        <div class="p-3 rounded-lg bg-[#1a1a1a] border border-white/5">
          <strong class="text-blue-400 block mb-1">Fraud Detection & Security</strong>
          Detecting automated bot wagering, latency exploitation, multi-accounting, and cyber threats.
        </div>
        <div class="p-3 rounded-lg bg-[#1a1a1a] border border-white/5">
          <strong class="text-emerald-400 block mb-1">Customer Experience</strong>
          Providing 24/7 personalized live chat support and delivering opt-in promotional rewards.
        </div>
      </div>
    </section>

    <!-- Section 4 -->
    <section id="sec-4" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">4.0</span>
        Data Security & Storage
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        All transmission of sensitive data is protected using 256-bit Transport Layer Security (TLS/SSL) encryption. Player databases are hosted in ISO/IEC 27001-certified data centers equipped with multi-layer firewall intrusion detection, strict least-privilege role access, and continuous security audits.
      </p>
    </section>

    <!-- Section 5 -->
    <section id="sec-5" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">5.0</span>
        Third-Party Disclosures
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        We never sell or rent your personal information to third-party marketers. Data is only shared with trusted service providers under strict data sharing agreements: payment gateways (for deposit/withdrawal settlement), licensed game studios (for game launching), and statutory regulatory bodies (PAGCOR and law enforcement) when legally mandated.
      </p>
    </section>

    <!-- Section 6 -->
    <section id="sec-6" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">6.0</span>
        Cookies & Analytics
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        ByBet utilizes session cookies and essential local storage tokens to preserve your active login session, language preferences, and odds display format. Analytics cookies are aggregated and anonymized to optimize page loading speeds and interface usability.
      </p>
    </section>

    <!-- Section 7 -->
    <section id="sec-7" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">7.0</span>
        Data Retention Timelines
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        In accordance with the Anti-Money Laundering Act (AMLA), customer identification records, wagering logs, and financial transaction histories must be retained for a minimum statutory period of five (5) years following account termination. After this timeline, records are securely expunged or anonymized.
      </p>
    </section>

    <!-- Section 8 -->
    <section id="sec-8" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">8.0</span>
        Your Rights as a Data Subject
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed">
        Under RA 10173, you hold the following rights: the right to be informed, the right to access your stored personal information, the right to rectify inaccurate data, the right to object to automated processing, and the right to lodge a formal complaint with the National Privacy Commission (NPC).
      </p>
    </section>

    <!-- Section 9 -->
    <section id="sec-9" class="rounded-xl bg-[#141414] p-5 border border-white/5 space-y-2">
      <h2 class="text-base font-bold text-white flex items-center gap-2">
        <span class="text-xs font-mono font-bold text-[#32d49a] bg-[#036242]/30 px-2 py-0.5 rounded">9.0</span>
        Data Protection Officer (DPO) Contact
      </h2>
      <p class="text-xs sm:text-sm text-[#d1d5db] leading-relaxed mb-3">
        For inquiries regarding this Privacy Policy or to exercise your data subject rights, please reach out to our dedicated Data Protection Officer:
      </p>
      <div class="p-3.5 rounded-lg bg-[#1a1a1a] border border-white/5 text-xs text-[#9eaea5] font-mono space-y-1">
        <div>Email: dpo@bybet.com / privacy@bybet.ph</div>
        <div>Attention: Data Protection Compliance Office</div>
        <div>Address: Bonifacio Global City, Taguig, Metro Manila, Philippines</div>
      </div>
    </section>
  </LegalPageShell>
</template>

