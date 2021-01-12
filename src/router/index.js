import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Users from '@/views/Users'
import Pages from '@/views/Pages'
import Archive from '@/views/Archive'
import Auth from '@/views/Auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Auth
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/pages',
    name: 'Pages',
    component: Pages
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/archive',
    name: 'Archive',
    component: Archive
  }
  
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
