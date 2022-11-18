/*
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-16 20:25:31
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-16 20:25:43
 * @FilePath: /vue3-admin/src/icons/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { App } from "vue"
import SvgIcon from "@/components/SvgIcon/index.vue"

export default (app: App) => {
  // 全局注册svg-icon组件
  app.component("svg-icon", SvgIcon)
}
