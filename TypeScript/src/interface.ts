// 用变量定义函数类型
// let add: (x:number, y:number) => number
// 用接口定义函数类型
// interface Add {
//   (x: number, y: number): number
// }

// 使用类型别名定义
// type Add = (x: number, y: number) => number
// let add: Add = (a, b) => a +b

// 混合类型接口
interface Lib {
  (): void;
  version: string,
  doSomething(): void
}
function getLib() {
  let lib: Lib = (() => {} )as Lib
  lib.version = '1.0'
  lib.doSomething = () => {}
  return lib
}
let lib1 = getLib()
lib1()
lib1.doSomething()
  