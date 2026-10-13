const minimumPlayerCount = 18_000
const maximumPlayerCount = 980_000

const hashPlayerSeed = (gameTitle: string, sectionKey: string): number => {
  const input = `${sectionKey}:${gameTitle}`
  let hash = 0

  for (let characterIndex = 0; characterIndex < input.length; characterIndex += 1) {
    hash = (hash * 31 + input.charCodeAt(characterIndex)) >>> 0
  }

  return hash
}

export const getStablePlayerCount = (gameTitle: string, sectionKey: string): number => {
  const hash = hashPlayerSeed(gameTitle, sectionKey)
  const range = maximumPlayerCount - minimumPlayerCount

  return minimumPlayerCount + (hash % range)
}

export const formatCompactPlayerCount = (playerCount: number): string => {
  if (playerCount >= 1_000_000) {
    const millions = playerCount / 1_000_000
    const formatted = millions.toFixed(1).replace(/\.0$/, '')
    return `${formatted}M`
  }

  if (playerCount >= 10_000) {
    return `${Math.round(playerCount / 1_000)}k`
  }

  if (playerCount >= 1_000) {
    const thousands = playerCount / 1_000
    return `${thousands.toFixed(1).replace(/\.0$/, '')}k`
  }

  return String(playerCount)
}

export const useRumblingPlayerCount = (
  gameTitles: () => string[],
  sectionKey: () => string,
) => {
  const playerCountByTitle = ref<Record<string, number>>({})

  const syncBaseCounts = (): void => {
    const section = sectionKey()
    const nextCounts: Record<string, number> = { ...playerCountByTitle.value }

    for (const gameTitle of gameTitles()) {
      if (nextCounts[gameTitle] === undefined) {
        nextCounts[gameTitle] = getStablePlayerCount(gameTitle, section)
      }
    }

    playerCountByTitle.value = nextCounts
  }

  const rumbleCounts = (): void => {
    const section = sectionKey()
    const nextCounts: Record<string, number> = { ...playerCountByTitle.value }

    for (const gameTitle of gameTitles()) {
      const baseCount = getStablePlayerCount(gameTitle, section)
      const currentCount = nextCounts[gameTitle] ?? baseCount
      const jitter = Math.floor((Math.random() - 0.5) * baseCount * 0.06)
      const minimumBound = Math.floor(baseCount * 0.88)
      const maximumBound = Math.min(maximumPlayerCount, Math.floor(baseCount * 1.14))

      nextCounts[gameTitle] = Math.min(
        maximumBound,
        Math.max(minimumBound, currentCount + jitter),
      )
    }

    playerCountByTitle.value = nextCounts
  }

  const getDisplayCount = (gameTitle: string): string => {
    const section = sectionKey()
    const count = playerCountByTitle.value[gameTitle] ?? getStablePlayerCount(gameTitle, section)

    return formatCompactPlayerCount(count)
  }

  syncBaseCounts()
  watch(gameTitles, syncBaseCounts)

  let rumbleInterval: ReturnType<typeof setInterval> | undefined

  onMounted(() => {
    syncBaseCounts()
    rumbleInterval = window.setInterval(rumbleCounts, 2_600)
  })

  onBeforeUnmount(() => {
    if (rumbleInterval !== undefined) {
      window.clearInterval(rumbleInterval)
    }
  })

  return {
    getDisplayCount,
  }
}
