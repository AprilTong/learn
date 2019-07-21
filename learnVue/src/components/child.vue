<template>
  <div class="ul">
    <ul>
      <li v-for="(item, index) in list" @click="clickOne(item)">{{item}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  methods: {
    clickOne(item) {
      this.$emit('transMit', item)
    }
  }
}
</script>
<style lang="less" scoped>
.ul{
  display: flex;
  list-style: none;
}
</style>


