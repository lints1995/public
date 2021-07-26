/**
 * 公共方法
 * author lints
 * date 2019-04-18
 */

import { VERSION } from "./const";

export const blur = function(event) {
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
};

export const beautifulConsoleVersion = function() {
  /**
   * 打印当前版本号
   * */
  console.log(`%c当前版本:${VERSION}`, "color: #04BE02;font-size:22px");
};
export const getBrowserType = function() {
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
};
export const getParams = function(url) {
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
};
