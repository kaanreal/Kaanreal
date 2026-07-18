import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/Kaanreal",
  site: "https://kaanreal.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
