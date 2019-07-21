import 'babel-polyfill'

//vue相关
import Vue from 'vue'
import router from './router/index'
import store from './store/index'

//element-ui 引入
import ElementUI from 'element-ui'
Vue.use(ElementUI)
// import 'element-ui/lib/theme-chalk/index.css';
import './resources/css/element-variables.scss'

// 复制到粘帖板功能
import VueClipboards from 'vue-clipboard2'

Vue.use(VueClipboards)

var app = new Vue({
  el: '#app',
  store,
  router
})
