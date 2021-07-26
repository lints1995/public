import Cookies from "js-cookie";
import { COOKIE_EXPIRES } from "./const";

export const getCookie = function(key) {
  /**
   * 获取cookie
   */
  return Cookies.get(key) ? JSON.parse(Cookies.get(key)) : null;
};
export const setCookie = function(key, value, expires = COOKIE_EXPIRES) {
  /**
   * 设置cookie
   */
  return Cookies.set(key, value, {
    expires,
  });
};
export const removeCookie = function(key) {
  /**
   * 删除cookie
   * */
  if (!getCookie(key)) return;
  return Cookies.remove(key);
};
