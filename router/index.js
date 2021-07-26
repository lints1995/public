import Vue from "vue";
import VueRouter from "vue-router";
// import courseChildren from "./children/course";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页",
    },
    component: () => import("@/views/home"),
  },
  //   {
  //     path: "/course",
  //     component: () => import("@/views/course"),
  //     children: courseChildren,
  //   },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  window.scrollTo(0, 0);
  next();
});
router.afterEach(() => {});

export default router;
