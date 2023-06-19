import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import './style.css'
// echarts

import  utils  from './utils'



const app = createApp(App)
app.config.globalProperties.$utils = utils
app.use(createPinia()).use(router).mount('#app')
