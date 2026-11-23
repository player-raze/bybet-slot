export interface TrackEnvClickOptions {
  targetUrl?: string
  buttonText?: string
  buttonClass?: string
  buttonId?: string
  buttonName?: string
  buttonTag?: string
  section?: string
  selector?: string
  location?: string
  pageUrl?: string
  pagePath?: string
  pageTitle?: string
  referrer?: string
  x?: number | null
  y?: number | null
}

export interface PlaynowClickResponse {
  ok: boolean
  totalClicks?: number
  locationClicks?: number
  error?: string
}

/**
 * Resolves the base environment redirect URL from runtimeConfig, process.env, or fallback.
 */
export const resolvePlaynowEnvUrl = (): string => {
  try {
    if (typeof useRuntimeConfig === 'function') {
      const config = useRuntimeConfig()
      if (config?.public?.bybetRedirectUrl) {
        return String(config.public.bybetRedirectUrl).trim()
      }
    }
  } catch {
    // Outside Nuxt context
  }

  const envUrl = (
    (typeof process !== 'undefined' && process.env?.BYBET_REDIRECT_URL) ||
    ''
  ).trim()

  return envUrl || 'https://bybet.com'
}

/**
 * Checks if a given URL is pointing to the external environment URL (env_url),
 * such as the configured BYBET_REDIRECT_URL, bybet.com, or an env_redirect demo route.
 */
export const isEnvRedirectUrl = (url?: string | null, customEnvUrl?: string): boolean => {
  if (!url || typeof url !== 'string') return false
  const target = url.trim()
  if (!target) return false

  // Handle explicit relative playnow redirect
  if (target.startsWith('/playnow')) {
    return true
  }

  // Other relative URLs are internal site routes
  if (target.startsWith('/')) {
    return false
  }

  const baseEnv = (customEnvUrl || resolvePlaynowEnvUrl()).trim().replace(/\/+$/, '')
  if (baseEnv && target.startsWith(baseEnv)) {
    return true
  }

  try {
    const parsedTarget = new URL(target)
    const parsedEnv = new URL(baseEnv || 'https://bybet.com')
    if (parsedTarget.hostname.toLowerCase() === parsedEnv.hostname.toLowerCase()) {
      return true
    }
    if (parsedTarget.hostname.includes('bybet.com') || parsedTarget.hostname.includes('bybet.ph')) {
      return true
    }
  } catch {
    // Malformed URL fallback
  }

  return target.includes('bybet.com') || target.includes('bybet.ph')
}

/**
 * Builds the normalized payload for the playnow-click tracker API.
 */
export const buildPlaynowClickPayload = (options: TrackEnvClickOptions = {}) => {
  const isClient = typeof window !== 'undefined'
  const fallbackEnvUrl = resolvePlaynowEnvUrl()
  const targetUrl = (options.targetUrl || fallbackEnvUrl || 'https://bybet.com').trim()

  const pageUrl = options.pageUrl || (isClient ? window.location.href : '')
  const pagePath = options.pagePath || (isClient ? window.location.pathname : '')
  const pageTitle = options.pageTitle || (isClient ? document.title : '')
  const referrer = options.referrer || (isClient ? document.referrer : '')

  return {
    targetUrl,
    pageUrl,
    pagePath: pagePath || '/',
    pageTitle,
    referrer,
    buttonText: options.buttonText ? String(options.buttonText).slice(0, 120) : 'playnow-link',
    buttonClass: options.buttonClass ? String(options.buttonClass).slice(0, 220) : '',
    buttonId: options.buttonId ? String(options.buttonId).slice(0, 120) : '',
    buttonName: options.buttonName ? String(options.buttonName).slice(0, 120) : '',
    buttonTag: options.buttonTag ? String(options.buttonTag).slice(0, 40) : '',
    section: options.section ? String(options.section).slice(0, 140) : 'page',
    selector: options.selector ? String(options.selector).slice(0, 220) : '',
    location: options.location ? String(options.location).slice(0, 220) : '',
    x: typeof options.x === 'number' ? Math.round(options.x) : null,
    y: typeof options.y === 'number' ? Math.round(options.y) : null,
  }
}

let lastTrackedTarget = ''
let lastTrackedTimestamp = 0

/**
 * Tracks a click targeting env_url using the Playnow Tracker API.
 * Uses navigator.sendBeacon when possible to guarantee delivery on navigation without blocking.
 */
export const trackEnvClick = async (options: TrackEnvClickOptions = {}): Promise<PlaynowClickResponse | null> => {
  const payload = buildPlaynowClickPayload(options)

  if (typeof window === 'undefined') {
    return null
  }

  const now = Date.now()
  if (payload.targetUrl === lastTrackedTarget && now - lastTrackedTimestamp < 300) {
    return { ok: true }
  }
  lastTrackedTarget = payload.targetUrl
  lastTrackedTimestamp = now

  const endpoint = '/api/playnow/click'

  // Prefer navigator.sendBeacon for fast, reliable non-blocking transmission during link navigation
  if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
    try {
      const blob = new Blob([JSON.stringify(payload)], { type: 'application/json' })
      const sent = navigator.sendBeacon(endpoint, blob)
      if (sent) {
        return { ok: true }
      }
    } catch {
      // Fall through to fetch
    }
  }

  // Fallback to fetch with keepalive: true
  try {
    const res = await $fetch<PlaynowClickResponse>(endpoint, {
      method: 'POST',
      body: payload,
    })
    return res
  } catch (error: any) {
    // Non-blocking error handling
    return {
      ok: false,
      error: error?.message || 'Track click failed',
    }
  }
}
