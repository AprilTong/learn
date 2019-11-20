<template functional>
  <div>
    <!-- <p  :style = "{ color: injections.theme.color }">我是第二个子组件 {{ two }}</p> -->
    <p>我是第二个子组件 {{ two }}</p>
    <p>第二个子组件的 {{ $attrs }} </p>
    <!-- <attrThree v-bind="$attrs"></attrThree> -->
  </div>
</template>
<script>
import attrThree from '../components/attrThree'

export default {
  // inject: {
  //   theme: {
  //     default: () => ({})
  //   }
  // },
  props: {
    two: {
      type: String
    }
  },
  components: { attrThree },
  inheritAttrs: true,
  mounted() {
    console.log('23', this.two)
    console.log('第2个', this.$attrs)
    console.log('2', this.$listeners)
  },
  methods: {
    // sendMsg(msg) {
    //   console.log('msg:', msg)
    // }
  }
}
</script>

