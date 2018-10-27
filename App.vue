<template>
	<div id="app">
		<xheader></xheader>
		<xsearch></xsearch>
		<xbanner></xbanner>
		<xpanel></xpanel>
		<router-view></router-view>
		<xfooter />
	</div>
</template>

<script>
	import xfooter from './components/xfooter.vue';
	import xheader from './components/xheader.vue';
	import xsearch from './components/xsearch.vue';
	import xbanner from './components/xbanner.vue';
	import xpanel  from './components/xpanel.vue';
	import xgallery from './components/xgallery.vue';
//	var xheader = require('./components/xheader.vue');
	export default {
		data() {
			return {}
		},
		components: {
			xfooter,
			xheader,
			xsearch,
			xbanner,
			xpanel,
			xgallery
		}
	}
</script>

<style>
	.name {
		color: red
	}
	a, blockquote, body, button, code, dd, div, dl, dt, em, fieldset, form, h1, h2, h3, h4, h5, h6, html, iframe, img, input, label, li, object, ol, p, q, small, span, strong, table, tbody, td, th, tr, ul {
    margin: 0;
    padding: 0;
    border: 0;
}
</style>
