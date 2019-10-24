---
layout: post
title: Youtube视频下载转音频
categories: [Tool]
description: 
keywords: 小工具
---

> 下载 Youtube 视频音乐

环境准备：
- 梯子
- youtube-dl
- ffmpeg

### 查看梯子提供的代理端口
看出本地 ```socks5``` 代理端口是： 1086。
![proxy]({{site.url}}/assets/images/tool/socksport.jpg)
### 列出各种清晰度
记住选择的清晰度前面的数字。 ```-F``` 表示列出所有清晰度。 ```--proxy socks5://127.0.0.1:1086``` 命令指定从代理下载。
![list]({{site.url}}/assets/images/tool/youtube-list.jpg)
### 下载这个视频
用 ```-f + 数字``` 下载上面选择的清晰度。
![list]({{site.url}}/assets/images/tool/youtube-download.jpg)
### 提取音频编码
``` ffmpeg``` 工具 ```-i``` 指定输入文件, ```-f``` 指定输出格式, 后跟文件名。
![convert]({{site.url}}/assets/images/tool/youtube-convert.jpg)
### 存到网易云音乐云盘
网易云盘``` 40G```足够放很多歌了。
![music]({{site.url}}/assets/images/tool/youtube-music.jpg)