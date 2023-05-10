import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
// 分析包插件
import { visualizer } from "rollup-plugin-visualizer";
// cdn 插件
import  { autoComplete,Plugin as importToCDN  } from 'vite-plugin-cdn-import'

const plugin = []

plugin.push(
  visualizer({
    open: true,
    gzipSize: true,
    brotliSize: true,
  })
)







// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  
  let buildServer = {
    open: true,
  }
  let devServer = {
    open: true,
    port: '8080'
  }
  let plugins = [vue(), plugin, importToCDN({
    modules:[
      {
        name:'vue',
        var:'vue',
        path:'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.47/vue.global.min.js',
      },
      {
        name:'vue-router',
        var:'vueRouter',
        path:'https://cdnjs.cloudflare.com/ajax/libs/vue-router/4.1.6/vue-router.global.js',
      }
    ]
  })]
  let resolve = {
    alias: [
      {
        find: '@',
        replacement: '/src'
      }
    ]
  }
  return{
    base:'/vue3-project/',
    plugins,
    devServer,
    resolve
  }

})
