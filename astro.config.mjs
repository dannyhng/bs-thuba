import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dannyhng.github.io',
  base: '/bs-thuba',
  vite: {
    plugins: [tailwindcss()]
  }
});