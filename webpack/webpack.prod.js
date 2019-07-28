const glob = require('glob')
const path = require('path')
const webpack = require('webpack')
const miniCssExtractPlugin = require('mini-css-extract-plugin')
const optimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin')

const setMPA = () => {
  const entry = {}
  const htmlWebpackPlugin = []
  const entryFiles = glob.sync(path.join(__dirname, './src/*/index.js'))
  Object.keys(entryFiles).map( index => {
    const entryFile = entryFiles[index]
    const match = entryFile.match(/src\/(.*)\/index.\js/)
    const pageName = match && match[1]
    entry[pageName] = entryFile
    htmlWebpackPlugin.push(
      new HtmlWebpackPlugin({
        template: path.join(__dirname, `src/${pageName}/index.html`),
        filename: `${pageName}.html`,
        chunks: ['vendors', pageName],
        inject: true,
        minify: {
          html5: true,
          // 单词间距
          collapseWhitespace: true,
          // 换行符号
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          // 备注
          removeComments: true
        }
      }),
    )
  })
  return {
    entry,
    htmlWebpackPlugin
  }
}

const {entry, htmlWebpackPlugin} = setMPA()
module.exports = {
  entry,
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js'
  },
  mode: 'none',
  module: {
    rules: [
      {
        test: /.js$/,
        use: 'babel-loader'
      },
      {
        test: /.css$/,
        use: [miniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /.less$/,
        use: [miniCssExtractPlugin.loader, 'css-loader', 'less-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              require('autoprefixer')({
                browsers: ['last 2 versions', '>1%', 'ios 7']
              })
            ]
          }
        }, 
        {
          loader: 'px2rem-loader',
          options: {
            remUnit: 750,
            remPrecision: 8
          }
        }
      ]
      },
      {
        test: /.(png|jpg|gif|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // limit: 10240 // 10k大小，做base64转换
              name: '[name]_[hash:8].[ext]'
            }
          }
        ]
      },
      {
        test: /.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // limit: 10240 // 10k大小，做base64转换
              name: '[name]_[hash:8][ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    // 文件指纹
    new miniCssExtractPlugin({
      filename: '[name].[contenthash:8].css'
    }),
    // css压缩
    new optimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessor: require('cssnano')
    }),
    // 删除dist目录
    new CleanWebpackPlugin({}),
    // 开启Scope Hoisting
    new webpack.optimize.ModuleConcatenationPlugin()
    // // 公众资源包
    // new HtmlWebpackExternalsPlugin({
    //   externals: [
    //     {
    //       module: 'react',
    //       entry: 'https://11.url.cn/now/lib/16.2.0/react.min.js',
    //       global: 'React',
    //     },
    //     {
    //       module: 'react-dom',
    //       entry: 'https://11.url.cn/now/lib/16.2.0/react-dom.min.js',
    //       global: 'ReactDOM',
    //     }
    //   ],
    // })
  ].concat(htmlWebpackPlugin),
  // source-map, inline-source-map,
  // 提取公共包
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       commons: {
  //         test: /(react|react-dom)/,
  //         name: 'vendors',
  //         chunks: 'all'
  //       }
  //     }
  //   }
  // },
  optimization: {
    splitChunks: {
      minSize: 1000,
      cacheGroups: {
        commons: {
          name: 'commons',
          chunks: 'all',
          minChunks: 2
        }
      }
    }
  },
  devtool: 'eval'
}