<script setup lang="ts">
import { ChevronsDown, ChevronsUp } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  modelValue?: boolean
}>(), {
  modelValue: false,
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  toggle: []
}>()

const handleClick = (): void => {
  emit('update:modelValue', !props.modelValue)
  emit('toggle')
}
</script>

<template>
  <button
    type="button"
    class="toolbar-circle-btn collapse-button"
    :aria-label="modelValue ? 'Expand all tournaments' : 'Collapse all tournaments'"
    :title="modelValue ? 'Expand all' : 'Collapse all'"
    @click="handleClick"
  >
    <ChevronsDown
      v-if="modelValue"
      :size="18"
      aria-hidden="true"
    />
    <ChevronsUp
      v-else
      :size="18"
      aria-hidden="true"
    />
  </button>
</template>

