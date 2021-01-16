import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Users from '@/views/Users'
import Pages from '@/views/Pages'
import Archive from '@/views/Archive'
import UserPanel from '@/views/UserPanel'
import Home from '@/views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    component: UserPanel,
    children: [
      {
        path: '/dashboard',
        component: Dashboard
      },
      {
        path: '/pages',
        component: Pages
      },
      {
        path: '/users',
        component: Users,
        meta: {
          requiresAuth: true,
          is_admin: true
        }
      },
      {
        path: '/archive',
        component: Archive,
        meta: {
          requiresAuth: true,
          is_admin: true
        }
      }
    ],
    meta: {
      requiresAuth: true
    }
    
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') === null) {
      alert('Access to this page requires admin authentication.')
      next({
        path: '/'
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      console.log(user)
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.role.name == 'Admin') {
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
