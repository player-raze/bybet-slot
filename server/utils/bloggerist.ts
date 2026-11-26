import type { H3Event } from 'h3'
import { normalizeBloggeristUrl } from '~/utils/bloggeristUrl'

/**
 * Resolves and normalizes the upstream Bloggerist origin for server routes,
 * honoring runtime `.env` / aaPanel env vars over build-time config defaults.
 */
export const resolveServerBloggeristUrl = (event?: H3Event): string => {
  const config = event ? useRuntimeConfig(event) : useRuntimeConfig()
  const raw =
    (typeof process !== 'undefined' && (
      process.env.NUXT_BLOGGERIST_URL ||
      process.env.NUXT_PUBLIC_BLOGGERIST_URL ||
      process.env.BLOGGERIST_URL
    )) ||
    config.bloggeristUrl ||
    config.public?.bloggeristUrl

  return normalizeBloggeristUrl(raw ? String(raw) : undefined)
}
