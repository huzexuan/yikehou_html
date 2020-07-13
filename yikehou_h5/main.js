import Vue from 'vue'
import App from './App'
import pageHead from './component/pages_header.vue'
Vue.component('page_head', pageHead)
import pageFoot from './component/pages_footer.vue'
Vue.component('page_footer', pageFoot)
import index_nav from './component/index_nav.vue'
Vue.component('indexNav', index_nav)
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()