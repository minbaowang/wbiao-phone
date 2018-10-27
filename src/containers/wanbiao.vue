<template>
	<div class="all">
		<xheader></xheader>
		<xbanner></xbanner>
		<xcontent></xcontent>
		<xfooter :type="1" />
	</div>
</template>

<script>
	import xheader from '../components/Xheader.vue';
	import xbanner from '../components/Xbanner.vue';
	import xcontent from '../components/Xcontent.vue';
	import xfooter from '../components/xfooter.vue';
	export default {
		data(){
			return{}
		},
		components:{
			xheader,
			xbanner,
			xcontent,
			xfooter
		}
	}
</script>

<style scoped>
	.all{
		background:#fff;
	}
</style>