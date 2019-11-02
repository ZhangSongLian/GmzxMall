
import Vue from 'vue'
import Vuex from 'vuex'
import goodlist from './modules/goodList'
import home from './modules/home'
import article from './modules/article'

import cart from './modules/cart'
import user from './modules/userCenter'
import getters from './getter'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      goodlist,
      home,
      article,
      cart,
      user
    },
    getters
})

export default store