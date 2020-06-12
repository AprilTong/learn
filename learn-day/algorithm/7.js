/*
    给定一个字符串，找出其中不含有重复字符的最长子串的长度
    输入： ‘abcabcbb’ 输出 3，无重复的最长子串是abc
    输入： ‘bbbbb’ 输出 1，无重复的最长子串是b
    输入： ‘pwwkew' 输出 3，无重复的最长子串是wke
 */

var lengthOfLongestSubStr = function (str) {
    let arr = [];
    let max = 0;
    for (let i = 0; i < str.length; i++) {
        if (arr.includes(str[i])) {
            arr.splice(0, arr.indexOf(str[i]) + 1);
        } else {
            arr.push(str[i]);
        }
        max = Math.max(arr.length, max);
    }
    return max;
};

/*
使用map存储遍历过的数组，key为字符，value为下标
使用i来标记无重复子串开始下标，j为当前遍历字符下标
遍历字符串，判断当前字符是否已经在map中存在，存在则更新无重复子串开始下标i为相同字符的下一位置，
此时从i到j为最新的无重复子串，更新max，将当前字符与下标放入map中，
最后返回max
 */
var lengthOfLongestSubStr = function (str) {
    let map = new Map(), max = 0
    for (let i = 0, j = 0,; j < str.length; j ++ ) {
        if (map.has(str[j])) {
            i = Math.max(map.get(str[j] + 1, i))
        }
        max = Math.max(max, j - i + 1)
        map.set(str[j], j)
    }
    return max
};

/*
 翻转字符串里的单词
 */

 const reverseWords = function(str) {
    let arr = str.split(' ').filter(el => {return el && el.trim()})
    return arr.reverse().join(' ')
 }

 const reverseWords2 = function(str) {
     // \s 匹配一个空白字符，包括空格、制表符、换页符、和换行符
     // g 全局搜索
     // + 匹配前面的子表达式一次或多次
    return str.trim().replace(/\s+/g, ' ').reverse().join(' ')
 }

 /* 
 字符串相加
 给定两个字符串形式的肥负整数num1和num2,计算他们的和
 注意：
 1. num1和num2的长度都小于5100
 2. num1和num都只包含数字0-9
 3. num1和num2都不包含任何前导0
 4. 不能将直接输入的字符串转换为整数形式
  */

  /*
   1. 建立双指针, i, j,倒序循环两个数字
   2. 判断两数相加是否大于10，大于则进1，存储（result%10）
   3. 循环结束判断move是否有值，有则加上，没有return
   */
  
   var addString = function(num1, num2) {
        let i = num1.length - 1
        let j = num2.length - 1
        let move = 0
        let result = ''
        while(i >= 0 || j >= 0) {
            n1 = i >=0 ? num1[i] : 0
            n2 = j >= 0 ? num2[i] : 0
            let tmp = +n1 + +n2 + move
            move = tmp >= 10 ? 1 : 0
            // result是个字符串
            result = (tmp % 10) + result
            console.log(move, result)
            i--;
            j--;
        }
        return move ? move + result : result
   }

   const arr = [
       {
           a: 1,
       },
       {
           a: 2,
       },
       {
           a: 3
       },
       {
           a: 4
       }
   ]

function test(arr) {
    // 偶索引的数据
    let arr1 =  arr.filter((item, index) => index %2 === 0)
    // 奇索引的数据
    let arr2 = arr.filter((item, index) => index %2 === 1)
    let result = []
    arr1.forEach((item, index) => {
        const obj = {...item}
        Object.keys(arr2[index]).map(key => {
            obj[`${key}1`] = arr2[index][key]
        })
        result.push(obj)
    })
    console.log('result', result)
}

/*
    一行代码实现一个简单的模版字符串替换
    var template = "{{name}}很厉害，才{{age}}岁"
    var context = { name: 'april', age: '15'}
    输入： template context
    输出：bottle很厉害，才15岁
    1. 用正则匹配 /\{\{.*?\}\}/g/ 匹配到所有的{{name}}、{{age}}
    2. str.replace(replace|substr, newSubStr|function),其中第二个参数可以是 fucntion (replacement) ，该函数的返回值将替换掉第一个参数匹配到的结果，将所有匹配到的字符替换成指定的字符
    3. String.prototype.trim() 去除分割符与变量之间的空白字符
*/
function render(template, context) {
    // * 匹配前面的子表达式零次或多次
    // . 匹配除换行符 \n 之外的任何单字符
    // ? 匹配前面一个表达式0次或者1次
    return template.replace(/{{(.*?)}}/g, (match, key) => {
        context[key.trim()]
    })
}