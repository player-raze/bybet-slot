export default defineEventHandler((event) => {
  const config = useRuntimeConfig()
  const isIndexFollow = Boolean(config.public.indexFollow)

  setResponseHeader(event, 'content-type', 'text/plain')

  if (isIndexFollow) {
    return 'User-agent: *\nAllow: /\n'
  }

  return 'User-agent: *\nDisallow: /\n'
})

