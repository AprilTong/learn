/*
  判断一个整数是不是回文数。回文数指正序和倒序读都是一样的数
*/
// 方法一：将其转换为数组调用数组的reverse()方法
var isPalindrome = function(x) {
    return +("" + x).split('').reverse.join('') == x
}