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
}

export const FREQUENTLY_SEARCHED_BINGO: string[] = [
  'Super Bingo',
  'Calaca Bingo',
  'Fortune Bingo',
  'iRich Bingo',
  'Bingo Carnaval',
  'Jackpot Bingo',
  'Bingo Bonanza',
  'Mega Ball Bingo',
  'Golden Bingo Deluxe',
  'Lucky Bingo Neko',
]

export interface BingoCategory {
  key: string
  label: string
  shortLabel: string
  iconName?: string
  emoji?: string
  iconImage?: string
  svg?: string
}

export const BINGO_CATEGORY_SVGS: Record<string, string> = {}

export interface BingoSection {
  id: string
  title: string
  emoji?: string
  iconName: string
  count: number
  hasHelp?: boolean
  games: BingoGame[]
}

export const BINGO_CATEGORIES: BingoCategory[] = [
  { key: 'home', label: 'Home', shortLabel: 'Home', iconName: 'House', emoji: '🏠' },
  { key: 'top', label: 'Top', shortLabel: 'Top', iconName: 'Crown', emoji: '👑' },
  { key: 'hot', label: 'Hot Games', shortLabel: 'Hot...', iconName: 'Flame', emoji: '🔥' },
  { key: 'cold', label: 'Cold Games', shortLabel: 'Cold...', iconName: 'Snowflake', emoji: '❄️' },
  { key: 'max-rpt', label: 'Max RTP', shortLabel: 'Max...', iconName: 'Trophy', emoji: '💵' },
]

export const BINGO_PROVIDERS: { key: string; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'JILI', label: 'JILI' },
  { key: 'JDB', label: 'JDB' },
  { key: 'CQ9', label: 'CQ9' },
  { key: 'PP', label: 'PP' },
  { key: 'PG', label: 'PG' },
]

export const BINGO_SECTIONS: BingoSection[] = [
  {
    id: 'top',
    title: 'Top',
    emoji: '👑',
    iconName: 'Crown',
    count: 120,
    games: [
      {
        id: 'jackpot-bingo',
        title: 'Jackpot Bingo',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/golden-empire.webp',
        livePlayers: 47,
      },
      {
        id: 'irich-bingo',
        title: 'iRich Bingo',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/mega-ace.webp',
        livePlayers: 16,
      },
      {
        id: 'bingo-carnaval',
        title: 'Bingo Carnaval',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/sugar-rush-dice.webp',
        livePlayers: 13,
      },
      {
        id: 'super-bingo',
        title: 'Super Bingo',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/super-ace.webp',
        livePlayers: 11,
      },
      {
        id: 'west-hunter-bingo',
        title: 'West Hunter Bingo',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/new-releases/wild-hop-and-drop.webp',
        livePlayers: 6,
      },
      {
        id: 'fortune-bingo',
        title: 'Fortune Bingo',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/fortune-gems-2.webp',
        livePlayers: 25,
      },
      {
        id: 'magic-lamp-bingo',
        title: 'Magic Lamp Bingo',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/new-releases/open-sesame.webp',
        livePlayers: 23,
      },
      {
        id: 'lucky-bingo',
        title: 'Lucky Bingo',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/new-releases/7-wheel-money.webp',
        livePlayers: 22,
      },
      {
        id: 'calaca-bingo',
        title: 'Calaca Bingo',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/super-ace-2.webp',
        livePlayers: 21,
      },
      {
        id: 'candyland-bingo',
        title: 'Candyland Bingo',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/sweet-bonanza-1000.webp',
        livePlayers: 21,
      },
    ],
  },
  {
    id: 'hot',
    title: 'Hot Games',
    emoji: '🔥',
    iconName: 'Flame',
    count: 85,
    hasHelp: true,
    games: [
      {
        id: 'bingo-bonanza',
        title: 'Bingo Bonanza',
        provider: 'PP',
        providerLogo: '/images/providers/pp.png',
        image: '/images/games/popular/sweet-bonanza-1000.webp',
        hotPercent: '208.5%',
      },
      {
        id: 'mega-ball-bingo',
        title: 'Mega Ball Bingo',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/new-releases/chinese-new-year-deluxe.webp',
        hotPercent: '194.2%',
      },
      {
        id: 'golden-bingo-deluxe',
        title: 'Golden Bingo Deluxe',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/new-releases/golden-empire.webp',
        hotPercent: '182.7%',
      },
      {
        id: 'lucky-bingo-neko',
        title: 'Lucky Bingo Neko',
        provider: 'PG',
        providerLogo: '/images/providers/pg.png',
        image: '/images/games/new-releases/lucky-neko.webp',
        hotPercent: '175.0%',
      },
      {
        id: 'wild-bingo-showdown',
        title: 'Wild Bingo Showdown',
        provider: 'PG',
        providerLogo: '/images/providers/pg.png',
        image: '/images/games/new-releases/wild-bandito.webp',
        hotPercent: '168.3%',
      },
      {
        id: 'wheel-bingo-money',
        title: 'Wheel Bingo Money',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/new-releases/7-wheel-money.webp',
        hotPercent: '159.6%',
      },
    ],
  },
  {
    id: 'cold',
    title: 'Cold Games',
    emoji: '❄️',
    iconName: 'Snowflake',
    count: 64,
    hasHelp: true,
    games: [
      {
        id: 'dragons-bingo',
        title: 'Dragons Bingo',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/popular/mega-ace.webp',
        badge: '5000X',
        coldPercent: '4.8%',
      },
      {
        id: 'snakes-bingo',
        title: 'Snakes & Bingo',
        provider: 'PP',
        providerLogo: '/images/providers/pp.png',
        image: '/images/games/new-releases/snakes-and-ladders-snake-eyes.webp',
        badge: '3200X',
        coldPercent: '9.2%',
      },
      {
        id: 'ice-bass-bingo',
        title: 'Ice Bass Bingo',
        provider: 'PP',
        providerLogo: '/images/providers/pp.png',
        image: '/images/games/new-releases/bigger-bass-blizzard.webp',
        coldPercent: '12.6%',
      },
      {
        id: 'open-sesame-bingo',
        title: 'Open Sesame Bingo',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/new-releases/open-sesame.webp',
        coldPercent: '15.4%',
      },
      {
        id: 'olympus-lightning-bingo',
        title: 'Olympus Bingo',
        provider: 'PP',
        providerLogo: '/images/providers/pp.png',
        image: '/images/games/popular/gates-of-olympus.webp',
        coldPercent: '17.8%',
      },
      {
        id: 'strike-777-bingo',
        title: '777 Strike Bingo',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/new-releases/777-strike.webp',
        coldPercent: '19.1%',
      },
    ],
  },
  {
    id: 'max-rtp',
    title: 'Max RTP',
    emoji: '💵',
    iconName: 'Trophy',
    count: 340,
    games: [
      {
        id: 'fruity-bingo-carnival',
        title: 'Fruity Carnival Bingo',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/popular/sugar-rush-dice.webp',
        rtpPercent: '98.1%',
      },
      {
        id: 'jewel-bingo-luxury',
        title: 'Jewel Luxury Bingo',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/popular/sweet-bonanza-1000.webp',
        rtpPercent: '97.9%',
      },
      {
        id: 'xmas-festive-bingo',
        title: 'Xmas Festive Bingo',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/new-releases/7-wheel-money.webp',
        rtpPercent: '97.8%',
      },
      {
        id: 'rabbit-xtreme-bingo',
        title: 'Rabbit Xtreme Bingo',
        provider: 'PG',
        providerLogo: '/images/providers/pg.png',
        image: '/images/games/new-releases/fortune-rabbit-xtreme.webp',
        rtpPercent: '97.7%',
      },
      {
        id: 'tut-respin-bingo',
        title: 'Book of Tut Bingo',
        provider: 'PP',
        providerLogo: '/images/providers/pp.png',
        image: '/images/games/new-releases/john-hunter-book-of-tut-respin.webp',
        rtpPercent: '97.6%',
      },
      {
        id: 'golden-empire-bingo',
        title: 'Golden Empire Bingo',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/golden-empire.webp',
        rtpPercent: '97.5%',
      },
    ],
  },
]

