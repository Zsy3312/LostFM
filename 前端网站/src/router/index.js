import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import MainPage from '@/components/MainPage'
import TypeList from '@/components/TypeList'
import Vol from '@/components/Vol'
import VolList from '@/components/VolList'
import Column from '@/components/Column'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/MainPage',
      name: 'MainPage',
      component:MainPage
    },
    {
      path:'/TypeList',
      name: 'TypeList',
      component:TypeList
    },
    {
      path:'/Vol',
      name: 'Vol',
      component:Vol
    },
    {
      path:'/VolList',
      name: 'VolList',
      component:VolList
    },
    {
      path:'/Column',
      name: 'Column',
      component:Column
    }
  ]
})
