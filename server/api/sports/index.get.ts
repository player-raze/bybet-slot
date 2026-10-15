import type { Sport, SportsEvent } from '~/types/sports'
import { getSampleSportsData } from '~/data/sports'

export default defineEventHandler((event): { sports: Sport[]; events: SportsEvent[] } => {
  const query = getQuery(event)
  const mode = typeof query.mode === 'string' ? query.mode : undefined
  const sport = typeof query.sport === 'string' ? query.sport : undefined

  return getSampleSportsData({ mode, sport })
})
