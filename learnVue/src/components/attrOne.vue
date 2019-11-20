<template>
  <div>
    <p :style="{ color: theme.color }">我是第一个子组件 {{ one }}</p>
    <p @click="changeParent">第一个子组件的$attr {{ $attrs }}</p>
    <attrThree v-bind="$attrs" v-on="$listeners" @sendMsg="sendMsg"></attrThree>
  </div>
</template>
<script>
import attrTwo from '../components/attrTwo'
import attrThree from '../components/attrThree'

export default {
  props: {
    one: {
      type: String
    }
  },
  // inject: ['theme'],
  inject: {
    theme: {
      //函数式组件取值不一样
      default: () => ({})
    }
  },
  components: { attrTwo, attrThree },
  inheritAttrs: false,
  created() {
    console.log('第一个', this.$attrs)
    console.log('第一个', this.$listeners)
    console.log('第一个', this)
  },
  updated() {
    console.log('updated', this.theme)
  },
  methods: {
    sendMsg(val) {
      console.log('子传第一个父元素', val)
    },
    changeParent() {
      this.theme.color = 'yellow'
      this.$emit('changeParent', '#f5f5f5')
    }
  }
}
</script>
