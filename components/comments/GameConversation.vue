<script setup lang="ts">
const messages = [
  { name: 'Dray', avatar: '🎮', vip: 1, text: 'Anyone playing live casino tonight?', reaction: '👍 5+' },
  { name: 'Ito', avatar: '👩🏻', vip: 2, text: 'Trying a few new games today.' },
  { name: 'Nes*****', avatar: 'N', vip: 1, text: 'Good luck, everyone!' },
  { name: 'ikawlang27', avatar: '🌄', vip: 1, text: 'What’s your favorite slot?', reaction: '👍 🙌' },
  { name: 'jeo*****', avatar: 'J', vip: 1, text: 'Just here to hang out and chat.' },
  { name: 'Kem*****', avatar: '🦄', vip: 2, text: 'Hello, chat room! 👋' },
]
</script>

<template>
  <div class="space-y-5 p-4">
    <p class="text-[11px] text-[#949b97]">Sample conversation</p>
    <article v-for="(message, index) in messages" :key="index" class="flex items-start gap-2">
      <div class="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#006649] text-[18px] text-white" aria-hidden="true">{{ message.avatar }}</div>
      <div class="min-w-0 flex-1">
        <div class="mb-2 flex items-center gap-2 text-[12px]">
          <span class="rounded-full bg-gradient-to-b from-[#0bb58a] to-[#005a40] px-1.5 text-[10px] font-bold italic text-white">VIP{{ message.vip }}</span>
          <span class="truncate text-[#13b68b]">{{ message.name }}</span>
        </div>
        <p class="w-fit max-w-full break-words rounded-[20px] bg-[#242523] px-3 py-2.5 text-[14px] leading-snug text-white">{{ message.text }}</p>
        <span v-if="message.reaction" class="relative -top-1 inline-block rounded-full bg-[#242523] px-2 text-[11px] text-white">{{ message.reaction }}</span>
      </div>
    </article>
  </div>
</template>
