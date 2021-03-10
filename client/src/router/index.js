import { createRouter, createWebHistory } from 'vue-router'

import { checkTokenBeforeEnter } from './router-utils'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Crypto from '../views/Crypto.vue'
import Profile from '../views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/crypto',
    name: 'Crypto',
    component: Crypto,
    beforeEnter: checkTokenBeforeEnter
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: checkTokenBeforeEnter
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
