webpack 学习

学习教程
[这是学习链接](https://time.geekbang.org/course/intro/190)


### webpack的作用
1.转换es6语法
2.转换jsx
3.css前缀补全/预处理器
4.压缩混淆
5.图片压缩
###  webpack组成
1.打包的入口文件（entry）[注意单入口、多入口区别]
2.打包的输出（output）
3.环境 （mode【production/develop】）
4.Loader配置 （module：{rules: [test,use]}）
5.插件配置（plugins）
常见loader及作用
1.babel-loader 转换es6、es7等新特性语法
2.css-loader 支持.css文件的加载和解析
3.less-loader将less文件转换为css
4.ts-loader 将TS转换为js
5.file-loader进行图片、字体等的打包
6.raw-loader 将文件以字符串的形式导入
7.thread-loader 多进程打包js和css
###  webpack常见插件
（用于bundle文件的优化，资源管理和环境变量注入，作用于整个构建过程）
名称	描述
CommonsChunkPlugin	将chunks相同的模块提取成公共js
CleanWebpackPlugin	清理构建目录
ExtractTextWebpackPlugin	css文件从bundle文件里提取成独立的css文件
CopyWebpackPlugin	将文件或文件夹拷贝到构建的输出目录
HtmlWebpackPlugin	创建html文件去承载输出的bundle
UglifyjsWebpackPlugin	压缩js
ZipWebpackPlugin	将打包出的资源生成一个zip包
### 解析css
1.css-loader，用于加载.css文件，并转换成common.js对象
2.Style-loader,将样式通过<style>标签插入到head中
【file-loader url-loader】
### webpack中的热更新Webpack-dev-derver
1.wds不刷新浏览器
2.wds不输出文件，而是放在内存中
3.使用HotModuleReplacementPlugin插件
文件监听即就是在发现源码发生变化时，自动构建新的输出文件。轮询判断文件的最后编辑时间是否变化，文件发生变化时，并不会立刻告诉监听者，而是先缓存起来，等aggretateTimeout时重新构建
###  webpack开启监听模式：
1.启动webpack命令时，带上--watch参数
2.在配置webpack.config.js 中设置wacth：true

### 文件指纹 【打包输出文件文件名的后缀 用于版本管理】
文件指纹策略：
1.Hash：和整个项目的构建相关，只要项目文件有修改，整个项目构建的hash值就会更改
2.Chunkhash：和webpack打包的chunk有关，不同的entry会生成不同的chunkhash值
3.Contenthash：根据文件内容来定义hash，文件内容不变，则contenthash不变
### 文件压缩
##### css
1.使用optimize-css-assets-webpack-plugin
2.同时使用cssnano
##### Html
修改html-webpack-plugin，设置压缩参数
autoprefixer自动补齐css3前缀
Px2rem-loader 在移动端将px转换成rem
#### tree shaking(摇树优化)
一个文件可能有多个方法，只要其中某个方法使用用到，整个文件都会打包到bundle里面去，tree shaking就只把用到的方法进行打包，没用到的方法会在uglify阶段被擦除掉
使用：webpack默认支持，在.babelrc里设置modules: false
    .production mode的情况下默认开启
要求：必须是es6的语法
#### Scope Hoisting
未开启Scope Hoisting打包大量函数闭包包裹代码，导致体积增大（模块越多越明显）
运行代码时创建的函数作用域变多，内存开销变大
原理：将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防止变量名冲突
对比：通过 Scope Hoisting 可以减少函数声明代码和内存开销
.production mode的情况下默认开启
要求：必须是es6的语法
