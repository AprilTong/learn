<template>
  <div>
    <h3 @click="test" :style="{color: color}">我是父组件</h3>
    <attrOne
      :one="one"
      :two="two"
      :three="three"
      :four="four"
      title="父组件"
      v-on="$listeners"
      @sendMsg="sendMsg"
      @changeParent="changeParent"
    ></attrOne>
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
      color: 'blue',
      obj: {
        color: 'yellow'
      }
    }
  },
  components: { attrOne },
  // provide() {
  //   return {
  //     theme: {
  //       color: 'blue'
  //     }
  //   }
  // },
  mounted() {
    console.log('父组件', this)
  },
  provide() {
    // 让一个对象可响应。Vue 内部会用它来处理 data 函数返回的对象,返回的对象可以直接用于渲染函数和计算属性内，并且会在发生改变时触发相应的更新。也可以作为最小化的跨组件状态存储器.
    this.theme = Vue.observable({
      color: 'blue'
    })
    return {
      theme: this.theme
    }
  },
  methods: {
    test(color) {
      this.color = this.color === 'blue' ? 'red' : 'blue'
      this.theme.color = this.theme.color === 'blue' ? 'red' : 'blue'
    },
    sendMsg(val) {
      console.log(val)
    },
    changeParent(val) {
      this.color = val
    }
  }
}
</script>
