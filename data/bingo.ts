import { SLOT_CATEGORY_SVGS } from './slots'

export interface BingoGame {
  id: string
  title: string
  provider: string
  providerLogo?: string
  image: string
  badge?: string
  buyBonus?: boolean
  bottomMultiplier?: string
  hotPercent?: string
  coldPercent?: string
  rtpPercent?: string
  livePlayers?: number
  href?: string
  category?: string | string[]
  categories?: string[]
  theme?: string
  features?: string[]
  winningLine?: string
  new?: boolean
  jackpot?: boolean
  Jackpot?: boolean
  jackpotPrice?: number | string
  JackpotPrice?: number | string
}

export interface BingoCategory {
  key: string
  label: string
  shortLabel: string
  iconName?: string
  emoji?: string
  iconImage?: string
  svg?: string
}

export const FREQUENTLY_SEARCHED_BINGO: string[] = [
  'Jackpot Bingo',
  'iRich Bingo',
  'Bingo Carnaval',
  'Fortune Bingo',
  'Lucky Bingo',
  'West Hunter Bingo',
  'Super Bingo',
  'Magic Lamp Bingo',
  'Calaca Bingo',
]

export const BINGO_CATEGORY_SVGS: Record<string, string> = {
  home: SLOT_CATEGORY_SVGS.home,
  top: SLOT_CATEGORY_SVGS.top,
  hot: SLOT_CATEGORY_SVGS.hot,
  cold: SLOT_CATEGORY_SVGS.cold,
  'max-rpt': SLOT_CATEGORY_SVGS['max-rpt'],
}

export const BINGO_CATEGORIES: BingoCategory[] = [
  { key: 'home', label: 'Home', shortLabel: 'Home', iconName: 'House', emoji: '🏠', svg: SLOT_CATEGORY_SVGS.home },
  { key: 'top', label: 'Top', shortLabel: 'Top', iconName: 'Crown', emoji: '👑', iconImage: '/icons/slots/top.webp', svg: SLOT_CATEGORY_SVGS.top },
  { key: 'hot', label: 'Hot Games', shortLabel: 'Hot...', iconName: 'Flame', emoji: '🔥', iconImage: '/icons/slots/hot.webp', svg: SLOT_CATEGORY_SVGS.hot },
  { key: 'cold', label: 'Cold Games', shortLabel: 'Cold...', iconName: 'Snowflake', emoji: '❄️', iconImage: '/icons/slots/cold.webp', svg: SLOT_CATEGORY_SVGS.cold },
  { key: 'max-rpt', label: 'Max RTP', shortLabel: 'Max...', iconName: 'Trophy', emoji: '💵', iconImage: '/icons/slots/max-rtp.webp', svg: SLOT_CATEGORY_SVGS['max-rpt'] },
]

export interface BingoProviderOption {
  key: string
  label: string
  logo?: string
}

export const BINGO_PROVIDERS: BingoProviderOption[] = [
  { key: 'all', label: 'All' },
  { key: 'JILI', label: 'JILI', logo: '/images/providers/jili.webp' },
]

export const normalizeBingoProvider = (provider: string): string => {
  const p = (provider || '').trim().toLowerCase()
  if (p === 'pp' || p === 'pragmatic play' || p === 'pragmatic') return 'pp'
  if (p === 'pg' || p === 'pg soft') return 'pg'
  if (p === 'jdb' || p === 'jpg') return 'jdb'
  if (p === 'jili') return 'jili'
  if (p === 'cq9') return 'cq9'
  if (p === 'red tiger' || p === 'redtiger' || p === 'unknown') return 'red tiger'
  return p
}

export const getBingoProviderLogo = (provider: string): string => {
  const norm = normalizeBingoProvider(provider)
  if (norm === 'pp') return '/images/providers/pp.webp'
  if (norm === 'pg') return '/images/providers/pg.webp'
  if (norm === 'jdb') return '/images/providers/jdb.webp'
  if (norm === 'jili') return '/images/providers/jili.webp'
  if (norm === 'cq9') return '/images/providers/cq9.webp'
  if (norm === 'red tiger') return '/images/providers/red-tiger.webp'
  return ''
}

export const normalizeBingoCategory = (param: string): string => {
  const p = (param || '').toLowerCase()
  if (p === 'bonus' || p === 'bonuses') return 'bonus'
  if (p === 'top-pick' || p === 'top-picks') return 'top-pick'
  if (p === 'max-rpt' || p === 'max-rtp') return 'max-rpt'
  return p
}

export const isGameInBingoCategory = (game: BingoGame, categoryKey: string): boolean => {
  const target = normalizeBingoCategory(categoryKey)
  const rawCats: string[] = Array.isArray(game.category)
    ? game.category
    : (game.categories || (game.category ? [game.category] : []))
  const normCats = rawCats.map(c => normalizeBingoCategory(c))
  const hasCat = normCats.includes(target)

  if (target === 'bonus') {
    return hasCat
  }
  if (target === 'top-pick') {
    return hasCat
  }
  if (target === 'top') {
    return hasCat || (game.livePlayers !== undefined && game.livePlayers > 0)
  }
  if (target === 'new') {
    return hasCat || Boolean(game.new) || game.badge === 'NEW'
  }
  if (target === 'hot') {
    return hasCat || Boolean(game.hotPercent)
  }
  if (target === 'cold') {
    return hasCat || Boolean(game.coldPercent)
  }
  if (target === 'max-rpt') {
    return hasCat || Boolean(game.rtpPercent)
  }

  return hasCat
}

export const BingoGames: BingoGame[] = [
  {
    "id": "jackpot-bingo",
    "title": "Jackpot Bingo",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/jackpot-bingo.webp",
    "category": [
      "top",
      "max-rpt",
      "cold"
    ],
    "livePlayers": 100,
    "rtpPercent": "97.0%",
    "coldPercent": "81.8%",
    "theme": "Entertainment",
    "features": [
      "Buy Spins",
      "Free Spins"
    ]
  },
  {
    "id": "irich-bingo",
    "title": "iRich Bingo",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/irich-bingo.webp",
    "category": [
      "top",
      "max-rpt",
      "cold"
    ],
    "livePlayers": 36,
    "rtpPercent": "97.0%",
    "coldPercent": "95.2%",
    "theme": "Others",
    "features": [
      "Prize Pool"
    ]
  },
  {
    "id": "bingo-carnaval",
    "title": "Bingo Carnaval",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/bingo-carnaval.webp",
    "category": [
      "top",
      "max-rpt",
      "hot"
    ],
    "livePlayers": 22,
    "rtpPercent": "97.0%",
    "hotPercent": "97.9%",
    "theme": "Others",
    "features": [
      "Prize Pool"
    ]
  },
  {
    "id": "fortune-bingo",
    "title": "Fortune Bingo",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/fortune-bingo.webp",
    "category": [
      "top",
      "max-rpt",
      "cold"
    ],
    "livePlayers": 11,
    "rtpPercent": "97.0%",
    "coldPercent": "54.8%",
    "theme": "Others",
    "features": [
      "Prize Pool"
    ]
  },
  {
    "id": "lucky-bingo",
    "title": "Lucky Bingo",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/lucky-bingo.webp",
    "category": [
      "top",
      "max-rpt",
      "cold"
    ],
    "livePlayers": 9,
    "rtpPercent": "97.0%",
    "coldPercent": "61.4%",
    "theme": "Others",
    "features": [
      "Prize Pool"
    ]
  },
  {
    "id": "west-hunter-bingo",
    "title": "West Hunter Bingo",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/west-hunter-bingo.webp",
    "category": [
      "top",
      "max-rpt",
      "hot"
    ],
    "livePlayers": 8,
    "rtpPercent": "97.0%",
    "hotPercent": "101.0%",
    "theme": "Others",
    "features": [
      "Prize Pool"
    ]
  },
  {
    "id": "super-bingo",
    "title": "Super Bingo",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/super-bingo.webp",
    "category": [
      "top",
      "max-rpt",
      "cold"
    ],
    "livePlayers": 6,
    "rtpPercent": "97.0%",
    "coldPercent": "80.0%",
    "theme": "Others",
    "features": [
      "Prize Pool"
    ]
  },
  {
    "id": "magic-lamp-bingo",
    "title": "Magic Lamp Bingo",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/magic-lamp-bingo.webp",
    "category": [
      "top",
      "max-rpt",
      "cold"
    ],
    "livePlayers": 6,
    "rtpPercent": "97.0%",
    "coldPercent": "56.3%",
    "theme": "Others",
    "features": [
      "Prize Pool"
    ]
  },
  {
    "id": "calaca-bingo",
    "title": "Calaca Bingo",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/calaca-bingo.webp",
    "category": [
      "top",
      "max-rpt",
      "cold"
    ],
    "livePlayers": 5,
    "rtpPercent": "97.0%",
    "coldPercent": "71.3%",
    "theme": "Others",
    "features": [
      "Prize Pool"
    ]
  },
  {
    "id": "bingo-adventure",
    "title": "Bingo Adventure",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/bingo-adventure.webp",
    "category": [
      "max-rpt"
    ],
    "rtpPercent": "97.0%",
    "theme": "Adventures",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "25"
  },
  {
    "id": "go-goal-bingo",
    "title": "Go Goal Bingo",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/go-goal-bingo.webp",
    "category": [
      "max-rpt"
    ],
    "rtpPercent": "97.0%",
    "theme": "Sports",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "25"
  },
  {
    "id": "pearls-of-bingo",
    "title": "Pearls of Bingo",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/pearls-of-bingo.webp",
    "category": [
      "max-rpt"
    ],
    "rtpPercent": "97.0%",
    "theme": "Others",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "25"
  },
  {
    "id": "candyland-bingo",
    "title": "Candyland Bingo",
    "provider": "JILI",
    "providerLogo": "/images/providers/jili.webp",
    "image": "/images/slots/candyland-bingo.webp",
    "category": [
      "max-rpt"
    ],
    "rtpPercent": "97.0%",
    "theme": "Foods",
    "features": [
      "Buy Spins",
      "Free Spins"
    ],
    "winningLine": "25"
  }
]
