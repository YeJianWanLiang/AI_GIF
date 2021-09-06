import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router'
import router from './router'
import './assets/styles/normalize.css'
import './assets/styles/base.css'

// vuex 还没装
// import store from './store'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
  router,
  // store,
  render: h => h(App),
  comments: {App},
  template: '<App>',
}).$mount('#app')
