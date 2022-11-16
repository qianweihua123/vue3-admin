/*
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-16 14:53:15
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-16 14:53:24
 * @FilePath: /vue3-admin/src/router/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/about",
      component: () => import("../views/About.vue"),
    },
  ],
});
