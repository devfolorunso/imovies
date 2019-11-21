import Vue from 'vue'
import VueRouter from 'vue-router'

// Home and About
import Home from '../views/Home.vue'
import About from '../views/About.vue'

// Movie Routes
import Hollywood from '../views/Hollywood.vue'
import Nollywood from '../views/Nollywood.vue'
import Movieseries from '../views/Movieseries.vue'

// User Routes
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'
import Dashboard from '../views/Dashboard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/hollywood',
    name: 'hollywood',
    component: Hollywood
  },
  {
    path: '/nollywood',
    name: 'nollywood',
    component: Nollywood
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/movieseries',
    name: 'movieseries',
    component: Movieseries
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
