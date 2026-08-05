import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [vue(), cssInjectedByJs()],
  build: {
    lib: {
      entry: {
        index: 'src/index.ts',
        'core/index': 'src/core/index.ts',
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', 'simple-icons'],
    },
  },
})
