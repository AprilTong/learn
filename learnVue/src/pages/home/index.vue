<template id="a">
  <div>
    <h3>
      A组件：{{name}}
    </h3>
    <button @ click="send">
      将数据发送给C组件
    </button>
  </div>
</template>
<template id="b">
  <div>
    <h3>
      B组件：{{age}}
    </h3>
    <button @ click="send">
      将数组发送给C组件
    </button>
  </div>
</template>
<template id="c">
  <div>
    <h3>
      C组件：{{name}}，{{age}}
    </h3>
  </div>
</template>
<script>
// import Vue from "vue"
// import Child from '../../components/child'
// import myA from '../../components/my-a'
// import myB from '../../components/my-b'
// import myC from '../../components/my-c'

// export default {
//   data() {
//     return {
//       message: '我是测试',
//       list: ['内容一', '内容二', '内容三']
//     }
//   },
//   components: {
//     Child
//   },
//   methods: {
//     revieveMsg(msg) {
//       alert(msg)
//     }
//   }
// }
// var Event = new Vue()
var A = {
  template: '#a',
  data() {
    return {
      name: 'tongzhirong'
    }
  },
  methods: {
    send() {
      Event.$emit("data-a", this.name)
    }
  }
}
var B = {
  template: '#b',
  data() {
    return {
      age: '23'
    }
  },
  methods: {
    send() {
      Event.$emit("data-b", this.age)
    }
  }
}
var C = {
  template: '#c',
  data() {
    return {
      name: '',
      age: ''
    }
  },
  mounted() {
    Event.$on("data-a", name => {
      this.name = name
    })
    Event.$on("data-b", age => {
      this.name = age
    })
  }
}
// var vm = new Vue({
//   el: '#home',
//   components: {
//     'my-a': A,
//     'my-b': B,
//     'my-C': C
//   }
// })
</script>

