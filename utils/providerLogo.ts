import type { EffectiveTheme } from '~/composables/useSitePreferences'

const lightProviderLogoByDefault: Readonly<Record<string, string>> = {
  '/images/providers/pg.webp': '/images/providers/light/pg.webp',
  '/images/providers/jili.webp': '/images/providers/light/jili.webp',
  '/images/providers/pp.webp': '/images/providers/light/pp.webp',
  '/images/providers/cq9.webp': '/images/providers/light/cq9.webp',
  '/images/providers/jdb.webp': '/images/providers/light/jdb.webp',
  '/images/providers/red-tiger.webp': '/images/providers/light/red-tiger.webp',
}

export const getProviderLogoForTheme = (
  providerLogo: string | undefined,
  theme: EffectiveTheme,
): string => {
  if (!providerLogo || theme !== 'light') {
    return providerLogo ?? ''
  }

  return lightProviderLogoByDefault[providerLogo] ?? providerLogo
}
