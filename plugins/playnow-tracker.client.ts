import { defineNuxtPlugin } from '#app'
import { isEnvRedirectUrl, trackEnvClick, resolvePlaynowEnvUrl } from '~/utils/playnowTracker'

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return

  const handleGlobalClick = (event: MouseEvent) => {
    const target = event.target as HTMLElement | null
    if (!target) return

    // Find the closest clickable element
    const clickable = target.closest('a, button, [data-redirect-url], [data-env-redirect]') as HTMLElement | null
    if (!clickable) return

    let destinationUrl = ''
    if (clickable.tagName.toLowerCase() === 'a') {
      destinationUrl = (clickable as HTMLAnchorElement).href || ''
    } else {
      destinationUrl =
        clickable.getAttribute('data-redirect-url') ||
        clickable.getAttribute('data-href') ||
        clickable.getAttribute('href') ||
        ''
    }

    if (!destinationUrl && clickable.hasAttribute('data-env-redirect')) {
      destinationUrl = resolvePlaynowEnvUrl()
    }

    if (destinationUrl && isEnvRedirectUrl(destinationUrl)) {
      const buttonText = (
        clickable.innerText ||
        clickable.getAttribute('aria-label') ||
        clickable.getAttribute('title') ||
        'link'
      ).trim().slice(0, 100)

      const section =
        clickable.closest('[data-section]')?.getAttribute('data-section') ||
        (clickable.closest('header') ? 'Header' :
        clickable.closest('footer') ? 'Footer' :
        clickable.closest('.game-card') ? 'GameCard' :
        clickable.closest('.sports-popular, .sports-tab') ? 'Sports' :
        clickable.closest('.jackpot-section') ? 'Jackpot' :
        'General')

      trackEnvClick({
        targetUrl: destinationUrl,
        buttonText,
        buttonClass: clickable.className ? String(clickable.className).slice(0, 150) : undefined,
        buttonId: clickable.id || undefined,
        section,
        location: window.location.pathname,
        x: event.clientX,
        y: event.clientY,
      })
    }
  }

  document.addEventListener('click', handleGlobalClick, { capture: true, passive: true })
})
