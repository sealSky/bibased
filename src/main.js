// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App'
import router from './router'
import axios from 'axios'

import store from './store'
// import editor from '@/js/editor.js'

import 'element-ui/lib/theme-chalk/index.css';
import '@/style/common/font_icon/iconfont.css'

// 自己写的样式
import './style/base.less';
import './style/header.less';
import './style/common/sign.less';
import './style/common/list.less';
import './style/common/aside.less';
import './style/common/writer.less';



Vue.config.productionTip = false
Vue.use(ElementUI)


Vue.prototype.axios = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, //使用store
  components: { App },
  template: '<App/>'
})
