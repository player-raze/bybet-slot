import type { H3Event } from 'h3'
import type { BlogDetailResponse } from '~/types/blog'
import { normalizeBlogDetailResponse } from '~/composables/useBloggerist'

export default defineEventHandler(async (event: H3Event): Promise<BlogDetailResponse> => {
  const query = getQuery(event)
  const config = useRuntimeConfig(event)
  const bloggeristUrl = (config.bloggeristUrl || config.public?.bloggeristUrl || 'http://localhost:8082').replace(/\/+$/, '')

  const slug = query.slug ? String(query.slug) : ''
  if (!slug) {
    return {
      ok: false,
      error: 'Slug parameter is required',
    }
  }

  try {
    const res = await $fetch<BlogDetailResponse>(`${bloggeristUrl}/api/blog.php?slug=${encodeURIComponent(slug)}`)
    return normalizeBlogDetailResponse(res, bloggeristUrl)
  } catch (err: any) {
    return {
      ok: false,
      error: err?.message || 'Failed to fetch blog post',
    }
  }
})
