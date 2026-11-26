export const DEFAULT_BLOGGERIST_URL = 'http://localhost:8082'

/**
 * Normalizes a configured Bloggerist base URL so scheme-less domains
 * (e.g. `bybet-all-bloggerist.chickenkiller.com` in aaPanel .env) resolve as
 * absolute `http://` origins instead of relative browser paths.
 */
export const normalizeBloggeristUrl = (rawUrl?: string | null): string => {
  let clean = (rawUrl || '').trim()
  if (
    (clean.startsWith('"') && clean.endsWith('"') && clean.length >= 2) ||
    (clean.startsWith("'") && clean.endsWith("'") && clean.length >= 2)
  ) {
    clean = clean.slice(1, -1).trim()
  }

  if (!clean) {
    return DEFAULT_BLOGGERIST_URL
  }

  if (/^https?:\/\//i.test(clean)) {
    return clean.replace(/\/+$/, '')
  }

  if (clean.startsWith('//')) {
    const withoutSlashes = clean.slice(2).replace(/\/+$/, '')
    return withoutSlashes ? `http://${withoutSlashes}` : DEFAULT_BLOGGERIST_URL
  }

  const hostAndPath = clean.replace(/^\/+/, '').replace(/\/+$/, '')
  return hostAndPath ? `http://${hostAndPath}` : DEFAULT_BLOGGERIST_URL
}
