export interface UserInfo {
    name:string,
    age:number,
    sex?:string
}

export interface TodoList {
    label:string
    value:string
}

export interface State {
    count:number,
    userInfo:UserInfo,
    todoList:TodoList
}

const state:State = {
    count:0,
    userInfo:{
        name:'kaka',
        age:25,
        sex:'boy'
    },
    todoList:{
        label:'明日计划',
        value:'凤凰古城'
    }
}


const mutations = {
    increment(state,payload){
        state.count += payload.value
    }
}

const actions = {
    increment({ commit },payload){
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