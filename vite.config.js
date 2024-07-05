import { defineConfig } from 'vite'

export default defineConfig({

    css: {
        preprocessorOptions: {
          scss: {
            additionalData: `./src/index.js` // 全局变量
          }
        }
    },
    server: {
        host: true
    }
})