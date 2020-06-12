// 软件工程上：考虑可重用性
// 返回值的类型和传入参数的类型需要相同，使用类型变量，只表示类型而非值
// 类型变量T捕获用户传入的类型，之后就可使用这个类型，这允许我们跟踪函数里使用的类型的信息
function identity<T>(arg: T): T {
    return arg;
}

// 定义泛型之后的使用
// 1. 传入所有参数，包括类型参数
let output = identity<string>("myString")
// 2. 类型推论,提高精简和高刻度性
let output2 = identity('myString')

function loggingIdentity<T>(arg: Array<T>): Array<T> {
    console.log(arg.length)
    return arg
}

// 泛型接口

interface GenericIndentityFn {
    <T>(arg: T): T
}

function identity1<T>(arg: T): T {
    return arg
}

let myIdentity: GenericIndentityFn = identity


// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGeneriNumber = new GenericNumber<number>()
myGeneriNumber.zeroValue = 0
myGeneriNumber.add = function (x, y) { return x + y }
console.log('myGeneriNumber', myGeneriNumber)

// 泛型约束
interface Lengthwise {
    length: number;
}
function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length)
    return arg
}
loggingIdentity2({ length: 10, value: 3 })


// 在泛型约束中使用类型参数
