export interface JackpotGame {
  id: string
  title: string
  provider: string
  providerLogo?: string
  image: string
  badge?: string
  buyBonus?: boolean
  promo?: boolean
  rtpPercent?: string
  jackpotPool?: string
  livePlayers?: number
  href?: string
}

export interface JackpotSection {
  id: string
  provider: string
  providerLogo: string
  count: number
  jackpotCharacter: 'dragon' | 'genie' | 'panda'
  counterDigits?: string[]
  games: JackpotGame[]
}

export interface JackpotWinner {
  id: string
  providerLogo: string
  username: string
  amount: string
  date: string
}

export const JACKPOT_NAV_TABS = [
  { key: 'all', label: '777', isAll: true },
  { key: 'JILI', label: 'JILI', logo: '/images/providers/jili.png' },
  { key: 'CQ9', label: 'CQ9', logo: '/images/providers/cq9.png' },
  { key: 'JDB', label: 'JDB', logo: '/images/providers/jdb.png' },
]

export const JACKPOT_SECTIONS: JackpotSection[] = [
  {
    id: 'jili',
    provider: 'JILI',
    providerLogo: '/images/providers/jili.png',
    count: 27,
    jackpotCharacter: 'dragon',
    games: [
      {
        id: '3-coin-treasures-2',
        title: '3 Coin Treasures 2',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/fortune-gems-2.webp',
        rtpPercent: '97.0%',
      },
      {
        id: 'romax',
        title: 'RomaX',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/new-releases/spin-and-score-megaways.webp',
        rtpPercent: '97.0%',
      },
      {
        id: 'golden-empire',
        title: 'Golden Empire',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/golden-empire.webp',
        rtpPercent: '97.0%',
      },
      {
        id: 'mega-ace',
        title: 'Mega Ace',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/mega-ace.webp',
        rtpPercent: '97.0%',
      },
      {
        id: 'jili-caishen',
        title: 'JILI CAISHEN',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/new-releases/chinese-new-year-deluxe.webp',
        rtpPercent: '97.0%',
      },
    ],
  },
  {
    id: 'cq9',
    provider: 'CQ9',
    providerLogo: '/images/providers/cq9.png',
    count: 3,
    jackpotCharacter: 'genie',
    counterDigits: ['0', '.', '0', '0'],
    games: [
      {
        id: 'golden-egg-jp',
        title: 'Golden Egg JP',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/new-releases/7-wheel-money.webp',
        rtpPercent: '96.1%',
      },
      {
        id: 'treasure-bowl-jp',
        title: 'Treasure Bowl JP',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/popular/sugar-rush-dice.webp',
        rtpPercent: '96.0%',
      },
      {
        id: 'lucky-bats-jp',
        title: 'Lucky Bats JP',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/popular/sweet-bonanza-1000.webp',
        rtpPercent: '96.1%',
      },
    ],
  },
  {
    id: 'jdb',
    provider: 'JDB',
    providerLogo: '/images/providers/jdb.png',
    count: 30,
    jackpotCharacter: 'panda',
    counterDigits: ['2', ',', '9', '5', '8', '.', '6', '5'],
    games: [
      {
        id: 'piggy-bank',
        title: 'Piggy Bank',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/popular/super-ace.webp',
        rtpPercent: '96.5%',
        buyBonus: true,
        jackpotPool: '₱2,958.65',
      },
      {
        id: 'dragon-soar',
        title: 'Dragon Soar - Hy...',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/new-releases/wild-hop-and-drop.webp',
        rtpPercent: '96.9%',
        buyBonus: true,
        jackpotPool: '₱2,958.65',
      },
      {
        id: 'billionaire',
        title: 'Billionaire',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/new-releases/open-sesame.webp',
        rtpPercent: '96.5%',
        jackpotPool: '₱2,958.65',
      },
      {
        id: 'dragon',
        title: 'Dragon',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/new-releases/fortune-rabbit-xtreme.webp',
        rtpPercent: '96.2%',
        jackpotPool: '₱2,958.65',
      },
      {
        id: 'kingsman',
        title: 'Kingsman',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/new-releases/super-wildrix.webp',
        rtpPercent: '96.0%',
        promo: true,
        jackpotPool: '₱2,958.65',
      },
    ],
  },
]

export const JACKPOT_WINNERS: JackpotWinner[] = [
  { id: '1', providerLogo: '/images/providers/jdb.png', username: 'm******a', amount: 'PHP 640.83', date: '16-10 22:39' },
  { id: '2', providerLogo: '/images/providers/jdb.png', username: 'G******a', amount: 'PHP 700.19', date: '14-10 19:26' },
  { id: '3', providerLogo: '/images/providers/jdb.png', username: 'p******1', amount: 'PHP 1,538.85', date: '13-10 13:36' },
  { id: '4', providerLogo: '/images/providers/jdb.png', username: 's******e', amount: 'PHP 671.24', date: '11-10 19:18' },
  { id: '5', providerLogo: '/images/providers/jdb.png', username: 'k*****n', amount: 'PHP 720.88', date: '08-10 13:32' },
]

