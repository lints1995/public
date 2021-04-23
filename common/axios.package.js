/* author: lints
 * date:2018-05-04
 * axios请求封装
 * 主要封装方法 get,post,put,delete方法
 */
import axios from "axios";
import { API } from "./const";

let baseURL =
  process.env.NODE_ENV == "production" ? `${API}/xtapi` : `${API}/xtapi`;
axios.defaults.baseURL = baseURL;

const post = (url, data = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(url, data)
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
  function(config) {
    config.headers["Content-Type"] = "application/json";
    config.headers["token"] = tools.getToken();
    config.headers["signature"] = sign(
      config.data,
      parseInt(+new Date() / 1000)
    );

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  function(res) {
    // if (res.data.code !== 1017 && res.data.code !== 0) {
    //   Toast(res.data.message);
    // }
    // if (res.data.code === 1017) {
    //   //登录过期
    //   console.log("token已过期==》", res.data);
    //   tools.removeToken("token");
    //   tools.removeToken("userInfo");
    //   axios.post(`/common/getWechatConfig`, {}).then((res) => {
    //     location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${
    //       res.data.data.appId
    //     }&redirect_uri=${API}/xtapi/login/wechatAuth&response_type=code&scope=snsapi_userinfo&state=${Base64.encode(
    //       location.href
    //     )}`;
    //   });
    // }
    return res;
  },
  (err) => {
    //服务器出错
    return Promise.reject(err);
  }
);

// header签名
const sign = (body, timestamp) => {
  let salt = "0896fde5o98u28d996321753rd98d9569548";
  let token = tools.getToken();
  // token逻辑
  let str = "";
  // body &&
  //   Object.keys(body)
  //     .sort()
  //     .forEach((key) => {
  //       if (typeof body[key] != "undefined") {
  //         str += key + body[key];
  //       }
  //     });
  // str = str.toString();
  // console.log(str)
  if (str) {
    str = str
      .replace(new RegExp("\\[", "g"), "")
      .replace(new RegExp("]", "g"), "")
      .replace(new RegExp('"', "g"), "")
      .replace("inviteCodeundefined", "")
      .replace("packageIdundefined", "");
  }
  str = str.replace("inviteCodeundefined", "");
  console.log("signPlain---" + str);
  let beforeMd5 = Base64.encode(token + salt + str);
  let sign = md5(beforeMd5);
  return sign;
};

export { post, get, del, put, patch };
