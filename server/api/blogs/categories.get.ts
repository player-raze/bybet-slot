import type { H3Event } from 'h3'
import type { BlogCategoryListResponse } from '~/types/blog'
import { resolveServerBloggeristUrl } from '~/server/utils/bloggerist'

export default defineEventHandler(async (event: H3Event): Promise<BlogCategoryListResponse> => {
  const bloggeristUrl = resolveServerBloggeristUrl(event)

  try {
    const res = await $fetch<BlogCategoryListResponse>(`${bloggeristUrl}/api/blog-category-list.php`)
    const categories = (res.categories || []).filter(cat => (Number(cat.postCount) || 0) > 0)
    return {
      ok: true,
      categories,
      total: categories.length,
    }
  } catch (err: any) {
    return {
      ok: false,
      error: err?.message || 'Failed to fetch categories',
      categories: [],
      total: 0,
    }
  }
})
