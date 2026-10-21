<script setup lang="ts">
import { nextTick, onBeforeUnmount, ref, watch } from 'vue'

interface SlotFilterState {
  theme: string
  feature: string
  winningLine: string
}

const props = defineProps<{
  open: boolean
  modelValue: SlotFilterState
}>()

const emit = defineEmits<{
  (event: 'update:open', value: boolean): void
  (event: 'update:modelValue', value: SlotFilterState): void
}>()

const themes = [
  'All',
  'Myth & History',
  'Entertainment',
  'Nature',
  'Sports',
  'Movie',
  'Adventures',
  'Foods',
  'Romantic',
  'Anime',
  'Science Fiction',
  'Others',
]

const features = ['All', 'Buy Spins', 'Prize Pool', 'Auto Game', 'Free Spins']
const winningLines = ['All', '≤10 lines', '11–99 lines', '≥100 lines']

const cancelButton = ref<HTMLButtonElement | null>(null)
const draft = ref<SlotFilterState>({
  theme: 'All',
  feature: 'All',
  winningLine: 'All',
})

let previousBodyOverflow = ''

const copyCurrentFilters = (): void => {
  draft.value = { ...props.modelValue }
}

const close = (): void => {
  emit('update:open', false)
}

const reset = (): void => {
  draft.value = {
    theme: 'All',
    feature: 'All',
    winningLine: 'All',
  }
}

const apply = (): void => {
  emit('update:modelValue', { ...draft.value })
  close()
}

const handleKeydown = (event: KeyboardEvent): void => {
  if (event.key === 'Escape') close()
}

const unlockPage = (): void => {
  if (!import.meta.client) return
  document.body.style.overflow = previousBodyOverflow
  window.removeEventListener('keydown', handleKeydown)
}

watch(
  () => props.open,
  async (isOpen) => {
    if (!import.meta.client) return

    if (isOpen) {
      copyCurrentFilters()
      previousBodyOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeydown)
      await nextTick()
      cancelButton.value?.focus({ preventScroll: true })
    } else {
      unlockPage()
    }
  },
  { immediate: true },
)

onBeforeUnmount(unlockPage)
</script>

<template>
  <Teleport to="body">
    <Transition name="slot-filter-fade">
      <div
        v-if="open"
        class="slot-filter-backdrop"
        role="presentation"
        @mousedown.self="close"
      >
        <section
          class="slot-filter-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="slot-filter-title"
        >
          <header class="slot-filter-header">
            <button
              ref="cancelButton"
              type="button"
              class="slot-filter-cancel"
              @click="close"
            >
              Cancel
            </button>
            <h2 id="slot-filter-title">Filter</h2>
            <span aria-hidden="true" />
          </header>

          <div class="slot-filter-content">
            <fieldset class="slot-filter-group">
              <legend>Theme</legend>
              <div class="slot-filter-grid">
                <button
                  v-for="theme in themes"
                  :key="theme"
                  type="button"
                  class="slot-filter-option"
                  :class="{ 'slot-filter-option--active': draft.theme === theme }"
                  :aria-pressed="draft.theme === theme"
                  @click="draft.theme = theme"
                >
                  {{ theme }}
                </button>
              </div>
            </fieldset>

            <fieldset class="slot-filter-group">
              <legend>Features</legend>
              <div class="slot-filter-grid">
                <button
                  v-for="feature in features"
                  :key="feature"
                  type="button"
                  class="slot-filter-option"
                  :class="{ 'slot-filter-option--active': draft.feature === feature }"
                  :aria-pressed="draft.feature === feature"
                  @click="draft.feature = feature"
                >
                  {{ feature }}
                </button>
              </div>
            </fieldset>

            <fieldset class="slot-filter-group">
              <legend>Winning Line</legend>
              <div class="slot-filter-grid">
                <button
                  v-for="line in winningLines"
                  :key="line"
                  type="button"
                  class="slot-filter-option"
                  :class="{ 'slot-filter-option--active': draft.winningLine === line }"
                  :aria-pressed="draft.winningLine === line"
                  @click="draft.winningLine = line"
                >
                  {{ line }}
                </button>
              </div>
            </fieldset>

            <footer class="slot-filter-actions">
              <button type="button" class="slot-filter-action slot-filter-reset" @click="reset">
                Reset
              </button>
              <button type="button" class="slot-filter-action slot-filter-ok" @click="apply">
                OK
              </button>
            </footer>
          </div>
        </section>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.slot-filter-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background: rgba(0, 0, 0, 0.52);
}

.slot-filter-modal {
  box-sizing: border-box;
  width: min(376px, calc(100vw - 8px));
  max-height: calc(100dvh - 8px);
  overflow-x: hidden;
  overflow-y: auto;
  color: #f5f5f5;
  background:
    radial-gradient(circle at 82% 18%, rgba(77, 58, 35, 0.16), transparent 34%),
    linear-gradient(180deg, rgba(31, 31, 31, 0.97), rgba(25, 26, 25, 0.98));
  border: 1px solid rgba(255, 255, 255, 0.035);
  border-radius: 24px;
  box-shadow: 0 22px 70px rgba(0, 0, 0, 0.62);
  scrollbar-width: none;
  -webkit-backdrop-filter: blur(18px);
  backdrop-filter: blur(18px);
}

.slot-filter-modal::-webkit-scrollbar {
  display: none;
}

.slot-filter-header {
  position: relative;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  min-height: 60px;
  padding: 0 16px;
}

.slot-filter-header h2 {
  grid-column: 2;
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.01em;
}

.slot-filter-cancel {
  justify-self: start;
  min-width: 52px;
  margin: 0;
  padding: 8px 0;
  color: #f5f5f5;
  background: transparent;
  border: 0;
  border-radius: 6px;
  font: inherit;
  font-size: 14px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
  cursor: pointer;
}

.slot-filter-content {
  padding: 4px 16px 20px;
}

.slot-filter-group {
  min-width: 0;
  margin: 0;
  padding: 0;
  border: 0;
}

.slot-filter-group + .slot-filter-group {
  margin-top: 12px;
}

.slot-filter-group legend {
  display: block;
  width: 100%;
  margin: 0 0 11px;
  padding: 0;
  color: #f0f0f0;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
}

.slot-filter-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 10px 12px;
}

.slot-filter-option {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 0;
  height: 42px;
  margin: 0;
  padding: 4px 6px;
  color: #eeeeee;
  background: rgba(13, 14, 13, 0.82);
  border: 1px solid transparent;
  border-radius: 12px;
  font: inherit;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
  transition: border-color 120ms ease, background-color 120ms ease;
}

.slot-filter-option--active {
  background: rgba(13, 17, 15, 0.88);
  border-color: #008d62;
}

.slot-filter-actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-top: 24px;
  padding: 0 4px;
}

.slot-filter-action {
  height: 55px;
  margin: 0;
  padding: 0 12px;
  color: #f5f5f5;
  border: 0;
  border-radius: 12px;
  font: inherit;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
}

.slot-filter-reset {
  background: #2b2b2b;
}

.slot-filter-ok {
  background: #007c55;
  font-weight: 700;
}

.slot-filter-cancel:focus-visible,
.slot-filter-option:focus-visible,
.slot-filter-action:focus-visible {
  outline: 2px solid #19c28b;
  outline-offset: 2px;
}

.slot-filter-fade-enter-active,
.slot-filter-fade-leave-active {
  transition: opacity 150ms ease;
}

.slot-filter-fade-enter-active .slot-filter-modal,
.slot-filter-fade-leave-active .slot-filter-modal {
  transition: opacity 150ms ease, transform 150ms ease;
}

.slot-filter-fade-enter-from,
.slot-filter-fade-leave-to {
  opacity: 0;
}

.slot-filter-fade-enter-from .slot-filter-modal,
.slot-filter-fade-leave-to .slot-filter-modal {
  opacity: 0;
  transform: translateY(8px) scale(0.985);
}

@media (max-height: 660px) {
  .slot-filter-backdrop {
    align-items: flex-start;
  }
}

@media (max-width: 350px) {
  .slot-filter-content {
    padding-inline: 12px;
  }

  .slot-filter-grid {
    gap-inline: 7px;
  }

  .slot-filter-option {
    padding-inline: 3px;
    font-size: 13px;
  }
}
</style>
