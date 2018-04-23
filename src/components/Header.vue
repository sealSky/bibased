<template>
 <div class="nav-bar navbar-fixed-top">
      <a href="/" class="nav-logo">
      <img class="img" src="../assets/images/logo.png" >
      </a>
      <div class="container nav-main">
        <a href="home" class="home">
          首页
        </a>
        <div class="select-bar">
          <input class="select-input" type="text" placeholder="搜索" >
          <a href="javascript:;" class="btn"><i class="iconfont icon-sousuokuang"></i></a>
        </div>
        <!-- 登陆注册 -->
        <router-link to="/register" v-if="isActive" class="link reg">注册</router-link>
        <router-link to="/login" v-if="isActive" class="link">登录</router-link>
        <router-link to="/user" v-if="isActive" class="link">个人中心</router-link>
        <div class="user" v-if="!isActive">
          <el-menu 
          :default-active="activeIndex" 
          class="el-menu-demo" 
          mode="horizontal"
          background-color="#fefefe" 
          @select="handleSelect">
            <el-submenu index="1">
              <template slot="title">
                <a href="javascript:;" class="avatar">
                  <img src="../assets/images/default.jpg" alt="缺失">
                </a>
              </template>
              <el-menu-item index="1-1">我的主页</el-menu-item>
              <el-menu-item index="1-2">收藏的文章</el-menu-item>
              <el-menu-item index="2-3">喜欢的文章</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
        <span  class="link" @click="test()">{{isActive}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      is_active: false,
      imgSrc: '../assets/imgages/bg/default.jpg',
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  // 静态函数
  methods: {
     handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    test: function() {
      console.log(this.$store.state.user.is_active);
    }
  },
  // 实时计算
  computed: {
    realUser() {
      return this.$store.state.user;
    },
    isActive() {
      return !(this.$store.state.user.is_active || this.is_active)
    }
}

}
</script>

<style lang="less" scoped>

  .nav-bar {
    overflow: hidden;
    border-bottom: 1px solid #eee;
    .nav-logo {
     float: left;
     left: 0;
     height: 56px;
     .img {
       display: inline-block;
       height: 100%;
     }
    }
    .user {
      float: left;
      margin-left: 100px;
      height: 100%;
      .avatar {
        position: relative;
        width: 40px;
        height: 40px;
        vertical-align: baseline;
        display: inline-block;
      }
    }
    .user:hover {
        background-color: red;

    }
    
    .nav-main {
      height: 58px;
      font-size: 14px;
      color: #333;
      box-sizing: border-box;
      .home {
        padding-top: 15px;
        color: #ea6f5a;
        float: left;
        font-size: 18px;
      }
      .select-bar {
        margin-left: 50px;
        float: left;
        padding-top: 15px;
        .select-input {
          border-radius: 30px;
          border: 1px solid #ccc;
          background-color: #eee;
          height: 30px;
          min-width: 200px;
          padding-left: 15px;
        }
        .btn {
          height: 30px;
          padding: 6px 15px;
          background-color: #317ef3;
          border-radius: 5px;
          color: #fff;
        }
      }
    }
    .link {
      float: right;
      height: 28px;
      margin: 0 10px;
    }
    .reg {
      border: 1px solid #ea6f5a;
      padding: 0 10px;
      border-radius: 15px;
    }
    .reg:hover {
     color: #ea6f5a;
    }
  }
</style>

