import { ref } from 'vue'

const STORAGE_KEY = 'bybet_viewed_promotions'

const viewedPromotions = ref<string[]>([])
let isLoaded = false

export const useViewedPromotions = () => {
  const loadViewedPromotions = () => {
    if (import.meta.client && !isLoaded) {
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
          const parsed = JSON.parse(stored)
          if (Array.isArray(parsed)) {
            viewedPromotions.value = parsed
          }
        }
      } catch {
        // Ignore localStorage error
      }
      isLoaded = true
    }
  }

  const markAsViewed = (slug: string) => {
    if (!slug) return
    loadViewedPromotions()
    if (!viewedPromotions.value.includes(slug)) {
      viewedPromotions.value = [...viewedPromotions.value, slug]
      if (import.meta.client) {
        try {
          localStorage.setItem(STORAGE_KEY, JSON.stringify(viewedPromotions.value))
        } catch {
          // Ignore localStorage error
        }
      }
    }
  }

  const isViewed = (slug: string): boolean => {
    loadViewedPromotions()
    return viewedPromotions.value.includes(slug)
  }

  const clearViewed = () => {
    viewedPromotions.value = []
    if (import.meta.client) {
      try {
        localStorage.removeItem(STORAGE_KEY)
      } catch {
        // Ignore localStorage error
      }
    }
  }

  return {
    viewedPromotions,
    loadViewedPromotions,
    markAsViewed,
    isViewed,
    clearViewed,
  }
}

