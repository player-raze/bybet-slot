export type IconName =
  | 'badge-percent'
  | 'bitcoin'
  | 'boxes'
  | 'cherry'
  | 'circle-help'
  | 'circle-dollar'
  | 'circle-user'
  | 'coins'
  | 'crown'
  | 'dices'
  | 'flame'
  | 'gamepad-2'
  | 'gem'
  | 'gift'
  | 'headphones'
  | 'heart'
  | 'layout-grid'
  | 'megaphone'
  | 'radio'
  | 'rocket'
  | 'search'
  | 'shield-check'
  | 'sparkles'
  | 'spade'
  | 'swords'
  | 'trophy'
  | 'users'
  | 'wallet-cards'

export interface NavigationItem {
  label: string
  icon: IconName
  href: string
  active?: boolean
  badge?: string
}

export interface NavigationGroup {
  title?: string
  items: NavigationItem[]
}

export interface PromoBanner {
  id: string
  eyebrow: string
  title: string
  copy: string
  action: string
  accent: string
  symbol: string
}

export interface OriginalGame {
  id: string
  title: string
  subtitle: string
  accent: string
  symbol: string
}

export interface CasinoGame {
  id: string
  title: string
  provider: string
  category: string
  accent: string
  symbol: string
  badge?: string
  viewers?: string
}

export interface GameSectionData {
  id: string
  title: string
  icon: IconName
  games: CasinoGame[]
}

export interface WinRow {
  game: string
  gameSymbol: string
  player: string
  time: string
  multiplier: string
  amount: string
  currency: string
}
