import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
    host: true,
    cors: true
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Генерувати нові хеші для кожної збірки з timestamp
        entryFileNames: `assets/[name]-[hash]-${Date.now()}.js`,
        chunkFileNames: `assets/[name]-[hash]-${Date.now()}.js`,
        assetFileNames: `assets/[name]-[hash]-${Date.now()}.[ext]`
      }
    },
    // Очищувати dist папку перед кожною збіркою
    emptyOutDir: true,
    // Генерувати source maps для дебагу
    sourcemap: false,
    // Мінімізація
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // Додаткові налаштування для розробки
  define: {
    __BUILD_TIME__: JSON.stringify(new Date().toISOString())
  }
})
