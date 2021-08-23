
import dayjs from "dayjs";
import Vue from "vue";
export const dateFormat = function(time, format = "YYYY-MM-dd hh:mm:ss") {
  /**
   * 时间转换
   */
  return dayjs(time).format(format);
};

Vue.prototype.$dayjs = dayjs;