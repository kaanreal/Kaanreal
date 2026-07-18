import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://kaanreal.me",
  vite: {
    plugins: [tailwindcss()],
  },
});
