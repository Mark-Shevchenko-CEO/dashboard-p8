import react from '@vitejs/plugin-react'

// без defineConfig, просто звичайний об'єкт
export default {
  plugins: [react()],
  base: '/dashboard-p8/',   // назва твого репозиторію на GitHub
  build: {
    outDir: 'docs',
  },
}
