
import Vue from 'vue'
import Vuex from 'vuex'

import articles from './modules/articles'
import users from './modules/users'
import followers from './modules/followers'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        articles,
        users,
        followers
      }
})
  
