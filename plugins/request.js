/* author: lints
 * date:2018-05-04
 * axios请求封装
 * 主要封装方法 get,post,put,delete方法
 */
import axios from "axios";
import qs from "qs";
import { API } from "@/common/const";
import { getCookie } from "@/common/utils";
import { Toast } from "vant";
import "vant/lib/toast/style";
axios.defaults.baseURL = API;

const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, qs.stringify(data))
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const del = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .delete(url, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const put = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .put(url, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
const patch = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .patch(url, data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

// 请求拦截器
axios.interceptors.request.use(
  function (config) {
    if (!config.data.includes("UNWANTED_TOKEN")) {
      config.headers["token"] = getCookie("_U") ? getCookie("_U").token : "";
    }
    if (config.data.includes("UNWANTED_TOKEN")) {
      delete config.data.UNWANTED_TOKEN;
    }
    config.headers["Content-Type"] =
      "application/x-www-form-urlencoded; charset=utf-8;";
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  (res) => {
    if (res.data.code !== "0") {
      Toast(res.data.msg);
    }
    return res;
  },
  (err) => {
    //服务器出错
    return Promise.reject(err);
  }
);

export { post, get, del, put, patch };
