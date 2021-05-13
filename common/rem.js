/*
 * author: lints
 * date: 2018-06-28
 * description: 根据设备宽度动态设置根节点字体大小比列
 * */

(function (document, window) {
  let rootHtml = document.documentElement; // 获取节点树的根html
  let designWidth = 828; // 设计图宽度
  let remRootSize = 100; // 根元素计算rem基准大小 100px = 1rem
  let resizeEvent =
    "orientationchange" in window ? "orientationchange" : "resize";
  let setRootFontSize = function () {
    let clientWidth = rootHtml.clientWidth;
    if (!clientWidth) return;
    if (clientWidth >= designWidth) {
      rootHtml.style.fontSize = `${remRootSize}px`;
    } else {
      rootHtml.style.fontSize = `${12 * (clientWidth / designWidth)}px`;
    }
  };
  if (!document.addEventListener) return;
  window.addEventListener(resizeEvent, setRootFontSize, false);
  document.addEventListener("DOMContentLoaded", setRootFontSize, false);
})(document, window);
