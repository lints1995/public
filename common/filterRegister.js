/**
 * 批量注册过滤器
 */
import Vue from "vue";
import filters from "@/common/filter";

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
