import { onMounted, ref } from 'vue'

export const useSearchHistory = (storageKey: string, initialDefaults: string[] = []) => {
  const searchHistory = ref<string[]>([...initialDefaults])

  const loadHistory = () => {
    if (import.meta.client) {
      try {
        const stored = localStorage.getItem(storageKey)
        if (stored) {
          const parsed = JSON.parse(stored)
          if (Array.isArray(parsed)) {
            searchHistory.value = parsed
          }
        }
      } catch {
        // Ignore localStorage error
      }
    }
  }

  const addToHistory = (term: string) => {
    const trimmed = term.trim()
    if (!trimmed) return
    const filtered = searchHistory.value.filter(
      (item) => item.toLowerCase() !== trimmed.toLowerCase()
    )
    searchHistory.value = [trimmed, ...filtered].slice(0, 10)
    if (import.meta.client) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(searchHistory.value))
      } catch {
        // Ignore localStorage error
      }
    }
  }

  const removeHistoryItem = (index: number) => {
    searchHistory.value.splice(index, 1)
    if (import.meta.client) {
      try {
        localStorage.setItem(storageKey, JSON.stringify(searchHistory.value))
      } catch {
        // Ignore localStorage error
      }
    }
  }

  const clearHistory = () => {
    searchHistory.value = []
    if (import.meta.client) {
      try {
        localStorage.removeItem(storageKey)
      } catch {
        // Ignore localStorage error
      }
    }
  }

  onMounted(() => {
    loadHistory()
  })

  return {
    searchHistory,
    addToHistory,
    removeHistoryItem,
    clearHistory,
  }
}

