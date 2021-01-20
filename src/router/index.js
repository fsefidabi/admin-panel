import {createRouter, createWebHistory} from 'vue-router'
import i18n from '@/plugins/i18n'
import Swal from 'sweetalert2'
import Auth from '@/views/Auth'
import UserPanel from '@/views/UserPanel'
import Dashboard from '@/views/Dashboard.vue'
import Pages from '@/views/Pages'
import Users from '@/views/Users'
import Archive from '@/views/Archive'
import NotFoundComponent from '../components/NotFoundComponent'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Auth,
  },
  {
    path: '/',
    component: UserPanel,
    children: [
      {
        path: 'dashboard',
        component: Dashboard
      },
      {
        path: 'pages',
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
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFoundComponent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/' && localStorage.getItem('jwt')) {
    next({ path: '/dashboard' })
  }
  
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
      next({ path: '/' })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      if (to.matched.some(record => record.meta.is_admin)) {
        if (user.role.name === 'Admin') {
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
        }
      } else {
        next()
      }
    }
  } else if (to.matched.some(record => record.meta.guest)) {
    if (localStorage.getItem('jwt') === null) {
      next()
    } else {
      next({ path: '/dashboard' })
    }
  } else {
    next()
  }
})

export default router
