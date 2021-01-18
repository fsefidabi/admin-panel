import {createRouter, createWebHistory} from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Swal from 'sweetalert2'
import Users from '@/views/Users'
import Pages from '@/views/Pages'
import Archive from '@/views/Archive'
import UserPanel from '@/views/UserPanel'
import Home from '@/views/Home'
import i18n from '@/plugins/i18n'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login'
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
      Swal.fire({
        icon: 'warning',
        width: 500,
        padding: '3rem',
        backdrop: 'rgba(54,58,83,0.5)',
        text: i18n.global.t('routes.errors.requiresAuth'),
        showConfirmButton: false,
        showCloseButton: true
      })
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
          Swal.fire({
            icon: 'warning',
            width: 500,
            padding: '3rem',
            backdrop: 'rgba(54,58,83,0.5)',
            text: i18n.global.t('routes.errors.requiresAdmin'),
            showConfirmButton: false,
            showCloseButton: true
          })
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
  console.log(i18n.global.locale)
})

export default router
