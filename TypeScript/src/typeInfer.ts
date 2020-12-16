// 类型推论

// 1. 没有明确指出类型的地方，类型推断会帮助提供类型
// 上下文推断【函数参数、赋值表达式的右边、类型断言、对象成员和数组字面量和返回值语句】

// 类型别名，不能被extends 和implements
type Alias = { num: number }
// 接口
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;


// 字符串字面量类型
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out'
class UIElement {
    animate(dx: number, dy: number, easing: Easing) {
        if (easing === 'ease-in') {

        } else if (easing === 'ease-out') {
        }
        else if (easing === 'ease-in-out') {

        } else {
            // error! 不允许输入null或者undefined
        }
    }
}
let button = new UIElement()
button.animate(0, 0, 'ease-in-out')
button.animate(0, 0, 'test')
// error: 你只能从三种允许的字符中选择其一来做为参数传递，传入其它值则会产生错误。Argument of type '"uneasy"' is not assignable to parameter of type '"ease-in" | "ease-out" | "ease-in-out"'


// 数字字面量类型
function foo(x: number) {
    if (x !== 1 || x !== 2) {
        //  当 x与 2进行比较的时候，它的值必须为 1，这就意味着上面的比较检查是非法的。
        // Operator '!==' cannot be applied to types '1' and '2'.
    }
}
