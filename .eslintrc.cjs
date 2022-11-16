/*
 * @Author: qwh 15806293089@163.com
 * @Date: 2022-11-15 22:33:32
 * @LastEditors: qwh 15806293089@163.com
 * @LastEditTime: 2022-11-16 21:06:39
 * @FilePath: /vue3-admin/.eslintrc.cjs
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  env: {
    // 环境，针对哪些环境的语法
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    // 集成了哪些规则，别人写好的规则直接拿来用
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "@vue/prettier",
    "./.eslintrc-auto-import.json"
  ],
  overrides: [],
  parser: "vue-eslint-parser", //解析.vue文件
  parserOptions: {
    parser: "@typescript-eslint/parser", // 解析.ts文件
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["vue", "@typescript-eslint", "eslint-plugin-prettier"],
  rules: {
    // 我们自定义的规则写在这里
    "vue/multi-word-component-names": "off",
    "prettier/prettier": [
      "error",
      {
        singleQuote: false, // 使用单引号
        semi: false, // 末尾添加分号
        tabWidth: 2,
        trailingComma: "none",
        useTabs: false,
        endOfLine: "auto"
      }
    ],
    "@typescript-eslint/no-non-null-assertion": "off",
  }
}