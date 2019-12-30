/*
  监听样式变化
 */
class styleListen {
  constructor(el) {
    this.styleList = window.getComputedStyle(el)
    this.listenStyle = {}
  }
  addStyleListen(prop) {
    this.listenStyle[prop] = {
      value: this.styleList[prop],
      fn() {
        console.log(`${prop} 开始监听`)
      }
    }
    this.listenStyle[prop].fn()
  }
  changeStyleDealMethod(prop, value) {
    this.listenStyle[prop].value = value
    if (this.styleList[prop] !== value ) {
      console.log(`${prop} 的值改变了`)
      this.styleList[prop] = value
    }
  }
  removeStyleListen(prop) {
    this.listenStyle[prop] = ''
    delete this.listenStyle[prop]
  }
  showListenStyleList() {
    console.log(Object.keys(this.listenStyle))
  }
}
