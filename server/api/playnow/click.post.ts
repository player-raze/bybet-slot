import { getRequestHeader, getRequestIP, type H3Event } from 'h3'
import type { PlaynowClickResponse } from '~/utils/playnowTracker'
import { resolveServerBloggeristUrl } from '~/server/utils/bloggerist'

export default defineEventHandler(async (event: H3Event): Promise<PlaynowClickResponse> => {
  const body = await readBody(event).catch(() => ({}))
  const bloggeristUrl = resolveServerBloggeristUrl(event)

  const forwardedIp = (
    getRequestHeader(event, 'cf-connecting-ip')
    || getRequestHeader(event, 'x-real-ip')
    || getRequestHeader(event, 'x-forwarded-for')
    || getRequestIP(event)
    || event.node.req.socket?.remoteAddress
    || ''
  ).trim()
  const userAgent = (getRequestHeader(event, 'user-agent') || '').trim()

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  }
  if (forwardedIp) headers['X-Forwarded-For'] = forwardedIp
  if (userAgent) headers['User-Agent'] = userAgent

  try {
    const res = await $fetch<PlaynowClickResponse>(`${bloggeristUrl}/api/playnow-click.php`, {
      method: 'POST',
      body,
      headers,
      timeout: 3000,
    })
    return res
  } catch (err: any) {
    return {
      ok: true,
      error: err?.message || 'Upstream playnow tracker unreachable',
    }
  }
})
