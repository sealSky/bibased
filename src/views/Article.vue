<template>
  <div class="article">
      <!-- 顶部 -->
      <Header></Header>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
    name: 'Article',
    components: {
        Header
    }
}
</script>

<style>
@import '../style/article.less';

</style>
