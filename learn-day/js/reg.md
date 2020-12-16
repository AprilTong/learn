常用正则

1. 匹配所有的>，替换为>-,如果以>结尾，则不替换

x(?=y) 向前断言：x 被 y 跟随时匹配 X
. (小数点)默认匹配除换行符之外的任何单个字符

```
let str = '<bran><april>'
str.replace(/>(?=.)/g, '>-') // "<bran>-<april>"
let str2 = '<bran><april>love'
str2.replace(/>(?=.)/g, '>-')
"<bran>-<april>-love"
```

2. 不以空格开头、不包含空行、不包含连续空格

```
 /^[^\s][^\n]{1,30}$/g
```

```
/\s{2,}/g
```

3.相同的正则多次调用 test()返回的值却不同

```
let reg = /^1[345678][0-9]{9}$/g
console.log(reg.test(15328044636)) // true
console.log(reg.test(15328044636)) // false
```

原因：因为正则的**g**属性，设置的全局匹配。RegExp 有一个 lastIndex 属性，来保存索引开始的位置，第一次调用的 lastIndex 值为 0，到了第二次调用，值变值变成了 11。
解决：

-   去掉 g，关闭全局匹配
-   每次匹配之前将 lastIndex 的值设置为 0

4.function test(str) {
let start = str.slice(0, str.indexOf('.'))
let end = str.slice(str.indexOf('.'))
let reg = /(?=(\B)(\d{3})+\$)/g;
return start.replace(reg, ',') + end
}

3. 基本概念
   (1) 通配符 .将匹配任何一个字符
   例： 如果想匹配"hug"、"huh"、"hut"和"hum", 可以使用/hu./
   (2). 字符集搜寻具有一定灵活性的文字匹配模式[]
   (3). 匹配字母或者数字，连字符，匹配小写字母[a-e]、[0-9]
