<template>
  <div class="settings body">
      <Header></Header>
      <div class="set container">
          <div class="sets">
              <span>基础设置</span>
          </div>
          <div class="options">
              <div class="items">
              <div class="item">
                  <span class="setting-title">昵称</span>
                  <span class="set-info">
                      <input type="text" placeholder="请输入昵称" v-model="user.name">
                  </span>
              </div>
              <div class="item">
                   <span class="setting-title">更新密码</span>
                  <span class="set-info">
                      <input type="password" placeholder="请输入密码" v-model="password">
                  </span>
              </div>
              <div class="item">
                    <span class="setting-title">确认密码</span>
                  <span class="set-info">
                      <input type="password" placeholder="请输入密码" v-model="pass">
                  </span>
              </div>
              <div class="item"></div>
          </div>
          <button class="setting-save">保存</button>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import Header from '@/components/Header.vue'

export default {
    name: 'Setting',
    data() {
        return {
            password:'',
            pass: ''
        }
    },
    components: {
        Header
    },
    computed: {
        ...mapState({
        user: state => state.users.user
      })
    },
    methods: {
        setSave() {
            
        }
    },
     mounted() {
        console.log(this.user);
    },
}
</script>

<style scoped lang="less">
    .settings {
        padding-top: 59px!important;
        margin-bottom: 100px;
        
    }
    .set {
        display: flex;
        input {
            padding: 5px 10px;
            font-size: 15px;
            border: 1px solid #c8c8c8;
            border-radius: 4px;
            background-color: hsla(0,0%,71%,.1);
        }
        .setting-save {
            width: 100px;
            margin: 30px 0 60px;
            border-radius: 20px;
            border: none;
            background-color: #42c02e;
            padding: 8px 12px;
            cursor: pointer;
        }
    }
    .sets {
        flex: 3;
        text-align: center;
        padding-top: 30px;
        
        span {
            padding: 20px 30px;
            background-color: #f0f0f0;
            color: #666;
            border-radius: 10px;
        }
    }
    .options {
        flex: 7;
        min-height: 100px;

    }
    .item {
        border-bottom: 1px solid #f0f0f0;
        font-size: 15px;
        color: #969696;
        width: 100%;
        span {
            display: inline-block;
            padding: 20px 0 20px 20px;
        }
        .setting-title {
            width: 125px;
            font-size: 16px;
        }
    }
</style>
