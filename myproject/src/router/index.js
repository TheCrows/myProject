import Vue from 'vue'
import Router from 'vue-router'
import homePage from '../components/basic/homePage.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    }, {
      path: '/map',
      name: 'map',
      
    }

  ]
})
