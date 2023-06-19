<template>
  <n-layout class="height" has-sider>
    <n-layout-sider content-style="padding:24px;">
      <n-menu v-model:value="activeKey" :options="menus" @update:value="handleUpdateValue" />
    </n-layout-sider>
    <n-layout-content content-style="padding:24px;">
      <n-config-provider class="height" :locale="zhCN" :date-locale="dateZhCN">
        <n-message-provider>
          <router-view></router-view>
        </n-message-provider>
      </n-config-provider>
    </n-layout-content>
  </n-layout>
</template>



<script setup lang="ts">
import {
  NConfigProvider, NMessageProvider, zhCN,
  dateZhCN, NLayout, NLayoutContent, NLayoutSider,
  NMenu,
  MenuOption
} from 'naive-ui'
import { useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import _ from 'lodash'
const router = useRouter();
// 菜单
let activeKey = ref<string>('')
const menus = _.map(router.options.routes, function (item) {
  let menuOption: { key: string, label: string, path: string } = { key: '', label: '', path: '' }
  menuOption.key = item.name as string;
  menuOption.path = item.path;
  menuOption.label = item.meta?.title as string;
  return menuOption;
})
let handleUpdateValue = (_key: string, item: MenuOption) => {
  // console.log(item)
  router.push(item.path as string)
}
onMounted(() => {
})

</script>



<style lang="scss" scoped>
.height{
  height: 100%;
}
</style>
