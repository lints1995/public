/**
 * 过滤器
 **/
import { dateFormat as DF } from "@/plugins/day";

function dateFormat(val, format = "YYYY-MM-DD hh:mm:ss") {
  return DF(val, format);
}
export default {
  dateFormat,
};
