import { resolve } from 'path';
import { defineConfig } from 'vite';

import legacy from '@vitejs/plugin-legacy';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), legacy()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
