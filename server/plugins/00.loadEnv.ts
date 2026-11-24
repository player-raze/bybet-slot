import { loadEnvIntoProcess } from '~/scripts/env-loader.mjs'

export default defineNitroPlugin(() => {
  loadEnvIntoProcess()
})
