import login from './modules/login.js'



import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        count: 1,
        age: '18', //存储了一个公共状态age
        user: {
            answers_count: 0,
            article_count: 0,
            avatar: '"../assets/reslongo.png"',
            comments_count: 0,
            created_at: null,
            favorites_count: 0,
            followers_count: 0,
            followings_count: 0,
            id: 0,
            is_active: false,
            likes_count: 0,
            name: '',
            password: '',
            phone: '',
            resume: null
        },
        // 给user设置一个默认的对象
        defaultUser: {
            answers_count: 0,
            article_count: 0,
            avatar: '"../assets/reslongo.png"',
            comments_count: 0,
            created_at: null,
            favorites_count: 0,
            followers_count: 0,
            followings_count: 0,
            id: 0,
            is_active: false,
            likes_count: 0,
            name: '',
            password: '',
            phone: '',
            resume: null
        }
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