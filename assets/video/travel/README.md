# 视频占位文件

这个文件夹用于存放旅行视频。由于视频文件较大，这里提供占位符。

## 建议的视频文件：
- yunnan-mountain.mp4 - 玉龙雪山日出延时摄影
- chengdu-hotpot.mp4 - 成都火锅店内氛围记录
- guilin-river.mp4 - 漓江竹筏漂流记录

## 上传视频的方式：
1. 将视频文件复制到此目录
2. 在HTML文件中引用：`/assets/video/travel/视频文件名.mp4`
3. 建议视频格式：MP4 (H.264编码)
4. 建议分辨率：1920x1080 或 1280x720
5. 建议大小：每个视频不超过50MB

## 视频压缩建议：
如果视频文件太大，可以使用以下工具压缩：
- HandBrake (免费，跨平台)
- FFmpeg (命令行工具)
- 在线工具：cloudconvert.com

示例FFmpeg压缩命令：
```bash
ffmpeg -i input.mp4 -vcodec h264 -acodec aac -b:v 2M -b:a 128k output.mp4
```
