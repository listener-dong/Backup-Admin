const Layout = () => import("@/layout/index.vue");

export default {
  path: "/",
  name: "Home",
  component: Layout,
  redirect: "/welcome",
  meta: {
    icon: "homeFilled",
    title: "首页",
    rank: 0
  },
  children: [
    {
      path: "/welcome",
      name: "welcome",
      component: () => import("@/views/welcome/index.vue"),
      meta: {
        title: "登陆",
        keepAlive: true
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/about/index.vue"),
      meta: {
        title: "关于",
        keepAlive: true
      }
    }
  ]
} as RouteConfigsTable;
