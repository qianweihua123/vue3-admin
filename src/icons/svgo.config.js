/*
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-16 20:30:21
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-16 20:30:38
 * @FilePath: /vue3-admin/src/icons/svgo.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  plugins: [
    "preset-default", // 默认插件配置
    {
      name: "removeAttrs",
      params: {
        attrs: "(fill|stroke)"
      }
    }
  ]
}