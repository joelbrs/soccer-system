import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import TableLeague from '../components/leagues/Table.vue'
import ListLeague from '../components/leagues/List.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: ':league',
      name: 'league',
      component: ListLeague,
      props: true,
      children: [
        {
          path: '/table',
          name: 'table',
          component: TableLeague
        }
      ]

    }
  ]
})
  

