export interface Predictor {
  id: string
  name: string
  avatar: string
  badgeCount?: number
  hitRate: number
  sport?: 'basketball' | 'soccer'
}

export interface PredictionOption {
  label: string
  odd: string
}

export interface Prediction {
  id: string
  predictorId: string
  predictorName: string
  predictorAvatar: string
  publishedAgo: string
  hitRate: number
  marketType: '1X2' | 'Over / Under' | 'Handicap'
  sport: 'basketball' | 'soccer'
  league: string
  matchTime: string
  homeTeam: string
  awayTeam: string
  options: [PredictionOption, PredictionOption]
  unlocked?: boolean
}

export const PREDICTORS: Predictor[] = [
  { id: 'aarav', name: 'Aarav', avatar: '/images/predictions/aarav.png', badgeCount: 5, hitRate: 62.1, sport: 'basketball' },
  { id: 'jedaiah', name: 'Jedaiah', avatar: '/images/predictions/jedaiah.png', badgeCount: 4, hitRate: 60.5, sport: 'basketball' },
  { id: 'aslan', name: 'Aslan', avatar: '/images/predictions/aslan.png', badgeCount: 3, hitRate: 59.8, sport: 'soccer' },
  { id: 'ranjit', name: 'Ranjit', avatar: '/images/predictions/ranjit.png', badgeCount: 3, hitRate: 59.4, sport: 'soccer' },
  { id: 'hiroshi', name: 'Hiroshi', avatar: '/images/predictions/hiroshi.png', badgeCount: 3, hitRate: 58.9, sport: 'soccer' },
  { id: 'malik', name: 'Malik', avatar: '/images/predictions/malik.png', badgeCount: 3, hitRate: 58.7, sport: 'basketball' },
  { id: 'kadyn', name: 'Kadyn', avatar: '/images/predictions/kadyn.png', badgeCount: 3, hitRate: 58.5, sport: 'basketball' },
  { id: 'raffi', name: 'Raffi', avatar: '/images/predictions/raffi.png', badgeCount: 3, hitRate: 58.2, sport: 'soccer' },
  { id: 'neele', name: 'Neele', avatar: '/images/predictions/neele.png', badgeCount: 3, hitRate: 57.9, sport: 'soccer' },
  { id: 'fumito', name: 'Fumito', avatar: '/images/predictions/fumito.png', badgeCount: 3, hitRate: 57.5, sport: 'basketball' },
]

export const EXPERT_PREDICTIONS: Prediction[] = [
  {
    id: 'pred-1',
    predictorId: 'tyrek',
    predictorName: 'Tyrek',
    predictorAvatar: '/images/predictions/tyrek.png',
    publishedAgo: 'Published 17 hours ago',
    hitRate: 59.23,
    marketType: '1X2',
    sport: 'basketball',
    league: 'China CBA',
    matchTime: '10-17 20:00',
    homeTeam: 'Xinjiang Flying Tigers',
    awayTeam: 'Qingdao Eagles',
    options: [
      { label: 'H', odd: '2.25' },
      { label: 'A', odd: '1.60' },
    ],
  },
  {
    id: 'pred-2',
    predictorId: 'cisco',
    predictorName: 'Cisco',
    predictorAvatar: '/images/predictions/cisco.png',
    publishedAgo: 'Published 3 hours ago',
    hitRate: 58.54,
    marketType: '1X2',
    sport: 'basketball',
    league: 'Spain Primera FEB',
    matchTime: '10-19 00:30',
    homeTeam: 'CB Estudiantes',
    awayTeam: 'Palencia Baloncesto',
    options: [
      { label: 'H', odd: '1.80' },
      { label: 'A', odd: '1.87' },
    ],
  },
  {
    id: 'pred-3',
    predictorId: 'lester',
    predictorName: 'Lester',
    predictorAvatar: '/images/predictions/lester.png',
    publishedAgo: 'Published 4 hours ago',
    hitRate: 58.34,
    marketType: 'Over / Under',
    sport: 'basketball',
    league: 'Italy LBA Serie A',
    matchTime: '10-19 01:00',
    homeTeam: 'Derthona Basket',
    awayTeam: 'Maxima Roma',
    options: [
      { label: 'Over177.5', odd: '1.86' },
      { label: 'Under177.5', odd: '1.86' },
    ],
  },
  {
    id: 'pred-4',
    predictorId: 'yanisin',
    predictorName: 'Yanisin',
    predictorAvatar: '/images/predictions/yanisin.png',
    publishedAgo: 'Published 5 hours ago',
    hitRate: 58.14,
    marketType: 'Handicap',
    sport: 'basketball',
    league: 'Australia WNBL Women',
    matchTime: '10-18 10:00',
    homeTeam: 'Sydney Flames(W)',
    awayTeam: 'Adelaide Lightning(W)',
    options: [
      { label: '-2.5', odd: '1.87' },
      { label: '+2.5', odd: '1.89' },
    ],
  },
  {
    id: 'pred-5',
    predictorId: 'aslan',
    predictorName: 'Aslan',
    predictorAvatar: '/images/predictions/aslan.png',
    publishedAgo: 'Published 2 hours ago',
    hitRate: 59.8,
    marketType: '1X2',
    sport: 'soccer',
    league: 'Premier League',
    matchTime: '10-19 22:00',
    homeTeam: 'Arsenal',
    awayTeam: 'Chelsea',
    options: [
      { label: 'H', odd: '1.92' },
      { label: 'A', odd: '3.65' },
    ],
  },
  {
    id: 'pred-6',
    predictorId: 'raffi',
    predictorName: 'Raffi',
    predictorAvatar: '/images/predictions/raffi.png',
    publishedAgo: 'Published 6 hours ago',
    hitRate: 58.2,
    marketType: 'Over / Under',
    sport: 'soccer',
    league: 'La Liga',
    matchTime: '10-20 03:00',
    homeTeam: 'Real Madrid',
    awayTeam: 'Barcelona',
    options: [
      { label: 'Over2.5', odd: '1.75' },
      { label: 'Under2.5', odd: '2.05' },
    ],
  },
]

