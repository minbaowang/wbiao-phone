import Vue from 'vue'
import Wbiao from './Wbiao.vue'
import "weui";
import $ from 'jquery'
window.$ = $;
//引进vue-router
import VueRouter from "vue-router";
//使用vuerouter
Vue.use(VueRouter);

Vue.config.productionTip = false
//引入状态管理
import Vuex from 'vuex'
Vue.use(Vuex)


//引进路由页面
import Wanbiao from "./containers/wanbiao.vue"
import Contact from "./containers/contact.vue"
import Find from "./containers/find.vue"
import Shopcar from "./containers/shopcar.vue"
import Person from "./containers/person.vue"
import ShopDetail from "./containers/shopDetail.vue"
import Zhuce from "./containers/zhuce.vue"
import Login from "./containers/login.vue"
import Detail from "./containers/detail.vue"
import Hsearch from "./components/Hsearch.vue"
import Picture from "./containers/pictureDetail.vue"
//创建路由
const routes=[{
	path:"/contact",
	component:Contact
},
{
	path:"/",
	component:Wanbiao
},
{
	path:"/shopDetail",
	component:ShopDetail
},
{
	path:"/wanbiao",
	component:Wanbiao
},{
	path:"/find",
	component:Find
},{
	path:"/shopcar",
	component:Shopcar
},{
	path:"/person",
	component:Person
},{
	path:"/zhuce",
	component:Zhuce
},{
	path:"/zhuce",
	component:Zhuce
},{
	path:"/login",
	component:Login
},{
	path:"/detail",
	component:Detail
},{
	path:"/search",
	component:Hsearch
},{
	path:"/picture",
	component:Picture
}]

const router=new VueRouter({
	routes
})
new Vue({
//	引进路由
	router,
  render: h => h(Wbiao)
}).$mount('#app')