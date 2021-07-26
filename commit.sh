# !/bin/zsh
# 确保脚本抛出遇到的错误
set -e
# 提交
read -p "提交分支：" branch
git pull origin $branch
git add -A
read -p "commit信息：" description
git commit -m $description
git push origin $branch
