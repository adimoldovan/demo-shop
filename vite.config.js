import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const buildDate = new Date()
  .toISOString()
  .replace('T', ' ')
  .replace(/\..+/, ' UTC');

// https://vite.dev/config/
export default defineConfig({
  // Served from https://adimoldovan.github.io/demo-shop/
  base: '/demo-shop/',
  plugins: [react()],
  define: {
    __BUILD_DATE__: JSON.stringify(buildDate),
  },
  build: {
    // Keep CRA's output dir so the Dockerfile and other consumers still work.
    outDir: 'build',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    css: true,
  },
});
