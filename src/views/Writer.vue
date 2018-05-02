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
        @click="changeActive(index, item.id)"
        >
          <i class="head-icon iconfont icon-wenzhang1"></i>
          <div 
          class="article-set"
         @click="deleteArticle(item.id)"
          >
              <i class="iconfont icon-shanchu"></i>
              <!-- <span>
                <ul 
                class="set-options"
                >
                  <li class="options-option" >
                    <i class="iconfont icon-duihao"></i>
                    发布
                  </li>
                  <li class="options-option delete-article" @click="deleteArticle(index)">
                    <i class="iconfont icon-shanchu"></i>
                    删除
                  </li>
                </ul>
              </span> -->
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

    <!-- 文章编写界面 -->
    <div class="writer-main">
      <button class="release"  @click="reviseArticle()">修改</button>
      <div class="title">
        <input
        class="title-input"
        placeholder="在此输入标题"
        v-model="title"
        />
      </div>
      <div id="editorElem" style="text-align:left;">
        <div  v-html="body"></div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import E from 'wangeditor'

export default {
    name: 'writer',
    data () {
        return {
            firstId: '',
            isA: '1',
            count: '',
            title: this.currentTime(),
            body: '',
            articles: [],
            id: '',
            editor: null
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
      changeActive: function (index, id) {
        this.count = index;
        if(id) {
        this.getArticle(id);
        }
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
        let _this = this;
        _this.axios.post('api/article/newArticle',{
          title: this.currentTime(),
          body: '',
          user_id: _this.$store.state.user.id,
          created_at: _this.currentTime()
        })
        .then(function (response) {
          let data = response.data;
          console.log(data);
          _this.getArticles();
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      // 删除文章
      deleteArticle: function (id) {
        let _this = this;
        _this.axios.post('api/article/deleteArticle',{
          user_id: _this.$store.state.user.id,
          id: id
        })
        .then(function (response) {
          let data = response.data;
          // 重新获取数据库的数据
          _this.getArticles();
          console.log(data);
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      // 获取当前日期
      currentTime() {
        let currentTime =  new Date();
        let year = currentTime.getFullYear();
        let moth = currentTime.getMonth()+1;
        let day = currentTime.getDate();
        return year + '-' + moth + '-' + day;
      },
        // 发布文章
        // 修改文章
      reviseArticle() {
        let _this = this;
        _this.axios.post('api/article/reviseArticle',{
          title: _this.title,
          body: _this.Editor.txt.html(),
          text: _this.Editor.txt.text().slice(0, 80) + '...',
          id: _this.id,
          updated_at: _this.currentTime()
        })
        .then(function (response) {
          let data = response.data;
          _this.getArticles();
          _this.$message({
            message: '修改成功',
            type: 'success'
          })
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      // 获取用户所有文章
      getArticles() {
        let _this = this;
        _this.axios.post('api/article/getArticles',{
          user_id: _this.$store.state.user.id
        })
        .then(function (response) {
          let data = response.data.result;
          _this.articles = _this.copyArr(data);
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      // 获取单个文章
      getArticle(id) {
        let _this = this;
        _this.axios.post('api/article/getArticle',{
          id: id
        })
        .then(function (response) {
          let data = response.data.result[0];
          _this.title = data.title;
          _this.body = data.body;
          _this.text = data.text;
          _this.id = data.id;
        })
        .catch(function (error) {
          console.log(error);
        });
      },
    },
    // 实时计算
    computed: {
      // 获取从后台获取用户的所有文章
    },
    mounted() {
      let _this = this;
      _this.Editor = new E('#editorElem');
      _this.Editor.customConfig.menus = [
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
      _this.Editor.customConfig.height = "100%";
      _this.Editor.create(); 

      function getBody() {
        return editor.txt.html();
      }

      this.getArticles();
      this.changeActive(0);

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

      let wetextContainer = document.querySelector('.w-e-text-container');
      wetextContainer.style.height = '100%';

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
  #editorElem {
    height: 500px;
  }

</style>
