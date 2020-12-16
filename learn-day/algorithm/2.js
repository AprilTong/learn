/*
  监听样式变化
 */
class styleListen {
    constructor(el) {
        this.el = el;
        this.styleList = window.getComputedStyle(el);
        this.listenStyle = {};
    }
    addStyleListen(prop) {
        // 如果再次添加相同的属性，先进行清除之前的添加
        if (this.listenStyle[prop]) {
            this.removeStyleListen(prop);
        }
        this.listenStyle[prop] = {
            value: this.styleList[prop],
            fn: null,
        };
        console.log(`${prop} 开始监听`);
        this.listenStyle[prop].fn = setInterval(() => {
            if (this.styleList[prop] !== this.listenStyle[prop].value) {
                console.log(`${prop} is changed`);
                this.listenStyle[prop].value = this.styleList[prop];
            }
        }, 100);
    }
    removeStyleListen(prop) {
        clearInterval(this.listenStyle[prop].fn);
        delete this.listenStyle[prop];
    }
    showListenStyleList() {
        console.log(Object.keys(this.listenStyle));
    }
}

const el = document.createElement('div');
el.innerHTML = 'test';
document.body.append(el);

let styleListenOne = new styleListen(el);

styleListenOne.addStyleListen('font-size');
