<script setup lang="ts">
interface Props {
  title?: string
  message?: string
}

withDefaults(defineProps<Props>(), {
  title: 'Under maintenance',
  message: 'This game is undergoing maintenance, sorry for the inconvenience caused.',
})

const emit = defineEmits<{ close: [] }>()
const dialog = ref<HTMLDialogElement | null>(null)
let previousOverflow = ''

onMounted(() => {
  previousOverflow = document.body.style.overflow
  document.body.style.overflow = 'hidden'
  dialog.value?.showModal()
})

onBeforeUnmount(() => {
  dialog.value?.close()
  document.body.style.overflow = previousOverflow
})
</script>

<template>
  <Teleport to="body">
    <dialog
      ref="dialog"
      class="maintenance-modal mobile-modal-slide-up prompt-sheet"
      aria-labelledby="maintenance-title"
      aria-describedby="maintenance-description"
      @cancel.prevent="emit('close')"
      @click="event => { if (event.target === dialog) emit('close') }"
    >
      <div class="maintenance-content">
        <div class="maintenance-symbol" aria-hidden="true">!</div>
        <h2 id="maintenance-title">{{ title }}</h2>
        <p id="maintenance-description">
          {{ message }}
        </p>
        <button type="button" autofocus @click="emit('close')">OK</button>
      </div>
    </dialog>
  </Teleport>
</template>

<style scoped>
.maintenance-modal {
  position: fixed;
  inset: auto 0 0;
  width: min(500px, 100vw);
  max-width: none;
  max-height: calc(100dvh - 16px);
  margin: 0 auto;
  padding: 0;
  overflow-y: auto;
  border: 1px solid rgb(126 148 139 / 24%);
  border-bottom: 0;
  border-radius: 20px 20px 0 0;
  color: #fff;
  background: #1c1d1c;
  text-align: center;
  box-shadow: 0 -18px 48px rgb(0 0 0 / 50%);
}

.maintenance-modal::backdrop {
  background: rgb(0 0 0 / 70%);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
}

.maintenance-modal::before {
  content: '';
  display: block;
  width: 42px;
  height: 4px;
  margin: 10px auto 0;
  border-radius: 999px;
  background: rgb(190 194 191 / 58%);
}

.maintenance-content {
  padding: 16px 16px 20px;
}

.maintenance-symbol {
  display: grid;
  width: 44px;
  height: 44px;
  margin: 0 auto 12px;
  place-items: center;
  border-radius: 50%;
  background: #00875e;
  color: #fff;
  font-size: 30px;
  font-weight: 800;
  line-height: 1;
}

h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
  color: #fff;
}

p {
  max-width: 290px;
  margin: 8px auto 20px;
  font-size: 14px;
  line-height: 19px;
  color: #e5e7eb;
}

button {
  width: 100%;
  min-height: 50px;
  padding: 12px;
  border: 0;
  border-radius: 12px;
  color: #fff;
  background: #00875e;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 150ms ease;
}

button:hover {
  background: #047954;
}

button:focus-visible {
  outline: 2px solid #fff;
  outline-offset: -3px;
}
</style>
