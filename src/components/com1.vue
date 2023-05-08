<template>
    <div>
        我是组件1
        我就是字符串
        我就是字符串
        我就是字符串
        我就是字符串
        我就是字符串
        我就是字符串
        我就是字符串
        <hr/>
        <div @click="onClick">{{ text }}</div>
    </div>


      <!-- <div>aaaa</div>
  <div>aaaa</div>
  <div>aaaa</div>
  <div>{{ store1.getName }}</div>
  <input type="text" placeholder="修改状态数据" v-model="value" />
  <button @click="editName">修改数据</button>
  <div>
    <div>测试效果</div>
    <h2>哈哈哈</h2>
    <div class="text">AAAABBBBCCCC</div>
    <div class="text">sgjj</div>
    <div>{{ name1 }}</div>
    <button @click="console.log(1)">点击事件</button>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <com1 @hello-f="getText"/> -->
  
    <!-- <router-view></router-view> -->
</template>


<script lang="ts">
import {ref} from 'vue'
export default{
    expose:['text'],
    setup(props,context) {
        let { emit } = context
        console.log(props)
        const text = ref('你好')
        const onClick = ()=>{
            emit('helloF','北京欢迎你')
        }

        return{
            text,
            onClick
        }
    },
}


// import HelloWorld from './components/HelloWorld.vue'
// import com1 from './components/com1.vue'
// import { ref } from 'vue'
// import {store} from './stroe/index'
// console.log(HelloWorld)
// console.log(HelloWorld.name)
// console.log(com1)
// console.log(com1.expose)


// const name1 = ref('笑谈')
// const value = ref()


// // 获取状态管理
// const store1 = store()
// const editName=()=>{
//   // 修改状态
//   store1.changeName(value.value)
// }
// const getText = (value)=>{
//   window.alert(value)
// }

</script>

<style>


</style>