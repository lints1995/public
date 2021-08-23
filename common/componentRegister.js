/**
 * 批量注册组件
 */
import Vue from "vue";

const requireComponent = require.context("@/components", true, /\.vue$/);
requireComponent.keys().forEach((filePath) => {
  let componentName = requireComponent(filePath).default.name;
  if (!componentName) throw new Error(`${filePath}组件name未命名`);
  Vue.component(componentName, requireComponent(filePath).default);
});
