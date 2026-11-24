export type GameRailSortField = 'livePlayers' | 'hotPercent' | 'coldPercent' | 'rtpPercent' | string
export type GameRailSortOrder = 'asc' | 'desc'
export type GameRailSortPreset = 'top-pick' | 'top' | 'hot' | 'cold' | 'max-rpt' | 'max-rtp' | string

export interface GameRailSortOptions<T = any> {
  sort?: string | ((a: T, b: T) => number)
  sortBy?: GameRailSortField
  sortOrder?: GameRailSortOrder
  category?: string
  label?: string
}

export const normalizeSortField = (field: unknown): string => {
  if (typeof field !== 'string' || !field.trim()) return ''
  const clean = field.toLowerCase().replace(/[-_\s]/g, '')
  if (clean === 'cold' || clean === 'coldpercent') return 'coldPercent'
  if (clean === 'hot' || clean === 'hotpercent') return 'hotPercent'
  if (
    clean === 'maxrtp' ||
    clean === 'maxrpt' ||
    clean === 'rtp' ||
    clean === 'rpt' ||
    clean === 'rtppercent' ||
    clean === 'rptpercent'
  ) {
    return 'rtpPercent'
  }
  if (
    clean === 'toppick' ||
    clean === 'top' ||
    clean === 'liveplayers' ||
    clean === 'players' ||
    clean === 'liveplayer'
  ) {
    return 'livePlayers'
  }
  return field.trim()
}

export const getDefaultSortOrder = (field: string): GameRailSortOrder => {
  const clean = field.toLowerCase().replace(/[-_\s]/g, '')
  // Top: 3000, 2939, 1000... (descending live player count)
  if (clean === 'top' || clean === 'liveplayers') {
    return 'desc'
  }
  // Top Pick: vice versa of Top (ascending live player count: 1, 2, ... 1000, 2939, 3000)
  if (clean === 'toppick') {
    return 'asc'
  }
  // Cold: ascending % (1%, 34%, 50%...)
  if (clean === 'cold' || clean === 'coldpercent') {
    return 'asc'
  }
  // Hot & RTP: descending
  return 'desc'
}

export const parsePercent = (val: unknown): number | null => {
  if (val === undefined || val === null || val === '') return null
  if (typeof val === 'number') return Number.isNaN(val) ? null : val
  if (typeof val === 'string') {
    const clean = val.replace('%', '').trim()
    const num = Number.parseFloat(clean)
    return Number.isNaN(num) ? null : num
  }
  return null
}

export const parseNumber = (val: unknown): number | null => {
  if (val === undefined || val === null || val === '') return null
  if (typeof val === 'number') return Number.isNaN(val) ? null : val
  if (typeof val === 'string') {
    const clean = val.replace(/,/g, '').trim()
    const num = Number.parseFloat(clean)
    return Number.isNaN(num) ? null : num
  }
  return null
}

export const resolveSortCriteria = (
  options?: GameRailSortOptions,
): { field: string; order: GameRailSortOrder } | null => {
  if (!options) return null

  if (typeof options.sort === 'string') {
    const cleanSort = options.sort.trim().toLowerCase()
    if (cleanSort === 'none' || cleanSort === 'preserve') {
      return null
    }
  }

  // 1. Explicit sortBy prop
  if (options.sortBy) {
    const rawClean = options.sortBy.toLowerCase().replace(/[-_\s]/g, '')
    if (rawClean === 'top') {
      return { field: 'livePlayers', order: options.sortOrder || 'desc' }
    }
    if (rawClean === 'toppick') {
      return { field: 'livePlayers', order: options.sortOrder || 'asc' }
    }
    const field = normalizeSortField(options.sortBy)
    const order = options.sortOrder || getDefaultSortOrder(field)
    return { field, order }
  }

  // 2. String sort prop (e.g. 'top asc', 'top-pick', 'cold asc', 'hot', etc.)
  if (typeof options.sort === 'string' && options.sort.trim()) {
    const raw = options.sort.trim()
    const clean = raw.toLowerCase().replace(/[-_\s]/g, '')

    // User exact phrase aliases:
    // "sort Top to asc ex: 3000, 2939, 1000 ..."
    if (clean === 'top' || clean === 'topasc') {
      return { field: 'livePlayers', order: 'desc' }
    }
    if (clean === 'topdesc') {
      return { field: 'livePlayers', order: 'asc' }
    }
    if (clean === 'toppick' || clean === 'toppickasc') {
      return { field: 'livePlayers', order: 'asc' }
    }
    if (clean === 'toppickdesc') {
      return { field: 'livePlayers', order: 'desc' }
    }

    const parts = raw.split(/\s+/)
    if (parts.length >= 2) {
      const lastPart = parts[parts.length - 1].toLowerCase()
      if (lastPart === 'asc' || lastPart === 'desc') {
        const fieldPart = parts.slice(0, -1).join(' ').toLowerCase().replace(/[-_\s]/g, '')
        if (fieldPart === 'top') {
          // If the user specifies "top asc", they expect 3000, 2939, 1000... (descending numerical value)
          return { field: 'livePlayers', order: lastPart === 'asc' ? 'desc' : 'asc' }
        }
        if (fieldPart === 'toppick') {
          return { field: 'livePlayers', order: lastPart === 'asc' ? 'asc' : 'desc' }
        }
        const field = normalizeSortField(parts.slice(0, -1).join(' '))
        const order: GameRailSortOrder = lastPart
        return { field, order }
      }
      const firstPart = parts[0]
      const secondPart = parts[1].toLowerCase()
      const field = normalizeSortField(firstPart)
      const order: GameRailSortOrder = secondPart === 'desc' ? 'desc' : 'asc'
      return { field, order }
    }

    const field = normalizeSortField(raw)
    const order = options.sortOrder || getDefaultSortOrder(raw)
    return { field, order }
  }

  // 3. Category identifier (e.g. 'top', 'top-pick', 'hot', 'cold', 'max-rpt', 'max-rtp')
  if (options.category) {
    const cat = options.category.toLowerCase().trim()
    if (cat === 'top') {
      // Top: 3000, 2939, 1000...
      return { field: 'livePlayers', order: options.sortOrder || 'desc' }
    }
    if (cat === 'top-pick' || cat === 'top-picks' || cat === 'toppick') {
      // Top Pick: vice versa (1000, 2939, 3000...)
      return { field: 'livePlayers', order: options.sortOrder || 'asc' }
    }
    if (cat === 'hot') {
      return { field: 'hotPercent', order: options.sortOrder || 'desc' }
    }
    if (cat === 'cold') {
      return { field: 'coldPercent', order: options.sortOrder || 'asc' }
    }
    if (cat === 'max-rpt' || cat === 'max-rtp') {
      return { field: 'rtpPercent', order: options.sortOrder || 'desc' }
    }
    const field = normalizeSortField(cat)
    if (field && field !== cat) {
      return { field, order: options.sortOrder || getDefaultSortOrder(field) }
    }
  }

  // 4. Label / title heuristic (e.g. 'Top Pick', 'Top', 'Hot games', 'Cold Games', 'Max RTP')
  if (options.label) {
    const lbl = options.label.toLowerCase().trim()
    if (lbl.includes('top pick') || lbl.includes('toppick')) {
      return { field: 'livePlayers', order: options.sortOrder || 'asc' }
    }
    if (lbl === 'top' || lbl.startsWith('top ') || lbl.endsWith(' top')) {
      return { field: 'livePlayers', order: options.sortOrder || 'desc' }
    }
    if (lbl.includes('hot')) {
      return { field: 'hotPercent', order: options.sortOrder || 'desc' }
    }
    if (lbl.includes('cold')) {
      return { field: 'coldPercent', order: options.sortOrder || 'asc' }
    }
    if (lbl.includes('max rtp') || lbl.includes('max rpt')) {
      return { field: 'rtpPercent', order: options.sortOrder || 'desc' }
    }
  }

  return null
}

export const sortRailGames = <T extends Record<string, any>>(
  games: T[],
  options?: GameRailSortOptions<T>,
): T[] => {
  if (!Array.isArray(games) || games.length <= 1) {
    return Array.isArray(games) ? [...games] : []
  }

  // Custom comparator function
  if (typeof options?.sort === 'function') {
    return [...games].sort(options.sort)
  }

  const criteria = resolveSortCriteria(options)
  if (!criteria) {
    return [...games]
  }

  const { field, order } = criteria

  return [...games].sort((a, b) => {
    let valA: number | string | null
    let valB: number | string | null

    if (field === 'livePlayers') {
      valA = parseNumber(a.livePlayers)
      valB = parseNumber(b.livePlayers)
    } else if (field === 'hotPercent' || field === 'coldPercent' || field === 'rtpPercent') {
      valA = parsePercent(a[field])
      valB = parsePercent(b[field])
    } else {
      valA = a[field] ?? null
      valB = b[field] ?? null
    }

    // Missing/null values always sort to the end
    if (valA === null && valB === null) return 0
    if (valA === null) return 1
    if (valB === null) return -1

    if (typeof valA === 'number' && typeof valB === 'number') {
      return order === 'asc' ? valA - valB : valB - valA
    }

    const strA = String(valA)
    const strB = String(valB)
    return order === 'asc' ? strA.localeCompare(strB) : strB.localeCompare(strA)
  })
}

const RANDOMIZED_SLOT_CATEGORIES = new Set([
  'bonus',
  'bonuses',
  'top-pick',
  'top-picks',
  'toppick',
  'new',
])

/**
 * Returns true when a slots category uses randomized ordering instead of metric sorting.
 */
export const isRandomizedSlotCategory = (category?: string | null): boolean => {
  if (!category) return false
  return RANDOMIZED_SLOT_CATEGORIES.has(category.toLowerCase().trim())
}

/**
 * Generates a positive 32-bit random seed for per-visit shuffling.
 */
export const createRandomSeed = (): number => {
  if (typeof globalThis.crypto?.getRandomValues === 'function') {
    const buf = new Uint32Array(1)
    globalThis.crypto.getRandomValues(buf)
    if (buf[0] > 0) return buf[0]
  }
  return Math.max(1, Math.floor(Math.random() * 0xffffffff))
}

/**
 * Derives an independent deterministic 32-bit seed per category from a page-level seed.
 */
export const deriveCategorySeed = (baseSeed: number, key: string): number => {
  let hash = (baseSeed >>> 0) || 0x9e3779b9
  const cleanKey = key.toLowerCase().trim()
  for (let i = 0; i < cleanKey.length; i += 1) {
    hash ^= cleanKey.charCodeAt(i)
    hash = Math.imul(hash, 0x01000193) >>> 0
  }
  return hash || 1
}

/**
 * Performs a pure, deterministic Fisher-Yates shuffle for a given 32-bit seed.
 */
export const shuffleWithSeed = <T>(items: readonly T[], seed: number): T[] => {
  const result = [...items]
  let state = (seed >>> 0) || 1
  const nextFloat = (): number => {
    state = (state + 0x6d2b79f5) >>> 0
    let t = Math.imul(state ^ (state >>> 15), 1 | state)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }

  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(nextFloat() * (i + 1))
    const tmp = result[i]
    result[i] = result[j]
    result[j] = tmp
  }
  return result
}

/**
 * Shuffles randomized slot categories (Bonuses, Top Pick, New) using a derived seed,
 * and falls back to sortRailGames for metric-sorted categories (Top, Hot, Cold, Max RTP).
 */
export const sortOrRandomizeSlotGames = <T extends Record<string, any>>(
  games: T[],
  options: { category: string; label?: string; randomSeed: number },
): T[] => {
  if (isRandomizedSlotCategory(options.category)) {
    return shuffleWithSeed(games, deriveCategorySeed(options.randomSeed, options.category))
  }
  return sortRailGames(games, { category: options.category, label: options.label })
}
