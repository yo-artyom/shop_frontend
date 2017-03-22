import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

Vue.use(VueRouter)

import router from './router.js'

window.API_URL = 'http://localhost:1488'

new Vue({
  el: '#app',
  render: h => h(App),
	router
})
