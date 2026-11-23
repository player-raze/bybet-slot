import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

export default {
  content: [],
  theme: {
    extend: {
      colors: {
        'main-color': 'var(--main-color)',
        'main-highlight': 'var(--main-highlight)',
        'header-text': 'var(--header-text)',
        'theme-header-text': 'var(--header-text)',
        'theme-page': 'var(--page)',
        'theme-surface': 'var(--surface)',
        'theme-elevated': 'var(--elevated)',
        'theme-panel': 'var(--panel)',
        'theme-sidebar': 'var(--sidebar)',
        'theme-border': 'var(--border)',
        'theme-text': 'var(--text)',
        'theme-heading': 'var(--heading)',
      },
      fontFamily: {
        sans: [
          '"PingFang SC"',
          'PingFang',
          'Manrope',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant('light', [
        'html[data-theme="light"]:not(#_):not(#__) &',
        'html[data-theme="light"]:not(#_) &',
        'html[data-theme="light"] &',
        '[data-theme="light"] &',
        '&[data-theme="light"]',
        '.light &',
        '&.light',
      ])
    }),
  ],
} satisfies Config
