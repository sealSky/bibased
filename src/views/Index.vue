<template>
  <div class="Index">
    <Header></Header>
    <Content></Content>
   
  </div>
</template>

<script>
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
        name: '',
        msg: '你爱好'
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

<style>

</style>
