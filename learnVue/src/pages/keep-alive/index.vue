<template>
  <div>
    <el-steps :active="active" align-center>
      <el-step title="步骤 1"></el-step>
      <el-step title="步骤 2"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>
    <keep-alive>
      <!-- <component :is="'step'+active" :active.sync="active" :isadd.sync='isadd'></component> -->
      <component :is="'step'+active" v-model="active"></component>
    </keep-alive>
  </div>
</template>
<script>
import ElementUI from 'element-ui'
import Vue from 'vue'
import step1 from './step1.vue'
import step2 from './step2.vue'
import step3 from './step3.vue'

Vue.use(ElementUI)
export default {
  data() {
    return {
      active: 1,
      isadd: 1,
    }
  },
  components: {
    step1,
    step2,
    step3
  }
}
</script>
<style  scoped lang="less">
/deep/ .el-steps {
  display: flex;
}
</style>


