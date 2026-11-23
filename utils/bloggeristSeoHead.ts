import type { BlogSeoSettings } from '~/types/blog'

export type BloggeristSeoTrackingInput = Pick<
  BlogSeoSettings,
  'google_analytics_id' | 'google_tag_id' | 'google_search_console_verification'
>

/**
 * Extracts and validates a Google Search Console verification token,
 * supporting either a bare token or a full `<meta name="google-site-verification" content="...">` string.
 */
export const normalizeGscVerificationToken = (raw?: string | null): string | null => {
  const value = (raw || '').trim()
  if (!value) return null

  let token = value
  if (value.includes('<meta')) {
    const match = /content\s*=\s*(?:"([^"]+)"|'([^']+)')/i.exec(value)
    token = (match?.[1] ?? match?.[2] ?? '').trim()
  }

  return /^[A-Za-z0-9._-]{1,512}$/.test(token) ? token : null
}

/**
 * Validates and normalizes a GA4 Measurement ID (`G-XXXXXXXXXX`).
 */
export const normalizeGoogleAnalyticsId = (raw?: string | null): string | null => {
  const value = (raw || '').trim().toUpperCase()
  return /^G-[A-Z0-9]{4,20}$/.test(value) ? value : null
}

/**
 * Validates and normalizes a Google Tag / GTM ID (`GTM-...`, `GT-...`, `G-...`, `AW-...`, `DC-...`).
 */
export const normalizeGoogleTagId = (raw?: string | null): string | null => {
  const value = (raw || '').trim().toUpperCase()
  return /^(?:GTM|GT|G|AW|DC)-[A-Z0-9]{4,20}$/.test(value) ? value : null
}

/**
 * Builds deduplicated Unhead `meta`, `script`, and `noscript` entries for
 * Google Search Console verification, Google Analytics (gtag.js), and Google Tag / GTM.
 */
export const buildBloggeristSeoHead = (settings?: BloggeristSeoTrackingInput | null) => {
  const meta: Array<{ key: string; name: string; content: string }> = []
  const script: Array<
    | { key: string; src: string; async: boolean }
    | { key: string; innerHTML: string }
  > = []
  const noscript: Array<{ key: string; tagPosition: 'bodyOpen'; innerHTML: string }> = []

  const gscToken = normalizeGscVerificationToken(settings?.google_search_console_verification)
  if (gscToken) {
    meta.push({
      key: 'google-site-verification',
      name: 'google-site-verification',
      content: gscToken,
    })
  }

  const gaId = normalizeGoogleAnalyticsId(settings?.google_analytics_id)
  if (gaId) {
    script.push(
      {
        key: 'ga-gtag-src',
        src: `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`,
        async: true,
      },
      {
        key: 'ga-gtag-init',
        innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', ${JSON.stringify(gaId)});`,
      },
    )
  }

  const tagId = normalizeGoogleTagId(settings?.google_tag_id)
  if (tagId) {
    if (tagId.startsWith('GTM-')) {
      script.push({
        key: 'gtm-script',
        innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer',${JSON.stringify(tagId)});`,
      })
      noscript.push({
        key: 'gtm-noscript',
        tagPosition: 'bodyOpen' as const,
        innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=${encodeURIComponent(tagId)}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      })
    } else if (tagId !== gaId) {
      if (!gaId) {
        script.push(
          {
            key: 'google-tag-src',
            src: `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(tagId)}`,
            async: true,
          },
          {
            key: 'google-tag-init',
            innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', ${JSON.stringify(tagId)});`,
          },
        )
      } else {
        script.push({
          key: 'google-tag-init',
          innerHTML: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('config', ${JSON.stringify(tagId)});`,
        })
      }
    }
  }

  return { meta, script, noscript }
}
