export interface Sport {
  key: string
  group: string
  title: string
  description: string
  active: boolean
  has_outrights: boolean
}
export interface SportsEvent {
  id: string
  sport_key: string
  sport_title: string
  commence_time: string
  home_team: string | null
  away_team: string | null
  completed?: boolean
  scores?: { name: string; score: string }[] | null
  bookmakers?: {
    key: string
    title: string
    markets: { key: string; outcomes: { name: string; price: number; point?: number }[] }[]
  }[]
}

