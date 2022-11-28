<!--
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-18 16:11:47
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-18 16:11:59
 * @FilePath: /vue3-admin/src/components/AppMain.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="app-main">
    <router-view v-slot="{ Component }">
      <transition name="fade-transform" mode="out-in">
        <keep-alive :include="includes">
          <component :is="Component" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>
<script lang="ts" setup>
import { useTagsView } from "@/stores/tagsView"
import { storeToRefs } from "pinia"
const route = useRoute()
const store = useTagsView()
const { cachedViews } = storeToRefs(store)
const includes = computed(() => cachedViews.value as string[])
</script>
<style lang="scss" scoped>
.app-main {
  /* navbar 50px  */
  min-height: calc(100vh - 50px);
}

.fade-transform-enter-active,
.fade-transform-leave-active {
  transition: all 0.5s;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
