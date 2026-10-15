import { getLiveInplayEvents } from '~/server/utils/kadarioApi'
import { createOddsApi } from '~/server/utils/oddsApi'
import type { Sport, SportsEvent } from '~/types/sports'
import { getSampleSportsData } from '~/data/sports'

export default defineEventHandler(async (event): Promise<{ sports: Sport[]; events: SportsEvent[] }> => {
  const query = getQuery(event)
  const mode = typeof query.mode === 'string' ? query.mode : 'league'
  const sport = typeof query.sport === 'string' ? query.sport : ''
  const requestedSports = typeof query.sports === 'string'
    ? [...new Set(query.sports.split(',').filter(Boolean))] : undefined
  const multipleLeagues = ['upcoming', 'prematch'].includes(mode) && requestedSports !== undefined
  const config = useRuntimeConfig(event)
  if (String(config.useOddsApi) !== 'true') {
    if (multipleLeagues) {
      return { sports: [], events: requestedSports!.flatMap(key => getSampleSportsData({ mode, sport: key }).events) }
    }
    return getSampleSportsData({ mode, sport })
  }

  if (mode === 'inplay') {
    return { sports: [], events: await getLiveInplayEvents(config.kadarioApi, config.kadarioSite) }
  }
  const odds = createOddsApi(config.oddsApi, config.oddsApiKey)
  if (mode === 'league') return { sports: await odds.sports(), events: [] }
  if (multipleLeagues) {
    if (!requestedSports!.length) return { sports: [], events: [] }
    const catalog = await odds.sports()
    const keys = requestedSports!.filter(key => catalog.some(item => item.key === key && item.active && !item.has_outrights))
    const events: SportsEvent[] = []
    // Bound provider concurrency while loading every selected league.
    for (let index = 0; index < keys.length; index += 4) {
      const batch = await Promise.all(keys.slice(index, index + 4).map(key => odds.odds(key)))
      events.push(...batch.flat())
    }
    return { sports: [], events: events.sort((a, b) => Date.parse(a.commence_time) - Date.parse(b.commence_time)) }
  }
  if (!sport) return { sports: [], events: [] }

  if (mode === 'outright') {
    const sports = await odds.sports()
    if (!sports.some(item => item.key === sport && item.active && item.has_outrights)) {
      return { sports: [], events: [] }
    }
    const events = await odds.odds(sport, true)
    return { sports: [], events: events.map(item => ({
      ...item,
      home_team: item.home_team ?? null,
      away_team: item.away_team ?? null,
      bookmakers: (item.bookmakers ?? []).map(bookmaker => ({
        ...bookmaker,
        markets: bookmaker.markets.filter(market => market.key === 'outrights' && market.outcomes.length > 0),
      })).filter(bookmaker => bookmaker.markets.length > 0),
    })).filter(item => item.bookmakers.length > 0) }
  }
  if (['league-odds', 'upcoming', 'prematch'].includes(mode)) {
    return { sports: [], events: await odds.odds(sport) }
  }
  return { sports: [], events: [] }
})
