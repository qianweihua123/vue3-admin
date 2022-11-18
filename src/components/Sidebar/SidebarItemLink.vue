<!--
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-18 15:44:54
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-18 15:47:24
 * @FilePath: /vue3-admin/src/components/Sidebar/SidebarItemLink.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <component :is="type" v-bind="linkProps">
    <slot />
  </component>
</template>

<script lang="ts" setup>
import { isExternal } from "@/utils/validate"

// 针对路径是外链 就渲染为a标签 如果是正常路由路径 就渲染为 router-link

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})
// 判断接收的路径 是不是外链
const isExt = computed(() => isExternal(props.to))
const type = computed(() => {
  if (isExt.value) {
    return "a"
  }
  return "router-link"
})

const linkProps = computed(() => {
  if (isExt.value) {
    return {
      // a 标签的一些原生属性
      href: props.to,
      target: "_blank",
      rel: "noopener"
    }
  }
  // router-link只需一个to props
  return {
    to: props.to
  }
})
</script>
