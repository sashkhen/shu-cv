import { defineConfig } from "vite";

import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const isProduction = command === "build";

  return {
    base: "",
    plugins: [react()],
    css: {
      modules: {
        generateScopedName: isProduction
          ? "[hash:base64:5]"
          : "[folder]__[local]__[hash:base64:5]",
      },
    },
    build: {
      outDir: "./build",
    },
  };
});
