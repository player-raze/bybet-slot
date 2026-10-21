# Transaction Tutorial Visual Assets

This folder contains the illustration images for `visual-stage` in `/tutorial/transactions/deposit` and `/tutorial/transactions/withdraw`.

## Current Files
- `visual-dark.webp`: Default visual asset used when the site is in dark mode.
- `visual-light.webp`: Default visual asset used when the site is in light mode.
- `visual-default.webp`: Fallback visual asset.

## How to Update or Replace Images

1. **Replace Global Defaults:**
   - Overwrite `visual-dark.webp` and `visual-light.webp` with your new assets.

2. **Per-Step Custom Images:**
   - Add your specific step images to this folder (e.g., `deposit-step-1.webp`, `withdraw-step-2.webp`).
   - Reference them in `components/tutorial/TransactionTutorialPage.vue` inside `depositSteps` or `withdrawalSteps`:
     ```ts
     {
       title: 'Deposit Method',
       description: 'Select "Bank Direct Scan"',
       visual: 'deposit-method',
       imageDark: '/tutorial/transactions/deposit-step-1-dark.webp',
       imageLight: '/tutorial/transactions/deposit-step-1-light.webp',
     }
     ```

