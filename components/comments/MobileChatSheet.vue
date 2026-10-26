<script setup lang="ts">
import { ChevronDown } from 'lucide-vue-next'
import CommentPanel from './CommentPanel.vue'

const { context, openGameComments, openSportsComments, closeComments } = useCommentPanel()
const route = useRoute()
const expanded = computed(() => context.value !== null)
let gestureStart: { x: number; y: number } | null = null
let ignoreClick = false

const expand = (): void => {
  if (expanded.value) return
  if (route.path.startsWith('/explore/sports/')) openSportsComments()
  else openGameComments()
}

const toggle = (): void => {
  if (ignoreClick) {
    ignoreClick = false
    return
  }
  if (expanded.value) closeComments()
  else expand()
}

const startGesture = (event: PointerEvent): void => {
  if (!event.isPrimary || event.button !== 0) return
  ignoreClick = false
  gestureStart = { x: event.clientX, y: event.clientY }
  const target = event.currentTarget as HTMLElement
  target.setPointerCapture(event.pointerId)
}

const endGesture = (event: PointerEvent): void => {
  if (!gestureStart) return
  const deltaY = event.clientY - gestureStart.y
  const deltaX = event.clientX - gestureStart.x
  gestureStart = null
  if (Math.abs(deltaY) < 28 || Math.abs(deltaY) <= Math.abs(deltaX)) return
  ignoreClick = true
  if (deltaY < 0) expand()
  else closeComments()
}
</script>

<template>
  <section class="mobile-chat-sheet" :class="{ 'mobile-chat-sheet--expanded': expanded }" aria-label="Chat Room">
    <button
      type="button"
      class="mobile-chat-sheet__toggle"
      aria-controls="mobile-chat-content"
      :aria-expanded="expanded"
      @click="toggle"
      @pointerdown="startGesture"
      @pointerup="endGesture"
      @pointercancel="gestureStart = null"
    >
      <span class="mobile-chat-sheet__handle" aria-hidden="true" />
      <span class="mobile-chat-sheet__heading">
        <span id="mobile-chat-title">Chat Room</span>
        <ChevronDown v-if="expanded" :size="18" aria-hidden="true" />
      </span>
    </button>
    <div id="mobile-chat-content" class="mobile-chat-sheet__content" :inert="!expanded" :aria-hidden="!expanded">
      <CommentPanel v-if="expanded" embedded />
    </div>
  </section>
</template>

<style scoped>
.mobile-chat-sheet {
  overflow: hidden;
  border-radius: 18px 18px 0 0;
  color: #fff;
  background: linear-gradient(120deg, rgb(82 111 83 / 42%), rgb(135 124 112 / 46%), rgb(61 83 74 / 50%));
  backdrop-filter: blur(24px) saturate(1.4);
  -webkit-backdrop-filter: blur(24px) saturate(1.4);
}

.mobile-chat-sheet__toggle {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 11px;
  padding: 5px 8px 8px;
  border: 0;
  color: inherit;
  background: transparent;
  touch-action: none;
  user-select: none;
}

.mobile-chat-sheet__handle {
  width: 40px;
  height: 4px;
  border-radius: 999px;
  background: rgb(0 0 0 / 75%);
}

.mobile-chat-sheet__heading {
  display: flex;
  width: 100%;
  min-height: 44px;
  align-items: center;
  justify-content: space-between;
  padding: 0 9px;
  border: 1px solid rgb(255 255 255 / 8%);
  border-radius: 12px;
  background: rgb(255 255 255 / 15%);
  font-size: 14px;
  font-weight: 700;
  text-align: left;
}

.mobile-chat-sheet__content {
  height: 0;
  overflow: hidden;
  transition: height 280ms cubic-bezier(0.22, 1, 0.36, 1);
}

.mobile-chat-sheet--expanded .mobile-chat-sheet__content {
  height: min(60dvh, 520px);
}

@media (prefers-reduced-motion: reduce) {
  .mobile-chat-sheet__content { transition: none; }
}
</style>
