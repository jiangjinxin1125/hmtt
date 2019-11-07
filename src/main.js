import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import '@/style/index.less'
import router from '@/router'

import axios from '@/api'

// import myBread from '@/components/my-bread'
// Vue.component('my-bread', myBread)
import plugin from '@/components'

Vue.use(plugin)
Vue.use(ElementUI)

Vue.config.productionTip = false

Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
