import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
// import uViewUltra from '@/uni_modules/uview-ultra' // 👈 新增：引入 uView Ultra

export function createApp() {
  const app = createSSRApp(App)
  // app.use(uViewUltra) // 👈 新增：注册插件
  return {
    app
  }
}
// #endif