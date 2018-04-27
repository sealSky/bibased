<template>
  <div class="writing">
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
</template>

<script>
import E from 'wangeditor'

export default {
    name: 'writing',
    data () {
        return {
            title: this.currentTime(),
            body: '',
            articles: [],
            editorContent: ''
        }
    },
    methods: {
        releaseArticle() {
        let _this = this;
        _this.axios.post('api/writes/releaseArticle',{
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
    },

    mounted() {

    }

}
</script>

<style lang="less" scoped>
.writing {
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
