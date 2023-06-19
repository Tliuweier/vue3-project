/// <reference types="vitest" />

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// 分析包插件
import { visualizer } from "rollup-plugin-visualizer";
// cdn 插件
import  { autoComplete,Plugin as importToCDN  } from 'vite-plugin-cdn-import'
import { configDefaults } from 'vitest/dist/config.js';

const plugin = []

plugin.push(
  visualizer({
    open: true,
    gzipSize: true,
    brotliSize: true,
  })
)



let server = {
  proxy:{
    '/lol':{
      target:'https://apps.game.qq.com',
      ws: true, // 是否代理websockets
      changeOrigin: true // 设置同源  默认false，是否需要改变原始主机头为目标URL,
      // rewrite: (path) => path.replace(/^\/lol/, ""),
    },
    '/mock':{
      target:'https://www.fastmock.site',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/mock/, ""),
    },
    '/web201612':{
      target:'https://lpl.qq.com',
      changeOrigin: true,
      // rewrite: (path) => path.replace(/^\/web201612/, ""),
    },
    '/match-auth-app':{
      target:'https://open.tjstats.com',
      changeOrigin: true,
    }
  }
}

let resolve = {
  // alias: [
  //  {
  //     find:'vue',
  //     replacement:'https://esm.sh/vue@3.2.47'
  //   },{
  //     find:'vueRouter',
  //     replacement:'https://esm.sh/vue-router@4.1.6'
  //   }
  // ],
  // extensions:['.js','.vue','.json']
}
let plugins = [vue(), plugin, importToCDN({
  modules:[
    {
      name:'vue',
      var:'Vue',
      path:'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.47/vue.global.min.js',
    },
    {
      name:'vue-router',
      var:'VueRouter',
      path:'https://cdnjs.cloudflare.com/ajax/libs/vue-router/4.1.6/vue-router.global.js',
    },
    {
      name:'echarts',
      var:'Echarts',
      path:'https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.2/echarts.min.js',
    },
  ]
})]
// https://vitejs.dev/config/
export default defineConfig( {
  // server
  plugins:[vue(),plugin,importToCDN({
    modules:[
      {
        name:'vue',
        var:'Vue',
        path:'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.47/vue.global.min.js',
      },
      {
        name:'vue-router',
        var:'VueRouter',
        path:'https://cdnjs.cloudflare.com/ajax/libs/vue-router/4.1.6/vue-router.global.js',
      },
      {
        name:'echarts',
        var:'Echarts',
        path:'https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.2/echarts.min.js',
      },
    ]
  })],
  server:{
    // https:true,
    // host: '0.0.0.0',
    // port:8080,
    proxy:{
      '/app':{
        target:'https://news.ssp.qq.com',
        changeOrigin: true, // 设置同源  默认false，是否需要改变原始主机头为目标URL,
        secure:false
        // rewrite: (path) => path.replace(/^\/app/, "/test"),
      },
      '/lol':{
        target:'https://apps.game.qq.com',
        ws: true, // 是否代理websockets
        changeOrigin: true // 设置同源  默认false，是否需要改变原始主机头为目标URL,
        // rewrite: (path) => path.replace(/^\/lol/, ""),
      },
      '/mock':{
        target:'https://www.fastmock.site',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/mock/, ""),
      },
    }
  }
})
