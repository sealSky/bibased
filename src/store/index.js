import login from './modules/login.js'



import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 1,
        age: '18', //存储了一个公共状态age
        user: {
          name: '',
          is_active: false
        },
    },
    mutations : {
        changeUserName(state, msg){
            state.user.name= msg;
        },
        getUser(state, obj) {
          state.user = obj
        }
    },
    modules: {
      login
    },
}) 
export default store