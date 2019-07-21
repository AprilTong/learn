<template>
  <div>
    <p>我是第三个子组件 {{ three }}</p>
    <p @click="send">第三个子组件的$attr {{ $attrs }} </p>
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
  methods: {
    send() {
      this.$emit('sendMsg', '我是子组件信息')
    }
  }
}
</script>

