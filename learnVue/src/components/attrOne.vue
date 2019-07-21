<template>
  <div>
    <p>我是第一个子组件 {{ one }}</p>
    <p>第一个子组件的$attr {{ $attrs }} </p>
    <attrTwo v-bind="$attrs" v-on="$listeners"></attrTwo>
  </div>
</template>
<script>
import attrTwo from '../components/attrTwo'

export default {
  props: {
    one: {
      type: String
    }
  },
  components: { attrTwo },
  inheritAttrs: false,
  created() {
    // console.log(this.$attrs)
    // console.log('1', this.$listeners)
    // console.log('inject', this.name)
  },
  mounted() {
  }
}
</script>

