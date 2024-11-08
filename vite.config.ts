import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "",
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: (name: string, filename: string) => {
        return `${filename.split("/").reverse()[0].split(".")[0]}__${name}`;
      },
    },
  },
  build: {
    outDir: "./build",
  },
});
