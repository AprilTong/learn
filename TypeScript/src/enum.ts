// 数字枚举
enum Role {
  Reporter,
  Developer,
  Owner,
  Guest
}
console.log('11', Role.Reporter)
// 字符串枚举 不能反向映射
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}

// 异构枚举
enum Answer {
  N,
  Y = 'yes'
}


//  枚举成员
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

// 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar
} 

let month = (Month.Jan, Month.Feb)

// 枚举类型
enum E { a, b}
enum F {a = 0, b = 1}
enum G { a = 'apple', b = 'banana'}
let e1: E.a = 1
let e2 = E.b
// e1 === e2
let e3: E.a = 1
e1 === e3