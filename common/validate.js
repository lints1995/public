const Validate = {
  isTelephoneNumber(value) {
    /**
     * 验证电话号码
     * @param {string or number} val - 电话号码
     * @return true or false
     * */
    return /^1[3456789]\d{9}$/.test(value);
  },
  isMoney(val) {
    /**
     * 金额验证-只能保留两位小数和整数
     * @param {string,number} val - 值
     * @return true or false
     * */
    return /^\d+(\.\d{1,2})?$/.test(val);
  },

  isEmpty(str) {
    /**
     * 判断字符串是否为空
     * @return true or false
     */
    let s = str.trim();
    return typeof s == "undefined" || s == null || s == "";
  },
  isUserName(value) {
    /**
     * 名字校验，支持中文名字2-20位
     * @param {string} val - 名字
     * @return true or false
     * */
    return /^[\u4E00-\u9FA5\uf900-\ufa2d]{2,20}$/.test(value);
  },
};
export default Validate;