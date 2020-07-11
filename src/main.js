import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from "element-ui"




Vue.use(ElementUI)

Vue.config.productionTip = false
//定义事件总线
Vue.prototype.$bus=new Vue()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
