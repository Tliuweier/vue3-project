import {defineStore} from 'pinia'
 
export const store = defineStore({
    id:'store',
    state:()=>({
        name:localStorage.getItem("name")||'location'
    }),
    getters:{
        getName:(state)=>state.name
    },
    actions:{
        changeName(val:any){
            localStorage.setItem('name',val)
           this.name = val
        }
    }
});