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
    path: `/journal`,
    name: 'journal',
    component: () => import('../views/the-journal.vue')
  },
  {
    path: `/life`,
    name: 'lift',
    component: () => import('../views/the-life.vue')
  },
  {
    path: `/about`,
    name: 'about',
    component: () => import('../views/the-about.vue')
  },
  {
    path: '/post/:postId',
    name: 'post',
    component: () => import('../views/the-post.vue')
  },
  {
    path: '/comming-soon',
    name: 'comming-soon',
    component: () => import('../views/the-comming-soon.vue')
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
