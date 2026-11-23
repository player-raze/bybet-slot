<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'

const props = withDefaults(defineProps<{
  digit: string
  isIncrease?: boolean
  staggerDelay?: number
}>(), {
  isIncrease: true,
  staggerDelay: 0,
})

const parseDigit = (val: string): number => {
  const parsed = Number.parseInt(val, 10)
  return Number.isNaN(parsed) ? 0 : Math.max(0, Math.min(9, parsed))
}

const currentDigit = ref(parseDigit(props.digit))
const reelDigits = ref<number[]>([currentDigit.value])
const stripStyle = ref<{ transform: string; transition: string }>({
  transform: 'translateY(0%)',
  transition: 'none',
})

let timer: ReturnType<typeof setTimeout> | null = null
let frameId: number | null = null
let animationVersion = 0

const stopAnimation = (): void => {
  animationVersion += 1
  if (timer !== null) {
    clearTimeout(timer)
    timer = null
  }
  if (frameId !== null) {
    cancelAnimationFrame(frameId)
    frameId = null
  }
}

const getDigitImage = (d: number | string): string => {
  return `/images/jackpot/${d}.webp`
}

/**
 * Builds sequence of digits between `from` and `to`.
 * When isInc is true: from -> (from+1)%10 -> ... -> to (rolls UP)
 * When isInc is false: from -> (from-1+10)%10 -> ... -> to (rolls DOWN)
 */
const buildSequence = (from: number, to: number, isInc: boolean): number[] => {
  if (from === to) return [to]
  const list: number[] = [from]
  let cur = from
  if (isInc) {
    while (cur !== to) {
      cur = (cur + 1) % 10
      list.push(cur)
    }
  } else {
    while (cur !== to) {
      cur = (cur - 1 + 10) % 10
      list.push(cur)
    }
  }
  return list
}

watch(() => props.digit, (newVal) => {
  const target = parseDigit(newVal)
  const from = currentDigit.value

  stopAnimation()

  if (from === target || typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    currentDigit.value = target
    reelDigits.value = [target]
    stripStyle.value = { transform: 'translateY(0%)', transition: 'none' }
    return
  }

  const isInc = props.isIncrease
  const sequence = buildSequence(from, target, isInc)
  const steps = sequence.length - 1
  const delay = Math.max(0, props.staggerDelay || 0)
  const version = animationVersion

  // Ascending strips start at `from`; descending strips end at `from`.
  reelDigits.value = isInc ? sequence : sequence.slice().reverse()
  stripStyle.value = {
    transform: isInc ? 'translateY(0%)' : `translateY(-${steps * 100}%)`,
    transition: 'none',
  }

  frameId = requestAnimationFrame(() => {
    if (version !== animationVersion) return
    frameId = requestAnimationFrame(() => {
      if (version !== animationVersion) return
      frameId = null
      stripStyle.value = {
        transform: isInc ? `translateY(-${steps * 100}%)` : 'translateY(0%)',
        transition: `transform 850ms cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms`,
      }

      timer = setTimeout(() => {
        if (version !== animationVersion) return
        timer = null
        currentDigit.value = target
        reelDigits.value = [target]
        stripStyle.value = {
          transform: 'translateY(0%)',
          transition: 'none',
        }
      }, 850 + delay + 40)
    })
  })
})

onBeforeUnmount(stopAnimation)
</script>

<template>
  <span class="jackpot-counter-character light:bg-[#F1F1F1]">
    <span class="jackpot-reel-viewport">
      <span
        class="jackpot-reel-strip"
        :style="stripStyle"
      >
        <span
          v-for="(d, idx) in reelDigits"
          :key="`${d}-${idx}`"
          class="jackpot-reel-cell"
        >
          <img
            :src="getDigitImage(d)"
            alt=""
            class="jackpot-digit-image"
            draggable="false"
          />
        </span>
      </span>
    </span>
  </span>
</template>

<style scoped>
.jackpot-counter-character {
  display: inline-flex;
  width: 41px;
  height: 56px;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border: 1px solid rgba(132, 132, 132, 0.82);
  border-radius: 5px;
  background: linear-gradient(180deg, #4b4b4b 0%, #333 48%, #3e3e3e 100%);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.08),
    0 2px 3px rgba(0, 0, 0, 0.4);
}

.jackpot-reel-viewport {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.jackpot-reel-strip {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  will-change: transform;
}

.jackpot-reel-cell {
  flex: 0 0 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.jackpot-digit-image {
  display: block;
  width: 34px;
  height: auto;
  max-height: 45px;
  object-fit: contain;
  filter: drop-shadow(0 3px 2px rgba(0, 0, 0, 0.78));
  user-select: none;
}

@media (max-width: 639px) {
  .jackpot-counter-character {
    width: 34px;
    height: 50px;
  }

  .jackpot-digit-image {
    width: 29px;
    max-height: 41px;
  }
}
</style>
