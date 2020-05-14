/* 
    计算两个数组的交集
    1. 输出结果中的每个元素一定是唯一的
    2. 不考虑输出结果的顺序
    intersection([1,2,2,1], [2,2]) // [2]
    intersection([4,9,5], [9,4,9,8,4]) // [9, 4]
*/
function intersection(arr1, arr2) {
    return [...new Set(arr1.filter((el) => arr2.includes(el)))];
}

function intersection2(arr1, arr2) {
    let map1 = new Set(arr1);
    let map2 = new Set(arr2);
    let result = [];
    map1.forEach((el) => {
        if (map2.has(el)) {
            result.push(el);
        }
    });
    return result;
}

/*
    计算多个数组的交集
 */
function allIntersection(...arr) {
    return arr.reduce((prev, curr) => {
        return [...new Set(prev.filter((el) => curr.includes(el)))];
    });
}

/*
  数组扁平
 */
// 会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子元素的元素合并为一个新数组返回
Array.flat();
function flatDeep(arr) {
    return Array.isArray(arr) ? arr.reduce((pre, cur) => [...pre, flatDeep(cur)], []) : [arr];
}

// 无递归数组扁平化，使用堆栈
function flatten(arr) {
    const stack = [...arr];
    const res = [];
    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    return res.reverse();
}

/*
  数组去重
*/

// set方法
function unique1(arr) {
    return Array.from(new Set(arr));
}

function unique2(arr) {
    return [...new Set(arr)];
}

// filter方法
function unique3(arr) {
    return arr.filter((el, index, array) => {
        return arr.indexOf(el) === index;
    });
}
