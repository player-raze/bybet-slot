<script setup lang="ts">
import { Info } from 'lucide-vue-next'
import type { WinRow } from '~/types/casino'

defineProps<{
  rows: WinRow[]
}>()
</script>

<template>
  <section class="wins-section content-section" aria-labelledby="wins-title">
    <div class="section-heading">
      <div>
        <span class="heading-icon"><AppIcon name="trophy" :size="16" /></span>
        <h2 id="wins-title">Recent Wins</h2>
        <span class="demo-label" title="Illustrative data only"><Info :size="12" /> Demo data</span>
      </div>
    </div>

    <div class="table-shell" tabindex="0" aria-label="Recent wins demo table, horizontally scrollable">
      <table>
        <thead>
          <tr>
            <th scope="col">Game</th>
            <th scope="col">Player</th>
            <th scope="col">Time</th>
            <th scope="col">Multiplier</th>
            <th scope="col" class="amount-column">Win Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="row in rows" :key="`${row.player}-${row.time}`">
            <td>
              <span class="game-miniature">{{ row.gameSymbol }}</span>
              <strong>{{ row.game }}</strong>
            </td>
            <td class="muted">{{ row.player }}</td>
            <td class="muted">{{ row.time }}</td>
            <td><span class="multiplier">{{ row.multiplier }}</span></td>
            <td class="amount-column">
              <span class="currency-icon">₮</span>
              <strong>{{ row.amount }}</strong>
              <small>{{ row.currency }}</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<style scoped>
.demo-label {
  display: inline-flex;
  align-items: center;
  padding: 0.22rem 0.4rem;
  border-radius: 0.3rem;
  color: #77877f;
  font-size: 0.53rem;
  font-weight: 650;
  background: rgba(255, 255, 255, 0.04);
  gap: 0.25rem;
}

.table-shell {
  overflow-x: auto;
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: rgba(17, 29, 23, 0.46);
}

table {
  width: 100%;
  min-width: 44rem;
  border-collapse: collapse;
}

th {
  height: 2.65rem;
  color: #718079;
  font-size: 0.58rem;
  font-weight: 700;
  text-align: left;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  background: rgba(255, 255, 255, 0.018);
}

th,
td {
  padding: 0 1rem;
}

td {
  height: 3.55rem;
  border-top: 1px solid var(--border);
  color: var(--text);
  font-size: 0.66rem;
}

td:first-child {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.game-miniature {
  display: grid;
  width: 2rem;
  height: 2rem;
  flex: 0 0 auto;
  place-items: center;
  border-radius: 0.38rem;
  color: white;
  font-family: Georgia, serif;
  background: linear-gradient(135deg, var(--brand), #13271f);
}

.muted {
  color: var(--secondary);
}

.multiplier {
  display: inline-block;
  min-width: 3rem;
  padding: 0.22rem 0.35rem;
  border-radius: 0.3rem;
  color: #73e2b9;
  text-align: center;
  background: rgba(50, 212, 154, 0.08);
}

.amount-column {
  text-align: right;
}

td.amount-column {
  color: #b6f4dc;
}

.currency-icon {
  display: inline-grid;
  width: 1.1rem;
  height: 1.1rem;
  margin-right: 0.35rem;
  place-items: center;
  border-radius: 50%;
  color: #08100c;
  font-size: 0.55rem;
  font-weight: 850;
  background: #56d4a6;
}

.amount-column small {
  margin-left: 0.25rem;
  color: #718079;
  font-size: 0.5rem;
}
</style>
