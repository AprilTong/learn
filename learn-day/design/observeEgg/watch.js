class Watcher {
  /*
   * name  指令名称，例如文本节点，该值设为"text"
   * el    指令对应的DOM元素
   * vm    指令所属myVue实例
   * exp   指令对应的值，本例如"myText"
   * attr  绑定的属性值，本例为"innerHTML"
   * */
  constructor(name, el, vm, exp, attr) {
    this.name = name
    this.el = el
    this.vm = vm
    this.exp = exp
    this.attr = attr

    //更新操作
    this._update()
  }

  _update() {
    this.el[this.attr] = this.vm.$data[this.exp]
  }
}