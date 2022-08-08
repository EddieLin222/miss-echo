import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

export interface RouteMeta {
  name: string;
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: {
      name: 'home',
    }
  },
  {
    path: `/home`,
    name: 'home',
    component: () => import('../views/the-home.vue')
  },
  {
    path: `/delivery`,
    name: 'delivery',
    component: () => import('../views/the-delivery.vue')
  },
  {
    path: `/booking`,
    name: 'booking',
    component: () => import('../views/the-booking.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router