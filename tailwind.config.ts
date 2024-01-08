import plugin from 'tailwindcss/plugin';
const flattenColorPalette = require('tailwindcss/src/util/flattenColorPalette')

/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: false,
  },
  separator: '_',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,mdoc,svelte,ts,tsx,vue}'],
  safelist: [
    // 行ハイライト用、1-100行まで対応
    {
      pattern: /hl-(red|yellow)-200/,
      variants: [...Array(100)].map((_, i) => `scl-${i+1}`),
    },
  ],
  theme: {
    counterIncrement: {
      none: 'none',
      page: 'page',
    },
    breakBefore: {
      auto: 'auto',
      avoid: 'avoid',
      always: 'always',
      all: 'all',
      avoidPage: 'avoid-page',
      page: 'page',
      left: 'left',
      right: 'right',
      recto: 'recto',
      verso: 'verso',
      avoidColumn: 'avoid-column',
      column: 'column',
      avoidRegion: 'avoid-region',
      region: 'region',
    },
    extend: {},
  },
  plugins: [
    plugin(function({ matchUtilities, matchVariant, theme }) {
      matchUtilities(
        {
          ci: (value) => ({
            counterIncrement: value
          }),
          "target-counter": (value) => ({
            content: `leader(".") target-counter(attr(href),${value})`
          }),
          "counter": (value) => ({
            content: `counter(${value})`
          }),
        },
        { values: theme('counterIncrement') }
      )
      matchUtilities(
        {
          "break-bf": (value) => ({
            breakBefore: value
          }),
        },
        { values: theme('breakBefore') }
      )
      matchVariant("acl", (value) => `& > .astro-code > code > .line:nth-child(${value})`, {
        // 100行まで対応
        values: Object.fromEntries(new Map([...Array(100)].map((_, i) => [i+1,`${i+1}`]))),
      })
      matchVariant("scl", (value) => `& > .shiki > code > .line:nth-child(${value})`, {
        // 100行まで対応
        values: Object.fromEntries(new Map([...Array(100)].map((_, i) => [i+1,`${i+1}`]))),
      })
      matchUtilities(
        {
          hl: (value) => ({
            "background-color": value,
            "padding-right": '1rem',
            "width": '515px',
            "display": 'inline-block',
          }),
        },
        { values: flattenColorPalette(theme('colors', {})), type: 'color' }
      )
    }),
  ],
}
