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
export default {
  
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
          phone: ''
        },
        rules2: {
           name: [
            { validator: checkName, trigger: 'blur' }
          ],
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          phone: [

          ]
        }
      };
    },
    methods: {
      // 注册函数
      registerUser () {
        let name = this.user.name;
        let pwd = this.user.pass;
        

        
      this.axios({
        method: 'post',
        url: '/api/user/addUser',
        data: {
          username: name,
          password: pwd
        }
        
      })
      .then((response) => {
        console.log('注册成功');
        }).cath((error) => {
          console.log(error);
        })
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
    },
  name: "Register"
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
