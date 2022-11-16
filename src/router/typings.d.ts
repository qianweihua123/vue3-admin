/*
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-16 20:13:42
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-16 20:13:52
 * @FilePath: /vue3-admin/src/router/typings.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "vue-router";

declare module "vue-router" {
  interface RouteMeta {
    title?: string; // 路由菜单title
    icon?: string; // 路由菜单icon
    hidden?: boolean; // 菜单栏不显示
    // 路由是否缓存 没有这个属性或false都会缓存 true不缓存
    noCache?: boolean;
    activeMenu?: string; // 指定菜单激活
    breadcrumb?: boolean; // 该路由是否显示面包屑
    affix?: boolean; // 固定显示在tagsView中
    alwaysShow?: boolean; // 菜单是否一直显示根路由
  }
}
