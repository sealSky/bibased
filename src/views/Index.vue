<template>
  <div class="Index">
    <div @click="getParams">测试</div>
    <Header :user="user"></Header>
    <Content/>
   
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Content from '../components/Content.vue'




export default {

  name: 'Index',
  components: {
    Header,
    Content
  },
    data () {
      return {
        user: {}
      }
  },
  methods: {
    getParams () {
        // 取到路由带过来的参数 
        let routerParams = this.$route.params
        // 将数据放在当前组件的数据内
        this.user = routerParams.user;
        console.log(this.user.name);
        console.log(this.user.is_active);
      }
  },

   watch: {
    // 监测路由变化,只要变化了就调用获取路由参数方法将数据存储本组件即可
      '$route': 'getParams'
    }
}
</script>

<style>

</style>
