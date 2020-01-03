/*
  整数反转
 */
/*
 * @param {number} x
 * @return {number}
 */
// 输入数值的范围是[-2^31， 2^31-1],反转溢出输出零
// 方法一：利用js数组的reverse方法
var reverse = function(x) {
  if (isNaN(x)) return
  let isSign = Math.sign(x)
  let result =
    Number(
      Math.abs(x)
        .toString()
        .split('')
        .reverse()
        .join('')
    ) * isSign
  if (result < -Math.pow(2, 31) || result > Math.pow(2, 31) - 1) {
    return 0
  }
  return result
}
reverse(123) // 321
reverse(-123) // -321
reverse(120) //21
// 采用数学思维，求余分离每一位
var reverse = function(x) {
  if (isNaN(x)) return
  let result = 0
  while (x !== 0) {
    result = result * 10 + (x % 10)
    x = ~~(x / 10)
  }
  if (result < -Math.pow(2, 31) || result > Math.pow(2, 31) - 1) {
    return 0
  }
  return result
}
// js取整的方法
// 可以处理Number类型，也可处理字符串类型
parseInt(number)

//位运算，取整数中最快的
~~number

// 按位异或
number^0

// 左移，a << b，将 a 的二进制形式向左移 b (< 32) 比特位，右边用0填充。
number<<0

// 四舍五入
Math.round()

// 向上取整
Math.ceil()

// 向下取整
Math.floor()
