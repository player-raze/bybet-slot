import { onMounted, ref } from 'vue'

export interface RecentGame {
  id: string
  title: string
  image: string
  provider: string
  providerLogo?: string
  badge?: string
  rtpPercent?: string
  hotPercent?: string
  coldPercent?: string
  href?: string
  playedAt?: number
}

const STORAGE_KEY = 'bybet_recent_games'

export const useRecentGames = () => {
  const recentGames = ref<RecentGame[]>([])

  const loadRecentGames = () => {
    if (import.meta.client) {
      try {
        const stored = localStorage.getItem(STORAGE_KEY)
        if (stored) {
          const parsed = JSON.parse(stored)
          if (Array.isArray(parsed)) {
            recentGames.value = parsed
          }
        }
      } catch {
        // Ignore localStorage error
      }
    }
  }

  const addRecentGame = (game: any) => {
    if (!game || !game.id) return
    const filtered = recentGames.value.filter(g => g.id !== game.id)
    const item: RecentGame = {
      id: game.id,
      title: game.title,
      image: game.image || '',
      provider: game.provider || '',
      providerLogo: game.providerLogo,
      badge: game.badge,
      rtpPercent: game.rtpPercent,
      hotPercent: game.hotPercent,
      coldPercent: game.coldPercent,
      href: game.href,
      playedAt: Date.now(),
    }
    recentGames.value = [item, ...filtered].slice(0, 30)
    if (import.meta.client) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(recentGames.value))
      } catch {
        // Ignore localStorage error
      }
    }
  }

  const removeRecentGame = (id: string) => {
    recentGames.value = recentGames.value.filter(g => g.id !== id)
    if (import.meta.client) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(recentGames.value))
      } catch {
        // Ignore localStorage error
      }
    }
  }

  const clearRecentGames = () => {
    recentGames.value = []
    if (import.meta.client) {
      try {
        localStorage.removeItem(STORAGE_KEY)
      } catch {
        // Ignore localStorage error
      }
    }
  }

  onMounted(() => {
    loadRecentGames()
  })

  return {
    recentGames,
    addRecentGame,
    removeRecentGame,
    clearRecentGames,
  }
}

