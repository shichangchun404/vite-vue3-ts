import { createRouter, createWebHistory } from "vue-router"
import type { RouteRecordRaw } from "vue-router"
import { getUserInfo } from "@/api/api.user"
import { useUserStore } from "@/store"

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

router.beforeEach(async (to, from) => {
  const data = await getUserInfo()
  const store = useUserStore()
  if (data && data.code === 0) {
    store.isLogin = true
  } else {
    store.isLogin = false
  }
})

export default router
