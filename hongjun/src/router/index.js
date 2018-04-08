import Vue from 'vue'
import Router from 'vue-router'
import mainMap from '@/components/mainMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainMap',
      component: mainMap
    }
  ]
})
