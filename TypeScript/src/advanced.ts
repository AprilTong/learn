let temp_obj = {
    a: 1,
    b: 2,
    c: 3,
};
function getValues(obj: any, keys: string[]) {
    return keys.map((key) => obj[key]);
}
/*
    索引类型
    1. 索引类型的查询操作符 keyof T
    2. 索引访问操作符 T[key]
    3. 泛型约束 T extends U
 */
interface Obj {
    a: number;
    b: string;
}
let key: keyof Obj; // key就是a和b的联合类型
let value: Obj['a']; // value的类型就是obj.a的类型

// 改造函数
function getValues2<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
    return keys.map((key) => obj[key]);
}
console.log(getValues2(temp_obj, ['a']));
console.log(getValues2(temp_obj, ['e'])); // 类型检查发挥作用
// 映射类型,同态
interface myObj {
    a: string;
    b: number;
    c: boolean;
}
// 接口的所有属性变为可读
type readOnlyObj = Readonly<myObj>;
// 接口所有的参数是可选的
type partialObj = Partial<myObj>;
// 抽取对象子集
type pickObj = Pick<myObj, 'a' | 'b'>;
// 非同态类型
type recordObj = Record<'x' | 'y', myObj>;
