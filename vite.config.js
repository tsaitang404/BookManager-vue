import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 需安装此模块

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    plugins: [
      vue(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver()],
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    define: {
      'process.env': {}
    },
    server: {
      host: 'localhost',
      port: '5173',
      strictPort: false,//设为true时端口被占用则直接退出，不会尝试下一个可用端口
      cors: true,//为开发服务器配置CORS, 默认启用并允许任何源
      open: false,//服务启动时自动在浏览器中打开应用
      hmr: false,//禁用或配置 HMR 连接
      proxy: {
        [env.VITE_BASE_API]: {
          target: env.VITE_BASE_URL,//实际请求地址
          changeOrigin: true,
          ws: true,// websocket支持
          rewrite: (path) => path.replace(env.VITE_BASE_API, '')//替换实际请求后台地址
        }
      },
      https: false
    }
  }
})




