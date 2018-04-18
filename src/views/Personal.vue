<template>
  <div class="personal">
      <Header></Header>
      <div class="container person">
          <div class="main">
              <div class="main-top">
                  <a href="###" class="avatar">
                      <img src="../assets/images/default.jpg" />
                  </a>
                  <div class="title">
                      <router-link to="/user" class="name">{{users.name}}</router-link>
                  </div>
                  <div class="info">
                      <ul>
                          <li v-for="item in users" :key="item.index">
                              <div class="meta-block">
                                  <p>{{item}}</p>
                                  关注
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
              <ul class="trigger-menu">
                  <li class="active">
                      <a href="###">文章</a>
                  </li>
                  <li class="">
                      <a href="###">粉丝</a>
                  </li>
              </ul>
          </div>
          <div class="aside">

          </div>
      </div>
  </div>
</template>


<script>
import Header from '../components/Header.vue'

export default {
    name: 'Personal',
    components: {
        Header
    },
    data() {
        return {
            users: {
                name: '离开以后',
                follow: 1,
                article: 10,
                likes: 31,
                img: '../assets/images/default.jpg'
            }
        }
    }
}
</script>

<style lang="less" scoped>
.person {
    display: flex;
    min-height: 600px;

    .main {
        flex: 16;
        margin-top: 20px;
        
        .main-top {
            margin-top: 20px;
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
                    .meta-block {
                        font-size: 12px;
                        margin: 0 7px 6px 0;
                        padding: 0 7px 0 0;
                        border-right: 1px solid #f0f0f0;
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
    border-bottom: 1px solid #f0f0f0;
    font-size: 0;
    list-style: none;
    li {
        position: relative;
        display: inline-block;
        padding: 8px 0;
        margin-bottom: -1px;
    }
    li.active {
        border-bottom: 2px solid #646464;
    }
    a {
        padding: 13px 20px;
        font-size: 15px;
        font-weight: 700;
        color: #969696;
        line-height: 25px;
    }
}
</style>
