#### jenkins 简单使用

起因：项目处于开发阶段，需要经常发布到测试环境， 需要合并代码，npm run build,然后再通过 FileZilla，手动上传到服务器，重复这个过程，比较浪费时间。
过程：
于是去查询 jenkins 和 vue 的相关资料，打算自己本地搭建一个 jenkins。

1. 安装 jenkins [链接](https://www.jenkins.io/zh/doc/book/installing/)
2. 配置 jenkins [链接]（https://blog.csdn.net/liub37/article/details/83272398）

自己本地可以实现 jenkins 自动发布了，但是同事要怎么通过外网使用呢
本机 Jenkins 实现外网访问 [链接]（https://www.debugger.wiki/article/html/156309842079384）

##### 日常使用

1. jenkins
   启动
   brew services start jenkins
   则 http://localhost:8080/ 可以访问

    停止
    brew services stop jenkins

2. holer 服务（即外网可访问）
   在 holer-client/bin 目录下
   启动 sh startup.sh
   则 http://holer65530.wdom.net/ 可以访问

3. 使用 brew 安装配置 jenkinsip 可访问

修改两个路径下的 plist 配置。并重启
～/Library/LaunchAgents/homebrew.mxcl.jenkins.plist
/usr/local/opt/jenkins/homebrew.mxcl.jenkins.plist
将上面两个 plist 中的 httpListenAddress 后的 ip 地址，修改为本机 IP 或者 0.0.0.0
然后通过 brew services restart jenkins 重启 jenkins

4. 通过 ngrok 实现内网转发
   [链接]（http://www.ngrok.cc/_book/）
   [查看隧道 id](https://www.ngrok.cc/login)
   启动
    ```
     // 需要在相应目录下
    ./sunny clientid XXXXX
    ```
