webpack 学习

学习教程
[这是学习链接](https://time.geekbang.org/course/intro/190)

### webpack 的作用

1.转换 es6 语法 2.转换 jsx
3.css 前缀补全/预处理器 4.压缩混淆 5.图片压缩

### webpack 组成

1.打包的入口文件（entry）[注意单入口、多入口区别] 2.打包的输出（output） 3.环境 （mode【production/develop】）
4.Loader 配置 （module：{rules: [test,use]}） 5.插件配置（plugins）
常见 loader 及作用
1.babel-loader 转换 es6、es7 等新特性语法
2.css-loader 支持.css 文件的加载和解析
3.less-loader 将 less 文件转换为 css
4.ts-loader 将 TS 转换为 js
5.file-loader 进行图片、字体等的打包
6.raw-loader 将文件以字符串的形式导入
7.thread-loader 多进程打包 js 和 css

### webpack 常见插件

（用于 bundle 文件的优化，资源管理和环境变量注入，作用于整个构建过程）
名称 描述
CommonsChunkPlugin 将 chunks 相同的模块提取成公共 js
CleanWebpackPlugin 清理构建目录
ExtractTextWebpackPlugin css 文件从 bundle 文件里提取成独立的 css 文件
CopyWebpackPlugin 将文件或文件夹拷贝到构建的输出目录
HtmlWebpackPlugin 创建 html 文件去承载输出的 bundle
UglifyjsWebpackPlugin 压缩 js
ZipWebpackPlugin 将打包出的资源生成一个 zip 包

### 解析 css

1.css-loader，用于加载.css 文件，并转换成 common.js 对象
2.Style-loader,将样式通过<style>标签插入到 head 中
【file-loader url-loader】

### webpack 中的热更新 Webpack-dev-derver

1.wds 不刷新浏览器
2.wds 不输出文件，而是放在内存中 3.使用 HotModuleReplacementPlugin 插件
文件监听即就是在发现源码发生变化时，自动构建新的输出文件。轮询判断文件的最后编辑时间是否变化，文件发生变化时，并不会立刻告诉监听者，而是先缓存起来，等 aggretateTimeout 时重新构建

### webpack 开启监听模式：

1.启动 webpack 命令时，带上--watch 参数 2.在配置 webpack.config.js 中设置 wacth：true

### 文件指纹 【打包输出文件文件名的后缀 用于版本管理】

文件指纹策略：
1.Hash：和整个项目的构建相关，只要项目文件有修改，整个项目构建的 hash 值就会更改
2.Chunkhash：和 webpack 打包的 chunk 有关，不同的 entry 会生成不同的 chunkhash 值
3.Contenthash：根据文件内容来定义 hash，文件内容不变，则 contenthash 不变

### 文件压缩

##### css

1.使用 optimize-css-assets-webpack-plugin 2.同时使用 cssnano

##### Html

修改 html-webpack-plugin，设置压缩参数
autoprefixer 自动补齐 css3 前缀
Px2rem-loader 在移动端将 px 转换成 rem

#### tree shaking(摇树优化)

一个文件可能有多个方法，只要其中某个方法使用用到，整个文件都会打包到 bundle 里面去，tree shaking 就只把用到的方法进行打包，没用到的方法会在 uglify 阶段被擦除掉
使用：webpack 默认支持，在.babelrc 里设置 modules: false
.production mode 的情况下默认开启
要求：必须是 es6 的语法
利用 ES6 模块的特点：

- 只能作为模块顶层的语句出现
- import 的模块名只能是字符串串常量
- import binding 是 immutable 的
  袋码擦除：uglify 阶段删除无用代码

#### Scope Hoisting

未开启 Scope Hoisting 打包大量函数闭包包裹代码，导致体积增大（模块越多越明显）
运行代码时创建的函数作用域变多，内存开销变大
原理：将所有模块的代码按照引用顺序放在一个函数作用域里，然后适当的重命名一些变量以防止变量名冲突
对比：通过 Scope Hoisting 可以减少函数声明代码和内存开销
.production mode 的情况下默认开启
要求：必须是 es6 的语法 cjs 不支持

#### SplitCunksPlugin 公共脚本分离

chunks 参数说明

- async 异步引入的库进行分离（默认）
- initial 同步引入的库进行分离
- all 所有引入的库进行分离（推荐）

1. test 匹配出需要分离的包
2. minChunks 设置最小引用次数
3. minuSize 分离包体积的大小

#### 动态 import

适用场景：

- 抽离相同代码到一个共享块
- 脚本懒加载，使初始下载的代码更小
