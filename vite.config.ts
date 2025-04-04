import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '$': path.resolve(__dirname, './'),
    },
  },
  server: {
    host: true,
    port: 3000,
    open: false,
    strictPort: false,
    cors: true,
  },
  build: {
    outDir: 'dist',
    target: 'esnext',
    assetsInlineLimit: 4096,
    chunkSizeWarningLimit: 1000,
  },
});
