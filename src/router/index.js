import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Users from '@/views/Users'
import Pages from '@/views/Pages'
import Archive from '@/views/Archive'
import Auth from '@/components/Auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Auth
  },
  {
    path: '/login',
    name: 'Auth',
    component: Auth,
    meta: {
      guest: true
    }
  },
  {
    path: '/register',
    name: 'Register',
    component: Auth,
    meta: {
      guest: true
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/pages',
    name: 'Pages',
    component: Pages,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/users',
    name: 'Users',
    component: Users,
    meta: {
      requiresAuth: true,
      is_admin: true
    }
  },
  {
    path: '/archive',
    name: 'Archive',
    component: Archive,
    meta: {
      requiresAuth: true,
      is_admin: true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      alert('Access to this page requires admin authentication.')
      next({
        path: '/dashboard',
        params: {nextUrl: to.fullPath}
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.is_admin == 1) {
          next()
        } else {
          alert('Access to this page requires admin authentication.')
          next({path: '/dashboard'})
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('jwt') === null) {
      next()
    } else {
      next({path: '/dashboard'})
    }
  } else {
    next()
  }
})

export default router
