/*
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-16 14:58:02
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-16 14:58:10
 * @FilePath: /vue3-admin/src/stores/counter.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  const increment = () => {
    count.value++;
  };
  return { count, increment };
});
