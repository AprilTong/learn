<template functional>
  <div>
    <p  :style = "{ color: injections.theme.color }">我是第二个子组件 {{ two }}</p>
    <p>第二个子组件的$attr {{ $attrs }} </p>
    <attrThree v-bind="$attrs" @sendMsg="sendMsg"></attrThree>
  </div>
</template>
<script>
import attrThree from '../components/attrThree'

export default {
  inject: {
    theme: {
      default: () => ({})
    }
  },
  props: {
    two: {
      type: String
    }
  },
  components: { attrThree },
  inheritAttrs: false,
  // created() {
  //   console.log(this.$attrs)
  //   console.log('2', this.$listeners)
  // },
  mounted() {
    console.log('inject2', this.injections)
  },
  methods: {
    sendMsg(msg) {
      console.log('msg:', msg)
    }
  }
}
</script>

