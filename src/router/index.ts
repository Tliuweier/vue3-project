import { createRouter, createWebHistory } from 'vue-router'
// import indexVue from '../views/index.vue'
const pageModules = import.meta.glob('../views/**/page.ts',{
    eager:true,
    import:'default'
})
const comModules = import.meta.glob('../views/**/index.vue')
// console.log(comModules)
let  routes:any = Object.entries(pageModules).map(([pagePath,config])=>{
    // console.log(pagePath,config)
    let path = pagePath.replace('../views','').replace('/page.ts','')
    path = path || '/'
    let name = path.split('/').filter(Boolean).join('-') || 'index'
    let comPath = pagePath.replace('page.ts','index.vue')
    // console.log(`/vue3-project${path}`)
    return {
		path,
		name,
		component:comModules[comPath],
		meta:config
	}
})
// console.log(routes)

// let routes1 = [
//     {
//         path:'/vue3-project/',
//         name:'index',
//         component:()=>indexVue,
//     },

// ]
const router = createRouter({
    history:createWebHistory(),
    routes
})


export default router