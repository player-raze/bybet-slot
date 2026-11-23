import { buildBybetRedirectUrl } from './sportsRedirect.ts'

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
