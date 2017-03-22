<template>
<div class="breadcrumbs">
	<div class="breadcrumb" v-for='breadcrumb in breadcrumbs'>
		<router-link :to="breadcrumb.path">{{ breadcrumb.name }}</router-link>
	</div>
</div>
</template>

<script>
export default {
	name: 'breadcrumbs',
	props: ['breadcrumbs'],
	data(){
		return { }
	}
}
</script>
<style lang="scss">
.breadcrumbs {
	padding: 18px 50px 13px;
	border-bottom: 3px solid #fccfcf;
	border-top: 2px solid #D9D9D9;
	background: #f5f5f5;
	font-weight: 700;
	line-height: 1.5;
	color: #666;
	.breadcrumb {
		display: inline-block;
		margin-bottom: 0;
		&:after {
			display: inline-block;
			vertical-align: middle;
			content: '/\00a0';
			margin: 0 14px 0;
			color: #d5d5d5;
		}
		&:last-child:after{
			content: '';
		}
	}
}
</style>
