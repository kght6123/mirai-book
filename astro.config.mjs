import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import node from "@astrojs/node";
import tailwind from "@astrojs/tailwind";

import markdoc from "@astrojs/markdoc";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), markdoc()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});