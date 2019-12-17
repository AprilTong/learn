// 1.自己实现数组的map方法
Array.prototype.myMap = function(fn) {
  let result = []
  for (let i = 0; i < this.length; i++) {
    result.push(fn(this[i], i, this))
  }
  return result
}

// 2. 实现一个函数，每次调用foo会返回foo被访问次数，foo.clear();归零
function foo() {
  if (!foo.count) {
    foo.count = 1
  } else {
    foo.count++
  }
  return foo.count
}
// Function.prototype.clear = function() {
//   this.count = 1
//   return this.count
// }
foo.clear = function() {
  this.count = 1
  return this.count
}
foo() // 1
foo() // 2
foo() // 3
foo.clear() // 1
// findTargetIndex([2,7,11,15], 9)
// findTargetIndex([-1,-5,-4,-8],-9)
// findTargetIndex([0,7,11,0],0) 不符合预期
// forEach 不能退出循环
// 方法一：两层for循环
function twofor(arr, target) {
  console.time('aa')
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (result.length >= 2) break
    if (arr.includes(target - arr[i])) {
      for (let j = i + 1; j < arr.length; j++) {
        if (target - arr[i] === arr[j]) {
          result.push(i)
          result.push(j)
        }
      }
    }
  }
  console.timeEnd('aa')
  return result
}
// 方法二： 利用对象，Object是哈希表结构，哈希表查找的时间复杂度是O(1),array的时间复杂度是O(n)，提升查找速度
function findTargetIndex(arr, target) {
  console.time('bb')
  let result = {}
  for (let i = 0; i < arr.length; i++) {
    let diff = target - arr[i]
    result[arr[i]] = i
    if (diff in result) {
    console.timeEnd('bb')
      return [i, result[diff]]
    }
  }
}

// 3. 统计一个字符串出现最多的字母
// 4. 生成一个随机长度的字符串
