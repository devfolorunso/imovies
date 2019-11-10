import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Hollywood from '../views/Hollywood.vue'
import Nollywood from '../views/Nollywood.vue'
import Movieseries from '../views/Movieseries.vue'

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
