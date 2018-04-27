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
                        2018.04.02 19:10 字数 1397 阅读 1598评论 10喜欢 121
                    </div>
                </div>
            </div> 
            <!-- 文章内容 -->
            <div class="show-content">
                <div class="show-content-free" v-html="article.body"></div>
            </div>
            <!-- 文章底部信息 -->
            <div class="meta-bottom">
                <div class="like">
                    <div class="btn like-group">
                        <div class="btn-like">
                        <span class="">
                        <i class="iconfont icon-xihuan"></i>
                            喜欢</span>
                        </div>
                        <div class="modal-wrap">
                            <span>121</span>
                        </div>
                    </div>
                </div>
                <div class="fllow">
                    <div class="btn">
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
    name: 'Article',
    components: {
        Header
    },
    data() {
        return {
            article: {},
            users: {}
        }
    },
    methods: {
        test: function() {
        },
           // 获取单个文章
        getArticle(id) {
            let _this = this;
            _this.axios.post('api/writes/getArticle',{
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
    },
    mounted() {
        this.getArticle(12);
    }
}
</script>

<style lang="less" >
@import '../style/article.less';
.article-info {
    padding-top: 59px!important;
}

</style>
