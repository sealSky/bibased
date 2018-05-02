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
        <router-link to="/writer" target="_blank" class="link write-btn">
          <i class="iconfont icon-xiezi"></i>
          写文章
        </router-link>
        <router-link to="/register" v-if="isActive" class="link reg">注册</router-link>
        <router-link to="/login" v-if="isActive" class="link">登录</router-link>
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
              <el-menu-item index="1-1" class="link-icon" >
                <i class="iconfont icon-yonghu-tianchong"></i>
                <router-link to="/user" tag="span">我的主页</router-link>
              </el-menu-item>
              <el-menu-item index="1-2" class="link-icon" >
                <i class="iconfont icon-msnui-love"></i>
                <router-link to="/user" tag="span">喜欢的文章</router-link>
              </el-menu-item>
              <el-menu-item index="1-3" class="link-icon" >
                <i class="iconfont icon-shezhi-tianchong"></i>
                <router-link to="/user" tag="span">设置</router-link>
              </el-menu-item>
              <el-menu-item 
              index="1-4" 
              class="link-icon"
              @click="cancle()"
              >
                <i class="iconfont icon-tuichu"></i>
                <span>退出</span>
              </el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
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
        console.log('1');
      },
    cancle: function() {
      this.$confirm('此操作将注销登录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$store.commit('getUser', this.$store.state.defaultUser);
          window.localStorage.removeItem('user');
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
          this.$router('/')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消退出'
          });          
        });
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
      float: right;
      height: 100%;
      .avatar {
        position: relative;
        width: 40px;
        height: 40px;
        vertical-align: baseline;
        display: inline-block;
      }
    }
    
    .nav-main {
      height: 58px;
      font-size: 14px;
      color: #333;
      box-sizing: border-box;
      .home {
        margin-top: 15px;
        color: #ea6f5a;
        float: left;
        font-size: 18px;
      }
      .select-bar {
        margin-left: 50px;
        float: left;
        margin-top: 15px;
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
      margin-top: 15px;
    }
    .write-btn {
      float: right;
      text-align: center;
      width: 100px;
      height: 40px;
      line-height: 40px;
      margin: 8px 15px 0;
      border-radius: 20px;
      font-size: 15px;
      color: #fff;
      background-color: #ea6f5a;
      i {
        font-size: 18px;
      }
    }
    .reg {
      border: 1px solid #ea6f5a;
      padding-left: 10px;
      padding-right: 10px;
      border-radius: 15px;
    }
    .reg:hover {
     color: #ea6f5a;
    }
  }

  .link-icon {
    i {
      color: #ea6f5a;
      margin-right: 15px;
      font-size: 18px;
    }
    span {
      font-weight: 400;
      color: #333;
    }
  }
</style>

