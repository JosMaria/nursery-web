import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@nursery/components': path.resolve(__dirname, './src/components'),
      '@nursery/styles': path.resolve(__dirname, './src/styles'),
      '@nursery/types': path.resolve(__dirname, './src/types'),
      '@nursery/utils': path.resolve(__dirname, './src/utils'),
      '@nursery/constants': path.resolve(__dirname, './src/constants'),
    }
  },
  plugins: [react()],
})
