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
          <span class="article-content" v-html="item.body"></span>
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
      <button class="release" @click="releaseArticle()">发布</button>
      <div class="title">
        <input
        class="title-input"
        placeholder="在此输入标题"
        v-model="title"
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
            title: this.currentTime(),
            body: '',
            articles: [],
            editorContent: ''
        }
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
            title: this.currentTime(),
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
        },
        currentTime() {
          let currentTime =  new Date();
          let year = currentTime.getFullYear();
          let moth = currentTime.getMonth()+1;
          let day = currentTime.getDate();
          return year + '-' + moth + '-' + day;
        },
        // 发布文章
        releaseArticle() {
          let _this = this;
          _this.axios.post('api/writes/userArticle',{
            title: _this.title,
            body: '你好啊，2018',
            user_id: _this.$store.state.user.id
          })
          .then(function (response) {
            let data = response.data;
            console.log(data);
          })
          .catch(function (error) {
            console.log(error);
          });
        },
        getArticles() {
          let _this = this;
          _this.axios.post('api/writes/getArticles',{
            user_id: _this.$store.state.user.id
          })
          .then(function (response) {
            let data = response.data.result;
            _this.articles = _this.copyArr(data);
            console.log(data);
          })
          .catch(function (error) {
            console.log(error);
          });
        }
    },
    // 实时计算
    computed: {
      // 获取从后台获取用户的所有文章
      article() {

      }
     
    },
    mounted() {

      let editor = new E('#editorElem');
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
      this.getArticles();

      // 获取当前登录的用户信息
      let user = JSON.parse(window.localStorage.getItem('user'));
      //如果用户没有登录跳转到登陆界面
      if (!user) {
        this.$message({
          message: '请先登陆在进行操作',
          type: 'error'
        });
        setTimeout(() => {
          this.$router.push('/login')
        },2000)
      }


      },

      destroyed () {

      }
}
</script>

<style lang="less" scoped>
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
