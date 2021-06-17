---
layout: post
title: Spring Framework 指南[02]
categories: [Spring]
description: Spring Wiki
keywords: spring, wiki
---
>  Spring 配置文件详解

[上文](/2021/06/16/Spring-Framework-Note-01/) 中的案例， 通过配置文件 spring.xml 配置了对象。 容器根据配置文件创建了对象，我们可以从容器中直接获取到这个对象，而不用手动创建。   
如果对象属性很简单，用容器生成好像更复杂了。但是当对象很复杂，甚至引用了别处的对象，我们就不得不多次创建对象并赋值来建立多个对象之间的关系。这时，容器的优点就凸显出来： 定义一次配置文件，然后在任何地方直接从容器中获取这个对象即可。另外，利用容器创建对象，对象的生命周期直接交付给容器管理，降低了管理难度。 

### DI 和 IOC 解释
### DI 和 IOC 解释
### DI 和 IOC 解释
### DI 和 IOC 解释