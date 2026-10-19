<script setup lang="ts">
import { SLOTS_COMMENTS } from '~/data/comments'

const messages = SLOTS_COMMENTS
</script>

<template>
  <div class="space-y-4 p-3 overflow-y-auto">
    <article
      v-for="(message, index) in messages"
      :key="message.id || index"
      class="flex items-start gap-2.5"
    >
      <!-- Avatar -->
      <div
        class="grid h-5 w-5 shrink-0 place-items-center rounded-full text-[15px] font-bold text-white shadow-sm"
        :style="{ backgroundColor: message.avatarBg || '#006649' }"
        aria-hidden="true"
      >
        {{ message.avatar }}
      </div>

      <!-- Content -->
      <div class="min-w-0 flex-1">
        <!-- Header: Level Badge + Name -->
        <div class="mb-1 flex items-center gap-1.5 text-[12px]">
          {{ message.level || 'K1' }}
          <span class="truncate font-semibold text-[#34d399] text-[12px]">{{ message.name }}</span>
        </div>

        <!-- Message Bubble -->
        <p class="w-fit max-w-[95%] break-words rounded-[16px] bg-[#242523] px-1 py-1 text-[13px] leading-relaxed text-[#f0f2f1]">
          {{ message.text }}
        </p>

        <!-- Reaction -->
        <div
          v-if="message.reaction"
          class="mt-1 inline-flex items-center gap-1 rounded-full bg-[#1e201f] border border-[#2d302e] px-1 py-0.5 text-[11px] text-white shadow-sm"
        >
          <span>{{ message.reaction }}</span>
        </div>
      </div>
    </article>
  </div>
</template>
