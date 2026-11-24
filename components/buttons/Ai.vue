<script setup lang="ts">
import { Sparkles } from 'lucide-vue-next'
import { EXTERNAL_LINK_REL, isExternalHref } from '~/utils/externalLinkRel'

const props = withDefaults(defineProps<{
  active?: boolean
  title?: string
  to?: string
}>(), {
  active: false,
  title: 'Smart Pick AI',
})

const isExternal = computed(() => isExternalHref(props.to))

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

const handleClick = (event: MouseEvent): void => {
  emit('click', event)
}
</script>

<template>
  <NuxtLink
    v-if="to"
    :to="to"
    :external="isExternal"
    :rel="isExternal ? EXTERNAL_LINK_REL : undefined"
    class="toolbar-circle-btn ai-button"
    :class="{ 'ai-button--active': active }"
    :title="title"
    :aria-label="title"
  >
    <Sparkles :size="18" aria-hidden="true" />
  </NuxtLink>
  <button
    v-else
    type="button"
    class="toolbar-circle-btn ai-button"
    :class="{ 'ai-button--active': active }"
    :title="title"
    :aria-label="title"
    @click="handleClick"
  >
    <Sparkles :size="18" aria-hidden="true" />
  </button>
</template>


