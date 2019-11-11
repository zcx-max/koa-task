// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import store from './store'

Vue.config.productionTip = false

//配置element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


//swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)

//axios
import axios from 'axios';
Vue.prototype.axios = axios;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    // store,
    template: '<App/>'
})