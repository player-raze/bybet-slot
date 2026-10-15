<script setup lang="ts">
import { ArrowUpDown } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  modelValue?: 'league' | 'time'
}>(), {
  modelValue: 'league',
})

const emit = defineEmits<{
  'update:modelValue': [value: 'league' | 'time']
  change: [value: 'league' | 'time']
}>()

const isSortOpen = ref(false)
const sortDropdownRef = ref<HTMLElement | null>(null)

const selectSort = (mode: 'league' | 'time'): void => {
  emit('update:modelValue', mode)
  emit('change', mode)
  isSortOpen.value = false
}

const handleOutsideClick = (event: MouseEvent): void => {
  if (sortDropdownRef.value && !sortDropdownRef.value.contains(event.target as Node)) {
    isSortOpen.value = false
  }
}

const handleKeydown = (event: KeyboardEvent): void => {
  if (event.key === 'Escape') {
    isSortOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
  document.addEventListener('keydown', handleKeydown)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick)
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <div
    ref="sortDropdownRef"
    class="sort-dropdown-wrapper"
  >
    <button
      type="button"
      class="toolbar-circle-btn sort-trigger"
      :aria-expanded="isSortOpen"
      aria-haspopup="menu"
      aria-label="Sort options"
      title="Sort"
      @click="isSortOpen = !isSortOpen"
    >
      <ArrowUpDown :size="18" aria-hidden="true" />
    </button>

    <div
      v-if="isSortOpen"
      class="sort-menu"
      role="menu"
    >
      <div class="sort-menu-title">Sort</div>
      <button
        type="button"
        role="menuitem"
        class="sort-menu-item"
        :class="{ 'sort-menu-item--active': modelValue === 'league' }"
        @click="selectSort('league')"
      >
        Sort by league
      </button>
      <button
        type="button"
        role="menuitem"
        class="sort-menu-item"
        :class="{ 'sort-menu-item--active': modelValue === 'time' }"
        @click="selectSort('time')"
      >
        Sort by time
      </button>
    </div>
  </div>
</template>