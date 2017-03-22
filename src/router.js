import VueRouter from 'vue-router'
import Category from './components/Category.vue'
import Product from './components/Product.vue'
import Home from './components/Home.vue'

const routes = [
	{path: '/', component: Home},
	{path: '/catalog/:slug', component: Category, name: 'category'},
	{path: '/catalog/:slug/product/:id', component: Product, name: 'product'}
]


export default new VueRouter({
	mode: 'history',
	routes
})

