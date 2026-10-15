/**
 * Global redirect helper to navigate to bybet.com or an external URL.
 * Can be bound directly to template @click handlers (e.g. `@click="redirectToBybet"` or `@click="redirectToBybet()"`).
 */
export const redirectToBybet = (
  urlOrEvent?: string | Event,
  target: '_blank' | '_self' = '_blank',
): void => {
  if (typeof window === 'undefined') {
    return
  }

  const url = typeof urlOrEvent === 'string' && urlOrEvent.startsWith('http')
    ? urlOrEvent
    : 'https://bybet.com/'

  if (target === '_blank') {
    window.open(url, '_blank', 'noopener,noreferrer')
  } else {
    window.location.href = url
  }
}

