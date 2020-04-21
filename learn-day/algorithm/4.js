/*
  判断一个整数是不是回文数。回文数指正序和倒序读都是一样的数
*/
// 方法一：将其转换为数组调用数组的reverse()方法
var isPalindrome = function (x) {
    return +('' + x).split('').reverse().join('') == x;
};

/* 
实现一个函数，判断输入是不是回文字符串
*/

/* 
  利用数组的api reverse 反转之后等于自己本身
*/
var isPalindromeStr = function (str) {
    // 保证代码健壮性
    if (typeof str !== 'string') return false;
    return str === str.split('').reverse().join('');
};

/*
  用首尾两个指针，向中间扫描， 如果两指针指向的字符都一样。这个字符串就是回文
 */

var isPalindromeStr = function (str) {
    if (typeof str !== 'string') return false;
    let i = 0,
        j = str.length - 1;
    while (i < j) {
        if (str[i] != str[j]) return false;
        i++;
        j--;
    }
    return true;
};
