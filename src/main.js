import Vue from 'vue'
import App from './App'
import store from './store'
import filters from './utils/filters'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.use(filters)
const app = new Vue({...App, store})
app.$mount('#app')
