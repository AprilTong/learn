// 模拟实现new操作符号
// new 运算符创建一个用户定义的对象类型的实例，或具有构造函数的内置对象的实例，new关键字会进行如下的操作
// 1. 创建一个空的简单的JavaScript 对象，即({})
// 2. 链接该对象（即设置该对象的构造函数）到另一个对象
// 3. 将步骤1新创建的对象作为this的上下文
// 4. 如果该函数没有返回对象，则返回this
function new_object() {
    // 创建一个空对象
    let obj = new Object();
    // 获得构造函数
    let Con = [].shift.call(arguments);
    // 链接到原型(不推荐使用)
    obj.__proto_ = Con.prototype;
    // 绑定this
    let result = Con.apply(obj, arguments);
    // 确保new 出来的是一个对象
    return typeof result === 'object' ? result : obj;
}
// 提示：关注性能的：就不应该在一个对象中修改它的 [[Prototype]]。相反, 创建一个新的且可以继承 [[Prototype]] 的对象，推荐使用 Object.create()
function create() {
    // 获取构造函数，同时删除 arguments 中的第一个参数
    Con = [].shift.call(arguments);
    // 创建一个空的对象并链接到原型，obj可以访问构造函数原型中的属性
    let obj = Object.create(Con.prototype);
    // 绑定this实现继承，obj可以访问到构造函数中的属性
    let ret = Con.apply(obj, arguments);
    // 优先返回构造函数返回的对象
    return ret instanceof Object ? ret : obj;
}
