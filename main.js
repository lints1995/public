import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "@/common/filterRegister";
import "@/common/componentRegister";
import "@/css/reset.css";
import "@/common/rem";
import "@/plugins";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
