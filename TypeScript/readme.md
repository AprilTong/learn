#### TypeScript是拥有类型系统的JavaScript的超集，可以编译成JavaScript【动态弱类型语言】
1. 类型检查
2. 语言扩展
3. 工具属性

###### 强类型语言：不允许改变变量的数据类型，除非进行强制类型转换
###### 弱类型语言：相对灵活，没有什么约束，更容易产生bug

###### 静态类型语言：在编译阶段确定所有变量的类型，对类型极度严格，立即发现错误，运行时性能好，自文档化
###### 动态类型语言：在执行阶段确定所有变量的类型，对类型非常宽松，bug可能隐藏数年或数月，运行时性能差，可读性差

```
 npm init -y
 npm i typescript -g
 tsc -h
 tsc -init
 tsc ./src/index.ts // 编译ts文件
 npm i webpack webpack-cli webpack-dev-server -D
 npm i ts-loader typescript -D
 npm i html-webpack-plugin -D
 npm i clean-webpack-plugin -D // 清空dist目录
 npm i webpack-merge -D
```

##### 笔记
es6数据类型：String Number Boolean null undefined Symbol Object[Array Function]
TypeScript数据类型：在es6数据类型的基础上增加了 void any never 元组 枚举 高级类型
1. 元组是特殊的数组，限定了数组的类型和个数，可以通过push方法添加新的元素，但是不能通过索引进行越界访问，不建议使用push
2. 不允许修改对象的属性
3. 不是特殊情况，不要使用any类型
4. 枚举类型：一组有名字的常量集合,会被编译成对象,枚举成员的值是只读类型







