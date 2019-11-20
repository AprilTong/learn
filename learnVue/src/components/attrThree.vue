<template>
  <div>
    <p>我是第二个子组件 {{ three }}</p>
    <p @click="send">第二个子组件的$attr {{ $attrs }} </p>
  </div>
</template>
<script>

export default {
  props: {
    three: {
      type: String
    },
    four: {
      type: String
    }
  },
  created() {
    console.log('第二个', this.$attrs)
    console.log('第二个', this.$listeners)
  },
  methods: {
    send() {
      this.$emit('sendMsg', '我是子组件信息')
    }
  }
}
</script>

