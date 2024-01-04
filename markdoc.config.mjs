import { defineMarkdocConfig, nodes, component } from '@astrojs/markdoc/config';
import shiki from '@astrojs/markdoc/shiki';
// import prism from '@astrojs/markdoc/prism';


/** @type {import('@markdoc/markdoc').Config} */
export default defineMarkdocConfig({
  // nodes: {
  //   fence: {
  //     ...nodes.fence,
  //     render: component('./src/components/ClientFence.astro'),
  //     attributes: {
  //       language: {
  //         type: String
  //       },
  //       content: {
  //         type: String
  //       },
  //     }
  //   }
  // },
  nodes: {
    link: {
      render: component('./src/components/markdoc/Link.astro'),
      attributes: {
        href: { type: String },
      },
    },
    fence: {
      render: component('./src/components/markdoc/Code.astro'),
      attributes: {
        content: { type: String },
        language: { type: String },
        process: { type: Boolean },
      },
    },
  },
  extends: [
    shiki({
      // Choose from Shiki's built-in themes (or add your own)
      // Default: 'github-dark'
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'min-light',
      // Enable word wrap to prevent horizontal scrolling
      // Default: false
      wrap: true,
      // Pass custom languages
      // Note: Shiki has countless langs built-in, including `.astro`!
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md
      langs: [],
    }),
    // prism(),
  ],
});