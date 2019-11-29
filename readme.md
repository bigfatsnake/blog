## 写作说明

### 参考

> [markdown 语法](https://www.runoob.com/markdown/md-tutorial.html)

> [hexo网页生成](https://hexo.io/zh-cn/docs/)

#### 创建文章

vscode： 使用快捷键 control+shift+\` 创建终端，输入 hexo new [title] 比如 `hexo new "这是一个标题"`，文件会放在 `source/_posts/这是一个标题.md` 下面

#### 写文章

使用markdown写文章，其他可以参考 [hexo写文章](https://hexo.io/zh-cn/docs/writing)

#### 发布

还是在终端里，依次输入

``` bash
git add *
git commit -m 'post'
git push
```