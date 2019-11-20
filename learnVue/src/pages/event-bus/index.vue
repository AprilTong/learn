<!-- App.vue -->
<template>
  <div id="app">
    <div class="container">
      <div class="front">
        <div class="increment">
          <IncrementCount />
        </div>
        <div class="show-front">{{ fontCount }}</div>
        <div class="decrement">
          <DecreaseCount />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import IncrementCount from '../../components/incrementCount'
import DecreaseCount from '../../components/decreaseCount'
import { EventBus } from '../../event-bus'
export default {
  name: 'App',
  components: {
    IncrementCount,
    DecreaseCount
  },
  data() {
    return {
      degValue: 0,
      fontCount: 0,
      backCount: 0
    }
  },
  mounted() {
    EventBus.$on('incremented', ({ num, deg }) => {
      // 修改数据
      this.fontCount += num
      // DOM还没更新
      // $nextTick，将回调延迟到下次 DOM 更新循环之后执行。
      this.$nextTick(() => {
        // DOM已经更新
        this.backCount += num
        this.degValue += deg
      })
    })
    EventBus.$on('decreased', ({ num, deg }) => {
      this.fontCount -= num
      this.$nextTick(() => {
        this.backCount -= num
        this.degValue -= deg
      })
    })
  }
}
</script>
