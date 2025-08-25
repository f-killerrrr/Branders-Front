import { resolve } from 'node:path';
import viteReact from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [viteReact()],
  resolve: { alias: { '@': resolve(__dirname, './src') } },
  server: {
    proxy: {
      '/mail': { target: 'http://branders.kro.kr', changeOrigin: true },
      '/userinfo': { target: 'http://branders.kro.kr', changeOrigin: true },
    },
  },
});
