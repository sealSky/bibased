<template>
  <div class="personal">
      <Header></Header>
      <div class="container person body">
          <div class="main">
              <div class="main-top">
                  <a href="###" class="avatar">
                      <img src="../assets/images/default.jpg"  />
                  </a>
                  <div class="title">
                      <router-link to="/user" class="name"></router-link>
                  </div>
                  <div class="info">
                      <ul>
                          <li>
                            <div class="meta-block">
                                <a href="###">
                                    <p>{{user.name}}</p>
                                    关注
                                    <i class="iconfont icon-you"></i>
                                </a>
                            </div>
                          </li>
                          <li>
                            <div class="meta-block">
                                <a href="###">
                                    <p>{{user.followers_count}}</p>
                                    粉丝
                                    <i class="iconfont icon-you"></i>
                                </a>
                            </div>
                          </li>
                          <li>
                            <div class="meta-block">
                                <a href="###">
                                    <p>{{user.favorites_count}}</p>
                                    文章
                                    <i class="iconfont icon-you"></i>
                                </a>
                            </div>
                          </li>
                          <!-- <li>
                            <div class="meta-block">
                                <a href="###">
                                    <p>{{user.likes_count}}</p>
                                    收获喜欢
                                    <i class="iconfont icon-you"></i>
                                </a>
                            </div>
                          </li> -->
                      </ul>
                  </div>
              </div>

            <el-tabs class="trigger-menu" v-model="activeName" @tab-click="handleClick" >
                <el-tab-pane >
                   <span slot="label" @click="getArticles()" ><i class="el-icon-tickets"></i>文章</span>
                </el-tab-pane>
                <el-tab-pane >
                   <span slot="label" @click="getLikeArticles()" ><i class="iconfont icon-xihuan"></i>喜欢的文章</span>
                </el-tab-pane>
                 <el-tab-pane >
                   <span slot="label" @click="getArticles(true)" ><i class="iconfont icon-detailscomments"></i>最新评论</span>
                </el-tab-pane>
                <List :articles="articles"></List>
            </el-tabs>
              
          </div>
          <div class="aside">
             <a href="javascript:;">
                <img src="/static/images/aside3.jpg" alt="">
                <img src="/static/images/aside1.jpg" alt="">
                <img src="/static/images/aside2.jpg" alt="">
            </a>
          </div>
      </div>
      <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Header from '../components/Header.vue'
import List from '../components/List.vue'
import Writer from './Writer.vue'

export default {

    name: 'Personal',
    components: {
        Header,
        List
    },
    data() {
        return {
            activeName: 'first',
        }
    },
    computed: {
        ...mapState({
        user: state => state.users.user,
        articles: state => state.articles.articles,

      })
    },
    methods: {
        handleClick(tab, event) {
        },
        
          // 获取用户所有文章
        getArticles(reverse) {
            let _this = this;
            _this.axios.post('api/article/getArticles',{
            user_id: _this.user.id
            })
            .then(function (response) {
            let data = response.data.result;
            if(reverse === true) {
                data.reverse();
            }
            // console.log(data);
            _this.$store.commit('loadArticles',data);
            
            })
            .catch(function (error) {
            console.log(error);
            });
        },
        // 获取用户喜欢的文章
        getLikeArticles() {
            let _this = this;
            _this.axios.post('api/article/getLikeArticles',{
            user_id: _this.user.id
            })
            .then(function (response) {
            let data = response.data.articles;

            // console.log(data);
            _this.$store.commit('loadArticles',data);
            
            })
            .catch(function (error) {
            console.log(error);
            });
        },       
    },
    mounted() {
        this.getArticles();
        // console.log(this.articles);
    },
    created: function() {
    },
    filters: {
        
    }
}
</script>

<style lang="less" scoped>
.person {
    padding-top: 59px!important;
    display: flex;
    min-height: 600px;

    .main {
        flex: 16;
        
        .main-top {
            margin-bottom: 20px;
            overflow: hidden;
            .avatar {
                float: left;
                width: 80px;
                height: 80px;
                margin-left: -2px;
            }
            .title {
                padding: 5px 0 0 100px;
                .name {
                    display: inline;
                    font-size: 21px;
                    font-weight: 700;
                    vertical-align: middle;
                }
            }
            .info {
                margin-top: 5px;
                padding-left: 100px;
                font-size: 14px;
                ul {
                    li {
                        display: inline-block;
                    }
                    li:last-child .meta-block {
                        margin: 0;
                        padding: 0;
                        border: none;
                    }
                    .meta-block {
                        font-size: 12px;
                        margin: 0 7px 6px 0;
                        padding: 0 7px 0 0;
                        border-right: 1px solid #f0f0f0;
                        i {
                            font-size: inherit;
                        }
                    }
                    a {
                        color: #969696;
                    }
                    p {
                        margin-bottom: -3px;
                        font-size: 15px;
                        color: #333;
                    }
                }
            }
        }
    }
   
}

.trigger-menu {
    margin-bottom: 20px;
    list-style: none;
   span {
       width: 100%;
        padding: 13px 20px;
        font-size: 15px;
        font-weight: 700;
        color: #969696;
        line-height: 25px;
   }
   span:hover {
        color: #646464;
   }
   .is-active span {
       color: #646464;
   }
   i {
        margin-right: 5px;
        font-size: 17px;
   }
}
</style>
