import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    css: {
      include: /.+/,
      modules: {
        classNameStrategy: "stable",
      },
    },
    // see https://vitest.dev/guide/environment#test-environment
    environmentOptions: {
      jsdom: {
        resources: "usable",
      },
    },
    setupFiles: ["vitest.setup.ts"],
  },
  resolve: {
    alias: {
      "@": new URL("./src/", import.meta.url).pathname,
    },
  },
});
