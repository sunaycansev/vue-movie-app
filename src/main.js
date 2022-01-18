import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import store from '@/store'
import './plugin/primeVue'
import './plugin/vue-toast'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

Vue.use(Vuelidate)

new Vue({
  render: (h) => h(App),
  router,
  store
}).$mount('#app')
