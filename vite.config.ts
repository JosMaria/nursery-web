import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@nursery/components': path.resolve(__dirname, './src/components'),
      '@nursery/styles': path.resolve(__dirname, './src/styles'),
    }
  },
  plugins: [react()],
})
