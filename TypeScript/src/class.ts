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
    constructor(name: string, public color: string) {
        super(name)
        this.color = color
        this.pro()
    }
    // color: string
}
