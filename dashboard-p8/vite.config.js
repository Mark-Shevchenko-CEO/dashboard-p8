import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  base: '/dashboard-p8/',          // назва репозиторію
  build: {
    outDir: '../docs',             // ВАЖЛИВО: збірка в корінь репо, не в dashboard-p8/docs
  },
}
