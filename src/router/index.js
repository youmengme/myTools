import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login'
import main from '@/view/main'
import view from '@/view/view'
import less from '@/view/tools/less'



Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      meta: {
        title: '登录页面 - Youmeng'
      },
      name: 'login',
      component: login
    },
    {
      path: '/main',
      meta: {
        title: '主页面 - Youmeng'
      },
      name: 'main',
      component: main
    },
    {
      path: '/less',
      meta: {
        title: 'Less - Youmeng'
      },
      name: 'less',
      component: less
    },
    {
      path: '/view',
      meta: {
        title: 'View - Youmeng'
      },
      name: 'view',
      component: view
    }
  ]
})
