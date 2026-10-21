import type { Sport, SportsEvent } from '~/types/sports'

const now = () => Date.now()
const hoursFromNow = (h: number) => new Date(now() + h * 3600 * 1000).toISOString()
const hoursAgo = (h: number) => new Date(now() - h * 3600 * 1000).toISOString()

export const getTournamentLogo = (sport: Sport | string | undefined | null): string => {
  if (!sport) return '/images/sports/popular.webp'
  if (typeof sport === 'object' && sport.logo) return sport.logo

  const key = (typeof sport === 'object' ? `${sport.key} ${sport.title} ${sport.group}` : sport).toLowerCase()

  if (key.includes('nba')) return '/images/sports/nba.webp'
  if (key.includes('euroleague')) return '/images/sports/euroleague.webp'
  if (key.includes('ncaa') || key.includes('ncaab') || key.includes('march_madness')) return '/images/sports/ncaab.webp'
  if (key.includes('pba')) return '/images/sports/pba.webp'
  if (key.includes('epl') || key.includes('premier_league') || key.includes('premier league')) return '/images/sports/premier-league.webp'
  if (key.includes('champions_league') || key.includes('champs_league') || key.includes('uefa_champions') || key.includes('ucl')) return '/images/sports/uefa-champions-league.webp'
  if (key.includes('bundesliga')) return '/images/sports/bundesliga.webp'
  if (key.includes('serie_a') || key.includes('serie a')) return '/images/sports/serie-a.webp'
  if (key.includes('la_liga') || key.includes('laliga') || key.includes('la liga')) return '/images/sports/la-liga.webp'
  if (key.includes('ligue_1') || key.includes('ligue 1') || key.includes('ligue_one')) return '/images/sports/ligue-1.webp'
  if (key.includes('mlb') || key.includes('world_series')) return '/images/sports/mlb.webp'
  if (key.includes('npb')) return '/images/sports/npb.webp'
  if (key.includes('wimbledon')) return '/images/sports/atp.webp'
  if (key.includes('us_open') || key.includes('us open')) return '/images/sports/us-open.webp'
  if (key.includes('aus_open') || key.includes('australian')) return '/images/sports/atp.webp'
  if (key.includes('roland_garros') || key.includes('french_open')) return '/images/sports/roland-garros.webp'
  if (key.includes('atp')) return '/images/sports/atp.webp'
  if (key.includes('wta')) return '/images/sports/wta.webp'
  if (key.includes('utr')) return '/images/sports/utr.webp'
  if (key.includes('nfl')) return '/images/sports/nfl.webp'
  if (key.includes('nbl')) return '/images/sports/nbl.webp'

  if (key.includes('basketball')) return '/icons/sports/basketball.png'
  if (key.includes('soccer') || key.includes('football')) return '/icons/sports/soccer.png'
  if (key.includes('tennis')) return '/icons/sports/tennis.png'
  if (key.includes('baseball')) return '/icons/sports/baseball.png'

  return '/images/sports/popular.webp'
}

export const getSportBall = (sport: Sport | string | undefined | null, sportParam?: string): string => {
  if (!sport && !sportParam) return ''
  const str = `${sport && typeof sport === 'object' ? `${sport.group || ''} ${sport.key || ''} ${sport.title || ''}` : (sport || '')} ${sportParam || ''}`.toLowerCase()

  if (str.includes('basketball') || str.includes('nba') || str.includes('euroleague') || str.includes('ncaa') || str.includes('pba')) {
    return '/icons/sports/basketball.png'
  }
  if (str.includes('soccer') || str.includes('epl') || str.includes('bundesliga') || str.includes('serie_a') || str.includes('la_liga') || str.includes('uefa') || str.includes('ligue') || str.includes('football')) {
    return '/icons/sports/soccer.png'
  }
  if (str.includes('tennis') || str.includes('atp') || str.includes('wta') || str.includes('utr') || str.includes('wimbledon') || str.includes('open')) {
    return '/icons/sports/tennis.png'
  }
  if (str.includes('baseball') || str.includes('mlb') || str.includes('npb')) {
    return '/icons/sports/baseball.png'
  }
  return ''
}

export const SAMPLE_SPORTS: Sport[] = [
  // Basketball Leagues
  {
    key: 'basketball_nba',
    group: 'Basketball',
    title: 'NBA',
    description: 'National Basketball Association',
    active: true,
    has_outrights: false,
    logo: '/images/sports/nba.webp',
  },
  {
    key: 'basketball_euroleague',
    group: 'Basketball',
    title: 'EuroLeague',
    description: 'European Basketball Championship',
    active: true,
    has_outrights: false,
    logo: '/images/sports/euroleague.webp',
  },
  {
    key: 'basketball_pba',
    group: 'Basketball',
    title: 'PBA Philippine Cup',
    description: 'Philippine Basketball Association',
    active: true,
    has_outrights: false,
    logo: '/images/sports/pba.webp',
  },
  {
    key: 'basketball_preseason',
    group: 'Basketball',
    title: 'NBA Preseason',
    description: 'NBA Warm-up Exhibition Games',
    active: true,
    has_outrights: false,
    logo: '/images/sports/nba.webp',
  },

  // Basketball Outrights
  {
    key: 'basketball_nba_championship',
    group: 'Basketball',
    title: 'NBA Championship 2026/27',
    description: 'National Basketball Association Winner',
    active: true,
    has_outrights: true,
    logo: '/images/sports/nba.webp',
  },
  {
    key: 'basketball_euroleague_winner',
    group: 'Basketball',
    title: 'EuroLeague Championship',
    description: 'European Championship Winner',
    active: true,
    has_outrights: true,
    logo: '/images/sports/euroleague.webp',
  },

  // Soccer Leagues
  {
    key: 'soccer_epl',
    group: 'Soccer',
    title: 'Premier League',
    description: 'English Premier League',
    active: true,
    has_outrights: false,
    logo: '/images/sports/premier-league.webp',
  },
  {
    key: 'soccer_uefa_champions_league',
    group: 'Soccer',
    title: 'UEFA Champions League',
    description: 'European Club Championship',
    active: true,
    has_outrights: false,
    logo: '/images/sports/uefa-champions-league.webp',
  },
  {
    key: 'soccer_germany_bundesliga',
    group: 'Soccer',
    title: 'Bundesliga',
    description: 'German Bundesliga',
    active: true,
    has_outrights: false,
    logo: '/images/sports/bundesliga.webp',
  },
  {
    key: 'soccer_italy_serie_a',
    group: 'Soccer',
    title: 'Serie A',
    description: 'Italian Serie A',
    active: true,
    has_outrights: false,
    logo: '/images/sports/serie-a.webp',
  },
  {
    key: 'soccer_spain_la_liga',
    group: 'Soccer',
    title: 'La Liga',
    description: 'Spanish Primera Division',
    active: true,
    has_outrights: false,
    logo: '/images/sports/la-liga.webp',
  },
  {
    key: 'soccer_france_ligue_one',
    group: 'Soccer',
    title: 'Ligue 1',
    description: 'French Ligue 1',
    active: true,
    has_outrights: false,
    logo: '/images/sports/ligue-1.webp',
  },

  // Soccer Outrights
  {
    key: 'soccer_epl_winner',
    group: 'Soccer',
    title: 'Premier League Winner 2026/27',
    description: 'English Premier League Outright',
    active: true,
    has_outrights: true,
    logo: '/images/sports/premier-league.webp',
  },
  {
    key: 'soccer_uefa_champions_league_winner',
    group: 'Soccer',
    title: 'UEFA Champions League Winner',
    description: 'Champions League Outright',
    active: true,
    has_outrights: true,
    logo: '/images/sports/uefa-champions-league.webp',
  },
  {
    key: 'soccer_germany_bundesliga_winner',
    group: 'Soccer',
    title: 'Bundesliga Winner',
    description: 'Bundesliga Outright',
    active: true,
    has_outrights: true,
    logo: '/images/sports/bundesliga.webp',
  },
  {
    key: 'soccer_italy_serie_a_winner',
    group: 'Soccer',
    title: 'Serie A Winner',
    description: 'Serie A Outright',
    active: true,
    has_outrights: true,
    logo: '/images/sports/serie-a.webp',
  },
  {
    key: 'soccer_spain_la_liga_winner',
    group: 'Soccer',
    title: 'La Liga Winner',
    description: 'La Liga Outright',
    active: true,
    has_outrights: true,
    logo: '/images/sports/la-liga.webp',
  },

  // Baseball Leagues
  {
    key: 'baseball_mlb',
    group: 'Baseball',
    title: 'MLB',
    description: 'Major League Baseball',
    active: true,
    has_outrights: false,
    logo: '/images/sports/mlb.webp',
  },
  {
    key: 'baseball_npb',
    group: 'Baseball',
    title: 'NPB',
    description: 'Nippon Professional Baseball',
    active: true,
    has_outrights: false,
    logo: '/images/sports/npb.webp',
  },

  // Baseball Outrights
  {
    key: 'baseball_mlb_world_series',
    group: 'Baseball',
    title: 'MLB World Series 2026',
    description: 'World Series Winner Outright',
    active: true,
    has_outrights: true,
    logo: '/images/sports/mlb.webp',
  },

  // Tennis Leagues
  {
    key: 'tennis_atp_wimbledon',
    group: 'Tennis',
    title: 'ATP Wimbledon',
    description: 'Grand Slam Championships',
    active: true,
    has_outrights: false,
    logo: '/images/sports/atp.webp',
  },
  {
    key: 'tennis_atp_aus_open',
    group: 'Tennis',
    title: 'ATP Australian Open',
    description: 'Grand Slam Tournament',
    active: true,
    has_outrights: false,
    logo: '/images/sports/atp.webp',
  },
  {
    key: 'tennis_wta_us_open',
    group: 'Tennis',
    title: 'WTA US Open',
    description: 'Grand Slam Tournament',
    active: true,
    has_outrights: false,
    logo: '/images/sports/us-open.webp',
  },

  // Tennis Outrights
  {
    key: 'tennis_atp_wimbledon_winner',
    group: 'Tennis',
    title: 'ATP Wimbledon Winner 2026',
    description: 'Grand Slam Championships Outright',
    active: true,
    has_outrights: true,
    logo: '/images/sports/atp.webp',
  },
  {
    key: 'tennis_atp_aus_open_winner',
    group: 'Tennis',
    title: 'ATP Australian Open Winner 2027',
    description: 'Grand Slam Tournament Outright',
    active: true,
    has_outrights: true,
    logo: '/images/sports/atp.webp',
  },
  {
    key: 'tennis_wta_us_open_winner',
    group: 'Tennis',
    title: 'WTA US Open Winner 2026',
    description: 'Grand Slam Tournament Outright',
    active: true,
    has_outrights: true,
    logo: '/images/sports/us-open.webp',
  },
]

export const SAMPLE_MATCH_EVENTS: Record<string, SportsEvent[]> = {
  // Basketball NBA
  basketball_nba: [
    {
      id: 'nba_game_1',
      sport_key: 'basketball_nba',
      sport_title: 'NBA',
      commence_time: hoursFromNow(2.5),
      home_team: 'Boston Celtics',
      away_team: 'Los Angeles Lakers',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Boston Celtics', price: 1.68 },
                { name: 'Los Angeles Lakers', price: 2.25 },
              ],
            },
            {
              key: 'spreads',
              outcomes: [
                { name: 'Boston Celtics', price: 1.91, point: -4.5 },
                { name: 'Los Angeles Lakers', price: 1.91, point: 4.5 },
              ],
            },
            {
              key: 'totals',
              outcomes: [
                { name: 'Over', price: 1.90, point: 226.5 },
                { name: 'Under', price: 1.90, point: 226.5 },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'nba_game_2',
      sport_key: 'basketball_nba',
      sport_title: 'NBA',
      commence_time: hoursFromNow(5),
      home_team: 'Golden State Warriors',
      away_team: 'Denver Nuggets',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Golden State Warriors', price: 2.10 },
                { name: 'Denver Nuggets', price: 1.78 },
              ],
            },
            {
              key: 'spreads',
              outcomes: [
                { name: 'Golden State Warriors', price: 1.91, point: 2.5 },
                { name: 'Denver Nuggets', price: 1.91, point: -2.5 },
              ],
            },
            {
              key: 'totals',
              outcomes: [
                { name: 'Over', price: 1.90, point: 228.0 },
                { name: 'Under', price: 1.90, point: 228.0 },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'nba_game_3',
      sport_key: 'basketball_nba',
      sport_title: 'NBA',
      commence_time: hoursFromNow(23),
      home_team: 'Dallas Mavericks',
      away_team: 'Phoenix Suns',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Dallas Mavericks', price: 1.82 },
                { name: 'Phoenix Suns', price: 2.05 },
              ],
            },
            {
              key: 'spreads',
              outcomes: [
                { name: 'Dallas Mavericks', price: 1.91, point: -2.0 },
                { name: 'Phoenix Suns', price: 1.91, point: 2.0 },
              ],
            },
            {
              key: 'totals',
              outcomes: [
                { name: 'Over', price: 1.88, point: 224.5 },
                { name: 'Under', price: 1.92, point: 224.5 },
              ],
            },
          ],
        },
      ],
    },
  ],

  // Basketball EuroLeague
  basketball_euroleague: [
    {
      id: 'euro_game_1',
      sport_key: 'basketball_euroleague',
      sport_title: 'EuroLeague',
      commence_time: hoursFromNow(4),
      home_team: 'Real Madrid Baloncesto',
      away_team: 'Panathinaikos BC',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Real Madrid Baloncesto', price: 1.72 },
                { name: 'Panathinaikos BC', price: 2.15 },
              ],
            },
            {
              key: 'spreads',
              outcomes: [
                { name: 'Real Madrid Baloncesto', price: 1.90, point: -3.5 },
                { name: 'Panathinaikos BC', price: 1.90, point: 3.5 },
              ],
            },
            {
              key: 'totals',
              outcomes: [
                { name: 'Over', price: 1.90, point: 165.5 },
                { name: 'Under', price: 1.90, point: 165.5 },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'euro_game_2',
      sport_key: 'basketball_euroleague',
      sport_title: 'EuroLeague',
      commence_time: hoursFromNow(6.5),
      home_team: 'FC Barcelona Basquet',
      away_team: 'Olympiacos BC',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'FC Barcelona Basquet', price: 1.85 },
                { name: 'Olympiacos BC', price: 1.98 },
              ],
            },
            {
              key: 'spreads',
              outcomes: [
                { name: 'FC Barcelona Basquet', price: 1.91, point: -1.5 },
                { name: 'Olympiacos BC', price: 1.91, point: 1.5 },
              ],
            },
            {
              key: 'totals',
              outcomes: [
                { name: 'Over', price: 1.89, point: 162.0 },
                { name: 'Under', price: 1.89, point: 162.0 },
              ],
            },
          ],
        },
      ],
    },
  ],

  // Basketball NCAAB
  basketball_ncaab: [
    {
      id: 'ncaab_game_1',
      sport_key: 'basketball_ncaab',
      sport_title: "NCAA Men's Basketball",
      commence_time: hoursFromNow(8),
      home_team: 'Duke Blue Devils',
      away_team: 'North Carolina Tar Heels',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Duke Blue Devils', price: 1.65 },
                { name: 'North Carolina Tar Heels', price: 2.30 },
              ],
            },
            {
              key: 'spreads',
              outcomes: [
                { name: 'Duke Blue Devils', price: 1.91, point: -5.0 },
                { name: 'North Carolina Tar Heels', price: 1.91, point: 5.0 },
              ],
            },
            {
              key: 'totals',
              outcomes: [
                { name: 'Over', price: 1.90, point: 154.5 },
                { name: 'Under', price: 1.90, point: 154.5 },
              ],
            },
          ],
        },
      ],
    },
  ],

  // Soccer Premier League
  soccer_epl: [
    {
      id: 'epl_game_1',
      sport_key: 'soccer_epl',
      sport_title: 'Premier League',
      commence_time: hoursFromNow(1.5),
      home_team: 'Arsenal',
      away_team: 'Chelsea',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Arsenal', price: 1.85 },
                { name: 'Draw', price: 3.60 },
                { name: 'Chelsea', price: 4.20 },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'epl_game_2',
      sport_key: 'soccer_epl',
      sport_title: 'Premier League',
      commence_time: hoursFromNow(4),
      home_team: 'Manchester City',
      away_team: 'Liverpool',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Manchester City', price: 2.10 },
                { name: 'Draw', price: 3.50 },
                { name: 'Liverpool', price: 3.30 },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'epl_game_3',
      sport_key: 'soccer_epl',
      sport_title: 'Premier League',
      commence_time: hoursFromNow(26),
      home_team: 'Manchester United',
      away_team: 'Tottenham Hotspur',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Manchester United', price: 2.45 },
                { name: 'Draw', price: 3.40 },
                { name: 'Tottenham Hotspur', price: 2.85 },
              ],
            },
          ],
        },
      ],
    },
  ],

  // Soccer UEFA Champions League
  soccer_uefa_champions_league: [
    {
      id: 'ucl_game_1',
      sport_key: 'soccer_uefa_champions_league',
      sport_title: 'UEFA Champions League',
      commence_time: hoursFromNow(3),
      home_team: 'Real Madrid',
      away_team: 'Bayern Munich',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Real Madrid', price: 2.25 },
                { name: 'Draw', price: 3.50 },
                { name: 'Bayern Munich', price: 3.10 },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'ucl_game_2',
      sport_key: 'soccer_uefa_champions_league',
      sport_title: 'UEFA Champions League',
      commence_time: hoursFromNow(7),
      home_team: 'Paris Saint-Germain',
      away_team: 'Inter Milan',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Paris Saint-Germain', price: 2.05 },
                { name: 'Draw', price: 3.45 },
                { name: 'Inter Milan', price: 3.55 },
              ],
            },
          ],
        },
      ],
    },
  ],

  // Soccer Bundesliga
  soccer_germany_bundesliga: [
    {
      id: 'bdes_game_1',
      sport_key: 'soccer_germany_bundesliga',
      sport_title: 'Bundesliga',
      commence_time: hoursFromNow(4.5),
      home_team: 'Bayer Leverkusen',
      away_team: 'Borussia Dortmund',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Bayer Leverkusen', price: 1.95 },
                { name: 'Draw', price: 3.75 },
                { name: 'Borussia Dortmund', price: 3.70 },
              ],
            },
          ],
        },
      ],
    },
  ],

  // Soccer Serie A
  soccer_italy_serie_a: [
    {
      id: 'seriea_game_1',
      sport_key: 'soccer_italy_serie_a',
      sport_title: 'Serie A',
      commence_time: hoursFromNow(5.5),
      home_team: 'Inter Milan',
      away_team: 'AC Milan',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Inter Milan', price: 2.15 },
                { name: 'Draw', price: 3.30 },
                { name: 'AC Milan', price: 3.45 },
              ],
            },
          ],
        },
      ],
    },
  ],

  // Soccer La Liga
  soccer_spain_la_liga: [
    {
      id: 'laliga_game_1',
      sport_key: 'soccer_spain_la_liga',
      sport_title: 'La Liga',
      commence_time: hoursFromNow(6),
      home_team: 'Barcelona',
      away_team: 'Atletico Madrid',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Barcelona', price: 1.90 },
                { name: 'Draw', price: 3.60 },
                { name: 'Atletico Madrid', price: 3.90 },
              ],
            },
          ],
        },
      ],
    },
  ],

  // Baseball MLB
  baseball_mlb: [
    {
      id: 'mlb_game_1',
      sport_key: 'baseball_mlb',
      sport_title: 'MLB',
      commence_time: hoursFromNow(3.5),
      home_team: 'Los Angeles Dodgers',
      away_team: 'New York Yankees',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Los Angeles Dodgers', price: 1.74 },
                { name: 'New York Yankees', price: 2.15 },
              ],
            },
            {
              key: 'spreads',
              outcomes: [
                { name: 'Los Angeles Dodgers', price: 2.10, point: -1.5 },
                { name: 'New York Yankees', price: 1.75, point: 1.5 },
              ],
            },
            {
              key: 'totals',
              outcomes: [
                { name: 'Over', price: 1.91, point: 8.5 },
                { name: 'Under', price: 1.91, point: 8.5 },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'mlb_game_2',
      sport_key: 'baseball_mlb',
      sport_title: 'MLB',
      commence_time: hoursFromNow(6),
      home_team: 'Philadelphia Phillies',
      away_team: 'Houston Astros',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Philadelphia Phillies', price: 1.83 },
                { name: 'Houston Astros', price: 2.00 },
              ],
            },
            {
              key: 'spreads',
              outcomes: [
                { name: 'Philadelphia Phillies', price: 2.20, point: -1.5 },
                { name: 'Houston Astros', price: 1.68, point: 1.5 },
              ],
            },
            {
              key: 'totals',
              outcomes: [
                { name: 'Over', price: 1.95, point: 7.5 },
                { name: 'Under', price: 1.85, point: 7.5 },
              ],
            },
          ],
        },
      ],
    },
  ],

  // Baseball NPB
  baseball_npb: [
    {
      id: 'npb_game_1',
      sport_key: 'baseball_npb',
      sport_title: 'NPB',
      commence_time: hoursFromNow(5),
      home_team: 'Yomiuri Giants',
      away_team: 'Hanshin Tigers',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Yomiuri Giants', price: 1.85 },
                { name: 'Hanshin Tigers', price: 1.95 },
              ],
            },
            {
              key: 'spreads',
              outcomes: [
                { name: 'Yomiuri Giants', price: 2.25, point: -1.5 },
                { name: 'Hanshin Tigers', price: 1.65, point: 1.5 },
              ],
            },
            {
              key: 'totals',
              outcomes: [
                { name: 'Over', price: 1.90, point: 6.5 },
                { name: 'Under', price: 1.90, point: 6.5 },
              ],
            },
          ],
        },
      ],
    },
  ],

  // Tennis Wimbledon
  tennis_atp_wimbledon: [
    {
      id: 'wimb_game_1',
      sport_key: 'tennis_atp_wimbledon',
      sport_title: 'ATP Wimbledon',
      commence_time: hoursFromNow(2),
      home_team: 'Carlos Alcaraz',
      away_team: 'Jannik Sinner',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Carlos Alcaraz', price: 1.78 },
                { name: 'Jannik Sinner', price: 2.05 },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'wimb_game_2',
      sport_key: 'tennis_atp_wimbledon',
      sport_title: 'ATP Wimbledon',
      commence_time: hoursFromNow(4.5),
      home_team: 'Novak Djokovic',
      away_team: 'Daniil Medvedev',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Novak Djokovic', price: 1.62 },
                { name: 'Daniil Medvedev', price: 2.30 },
              ],
            },
          ],
        },
      ],
    },
  ],

  // Tennis Australian Open
  tennis_atp_aus_open: [
    {
      id: 'aus_game_1',
      sport_key: 'tennis_atp_aus_open',
      sport_title: 'ATP Australian Open',
      commence_time: hoursFromNow(6),
      home_team: 'Alexander Zverev',
      away_team: 'Stefanos Tsitsipas',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Alexander Zverev', price: 1.75 },
                { name: 'Stefanos Tsitsipas', price: 2.10 },
              ],
            },
          ],
        },
      ],
    },
  ],

  // Tennis WTA US Open
  tennis_wta_us_open: [
    {
      id: 'uswta_game_1',
      sport_key: 'tennis_wta_us_open',
      sport_title: 'WTA US Open',
      commence_time: hoursFromNow(3.5),
      home_team: 'Iga Swiatek',
      away_team: 'Aryna Sabalenka',
      bookmakers: [
        {
          key: 'bybet_bookmaker',
          title: 'ByBet Sportsbook',
          markets: [
            {
              key: 'h2h',
              outcomes: [
                { name: 'Iga Swiatek', price: 1.82 },
                { name: 'Aryna Sabalenka', price: 2.00 },
              ],
            },
          ],
        },
      ],
    },
  ],
}

// Live Inplay sample events (with scores and started in past)
export const SAMPLE_INPLAY_EVENTS: SportsEvent[] = [
  {
    id: 'live_nba_1',
    sport_key: 'basketball_nba',
    sport_title: 'NBA',
    commence_time: hoursAgo(1.2),
    home_team: 'Milwaukee Bucks',
    away_team: 'Miami Heat',
    completed: false,
    scores: [
      { name: 'Milwaukee Bucks', score: '84' },
      { name: 'Miami Heat', score: '79' },
    ],
    bookmakers: [
      {
        key: 'bybet_live',
        title: 'ByBet Live',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Milwaukee Bucks', price: 1.45 },
              { name: 'Miami Heat', price: 2.70 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'live_nba_2',
    sport_key: 'basketball_nba',
    sport_title: 'NBA',
    commence_time: hoursAgo(0.6),
    home_team: 'Los Angeles Lakers',
    away_team: 'Boston Celtics',
    completed: false,
    scores: [
      { name: 'Los Angeles Lakers', score: '76' },
      { name: 'Boston Celtics', score: '72' },
    ],
    bookmakers: [
      {
        key: 'bybet_live',
        title: 'ByBet Live',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Los Angeles Lakers', price: 1.78 },
              { name: 'Boston Celtics', price: 2.10 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'live_nba_3',
    sport_key: 'basketball_nba',
    sport_title: 'NBA',
    commence_time: hoursAgo(1.9),
    home_team: 'Golden State Warriors',
    away_team: 'Denver Nuggets',
    completed: false,
    scores: [
      { name: 'Golden State Warriors', score: '104' },
      { name: 'Denver Nuggets', score: '101' },
    ],
    bookmakers: [
      {
        key: 'bybet_live',
        title: 'ByBet Live',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Golden State Warriors', price: 1.62 },
              { name: 'Denver Nuggets', price: 2.35 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'live_soccer_1',
    sport_key: 'soccer_epl',
    sport_title: 'Premier League',
    commence_time: hoursAgo(0.8),
    home_team: 'Manchester City',
    away_team: 'Liverpool',
    completed: false,
    scores: [
      { name: 'Manchester City', score: '2' },
      { name: 'Liverpool', score: '1' },
    ],
    bookmakers: [
      {
        key: 'bybet_live',
        title: 'ByBet Live',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Manchester City', price: 1.35 },
              { name: 'Draw', price: 4.80 },
              { name: 'Liverpool', price: 7.50 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'live_tennis_1',
    sport_key: 'tennis_atp_wimbledon',
    sport_title: 'ATP Wimbledon',
    commence_time: hoursAgo(1.5),
    home_team: 'Carlos Alcaraz',
    away_team: 'Jannik Sinner',
    completed: false,
    scores: [
      { name: 'Carlos Alcaraz', score: '2' },
      { name: 'Jannik Sinner', score: '1' },
    ],
    bookmakers: [
      {
        key: 'bybet_live',
        title: 'ByBet Live',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Carlos Alcaraz', price: 1.40 },
              { name: 'Jannik Sinner', price: 2.85 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'live_mlb_1',
    sport_key: 'baseball_mlb',
    sport_title: 'MLB',
    commence_time: hoursAgo(2.1),
    home_team: 'Los Angeles Dodgers',
    away_team: 'San Francisco Giants',
    completed: false,
    scores: [
      { name: 'Los Angeles Dodgers', score: '5' },
      { name: 'San Francisco Giants', score: '3' },
    ],
    bookmakers: [
      {
        key: 'bybet_live',
        title: 'ByBet Live',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Los Angeles Dodgers', price: 1.28 },
              { name: 'San Francisco Giants', price: 3.60 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'live_mlb_2',
    sport_key: 'baseball_mlb',
    sport_title: 'MLB',
    commence_time: hoursAgo(1.4),
    home_team: 'New York Yankees',
    away_team: 'Boston Red Sox',
    completed: false,
    scores: [
      { name: 'New York Yankees', score: '4' },
      { name: 'Boston Red Sox', score: '2' },
    ],
    bookmakers: [
      {
        key: 'bybet_live',
        title: 'ByBet Live',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'New York Yankees', price: 1.55 },
              { name: 'Boston Red Sox', price: 2.45 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'live_npb_1',
    sport_key: 'baseball_npb',
    sport_title: 'NPB',
    commence_time: hoursAgo(0.7),
    home_team: 'Yomiuri Giants',
    away_team: 'Hanshin Tigers',
    completed: false,
    scores: [
      { name: 'Yomiuri Giants', score: '3' },
      { name: 'Hanshin Tigers', score: '1' },
    ],
    bookmakers: [
      {
        key: 'bybet_live',
        title: 'ByBet Live',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Yomiuri Giants', price: 1.70 },
              { name: 'Hanshin Tigers', price: 2.15 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'live_euro_1',
    sport_key: 'basketball_euroleague',
    sport_title: 'EuroLeague',
    commence_time: hoursAgo(1.1),
    home_team: 'Real Madrid Baloncesto',
    away_team: 'Panathinaikos BC',
    completed: false,
    scores: [
      { name: 'Real Madrid Baloncesto', score: '68' },
      { name: 'Panathinaikos BC', score: '65' },
    ],
    bookmakers: [
      {
        key: 'bybet_live',
        title: 'ByBet Live',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Real Madrid Baloncesto', price: 1.50 },
              { name: 'Panathinaikos BC', price: 2.60 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'live_pba_1',
    sport_key: 'basketball_pba',
    sport_title: 'PBA',
    commence_time: hoursAgo(1.8),
    home_team: 'San Miguel Beermen',
    away_team: 'Barangay Ginebra',
    completed: false,
    scores: [
      { name: 'San Miguel Beermen', score: '88' },
      { name: 'Barangay Ginebra', score: '82' },
    ],
    bookmakers: [
      {
        key: 'bybet_live',
        title: 'ByBet Live',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'San Miguel Beermen', price: 1.65 },
              { name: 'Barangay Ginebra', price: 2.25 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'live_soccer_laliga',
    sport_key: 'soccer_spain_la_liga',
    sport_title: 'La Liga',
    commence_time: hoursAgo(0.5),
    home_team: 'Real Madrid',
    away_team: 'Barcelona',
    completed: false,
    scores: [
      { name: 'Real Madrid', score: '2' },
      { name: 'Barcelona', score: '1' },
    ],
    bookmakers: [
      {
        key: 'bybet_live',
        title: 'ByBet Live',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Real Madrid', price: 1.85 },
              { name: 'Draw', price: 3.50 },
              { name: 'Barcelona', price: 3.90 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'live_soccer_bundesliga',
    sport_key: 'soccer_germany_bundesliga',
    sport_title: 'Bundesliga',
    commence_time: hoursAgo(1.1),
    home_team: 'Bayern Munich',
    away_team: 'Borussia Dortmund',
    completed: false,
    scores: [
      { name: 'Bayern Munich', score: '3' },
      { name: 'Borussia Dortmund', score: '2' },
    ],
    bookmakers: [
      {
        key: 'bybet_live',
        title: 'ByBet Live',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Bayern Munich', price: 1.30 },
              { name: 'Draw', price: 5.00 },
              { name: 'Borussia Dortmund', price: 8.50 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'live_tennis_wta',
    sport_key: 'tennis_wta_wuhan_open_singles',
    sport_title: 'WTA Wuhan Open',
    commence_time: hoursAgo(0.9),
    home_team: 'Aryna Sabalenka',
    away_team: 'Iga Swiatek',
    completed: false,
    scores: [
      { name: 'Aryna Sabalenka', score: '1' },
      { name: 'Iga Swiatek', score: '1' },
    ],
    bookmakers: [
      {
        key: 'bybet_live',
        title: 'ByBet Live',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Aryna Sabalenka', price: 1.95 },
              { name: 'Iga Swiatek', price: 1.85 },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'live_tennis_atp_shanghai',
    sport_key: 'tennis_atp_1000_shanghai_masters_singles',
    sport_title: 'ATP Shanghai Masters',
    commence_time: hoursAgo(1.3),
    home_team: 'Novak Djokovic',
    away_team: 'Daniil Medvedev',
    completed: false,
    scores: [
      { name: 'Novak Djokovic', score: '1' },
      { name: 'Daniil Medvedev', score: '0' },
    ],
    bookmakers: [
      {
        key: 'bybet_live',
        title: 'ByBet Live',
        markets: [
          {
            key: 'h2h',
            outcomes: [
              { name: 'Novak Djokovic', price: 1.48 },
              { name: 'Daniil Medvedev', price: 2.65 },
            ],
          },
        ],
      },
    ],
  },
]

// Outrights sample data
export const SAMPLE_OUTRIGHT_EVENTS: Record<string, SportsEvent[]> = {
  basketball_nba: [
    {
      id: 'outright_nba',
      sport_key: 'basketball_nba',
      sport_title: 'NBA Championship 2026/27',
      commence_time: hoursFromNow(2000),
      home_team: null,
      away_team: null,
      bookmakers: [
        {
          key: 'bybet_outright',
          title: 'ByBet Futures',
          markets: [
            {
              key: 'outrights',
              outcomes: [
                { name: 'Boston Celtics', price: 3.50 },
                { name: 'Denver Nuggets', price: 5.25 },
                { name: 'Oklahoma City Thunder', price: 6.50 },
                { name: 'Minnesota Timberwolves', price: 9.00 },
                { name: 'Dallas Mavericks', price: 10.50 },
                { name: 'New York Knicks', price: 12.00 },
                { name: 'Milwaukee Bucks', price: 14.00 },
                { name: 'Philadelphia 76ers', price: 16.00 },
              ],
            },
          ],
        },
      ],
    },
  ],

  basketball_euroleague: [
    {
      id: 'outright_euroleague',
      sport_key: 'basketball_euroleague',
      sport_title: 'EuroLeague Winner 2026/27',
      commence_time: hoursFromNow(2100),
      home_team: null,
      away_team: null,
      bookmakers: [
        {
          key: 'bybet_outright',
          title: 'ByBet Futures',
          markets: [
            {
              key: 'outrights',
              outcomes: [
                { name: 'Real Madrid Baloncesto', price: 3.20 },
                { name: 'Panathinaikos BC', price: 4.00 },
                { name: 'Olympiacos BC', price: 4.75 },
                { name: 'FC Barcelona Basquet', price: 6.00 },
                { name: 'Fenerbahce Beko', price: 7.50 },
                { name: 'AS Monaco', price: 9.00 },
              ],
            },
          ],
        },
      ],
    },
  ],

  soccer_epl: [
    {
      id: 'outright_epl',
      sport_key: 'soccer_epl',
      sport_title: 'Premier League Winner 2026/27',
      commence_time: hoursFromNow(3000),
      home_team: null,
      away_team: null,
      bookmakers: [
        {
          key: 'bybet_outright',
          title: 'ByBet Futures',
          markets: [
            {
              key: 'outrights',
              outcomes: [
                { name: 'Manchester City', price: 2.10 },
                { name: 'Arsenal', price: 3.25 },
                { name: 'Liverpool', price: 4.50 },
                { name: 'Chelsea', price: 15.00 },
                { name: 'Tottenham Hotspur', price: 25.00 },
                { name: 'Aston Villa', price: 35.00 },
                { name: 'Newcastle United', price: 40.00 },
                { name: 'Manchester United', price: 50.00 },
              ],
            },
          ],
        },
      ],
    },
  ],

  soccer_uefa_champions_league: [
    {
      id: 'outright_ucl',
      sport_key: 'soccer_uefa_champions_league',
      sport_title: 'UEFA Champions League Winner 2026/27',
      commence_time: hoursFromNow(2500),
      home_team: null,
      away_team: null,
      bookmakers: [
        {
          key: 'bybet_outright',
          title: 'ByBet Futures',
          markets: [
            {
              key: 'outrights',
              outcomes: [
                { name: 'Real Madrid', price: 3.75 },
                { name: 'Manchester City', price: 4.25 },
                { name: 'Bayern Munich', price: 6.50 },
                { name: 'Arsenal', price: 8.00 },
                { name: 'Paris Saint-Germain', price: 11.00 },
                { name: 'Barcelona', price: 13.00 },
                { name: 'Inter Milan', price: 15.00 },
                { name: 'Bayer Leverkusen', price: 20.00 },
              ],
            },
          ],
        },
      ],
    },
  ],

  soccer_germany_bundesliga: [
    {
      id: 'outright_bdes',
      sport_key: 'soccer_germany_bundesliga',
      sport_title: 'Bundesliga Winner 2026/27',
      commence_time: hoursFromNow(2800),
      home_team: null,
      away_team: null,
      bookmakers: [
        {
          key: 'bybet_outright',
          title: 'ByBet Futures',
          markets: [
            {
              key: 'outrights',
              outcomes: [
                { name: 'Bayern Munich', price: 1.80 },
                { name: 'Bayer Leverkusen', price: 2.85 },
                { name: 'Borussia Dortmund', price: 7.50 },
                { name: 'RB Leipzig', price: 10.00 },
              ],
            },
          ],
        },
      ],
    },
  ],

  soccer_italy_serie_a: [
    {
      id: 'outright_seriea',
      sport_key: 'soccer_italy_serie_a',
      sport_title: 'Serie A Winner 2026/27',
      commence_time: hoursFromNow(2800),
      home_team: null,
      away_team: null,
      bookmakers: [
        {
          key: 'bybet_outright',
          title: 'ByBet Futures',
          markets: [
            {
              key: 'outrights',
              outcomes: [
                { name: 'Inter Milan', price: 1.95 },
                { name: 'Juventus', price: 3.50 },
                { name: 'AC Milan', price: 5.50 },
                { name: 'Napoli', price: 8.00 },
              ],
            },
          ],
        },
      ],
    },
  ],

  baseball_mlb: [
    {
      id: 'outright_mlb',
      sport_key: 'baseball_mlb',
      sport_title: 'World Series Winner 2026',
      commence_time: hoursFromNow(1800),
      home_team: null,
      away_team: null,
      bookmakers: [
        {
          key: 'bybet_outright',
          title: 'ByBet Futures',
          markets: [
            {
              key: 'outrights',
              outcomes: [
                { name: 'Los Angeles Dodgers', price: 3.50 },
                { name: 'New York Yankees', price: 5.00 },
                { name: 'Philadelphia Phillies', price: 7.50 },
                { name: 'Baltimore Orioles', price: 9.00 },
                { name: 'Atlanta Braves', price: 11.00 },
                { name: 'Houston Astros', price: 13.00 },
              ],
            },
          ],
        },
      ],
    },
  ],

  tennis_atp_wimbledon: [
    {
      id: 'outright_wimb',
      sport_key: 'tennis_atp_wimbledon',
      sport_title: 'Gentlemen\'s Singles Winner 2026',
      commence_time: hoursFromNow(1200),
      home_team: null,
      away_team: null,
      bookmakers: [
        {
          key: 'bybet_outright',
          title: 'ByBet Futures',
          markets: [
            {
              key: 'outrights',
              outcomes: [
                { name: 'Carlos Alcaraz', price: 2.50 },
                { name: 'Jannik Sinner', price: 2.85 },
                { name: 'Novak Djokovic', price: 4.20 },
                { name: 'Alexander Zverev', price: 11.00 },
                { name: 'Daniil Medvedev', price: 14.00 },
              ],
            },
          ],
        },
      ],
    },
  ],

  tennis_atp_aus_open: [
    {
      id: 'outright_aus',
      sport_key: 'tennis_atp_aus_open',
      sport_title: 'Men\'s Australian Open Winner 2027',
      commence_time: hoursFromNow(2200),
      home_team: null,
      away_team: null,
      bookmakers: [
        {
          key: 'bybet_outright',
          title: 'ByBet Futures',
          markets: [
            {
              key: 'outrights',
              outcomes: [
                { name: 'Jannik Sinner', price: 2.30 },
                { name: 'Carlos Alcaraz', price: 2.90 },
                { name: 'Novak Djokovic', price: 4.50 },
              ],
            },
          ],
        },
      ],
    },
  ],

  tennis_wta_us_open: [
    {
      id: 'outright_uswta',
      sport_key: 'tennis_wta_us_open',
      sport_title: 'Women\'s US Open Winner 2026',
      commence_time: hoursFromNow(1500),
      home_team: null,
      away_team: null,
      bookmakers: [
        {
          key: 'bybet_outright',
          title: 'ByBet Futures',
          markets: [
            {
              key: 'outrights',
              outcomes: [
                { name: 'Aryna Sabalenka', price: 3.25 },
                { name: 'Iga Swiatek', price: 3.50 },
                { name: 'Coco Gauff', price: 6.00 },
                { name: 'Elena Rybakina', price: 8.50 },
              ],
            },
          ],
        },
      ],
    },
  ],
}

export interface SportsApiQuery {
  mode?: string
  sport?: string
}

const getOutrightEvents = (sportKey: string): SportsEvent[] => {
  if (SAMPLE_OUTRIGHT_EVENTS[sportKey]) {
    return SAMPLE_OUTRIGHT_EVENTS[sportKey]
  }

  const tournamentKey = Object.keys(SAMPLE_OUTRIGHT_EVENTS)
    .filter(key => sportKey.startsWith(`${key}_`))
    .sort((a, b) => b.length - a.length)[0]

  return tournamentKey ? SAMPLE_OUTRIGHT_EVENTS[tournamentKey] ?? [] : []
}

export function getSampleSportsData(query: SportsApiQuery = {}): { sports: Sport[]; events: SportsEvent[] } {
  const mode = String(query.mode || 'league')
  const sportKey = String(query.sport || '')

  if (mode === 'league') {
    const sports = SAMPLE_SPORTS.filter((sport) => {
      if (!sport.has_outrights) {
        return true
      }

      return getOutrightEvents(sport.key).some(event =>
        event.bookmakers?.some(bookmaker =>
          bookmaker.markets.some(market => market.key === 'outrights' && market.outcomes.length > 0),
        ),
      )
    })

    return { sports, events: [] }
  }

  if (mode === 'outright') {
    if (sportKey) {
      return { sports: [], events: getOutrightEvents(sportKey) }
    }
    const allOutrights = Object.values(SAMPLE_OUTRIGHT_EVENTS).flat()
    return { sports: [], events: allOutrights }
  }

  if (mode === 'inplay') {
    if (sportKey) {
      const filtered = SAMPLE_INPLAY_EVENTS.filter(e => e.sport_key === sportKey)
      return { sports: [], events: filtered }
    }
    return { sports: [], events: SAMPLE_INPLAY_EVENTS }
  }

  if (mode === 'league-odds') {
    const events = SAMPLE_MATCH_EVENTS[sportKey] ?? []
    return { sports: [], events: events.slice(0, 2) }
  }

  if (mode === 'upcoming' || mode === 'prematch') {
    if (sportKey) {
      const events = SAMPLE_MATCH_EVENTS[sportKey] ?? []
      return { sports: [], events }
    }
    const allMatches = Object.values(SAMPLE_MATCH_EVENTS).flat()
    return { sports: [], events: allMatches }
  }

  return { sports: [], events: [] }
}
