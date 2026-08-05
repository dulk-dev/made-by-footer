import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import cssInjectedByJs from 'vite-plugin-css-injected-by-js'

export default defineConfig({
  plugins: [
    vue(),
    // Vue SFC 的样式只注入 Vue 入口；React 入口的样式由 src/react/styles.ts 运行时注入
    cssInjectedByJs({
      jsAssetsFilterFunction: (chunk) => chunk.fileName === 'index.js',
    }),
  ],
  // React 壳的 JSX 由 esbuild 以 automatic runtime 编译（@vue/tsconfig 的 jsx 配置只服务于 Vue）
  esbuild: { jsx: 'automatic' },
  build: {
    lib: {
      entry: {
        index: 'src/index.ts',
        'core/index': 'src/core/index.ts',
        'react/index': 'src/react/index.ts',
      },
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue', 'simple-icons', 'react', 'react-dom', 'react/jsx-runtime'],
    },
  },
})
