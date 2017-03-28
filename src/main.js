import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store/index'

Vue.use(VueRouter)

import router from './router.js'
import {API_URL} from './api/routes'

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
