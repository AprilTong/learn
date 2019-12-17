class myVue {
  constructor(options) {
    this.options = options
    // 根元素
    this.$el = document.querySelector(options.el)
    this.$data = options.data
    // 保存指令
    this._directive = {}
    // 数据劫持
    this._observe(this.$data)
    // 解析模版指令
    this._compile(this.$el)
  }
  _observe(data) {
    let val
    for (let key in data) {
      if (data.hasOwnProperty(key)) {
        this._directive[key] = []
      }
      val = data[key]
      if (typeof val === 'object') {
        this._observe(val)
      }
      let _dir = this._directive[key]
      Object.defineProperty(this.$data, key, {
        enumerable: true,
        configurable: true,
        get: function() {
          return val
        },
        set: function(newVal) {
          if (newVal !== val) {
            val = newVal
            _dir.forEach(function(item) {
              item._update()
            })
          }
        }
      })
    }
  }
  _compile(el) {
    let nodes = el.children
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].children.length) {
        this._compile(nodes[i])
      }
      // 如果有v-text指令，监控node的值并更新
      if (nodes[i].hasAttribute('v-text')) {
        let attrValue = nodes[i].getAttribute('v-text')
        //将指令对应的执行方法放入指令集
        this._directive[attrValue].push(
          new Watcher('text', nodes[i], this, attrValue, 'innerHTML')
        )
      }
      // 如果有v-model指令
      if (nodes[i].hasAttribute('v-model') && nodes[i].tagName === 'INPUT') {
        let _this = this
        let attrValue = nodes[i].getAttribute('v-model')
        nodes[i].addEventListener(
          'input',
          (function() {
            _this._directive[attrValue].push(
              new Watcher('input', nodes[i], _this, attrValue, 'value')
            )
            return function() {
              //后面每次都会更新
              _this.$data[attrValue] = nodes[i].value
            }
          })()
        )
      }
    }
  }
}
