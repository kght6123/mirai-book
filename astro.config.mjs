import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({
    // Example: Provide a custom path to a Tailwind config file
    configFile: './tailwind.config.ts',
    applyBaseStyles: false,
  }), markdoc()],
  output: "static",
  adapter: node({
    mode: "standalone"
  })
});