import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import echarts from 'echarts'
// import 'echarts/lib/chart/line'
// import jquery from 'jquery'

Vue.config.productionTip = false
Vue.use(ElementUI)
// Vue.component('chart',echarts)
// Vue.prototype.$echarts = echarts

// Vue.prototype.$=jquery


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
