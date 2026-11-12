import { defineEventHandler, setResponseHeader, type H3Event } from 'h3'
import { generateLlmsContent } from '~/server/utils/llms'

export default defineEventHandler((event: H3Event) => {
  const config = useRuntimeConfig(event)
  const siteUrl = String(config.public.siteUrl || 'https://bybet.com').replace(/\/+$/, '')

  setResponseHeader(event, 'content-type', 'text/plain; charset=utf-8')
  setResponseHeader(event, 'cache-control', 'public, max-age=3600, s-maxage=14400')

  return generateLlmsContent(siteUrl)
})
