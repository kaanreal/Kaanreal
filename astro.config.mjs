import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/",
  site: "https://kaan.moe",
  vite: {
    plugins: [tailwindcss()],
  },
});
