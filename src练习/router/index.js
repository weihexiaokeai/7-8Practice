import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/home'
import Discover from '../view/discover'
import Order from '../view/order'
import My from '../view/my'
import Dican from '../view/dican'
import Comment from '../view/comment'
import Bussi from '../view/bussi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/home'
    },
    {
      path:'/home',
      name:"home",
      component:Home,
      children:[
           {
             path:'dican',
             name:'dican',
             component:Dican
           },
           {
            path:'comment',
            name:'comment',
            component:Comment
          },
          {
            path:'bussi',
            name:'bussi',
            component:Bussi
          }
      ]
    },
    {
      path:'/discover',
      name:"discover",
      component:Discover
    },
    {
      path:'/order',
      name:"order",
      component:Order
    },
    {
      path:'/my',
      name:"my",
      component:My
    }
    
  ]
})
