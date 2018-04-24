<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      users: {
      answers_count: 0,
      article_count: 0,
      avatar: '"../assets/reslongo.png"',
      comments_count: 0,
      created_at: null,
      favorites_count: 0,
      followers_count: 0,
      followings_count: 0,
      id: 0,
      is_active: false,
      likes_count: 0,
      name: '',
      password: '',
      phone: '',
      resume: null
      }
    }
  },
   methods: {
     
  },
  created: function() {
    let user = JSON.parse(window.sessionStorage.getItem('user'));
    if(user) {
      this.$store.commit( 'getUser', user );
    }
  },
  // 计算属性
  computed: {
    
  }
}
</script>

<style>

</style>
