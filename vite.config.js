import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '../../node_modules/vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
