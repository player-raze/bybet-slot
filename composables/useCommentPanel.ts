import type { SportsEvent } from '~/types/sports'

type CommentContext = { kind: 'sports'; match: SportsEvent | null } | { kind: 'games' }

export const useCommentPanel = () => {
  const context = useState<CommentContext | null>('comment-panel', () => null)

  const openSportsComments = (match: SportsEvent | null = null): void => {
    context.value = { kind: 'sports', match }

    if (match && import.meta.client && window.innerWidth < 1280) {
      void nextTick(() => {
        document.getElementById('comment-panel')?.scrollIntoView({ block: 'start', behavior: 'smooth' })
      })
    }
  }

  const openGameComments = (): void => {
    context.value = { kind: 'games' }
  }

  const closeComments = (): void => {
    context.value = null
  }

  return { context, openSportsComments, openGameComments, closeComments }
}
