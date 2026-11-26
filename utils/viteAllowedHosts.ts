export const DEFAULT_VITE_ALLOWED_HOSTS: readonly string[] = []

export interface ViteAllowedHostsEnv {
  ALLOWED_HOSTS?: string
  VITE_ALLOWED_HOSTS?: string
  SITE_URL?: string
}

const LOOPBACK_HOSTS = new Set(['localhost', '127.0.0.1', '::1', '0.0.0.0'])

/**
 * Normalizes a host entry, URL, or wildcard (`*.domain` -> `.domain`) into a Vite allowedHosts entry.
 */
export const normalizeHostEntry = (rawValue?: string | null): string => {
  const raw = (rawValue || '').trim()
  if (!raw) return ''

  // Handle wildcard subdomains formatted as `*.example.com` -> `.example.com` for Vite
  const wildcardSource = raw.replace(/^[a-z]+:\/\//i, '')
  if (wildcardSource.startsWith('*.')) {
    const rest = wildcardSource.slice(1).split('/')[0].replace(/:\d+$/, '').trim().toLowerCase()
    return rest.length > 1 ? rest : ''
  }

  if (raw.startsWith('.') && !raw.includes('://')) {
    const clean = raw.split('/')[0].replace(/:\d+$/, '').trim().toLowerCase()
    return clean.length > 1 ? clean : ''
  }

  try {
    const parsed = raw.includes('://') ? new URL(raw) : new URL(`http://${raw}`)
    const hostname = parsed.hostname.replace(/^\[|\]$/g, '').trim().toLowerCase()
    return hostname
  } catch {
    return ''
  }
}

/**
 * Resolves Vite `server.allowedHosts` / `preview.allowedHosts` from environment config (`.env`).
 */
export const resolveViteAllowedHosts = (env?: ViteAllowedHostsEnv): string[] | true => {
  const rawExplicit = [env?.ALLOWED_HOSTS, env?.VITE_ALLOWED_HOSTS]
    .filter((v): v is string => typeof v === 'string' && v.trim().length > 0)
    .join(',')
    .trim()

  if (rawExplicit === 'true' || rawExplicit === '*') {
    return true
  }

  const hosts = new Set<string>(DEFAULT_VITE_ALLOWED_HOSTS)

  if (rawExplicit) {
    for (const part of rawExplicit.split(/[\s,]+/)) {
      const normalized = normalizeHostEntry(part)
      if (normalized && !LOOPBACK_HOSTS.has(normalized)) {
        hosts.add(normalized)
      }
    }
  }

  const siteHost = normalizeHostEntry(env?.SITE_URL)
  if (siteHost && !LOOPBACK_HOSTS.has(siteHost)) {
    hosts.add(siteHost)
  }

  return [...hosts]
}
