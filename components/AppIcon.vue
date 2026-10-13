<script setup lang="ts">
import {
  BadgePercent,
  Bitcoin,
  Boxes,
  Cherry,
  CircleHelp,
  CircleDollarSign,
  CircleUserRound,
  Coins,
  Crown,
  Dices,
  Flame,
  Gamepad2,
  Gem,
  Gift,
  Headphones,
  Heart,
  LayoutGrid,
  Megaphone,
  Radio,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Spade,
  Swords,
  Trophy,
  UsersRound,
  WalletCards,
} from 'lucide-vue-next'
import type { Component } from 'vue'
import type { IconName } from '~/types/casino'

interface Props {
  name: IconName
  size?: number
  strokeWidth?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 18,
  strokeWidth: 1.8,
})

const icons: Record<IconName, Component> = {
  'badge-percent': BadgePercent,
  bitcoin: Bitcoin,
  boxes: Boxes,
  cherry: Cherry,
  'circle-help': CircleHelp,
  'circle-dollar': CircleDollarSign,
  'circle-user': CircleUserRound,
  coins: Coins,
  crown: Crown,
  dices: Dices,
  flame: Flame,
  'gamepad-2': Gamepad2,
  gem: Gem,
  gift: Gift,
  headphones: Headphones,
  heart: Heart,
  'layout-grid': LayoutGrid,
  megaphone: Megaphone,
  radio: Radio,
  rocket: Rocket,
  search: Search,
  'shield-check': ShieldCheck,
  sparkles: Sparkles,
  spade: Spade,
  swords: Swords,
  trophy: Trophy,
  users: UsersRound,
  'wallet-cards': WalletCards,
}
</script>

<template>
  <component
    :is="icons[props.name]"
    aria-hidden="true"
    :size="props.size"
    :stroke-width="props.strokeWidth"
  />
</template>
