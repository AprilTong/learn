##### 常用的 linux 命令

-   ls :查看目录内容列表

*   rm :删除文件/目录

```
rm [options] [name...]
```

常用的 options

1. -i: 删除前逐一询问确认
2. -r/-R: 递归处理，将指定目录下的所有文件与子目录一并处理‘
3. -f: 强制删除文件或者目录

-   tail : 查看文件内容

```
tail [options][file]
```

常用 options：

1. -f 循环读取

-   mv :文件移动/改名

```
mv [options] source dest
```

常用 options：

1. -i 指定目录已有同名文件，则先询问是否覆盖旧文件
2. -f 在 mv 操作时覆盖已有的目标文件时不给任何提示

将源文件名改为目标文件名

```
mv 文件名 文件
```

将文件移动到目标目录

```
mv 文件名 目录名
```

报错

```
mv 目录名 文件名
```

-   touch :新建文件
    用于修改文件或者目录文件或者目录的时间属性，包括存取时间和更改时间。若文件不存在，系统回建立一个新的文件。

-   which :查找文件
    which 命令会在环境变量\$path\设置的目录里查找符合文件的文件

```
which svn
/usr/bin/svn
```

-   cp :复制文件/目录

常用 options:

1. -f :覆盖已经存在的目标文件而不给出提示
2. -r :若给出的源文件是一个目录文件，此时将复制该目录下所有的子目录的文件

-   cd :切换工作目录
    可以为绝对路径或者相对路径

-   pwd :显示工作目录

-   mkdir :创建目录
    常见 options:

1. -p 确保目录结构存在，不存在的就建一个

-   rmkdir 删除空目录
    常见 options：
    -p 当子目录被删除后使它也成为空目录的化，则顺便一并删除

-   cat 查看文件内容

*   ping 检测主机
    执行 ping 命令会使用 ICMP 传输协议
    常用 options：

1. -c 设置完成请求的次数

-   telnet :端口是否可以访问

*   grep :查找关键字

*   ps :显示当前进程状态
    常用 options：

1. -e 显示所有进程
2. -f 全格式

-   启动 jenkins
    brew services start jenkins
-   man
-   pbcopy

3. 安装稳定版本
   npm install html-webpack-plugin@next
