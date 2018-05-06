<template>
  <div class="sign">
      <div class="logo">
          <a href="/">
          <img src="/static/images/reslongo.png" ></a>
      </div>
      <div class="main">
        <h4 class="title">
          <div class="normal-title">
            <router-link to="login" class="active">登录</router-link>
            <b>·</b>
            <router-link to="register" >注册</router-link>
          </div>
        </h4>
        
       <el-form :model="user" status-icon :rules="rules2" ref="user" class="demo-ruleForm sign-container">
        <el-form-item  prop="name">
          <el-input v-model="user.name" prefix-icon="iconfont icon-xingmingyonghumingnicheng" placeholder="你的昵称"></el-input>
        </el-form-item>
        <el-form-item  prop="pass">
          <el-input type="password" v-model="user.pass" prefix-icon="iconfont icon-mima" auto-complete="off" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary"  @click="submitForm('user')">登录</el-button>
          <p class="sign-msg">点击 “登录” 即表示您同意并愿意遵守简书</p>
        </el-form-item>
      </el-form>

      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: "Login",  
  data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('昵称不能为空'));
        }
        setTimeout(() => {
          if (value.length < 2){
              callback(new Error('请输入正确的昵称'));
          } else {
            callback();
          }
        }, 500);
      };
      var validatePass = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('请输入密码'));
        } else {
          if(value.length < 6 || value.length > 16) {
            callback(new Error('请输入6-16位的密码'))
          }
          callback();
        }
      };
      return {
        rules2: {
           name: [
            { validator: checkName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      };
    },
    computed: {
      // Getting Vuex State from store/modules/group
      ...mapState({
        user: state => state.users.user
      })
    },
    // 监听属性
    watch: {

    },
    methods: {
      // 对象拷贝方法
      copyObject(obj1) {
        let obj2 = {};
        for(let key in obj1){
          obj2[key] = obj1[key];
        }
        return obj2;
      },
      submitForm(formName) {
        let _this = this;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('输入格式正确');
            // 输入格式正确开始请求服务器验证
            this.axios.post('/api/users/login', {
              name: this.user.name,
              password: this.user.pass
            })
            .then(function (response) {
              let data = response.data;
              if(data.code === 'success') {
                let user = data.user;
                _this.$message({
                  message: data.msg,
                  type: data.code
                });
                window.localStorage.setItem('user',JSON.stringify(user));
                window.localStorage.setItem('isActive', true);
                 _this.$store.commit('getLoginUser', user);
                _this.$store.commit('changeIsActive', true);
                // console.log(window.localStorage.getItem('isActive'));
                
                //登录成功后跳转到首页
                setTimeout(() => {
                  _this.$router.push({
                    name: 'Index',
                    params: {
                      user
                    }
                  })
                },1000)
                
              } else if (data.code === 'error') {
                  console.log('登录失败');
                  _this.$message({
                    message: data.msg,
                    type: data.code
                  })
              } 
              else { //返回的不是这两种状态
                console.log('发送未知的错误');
              }
            })

          } else {
            console.log('错误的提交');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
};
</script>

<style lang="less" scoped>


</style>
