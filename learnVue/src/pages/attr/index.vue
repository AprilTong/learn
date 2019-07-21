<template>
  <div>
    <h3 @click="() => test()">我是父组件</h3>
    <attrOne :one="one" :two="two" :three="three" :four="four" title="父组件" v-on="$listeners"></attrOne>
  </div>
</template>
<script>
import attrOne from '../../components/attrOne'
import Vue from 'vue'
export default {
  data() {
    return {
      one: 'html',
      two: 'css',
      three: 'javaScript',
      four: 'vue',
      color: 'blue'
    }
  },
  components: { attrOne },
  provide() {
    return {
      theme: this
    }
  },
  // provide() {
  //   this.theme = Vue.observable({
  //     color: 'blue'
  //   })
  //   return {
  //     theme: this.theme
  //   }
  // },
  methods: {
    test(color) {
      if (color) {
        this.color = this.color
      }
      this.color = this.color === 'blue' ? 'red' : 'blue'
    }
  }
}
</script>

