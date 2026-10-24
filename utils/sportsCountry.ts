import type { Sport } from '~/types/sports'

const KNOWN_COUNTRY_KEYS: Record<string, string> = {
  epl: 'England',
  england: 'England',
  spain: 'Spain',
  germany: 'Germany',
  italy: 'Italy',
  france: 'France',
  usa: 'USA',
  nba: 'USA',
  wnba: 'USA',
  ncaab: 'USA',
  mlb: 'USA',
  mls: 'USA',
  japan: 'Japan',
  npb: 'Japan',
  korea: 'South Korea',
  south_korea: 'South Korea',
  kbo: 'South Korea',
  australia: 'Australia',
  nbl: 'Australia',
  brazil: 'Brazil',
  argentina: 'Argentina',
  mexico: 'Mexico',
  netherlands: 'Netherlands',
  portugal: 'Portugal',
  turkey: 'Turkey',
  scotland: 'Scotland',
  belgium: 'Belgium',
  greece: 'Greece',
  sweden: 'Sweden',
  norway: 'Norway',
  denmark: 'Denmark',
  poland: 'Poland',
  austria: 'Austria',
  switzerland: 'Switzerland',
  saudi: 'Saudi Arabia',
  china: 'China',
  philippines: 'Philippines',
  pba: 'Philippines',
  efl: 'England'
}

export function getCountryForSport(sport: Pick<Sport, 'key'> & Partial<Pick<Sport, 'title' | 'description'>>): string {
  const key = (sport.key || '').toLowerCase()
  const text = `${sport.key ?? ''} ${sport.title ?? ''} ${sport.description ?? ''}`.toLowerCase()

  // Specific country tournaments & keywords
  if (/\b(epl|premier[ _-]?league|fa[ _-]?cup|english|wimbledon)\b/i.test(text)) return 'England'
  if (/\b(la[ _-]?liga|spanish|spain|primera[ _-]?division|copa[ _-]?del[ _-]?rey|acb)\b/i.test(text)) return 'Spain'
  if (/\b(bundesliga|german|germany|dfb[ _-]?pokal|bbl)\b/i.test(text)) return 'Germany'
  if (/\b(serie[ _-]?[ab]|italian|italy|coppa[ _-]?italia|lega[ _-]?a)\b/i.test(text)) return 'Italy'
  if (/\b(ligue[ _-]?[12]|french|france|roland[ _-]?garros|french[ _-]?open|lba)\b/i.test(text)) return 'France'
  if (/\b(nba|wnba|ncaa|ncaab|mlb|mls|united[ _-]?states|us[ _-]?open)\b/i.test(text) || /\busa\b/i.test(text)) return 'USA'
  if (/\b(npb|nippon|japan|japanese|j[ _-]?league)\b/i.test(text)) return 'Japan'
  if (/\b(kbo|korean|korea|k[ _-]?league)\b/i.test(text)) return 'South Korea'
  if (/\b(a[ _-]?league|australia|australian|nbl|aus[ _-]?open)\b/i.test(text)) return 'Australia'
  if (/\b(pba|philippine|philippines|mpbl|uaap)\b/i.test(text)) return 'Philippines'
  if (/\b(brazil|brazilian|campeonato|brasileirao)\b/i.test(text)) return 'Brazil'
  if (/\b(argentina|argentine)\b/i.test(text)) return 'Argentina'
  if (/\b(mexico|mexican|liga[ _-]?mx)\b/i.test(text)) return 'Mexico'
  if (/\b(eredivisie|netherlands|dutch|knvb)\b/i.test(text)) return 'Netherlands'
  if (/\b(primeira[ _-]?liga|portugal|portuguese)\b/i.test(text)) return 'Portugal'
  if (/\b(turkey|turkish|super[ _-]?lig)\b/i.test(text)) return 'Turkey'
  if (/\b(scotland|scottish)\b/i.test(text)) return 'Scotland'
  if (/\b(belgium|belgian)\b/i.test(text)) return 'Belgium'
  if (/\b(greece|greek)\b/i.test(text)) return 'Greece'
  if (/\b(saudi|saudi[ _-]?pro[ _-]?league)\b/i.test(text)) return 'Saudi Arabia'
  if (/\b(china|chinese|cba|csl)\b/i.test(text)) return 'China'

  // Key segment pattern, e.g. soccer_sweden_allsvenskan -> parts[1] is sweden
  const parts = key.split('_')
  if (parts.length >= 2 && KNOWN_COUNTRY_KEYS[parts[1]]) {
    return KNOWN_COUNTRY_KEYS[parts[1]]
  }

  // Cross-border / international / continental
  if (/\b(uefa|euroleague|champions[ _-]?league|champs[ _-]?league|europa[ _-]?league|copa[ _-]?libertadores|world[ _-]?cup|international|grand[ _-]?slam|atp|wta|afcon)\b/i.test(text)) {
    return 'International'
  }

  if (parts.length >= 2 && parts[1] && !['atp', 'wta'].includes(parts[1])) {
    return parts[1].charAt(0).toUpperCase() + parts[1].slice(1)
  }

  return 'International'
}

