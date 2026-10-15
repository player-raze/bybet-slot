import type { Sport, SportsEvent } from '~/types/sports'

export function createOddsApi(api: string, apiKey: string) {
  const baseURL = `${api.replace(/\/+$/, '').replace(/\/sports$/, '')}/`
  
  // Simple in-memory cache to prevent redundant requests
  const cache = new Map<string, { data: any; expiry: number }>()

  async function request<T>(path: string, query: Record<string, string> = {}, ttl = 60000): Promise<T> {
    if (!apiKey) throw createError({ statusCode: 503, statusMessage: 'Sports API key is not configured' })
    
    const cacheKey = `${path}_${JSON.stringify(query)}`
    const cached = cache.get(cacheKey)
    if (cached && cached.expiry > Date.now()) {
      return cached.data
    }

    try {
      const data = await $fetch<T>(path, { baseURL, query: { apiKey, ...query }, timeout: 15000, retry: 0 }) as T
      cache.set(cacheKey, { data, expiry: Date.now() + ttl })
      return data
    } catch {

      throw createError({ statusCode: 502, statusMessage: 'Sports data is temporarily unavailable' })
    }
  }

  return {
    sports: () => request<Sport[]>('sports/', {}, 3600000), // Cache sports list for 1 hour
    odds: (sport: string, outright = false) => request<SportsEvent[]>(`sports/${encodeURIComponent(sport)}/odds/`, {
      regions: 'us', markets: outright ? 'outrights' : 'h2h,spreads,totals', oddsFormat: 'decimal',
    }, 60000), // Cache odds for 1 minute
  }
}
