<template>
	<div>
		<cheader></cheader>
		<ccontent></ccontent>
		<cfooter></cfooter>
	</div>
</template>

<script>
	import cfooter from '../carContainers/Cfooter.vue'
	import cheader from '../carContainers/Cheader'
	import ccontent from '../carContainers/Ccontent'
	export default {
		data() {
			return {}
		},
		components: {
			cfooter,
			cheader,
			ccontent
		}
	}
</script>

<style>

</style>