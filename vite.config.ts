import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];

export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS && repositoryName ? `/${repositoryName}/` : "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    assetsDir: "assets",
    sourcemap: false,
  },
});
