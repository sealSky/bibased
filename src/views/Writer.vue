<template>
  <div class="writer">
    <!-- 左边文章总信息 -->
    <div class="writer-article">
      <div class="back-button">
        <router-link to="/">回首页</router-link>
      </div>
      <div class="new-article">
        <i class="iconfont icon-tianjia"></i>
        <span>新建文章</span>
      </div>
      <ul class="article-lists">
        <li
        class="article-list"

        >
          <i class="iconfont icon-tianjia"></i>
          <span class="article-name">今天</span>
          <span class="article-content">今天开始进行毕业设计系统的开发，争取在五一之前把系统做好。</span>
        </li>
      </ul>
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
            editorContent: ''
        }
    },
    methods: {
       getContent: function () {
            alert(this.editorContent)
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
      }
}
</script>

<style scoped lang="less">

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
