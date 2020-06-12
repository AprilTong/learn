### svn 使用

1. svn 简介
   Apache Subversion 缩写为 svn，是一个开发源代码的版本控制系统。
   所用的术语有：

-   仓库
-   主干
-   标签
-   分支
-   工作副本
-   提交更改

2. svn 生命周期

-   创建版本库（create 操作）
-   检出 （checkout）
-   更新 （update）
-   变更（add commmit rename）
-   复查变化 （status diff）
-   修复错误 （revert）
-   解决冲突 （revert merge resolve）
-   提交更改 （commit）

3. 检出(从版本库创建一个新的工作副本)

```
svn checkout http://svn.server.com/svn/project_repo --username=tom --password=123
```

查看版本库信息

```
svn info
```

4. 执行修改

```
svn status
// 文件名前面显示？，不知道如何处理这些文件
// 文件前会显示A，表示文件已经添加到了待变更列表
// 文件前会显示M，表示文件已经被修改
```

```
svn add
```

```
svn add --force .
// 除去忽略的文件，把其他文件添加到仓库
```

```
svn commit -m '注释信息'
// 把文件添加到版本库中
```

5. 检查更改

```
svn log
// 查看日志
```

```
svn diff
// 查看版本间的差异
```

6. 更新过程

```
svn update
// 文件前会显示G，表示文件是被合并过的
// 文件前会显示C，表示文件是存在冲突的
```

7. 修复错误

```
svn revert
// 不仅仅可恢复单个文件，也可恢复整个目录，用-R命令
```

```
svn up
// 撤销到之前的版本
```

8. 解决冲突

```
svn resolve --accept=working
// 通知冲突已经解决
```

9. svn 标签

```
svn copy --revision=4 trunk/tags/标签名
//  创建一个标签
```

10. svn 分支

```
svn copy trunk branchs/分支名
//创建新的分支
```

```
cd branchs/分支名/
// 切换分支
```

```
svn co 仓库地址/branches/分支名
//获得分支
```

合并主干上的最新代码到分支上

```
cd br_feature001
svn merge http://svn_server/xxx_repository/trunk
```

删除分支或者标签

```
svn rm http://svn_server/xxx_repository/branches/br_feature001
svn rm http://svn_server/xxx_repository/tags/release-1.0
```

11.忽略文件

```
svn propset svn:ignore node_modules .
svn add * --no-ignore
svn commit -m init

```

查看忽略文件

```
svn propget svn:ignore
```

忽略多个文件夹

```
svn propset svn:ignore ".svnignore
```

回车之后会出现大于号，把文件名分别写上最后加上双引号空格点斜杠结束

svn 切换仓库

```
svn switch --relocate (Old Repository Root) (New Repository Root)
```

12. 提交失败【svn: E155010】

```
Commit failed with error
0 files committed, 1948 files failed to commit
svn: E155010: Commit failed (details follow):
svn: E155010: '提交的文件' is scheduled for addition, but is missing
```

原因：这个文件之前加到了 svn，但还没提交，就被删除
解决：

```
svn revert 出现问题的文件 --depth infinity
```

13. 提交失败

```
svn: E155015:
```

原因：出现冲突
解决：查看警告信息提示冲突的文件

```
svn resolved 【文件名】
```
