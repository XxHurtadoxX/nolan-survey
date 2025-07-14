import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/nolan-survey/', // muy importante para GitHub Pages
  build: {
  outDir: 'dist'
  }
})
