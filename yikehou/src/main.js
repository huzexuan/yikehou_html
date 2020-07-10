import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import 'wowjs/css/libs/animate.css';

import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper);
import 'swiper/css/swiper.css';
import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {
    ak: 'cIUKusewZaKmqALQv6lKtIcY'
})
Vue.config.productionTip = false

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
router.afterEach((to, from, next) => {
    window,
    scrollTo(0, 0)
})
router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})