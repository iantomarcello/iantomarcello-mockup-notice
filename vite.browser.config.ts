import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/iantomarcello-mockup-notice.ts',
      formats: ['iife'],
      name: "ImMockupNotice",
    },
    outDir: 'dist/browser',
  }
})
