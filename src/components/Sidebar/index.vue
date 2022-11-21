<!--
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-18 15:21:49
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-21 11:53:52
 * @FilePath: /vue3-admin/src/components/Sidebar/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <h4 @click="isCollapse = !isCollapse">展收测试</h4>
  <el-menu
    class="sidebar-container-menu"
    mode="vertical"
    :default-active="activeMenu"
    :background-color="scssVariables.menuBg"
    :text-color="scssVariables.menuText"
    :active-text-color="scssVariables.menuActiveText"
    :collapse="sidebar.opened"
    :collapse-transition="true"
  >
    <!-- 循环sidebar-item组件 -->
    <sidebar-item
      v-for="route in menuRoutes"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    />
  </el-menu>
</template>
<script lang="ts" setup>
import scssVariables from "@/styles/variables.module.scss"
import SidebarItem from "./SidebarItem.vue"

// 导入路由表
import { routes } from "@/router"

import { useAppStore } from "@/stores/app"
import { storeToRefs } from "pinia"
const store = useAppStore()
const { sidebar } = storeToRefs(store)

// 渲染路由
const menuRoutes = computed(() => routes)
const vm: any = getCurrentInstance()
const activeMenu = computed(() => {
  const route = vm.proxy.$route
  const { meta, path } = route
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    console.log(meta, "meta")
    return meta.activeMenu
  }
  return path
})

let isCollapse = ref(false)
</script>
