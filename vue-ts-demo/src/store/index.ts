import Vue from 'vue'
import Vuex from 'vuex'
import demo from './modules/demo'
Vue.use(Vuex)

console.log(demo)

const store = new Vuex.Store({
	state: {
		name: 'linkFly',
	},
	modules: {
		demo: {
			// 带命名空间
            namespaced: true,
            ...demo
		},
	}
})

export default store
