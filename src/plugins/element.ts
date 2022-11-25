/*
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-16 20:34:15
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-16 20:38:11
 * @FilePath: /vue3-admin/src/plugins/element.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { App } from "vue"
import { ElMessage, ElNotification, ElMessageBox } from "element-plus"

export type Size = "default" | "large" | "small"

// 默认自动导入组件插件，只会解析在模板中使用的组件，所以这里需要导入样式
// 这里的样式也可以做到按需导入
// import "element-plus/theme-chalk/el-message.css";
// import "element-plus/theme-chalk/el-notification.css";
// import "element-plus/theme-chalk/el-message-box.css";
export default (app: App): void => {
  // 按需导入组件列表
  // Vue.prototype 替换为 config.globalProperties
  // 文档说明 https://v3.cn.vuejs.org/guide/migration/global-api.html#vue-prototype-%E6%9B%BF%E6%8D%A2%E4%B8%BA-config-globalproperties
  app.config.globalProperties.$message = ElMessage
  app.config.globalProperties.$notify = ElNotification
  app.config.globalProperties.$confirm = ElMessageBox.confirm
  app.config.globalProperties.$alert = ElMessageBox.alert
  app.config.globalProperties.$prompt = ElMessageBox.prompt
}
