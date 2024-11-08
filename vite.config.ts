import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "",
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: "[folder]__[local]__[hash:base64:5]",
    },
  },
  build: {
    outDir: "./build",
  },
});
