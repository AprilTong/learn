#### FormData

FormData 提供了表单数据的键值对，经过其的数据可以通过 XMLHttpRequest 向后端发送，编码类型需要被设为‘multipart/form-data’.

- 构造函数
  FormData() 创建一个新的 FormData 对象

- 方法
1. FormData.append()
  向 FormData 中添加新的属性值，如果属性存在，也不会被覆盖，会新增，属性不存在则会新增一个属性值；

2. FormData.delete()
从 FormData 对象中删除一个键值对；

3. FormData.entries()
返回一个包含所有键值对的 iterator 对象

4. FormData.get()
返回给定 key 关联的第一个值

5. FormData.getAll()
返回给定 key 关联的所有值

6. FormData.has()
判断 FormData 对象是否含有某些键，返回一个布尔值

7. FormData.keys()
返回 FormData 对像所有键的 iterator 对象

8. FormData.values()
返回 FormData 对像所有值的 iterator 对象

9. FormData.set()
设置 FormData 对象的属性值，如果属性本来存在则会覆盖

```
let testData = new FormData()
testData.append('name', 'tzr')
testData.append('age', '22')
testData.append('age', '23')

testData.get('age') // ['22']
testData.getAll('age') // ['22', '23']

// 所有的iterator对象可以通过for...of访问
for (let p of testData.keys()) {
  console.log(p)
}
// 会打印出来name age age
testData.set('age', '12')
testData.getAll('age') // ['12']
```

#### 通过 FormData 上传文件

```
<form>
    <input type="text" value="" v-model="name" placeholder="请输入用户名">
    <input type="text" value="" v-model="age" placeholder="请输入年龄">
    <input type="file" @change="getFile($event)">
    <button @click="submitForm($event)">提交</button>
</form>
	data() {
    return {
      name: '',
      age: '',
      file: ''
    }
  },
  methods: {
    getFile(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },
    submitForm(event) {
      event.preventDefault();
      let formData = new FormData();
      formData.append('name', this.name);
      formData.append('age', this.age);
      formData.append('file', this.file);

      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }

      this.$http.post('http://127.0.0.1:8081/upload', formData, config).then(function (response) {
        if (response.status === 200) {
          console.log(response.data);
        }
      })
    }
  }
```

#### HTTP header中的请求头Content-Type类型

- application/x-www-form-urlencoded
浏览器的原生form表单，提交的数据按照key1=val1&key2=val2 的方式进行编码

- multipart/form-data
该数据格式需要用post方法提交，常用于上传文件

- application/json
消息主体是序列化的json字符串

- text/xml
XML 作为编码方式的远程调用规范
