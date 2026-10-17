export interface LiveCasinoTable {
  id: string
  title: string
  image: string
  players: number
  category: string
  href?: string
  stats: {
    shoe: number
    banker: number
    player: number
    tie: number
  }
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

export const LIVE_CASINO_TABLES: LiveCasinoTable[] = [
  {
    id: 'thai-speed-baccarat-c',
    title: 'Thai Speed Baccarat C',
    image: '/images/casino/card1.png',
    players: 23,
    category: 'baccarat',
    stats: { shoe: 45, banker: 15, player: 21, tie: 9 },
  },
  {
    id: 'pd-speed-baccarat-6',
    title: 'PD Speed Baccarat 6',
    image: '/images/casino/card2.png',
    players: 33,
    category: 'baccarat',
    stats: { shoe: 48, banker: 23, player: 22, tie: 3 },
  },
  {
    id: 'bonsai-speed-baccarat-b',
    title: 'Bonsai Speed Baccarat B',
    image: '/images/casino/card3.png',
    players: 20,
    category: 'baccarat',
    stats: { shoe: 2, banker: 1, player: 1, tie: 0 },
  },
  {
    id: 'salon-prive-baccarat-e',
    title: 'Salon Privé Baccarat E',
    image: '/images/casino/card4.png',
    players: 0,
    category: 'baccarat',
    stats: { shoe: 43, banker: 15, player: 19, tie: 9 },
  },
  {
    id: 'speed-baccarat-2',
    title: 'Speed Baccarat 2',
    image: '/images/casino/card5.png',
    players: 45,
    category: 'baccarat',
    stats: { shoe: 35, banker: 18, player: 15, tie: 2 },
  },
  {
    id: 'salon-prive-baccarat-g',
    title: 'Salon Privé Baccarat G',
    image: '/images/casino/card6.png',
    players: 1,
    category: 'baccarat',
    stats: { shoe: 57, banker: 24, player: 27, tie: 6 },
  },
  {
    id: 'speed-baccarat-b',
    title: 'Speed Baccarat B',
    image: '/images/casino/card7.png',
    players: 415,
    category: 'baccarat',
    stats: { shoe: 27, banker: 9, player: 14, tie: 4 },
  },
  {
    id: 'pd-speed-baccarat-1',
    title: 'PD Speed Baccarat 1',
    image: '/images/casino/card8.png',
    players: 178,
    category: 'baccarat',
    stats: { shoe: 11, banker: 3, player: 7, tie: 1 },
  },
]

