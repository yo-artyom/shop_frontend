import VueRouter from 'vue-router'
import Category from './components/Category.vue'
import Home from './components/Home.vue'

const routes = [
	{path: '/', component: Home},
	{path: '/catalog/:slug', component: Category }
]


export default new VueRouter({
	mode: 'history',
	routes
})

