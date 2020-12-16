// 1.自己实现数组的map方法
Array.prototype.myMap = function (fn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(fn(this[i], i, this));
    }
    return result;
};

// 2. 实现一个函数，每次调用foo会返回foo被访问次数，foo.clear();归零
function foo() {
    if (!foo.count) {
        foo.count = 1;
    } else {
        foo.count++;
    }
    return foo.count;
}
// Function.prototype.clear = function() {
//   this.count = 1
//   return this.count
// }
foo.clear = function () {
    this.count = 1;
    return this.count;
};
foo(); // 1
foo(); // 2
foo(); // 3
foo.clear(); // 1
// findTargetIndex([2,7,11,15], 9)
// findTargetIndex([-1,-5,-4,-8],-9)
// findTargetIndex([0,7,11,0],0) 不符合预期
// forEach 不能退出循环
// 方法一：两层for循环
function twofor(arr, target) {
    console.time('aa');
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.length >= 2) break;
        if (arr.includes(target - arr[i])) {
            for (let j = i + 1; j < arr.length; j++) {
                if (target - arr[i] === arr[j]) {
                    result.push(i);
                    result.push(j);
                }
            }
        }
    }
    console.timeEnd('aa');
    return result;
}
// 方法二： 利用对象，Object是哈希表结构，哈希表查找的时间复杂度是O(1),array的时间复杂度是O(n)，提升查找速度
function findTargetIndex(arr, target) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
        let diff = target - arr[i];
        if (diff in result) {
            return [result[diff], i];
        }
        result[arr[i]] = i;
    }
}

// 3. 统计一个字符串出现最多的字母
// 4. 生成一个随机长度的字符串

function a() {
    this.b = 3;
}
a.prototype.b = 7;
var t = new a();
var b = 2;
a();
console.log(t.b); // 3
console.log(b); // 3

// 利用reduce实现数组的map方法
Array.prototype.myMap2 = function (fn) {
    return this.reduce((acc, cur, index) => {
        acc.push(fn(cur, index, this));
        return acc;
    }, []);
};

// es5的继承和es6的class的继承有什么区别
// 1. ES6的继承实现在于使用super关键字调用父类，ES5是通过call或者apply回调方法调用父类
// 2. ES6的继承子类可以直接通过 __proto__ 寻址到父类，ES5的__proto__指向Function.prototype
// 3. ES6 的继承先生成父类实例，再调用子类的构造函数修饰父类实例，ES5 的继承先生成了子类实例，再调用父类的构造函数修饰子类实例
// 4. ES6类的内部所有定义的方法，都是不可枚举的

// 函数柯里化【把接受多个参数的函数转换为单一参数的函数】
function trueCurrying(fn, ...args) {
    if (args.length >= fn.length) {
        return fn(...args);
    }

    return function (...args2) {
        return trueCurrying(fn, ...args, ...args2);
    };
}
// 正则匹配 学习

function Foo() {
    getName = function () {
        alert(1);
    };
    return this;
}
Foo.getName = function () {
    alert(2);
};
Foo.prototype.getName = function () {
    alert(3);
};
var getName = function () {
    alert(4);
};

function getName() {
    alert(5);
}
//请写出以下输出结果：
Foo.getName(); // 2
getName(); // 4
Foo().getName(); // 1
getName(); // 1
new Foo.getName(); // 2
new Foo().getName(); // 3

function deepCopy(obj, map = new Map()) {
    if (typeof obj === 'object') {
        let res = Array.isArray(obj) ? [] : {};
        if (map.get(obj)) {
            return map.get(obj);
        }
        map.set(obj, res);
        for (var i in obj) {
            res[i] = deepCopy(obj[i], map);
        }
        return map.get(obj);
    } else {
        return obj;
    }
}
var A = { a: 1 };
A.A = A;

var B = deepCopy(A);

const reduceHelper = (fn, acc, idx, array) => {
    if (array.length === 0) return acc;
    const [head, ...tail] = array;
    idx++;
    return reduceHelper(fn, fn(acc, head, idx, array), idx, tail);
};

Array.prototype.myReduce = function (cb, initialValue) {
    const array = this;
    const [head, ...tail] = array;
    const startIndex = initialValue ? -1 : 0;

    return initialValue ? reduceHelper(cb, initialValue, startIndex, array) : reduceHelper(cb, head, startIndex, tail);
};

function longStr(str) {
    var obj = {};
    var arr = [];
    var letter;
    for (var i = 0, len = str.length; i < len; i++) {
        letter = str[i];
        if (!obj[letter]) {
            // 第一次放进去
            obj[letter] = 1;
        } else {
            obj[letter]++;
        }
    }
    var max_key,
        max_num = 0;
    for (key in obj) {
        if (max_num < obj[key]) {
            max_num = obj[key];
            max_key = key;
        }
    }
}

function randomName(len) {
    len = len || 23;
    var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    var maxPos = chars.length;
    var str = '';
    for (i = 0; i < len; i++) {
        str += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return new Date().getTime() + str;
}

function Promise(executor) {
    // 初始化state为等待态
    this.state = 'pending';
    // 成功的值
    this.value = undefined;
    // 失败的原因
    this.reason = undefined;
    let resolve = (value) => {
        // state改变,resolve调用就会失败
        if (this.state === 'pending') {
            // resolve调用后，state转化为成功态
            this.state = 'fulfilled';
            // 储存成功的值
            this.value = value;
        }
    };
    let reject = (reason) => {
        // state改变,reject调用就会失败
        if (this.state === 'pending') {
            // reject调用后，state转化为失败态
            this.state = 'rejected';
            // 储存失败的原因
            this.reason = reason;
        }
    };
    // 如果executor执行报错，直接执行reject
    try {
        executor(resolve, reject);
    } catch (err) {
        reject(err);
    }
}
// then 方法传入两个方法作为参数，一个是fn1方法，一个是 fn2 方法
p1.then(
    function fn1(data) {
        // fn1 方法的参数，用于获取promise对象的值
    },
    function fn2(err) {
        // fn1 方法的参数，用于获取失败的原因
    }
);

// 数值比较
function compare() {
    if ([] == false) {
        console.log(1);
    }

    if ({} == false) {
        console.log(2);
    }

    if ([]) {
        console.log(3);
    }

    if ([1] == [1]) {
        console.log(4);
    }
}

const obj = {
    name: ' jsCoder',

    skill: ['es6', 'react', 'angular'],

    say: function () {
        for (var i = 0, len = this.skill.length; i < len; i++) {
            setTimeout(
                (i) => {
                    console.log('No.' + i + this.name);

                    console.log(this.skill[i]);

                    console.log('--------------------------');
                },
                0,
                i + 1
            );
            console.log(i + 1);
        }
    },
};

obj.say();
function getResult(data, n, sum) {
    if (n == 0 && sum == 0) {
        return true;
    }
    if (n < 0) {
        return false;
    }
    if (n > 0) {
        for (var i = 0; i < data.length; i++) {
            var temp = data.slice(i + 1, data.length);

            return getResult(temp, n - 1, sum - data[i]) || getResult(temp, n, sum);
        }
    }
}
console.log(getResult([1, 2, 3, 4, 5, 6, 7], 4, 19));

let obj = { name: 'tongzhirong', age: 22 };
function changeobj(data) {
    data.name = 'niepengcheng';
    console.log(data);
    data = {
        name: 'tongzhirong',
        age: 22,
    };
}
changeobj(obj);
console.log(obj);

let n = 100;
function changeNum(a) {
    let b = a;
    n++;
    console.log(b);
}
changeNum(n);
console.log(n);

setTimeout(function () {
    console.log('a');
}, 0);
console.log('b');
let p = new Promise(function (resolve, reject) {
    console.log('c');
    resolve();
});
setTimeout(function () {
    console.log('d');
}, 10000);
p.then(function () {
    console.log('e');
});
console.log('f');
// 解构赋值的条件是不传参数的情况下
function test({ x, y } = { x: 0, y: 0 }) {
    return [x, y];
}
test({ x: 2, y: 3 });
test({});
test();

// 生成器函数
function* foo(x) {
    var y = 2 * (yield x + 1);
    var z = yield y / 3;
    return x + y + z;
}

var a = foo(5);
a.next(); // Object{value:6, done:false}
a.next(); // Object{value:NaN, done:false}
a.next(); // Object{value:NaN, done:true}

var b = foo(5);
b.next(); // { value:6, done:false }
b.next(12); // { value:8, done:false }
b.next(13); // { value:42, done:true }

var arr = [1, 2, 3];
for (const i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
