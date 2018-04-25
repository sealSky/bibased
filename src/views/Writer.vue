<template>
  <div class="writer">
    <!-- 左边文章总信息 -->
    <div class="writer-article">
      <div class="back-button">
        <router-link to="/">回首页</router-link>
      </div>
      
      <ul class="article-lists">
        <li 
        v-for="(item, index) in articles"
        :key="index"
        :class="{'article-list':true, 'active':count === index}"
        @click="changeActive(index)"
        >
          <i class="head-icon iconfont icon-wenzhang1"></i>
          <div 
          class="article-set"
          @click="handleSetClick($event)"
          >
              <i class="iconfont icon-shezhi"></i>
              <span>
                <ul 
                class="set-options"
                >
                <!-- @click="showSet($event)" -->
                
                  <li class="options-option">
                    <i class="iconfont icon-duihao"></i>
                    已发布
                  </li>
                  <li class="options-option delete-article" @click="deleteArticle(index)">
                    <i class="iconfont icon-shanchu"></i>
                    删除
                  </li>
                </ul>
              </span>
          </div>
          <span class="article-name">{{item.title}}</span>
          <span class="article-content">{{item.body}}</span>
        </li>
      </ul>
      <div 
      class="new-article"
      @click="newArticle()"
      >
        <i class="iconfont icon-tianjia"></i>
        <span>新建文章</span>
      </div>
    </div>

    <div class="writer-main">
      <p class="write-main-tic">保存</p>
      <div class="title">
        <input
        class="title-input"
        placeholder="在此输入标题"
        clearable
        />
      </div>
      <div id="editorElem" style="text-align:left"></div>
      <button v-on:click="getContent">查看内容</button>
      
    </div>
  </div>
</template>

<script>
import E from 'wangeditor'

export default {
    name: 'writer',
    data () {
        return {
            isA: '1',
            count: '',
            articles: [
              {
                id: 1,
                title: '今天',
                body: '今天开始进行毕业设计系统的开发，争取在五一之前把系统做好。',
                user_id: 4,
                comments_count: 0,
                answers_count: 0,
                followers_count: 0,
                close_comment: 0,
                is_hidden: false
             },
             {
                id: 1,
                title: '今天',
                body: '今天开始进行毕业设计系统的开发，争取在五一之前把系统做好。',
                user_id: 4,
                comments_count: 0,
                answers_count: 0,
                followers_count: 0,
                close_comment: 0,
                is_hidden: false
             }
            ],
            editorContent: ''
        }
    },
    methods: {
       getContent: function () {
            alert(this.editorContent)
        },
        changeActive: function (index) {
          this.count = index;
        },
        showSet: function (event) {
          let target = event.target || event.srcElement;
          target.parentNode.classList.remove('set-show');

        },

        handleSetClick: function(event) {
          let cause = event.target || event.srcElement;
          let options = event.currentTarget.querySelector('.set-options');
          options.classList.toggle('set-show');
        },
        // 新建文章函数
        newArticle: function () {
          console.log('new');
          this.articles.push({
            id: 1,
            title: '今天',
            body: '',
            user_id: 4,
            comments_count: 0,
            answers_count: 0,
            followers_count: 0,
            close_comment: 0,
            is_hidden: false
          });
        },
        deleteArticle: function (index) {
            this.articles.splice(index, 1);
            let options = document.querySelectorAll('.set-options');
            console.log(this.articles);
        }
    },
    mounted() {
        var editor = new E('#editorElem');
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
          
        }
        editor.customConfig.menus = [
          'head',  // 标题
          'bold',  // 粗体
          'fontSize',  // 字号
          'italic',  // 斜体
          'underline',  // 下划线
          'justify',  // 对齐方式
          'image',  // 插入图片
          'undo',  // 撤销
          'redo'  // 重复
        ]
        editor.create();  
        let articles = document.querySelector('.article-lists');
        let options = document.querySelectorAll('.set-options');

        document.onclick = function (ev) {

        let target = ev.target || ev.srcElement;
        // console.log(target);
        if (target.nodeName.toUpperCase() !== 'LI') {
          
        }
　　　　}

      },

      destroyed () {
      }
}
</script>

<style lang="less">
  html {
    height: 100%;
  }
  body {
      height: 100%;
  }
  .writer {
    .title-input {
        width: 100%;
        padding: 0 80px 10px 40px;
        margin-bottom: 0;
        border: none !important;
        font-size: 18px;
        font-weight: 400;
        line-height: 30px;
        -webkit-box-shadow: none;
        box-shadow: none;
        color: #595959;
        background-color: transparent;
        outline: none;
        border-radius: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
  }

</style>
