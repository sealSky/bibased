<template>
  <div class="contents container">
      <div class="main">
          <!-- 热门话题 -->
          <div class="recommend-collection">
              <router-link class="collection" target="_blank" v-for="item in recommend" :key="item.index" :to="item.link" >
                  <img class="img" :src="item.img" />
                  <div class="name">{{item.name}}</div>
              </router-link>
          </div>
          <!-- 文章列表 -->
          <div id="list-container">
              <ul class="note-list">
                  <li v-for="list in lists" :key="list.index">
                      <div class="content">
                          <div class="author">
                              <a href="#" class="avatar">
                                  <img class="img" :src="list.content.author.avatar.img" >
                              </a>
                              <div class="info">
                                  <a href="#" class="nickname">{{list.content.author.info.nickname.text}}</a>
                                  <span class="time">{{list.content.author.info.time}}</span>
                              </div>
                          </div>
                        <a href="#" class="title" target="_blank">{{list.content.author.title.text}}</a>
                        <p class="abstract">{{list.content.author.abstract}}</p>
                      </div>
                      <a href="#" class="wrap-img">
                          <img :src="list.wrap.img" class="img" />
                      </a>
                  </li>
              </ul>
          </div>
      </div>
      <div class="aside">
          
      </div>
  </div>
</template>

<script>
import test from '../data/data.json'

export default {

    name: 'Content',
    props: ['name'],
    data() {
        return {
            recommend: test.body.recommend,
            lists: test.body.lists
        }
    }

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

        .note-list {

            .content {
                margin-right: 160px;
            }
            li {
                position: relative;
                width: 100%;
                margin: 0 0 17px;
                padding: 0 2px 17px 0;
                border-bottom: 1px solid #f0f0f0;
                word-wrap: break-word;
                line-height: 20px;
            }
            .author {
                margin-bottom: 14px;
                font-size: 13px;
                .avatar {
                    display: inline-block;
                    vertical-align: middle;
                    margin: 0 5px 0 0;
                    width: 32px;
                    height: 32px;
                    .img {
                        width: 100%;
                        height: 100%;
                        border: 1px solid #ddd;
                        border-radius: 50%;
                    }
                }
                .info {
                    display: inline-block;
                    vertical-align: middle;
                    .nickname {
                        vertical-align: middle;
                    }
                }
            }
            .title {
                margin: -7px 0 4px;
                display: inherit;
                font-size: 18px;
                font-weight: 700;
                line-height: 1.5;
            }
            .abstract {
                margin: 0 0 8px;
                font-size: 13px;
                line-height: 24px;
            }
            .wrap-img {
                position: absolute;
                top: 50%;
                margin-top: -68px;
                right: 0;
                width: 150px;
                height: 120px;
                .img {
                    width: 100%;
                    height: 100%;
                    border-radius: 4px;
                    border: 1px solid #f0f0f0;
                }
            }
        }
    }
    .aside {
        flex: 7;
        margin-left: 4%;

    }
}
</style>
