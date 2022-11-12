import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import StandingLeague from '../components/leagues/Standing.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/standing',
    name: 'standing',
    component: StandingLeague
  }
]

const router = new VueRouter({
  routes
})

export default router
