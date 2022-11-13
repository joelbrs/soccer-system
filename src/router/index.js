import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TableLeague from '../views/Table.vue'
import Details from '../views/Details.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
      path: '*',
      name: 'home',
      component: Home
    },

    {
      path: '/table/:league',
      name: 'table',
      component: TableLeague,
    },

    {
      path: '/details/:league',
      name: 'details',
      component: Details
    }
  ]
})
  

