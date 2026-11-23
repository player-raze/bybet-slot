import { trackEnvClick, isEnvRedirectUrl, type TrackEnvClickOptions } from '~/utils/playnowTracker'

export const usePlaynowTracker = () => {
  const trackClick = async (options: TrackEnvClickOptions) => {
    return trackEnvClick(options)
  }

  const fetchStats = async () => {
    try {
      return await $fetch('/api/playnow/clicks')
    } catch {
      return null
    }
  }

  return {
    trackClick,
    fetchStats,
    isEnvRedirectUrl,
  }
}
