import type { H3Event } from 'h3'
import type { BlogPostListResponse } from '~/types/blog'

export default defineEventHandler(async (event: H3Event): Promise<BlogPostListResponse> => {
  const query = getQuery(event)
  const config = useRuntimeConfig(event)
  const bloggeristUrl = (config.bloggeristUrl || config.public?.bloggeristUrl || 'http://localhost:8082').replace(/\/+$/, '')

  const params = new URLSearchParams()
  if (query.count) params.set('count', String(query.count))
  if (query.page) params.set('page', String(query.page))
  if (query.category) params.set('category', String(query.category))

  const queryString = params.toString() ? `?${params.toString()}` : ''

  try {
    const res = await $fetch<BlogPostListResponse>(`${bloggeristUrl}/api/blog-post-list.php${queryString}`)
    return res
  } catch (err: any) {
    return {
      ok: false,
      error: err?.message || 'Failed to fetch blogs',
      blogs: [],
      pagination: {
        total: 0,
        count: 0,
        page: Number(query.page) || 1,
        category: query.category ? String(query.category) : null,
        totalPages: 0,
      },
    }
  }
})
