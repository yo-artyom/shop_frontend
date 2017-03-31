import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import VueRouter from 'vue-router'
import {sync} from 'vuex-router-sync'
import {API_URL} from './api/routes'

Vue.use(VueRouter)
sync(store, router)

Vue.mixin({
	methods: {
		image_url(path) {
			return API_URL + path;
		}
	}
});

const app = new Vue({
	store,
  render: h => h(App),
	router
});

export { app, router, store }
