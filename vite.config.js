import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import viteCompression from 'vite-plugin-compression' // لو حابة تضغطي الملفات
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    svgr(),
    viteCompression() // يضغط ملفات js/css بشكل تلقائي
  ],
  build: {
    outDir: 'build', // نخرج الملفات في مجلد build (انقليه بعدين على مجلد الـ plugin)
    emptyOutDir: true, // يمسح القديم قبل كل build
    sourcemap: false, // نطفي source maps في الإنتاج عشان نحسن الأداء
    minify: 'esbuild', // أو ممكن 'terser' لو محتاجة ضغط أقوى
  
  },
  server: {
    port: 3000,
    open: true
  }
})
