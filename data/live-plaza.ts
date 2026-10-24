export interface PopularGame {
  id: string
  date: string
  time: string
  league: string
  sport: 'basketball' | 'soccer'
  predictCount: number
  homeTeam: {
    name: string
    logo: string
  }
  awayTeam: {
    name: string
    logo: string
  }
}

export interface LivePlazaPredictionOption {
  label: string
  odd: string
}

export interface LivePlazaPrediction {
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
  options: [LivePlazaPredictionOption, LivePlazaPredictionOption]
}

export const POPULAR_GAMES: PopularGame[] = [
  {
    id: 'pop-1',
    date: '10-21',
    time: '18:00',
    league: 'Japan J1 League',
    sport: 'soccer',
    predictCount: 6,
    homeTeam: { name: 'FC Tokyo', logo: '/images/teams/fc-tokyo.webp' },
    awayTeam: { name: 'Kashiwa Reysol', logo: '/images/teams/kashiwa-reysol.webp' },
  },
  {
    id: 'pop-2',
    date: '10-21',
    time: '18:00',
    league: 'Japan J1 League',
    sport: 'soccer',
    predictCount: 5,
    homeTeam: { name: 'Shimizu S Pulse', logo: '/images/teams/shimizu-s-pulse.webp' },
    awayTeam: { name: 'Machida Zelvia', logo: '/images/teams/machida-zelvia.webp' },
  },
  {
    id: 'pop-3',
    date: '10-21',
    time: '18:00',
    league: 'Japan J1 League',
    sport: 'soccer',
    predictCount: 4,
    homeTeam: { name: 'Fagiano Okayama', logo: '/images/teams/fagiano-okayama.webp' },
    awayTeam: { name: 'Mito Hollyhock', logo: '/images/teams/mito-hollyhock.webp' },
  },
  {
    id: 'pop-4',
    date: '10-22',
    time: '02:00',
    league: 'EuroCup',
    sport: 'basketball',
    predictCount: 3,
    homeTeam: { name: 'Hapoel Jerusalem', logo: '/images/teams/hapoel-jerusalem.webp' },
    awayTeam: { name: 'Rigas Zelli', logo: '/images/teams/rigas-zelli.webp' },
  },
  {
    id: 'pop-5',
    date: '10-21',
    time: '02:00',
    league: 'France Pro B',
    sport: 'basketball',
    predictCount: 3,
    homeTeam: { name: 'Orleans', logo: '/images/teams/orleans.webp' },
    awayTeam: { name: 'ADA Blois', logo: '/images/teams/ada-blois.webp' },
  },
]

export const LIVE_PLAZA_PREDICTIONS: LivePlazaPrediction[] = [
  {
    id: 'pred-kiango',
    predictorId: 'kiango',
    predictorName: 'Kiango',
    predictorAvatar: '/images/predictions/kiango.webp',
    publishedAgo: 'Published 9 hours ago',
    hitRate: 58.55,
    marketType: 'Handicap',
    sport: 'basketball',
    league: 'EuroCup',
    matchTime: '10-22 01:30',
    homeTeam: 'JL Bourg Basket',
    awayTeam: 'Aquila Basket Trento',
    options: [
      { label: '-5.5', odd: '1.85' },
      { label: '+5.5', odd: '1.87' },
    ],
  },
  {
    id: 'pred-aihe',
    predictorId: 'aihe',
    predictorName: 'Aihe',
    predictorAvatar: '/images/predictions/aihe.webp',
    publishedAgo: 'Published 7 hours ago',
    hitRate: 58.26,
    marketType: '1X2',
    sport: 'basketball',
    league: 'EuroCup',
    matchTime: '10-22 02:00',
    homeTeam: 'Hapoel Jerusalem',
    awayTeam: 'Rigas Zelli',
    options: [
      { label: 'H', odd: '1.02' },
      { label: 'A', odd: '11.0' },
    ],
  },
  {
    id: 'pred-rod',
    predictorId: 'rod',
    predictorName: 'Rod',
    predictorAvatar: '/images/predictions/rod.webp',
    publishedAgo: 'Published 4 hours ago',
    hitRate: 58.00,
    marketType: 'Handicap',
    sport: 'basketball',
    league: 'FIBA Champions League',
    matchTime: '10-22 00:00',
    homeTeam: 'AEK Athens BC',
    awayTeam: 'Antwerp Giants',
    options: [
      { label: '-4.5', odd: '1.85' },
      { label: '+4.5', odd: '1.91' },
    ],
  },
  {
    id: 'pred-irving',
    predictorId: 'irving',
    predictorName: 'Irving',
    predictorAvatar: '/images/predictions/irving.webp',
    publishedAgo: 'Published 4 hours ago',
    hitRate: 57.88,
    marketType: '1X2',
    sport: 'basketball',
    league: 'Korea KBL',
    matchTime: '10-21 18:00',
    homeTeam: 'Seoul Samsung Thunders',
    awayTeam: 'Busan KCC Egis',
    options: [
      { label: 'H', odd: '1.42' },
      { label: 'A', odd: '2.75' },
    ],
  },
  {
    id: 'pred-cemach',
    predictorId: 'cemach',
    predictorName: 'Cemach',
    predictorAvatar: '/images/predictions/cemach.webp',
    publishedAgo: 'Published 6 hours ago',
    hitRate: 57.71,
    marketType: 'Over / Under',
    sport: 'soccer',
    league: 'Japan J1 League',
    matchTime: '10-21 18:00',
    homeTeam: 'FC Tokyo',
    awayTeam: 'Kashiwa Reysol',
    options: [
      { label: 'Over2.5', odd: '1.85' },
      { label: 'Under2.5', odd: '1.95' },
    ],
  },
  {
    id: 'pred-feng',
    predictorId: 'feng',
    predictorName: 'Feng',
    predictorAvatar: '/images/predictions/feng.webp',
    publishedAgo: 'Published 3 hours ago',
    hitRate: 57.29,
    marketType: '1X2',
    sport: 'soccer',
    league: 'Japan J1 League',
    matchTime: '10-21 18:00',
    homeTeam: 'Shimizu S Pulse',
    awayTeam: 'Machida Zelvia',
    options: [
      { label: 'H', odd: '2.10' },
      { label: 'A', odd: '3.20' },
    ],
  },
]

