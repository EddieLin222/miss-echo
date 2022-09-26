import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AdminRouter from './admin';

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
    path: `/`,
    name: 'userview',
    component: () => import('../views/layout.vue'),
    children: [
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
        path: '/comming-soon',
        name: 'comming-soon',
        component: () => import('../views/the-comming-soon.vue')
      },
      {
        path: `/about`,
        name: 'about',
        component: () => import('../views/the-about.vue')
      },
      {
        path: `/form`,
        name: 'form',
        component: () => import('../views/the-form.vue')
      },
      {
        path: '/post/:postId',
        name: 'post',
        component: () => import('../views/the-post.vue')
      },
      {
        path: `/menu`,
        name: 'menu',
        component: () => import('../views/the-menu.vue')
      }
    ]
  },
  {
    name: 'Login',
    path: '/Login',
    meta: {
      title: '登入',
    },
    component: () => import('@/views/admin/Login.vue'),
  },
  AdminRouter.routes,


  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth', }
  },
})

export default router
