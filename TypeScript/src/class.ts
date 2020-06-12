// “类的成员属性”都是实例属性，而不是原型属性，“类的成员方法”都是“原型”方法。
class Dog {
    // 不能被实例化，也不能被继承
    // private constructor(name: string) {
    //     this.name = name
    // }
    // 这个类只能被继承，不能被实例化
    // protected constructor(name: string) {
    //     this.name = name
    // }
    constructor(name: string) {
        this.name = name
    }
    public name?: string
    run() { }
    // 私有成员
    private pri() { }
    // 被保护的属性
    protected pro() { }
    // 只读属性，要被初始化
    readonly legs: number = 4
    // 静态成员 只能通过类名来访问
    static food: string = 'bones'
}
// 类成员的属性和方法都是实例
console.log(Dog.prototype)


// 类的继承
class Husky extends Dog {
    // constructor(name: string, public color: string) {
    //     super(name)
    //     this.color = color
    //     this.pro()
    // }
    // color: string
}
let husky = new Husky('name')
console.log('Husky', husky)
// 类静态方法和实例部分的区别
// interface ClockConstructor {
//     new(hour: number, minute: number): ClockInterface;
// }
// interface ClockInterface {
//     tick();
// }

// function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
//     return new ctor(hour, minute);
// }

// class DigitalClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("beep beep");
//     }
// }
// class AnalogClock implements ClockInterface {
//     constructor(h: number, m: number) { }
//     tick() {
//         console.log("tick tock");
//     }
// }

// let digital = createClock(DigitalClock, 12, 17);
// let analog = createClock(AnalogClock, 7, 32);
// console.log('digital', digital)
// console.log('analog', analog)

// 继承接口
interface Shape {
    color: String
}
interface Square extends Shape {
    sideLength: number
}

let square = <Square>{}
square.color = "blue"
square.sideLength = 10

console.log('square', square)

// 一个接口可以继承多个接口


// 混合类型
// 可以同时作为函数和对象使用
interface Counter {
    (start: number): string
    interval: number
    reset(): void
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123
    counter.reset = function () { }
    console.log('counter', counter)
    return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0

console.log('c', c)


// 接口继承类
class Control {
    private state: any
}
// 定义了一个接口继承类，也会继承类的private和protect成员
interface SelectControl extends Control {
    select(): void // void类型像是与any类型相反，它表示没有任何类型。 当一个函数没有返回值时，你通常会见到其返回值类型是 void：
}
//错误 无state属性
// class Img implements SelectControl {
//     select() { }
// }


class Person {
    protected name: string
    // 构造函数被标记成protected,意味着这个类不能在包含它的类外被实例化，但是能被继承
    protected constructor(name: string) {
        this.name = name
    }
}

class Employee extends Person {
    private department: string

    constructor(name: string, department: string) {
        super(name)
        this.department = department
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`
    }
}
let april = new Employee('April', '平台部')
console.log('april', april)
// let bran = new Person('bran') // 错误， ‘Person’的构造函数是被保护的