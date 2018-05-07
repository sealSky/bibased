
const state = {
    // 在线状态
    is_active: false,
    user: {
        answers_count: 0,
        article_count: 0,
        avatar: '/static/images/default.jpg',
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
    defaultUser: {
        answers_count: 0,
        article_count: 0,
        avatar: '/static/images/default.jpg',
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
}

const mutations = {
    getLoginUser(state, obj) {
        state.user = obj
    },
    getUser(state, obj) {
        state.user = obj
    },
    changeIsActive(state, boolean) {
        state.is_active = boolean
    },
    getLoginUser(state) {
        state.user = JSON.parse(window.localStorage.getItem('user'))
    },
   
}

const actions = {

}

export default {
  state,
  mutations,
  actions
}