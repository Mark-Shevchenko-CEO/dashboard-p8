import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  base: '/dashboard-p8/',   // назва репозиторію на GitHub
  build: {
    outDir: 'docs',
  },
}
