import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import axios from 'axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'lib-flexible/flexible.js'
import './assets/css/common.css'
import './assets/css/function.css'
import animated from 'animate.css'
import store from './store'

// 全局引入
import { Cookie } from '../src/utils/storage'

// 全局组件
import publicComponents from './public-components'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(axios)
Vue.use(VueAwesomeSwiper)
Vue.use(animated)
Vue.prototype.Cookie = Cookie
Vue.use(publicComponents)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
