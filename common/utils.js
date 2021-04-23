/**
 * 公共方法
 * author lints
 * date 2019-04-18
 */

import Cookies from "js-cookie";
import dayjs from "dayjs";
import { VERSION, COOKIE_EXPIRES } from "./const";

const Utils = {
  getCookie(key) {
    /**
     * 获取cookie
     */
    return JSON.parse(Cookies.get(key));
  },
  setCookie(key, expires = COOKIE_EXPIRES) {
    /**
     * 设置cookie
     */
    return Cookies.set(key, JSON.stringify(key), {
      expires,
    });
  },
  removeCookie(key) {
    /**
     * 删除cookie
     * */
    return Cookies.remove(key);
  },
  blur(event) {
    /**
     * ios input 错位问题
     * @param {event}
     */
    if (
      !(
        event.relatedTarget &&
        (event.relatedTarget.tagName === "INPUT" ||
          event.relatedTarget.tagName === "TEXTAREA")
      )
    )
      return (document.body.scrollTop = 0);
  },

  beautifulConsoleVersion() {
    /**
     * 打印当前版本号
     * */
    console.log(`%c当前版本:${VERSION}`, "color: #04BE02;font-size:22px");
  },
  getBrowserType() {
    /**
     * 判断是那种终端浏览器
     */
    const u = navigator.userAgent.toLowerCase();
    return u.indexOf("android") > -1
      ? "android"
      : u.indexOf("iphone") > -1
      ? "iphone"
      : u.indexOf("micromessenger") > -1
      ? "weChat"
      : "undefined";
  },
  getParams(url) {
    /**
     * 字符串截取方法
     */
    /**
     * @param {String} url
     * @description 从URL中解析参数
     */
    url = url || window.location.hash;
    if (url.indexOf("?")) {
      var search = url.substring(url.lastIndexOf("?") + 1);
      var obj = {};
      var reg = /([^?&=]+)=([^?&=]*)/g;
      search.replace(reg, function(rs, $1, $2) {
        var name = decodeURIComponent($1);
        var val = decodeURIComponent($2);
        val = String(val);
        obj[name] = val;
        return rs;
      });
    }
    return obj;
  },
  dateFormat(time, format = "YYYY-MM-dd hh:mm:ss") {
    /**
     * 时间转换
     */
    return dayjs(time).format(format);
  },
};
export default Utils;
