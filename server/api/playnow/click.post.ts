import type { H3Event } from 'h3'
import type { PlaynowClickResponse } from '~/utils/playnowTracker'

export default defineEventHandler(async (event: H3Event): Promise<PlaynowClickResponse> => {
  const body = await readBody(event).catch(() => ({}))
  const config = useRuntimeConfig(event)
  const bloggeristUrl = (config.bloggeristUrl || config.public?.bloggeristUrl || 'http://localhost:8082').replace(/\/+$/, '')

  try {
    const res = await $fetch<PlaynowClickResponse>(`${bloggeristUrl}/api/playnow-click.php`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json',
      },
    })
    return res
  } catch (err: any) {
    return {
      ok: true,
      error: err?.message || 'Upstream playnow tracker unreachable',
    }
  }
})
