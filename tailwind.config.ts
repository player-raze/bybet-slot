import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('light', ['[data-theme="light"] &', '&[data-theme="light"]'])
    }),
  ],
} satisfies Config
