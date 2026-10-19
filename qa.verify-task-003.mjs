// QA verification script for TASK-003: "copy this for explore/entertainment/live-casino page"
// Verifies that pages/explore/entertainment/live-casino.vue contains the verbatim HTML copy
// from the Engineering Lead brief. No implementation files are modified; this is a read-only check.
import fs from 'fs';

const PAGE = '/Users/lanie/.ai-office/worktrees/7a16548f15f3/TASK-003/pages/explore/entertainment/live-casino.vue';
const ROUTE = '/explore/entertainment/live-casino';

let passed = 0;
let failed = 0;

function check(name, fn) {
  const ok = fn();
  if (ok) { passed++; console.log(`PASS - ${name}`); }
  else { failed++; console.log(`FAIL - ${name}`); }
  return ok;
}

const src = fs.existsSync(PAGE) ? fs.readFileSync(PAGE, 'utf8') : '';

check('page file exists', () => fs.existsSync(PAGE) && src.length > 0);
check('page is not a bare ComingSoonFallback stub', () => !/^\s*<template>\s*<ComingSoonFallback \/>\s*<\/template>\s*$/s.test(src));
check('page does not reference ComingSoonFallback', () => !src.includes('ComingSoonFallback'));

// Verbatim markers from the Engineering Lead's HTML copy
const markers = [
  'opacity-100',
  'min-w-full cursor-pointer',
  'mx-auto w-full max-w-full overflow-hidden rounded-12 bg-layer-3',
  'bg-layer-13',
  'style="width: 179px"',
  'aspect-[200/112]',
  'https://bshots.egcvi.com/thumbnail/pk_thchr1_med_M.jpg',
  'pk_thchr1_med_M',
  'loading="eager"',
  'draggable="false"',
  '2 Hand Casino Hold\'em',
  'bg-casino-2/50 backdrop-blur-5',
  'stroke-button-2',
  '33',
  'bg-casino-3',
  'text-brown-3',
  'object-cover object-top',
];
for (const m of markers) {
  check(`page contains lead-copy marker: ${m}`, () => src.includes(m));
}

console.log(`\nTASK-003 verification: ${passed} passed, ${failed} failed on route ${ROUTE}`);
process.exit(failed > 0 ? 1 : 0);
