export interface SlotGame {
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

export interface SlotCategory {
  key: string
  label: string
  shortLabel: string
  iconName: string
  emoji?: string
}

export interface SlotSection {
  id: string
  title: string
  emoji?: string
  iconName: string
  count: number
  hasHelp?: boolean
  games: SlotGame[]
}

export interface ReferenceGame {
  title: string
  provider: string
  image: string
}

export const newGames: ReferenceGame[] = [
  { title: 'Wild Hop & Drop', provider: 'Pragmatic Play', image: '/images/games/new-releases/wild-hop-and-drop.webp' },
  { title: 'Spin & Score Megaways', provider: 'Pragmatic Play', image: '/images/games/new-releases/spin-and-score-megaways.webp' },
  { title: 'Super Wildrix', provider: 'Play’n GO', image: '/images/games/new-releases/super-wildrix.webp' },
  { title: 'Snakes & Ladders: Snake Eyes', provider: 'Pragmatic Play', image: '/images/games/new-releases/snakes-and-ladders-snake-eyes.webp' },
  { title: 'Fortune Rabbit Xtreme', provider: 'PG Soft', image: '/images/games/new-releases/fortune-rabbit-xtreme.webp' },
  { title: 'Bigger Bass Blizzard', provider: 'Pragmatic Play', image: '/images/games/new-releases/bigger-bass-blizzard.webp' },
  { title: 'John Hunter: Book of Tut Respin', provider: 'Pragmatic Play', image: '/images/games/new-releases/john-hunter-book-of-tut-respin.webp' },
  { title: 'Chinese New Year Deluxe', provider: 'PG Soft', image: '/images/games/new-releases/chinese-new-year-deluxe.webp' },
]

export const SLOT_CATEGORIES: SlotCategory[] = [
  { key: 'home', label: 'Home', shortLabel: 'Home', iconName: 'House' },
  { key: 'bonuses', label: 'Bonuses', shortLabel: 'Bonu...', iconName: 'Percent', emoji: '🟡' },
  { key: 'top-pick', label: 'Top Pick', shortLabel: 'Top...', iconName: 'ThumbsUp', emoji: '👍' },
  { key: 'top', label: 'Top', shortLabel: 'Top', iconName: 'Crown', emoji: '👑' },
  { key: 'new', label: 'New', shortLabel: 'New', iconName: 'Sparkles', emoji: '🏵️' },
  { key: 'hot', label: 'Hot games', shortLabel: 'Hot...', iconName: 'Flame', emoji: '🔥' },
  { key: 'cold', label: 'Cold Games', shortLabel: 'Cold...', iconName: 'Snowflake', emoji: '❄️' },
  { key: 'max-rtp', label: 'Max RTP', shortLabel: 'Max...', iconName: 'Trophy', emoji: '💵' },
]

export const SLOT_PROVIDERS: { key: string; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'PG', label: 'PG' },
  { key: 'JILI', label: 'JILI' },
  { key: 'PP', label: 'PP' },
  { key: 'CQ9', label: 'CQ9' },
  { key: 'JDB', label: 'JDB' },
  { key: 'Red Tiger', label: 'Red Tiger' },
]

export const SLOT_SECTIONS: SlotSection[] = [
  {
    id: 'bonuses',
    title: 'Bonuses',
    emoji: '🟡',
    iconName: 'Percent',
    count: 334,
    games: [
      {
        id: 'super-ace',
        title: 'Super Ace',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/super-ace.webp',
      },
      {
        id: 'super-ace-deluxe',
        title: 'Super Ace Deluxe',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/super-ace-2.webp',
      },
      {
        id: 'wild-ace',
        title: 'Wild Ace',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/mega-ace.webp',
      },
      {
        id: 'fortune-gems-2',
        title: 'Fortune Gems 2',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/fortune-gems-2.webp',
      },
      {
        id: 'golden-empire',
        title: 'Golden Empire',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/golden-empire.webp',
      },
      {
        id: 'wild-bronco',
        title: 'Wild Bronco',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/new-releases/spin-and-score-megaways.webp',
        badge: 'NEW',
      },
    ],
  },
  {
    id: 'top-pick',
    title: 'Top Pick',
    emoji: '👍',
    iconName: 'ThumbsUp',
    count: 92,
    games: [
      {
        id: 'wild-bandito',
        title: 'Wild Bandito',
        provider: 'PG',
        providerLogo: '/images/providers/pg.png',
        image: '/images/games/new-releases/wild-bandito.webp',
      },
      {
        id: 'golden-empire-tp',
        title: 'Golden Empire',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/golden-empire.webp',
      },
      {
        id: 'sweet-bonanza',
        title: 'Sweet Bonanza',
        provider: 'PP',
        providerLogo: '/images/providers/pp.png',
        image: '/images/games/popular/sweet-bonanza-1000.webp',
      },
      {
        id: 'wheel-money',
        title: 'Wheel Money',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/new-releases/7-wheel-money.webp',
      },
      {
        id: 'open-sesame',
        title: 'Open Sesame',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/new-releases/open-sesame.webp',
        badge: '1200X',
      },
      {
        id: '777-strike',
        title: '777 Strike',
        provider: 'Red Tiger',
        providerLogo: '/images/providers/red-tiger.png',
        image: '/images/games/new-releases/777-strike.webp',
      },
    ],
  },
  {
    id: 'top',
    title: 'Top',
    emoji: '👑',
    iconName: 'Crown',
    count: 406,
    games: [
      {
        id: 'super-ace-top',
        title: 'Super Ace',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/super-ace.webp',
        livePlayers: 4249,
      },
      {
        id: 'super-ace-deluxe-top',
        title: 'Super Ace Deluxe',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/super-ace-2.webp',
        livePlayers: 2979,
      },
      {
        id: 'pinata-wins',
        title: 'Piñata Wins',
        provider: 'PG',
        providerLogo: '/images/providers/pg.png',
        image: '/images/games/new-releases/wild-hop-and-drop.webp',
        livePlayers: 2858,
      },
      {
        id: 'wild-bounty-showdown',
        title: 'Wild Bounty Showdown',
        provider: 'PG',
        providerLogo: '/images/providers/pg.png',
        image: '/images/games/new-releases/john-hunter-book-of-tut-respin.webp',
        livePlayers: 2390,
      },
      {
        id: 'wild-ace-top',
        title: 'Wild Ace',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/mega-ace.webp',
        livePlayers: 1244,
      },
      {
        id: 'wild-bandito-top',
        title: 'Wild Bandito',
        provider: 'PG',
        providerLogo: '/images/providers/pg.png',
        image: '/images/games/new-releases/wild-bandito.webp',
        livePlayers: 982,
      },
    ],
  },
  {
    id: 'new',
    title: 'New',
    emoji: '🏵️',
    iconName: 'Sparkles',
    count: 4,
    games: [
      {
        id: 'wild-bronco',
        title: 'Wild Bronco',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/new-releases/spin-and-score-megaways.webp',
        badge: 'NEW',
      },
      {
        id: 'teeed-up',
        title: 'TEEED UP!',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/new-releases/wild-hop-and-drop.webp',
        badge: 'NEW',
        buyBonus: true,
        bottomMultiplier: '10.000x',
      },
      {
        id: 'jade-legends',
        title: 'Jade Legends',
        provider: 'Play’n GO',
        image: '/images/games/popular/golden-empire.webp',
        badge: 'NEW',
      },
      {
        id: 'super-serge',
        title: 'Super Serge',
        provider: 'Play’n GO',
        image: '/images/games/new-releases/super-wildrix.webp',
        badge: 'NEW',
      },
    ],
  },
  {
    id: 'hot',
    title: 'Hot Games',
    emoji: '🔥',
    iconName: 'Flame',
    count: 108,
    hasHelp: true,
    games: [
      {
        id: 'return-of-the-dead',
        title: 'Return of the Dead',
        provider: 'Play’n GO',
        image: '/images/games/new-releases/john-hunter-book-of-tut-respin.webp',
        hotPercent: '213.1%',
      },
      {
        id: 'chinese-new-year-hot',
        title: 'CHINESE NEW YE...',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/new-releases/chinese-new-year-deluxe.webp',
        hotPercent: '191.4%',
      },
      {
        id: 'good-fortune-m',
        title: 'Good Fortune M',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/popular/fortune-gems-2.webp',
        hotPercent: '180.4%',
      },
      {
        id: 'gates-of-olympus-hot',
        title: 'Gates of Olympus...',
        provider: 'Play’n GO',
        image: '/images/games/popular/gates-of-olympus.webp',
        hotPercent: '170.5%',
      },
      {
        id: 'cash-volt',
        title: 'Cash Volt',
        provider: 'Red Tiger',
        providerLogo: '/images/providers/red-tiger.png',
        image: '/images/games/new-releases/777-strike.webp',
        hotPercent: '166.9%',
      },
      {
        id: 'fortune-gems-hot-2',
        title: 'Fortune Gems 2',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/super-ace.webp',
        hotPercent: '155.2%',
      },
    ],
  },
  {
    id: 'cold',
    title: 'Cold Games',
    emoji: '❄️',
    iconName: 'Snowflake',
    count: 297,
    hasHelp: true,
    games: [
      {
        id: 'dragons-world',
        title: 'DragonsWorld',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/popular/mega-ace.webp',
        badge: '7000X',
      },
      {
        id: 'floating-dragon',
        title: 'Floating Dragon ...',
        provider: 'Play’n GO',
        image: '/images/games/new-releases/lucky-neko.webp',
      },
      {
        id: 'glamorous-girl',
        title: 'GlamorousGirl',
        provider: 'JDB',
        providerLogo: '/images/providers/jdb.png',
        image: '/images/games/new-releases/wild-bandito.webp',
        badge: '3600X',
        coldPercent: '5.0%',
      },
      {
        id: 'bigger-bass-blizzard-cold',
        title: 'Bigger Bass Blizz...',
        provider: 'Play’n GO',
        image: '/images/games/new-releases/bigger-bass-blizzard.webp',
        coldPercent: '13.4%',
      },
      {
        id: 'bee-keeper',
        title: 'Bee Keeper',
        provider: 'PP',
        providerLogo: '/images/providers/pp.png',
        image: '/images/games/new-releases/snakes-and-ladders-snake-eyes.webp',
        coldPercent: '16.2%',
      },
      {
        id: 'sweet-bonanza-cold',
        title: 'Sweet Bonanza',
        provider: 'PP',
        providerLogo: '/images/providers/pp.png',
        image: '/images/games/popular/sweet-bonanza-1000.webp',
        coldPercent: '18.5%',
      },
    ],
  },
  {
    id: 'max-rtp',
    title: 'Max RTP',
    emoji: '💵',
    iconName: 'Trophy',
    count: 1439,
    games: [
      {
        id: 'fruity-carnival',
        title: 'FruityCarnival',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/popular/sugar-rush-dice.webp',
        rtpPercent: '97.5%',
      },
      {
        id: 'jewel-luxury',
        title: 'JewelLuxury',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/popular/sweet-bonanza-1000.webp',
        rtpPercent: '97.5%',
      },
      {
        id: 'xmas',
        title: 'Xmas',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/new-releases/7-wheel-money.webp',
        rtpPercent: '97.5%',
      },
      {
        id: 'legacy-of-olympus',
        title: 'Legacy of Olympus',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/new-releases/open-sesame.webp',
        rtpPercent: '97.5%',
      },
      {
        id: 'mahjong-wilds',
        title: 'Mahjong Wilds',
        provider: 'CQ9',
        providerLogo: '/images/providers/cq9.png',
        image: '/images/games/new-releases/fortune-rabbit-xtreme.webp',
        rtpPercent: '97.5%',
      },
      {
        id: 'golden-empire-rtp',
        title: 'Golden Empire',
        provider: 'JILI',
        providerLogo: '/images/providers/jili.png',
        image: '/images/games/popular/golden-empire.webp',
        rtpPercent: '97.2%',
      },
    ],
  },
]