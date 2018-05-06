
// 文章的vuex
const state = {
    articles: [],
    articleCollections: 0,
    is_action: null,
    comments: []
}

const mutations = {
    // 获取文章
    loadArticles(state, obj) {
        state.articles = obj;
    },
    // 初始化喜欢数
    loadArticleCollections(state,str) {
        state.articleCollections = str;
    },
    // 改变喜欢
    changeLike(state, flag) {
        if (flag === true) {
            state.articleCollections --
        } else {
            state.articleCollections ++
        }
    },
    // 改变关注
    changeAction(state, flag) {
        state.is_action = flag
    },
    getComments(state, arr) {
        state.comments = arr
    }
  
}

const actions = {
    
}

export default {
    state,
    mutations,
    actions
  }
  
