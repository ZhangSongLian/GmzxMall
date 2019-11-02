// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import ElementUI from 'element-ui'
import axios from 'axios' 
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.css'
import 'lib-flexible/flexible.js'
import './assets/css/common.css'
import './assets/css/function.css'
import animated from 'animate.css'
import store from './store'


Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(ElementUI)
Vue.use(axios)
Vue.use(VueAwesomeSwiper)
Vue.use(animated)

// 全局引入
import { Cookie } from '../src/utils/storage'
Vue.prototype.Cookie = Cookie

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
