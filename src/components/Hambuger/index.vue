<!--
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-07-22 21:34:13
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-21 11:46:08
 * @FilePath: \vue2.7-template-admin\src\components\Hamburger\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div
    style="padding: 0 15px; height: 100%; line-height: 50px"
    @click="toggleClick"
  >
    <svg
      :class="{ 'is-active': isActive }"
      class="hamburger"
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      width="64"
      height="64"
    >
      <path
        d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
// 为了类型推论，让我们在使用属性的时候获取更丰富的类型提示，
// 比如在这里我们定义了一个属性 list，使用 vue 默认的 Array，
// 只能确定它是一个数组类型，不能确定数组里面的每一项到底是什么
// 样子的。你在 setup 中，看 props.list 就是一个any数组，但是
// 如果使用PropType <ColumnProps[]> 这个时候，props.list 就
// 变成一个 ColumnProps 的数组，你使用它的时候不论在 ts 中还是
// 模版中都能获得类型的推断和自动补全等等。

import { PropType } from "vue"
const props = defineProps({
  isActive: {
    type: Boolean as PropType<boolean>,
    default: false
  }
})

const emit = defineEmits(["toggleClick"])

function toggleClick() {
  emit("toggleClick")
}
</script>

<style scoped lang="scss">
.hamburger-container {
  line-height: 46px;
  height: 100%;
  float: left;
  cursor: pointer;
  transition: background 0.3s;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    background: rgba(0, 0, 0, 0.025);
  }
}
:deep(.hamburger) {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  transition: all 0.2s;
}
:deep(.hamburger.is-active) {
  transform: rotate(180deg);
}
</style>
