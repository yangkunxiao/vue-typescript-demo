<template>
	<div class="user">
		<button @click="increment({ value: -10 })">-</button>
		<br />
		{{ name }}------> {{ count }}
		<br />
		<button @click="increment({ value: 10 })">加</button>
	</div>
</template>

<script lang="ts">
import {
	Vue,
	Component,
	Prop,
	Watch,
	Inject,
	Provide,
} from 'vue-property-decorator'

import { State, Action, Mutation, Getter, namespace } from 'vuex-class'

//获取命名空间下的module
const ModuleState = namespace('demo', State)
const ModuleAction = namespace('demo', Action)
const ModuleMutation = namespace('demo', Mutation)

@Component
export default class User extends Vue {
	//   name: string = 'kaka ll'
	//引入state
	@ModuleState('count') count
	//引入action
	@ModuleAction increment
    //引入mutation
	@ModuleMutation('increment') mutationIncrement
    //直接引入根对象下的state
	@State name

	// @Prop()
	// propA:number = 1

	// @Prop({ default:'hello' })
	// propB:string

	// @Prop([String,Boolean])
	// propC:string|boolean

	// @Prop({ type : null })
	// propD:any

	// @Watch('child')
	// onChildChanged(val:string,oldVla:string){

	// }

	mounted() {
		console.log(this.name)
		this.increment({
			value: 1,
		}) // -> store.dispatch('demo/increment')
	}
}
</script>
