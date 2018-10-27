<template>
	<div>
		<cheader></cheader>
		<dcontent></dcontent>
		<dfooter></dfooter>
	</div>
</template>

<script>
	import dfooter from '../carContainers/Dfooter.vue'
	import cheader from '../carContainers/Cheader.vue'
	import dcontent from '../carContainers/Dcontent.vue'
	export default {
		data() {
			return {}
		},
		components: {
			dfooter,
			cheader,
			dcontent
		}
	}
</script>

<style>

</style>