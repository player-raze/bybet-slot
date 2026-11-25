export const MOBILE_SLOTS_INITIAL_COUNT = 30
export const MOBILE_SLOTS_BATCH_SIZE = 30

/**
 * Returns the active display cap for a slot category section on mobile.
 */
export const getMobileSectionLimit = (
  limits: Record<string, number>,
  sectionId: string,
): number => {
  const current = limits[sectionId]
  return typeof current === 'number' && current > 0
    ? current
    : MOBILE_SLOTS_INITIAL_COUNT
}

/**
 * Returns the desktop 24-card preview slice when on desktop, or the paginated
 * 30-per-step slice for the given slot category when in mobile view.
 */
export const getVisibleSlotSectionGames = <T>(
  desktopGames: readonly T[],
  allGames: readonly T[] | undefined,
  isMobile: boolean,
  limits: Record<string, number>,
  sectionId: string,
): T[] => {
  if (!isMobile) {
    return [...desktopGames]
  }
  const source = allGames ?? desktopGames
  return source.slice(0, getMobileSectionLimit(limits, sectionId))
}

/**
 * Reports whether a slot category section has additional games to reveal on mobile.
 */
export const hasMoreSlotSectionGames = (
  allGamesCount: number,
  isMobile: boolean,
  limits: Record<string, number>,
  sectionId: string,
): boolean => {
  if (!isMobile) {
    return false
  }
  return getMobileSectionLimit(limits, sectionId) < allGamesCount
}

/**
 * Returns a new per-section limits map with the given section increased by 30 games.
 */
export const incrementMobileSectionLimit = (
  limits: Record<string, number>,
  sectionId: string,
  totalGamesCount: number,
): Record<string, number> => {
  const current = getMobileSectionLimit(limits, sectionId)
  const nextLimit = Math.min(current + MOBILE_SLOTS_BATCH_SIZE, totalGamesCount)
  return {
    ...limits,
    [sectionId]: nextLimit,
  }
}
