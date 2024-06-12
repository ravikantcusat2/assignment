import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// Vitest configuration
export default defineConfig({
  plugins: [react()],
  test: {
    setupFiles: './setupTests.js',
  },
  esbuild: {
    loader: {
      '.js': 'jsx',
    },
  },
});

// Test suite
