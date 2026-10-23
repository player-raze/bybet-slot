import type { EffectiveTheme } from '~/composables/useSitePreferences'

const lightProviderLogoByDefault: Readonly<Record<string, string>> = {
  '/images/providers/pg.webp': '/images/providers/light/pg.png',
  '/images/providers/jili.webp': '/images/providers/light/jili.png',
  '/images/providers/pp.webp': '/images/providers/light/pp.png',
  '/images/providers/cq9.webp': '/images/providers/light/cq9.png',
  '/images/providers/jdb.webp': '/images/providers/light/jdb.png',
  '/images/providers/red-tiger.webp': '/images/providers/light/red-tiger.png',
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
