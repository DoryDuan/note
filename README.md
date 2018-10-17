# git
环境配置：
	git config --global user.name "humingx"
    git config --global user.email "humingx@yeah.net"
    ssh-keygen -t rsa -C "humingx@yeah.net"
    ~/.ssh/id_rsa.pub文件中复制到git的ssh key中，以添加自己的权限


远程到本地：
	git clone
	git add 
	git commit 
	git push


添加本地仓库到远程：
	远程创建一个仓库
	进入需要和远程连接的本地文件夹
	git init
	git add *
	git commit -m "first commit"
	git remote add origin git@github.com:DoryDuan/test1.git  #本地仓库和远程仓库连接
	git push -u origin master  #推送


分支：
	git branch b3 #创建b3分支
	git checkout b3 #切换到b3分支
	git branch  #查看所有分支，并且查看当前所在分支
	git push origin local_branch:remote_branch  #本地分支推送到远程分支
	git pull origin next:master		#取回origin主机的next分支，与本地的master分支合并，需要写成下面这样。
	git pull origin next  #如果远程分支是与当前分支合并，则冒号后面的部分可以省略。
	git fetch：相当于是从远程获取最新版本到本地，不会自动merge
	git pull：相当于是从远程获取最新版本并merge到本地

	git push origin b3 # push到远程分支
	git merge b3 #把b3merge到当前分支

	git init # 初始化，创建本地仓库，.git目录，有该本地仓库的信息
	git remote add origin git@github.com:DoryDuan/test1.git  # 把本地仓库和远程仓库联系起来，.git目录更新，会记录远程仓库的信息。


#  常用linux命令
	
	cd  cd ../
	pwd
	ls 
	ls -al
	history #显示所有执行的mingling
	!567   #执行第567个命令
	rm -fr #删除文件夹以及文件夹下所有的东东
	
# axios

[axios使用](http://blog.acohome.cn/2017/09/26/axios-10-axioshan-shu-de-shi-yong-zi-shi/)

[axios拦截器的使用](https://blog.csdn.net/qq_36207983/article/details/78881376)

[axios的传参](https://www.jianshu.com/p/b22d03dfe006)

方法一：
	    headers:{'Content-Type':'application/x-www-form-urlencoded'};
	    data = Qs.stringify(data);
	    
方法二：
	data = qs.stringify(data, {arrayFormat: 'brackets'})
	
# 跨域
[JSONP知识--mui.getJSONP()实现Web跨域](http://ask.dcloud.net.cn/article/833)
