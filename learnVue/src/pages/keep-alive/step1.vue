<template>
  <div>
    <el-form :model="form" label-width="80rpx">
      <el-form-item label="活动名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">下一步</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import ElementUI from 'element-ui'
import Vue from 'vue'
export default {
  // model: {
  //   prop: 'active',
  //   event: 'change'
  // },
  props: {
    active: ''
  },
  data() {
    return {
      form: {}
    }
  },
  methods: {
    submit() {
      // this.$emit('update:active', 2)
      // this.$emit('change', 2)
      this.$emit('input', 2)
    },
  }
}
</script>

