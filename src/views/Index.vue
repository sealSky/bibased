<template>
  <div class="index body">
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script>

// 引入组件
import Header from '@/components/Header.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'Index',
  components: {
    Header,
    Content
  },
    data () {
      return {
        
      }
  },
  // 静态方法
  methods: {
    
  },
  // 组件渲染
  created: function() {

  },

  // 实时计算
  computed: {
    
  }
}
</script>

<style scoped>
.index {
    padding-top: 59px!important;
    margin-bottom: 100px;
}
</style>
