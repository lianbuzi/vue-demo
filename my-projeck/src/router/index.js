import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import List from '@/components/List'
import AddUser from '@/components/AddUser'

Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },{
      path: '/List',
      name: 'List',
      component: List
    },
    {
      path: '/Add',
      name: 'AddUser',
      component: AddUser
    }
  ]
})
