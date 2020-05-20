<template>
  <div class="user">
    <button @click="increment({value:-10})">-</button>
    <br>
    {{ name }}------> {{ count }}
    <br />
    <button @click="increment({value:10})">加</button>
  </div>
</template>

<script  lang="ts">
import {
  Vue,
  Component,
  Prop,
  Watch,
  Inject,
  Provide
} from 'vue-property-decorator'

import { State, Action, Mutation, Getter, namespace } from 'vuex-class'

const ModuleState = namespace('demo', State)
const ModuleAction = namespace('demo', Action)
const ModuleMutation = namespace('demo', Mutation)

@Component
export default class User extends Vue {
  //   name: string = 'kaka ll'
  @ModuleState('count') count

  @ModuleAction increment

  @ModuleMutation('increment') mutationIncrement

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
      value: 10
    }) // -> store.dispatch('demo/increment')
  }
}
</script>