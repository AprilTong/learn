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
