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
            state:demo.state,
            mutations:demo.mutations,
            actions:demo.actions,
            getters:demo.getters,
			// state: {
			// 	count: 0,
			// },
			// mutations: {
			// 	increment(state, n?: number) {
			// 		if (n != null) state.count = n
			// 		else state.count++
			// 	},
			// },
			// actions: {
			// 	increment({ commit }) {
			// 		commit('increment')
			// 	},
			// },
		},
	}
})

export default store
