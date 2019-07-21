<template>
  <div>
    <el-form :model="form" label-width="80rpx">
      <el-form-item label="单项选择">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="pre">上一步</el-button>
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
  data() {
    return {
      form: {}
    }
  },
  methods: {
    submit() {
      // this.$emit('update:active', 3)
      // this.$emit('change', 3)
      this.$emit('input', 3)
    },
    pre() {
      // this.$emit('update:active', 1)
      // this.$emit('change', 1)
      this.$emit('input', 1)
    }
  }
}
</script>

