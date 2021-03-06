import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/ingreso',
    name: 'login',
    component: Login
  },
  {
    path: '/registro',
    name: 'register',
    component: Register
  }
]

const router = new VueRouter({
  routes
})

export default router
