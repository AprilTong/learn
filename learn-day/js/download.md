一、最快捷的方法利用 HTML5 的 dowload 属性

```
        <a
            href="http://192.168.6.138:9111/247/%E5%A4%A9%E5%A4%A9%E6%96%97%E5%9C%B0%E4%B8%BB%EF%BC%88%E7%96%AF%E7%8B%82%E7%89%88%EF%BC%89_8.10.018_5006000909_2020%E5%B9%B405%E6%9C%8807%E6%97%A517%E6%97%B640%E5%88%86_2.06.006_365you_tfqdcykjttddz_2.06.006.txt"
            download
        >
            下载
        </a>
```

不足：

1. 对于动态内容，无能为力
2. 对于 pdf、txt 等文件会在浏览器直接打开，不会下载

二、通过 HTML5 Blob 实现文本信息文件下载

将文本或者字符串信息借助 Blob 转换成二进制，然后作为 a 标签的 href 属性，配合 dowload 属性，实现下载

```
// content是需要下载的文本或字符串， filename是指下载到系统中的文件名称
var dowload = function (content, fileName) {
    // 创建隐藏的可下载链接
    let eleLink = document.createElement('a')
    eleLink.dowload = filename
    eleLink.style.display = 'none'
    // 字符内容转变成blob地址
    let blob = new Blob([content])
    eleLink.href = URL.createObjectURL(blob)
    // 触发点击
    document.body.appendChild(eleLink)
    eleLink.click()
    // 然后移除
    document.body.removeChild(eleLink)
}
```

三、通过 base64 格式实现文件下载

```
var dowload = function(domImg, filename) {
    // 创建隐藏的可下载链接
    let eleLink = document.createElement('a')
    eleLink.dowload = filename
    eleLink.style.display = 'none'
    // 图片转base64格式
    let canvas = document.createElement('canvas)
    let context = canvas.getContext('2d')
    let width = domImg.naturalWidth
    let height = domImg.naturalHeight
    context.drawImage(domImg, 0, 0)
    // 如果是PNG图片，则canvas.toDataURL('image/jpeg')
    //触发点击
    document.body.appendChild(eleLink)
    eleLink.click()
    // 然后移除
    document.body.removeChild(eleLink)
}
```
