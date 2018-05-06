<template>
 <div class="nav-bar navbar-fixed-top">
      <a href="/" class="nav-logo">
      <img class="img" src="../assets/images/logo.png" >
      </a>
      <div class="container nav-main">
        <a href="javascript:;" @click="handleSelect()" class="home">
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
        <router-link to="/register" v-if="!is_active" class="link reg">注册</router-link>
        <router-link to="/login" v-if="!is_active" class="link">登录</router-link>
        <a href="javascript:;" class="link" v-if="is_active">{{user.name}}</a>
        <div class="user" v-if="is_active">
          <el-menu 
          :default-active="activeIndex" 
          class="el-menu-demo" 
          mode="horizontal"
          background-color="#fefefe" 
          @select="handleSelect">
            <el-submenu index="1">
              <template slot="title">
                <a href="javascript:;" class="avatar">
                  <img :src="user.avatar" alt="缺失">
                </a>
              </template>
              <el-menu-item index="1-1" class="link-icon" >
                <i class="iconfont icon-yonghu-tianchong"></i>
                <span @click="personal(user.id)">我的主页</span>
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
import { mapState } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
      is_active: false,
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
   // 实时计算
  computed: {
    ...mapState({
        user: state => state.users.user,
        defaultUser: state => state.user.defaultUser,
      }),
  },

  // 挂载
  mounted() {
    if(window.localStorage.getItem('isActive')) {
      this.is_active = true;
    } else {
      this.is_active = false;
    }
  },
  // 静态函数
  methods: {
    // 个人中心
    personal(id) {
      if (window.localStorage.getItem('user')) {
        this.$router.push({
          path: '/user/' + id
        })
      } else {
        alert('请登录后在操作');
      }
    },
     handleSelect(key, keyPath) {
        console.log(window.localStorage.getItem('isActive'));
      },
    cancle: function() {
      let _this = this;
      this.$confirm('此操作将注销登录, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          window.localStorage.removeItem('user');
          window.localStorage.removeItem('isActive');
          _this.is_active = false;
          _this.$store.commit('changeIsActive',false);
          _this.$store.commit('getLoginUser',{});
          _this.$message({
            type: 'success',
            message: '退出成功!'
          });
        }).catch(() => {
          _this.$message({
            type: 'info',
            message: '已取消退出'
          });          
        });
    }
  },
 

}
</script>

<style lang="less" scoped>
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

