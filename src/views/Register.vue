<template>
  <div class="sign">
      <div class="logo">
          <a href="/">
          <img src="../assets/reslongo.png" ></a>
      </div>
      <div class="main">
        <h4 class="title">
          <div class="normal-title">
            <router-link to="login">登录</router-link>
            <b>·</b>
            <router-link to="register" class="active">注册</router-link>
          </div>
        </h4>
        
       <el-form :model="user" status-icon :rules="rules2" ref="user" class="demo-ruleForm sign-container">
        <el-form-item  prop="name">
          <el-input class="input" v-model.number="user.name" prefix-icon="iconfont icon-xingmingyonghumingnicheng" placeholder="你的昵称"></el-input>
        </el-form-item>
        <el-form-item  prop="phone">
          <el-input v-model.number="user.phone" prefix-icon="iconfont icon-shouji" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item  prop="pass">
          <el-input type="password" v-model="user.pass" prefix-icon="iconfont icon-mima" auto-complete="off" placeholder="设置密码"></el-input>
        </el-form-item>
        <el-form-item >
          <el-button type="primary" class="button" @click="registerUser()">注册</el-button>
          <p class="sign-msg">点击 “注册” 即表示您同意并愿意遵守简书</p>
        </el-form-item>
      </el-form>
      </div>
  </div>
</template>

<script>
import until from '@/js/common'
export default {
  name: "Register",  
  data() {
      var checkName = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('昵称不能为空'));
        }
        setTimeout(() => {
          if (value.length < 2){
              callback(new Error('必须大于两个字符'));
          } else {
            callback();
          }
        }, 1000);
      };
      var validatephone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else {
          if(!this.isPoneAvailable(value)){
            callback(new Error('请输入正确的手机号'))
          }
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if(value.length < 6 || value.length > 16) {
            callback(new Error('请输入6-16位的密码'))
          }
          callback();
        }
      };
      return {
        user: {
          pass: '',
          name: '',
          phone: '',
          avatar: '/static/images/avatar.jpg'
        },
        rules2: {
           name: [
            { validator: checkName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          phone: [
            { validator: validatephone, trigger: 'blur' }
          ]
        }
      };
    },
    methods: {

      // 手机正则
      isPoneAvailable: function(str) {  
        var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;  
        if (!myreg.test(str)) {  
            return false;  
        } else {  
            return true;  
        }  
      },  
      // 注册函数
      registerUser () {
        var _this = this;
        if ((this.user.name == '') || (this.phone == '') || (this.user.pass == '')) {
          this.$message({
              message: '内容不能为空',
              type: 'error'
            });
        }
        else{
          this.axios.post('/api/users/register', {
            name: this.user.name,
            phone: this.user.phone,
            password: this.user.pass,
            avatar: this.user.avatar
          })
          .then(function (response) {
            console.log(response.data.code);
            let data = response.data;
            if (data.code === 'success') {
              console.log(data.msg);
              _this.$message({
                message: data.msg,
                type: data.code
              });
              setTimeout(() => {
              _this.$router.push('/login')
              }, 2000);
            } else if(data.code === 'error') {
              console.log(data.msg);
              _this.$message({
                message: data.msg,
                type: data.code
              });
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      },

      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>

<style lang="less" scoped >

.sign {
  .button {
    background-color: #42c02e;
    border-color: #42c02e;
  }
}
</style>
