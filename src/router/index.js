import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/home'
import Find from '../view/find'
import Cart from '../view/cart'
import My from '../view/my'
import Detail from '../view/detail'
Vue.use(Router)

export default new Router({
  routes: [
      {
        path:'/home',
        name:'home',
        component:Home
      },
      {
        path:'/find',
        name:'find',
        component:Find
      },
      {
        path:'/cart',
        name:'cart',
        component:Cart
      },
      {
        path:'/my',
        name:'my',
        component:My
      },
      {
        path:'/detail/:id',
        name:'detail',
        component:Detail
      },
      {
        path:"/",
        redirect:"home"
      }
    
  ]
})
