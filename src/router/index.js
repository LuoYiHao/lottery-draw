import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Draw from '@/components/Draw'
import Config from '@/components/Config'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Draw',
      name: 'Draw',
      component: Draw
    },
    {
      path: '/Config',
      name: 'Config',
      component: Config
    },
  ]
})
