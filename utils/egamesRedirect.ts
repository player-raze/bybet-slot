export const DEFAULT_BYBET_REDIRECT_URL = 'https://bybet.com'
export const DEFAULT_BYBET_REDIRECT_CODE = 'xjSD'

/**
 * Attempts to read a key from a local .env file in Node runtime environments.
 */
function tryReadEnvFile(key: string): string | undefined {
  try {
    const proc = (globalThis as unknown as { process?: any }).process
    if (typeof proc?.getBuiltinModule === 'function' && typeof proc?.cwd === 'function') {
      const fs = proc.getBuiltinModule('node:fs')
      const path = proc.getBuiltinModule('node:path')
      const envPath = path.resolve(proc.cwd(), '.env')
      if (fs.existsSync(envPath)) {
        const content = fs.readFileSync(envPath, 'utf-8')
        const match = content.match(new RegExp(`^\\s*${key}\\s*=\\s*["']?([^"'\\r\\n]+)["']?`, 'm'))
        if (match?.[1]) {
          return match[1].trim()
        }
      }
    }
  } catch {
    // Ignore in non-Node or browser environments
  }
  return undefined
}

/**
 * Resolves the base redirect URL from Nuxt runtimeConfig, process.env, or .env file.
 */
export const getEnvRedirectUrl = (): string => {
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
    tryReadEnvFile('BYBET_REDIRECT_URL') ||
    ''
  ).trim()

  return envUrl || DEFAULT_BYBET_REDIRECT_URL
}

/**
 * Resolves the redirect referral / promo code from runtimeConfig, process.env, or .env file.
 */
export const getEnvRedirectCode = (): string => {
  try {
    if (typeof useRuntimeConfig === 'function') {
      const config = useRuntimeConfig()
      if (config?.public?.bybetRedirectCode) {
        return String(config.public.bybetRedirectCode).trim()
      }
    }
  } catch {
    // Outside Nuxt context
  }

  const envCode = (
    (typeof process !== 'undefined' && process.env?.BYBET_REDIRECT_CODE) ||
    tryReadEnvFile('BYBET_REDIRECT_CODE') ||
    ''
  ).trim()

  return envCode || DEFAULT_BYBET_REDIRECT_CODE
}

/**
 * Constructs a fully qualified external ByBet redirect URL with query parameters.
 */
export const buildBybetRedirectUrl = (
  path: string,
  bybetRedirectUrl?: string,
  redirectCode?: string,
): string => {
  const envUrl = getEnvRedirectUrl()
  const envCode = getEnvRedirectCode()

  const raw = (bybetRedirectUrl || envUrl).trim().replace(/\/+$/, '')
  const code = (redirectCode || envCode).trim()
  const cleanPath = path.trim().replace(/^\/+/, '')

  const separator = cleanPath.includes('?') ? '&' : '?'
  const query = code && !cleanPath.includes('p=') ? `${separator}p=${encodeURIComponent(code)}` : ''

  return `${raw}/${cleanPath}${query}`
}

export const DEMO_REDIRECT_MAP: Readonly<Record<string, string>> = {
  // Slots
  'egames/slots': 'slotMachine/main',
  'egames/slots/bonus': 'slotMachine/promotion',
  'egames/slots/top-pick': 'slotMachine/recommend',
  'egames/slots/top': 'slotMachine/popular',
  'egames/slots/new': 'slotMachine/new',
  'egames/slots/hot': 'slotMachine/hot',
  'egames/slots/cold': 'slotMachine/cold',
  'egames/slots/max-rpt': 'slotMachine/high',

  // Bingo
  'egames/bingo': 'bingoMachine/main',
  'egames/bingo/top': 'bingoMachine/popular',
  'egames/bingo/hot': 'bingoMachine/hot',
  'egames/bingo/cold': 'bingoMachine/cold',
  'egames/bingo/max-rpt': 'bingoMachine/high',

  // Jackpot
  'egames/jackpot/all': 'jackpot/list',
  'egames/jackpot/jili': 'jackpot/38',
  'egames/jackpot/jdb': 'jackpot/18',
  'egames/jackpot/cq9': 'jackpot/15',
}

/**
 * Normalizes category variations and aliases.
 */
export const normalizeDemoCategory = (category?: string | null): string => {
  if (!category) return ''
  const cat = category.toLowerCase().trim()
  if (cat === 'max-rtp' || cat === 'max-rpt') return 'max-rpt'
  if (cat === 'top-picks' || cat === 'toppick' || cat === 'top-pick') return 'top-pick'
  if (cat === 'bonuses' || cat === 'bonus') return 'bonus'
  if (cat === 'home') return ''
  return cat
}

/**
 * Resolves the 2nd url path for the Demo redirect based on current route and category.
 */
export const getDemoRedirectPath = (
  rawPath?: string,
  rawCategory?: string | null,
): string => {
  const cleanPath = (rawPath || '')
    .trim()
    .replace(/^\/+/, '')
    .replace(/^explore\//, '')
    .replace(/\/+$/, '')

  const category = normalizeDemoCategory(rawCategory)

  // 1. If category is provided, check if combined with cleanPath matches DEMO_REDIRECT_MAP
  if (category) {
    if (cleanPath.startsWith('egames/slots') || cleanPath === 'slots') {
      const key = `egames/slots/${category}`
      if (DEMO_REDIRECT_MAP[key]) return DEMO_REDIRECT_MAP[key]
    }
    if (cleanPath.startsWith('egames/bingo') || cleanPath === 'bingo') {
      const key = `egames/bingo/${category}`
      if (DEMO_REDIRECT_MAP[key]) return DEMO_REDIRECT_MAP[key]
    }
    if (cleanPath.startsWith('egames/jackpot') || cleanPath === 'jackpot') {
      const key = `egames/jackpot/${category}`
      if (DEMO_REDIRECT_MAP[key]) return DEMO_REDIRECT_MAP[key]
    }
  }

  // 2. Direct match with full cleanPath first (e.g. 'egames/slots/bonus' or 'egames/slots')
  if (cleanPath && DEMO_REDIRECT_MAP[cleanPath]) {
    return DEMO_REDIRECT_MAP[cleanPath]
  }

  // 3. Slots routes
  if (cleanPath.startsWith('egames/slots') || cleanPath === 'slots') {
    const sub = category || cleanPath.replace(/^egames\/slots\/?/, '')
    const key = sub ? `egames/slots/${normalizeDemoCategory(sub)}` : 'egames/slots'
    return DEMO_REDIRECT_MAP[key] || 'slotMachine/main'
  }

  // 4. Bingo routes
  if (cleanPath.startsWith('egames/bingo') || cleanPath === 'bingo') {
    const sub = category || cleanPath.replace(/^egames\/bingo\/?/, '')
    const key = sub ? `egames/bingo/${normalizeDemoCategory(sub)}` : 'egames/bingo'
    return DEMO_REDIRECT_MAP[key] || 'bingoMachine/main'
  }

  // 5. Jackpot routes
  if (cleanPath.startsWith('egames/jackpot') || cleanPath === 'jackpot') {
    const sub = category || cleanPath.replace(/^egames\/jackpot\/?/, '')
    const key = sub ? `egames/jackpot/${sub.toLowerCase().trim()}` : 'egames/jackpot/all'
    return DEMO_REDIRECT_MAP[key] || 'jackpot/list'
  }

  // 6. Category-only fallback if route is unknown (e.g. /egames/history)
  if (category) {
    const slotKey = `egames/slots/${category}`
    if (DEMO_REDIRECT_MAP[slotKey]) return DEMO_REDIRECT_MAP[slotKey]
    const bingoKey = `egames/bingo/${category}`
    if (DEMO_REDIRECT_MAP[bingoKey]) return DEMO_REDIRECT_MAP[bingoKey]
    const jackpotKey = `egames/jackpot/${category}`
    if (DEMO_REDIRECT_MAP[jackpotKey]) return DEMO_REDIRECT_MAP[jackpotKey]
  }

  return 'slotMachine/main'
}

/**
 * Builds the complete redirect URL: env_redirect + 2nd url + code
 */
export const resolveDemoRedirectUrl = (
  rawPath?: string,
  rawCategory?: string | null,
  bybetRedirectUrl?: string,
  redirectCode?: string,
): string => {
  const secondUrl = getDemoRedirectPath(rawPath, rawCategory)
  return buildBybetRedirectUrl(secondUrl, bybetRedirectUrl, redirectCode)
}
