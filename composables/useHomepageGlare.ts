import { onBeforeUnmount, onMounted, type Ref } from 'vue'

const GLARE_CARD_SELECTOR = '.homepage-glare--card'
const GLARE_SHINE_SELECTOR = '.homepage-glare__shine'
const GLARE_AUTO_CLASS = 'homepage-glare__shine--auto'
const GLARE_INITIAL_DELAY_MS = 700
const GLARE_INTERVAL_MS = 2000
const GLARE_DURATION_MS = 950

export interface ViewportSize {
  width: number
  height: number
}

/**
 * Selects the next random card currently intersecting the viewport while avoiding
 * repeating the immediately preceding card when multiple candidates are visible.
 */
export const pickNextVisibleGlareTarget = (
  candidates: HTMLElement[],
  viewport: ViewportSize,
  lastTarget: HTMLElement | null,
  random: () => number = Math.random,
): HTMLElement | null => {
  const visible = candidates.filter((el) => {
    const rect = el.getBoundingClientRect()
    return (
      rect.width > 0
      && rect.height > 0
      && rect.bottom > 0
      && rect.top < viewport.height
      && rect.right > 0
      && rect.left < viewport.width
    )
  })

  if (!visible.length) {
    return null
  }

  const pool = visible.length > 1 && lastTarget
    ? visible.filter(el => el !== lastTarget)
    : visible

  const index = Math.floor(random() * pool.length)
  return pool[index] ?? visible[0] ?? null
}

/**
 * Periodically rotates an automatic glare sweep across visible homepage game cards
 * while preserving CSS hover, focus-visible, and tap glare interactions.
 */
export const useHomepageGlare = (containerRef: Ref<HTMLElement | null>): void => {
  let motionPreference: MediaQueryList | undefined
  let initialDelayTimer: ReturnType<typeof setTimeout> | undefined
  let glareInterval: ReturnType<typeof setInterval> | undefined
  let glareEndTimer: ReturnType<typeof setTimeout> | undefined
  let outerRafId: number | undefined
  let innerRafId: number | undefined
  let activeShine: HTMLElement | null = null
  let lastTarget: HTMLElement | null = null

  const clearPendingFrames = (): void => {
    if (outerRafId !== undefined) {
      cancelAnimationFrame(outerRafId)
      outerRafId = undefined
    }
    if (innerRafId !== undefined) {
      cancelAnimationFrame(innerRafId)
      innerRafId = undefined
    }
  }

  const clearActiveGlare = (): void => {
    clearPendingFrames()
    if (glareEndTimer !== undefined) {
      clearTimeout(glareEndTimer)
      glareEndTimer = undefined
    }
    if (activeShine) {
      activeShine.classList.remove(GLARE_AUTO_CLASS)
      activeShine = null
    }
  }

  const triggerRandomGlare = (): void => {
    if (typeof window === 'undefined' || document.hidden || motionPreference?.matches) {
      return
    }

    const container = containerRef.value
    if (!container) {
      return
    }

    const candidates = Array.from(container.querySelectorAll<HTMLElement>(GLARE_CARD_SELECTOR))
    const target = pickNextVisibleGlareTarget(
      candidates,
      { width: window.innerWidth, height: window.innerHeight },
      lastTarget,
    )
    if (!target) {
      return
    }

    const shine = target.querySelector<HTMLElement>(GLARE_SHINE_SELECTOR)
    if (!shine) {
      return
    }

    clearActiveGlare()
    lastTarget = target
    activeShine = shine
    shine.classList.remove(GLARE_AUTO_CLASS)

    outerRafId = requestAnimationFrame(() => {
      outerRafId = undefined
      innerRafId = requestAnimationFrame(() => {
        innerRafId = undefined
        if (motionPreference?.matches || document.hidden) {
          return
        }
        shine.classList.add(GLARE_AUTO_CLASS)
        glareEndTimer = setTimeout(() => {
          shine.classList.remove(GLARE_AUTO_CLASS)
          if (activeShine === shine) {
            activeShine = null
          }
          glareEndTimer = undefined
        }, GLARE_DURATION_MS)
      })
    })
  }

  const stopGlareRotation = (): void => {
    if (initialDelayTimer !== undefined) {
      clearTimeout(initialDelayTimer)
      initialDelayTimer = undefined
    }
    if (glareInterval !== undefined) {
      clearInterval(glareInterval)
      glareInterval = undefined
    }
    clearActiveGlare()
  }

  const startGlareRotation = (): void => {
    stopGlareRotation()
    if (typeof window === 'undefined' || document.hidden || motionPreference?.matches) {
      return
    }
    initialDelayTimer = setTimeout(() => {
      initialDelayTimer = undefined
      triggerRandomGlare()
    }, GLARE_INITIAL_DELAY_MS)
    glareInterval = setInterval(triggerRandomGlare, GLARE_INTERVAL_MS)
  }

  const handleMotionChange = (): void => {
    if (motionPreference?.matches) {
      stopGlareRotation()
    } else {
      startGlareRotation()
    }
  }

  const handleVisibilityChange = (): void => {
    if (document.hidden) {
      stopGlareRotation()
    } else {
      startGlareRotation()
    }
  }

  onMounted(() => {
    if (typeof window === 'undefined') {
      return
    }
    motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
    motionPreference.addEventListener('change', handleMotionChange)
    document.addEventListener('visibilitychange', handleVisibilityChange)
    startGlareRotation()
  })

  onBeforeUnmount(() => {
    stopGlareRotation()
    motionPreference?.removeEventListener('change', handleMotionChange)
    document.removeEventListener('visibilitychange', handleVisibilityChange)
    lastTarget = null
  })
}
