// 用变量定义函数类型
let add1: (x:number, y:number) => number
// 用接口定义函数类型
interface Add2 {
  (x: number, y: number): number
}
// 使用类型别名定义
type Add3 = (x: number, y: number) => number

function add4(x: number, y: number) {
  return x + y
}
// add4(1, 2, 3)

// y是可选参数，可选参数必须位于必选参数之后
function add5 (x: number, y? :number) {
  return y ? x + y : x
}
add5(1)
add5(1, 2)
// 给参数设置默认值 必选参数前，默认参数不可省略，明确传入undefined
function add6(x: number, y = 0, z: number, q = 1) {
  return x + y + z + q
}
console.log(add6(1, undefined, 2));

// 剩余参数
function add7(x: number, ...rest:number[]) {
  return x + rest.reduce((pre, cur) => pre + cur)
}
// 函数重载
function add8(...rest:number[]) :number
function add8(...rest: string[]) :string
function add8(...rest: any[]) :any{
  let first = rest[0]
  if (typeof first === 'string') {
    return rest.join('')
  }
  if (typeof first === 'number') {
    return rest.reduce( (pre, cur) => pre + cur)
  }
}

console.log(add8(1,2,3))
console.log(add8('a', 'b', 'c'));
