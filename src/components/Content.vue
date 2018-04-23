<template>
  <div class="contents container body">
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
                  <li class="have-img" v-for="list in lists" :key="list.index">
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
                        <div class="meta">
                            
                        </div>
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

        
    }
    .aside {
        flex: 7;
        margin-left: 4%;

    }
}
</style>
