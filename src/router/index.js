import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import Register from '@/views/Register'
import Login from '@/views/Login'
import Personal from '@/views/Personal'
import Writer from '@/views/Writer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      meta: { title: "首页路口" },
      component: Index
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/user',
      name: 'Personal',
      component: Personal,
    },
    {
      path: '/writer',
      name: 'writer',
      meta: { title: "到岗候选人名单确认" },      
      component: Writer
    }
  ]
})
