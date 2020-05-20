const state = {
    count:0
}

type typeValue = {
    value:number
}

const mutations = {
    increment(state,payload:typeValue){
        state.count += payload.value
    }
}

const actions = {
    increment({ commit },payload:typeValue){
        commit('increment',payload)
    }
}

const getters = {
    getCount(state):number{
        return state.count
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}