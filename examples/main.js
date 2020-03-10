import Vue from 'vue'
import App from './App.vue'

import VUiButton from './../packages/index'
// 注册组件库
Vue.use(VUiButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
