## 写作说明

### 参考

> [markdown 语法](https://www.runoob.com/markdown/md-tutorial.html)

> [hexo网页生成](https://hexo.io/zh-cn/docs/)

#### 创建文章

vscode： 使用快捷键 control+shift+\`（数字键1之前的键） 创建终端，输入 npx hexo new [title（最好加双引号）] 比如 `npx hexo new "这是一个标题"`，文件会放在 `source/_posts/这是一个标题.md` 下面，打开它

#### 写文章

最下面另起一行，开始写题目，如#### 5000题数字推理……。
使用markdown写文章，其他可以参考 [hexo写文章](https://hexo.io/zh-cn/docs/writing)

#### 插入图片

生成文章的同时还会生成一个与文章同名的目录，把图片拷至该目录下，然后在文章内复制如下代码即可插入图片 `{% asset_img [数字推理步骤.png()这个是图片文件名] [数字推理步骤(图片备注)] %}`

#### 本地预览网页

终端输入命令 `npx hexo s` 开启本地服务器，然后 `Command+点击链接` 或者在浏览器直接输入 `http://localhost:4000` 访问预览

#### 发布

还是在终端里，依次输入

``` bash
bash ./publish.sh
```

#### 同步
他处vs修改后，同步到这台电脑VS
git pull