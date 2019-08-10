// 原始类型
let bool: boolean = true
let num: number | null | undefined = 123
let str: string = 'abc'
// str = 123
// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number | string> = [1, 2, 3, '4']

// 元组, 特殊的数组 限定了数组的类型和个数
let tuple: [number, string] = [0, '1']
tuple.push(3)
console.log('tuple', tuple)
//函数
let add = (x: number, y: number) => x + y
let compute: (x: number, y: number) => number
compute = (a, b ) => a + b 

// 对象
let obj: object = {x: 1, y: 2}

// symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2) // false
// 进行设置
num = null
num = undefined

// null undefined
let nu: null = null
let un: undefined = undefined

// void js中是操作符
let noReturn = () => {}

// any
let x
x = 1
x = '1'

// never
let error = () => {
  throw new Error('error')
}
let endLess = () => {
  while(true) {}
}
