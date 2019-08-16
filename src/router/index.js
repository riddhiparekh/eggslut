import Vue from 'vue'
import Router from 'vue-router'
import Companydetails from '@/components/Companydetails'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/details/:pageName',
      name: 'Companydetails',
      component: Companydetails
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
