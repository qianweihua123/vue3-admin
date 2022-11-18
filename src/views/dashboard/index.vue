<!--
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-16 20:11:03
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-18 16:13:40
 * @FilePath: /vue3-admin/src/views/dashboard/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>
    <h1>Dashboard page</h1>
    <!-- icon-class svg图标名称 class-name 额外的自定义类名 @click绑定事件 -->
    <svg-icon
      @click="sayHi"
      icon-class="user"
      class-name="custom-class"
    ></svg-icon>
    <br />
    <br />
    <br />
    缓存测试 <input type="text" />
    <el-button>按钮</el-button>
  </div>
</template>
<script setup lang="ts">
// import { getCurrentInstance } from "vue"
const { proxy } = getCurrentInstance()!
const sayHi = () => {
  proxy?.$message.success("恭喜你，这是一条成功消息")
}
</script>

<style lang="scss">
.custom-class {
  // 自定义样式404
  font-size: 200px;
  color: green;
}
</style>
