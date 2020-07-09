import Vue from 'vue'
import App from './App'
import pageHead from './component/pages_header.vue'
Vue.component('page_head',pageHead)
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
