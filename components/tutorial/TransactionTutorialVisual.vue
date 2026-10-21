<script setup lang="ts">
import { useSiteTheme } from '~/composables/useSitePreferences'

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

interface Props {
  variant?: TransactionVisualVariant | string
  image?: string
  imageDark?: string
  imageLight?: string
  alt?: string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'deposit-method',
  image: '',
  imageDark: '/tutorial/transactions/visual-dark.webp',
  imageLight: '/tutorial/transactions/visual-light.webp',
  alt: 'Tutorial visual illustration',
})

const { effectiveTheme } = useSiteTheme()

const currentImage = computed(() => {
  if (effectiveTheme.value === 'light') {
    return props.imageLight || props.image || '/tutorial/transactions/visual-light.webp'
  }
  return props.imageDark || props.image || '/tutorial/transactions/visual-dark.webp'
})
</script>

<template>
  <div class="visual-stage" :class="`visual-stage--${variant}`" aria-hidden="true">
    <img
      :src="currentImage"
      :alt="alt"
      class="visual-stage-image"
      loading="lazy"
      decoding="async"
    />
  </div>
</template>

<style scoped>
.visual-stage {
  position: relative;
  width: min(100%, 360px);
  min-height: 155px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-stage-image {
  width: 100%;
  max-width: 360px;
  height: auto;
  max-height: 180px;
  object-fit: contain;
  display: block;
  border-radius: 12px;
  filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.35));
  transition: opacity 0.2s ease;
}
</style>
