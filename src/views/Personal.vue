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
                      <router-link to="/user" class="name">{{this.$store.state.user.name}}</router-link>
                  </div>
                  <div class="info">
                      <ul>
                          <li>
                            <div class="meta-block">
                                <a href="###">
                                    <p>{{getMeta.followings_count}}</p>
                                    关注
                                    <i class="iconfont icon-you"></i>
                                </a>
                            </div>
                          </li>
                          <li>
                            <div class="meta-block">
                                <a href="###">
                                    <p>{{getMeta.favorites_count}}</p>
                                    粉丝
                                    <i class="iconfont icon-you"></i>
                                </a>
                            </div>
                          </li>
                          <li>
                            <div class="meta-block">
                                <a href="###">
                                    <p>{{getMeta.article_count}}</p>
                                    文章
                                    <i class="iconfont icon-you"></i>
                                </a>
                            </div>
                          </li>
                          <li>
                            <div class="meta-block">
                                <a href="###">
                                    <p>{{getMeta.likes_count}}</p>
                                    收获喜欢
                                    <i class="iconfont icon-you"></i>
                                </a>
                            </div>
                          </li>
                      </ul>
                  </div>
              </div>

            <el-tabs class="trigger-menu" v-model="activeName" @tab-click="handleClick" >
                <!-- <el-tab-pane v-for="(item, index) in personals" :key="item.type" >
                   <span slot="label" @click="changeType(item.type)" ><i class="el-icon-tickets"></i>{{item.name}}</span>
                </el-tab-pane> -->
                <el-tab-pane >
                   <span slot="label" @click="changeType('article')" ><i class="el-icon-tickets"></i>文章</span>
                </el-tab-pane>
                <el-tab-pane >
                   <span slot="label" @click="changeType('trends')" ><i class="iconfont icon-xihuan"></i>喜欢的文章</span>
                </el-tab-pane>
                 <el-tab-pane >
                   <span slot="label" @click="changeType('comments')" ><i class="iconfont icon-detailscomments"></i>最新评论</span>
                </el-tab-pane>
                <List :lists="getList"></List>
            </el-tabs>
              
          </div>
          <div class="aside">
            
          </div>
      </div>
      <router-view></router-view>
  </div>
</template>


<script>
import Header from '../components/Header.vue'
import List from '../components/List.vue'
import Writer from './Writer.vue'
import test from '../data/data.json'

export default {
    name: 'Personal',
    components: {
        Header,
        List
    },
    data() {
        return {
            user: {

            },
            personals: [
                {
                    name:"文章",
                    type: "article"
                },
                {
                    name: "动态", 
                    type: "trends"
                },
                {
                    name: "最新评论",
                    type:  "comments"
                }
            ],
            type: "article",
            activeName: 'first',
            test: '测试',
            lists: test.body.lists
        }
    },
    computed: {
         getList: function() {
            let type = this.type;
            if(type === "article") {
                return this.lists.slice(1,5);
            } else if(type === "trends") {
                return this.lists.slice(5,10);
            }
            else if(type === "comments") {
                return this.lists.slice(10,15);
            } else {
                return this.lists;
            }
        },
        getMeta: function() {
            return this.$store.state.user || this.$store.state.defaultUser;
        }
    },
    methods: {
        handleClick(tab, event) {
        console.log(this.getMeta);
        },
        
        // 改变状态
        changeType(type) {
            this.type = type;
        }

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
    .aside {
        flex: 7;
        margin-left: 4%;
        background-color: #eee;
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
