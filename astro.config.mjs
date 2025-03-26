// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    site: 'https://astronaut.github.io',
    base: 'mi-repo',
});