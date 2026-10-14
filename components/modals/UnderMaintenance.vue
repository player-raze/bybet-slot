<script setup lang="ts">
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
      class="maintenance-modal"
      aria-labelledby="maintenance-title"
      aria-describedby="maintenance-description"
      @cancel.prevent="emit('close')"
      @click="event => { if (event.target === dialog) emit('close') }"
    >
      <div class="maintenance-content">
        <div class="maintenance-symbol" aria-hidden="true">!</div>
        <h2 id="maintenance-title">Under maintenance</h2>
        <p id="maintenance-description">
          This game is undergoing maintenance, sorry for the inconvenience caused.
        </p>
        <button type="button" autofocus @click="emit('close')">OK</button>
      </div>
    </dialog>
  </Teleport>
</template>

<style scoped>
.maintenance-modal {
  width: min(375px, calc(100vw - 24px));
  max-width: none;
  max-height: calc(100dvh - 32px);
  margin: auto;
  padding: 0;
  overflow-y: auto;
  border: 0;
  border-radius: 11px;
  color: #fff;
  background: #1e1e1e;
  text-align: center;
  box-shadow: 0 16px 48px rgb(0 0 0 / 30%);
}

.maintenance-modal::backdrop {
  background: rgb(0 0 0 / 70%);
}

.maintenance-content {
  padding: 22px 12px 20px;
}

.maintenance-symbol {
  display: grid;
  width: 44px;
  height: 44px;
  margin: 0 auto 12px;
  place-items: center;
  border-radius: 50%;
  background: #006649;
  font-size: 36px;
  font-weight: 800;
  line-height: 1;
}

h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  line-height: 25px;
}

p {
  max-width: 235px;
  margin: 6px auto 16px;
  font-size: 14px;
  line-height: 18px;
}

button {
  width: 100%;
  min-height: 54px;
  padding: 12px;
  border: 0;
  border-radius: 13px;
  color: #fff;
  background: #006649;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
}

button:hover {
  background: #087957;
}

button:focus-visible {
  outline: 2px solid #fff;
  outline-offset: -5px;
}
</style>
