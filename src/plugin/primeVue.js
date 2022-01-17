import Vue from 'vue'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primevue/resources/themes/saga-blue/theme.css'

//TODO import components from primevue
import InputText from 'primevue/inputtext'
import Tag from 'primevue/tag'
import Checkbox from 'primevue/checkbox'
import ToastService from 'primevue/toastservice'
import Toast from 'primevue/toast'

//TODO use Vue.component('component-name',component)
Vue.component('p-input-text', InputText)
Vue.component('p-tag', Tag)
Vue.component('p-checkbox', Checkbox)
Vue.component('p-toast', Toast)

Vue.use(ToastService)
