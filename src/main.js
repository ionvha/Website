import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from '@/api/index.js'
import {httpGet,httpPOst} from '@/util/tool.js'

Vue.config.productionTip = false
Vue.prototype.$axios = axios;
Vue.prototype.$httpGet = httpGet;
Vue.prototype.$httpPOst = httpPOst;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
