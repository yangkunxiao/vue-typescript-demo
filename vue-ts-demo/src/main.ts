import Vue from 'vue';
import App from './App.vue'
import router from './route/index'
import store from './store/index'
const m = new Vue ({
    el:'#app',
    router,
    store,
    render: h => h(App)
})

export default m