<script setup lang="ts">
import DepositReminderModal from '~/components/modals/DepositReminderModal.vue'

const showModal = ref(true)
const router = useRouter()

const handleClose = () => {
  showModal.value = false
  if (import.meta.client && window.history.length > 1) {
    router.back()
  } else {
    router.push('/explore/live-plaza/home')
  }
}
</script>

<template>
  <div>
    <ComingSoonFallback />
    <DepositReminderModal v-if="showModal" @close="handleClose" @ok="handleClose" />
  </div>
</template>
