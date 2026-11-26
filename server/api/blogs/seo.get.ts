import type { H3Event } from 'h3'
import type { BlogSeoSettingsResponse } from '~/types/blog'
import { resolveServerBloggeristUrl } from '~/server/utils/bloggerist'

export default defineEventHandler(async (event: H3Event): Promise<BlogSeoSettingsResponse> => {
  const bloggeristUrl = resolveServerBloggeristUrl(event)

  try {
    const res = await $fetch<BlogSeoSettingsResponse>(`${bloggeristUrl}/api/settings/seo.php`, { timeout: 3000 })
    return res
  } catch (err: any) {
    return {
      ok: false,
      error: err?.message || 'Failed to fetch SEO settings',
      settings: {
        website_name: 'Blog',
        website_url: bloggeristUrl,
        google_analytics_id: '',
        google_tag_id: '',
        google_search_console_verification: '',
      },
    }
  }
})
