
// 文章的vuex
const state = {
    articles: []
}

const mutations = {
    // 获取文章
    loadArticles(state, obj) {
        state.articles = obj;
    }

}

const actions = {
    
}

export default {
    state,
    mutations,
    actions
  }
  
