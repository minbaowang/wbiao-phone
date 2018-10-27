<template>
	<div>
		<detail></detail>
		<xfooter :type="3" />
	</div>
</template>

<script>
	import detail from './pictureDetail.vue';
	import xfooter from '../components/xfooter.vue';
	export default {
		data() {
			return {}
		},
		components: {
			detail,
			xfooter
		}
	}
</script>

<style>

</style>