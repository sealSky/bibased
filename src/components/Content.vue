<template>
  <div class="contents container body">
      <div class="main">
          <!-- 热门话题 -->
          <div class="recommend-collection">
              <a href="javascript:;" class="collection" target="_blank" v-for="item in recommend" :key="item.index" >
                  <img class="img" :src="item.img" />
                  <div class="name">{{item.name}}</div>
              </a>
          </div>
           <!-- 文章列表 -->
            <div id="list-container">
                <ul class="note-list">
                    <li v-bind:class="{haveImg: list.img}" v-for="list in articles" :key="list.index">
                        <div class="content">
                            <div class="author">
                                <a href="#" class="avatar">
                                    <img class="img" :src="list.author.avatar" >
                                </a>
                                <div class="info">
                                    <a href="#" class="nickname">{{list.author.name}}</a>
                                    <span class="time">{{list.updated_at}}</span>
                                </div>
                            </div>
                        <a href="javascript:;"  class="title" target="_blank" @click="readArticle(list.id, list)" >{{list.title}}</a>
                        <p class="abstract" v-html="list.text"></p>
                        <div class="meta">
                            <a href="javascript:;">
                                <i class="iconfont icon-yuedu"></i>
                                {{ list.reads_count }}
                            </a>
                            <a href="javascript:;">
                                <i class="iconfont icon-detailscomments"></i>
                                {{ list.comments_count }}
                            </a>
                            <a href="javascript:;">
                                <i class="iconfont icon-xihuan1"></i>
                                    {{ list.followers_count }}
                            </a>
                        </div>
                        </div>
                        <a href="#" v-if="list.img" class="wrapImg" >
                            <span v-html="list.img"></span>
                        </a>
                    </li>
                </ul>
            </div>
          <!-- <List :articles="articles"></List> -->
      </div>
      <div class="aside">
          <a href="javascript:;">
            <img src="/static/images/aside2.jpg" alt="">
            <img src="/static/images/aside1.jpg" alt="">
            <img src="/static/images/aside3.jpg" alt="">
          </a>
      </div>
  </div>
</template>

<script>
import List from './List.vue'
import test from '@/data/data.json'
import { mapState } from '../../node_modules/vuex';

export default {

    name: 'Content',
    components: {
        List
    },    
    data() {
        return {
            flag: true,
            recommend: test.body.recommend,
            article: []
        }
    },
    computed: {
        // 获取Vuex State from store/modules/articles
        ...mapState({
            articles: state => state.articles.articles
        })
    },
    methods: {
        copyArr: function (arr){
            return arr.map((e)=>{
                if(typeof e === 'object'){
                    return Object.assign({},e)
                }else{
                    return e
                }
            })
        },
        // 获取所有文章
        getArticleAll: function(num) {
            let _this = this;
            _this.axios.post('/api/article/getArticleAll', {
                num: num,
            }).then(function (response) {
                let data = response.data.result.reverse();
                console.log(data);
                _this.$store.commit( 'loadArticles', data );
                _this.article = _this.copyArr(data);
                
            }).catch(function (error) {
                console.log(error);
            })
        },
        test: function() {
            console.log(this.$store.state.articles.articles);
            console.log(this.article);
        },
        readArticle: function (id, article) {
            console.log(id);
            let routeData = this.$router.resolve({ path: '/p/' + id, query:{ id:id, user_id: article.user_id} });
            window.open(routeData.href, '_blank');
            // this.$router.push({
            //     name: 'Article'
            // });
            // console.log(this.$router);
        }
    },

    // 实例创建前钩子函数
    mounted() {
        //执行获取所有文章函数
        this.getArticleAll();
        // 赋值给articles
    },
   

}
</script>

<style scoped lang="less">
.contents {
    display: flex;

    .main {
        flex: 16;

        .recommend-collection {
            margin-bottom: 20px;
            .collection {
                display: inline-block;
                margin: 0 18px 18px 0;
                min-height: 32px;
                background-color: #f7f7f7;
                border: 1px solid #dcdcdc;
                border-radius: 4px;
                vertical-align: top;
                box-sizing: border-box;
                overflow: hidden;
                .img {
                    width: 32px;
                    height: 32px;
                }
                .name {
                    display: inline-block;
                    padding: 0 11px 0 6px;
                    font-size: 14px;
                }
            }
        }

        
    }
   
}
</style>
