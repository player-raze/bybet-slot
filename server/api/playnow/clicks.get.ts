import { promises as fs } from 'node:fs'
import path from 'node:path'
import type { H3Event } from 'h3'
import { resolvePlaynowEnvUrl, isEnvRedirectUrl } from '~/utils/playnowTracker'

export interface PlaynowTrackerStats {
  ok: boolean
  totalClicks: number
  envUrlClicks: number
  envUrl: string
  byTarget: Record<string, number>
  byButton: Record<string, number>
  byPage: Record<string, number>
  recent: Array<Record<string, unknown>>
  updatedAt?: string
}

export default defineEventHandler(async (event: H3Event): Promise<PlaynowTrackerStats> => {
  const config = useRuntimeConfig(event)
  const envUrl = String(config.public?.bybetRedirectUrl || resolvePlaynowEnvUrl()).trim()

  const storageCandidates = [
    process.env.APP_STORAGE_DIR ? path.resolve(process.env.APP_STORAGE_DIR, 'playnow-clicks.json') : '',
    path.resolve(process.cwd(), '../aapanel env/www/admin/storage/playnow-clicks.json'),
    path.resolve(process.cwd(), '../aapanel env v2/www/admin/storage/playnow-clicks.json'),
    path.resolve(process.cwd(), 'bloggerist/admin/storage/playnow-clicks.json'),
    path.resolve(process.cwd(), 'data/bloggerist/playnow-clicks.json'),
  ].filter(Boolean)

  let data: any = null
  for (const candidate of storageCandidates) {
    try {
      const content = await fs.readFile(candidate, 'utf-8')
      data = JSON.parse(content)
      break
    } catch {}
  }

  if (!data) {
    return {
      ok: true,
      totalClicks: 0,
      envUrlClicks: 0,
      envUrl,
      byTarget: {},
      byButton: {},
      byPage: {},
      recent: [],
    }
  }

  const byTarget: Record<string, number> = data.byTarget || {}
  let envUrlClicks = 0

  for (const [target, count] of Object.entries(byTarget)) {
    if (isEnvRedirectUrl(target, envUrl)) {
      envUrlClicks += Number(count) || 0
    }
  }

  return {
    ok: true,
    totalClicks: Number(data.totalClicks) || 0,
    envUrlClicks,
    envUrl,
    byTarget,
    byButton: data.byButton || {},
    byPage: data.byPage || {},
    recent: data.recent || [],
    updatedAt: data.updatedAt,
  }
})
