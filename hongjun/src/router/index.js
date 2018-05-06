import Vue from 'vue'
import Router from 'vue-router'
import mainMap from '@/components/mainMap'
import firstpage from '@/components/firstpage'
import pagethree from '@/components/pagethree'
import mypage from '@/components/mypage'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstpage',
      component: firstpage
    },{
      path: '/firstpage',
      name: 'firstpage',
      component: firstpage
    },{
      path: '/map',
      name: 'map',
      component: mainMap
    }, {
      path: '/book',
      name: 'book',
      component: pagethree
    }, {
      path: '/mypage',
      name: 'mypage',
      component: mypage
    }

  ]
})
