import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import WebInfo from '@/WebInfo/config.json'

const SITE_NAME = WebInfo.SITE_NAME

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Home - ' + SITE_NAME,
      },
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: 'About - ' + SITE_NAME,
      },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

router.beforeEach((to, from) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
})

export default router
