import {createRouter, createWebHistory} from 'vue-router'
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
    path: '/login',
    name: 'Auth',
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
  
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('jwt') == null) {
      next({
        path: '/login',
        params: {nextUrl: to.fullPath}
      })
    } else {
      let user = JSON.parse(localStorage.getItem('user'))
      console.log(user)
    }
  } else if(to.matched.some(record => record.meta.guest)) {
    if(localStorage.getItem('jwt') == null){
      next()
      console.log('if guest jwt: ', localStorage.getItem('jwt'))
      console.log('if guest user: ', localStorage.getItem('user'))
    }
    else{
      console.log('else guest jwt: ', localStorage.getItem('jwt'))
      console.log('else guest user: ', localStorage.getItem('user'))
      next({ name: 'dashboard'})
    }
  } else {
    console.log('jwt: ', localStorage.getItem('jwt'))
    console.log('user: ', localStorage.getItem('user'))
    next()
  }
})

export default router
