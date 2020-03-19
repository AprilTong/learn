// 返回值的类型和传入参数的类型需要相同，使用类型变量，只表示类型而非值
// 类型变量T捕获用户传入的类型，之后就可使用这个类型，这允许我们跟踪函数里使用的类型的信息
function identity<T>(arg: T): T {
    return arg;
}