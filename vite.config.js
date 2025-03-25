import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/simpletodo/",
  plugins: [react(), tailwindcss()],
  css: {
    modules: {
      localsConvention: "camelCase", // Преобразует имена классов в camelCase
    },
  },
});
