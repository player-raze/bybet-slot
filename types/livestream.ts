export interface LiveStream {
  id: string
  startTime?: string
  status?: string
  home: { name: string }
  away: { name: string }
  homeScore?: number
  awayScore?: number
  scoreAvailable?: boolean
  thumbnail?: string
  iframe?: { src: string; title: string }
  sources?: { type?: string; url?: string; fallbackUrl?: string }[]
}

export interface LiveStreamCatalog {
  enabled: boolean
  results: LiveStream[]
}
