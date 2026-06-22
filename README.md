# 个人主页(单页简历 / 名片)

一个纯 HTML + CSS + JS 的单页个人主页,可直接部署到 GitHub Pages,**零构建、零依赖**。

## ✨ 特性
- 单页设计:首屏 · 关于 · 技能 · 作品 · 联系
- 明暗主题切换(自动跟随系统,记忆选择)
- 响应式,手机端带汉堡菜单
- 滚动渐入动画

## 🚀 本地预览
直接用浏览器打开 `index.html` 即可;或用本地服务器(推荐,避免某些路径问题):
```bash
# 任选一种
python3 -m http.server 8000
npx serve .
```
然后访问 http://localhost:8000

## ✏️ 自定义内容
所有需要替换的地方在代码里都用 `✏️` 标注了,改这几个文件:
1. `index.html` —— 名字、简介、技能、作品、联系方式
2. `assets/avatar.jpg` —— 放一张你的照片,然后在 `css/style.css` 里按注释取消头像背景图(可选)
3. `index.html` 顶部 `<title>` 和 `<meta description>` —— 影响 SEO 和分享卡片

## 🌐 部署到 GitHub Pages
1. 在 GitHub 新建仓库。
   - 想用免费域名 `用户名.github.io` → 仓库名必须叫 **`你的GitHub用户名.github.io`**
   - 否则任意名字(如 `personal-website`)→ 访问地址会是 `用户名.github.io/personal-website`
2. 把代码推上去:
   ```bash
   git init
   git add .
   git commit -m "init: 个人主页"
   git branch -M main
   git remote add origin https://github.com/你的用户名/仓库名.git
   git push -u origin main
   ```
3. 仓库 **Settings → Pages → Source** 选 `Deploy from a branch` → 分支 `main` / `(root)` → 保存。
4. 等约 1 分钟,访问页面顶部给出的网址即可。

## 🔧 用 Claude Code 继续迭代
推到 GitHub 后,直接在 Claude Code 里用自然语言让我改,例如:
- "把作品区改成两列、加一个悬停效果"
- "加一个博客区块"
- "帮我换成中英双语"
改完 `git push` 后,GitHub Pages 会自动更新。
