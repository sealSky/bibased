<template>
 <div class="nav-bar">
      <a href="/" class="nav-logo">
      <img class="img" src="../assets/images/logo.png" >
      </a>
      <div class="container nav-main">
        <a href="home" class="home">
          首页
        </a>
        <div class="select-bar">
          <input class="select-input" type="text" placeholder="搜索" >
          <a href="javascript:;" class="btn"><i class="el-icon-search"></i> </a>
        </div>
        <!-- 登陆注册 -->
        <router-link to="/register" class="link reg">注册</router-link>
        <router-link to="/login" class="link">登录</router-link>
        <router-link to="/user" class="link">个人中心</router-link>
        <router-link to="/writer" class="link">写文章</router-link>

      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {

    }
  },
  // 静态函数
  methods: {

  }
}
</script>

<style lang="less" scoped>


  .nav-bar {
    border-bottom: 1px solid #ccc;
    margin-bottom: 20px;
    .nav-logo {
     float: left;
     left: 0;
     height: 56px;
     .img {
       display: inline-block;
       height: 100%;
     }
    }
    .nav-main {
      height: 58px;
      font-size: 14px;
      color: #333;
      box-sizing: border-box;
      padding-top:15px;
      .home {
        color: #ea6f5a;
        float: left;
        font-size: 18px;
      }
      .select-bar {
        margin-left: 50px;
        float: left;
        .select-input {
          border-radius: 30px;
          border: 1px solid #ccc;
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

