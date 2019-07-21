<template>
  <div>
    <el-form :model="form" label-width="80rpx">
      <el-form-item label="活动名称">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
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
  data() {
    return {
      from: {
        date: ''
      }
    }
  },
  methods: {
    submit() {}
  }
}
</script>

