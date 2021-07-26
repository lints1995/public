import dayjs from "dayjs";

export const dateFormat = function(time, format = "YYYY-MM-dd hh:mm:ss") {
  /**
   * 时间转换
   */
  return dayjs(time).format(format);
};
