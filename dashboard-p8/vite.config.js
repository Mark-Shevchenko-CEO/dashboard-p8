import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ЗАМІНИ 'dashboard-p8' на точну назву свого репозиторію на GitHub
export default defineConfig({
  plugins: [react()],
  base: '/dashboard-p8/',
  build: {
    outDir: 'docs',
  },
})
