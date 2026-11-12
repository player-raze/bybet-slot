export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/explore' || to.path === '/explore/') {
    return navigateTo('/', { redirectCode: 301, replace: true })
  }

  if (to.path.startsWith('/explore/')) {
    const cleanPath = to.path.replace(/^\/explore\/?/, '')
    const targetPath = cleanPath ? `/${cleanPath}` : '/'
    return navigateTo(
      { path: targetPath, query: to.query, hash: to.hash },
      { redirectCode: 301, replace: true },
    )
  }
})
