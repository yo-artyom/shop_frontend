<template>
<nav class="nav navbar navbar-default">
	<ul class="nav navbar-nav" >
		<li v-for='node in tree' class='nav-item dropdown'>

			<template v-if='withoutChilds(node)'>
			<router-link :to="{ name: 'category', params: {slug: node.parent.slug} }">
					{{ node.parent.name }}
				</router-link>	
			</template>

			<template v-else>
				<a class="dropdown-toggle" href="#" data-toggle="dropdown" aria-expanded='false'>
					{{ node.parent.name }}
				</a>
				<ul class='sub-nav dropdown-menu' v-if='!withoutChilds(node)'>
				 <li v-for='child in node.childs' >
					 <router-link :to="{ name: 'category', params: {slug: child.slug} }">
					 {{ child.name }}
					</router-link>
				 </li>
				</ul>
			</template>

		</li>

	</ul>
</nav>
</template>

<script>
import axios from 'axios'
export default {
	name: 'navigation',
	data(){
		return {
			tree: []
		}
	},
	created() {
		this.getTree()
	},
	methods: {
		getTree() {
			axios.get(`${API_URL}/navigation`)
				.then( (resp) => this.tree = resp.data )
		},
		withoutChilds(node) {
			return node.childs.length == 0;
		},
		categoryPath(category) {
			return `/catalog/${category.slug}`
		}
	}
}
</script>

<style lang="scss">
</style>
