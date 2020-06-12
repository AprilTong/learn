// 数字枚举
enum Role {
  Reporter,
  Developer,
  Owner,
  Guest
}
console.log('11', Role)
// 字符串枚举 不能反向映射
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}

// 异构枚举,混合字符串和数字成员
enum Answer {
  N,
  Y = 'yes'
}


//  枚举成员，可以是常量或计算出来的，
enum char {
  // const
  a,
  b = char.a,
  c = 1 + 3,
  // computed
  d = Math.random(),
  e = '123'.length,
  f = 4
}

// 常量枚举, 通过在枚举上使用const修饰符来定义
const enum Month {
  Jan,
  Feb,
  Mar
}

let month = (Month.Jan, Month.Feb)

// 枚举类型
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'banana' }
let e1: E.a = 1
let e2 = E.b
// e1 === e2
let e3: E.a = 1
e1 === e3

// 对象类型接口
// 类型断言 用as 或者<>的形式
interface List {
  // 只读属性
  readonly id: number,
  name: string,
  // [x: string]: any;
  // ? 表示可选属性
  age?: number
}
interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach((value) => {
    console.log(value.id, value.name);
    // value.id++
    if (value.age) {
      console.log(value.age);
    }
  })
}
let result = {
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B', age: 10 }
  ]
}
render(result)

interface StringArray {
  [index: number]: string
}
// 定义一个字符串数组
let chars: StringArray = ['a', 'b']

interface Names {
  [x: string]: string,
  // y: number,
  [x: number]: string
}

// 外部枚举
declare enum Enum {
  A = 1,
  B,
  C = 2
}