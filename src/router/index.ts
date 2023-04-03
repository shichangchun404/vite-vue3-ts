import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    path: "/test",
    name: "home",
    component: () => import("../views/TestView.vue"),
  },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from) => {
  // 路由权限校验 todo
  console.log("to :>> ", to, from)
})

export default router
