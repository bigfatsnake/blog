#! /bin/bash

echo "推送至github..."
git add * && git commit -m 'post' && git push
echo "开始生成静态网页"
npx hexo g
echo "开始发布"
npx hexo clean && npx hexo deploy
echo "结束！"