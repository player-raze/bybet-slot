<script setup lang="ts">
import { ChevronLeft } from 'lucide-vue-next'
import TransactionTutorialVisual from '~/components/tutorial/TransactionTutorialVisual.vue'

type TransactionTutorialMode = 'deposit' | 'withdraw'
type TransactionVisualVariant =
  | 'deposit-method'
  | 'deposit-amount'
  | 'deposit-transfer'
  | 'deposit-proof'
  | 'deposit-verification'
  | 'withdraw-schedule'
  | 'withdraw-identity'
  | 'withdraw-review'
  | 'withdraw-balance'
  | 'withdraw-complete'

interface TutorialStep {
  title: string
  description: string
  visual: TransactionVisualVariant
  imageDark?: string
  imageLight?: string
}

const props = defineProps<{
  mode: TransactionTutorialMode
}>()

const depositSteps: TutorialStep[] = [
  {
    title: 'Deposit Method',
    description: 'Select "Bank Direct Scan"',
    visual: 'deposit-method',
    imageDark: '/tutorial/transactions/visual-dark.webp',
    imageLight: '/tutorial/transactions/visual-light.webp',
  },
  {
    title: 'Deposit Amount',
    description: 'Select a range and amount for quicker processing',
    visual: 'deposit-amount',
    imageDark: '/tutorial/transactions/deposit 2 dark.webp',
    imageLight: '/tutorial/transactions/deposit 2.webp',
  },
  {
    title: 'Timely Transfer',
    description: 'Complete transfer on time to avoid account update delays',
    visual: 'deposit-transfer',
    imageDark: '/tutorial/transactions/deposit 3 dark.webp',
    imageLight: '/tutorial/transactions/deposit 3.webp',
  },
  {
    title: 'Upload Proof',
    description: 'Take photo of proof and upload it. Contact 24/7 support if you encounter issues',
    visual: 'deposit-proof',
    imageDark: '/tutorial/transactions/deposit 4 dark.webp',
    imageLight: '/tutorial/transactions/deposit 4.webp',
  },
  {
    title: 'Wait for Verification',
    description: 'After uploading proof, wait for platform to verify and update balance automatically',
    visual: 'deposit-verification',
    imageDark: '/tutorial/transactions/deposit 5 dark.webp',
    imageLight: '/tutorial/transactions/deposit 5.webp',
  },
]

const withdrawalSteps: TutorialStep[] = [
  {
    title: 'Schedule Withdrawal',
    description: 'Withdrawals need to be scheduled to comply with regulations',
    visual: 'withdraw-schedule',
    imageDark: '/tutorial/transactions/withdraw 1 dark.webp',
    imageLight: '/tutorial/transactions/withdraw 1.webp',
  },
  {
    title: 'Identity Verification',
    description: 'Select and complete security verification',
    visual: 'withdraw-identity',
    imageDark: '/tutorial/transactions/withdraw 2 dark.webp',
    imageLight: '/tutorial/transactions/withdraw 2.webp',
  },
  {
    title: 'Withdrawal Review',
    description: 'After submission, please wait for platform to process request',
    visual: 'withdraw-review',
    imageDark: '/tutorial/transactions/withdraw 3 dark.webp',
    imageLight: '/tutorial/transactions/withdraw 3.webp',
  },
  {
    title: 'Check Account Balance',
    description: 'Confirm funds immediately upon notification. Click "Received" on withdrawal page if funds have arrived',
    visual: 'withdraw-balance',
    imageDark: '/tutorial/transactions/withdraw 4 dark.webp',
    imageLight: '/tutorial/transactions/withdraw 4.webp',
  },
  {
    title: 'Complete Withdrawal',
    description: 'Finalize withdrawal to receive bonus based on remaining time',
    visual: 'withdraw-complete',
    imageDark: '/tutorial/transactions/withdraw 5 dark.webp',
    imageLight: '/tutorial/transactions/withdraw 5.webp',
  },
]

const steps = computed(() => (props.mode === 'deposit' ? depositSteps : withdrawalSteps))
</script>

<template>
  <section class="transaction-tutorial" :class="`transaction-tutorial--${mode}`">
    <nav class="transaction-toolbar" aria-label="Transaction tutorial navigation">
      <NuxtLink class="transaction-back" to="/explore/account/me" aria-label="Back to account settings">
        <ChevronLeft :size="18" :stroke-width="2.5" />
      </NuxtLink>

      <NuxtLink
        class="transaction-tab"
        :class="{ 'transaction-tab--active': mode === 'deposit' }"
        to="/tutorial/transactions/deposit"
        :aria-current="mode === 'deposit' ? 'page' : undefined"
      >
        Deposit
      </NuxtLink>
      <NuxtLink
        class="transaction-tab"
        :class="{ 'transaction-tab--active': mode === 'withdraw' }"
        to="/tutorial/transactions/withdraw"
        :aria-current="mode === 'withdraw' ? 'page' : undefined"
      >
        Withdrawal
      </NuxtLink>
    </nav>

    <div class="transaction-board">
      <article
        v-for="(step, index) in steps"
        :key="step.title"
        class="transaction-step"
      >
        <div class="transaction-copy">
          <component :is="index === 0 ? 'h1' : 'h2'">{{ step.title }}</component>
          <p>{{ step.description }}</p>
        </div>
        <TransactionTutorialVisual
          :variant="step.visual"
          :image-dark="step.imageDark"
          :image-light="step.imageLight"
          :alt="step.title"
        />
      </article>
    </div>
  </section>
</template>

<style scoped>
.transaction-tutorial {
  width: min(100%, 1170px);
  margin: 12px auto 28px;
  color: #f4f4f4;
}

.transaction-toolbar {
  display: flex;
  min-height: 44px;
  align-items: center;
  padding: 6px 16px;
  border-radius: 12px;
  background: linear-gradient(180deg, rgba(37, 43, 41, 0.97), rgba(22, 24, 23, 0.99));
  box-shadow: inset 0 1px rgba(255, 255, 255, 0.025);
  gap: 8px;
}

.transaction-back {
  display: grid;
  width: 32px;
  height: 32px;
  flex: 0 0 auto;
  place-items: center;
  margin-right: 4px;
  border-radius: 50%;
  color: #00a474;
  background: #111514;
  transition: color 160ms ease, background-color 160ms ease;
}

.transaction-back:hover {
  color: #35d5a0;
  background: #0b100e;
}

.transaction-tab {
  display: inline-flex;
  min-width: 118px;
  height: 32px;
  align-items: center;
  justify-content: center;
  padding: 0 22px;
  border-radius: 7px;
  color: #f4f4f4;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  background: #6b6c6b;
  transition: background-color 160ms ease, color 160ms ease;
}

.transaction-tab:hover {
  background: #7a7b7a;
}

.transaction-tab--active,
.transaction-tab--active:hover {
  background: #007653;
}

.transaction-board {
  margin-top: 8px;
  overflow: hidden;
  border-radius: 11px;
  background: #141414;
}

.transaction-step {
  display: grid;
  min-height: 226px;
  grid-template-columns: minmax(0, 1fr) minmax(390px, 1fr);
  align-items: center;
  padding: 24px 54px;
  border-bottom: 1px solid #494949;
}

.transaction-step:last-child {
  border-bottom: 0;
}

.transaction-copy {
  width: min(100%, 390px);
  justify-self: center;
  padding: 0 22px;
  text-align: center;
}

.transaction-copy h1,
.transaction-copy h2 {
  margin: 0 0 3px;
  color: #f5f5f5;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.015em;
  line-height: 1.25;
}

.transaction-copy p {
  max-width: 330px;
  margin: 0 auto;
  color: #969696;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
}

@media (max-width: 75rem) {
  .transaction-step {
    padding-inline: 28px;
  }
}

@media (max-width: 50rem) {
  .transaction-tutorial {
    margin-top: 0;
  }

  .transaction-toolbar {
    position: sticky;
    z-index: 5;
    top: calc(var(--header-height) + 6px);
    padding-inline: 10px;
  }

  .transaction-step {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 20px 16px;
    text-align: center;
  }

  .transaction-copy {
    width: 100%;
    padding: 0;
  }
}
</style>
