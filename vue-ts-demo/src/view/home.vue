<template>
  <div id="app">
    {{ msg }}
  </div>
</template>

<script lang="ts">
import { Vue,Component } from 'vue-property-decorator'
@Component
export default class Home extends Vue {
  //声明变量
  msg: string = 'hello home'
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