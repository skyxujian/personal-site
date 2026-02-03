# webhall.xyz site snapshot (phase save)

Chinese name updated: 徐健 -> 徐键

## Deploy (one-time) on VPS (Nginx)

Upload this zip to VPS, then:

```bash
sudo mkdir -p /var/www/xujian-site
cd /var/www/xujian-site
sudo rm -rf ./*
sudo unzip -o webhall-site-snapshot.zip -d /var/www/xujian-site
sudo nginx -t && sudo systemctl reload nginx
```

If your Nginx root is /var/www/html, copy:

```bash
sudo rm -rf /var/www/html
sudo mkdir -p /var/www/html
sudo cp -r /var/www/xujian-site/* /var/www/html/
sudo nginx -t && sudo systemctl reload nginx
```

---

## 维护速查表（最常用）

| 要做的事 | 操作位置 |
|---------|----------|
| 新增文章 | `/blog/posts/` |
| 修改旧文章 | `/blog/posts/xxx.html` |
| 首页新增文章条目 | `/index.html` |
| 更换首页横幅 | `/assets/img/banner.jpg` |
| 添加文章配图 | `/assets/img/` |
| 调整字体 / 行距 / 颜色 | `/assets/css/style.css` |
| 修改导航文字 | `/index.html` |

---

## 新增文章流程

1. 复制一篇已有文章作为模板  

2. 修改内容：
- `<title>`
- `<h1>`
- 日期
- 正文

3. 保存即可（无需“发布”操作）

---

## 图片使用约定

- 所有图片统一放在：
