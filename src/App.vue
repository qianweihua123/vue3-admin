<!--
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-15 21:18:32
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-16 14:59:20
 * @FilePath: /vue3-admin/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <router-link to="/home">首页</router-link>
  <router-link to="/about">关于页面</router-link>

  <router-view></router-view>

  <Counter></Counter>
</template>

<script setup lang="ts">
import Counter from "@/components/Counter/index.vue"
</script>
