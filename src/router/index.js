import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import AdminLayout from '@/components/commons/AdminLayout'
import AdminNavbar from '@/components/commons/AdminNavbar'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: AdminLayout
    },
    {
      path: '/app',
      name: 'AdminNavbar',
      component: AdminNavbar
    }
  ]
})
