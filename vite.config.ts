import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/iantomarcello-mockup-notice.ts',
      formats: ['es', 'umd'],
      name: "ImMockupNotice",
      fileName: (format) => `iantomarcello-mockup-notice.${format}.js`
    },
    rollupOptions: {
      external: /^lit/,
    }
  }
})
