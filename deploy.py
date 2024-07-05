from git import Repo
import os

# 获取代码文件的绝对路径
dirfile = os.path.abspath('')

# 初始化Repo对象
repo = Repo(dirfile)

# 获取git命令对象
g = repo.git

# 添加所有更改到暂存区
g.add("--all")

# 检查工作区是否有更改
if repo.is_dirty(untracked_files=True):
    g.commit("-m", "auto update")
else:
    print("No changes to commit.")

# 拉取最新代码
g.pull()

# 推送本地提交到远程仓库
g.push()

print("Successful push!")