/*
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-15 21:18:32
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-16 15:01:29
 * @FilePath: /vue3-admin/src/main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import router from "./router/index";
import { createPinia } from "pinia";
import ElementPlus from "element-plus"; // 这里我们直接全量引入
import "element-plus/dist/index.css";
const app = createApp(App);
app.use(ElementPlus);
app.use(router);
app.use(createPinia());
app.mount("#app");

