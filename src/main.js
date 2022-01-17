import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import './plugin/primeVue'
import './plugin/vue-toast'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app')
