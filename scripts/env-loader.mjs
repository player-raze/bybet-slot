import fs from 'node:fs'
import path from 'node:path'

/**
 * Parses .env file lines into a key/value record while preserving quotes-stripped values.
 */
export function parseEnvContent(raw) {
  const result = {}
  for (const line of String(raw || '').split(/\r?\n/)) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const clean = trimmed.startsWith('export ') ? trimmed.slice(7).trim() : trimmed
    const eqIndex = clean.indexOf('=')
    if (eqIndex <= 0) continue

    const key = clean.slice(0, eqIndex).trim()
    let val = clean.slice(eqIndex + 1).trim()

    if (
      (val.startsWith('"') && val.endsWith('"') && val.length >= 2) ||
      (val.startsWith("'") && val.endsWith("'") && val.length >= 2)
    ) {
      val = val.slice(1, -1)
    } else {
      const commentIdx = val.indexOf(' #')
      if (commentIdx !== -1) {
        val = val.slice(0, commentIdx).trim()
      }
    }

    if (key) {
      result[key] = val
    }
  }
  return result
}

/**
 * Finds the nearest .env file across candidate directories.
 */
export function findDotEnvPath(candidateDirs) {
  const dirs = candidateDirs && candidateDirs.length > 0
    ? candidateDirs
    : [
        process.cwd(),
        path.resolve(process.cwd(), '..'),
        path.resolve(process.cwd(), '../..'),
      ]

  const seen = new Set()
  for (const dir of dirs) {
    const resolved = path.resolve(dir)
    if (seen.has(resolved)) continue
    seen.add(resolved)
    const candidate = path.join(resolved, '.env')
    if (fs.existsSync(candidate)) {
      return candidate
    }
  }
  return null
}

/**
 * Normalizes an HTTP origin loaded from .env (adds http:// when protocol is omitted).
 */
export function normalizeEnvOriginUrl(rawValue) {
  let clean = String(rawValue || '').trim()
  if (
    (clean.startsWith('"') && clean.endsWith('"') && clean.length >= 2) ||
    (clean.startsWith("'") && clean.endsWith("'") && clean.length >= 2)
  ) {
    clean = clean.slice(1, -1).trim()
  }
  if (!clean) return ''
  if (/^https?:\/\//i.test(clean)) return clean.replace(/\/+$/, '')
  if (clean.startsWith('//')) {
    const rest = clean.slice(2).replace(/\/+$/, '')
    return rest ? `http://${rest}` : ''
  }
  const rest = clean.replace(/^\/+/, '').replace(/\/+$/, '')
  return rest ? `http://${rest}` : ''
}

/**
 * Loads variables from .env into targetEnv without overwriting already-set shell/aaPanel variables,
 * and bridges PORT / NITRO_PORT / NUXT_PORT, HOST / NITRO_HOST / NUXT_HOST, and BLOGGERIST_URL cleanly.
 */
export function loadEnvIntoProcess(options = {}) {
  const targetEnv = options.targetEnv || process.env
  const envFilePath = options.envPath || findDotEnvPath(options.candidateDirs)

  const preExistingPort = (targetEnv.NITRO_PORT || targetEnv.PORT || targetEnv.NUXT_PORT || '').trim()
  const preExistingHost = (targetEnv.NITRO_HOST || targetEnv.HOST || targetEnv.NUXT_HOST || '').trim()
  const preExistingBloggerist = (
    targetEnv.NUXT_BLOGGERIST_URL ||
    targetEnv.NUXT_PUBLIC_BLOGGERIST_URL ||
    targetEnv.BLOGGERIST_URL ||
    ''
  ).trim()

  const loadedKeys = []
  if (envFilePath && fs.existsSync(envFilePath)) {
    const parsed = parseEnvContent(fs.readFileSync(envFilePath, 'utf8'))
    for (const [key, value] of Object.entries(parsed)) {
      if (targetEnv[key] === undefined || targetEnv[key] === '') {
        targetEnv[key] = value
        loadedKeys.push(key)
      }
    }
  }

  const effectivePort = preExistingPort || (targetEnv.NITRO_PORT || targetEnv.PORT || targetEnv.NUXT_PORT || '').trim()
  if (effectivePort) {
    if (!targetEnv.PORT) targetEnv.PORT = effectivePort
    if (!targetEnv.NITRO_PORT) targetEnv.NITRO_PORT = effectivePort
    if (!targetEnv.NUXT_PORT) targetEnv.NUXT_PORT = effectivePort
  }

  const effectiveHost = preExistingHost || (targetEnv.NITRO_HOST || targetEnv.HOST || targetEnv.NUXT_HOST || '').trim()
  if (effectiveHost) {
    if (!targetEnv.HOST) targetEnv.HOST = effectiveHost
    if (!targetEnv.NITRO_HOST) targetEnv.NITRO_HOST = effectiveHost
    if (!targetEnv.NUXT_HOST) targetEnv.NUXT_HOST = effectiveHost
  }

  const rawBloggerist = preExistingBloggerist || (
    targetEnv.NUXT_BLOGGERIST_URL ||
    targetEnv.NUXT_PUBLIC_BLOGGERIST_URL ||
    targetEnv.BLOGGERIST_URL ||
    ''
  ).trim()
  const normalizedBloggerist = normalizeEnvOriginUrl(rawBloggerist)
  if (normalizedBloggerist) {
    targetEnv.BLOGGERIST_URL = normalizedBloggerist
    if (!targetEnv.NUXT_BLOGGERIST_URL) targetEnv.NUXT_BLOGGERIST_URL = normalizedBloggerist
    if (!targetEnv.NUXT_PUBLIC_BLOGGERIST_URL) targetEnv.NUXT_PUBLIC_BLOGGERIST_URL = normalizedBloggerist
  }

  return {
    envFilePath,
    loadedKeys,
    port: effectivePort || undefined,
    host: effectiveHost || undefined,
    bloggeristUrl: normalizedBloggerist || undefined,
  }
}
