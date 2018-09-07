// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './permission' // permission control

import store from './store'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import VueLazyload from 'vue-lazyload'

Vue.use(ElementUI, {
  size: 'medium' // set element-ui default size
})

import loadImg from '@/assets/logding.svg'
import failImg from '@/assets/fail.png'
Vue.use(VueLazyload, {
  error: failImg,
  loading: loadImg
})
// Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
