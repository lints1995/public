/**
 * 过滤器
 **/
import Utils from "./utils";

function dateFormat(val, format = "YYYY-MM-DD hh:mm:ss") {
  return Utils.dateFormat(val, format);
}
export default {
  dateFormat,
};
