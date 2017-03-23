import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store/index'

Vue.use(VueRouter)

import router from './router.js'

window.API_URL = 'http://localhost:1488'

Vue.mixin({
	methods: {
		image_url(path) {
			return API_URL + path;
		}
	}
});

new Vue({
  el: '#app',
	store,
  render: h => h(App),
	router
});
