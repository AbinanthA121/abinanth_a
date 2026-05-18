import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        htmlproject: resolve(__dirname, 'htmlproject/index.html'),
        onlinecalculator: resolve(__dirname, 'onlinecalculator/index.html')
      }
    }
  }
})
