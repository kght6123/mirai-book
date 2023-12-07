import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc()],
  output: "static",
  adapter: node({
    mode: "standalone"
  })
});