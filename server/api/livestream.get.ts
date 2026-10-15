import { getKadarioCatalog } from '~/server/utils/kadarioApi'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  return getKadarioCatalog(config.kadarioApi, config.kadarioSite, true)
})
