<template>
  <div class="article-info">
      <!-- 顶部 -->
      <Header></Header>
      <div class="post">
        <div class="article">
            <h1>测试</h1>
        </div>
      </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
    name: 'Article',
    components: {
        Header
    },
    methods: {
        test: function() {
        }
    }
}
</script>

<style>
@import '../style/article.less';

</style>
