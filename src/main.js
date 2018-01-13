// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Axios from 'axios'
import VueCookie from 'vue-cookie';

Vue.use(VueCookie);
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = Axios;
/* eslint-disable */

import 'element-ui/lib/theme-chalk/index.css'
import "./assets/css/animate.css"
import "./assets/css/develop.css"

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
