import { defineConfig } from 'vite'
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
  return{
    plugins,
    devServer,
    resolve
  }

})
