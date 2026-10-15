import type { SportsEvent } from '~/types/sports'

export function matchesSportsSelection(event: SportsEvent, selectedSports: string[], selectedTournaments: Record<string, string[]> = {}) {
  const aliases: Record<string, string> = {
    football: 'Soccer', soccer: 'Soccer', basketball: 'Basketball', nba: 'Basketball', pba: 'Basketball',
    tennis: 'Tennis', atp: 'Tennis', wta: 'Tennis', baseball: 'Baseball', mlb: 'Baseball',
  }
  const group = aliases[(event.sport || event.sport_key.split('_')[0] || '').toLowerCase()]
  if (!group || !selectedSports.includes(group)) return false
  const keys = selectedTournaments[group] ?? []
  return keys.length === 0 || keys.some(key => key.endsWith('*')
    ? event.sport_key.startsWith(key.slice(0, -1)) : event.sport_key === key)
}
