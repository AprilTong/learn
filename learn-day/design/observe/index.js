const Observe = (function(){
  let _message = {}
  return {
    // 注册消息
    on: function(type, fn) {
      if (typeof _message[type] === 'undefined') {
        _message[type] = [fn]
      } else {
        _message[type].push(fn)
      }
    },
    // 发布消息
    subscribe: function(type, args) {
      if (!_message[type]) return
      let event = {
        type,
        args: args || {}
      }
      for (let i = 0; i < _message[type].length; i++) {
        _message[type][i].call(this, event)
      }
    },
    // 移除消息
    off: function(type, fn) {
      if (_message[type] instanceof Array) {
        for (let i = _message[type].length - 1; i >=0; i--) {
            // 如果存在函数执行并删除
            _message[type][i] === fn && _message[type].splice(i, 1)
        }
      }
    }
  }
})()
Observe.on('say', function(data){
  console.log(data.args)
})
Observe.on('success', function() {
  console.log('success')
})

Observe.subscribe('say', {
  text: 'hello world'
})
Observe.subscribe('success')