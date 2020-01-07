#### FileReader

允许 web 应用异步读取存储在用户计算机上的文件，使用 file 或队形指定要读取的文件或数据。

file 可以为：

- input 元素上选择文件后返回的 fileList 对象
- 拖放操作生成的 DataTransfer 对象
- 在 HTMLCanvasElement 上执行 mozgetAsFile()方法后返回结果

###### 构造函数

FileReader() 返回一个新构造的 FileReader

###### 属性方法

- FileReader.error
  只读，表示在读取文件时发生的错误

- FileReader.readyState
  只读，表示其状态，有三个值：

1. 0 EMPTY,表示还没有加载任何数据
2. 1 LOADING, 表示数据正在被加载
3. 2 DONE, 表示已经完成全部的读取请求

- FileReader.result
  只读，仅在读取操作完成后才有效

* FileReader.onabort 在读取操作被中断时才会触发
* FileReader.onerror 在读取操作发生错误时触发
* FileReader.onload 在读取操作完成时出发
* FileReader.onloadstart 在读取操作开始时触发
* FileReader.onloadend 在读取操作结束时触发
* FileReader.onprogress 在读取时触发

- FileReader.abort() 中止读取操作
- FileReader.readAsArrayBuffer() 开始读取内容,完成后 result 中保存的时读取文件的 ArrayBuffer 数据对象
- FileReader.readAsDataURL() 开始读取内容,完成后 result 中保存的时读取文件的内容，格式是 base64 格式的字符串
- FileReader.readAsText 开始读取内容,完成后 result 中保存的时读取文件的内容，格式字符串

###### 使用

上传图片后展示

```
changeImage(e) {
  this.imgUrl = ''
  this.videoUrl = ''
  let file = e.target.files[0]
  if (file.type.indexOf('image') < 0 && file.type.indexOf('video') < 0) {
    this.$message.error('只支持上传图片和视频哦');
  }
  this.file = file
  let reader = new FileReader()
  let that = this
  reader.readAsDataURL(file)
  reader.onload = function() {
    if (file.type.indexOf('image') >= 0) {
      that.imgUrl = this.result
    } else if (file.type.indexOf('video') >= 0) {
      that.videoUrl = this.result
    }
  }
}
```
