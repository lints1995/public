/**
 * 批量注册组件
 */
import Vue from "vue";

const requireComponent = require.context("component", true, /\.vue$/);
requireComponent.keys().forEach((filePath) => {
  let componentName = requireComponent(filePath).default.name;
  Vue.component(componentName, requireComponent(filePath).default);
});
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
