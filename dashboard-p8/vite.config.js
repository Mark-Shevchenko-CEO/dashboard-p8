import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  base: '/dashboard-p8/',   // ІМ'Я РЕПОЗИТОРІЮ
  build: {
    outDir: 'docs',         // куди Vite покладе збірку
  },
}
