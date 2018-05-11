<template>
  <div class="article-info">
      <!-- 顶部 -->
      <Header></Header>
      <div class="post">
        <div class="article">
            <h1>{{ article.title }}</h1>
            <!-- 作者区域 -->
            <div class="author">
                <a href="javascript:;" class="avatar">
                  <img src="../assets/images/default.jpg" alt="缺失">
                </a>
                <div class="info">
                    <span class="name">wxy</span>
                    <!-- 文章用户信息 -->
                    <div class="meta">
                        2018.04.02 19:10 字数 1397 阅读 1598评论 10喜欢 {{articleCollections}}
                    </div>
                </div>
            </div> 
            <!-- 文章内容 -->
            <div class="show-content">
                <div class="show-content-free" v-html="article.body"></div>
            </div>
            <!-- 文章底部信息 -->
            <div class="meta-bottom">
                <div class="like" @click="likeArticle()">
                    <div :class="{'btn':true, 'like-group':true, 'like_animation':is_like}">
                        <div class="btn-like">
                        <span class="">
                        <i class="iconfont icon-xihuan"></i>
                            喜欢</span>
                        </div>
                        <div class="modal-wrap">
                            <span>{{articleCollections}}</span>
                        </div>
                    </div>
                </div>
                <!-- <div class="fllow" >
                    <div v-if="is_action" class="btn btn-default fllow-btn">
                        <i class="iconfont icon-jiahao"></i>
                        <span>关注</span>
                    </div>
                    <div v-if="!is_action" class="btn btn-default fllowing">
                        <i class="iconfont icon-guanbi2"></i>
                        <span>取消关注</span>
                    </div>
                </div> -->
                
            </div>
            <!-- 评论 -->
            <div>
                <div class="comment-list">
                    <!-- 发表评论 -->
                    <div class="new-comment" v-if="is_active">
                        <a href="javascript:;" class="avatar">
                            <img :src="user.avatar" alt="缺失">
                        </a>
                        <textarea v-model="comment" placeholder="请写下评论..."></textarea>
                        <div class="write-function-block">
                            <div class="btn btn-send" @click="appearComment()">
                                发表
                            </div>
                        </div>
                    </div>
                    <!-- 更多评论 -->
                    <div id="normal-comment-list" class="normal-comment-list">
                        <div>
                            <!-- 作者信息 -->
                            <div class="top-title">
                                <span>{{comments.length}}条评论</span>
                                <a class="author-only">只看作者</a>
                                 <div class="pull-right">
                                    <a >按喜欢排序</a>
                                    <a >按时间正序</a>
                                    <a >按时间倒序</a>
                                </div>
                            </div>
                            <!-- 单条评论 -->
                            <div class="comment" v-for="(item, index) in comments" >
                                <!-- 评论的信息 -->
                                <div class="comment-body">
                                    <div class="author">
                                        <div class="v-tooltip-content">
                                             <a href="javascript:;" class="avatar">
                                                <img :src="item.author.avatar" alt="缺失">
                                            </a>
                                        </div>
                                        <div class="info">
                                            <a class="name">{{ item.author.name }}</a>
                                            <div class="meta">
                                                <span>{{ index+1 }}楼 · {{ item.updated_at }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- 内容 -->
                                    <div class="comment-wrap">
                                        <p>{{ item.comment }}</p>
                                        <!-- <div class="tool-group">
                                            <a >
                                                <i class="iconfont icon-pinglun1"></i>
                                                <span>回复</span>
                                            </a>
                                        </div> -->
                                    </div>
                                    <!-- 回复的评论 -->
                                    <!-- <div class="sub-comment-list">
                                        <div class="sub-comment">
                                           <div class="p">
                                                <div class="v-tooltip-content">
                                                    <a >Jane漂漂</a>：
                                                </div>
                                                <span>
                                                    <a class="maleskine-author">
                                                        @冲浪小鱼儿
                                                    </a>
                                                     小鱼啊！我看到了真爱的模样，激动啊！😂😂😂😂
                                                </span>
                                           </div>
                                           <div class="sub-tool-group">
                                                <span>2018.03.20 15:29</span>
                                                <a >
                                                    <i class="iconfont icon-pinglun1"></i>
                                                    <span>回复</span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="new-comment">
                                            <textarea v-model="comment" placeholder="请写下评论..."></textarea>
                                            <div class="write-function-block">
                                                <div class="btn btn-send">
                                                    发表
                                                </div>
                                            </div>
                                        </div>
                                    </div> -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { mapState } from '../../node_modules/vuex';

export default {
    name: 'Article',
    components: {
        Header
    },
    data() {
        return {
            article: {},
            users: {},
            comment: '',
            is_like: false,
            is_action: true,
            user_id: 0,
            articleCollections: 0,
            articleId: 0,
            comments: []
        }
    },
    computed: {
    // 获取Vuex State from store/modules/articles
    ...mapState({
        user: state => state.users.user,
        is_active: state => state.users.is_active,
        // articleCollections: state => state.articles.articleCollections,
        // is_action: state => state.articles.is_action
    }),
    },
    methods: {
        // 拷贝数组
         copyArr: function (arr){
            return arr.map((e)=>{
                if(typeof e === 'object'){
                    return Object.assign({},e)
                }else{
                    return e
                }
            })
        },
        // 转换时间
        timestampToTime: function(timestamp) {
            var date = new Date(timestamp);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            let Y = date.getFullYear() + '.';
            let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '.';
            let D = date.getDate() + ' ';
            let h = date.getHours() + ':';
            let m = date.getMinutes();
            return Y+M+D+h+m
        },
        // 获取文章的收藏数 
        getArticleCollections(id){
            let url = 'api/article/getArticleCollections';
            let _this = this;
            _this.axios.post(url,{
                article_id: id,
            }).then((response) => {
                let counts = response.data.counts;
                _this.$store.commit('loadArticleCollections', counts);
                _this.articleCollections = counts;
                console.log('喜欢总数' + _this.articleCollections);
            }).catch((error) => {
                console.log(error);
            })
        },
        // 获取单个文章
        getArticle(id) {
            let _this = this;
            _this.axios.post('api/article/getArticle',{
                id: id
            })
            .then(function (response) {
                let data = response.data.result[0];
                _this.article = data;
            })
            .catch(function (error) {
                console.log(error);
            });
        },
        // 喜欢
        likeArticle: function() {
            let _this = this;
            // console.log(this.article.id);
            // console.log(this.user.id);
            if (_this.is_active === true) {            
                _this.axios.post('api/article/likeArticle',{
                    user_id: _this.user.id,
                    article_id: _this.articleId,
                }).then(response => {
                    let data = response.data;
                    _this.is_like = data.is_like;
                    _this.$store.commit('changeLike', data.is_like);
                    console.log(data.is_like);
                    if(data.is_like === true) {
                        _this.articleCollections ++
                    } else {
                        _this.articleCollections --
                    }
                }).catch(function (error) {
                    console.log(error);
                })
            } else {
                alert('请先登陆在进行操作');
            }
        },
        // 判断是否以及喜欢
        isLikeArticle: function() {
            let _this = this;
            // console.log(_this.articleId);
            _this.axios.post('api/article/isLikeArticle', {
                user_id: _this.user.id,
                article_id: _this.articleId,
            }).then(response => {
                let data = response.data;
                _this.is_like = data.is_like;
                _this.$store.commit('changeLike', data.is_like);
                // console.log(data.is_like);
            }).catch(function (error) {
                console.log(error);
            })
        },
        // 发表评论
        appearComment: function() {
            let _this = this;
            _this.axios.post('api/article/appearComment',{
                user_id: _this.user.id,
                article_id: _this.articleId,
                comment: _this.comment
            }).then(response => {
                let data = response.data;
                console.log('发表成功');
                _this.comment = '';
                _this.loaderComment();
            }).catch(function (error) {
                console.log(error);
            })
        },
        // 初始化评论
        loaderComment: function() {
            let _this = this;
             _this.axios.post('api/article/loaderComment',{
                article_id: _this.articleId
            }).then(response => {
                let data = response.data.result;
                // console.log(data);
                _this.comments = _this.copyArr(data);
            }).catch(function (error) {
                console.log(error);
            })
        },
        // 阅读，打开给文章阅读数加上1
        readArticle: function() {
            let _this = this;
             _this.axios.post('api/article/readArticle',{
                article_id: _this.articleId
            }).then(response => {
                let data = response.data.result;
                // console.log(data);
                _this.comments = _this.copyArr(data);
            }).catch(function (error) {
                console.log(error);
            })
        }
      
    },
    mounted() {
        this.articleId = parseInt(this.$route.query.id);
        this.user_id = this.$route.query.user_id;
        this.getArticle(this.articleId);
        this.getArticleCollections(this.articleId);
        this.isLikeArticle();
        this.loaderComment();
        this.readArticle();
        this.$store.commit('getLoginUser');
        this.$store.commit('changeIsActive', JSON.parse(window.localStorage.getItem('isActive')));
        console.log(typeof this.articleId);
    }
}
</script>

<style lang="less" >
@import '../style/article.less';
.article-info {
    padding-top: 59px!important;
}
.like {
    .like_animation {
        background-color: #EA6F5A;
        .modal-wrap {
            border-left: 1px solid #fff;
        }
        span{
        color: #fff;
        }
    }
}


</style>
