// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    site: 'https://alandpa.github.io/Pan-Aroma-Landing-Page',
    vite: {
        plugins: [tailwindcss()]
    }
});
