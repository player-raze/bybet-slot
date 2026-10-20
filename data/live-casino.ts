export interface LiveCasinoTable {
  id: string
  title: string
  image: string
  players: number
  category: string
  href?: string
  stats?: {
    shoe: number
    banker: number
    player: number
    tie: number
  }
  wins?: any
}

export interface LiveCasinoCategory {
  key: string
  label: string
}

export const LIVE_CASINO_CATEGORIES: LiveCasinoCategory[] = [
  { key: 'game-show', label: 'Game Show' },
  { key: 'baccarat', label: 'Baccarat' },
  { key: 'dragon-tiger', label: 'Dragon Tiger' },
  { key: 'roulette', label: 'Roulette' },
  { key: 'sicbo', label: 'Sicbo' },
  { key: 'fan-tan', label: 'Fan Tan' },
  { key: 'blackjack', label: 'Blackjack' },
  { key: 'poker', label: 'Poker' },
]

export const GAME_SHOW: LiveCasinoTable[] = [
  {
    id: 'crazy-time',
    title: 'Crazy Time',
    image: '/images/casino/card1.jpg',
    players: 2400,
    category: 'game-show',
  },
  {
    id: 'monopoly-live',
    title: 'Monopoly Live',
    image: '/images/casino/card1.jpg',
    players: 1100,
    category: 'game-show',
  }
]

export const BACCARAT: LiveCasinoTable[] = [
  {
    id: 'thai-speed-baccarat-c',
    title: 'Thai Speed Baccarat C',
    image: '/images/casino/card1.jpg',
    players: 23,
    category: 'baccarat',
    wins: [
      [{ result: 'B', cornerMark: 'blue' }],
      [{ result: 'P', cornerMark: 'red' }, { result: 'P', yellowCenter: true }, { result: 'P', yellowCenter: true }],
      [{ result: 'B' }, { result: 'B', yellowCenter: true }, { result: 'B', cornerMark: 'red' }],
      [{ result: 'P', yellowCenter: true }, { result: 'P', yellowCenter: true }, { result: 'P' }, { result: 'P', yellowCenter: true }],
      [{ result: 'B' }],
      [{ result: 'P', tie: true }],
      [{ result: 'B' }, { result: 'B', cornerMark: 'red' }],
      [{ result: 'P', yellowCenter: true }, { result: 'P' }],
      [{ result: 'B' }],
      [{ result: 'P', yellowCenter: true }, { result: 'P', yellowCenter: true }, { result: 'P', yellowCenter: true, tie: true }],
      [{ result: 'B' }],
      [{ result: 'P' }, { result: 'P' }, { result: 'P', yellowCenter: true }, { result: 'P', yellowCenter: true }, { result: 'P' }, { result: 'P' }],
      [{ result: 'B', cornerMark: 'red' }]
    ],
    stats: { shoe: 45, banker: 15, player: 21, tie: 9 },
  },
  {
    id: 'speed-baccarat-2',
    title: 'Speed Baccarat 2',
    image: '/images/casino/card1.jpg',
    players: 45,
    category: 'baccarat',
    wins: [
      [{ result: 'P', cornerMark: 'red' }],
      [{ result: 'B', yellowCenter: true }],
      [{ result: 'B' }, { result: 'B' }],
      [{ result: 'P' }, { result: 'P', tie: true }],
      [{ result: 'B', cornerMark: 'blue' }],
    ],
    stats: { shoe: 35, banker: 18, player: 15, tie: 2 },
  }
]

export const DRAGON_TIGER: LiveCasinoTable[] = [
  {
    id: 'dragon-tiger-1',
    title: 'Dragon Tiger 1',
    image: '/images/casino/card1.jpg',
    players: 15,
    category: 'dragon-tiger',
    wins: BACCARAT[0].wins,
    stats: { shoe: 30, banker: 10, player: 10, tie: 5 },
  },
  {
    id: 'dragon-tiger-2',
    title: 'Dragon Tiger 2',
    image: '/images/casino/card1.jpg',
    players: 12,
    category: 'dragon-tiger',
    wins: BACCARAT[1].wins,
    stats: { shoe: 20, banker: 5, player: 10, tie: 2 },
  }
]

export const ROULETTE: LiveCasinoTable[] = [
  {
    id: 'speed-roulette',
    title: 'Speed Roulette',
    image: '/images/casino/card1.jpg',
    players: 93,
    category: 'roulette',
    wins: [
      ['R', 7], ['R', 19], ['B', 20], ['B', 31], ['G', 0], ['R', 19], ['B', 20], ['B', 20],
    ],
    stats: { shoe: 0, banker: 0, player: 0, tie: 0 },
  },
  {
    id: 'lightning-roulette',
    title: 'Lightning Roulette',
    image: '/images/casino/card1.jpg',
    players: 150,
    category: 'roulette',
    wins: [
      ['B', 12], ['R', 23], ['B', 14], ['G', 0], ['R', 1], ['B', 32], ['B', 18], ['R', 27],
    ],
    stats: { shoe: 0, banker: 0, player: 0, tie: 0 },
  }
]

export const SICBO: LiveCasinoTable[] = [
  {
    id: 'emperor-sic-bo',
    title: 'Emperor Sic Bo A',
    image: '/images/casino/card1.jpg',
    players: 52,
    category: 'sicbo',
    wins: [
      [[2,3,6], 11, ['G', 'T'], ['B', 'O']],
      [[2,3,6], 11, ['G', 'T'], ['B', 'O']],
      [[2,3,6], 11, ['G', 'T'], ['B', 'O']],
      [[2,3,6], 11, ['G', 'T'], ['B', 'O']],
      [[2,3,6], 11, ['G', 'T'], ['B', 'O']],
      [[2,3,6], 11, ['G', 'T'], ['B', 'O']],
      [[2,3,6], 11, ['G', 'T'], ['B', 'O']],
      [[2,3,6], 11, ['G', 'T'], ['B', 'O']],
      [[2,3,6], 11, ['G', 'T'], ['B', 'O']],
    ],
    stats: { shoe: 0, banker: 0, player: 0, tie: 0 },
  },
  {
    id: 'lightning-sic-bo',
    title: 'Lightning Sic Bo',
    image: '/images/casino/card1.jpg',
    players: 110,
    category: 'sicbo',
    wins: [
      [[4,4,4], 12, ['G', 'T'], ['B', 'E']],
      [[1,2,3], 6, ['R', 'S'], ['S', 'E']],
      [[3,3,5], 11, ['G', 'T'], ['B', 'O']],
      [[2,5,6], 13, ['R', 'S'], ['B', 'O']],
      [[1,1,4], 6, ['G', 'T'], ['S', 'E']],
      [[6,3,2], 11, ['R', 'S'], ['B', 'O']],
      [[5,4,1], 10, ['G', 'T'], ['S', 'E']],
      [[2,2,5], 9, ['R', 'S'], ['S', 'O']],
      [[6,5,4], 15, ['G', 'T'], ['B', 'O']],
    ],
    stats: { shoe: 0, banker: 0, player: 0, tie: 0 },
  }
]

export const FANTAN: LiveCasinoTable[] = [
  {
    id: 'fan-tan',
    title: 'Fan Tan',
    image: '/images/casino/card1.jpg',
    players: 590,
    category: 'fan-tan',
    wins: [1, 1, 1, 2, 4, 3, 4, 2, 1, 2],
  }
]

export const BLACKJACK: LiveCasinoTable[] = [
  {
    id: 'blackjack-vip-9',
    title: 'Blackjack VIP 9',
    image: '/images/casino/card1.jpg',
    players: 6,
    category: 'blackjack',
    wins: [0, 1, 1, 0, 1, 1, 1],
  },
  {
    id: 'speed-blackjack-2',
    title: 'Speed Blackjack 2',
    image: '/images/casino/card1.jpg',
    players: 8,
    category: 'blackjack',
    wins: [1, 0, 0, 1, 1, 0, 1],
  }
]

export const POKER: LiveCasinoTable[] = [
  {
    id: 'poker-1',
    title: 'Live Poker 1',
    image: '/images/casino/card1.jpg',
    players: 5,
    category: 'poker',
  },
  {
    id: 'poker-2',
    title: 'Live Poker 2',
    image: '/images/casino/card1.jpg',
    players: 3,
    category: 'poker',
  }
]

export const LIVE_CASINO_TABLES: LiveCasinoTable[] = [
  ...GAME_SHOW,
  ...BACCARAT,
  ...DRAGON_TIGER,
  ...ROULETTE,
  ...SICBO,
  ...FANTAN,
  ...BLACKJACK,
  ...POKER,
]
