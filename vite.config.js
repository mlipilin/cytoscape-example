import { defineConfig } from "vite";
import inject from "@rollup/plugin-inject";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inject({
      // => that should be first under plugins array
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
  base: "cytoscape-example",
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["cytoscape-edge-editing"])],
    },
  },
});
