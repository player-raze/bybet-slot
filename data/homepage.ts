import type { Component } from 'vue'
import {
  BadgeDollarSign,
  BadgeCent,
  BadgePlus,
  CreditCard,
  Crown,
  Flame,
  Gamepad2,
  Gem,
  Gift,
  Globe,
  Grid2X2,
  House,
  Mic2,
  Moon,
  NotebookTabs,
  Spade,
  Table2,
  UserRound,
  Volleyball,
} from 'lucide-vue-next'

export interface RailSubItem {
  label: string
  underMaintenance?: boolean
  icon?: Component
  iconImage?: string
  to: string
  accentColor: string
}

export interface RailItem {
  label: string
  icon: Component
  sectionId: string | null
  to?: string
  children?: RailSubItem[]
  control?: 'language' | 'theme'
  defaultExpanded?: boolean
  surface?: boolean
}

export interface ReferenceGame {
  title: string
  provider: string
  image: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface GameCategory {
  label: string
  icon: Component
  accentColor: string
  to: string
}

export interface HomepageChannel {
  label: string
  iconImage: string
  to: string
}

export const homepageChannels: HomepageChannel[] = [
  { label: 'Slots', iconImage: '/icons/egames/slots.png', to: '/explore/egames/slots' },
  { label: 'Live Casino', iconImage: '/icons/entertainment/live-casino.png', to: '/explore/entertainment/live-casino' },
  { label: 'Sports', iconImage: '/icons/sports/basketball.png', to: '/explore/sports/popular' },
  { label: 'eSports', iconImage: '/icons/entertainment/gaming.png', to: '/explore/entertainment/gaming' },
  { label: 'Lottery', iconImage: '/icons/sports/soccer.png', to: '/explore/sports/soccer' },
]

export const createRailItems = (bybetRedirectUrl: string): RailItem[] => [
  { label: 'Home', icon: House, sectionId: null, to: '/' },
  {
    label: 'Sports',
    icon: Volleyball,
    sectionId: null,
    children: [
      { label: 'Popular', iconImage: '/icons/sports/popular.png', to: '/explore/sports/popular', accentColor: '#ff6948' },
      { label: 'Basketball', iconImage: '/icons/sports/basketball.png', to: '/explore/sports/basketball', accentColor: '#ff8a3d' },
      { label: 'Soccer', iconImage: '/icons/sports/soccer.png', to: '/explore/sports/soccer', accentColor: '#f4f7f5' },
      { label: 'Tennis', iconImage: '/icons/sports/tennis.png', to: '/explore/sports/tennis', accentColor: '#9cda35' },
      { label: 'Baseball', iconImage: '/icons/sports/baseball.png', to: '/explore/sports/baseball', accentColor: '#ff6262' },
      { label: 'Live', iconImage: '/icons/sports/live.png', to: '/explore/sports/live', accentColor: '#48d5a5' },
    ],
  },
  {
    label: 'Entertainment',
    icon: Spade,
    sectionId: null,
    children: [
      { label: 'Live Casino', iconImage: '/icons/entertainment/live-casino.png', to: '/explore/entertainment/live-casino', accentColor: '#e2c37b' },
      { label: 'Gaming', iconImage: '/icons/entertainment/gaming.png', to: '/explore/entertainment/gaming', accentColor: '#777cff', underMaintenance: true },
    ],
  },
  {
    label: 'eGames',
    icon: Gamepad2,
    sectionId: null,
    defaultExpanded: true,
    children: [
      { label: 'Slots', iconImage: '/icons/egames/slots.png', to: '/explore/egames/slots', accentColor: '#f1b33c' },
      { label: 'Bingo', iconImage: '/icons/egames/bingo.png', to: '/explore/egames/bingo', accentColor: '#4d9cff' },
      { label: 'Jackpot', iconImage: '/icons/egames/jackpot.png', to: '/explore/egames/jackpot', accentColor: '#f4bd3e' },
      { label: 'History', iconImage: '/icons/egames/history.png', to: '/explore/egames/history', accentColor: '#45cdb0' },
      { label: 'Customer Service', iconImage: '/icons/egames/customer-service.png', to: '/explore/egames/customer-service', accentColor: '#8bd537' },
    ],
  },
  { label: 'Bonuses', icon: Gift, sectionId: 'promotions' },
  {
    label: 'Live Plaza',
    icon: Mic2,
    sectionId: null,
    children: [
      { label: 'Home', iconImage: '/icons/live-plaza/home.png', to: '/explore/live-plaza/home', accentColor: '#ff9f2f' },
      { label: 'Streamer', iconImage: '/icons/live-plaza/streamer.png', to: '/explore/live-plaza/streamer', accentColor: '#ff9f2f' },
      { label: 'Expert Predictions', iconImage: '/icons/live-plaza/expert-predictions.png', to: '/explore/live-plaza/expert-predictions', accentColor: '#55aef7' },
      { label: 'Funds', iconImage: '/icons/live-plaza/funds.png', to: bybetRedirectUrl, accentColor: '#f1644d' }, //explore/live-plaza/funds
    ],
  },
  { label: 'Me', icon: UserRound, sectionId: null, to: '/explore/account/me' },
  { label: 'Deposit', icon: BadgeDollarSign, sectionId: null, to: bybetRedirectUrl }, ///explore/account/deposit
  { label: 'Withdraw', icon: CreditCard, sectionId: null, to: bybetRedirectUrl }, //explore/account/withdraw
  { label: 'VIP', icon: Crown, sectionId: null, to: bybetRedirectUrl }, //explore/account/vip
  { label: 'History', icon: NotebookTabs, sectionId: null, to: bybetRedirectUrl }, // explore/account/history
  { label: 'English', icon: Globe, sectionId: null, control: 'language', surface: true },
  { label: 'Auto', icon: Moon, sectionId: null, control: 'theme', surface: true },
]

const gamePlaceholderImage = '/brand/bybet-logo.png'

const createGames = (
  titles: string[],
  providers: string[],
): ReferenceGame[] => titles.map((title, index) => ({
  title,
  provider: providers[index] ?? 'Bybet',
  image: gamePlaceholderImage,
}))

export const popularGames: ReferenceGame[] = [
  { title: 'Sweet Bonanza 1000', provider: 'Pragmatic Play', image: '/images/games/popular/sweet-bonanza-1000.webp' },
  { title: 'Golden Empire', provider: 'JILI', image: '/images/games/popular/golden-empire.webp' },
  { title: 'Super Ace', provider: 'JILI', image: '/images/games/popular/super-ace.webp' },
  { title: 'Fortune Gems 2', provider: 'JDB', image: '/images/games/popular/fortune-gems-2.webp' },
  { title: 'Super Ace 2', provider: 'JILI', image: '/images/games/popular/super-ace-2.webp' },
  { title: 'Gates of Olympus', provider: 'Pragmatic Play', image: '/images/games/popular/gates-of-olympus.webp' },
  { title: 'Sugar Rush Dice', provider: 'Pragmatic Play', image: '/images/games/popular/sugar-rush-dice.webp' },
  { title: 'Mega Ace', provider: 'JILI', image: '/images/games/popular/mega-ace.webp' },
]

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

export const recommendedGames: ReferenceGame[] = [
  { title: 'Fortune Gems 2', provider: 'JDB', image: '/images/games/new-releases/fortune-gems-2.webp' },
  { title: 'Sweet Bonanza 1000', provider: 'Pragmatic Play', image: '/images/games/new-releases/sweet-bonanza-1000.webp' },
  { title: 'Golden Empire', provider: 'JILI', image: '/images/games/new-releases/golden-empire.webp' },
  { title: '7 Wheel Money', provider: 'JILI', image: '/images/games/new-releases/7-wheel-money.webp' },
  { title: '777 Strike', provider: 'JILI', image: '/images/games/new-releases/777-strike.webp' },
  { title: 'Lucky Neko', provider: 'PG Soft', image: '/images/games/new-releases/lucky-neko.webp' },
  { title: 'Wild Bandito', provider: 'PG Soft', image: '/images/games/new-releases/wild-bandito.webp' },
  { title: 'Open Sesame', provider: 'PG Soft', image: '/images/games/new-releases/open-sesame.webp' },
]

export const mobileQuickCategories: GameCategory[] = [
  { label: 'Hot Slots', icon: Flame, accentColor: '#ffb02e', to: '/explore/egames/slots' },
  { label: 'Jackpots', icon: Crown, accentColor: '#f4f7f5', to: '/explore/egames/jackpot' },
  { label: 'New Games', icon: BadgePlus, accentColor: '#f4f7f5', to: '/explore/egames/slots' },
  { label: 'Buy Feature', icon: BadgeCent, accentColor: '#f4f7f5', to: '/explore/egames/slots' },
]

export const gameCategories: GameCategory[] = [
  ...mobileQuickCategories,
  { label: 'Megaways', icon: Gem, accentColor: '#f4f7f5', to: '/explore/egames/slots' },
  { label: 'Table Games', icon: Table2, accentColor: '#f4f7f5', to: '/explore/entertainment/gaming' },
  { label: 'All Slots', icon: Grid2X2, accentColor: '#f4f7f5', to: '/explore/egames/slots' },
]

export const providers = [
  'PG',
  'JILI',
  'PP',
  'CQ9',
  'JDB',
  'RED TIGER',
]

export const providerLogoByName: Record<string, string> = {
  PG: '/images/providers/pg.png',
  JILI: '/images/providers/jili.png',
  PP: '/images/providers/pp.png',
  CQ9: '/images/providers/cq9.png',
  JDB: '/images/providers/jdb.png',
  'RED TIGER': '/images/providers/red-tiger.png',
}

export const faqItems: FaqItem[] = [
  {
    question: 'How do I create an account?',
    answer: 'Choose Sign Up and follow the demo registration steps.',
  },
  {
    question: 'How do I make a deposit?',
    answer: 'Deposit controls are presented as a demo and do not process payments.',
  },
  {
    question: 'What games are available at Bybet?',
    answer: 'The interface showcases slots, live tables, original games, and sports categories.',
  },
  {
    question: 'How do I contact customer support?',
    answer: 'Use the support control in the navigation rail or footer.',
  },
]
