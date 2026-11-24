import { createRandomSeed } from '~/utils/gameSort'

/**
 * Provides a per-visit seed preserved across SSR hydration and refreshed on
 * client-side navigations so randomized slot lists never cause hydration mismatches.
 */
export const useSlotRandomSeed = () => {
  const nuxtApp = useNuxtApp()
  const randomSeed = useState<number>('egames-slots-random-seed', () => createRandomSeed())

  if (import.meta.client && !nuxtApp.isHydrating) {
    randomSeed.value = createRandomSeed()
  }

  return randomSeed
}
