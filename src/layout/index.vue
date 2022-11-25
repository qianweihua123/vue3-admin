<!--
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-16 20:10:20
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-21 11:36:36
 * @FilePath: /vue3-admin/src/layout/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div class="app-wrapper">
    <div class="sidebar-container">
      <sidebar></sidebar>
    </div>
    <div class="main-container">
      <div class="header">
        <!-- <div class="navbar">navbar</div> -->
        <navbar></navbar>

        <div class="tags-view">tagsview</div>
      </div>
      <!-- <div class="app-main">
        <h2>app main</h2>
        <router-view></router-view>
      </div> -->
      <app-main></app-main>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.app-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  .main-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    .header {
      // background: cyan;
      .navbar {
        height: 50px;
        // background: #1890ff;
      }
      .tags-view {
        height: 34px;
        background: #12efff;
      }
    }
    .app-main {
      /* main = 100% - navbar + tagsview */
      min-height: calc(100vh - 84px);
      background: red;
    }
  }
}
</style>
