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
        var:'Vue',
        path:'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.47/vue.cjs.js',
      },
      {
        name:'vue-router',
        var:'VueRouter',
        path:'https://cdnjs.cloudflare.com/ajax/libs/vue-router/4.1.6/vue-router.cjs.js',
      },
      {
        name:'pinia',
        var:'Pinia',
        path:'https://cdnjs.cloudflare.com/ajax/libs/pinia/2.0.36/pinia.iife.js',
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
