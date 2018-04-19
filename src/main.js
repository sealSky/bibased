// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import App from './App'
import router from './router'
import Vuex from 'vuex'

import 'element-ui/lib/theme-chalk/index.css';
import './style/common/font_njithd8txsqncdi/iconfont.css'

// 自己写的样式
import './style/base.less';
import './style/common/sign.less';
import './style/common/list.less';




Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Vuex)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
