<template>
	<div id="app">
		{{ msg }}
        <ul>
            <li>
                {{ todoList.label }}
            </li>
            <li>
                {{ todoList.value }}
            </li>
        </ul>
        <p>出行人数</p>
        <ul>
            <li>{{ userInfo.name }}</li>
            <li>{{ userInfo.age }}</li>
        </ul>
	</div>
</template>

<script lang="ts">
import { State, Action, Mutation, Getter,namespace } from 'vuex-class'
import { Vue, Component, Watch } from 'vue-property-decorator'

const ModuleState = namespace('demo',State)
const ModuleAction = namespace('demo',Action)
const ModuleMutation = namespace('demo',Mutation)

@Component
export default class Home extends Vue {
    @ModuleState todoList

    @ModuleState userInfo

	//声明变量
	msg: string = '出行计划'
	//声明方法
	setMsg(value: string): void {
		this.msg = value
	}
	//算属性
	get computedMsg() {
		return this.msg + '------🍌'
	}
	beforeCreate() {
		console.log('beforecreate')
	}
	created() {
		console.log('created')
	}
	beforeMount() {
		console.log('beforemounted')
	}
	mounted() {
		console.log('mounted')
	}
}
</script>
