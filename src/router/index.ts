// 创建路由
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import layout from "@/views/layout/index.vue"
// 1. 创建路由
const router = createRouter({
  // 创建history模式的路由
  //  history: createWebHistory(),
  // 创建hash模式的路由
  history: createWebHashHistory(),
  // 配置路由规则
  routes: [
    // 登录页
    {
      path: "/",
      component: layout,
      children: [{ path: "/", component: () => import("@/views/Home/index.vue") }]
    }

    // Layout
  ]
})

export default router
