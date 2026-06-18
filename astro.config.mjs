import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://latelierdelucette.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
