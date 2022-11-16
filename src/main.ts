/*
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-15 21:18:32
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-16 20:35:06
 * @FilePath: /vue3-admin/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue"
import App from "./App.vue"
import router from "./router/index"
import { createPinia } from "pinia"
// import ElementPlus from "element-plus" // 这里我们直接全量引入
// import "element-plus/dist/index.css"
// 初始化css，重置css默认样式
import "normalize.css/normalize.css";
// 全局css
import "@/styles/index.scss";
import 'virtual:svg-icons-register'

// 引入icon插件
import initSvgIcon from "@/icons/index";
import "virtual:svg-icons-register";

// 注册element-plus
import installElementPlus from "./plugins/element";

const app = createApp(App)
app.use(installElementPlus)
// 使用icon组件
app.use(initSvgIcon)
app.use(router)
app.use(createPinia())
app.mount("#app")
