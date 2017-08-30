import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from '@/components/Login'
import Register from '@/components/Register'
import AdminLayout from '@/components/commons/AdminLayout'
import AdminAppbar from '@/components/commons/AdminAppbar'
import AdminDataGrid from '@/components/commons/AdminDataGrid'
import AdminSimpleForm from '@/components/commons/AdminSimpleForm'
import AreaList from '@/components/area/AreaList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/index',
      component: AdminLayout
    },
    {
      path: '/admin',
      component: AdminAppbar,
      children: [
        {
          path: 'list',
          component: AdminDataGrid
        },
        {
          path: 'form',
          component: AdminSimpleForm
        },
        {
          path: 'area',
          component: AreaList
        }
      ]
    }
  ]
})
