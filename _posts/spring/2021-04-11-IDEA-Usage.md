---
layout: post
title: SSM 开发中 IDEA 中的坑 
categories: [IDEA]
description: some idea tips
keywords: idea, javaweb
---
> 记录一些问题和解决方法

### 前言  
在 idea 中开发 ssm 项目，我们编写的代码文件交由 idea 构建成 war 包放入 Tomcat 容器中, idea 的打包规则往往会导致一些小 BUG，但也足够头疼。

### 部署时默认不打包 lib 
一般我们会在项目根目录建立 lib 放 jar 包，也通过 idea 设置作用到项目了。可以正常编译、部署。但是访问时候，会报 ClassNotFoundException 异常，因为发布的时候没有带上 lib。以下为默认的部署配置，可以看到在 WEB-INF 目录下并没有 lib 库。 解决: 在右侧的 ssm (Project Library) 上选择 put into /WEB-INF/lib(idea version: 2021)

![nolib]({{site.url}}/assets/images/spring/nolib.jpg)


### 忽略非java文件  
当新建好新的 web 工程的时候，目录结构如图。IDEA 打包时，会忽略 java 文件夹下所有非 ```.java``` 的文件。 编写 Mybatis 的映射文件和接口时候。如 EmpMapper.xml 和 EmpMapper.java. 要求两个文件名相同，所属包也相同才可相互绑定。但将 EmpMapper.xml 放入 java 下的包中，部署时默认被忽略，访问时就会报错 没有匹配的映射文件。解决: 在 Resource 资源文件夹中存放 xml 文件。 如 com.abc.EmpMapper.java, 对应的就是 Resource/com/abc/EmpMapper.xml文件。

![ssmproject]({{site.url}}/assets/images/spring/ssmproject.jpg)
