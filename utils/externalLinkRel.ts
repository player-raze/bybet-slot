export const EXTERNAL_LINK_REL = 'nofollow noopener noreferrer'

/**
 * Checks whether a destination href points to an external origin or external URI scheme
 * (http://, https://, protocol-relative //, mailto:, or tel:).
 */
export const isExternalHref = (href?: string | null): boolean => {
  const value = (href || '').trim()
  if (!value) return false
  return /^(?:https?:\/\/|\/\/|mailto:|tel:)/i.test(value)
}

/**
 * Normalizes a rel attribute string so it includes `nofollow` (and `noopener`/`noreferrer`
 * when `includeNoopener` is true) without duplicating tokens.
 */
export const ensureNofollowRel = (existingRel?: string | null, includeNoopener = true): string => {
  const tokens = (existingRel || '')
    .split(/\s+/)
    .map(token => token.trim())
    .filter(Boolean)

  const required = includeNoopener
    ? ['nofollow', 'noopener', 'noreferrer']
    : ['nofollow']

  const lowerExisting = new Set(tokens.map(token => token.toLowerCase()))
  const merged = [...tokens]

  for (const req of required) {
    if (!lowerExisting.has(req)) {
      lowerExisting.add(req)
      if (req === 'nofollow') {
        merged.unshift('nofollow')
      } else {
        merged.push(req)
      }
    }
  }

  return merged.join(' ')
}

/**
 * Rewrites HTML markup so every external <a href="..."> tag includes `nofollow`
 * (plus `noopener noreferrer` for HTTP/HTTPS/protocol-relative links) in its rel attribute,
 * while leaving internal relative links untouched.
 */
export const addNofollowToExternalHtmlLinks = (html?: string | null): string => {
  if (!html) return ''

  return html.replace(/<a\b((?:[^>"']|"[^"]*"|'[^']*')*)>/gi, (fullTag, rawAttrs: string) => {
    const hrefMatch = /\bhref\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/i.exec(rawAttrs)
    const href = hrefMatch ? (hrefMatch[1] ?? hrefMatch[2] ?? hrefMatch[3] ?? '') : ''

    if (!isExternalHref(href)) {
      return fullTag
    }

    const isHttp = /^(?:https?:\/\/|\/\/)/i.test(href.trim())
    const selfClosing = /\/\s*$/.test(rawAttrs)
    const attrsWithoutClose = selfClosing ? rawAttrs.replace(/\/\s*$/, '') : rawAttrs

    const relRegex = /\brel\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+))/i
    const relMatch = relRegex.exec(attrsWithoutClose)

    let updatedAttrs: string
    if (relMatch) {
      const existingRel = relMatch[1] ?? relMatch[2] ?? relMatch[3] ?? ''
      const nextRel = ensureNofollowRel(existingRel, isHttp)
      updatedAttrs = attrsWithoutClose.replace(relRegex, `rel="${nextRel}"`)
    } else {
      const nextRel = ensureNofollowRel('', isHttp)
      const spacer = attrsWithoutClose.length && !/\s$/.test(attrsWithoutClose) ? ' ' : ''
      updatedAttrs = `${attrsWithoutClose}${spacer}rel="${nextRel}"`
    }

    return `<a${updatedAttrs}${selfClosing ? ' /' : ''}>`
  })
}
