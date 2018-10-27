<template>
	<div>
		<xsearch></xsearch>
		<xfooter :type="2" />
	</div>
</template>

<script>
	import xsearch from '../components/xsearch.vue';
	import xfooter from '../components/xfooter.vue';
	export default {
		data() {
			return {}
		},
		components: {
			xsearch,
			xfooter
		}
	}
</script>

<style scoped>

</style>