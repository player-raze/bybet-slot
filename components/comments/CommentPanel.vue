<script setup lang="ts">
import { X } from 'lucide-vue-next'
import SportsPreview from './SportsPreview.vue'
import EmptyConversation from './EmptyConversation.vue'
import GameConversation from './GameConversation.vue'

const props = defineProps<{ docked?: boolean }>()

const { context, closeComments } = useCommentPanel()
const dialog = ref<HTMLElement | null>(null)
const route = useRoute()
let previousOverflow = ''

const handleBackdropClick = (event: MouseEvent): void => {
  if (!props.docked && event.target === dialog.value) {
    closeComments()
  }
}

onMounted(() => {
  if (props.docked) return

  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  if (dialog.value instanceof HTMLDialogElement) dialog.value.showModal()
})

onBeforeUnmount(() => {
  if (props.docked) return

  if (dialog.value instanceof HTMLDialogElement) dialog.value.close()
  document.body.style.overflow = previousOverflow
})

watch(() => route.path, () => {
  if (!props.docked) closeComments()
})
</script>

<template>
  <Teleport to="body" :disabled="docked">
    <component
      :is="docked ? 'aside' : 'dialog'"
      id="comment-panel"
      ref="dialog"
      class="comment-panel"
      :class="{ 'comment-panel--docked': docked }"
      aria-labelledby="comment-panel-title"
      @cancel.prevent="!docked && closeComments()"
      @click="handleBackdropClick"
    >
      <div v-if="context" class="flex h-full min-h-0 flex-col gap-2 p-0 pb-2 pr-2 text-white">
        <header  v-if="context.kind != 'sports'" class="flex shrink-0 items-center justify-between gap-3 rounded-2xl bg-[#131313] px-3 py-2">
          <span id="comment-panel-title" class="text-[16px] font-bold">Chat Room</span>
          <button type="button" class="grid h-9 w-9 place-items-center rounded-full bg-[#252525] text-[#a2a5a3] hover:text-white" aria-label="Close comments" autofocus @click="closeComments">
            <X :size="18" aria-hidden="true" />
          </button>
        </header>
        <div class="min-h-0 flex-1 overflow-y-auto">
          <div class="flex min-h-full flex-col gap-2">
            <SportsPreview v-if="context.kind === 'sports'" class="shrink-0" />
           
            <section class="flex flex-1 flex-col rounded-2xl border border-white/5 bg-[#131313]" aria-label="Conversation">
              <EmptyConversation v-if="context.kind === 'sports'" class="min-h-[260px] flex-1 py-8" />
              <GameConversation v-else />
              <footer class="flex shrink-0 items-center gap-2 rounded-2xl bg-[#131313] p-2 pb-[max(8px,env(safe-area-inset-bottom))]">
                <a href="https://bybet.com/login" class="chat-login flex min-h-[44px] min-w-0 flex-1 items-center rounded-full px-3 text-[14px] text-[#9ca3af]">Log in to chat</a>
                <a href="https://bybet.com/login" class="chat-login chat-login--icon grid h-[44px] w-[44px] shrink-0 place-items-center rounded-full text-[#9ca3af]" aria-label="Log in to send a message">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="-1 -1 22 22" fill="none" class="h-5 w-5 shrink-0" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.858 0V0.013C12.1678 0.0463357 12.4027 0.307863 12.4027 0.6195C12.4027 0.931137 12.1678 1.19266 11.858 1.226V1.245H2.905C1.99022 1.24554 1.24785 1.98523 1.244 2.9V17.1C1.2462 18.0159 1.98905 18.7575 2.905 18.758H15.084C15.9996 18.7569 16.7418 18.0156 16.744 17.1V9.365H16.763C16.7635 9.02635 17.0374 8.75165 17.376 8.75C17.5395 8.75079 17.6961 8.81659 17.8111 8.93289C17.926 9.0492 17.9901 9.20645 17.989 9.37V17.1C17.9846 18.7017 16.6858 19.9984 15.084 20H2.905C1.30325 19.9984 0.00440563 18.7017 0 17.1V2.9C0.00440563 1.29825 1.30325 0.00164637 2.905 0H11.858ZM13.605 13.79C13.9482 13.79 14.2265 14.0683 14.2265 14.4115C14.2265 14.7547 13.9482 15.033 13.605 15.033H4.585C4.24176 15.033 3.9635 14.7547 3.9635 14.4115C3.9635 14.0683 4.24176 13.79 4.585 13.79H13.605ZM13.717 9.378C14.0602 9.378 14.3385 9.65626 14.3385 9.9995C14.3385 10.3427 14.0602 10.621 13.717 10.621H4.697C4.35375 10.621 4.0755 10.3427 4.0755 9.9995C4.0755 9.65626 4.35375 9.378 4.697 9.378H13.717ZM16.503 0L20 3.4L16.503 6.786V4.848C14.3797 4.68687 12.3162 5.5967 11.003 7.273C11.003 7.273 11.643 1.938 16.503 1.938V0ZM8.319 4.966C8.66224 4.966 8.9405 5.24426 8.9405 5.5875C8.9405 5.93075 8.66224 6.209 8.319 6.209H4.696C4.35276 6.209 4.0745 5.93075 4.0745 5.5875C4.0745 5.24426 4.35276 4.966 4.696 4.966H8.319Z" fill="currentColor" /></svg>
                </a>
              </footer>
            </section>
            
          </div>
          
        </div>
        
      </div>
    </component>
  </Teleport>
</template>

<style scoped>
.comment-panel {
  position: sticky;
  width: min(375px, 23.4375rem);
  height: 100dvh;
  max-width: 100vw;
  max-height: 100dvh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.comment-panel--docked {
  position: sticky;
  z-index: 40;
  width: 100%;
  min-width: 0;
  height: calc(100dvh - var(--header-height));
}

@media (max-width: 1279px) {
  .comment-panel--docked {
    position: relative;
    inset: auto;
    width: min(23.4375rem, 100%);
    height: 650px;
    max-height: none;
    margin: 16px auto;
    z-index: auto;
  }
}

.comment-panel::backdrop {
  background: rgb(0 0 0 / 40%);
}

.chat-login {
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.14), rgba(255, 255, 255, 0.025) 55%, rgba(255, 255, 255, 0.07));
  color: #b8bfbd;
  backdrop-filter: blur(14px) saturate(140%);
  -webkit-backdrop-filter: blur(14px) saturate(140%);
  box-shadow:
    inset 0 1px 1px rgba(255, 255, 255, 0.32),
    inset 0 -1px 2px rgba(255, 255, 255, 0.08),
    0 4px 12px rgba(0, 0, 0, 0.24);
  transition: border-color 160ms ease, background-color 160ms ease, color 160ms ease;
}

.chat-login:hover {
  border-color: rgba(255, 255, 255, 0.4);
  background-color: rgba(255, 255, 255, 0.06);
  color: #fff;
}

.chat-login--icon svg {
  display: block;
  width: 22px;
  height: 22px;
}

.comment-panel :deep(button:focus-visible),
.comment-panel a:focus-visible {
  outline: 2px solid #30cf99;
  outline-offset: -3px;
}
</style>
