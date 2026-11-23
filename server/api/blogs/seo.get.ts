import type { H3Event } from 'h3'
import type { BlogSeoSettingsResponse } from '~/types/blog'

export default defineEventHandler(async (event: H3Event): Promise<BlogSeoSettingsResponse> => {
  const config = useRuntimeConfig(event)
  const bloggeristUrl = (config.bloggeristUrl || config.public?.bloggeristUrl || 'http://localhost:8082').replace(/\/+$/, '')

  try {
    const res = await $fetch<BlogSeoSettingsResponse>(`${bloggeristUrl}/api/settings/seo.php`)
    return res
  } catch (err: any) {
    return {
      ok: false,
      error: err?.message || 'Failed to fetch SEO settings',
      settings: {
        website_name: 'Blog',
        website_url: bloggeristUrl,
        google_analytics_id: '',
        google_search_console_verification: '',
      },
    }
  }
})
