import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { loadEnvIntoProcess } from './env-loader.mjs'

const scriptDir = path.dirname(fileURLToPath(import.meta.url))
const rootDir = path.resolve(scriptDir, '..')
const serverEntry = path.join(rootDir, '.output', 'server', 'index.mjs')

loadEnvIntoProcess({
  candidateDirs: [process.cwd(), rootDir],
})

if (!fs.existsSync(serverEntry)) {
  console.error('[start] Production build not found at .output/server/index.mjs. Run "npm run build" first.')
  process.exit(1)
}

await import(pathToFileURL(serverEntry).href)
