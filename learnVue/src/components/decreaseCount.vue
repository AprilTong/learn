<!-- DecreaseCount.vue -->
<template>
  <button @click="decrease()">-</button>
</template>

<script>
import { EventBus } from '../event-bus.js'
export default {
  name: 'DecreaseCount',
  data() {
    return {
      num: 1,
      deg: 180
    }
  },
  methods: {
    decrease() {
      EventBus.$emit('decreased', {
        num: this.num,
        deg: this.deg
      })
    }
  }
}
</script>
