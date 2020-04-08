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
function allIntersection(...arr) {}
