import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    {
      name: 'copy-404',
      closeBundle() {
        copyFileSync(
          resolve(__dirname, 'docs/index.html'),
          resolve(__dirname, 'docs/404.html')
        )
      }
    }
  ],
  base: '/nish-invest/',
  build: {
    outDir: 'docs',
  }
})
