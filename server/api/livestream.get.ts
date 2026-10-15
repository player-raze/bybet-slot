import type { LiveStream, LiveStreamCatalog } from '~/types/livestream'

interface ApiResponse<T> {
  code: number
  data: T
}

interface GamePreview {
  id: string
  thumbnail?: string
  iframe?: { src?: string; title?: string }
}

interface GamesCatalog {
  categories: { subcategories: { live?: GamePreview[]; schedule?: GamePreview[] }[] }[]
}

export default defineEventHandler(async (event): Promise<LiveStreamCatalog> => {
  const config = useRuntimeConfig(event)
  const baseURL = `${config.kadarioApi.replace(/\/+$/, '').replace(/\/api\/v1$/, '')}/api/v1`

  async function request<T>(path: string, query?: Record<string, string>): Promise<T> {
    const response = await $fetch<ApiResponse<T>>(path, {
      baseURL, query, timeout: 15000, retry: 0,
    })
    if (![0, 200].includes(response.code) || !response.data) {
      throw new Error('Invalid livestream response')
    }
    return response.data
  }

  try {
    // The public site and catalog endpoints do not require an API key.
    const site = await request<{ features?: { live?: boolean } }>(`/sites/${encodeURIComponent(config.kadarioSite)}`)
    if (site.features?.live !== true) return { enabled: false, results: [] }

    const catalog = await request<{ results: LiveStream[] }>('/livestream', {
      site: config.kadarioSite, segment: 'live',
    })
    if (!Array.isArray(catalog.results)) throw new Error('Invalid livestream catalog')
    // Preview metadata is optional: an unavailable games feed must not stop playback.
    const games = await request<GamesCatalog>(`/sites/${encodeURIComponent(config.kadarioSite)}/games`).catch(() => null)
    const previews = new Map(games?.categories?.flatMap(category =>
      category.subcategories.flatMap(group => [...(group.live ?? []), ...(group.schedule ?? [])]),
    ).map(game => [game.id, game]) ?? [])
    const origin = new URL(baseURL).origin
    function resolveUrl(value?: string) {
      if (!value) return undefined
      try {
        const url = new URL(value, origin)
        return url.protocol === 'https:' ? url.href : undefined
      } catch { return undefined }
    }
    return {
      enabled: true,
      results: catalog.results.map(stream => {
        const game = previews.get(stream.id)
        const src = resolveUrl(game?.iframe?.src)
        return {
          ...stream,
          thumbnail: resolveUrl(game?.thumbnail),
          iframe: src ? { src, title: game?.iframe?.title || `${stream.home.name} vs ${stream.away.name}` } : undefined,
        }
      }),
    }
  } catch {
    throw createError({ statusCode: 502, statusMessage: 'Livestream service unavailable' })
  }
})
