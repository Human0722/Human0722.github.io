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
- IOC(Inversion of Controle): 反转控制  
	控制权反转,传统从容器中获取资源的方式，都是组件主动向容器申请。控制权反转后，改由容器主动将资源推送给需要的组件，开发者只需要提供接受资源的方式即可。
- DI(Dependency Injection): 依赖注入
	IOC的一种具体表述方式，即组件以一些预先定义好的方式 (e.g:setter) 接受来自容器的资源注入。  
> IOC 是一种思想，而 DI 是一种具体的实现。  

### Spring 中的容器 
> IOC容器的底层实质上是一个对象工厂, Spring 提供了两种实现容器的接口  

- BeanFactory: Spring 自用IOC。  
- ApplicationContext: BeanFactory 的子接口，供开发者使用。  
- 容器继承树:   

```txt
                               ┌───────────────┐
                               │  BeanFactory  │
                               └──────┬────────┘
                                      │
                                      │
                                      │
                             ┌────────▼───────────┐
           ┌─────────────────┤ ApplicationContext │
           │                 └───┬─────────┬──────┘
           │                     │         │
┌──────────┴────◄──────────────┐ │         │
│ConfigurableApplicationContext│ │         │
└──────────────────────────────┘ │         │                 Interface
                                 │         │
 ────────────────────────────────┼─────────┼───────────────────────────
                                 │         │
                                 │         │                 Class
                                 │         │
                                 │         │
      ┌──────────────────────────▼───┐ ┌───▼───────────────────────────┐
      │ClassPathXmlApplicationContext│ │FileSystemXmlApplicationContext│
      └──────────────────────────────┘ └───────────────────────────────┘

---> ConfigurableApplicationContext 接口: ApplicationContext 拓展接口，新增了
		refresh()、close() 等功能。
---> ClassPathXmlApplicationContext: 根据类路径下 Xml 文件创建容器环境。
---> FilesSystemXmlApplilcationContext: 根据文件系统中 Xml 文件创建容器环境。
```
###  从容器中获取资源的两种方式  
> ApplicationContext ioc   

- 通过 id 获取  
```java
Student stu = (Student)ioc.getBean("student");
```
- 通过类型获取  
```java
Student stu = (Student)ioc.getBeanById(Student.class);
Student stu = (Student)ioc.getBean("student", Student.class);
```
通过类型获取要保证容器中该类型的实例只有一个，否则会抛异常。若一个类型有多个实例，只能通过 id 来获取。  

### 给 Bean 属性赋值  

#### 不同的赋值方式  
- 通过 Bean 的 setter 方法赋值 : 通过下面的赋值方式，需要 Bean 提供 setAge() 方法。

```xml
<bean id="student" class="Student">
      <property name="age" value="22">
</bean>
```
- 通过 Bean 的 constructor 方法赋值 : 需要 Bean 构造器属性为 public .   

```xml
// 按照参数位置索引指定
<bean id="student" class="Student">
      <constructor-arg value="22" index="0">
</bean>

// 按照类型自动装载参数
<bean id="student" class="Student">
      <constructor-arg value="22" type="java.lang.Integer">
</bean>
```  
- p名称空间 : 行内简化写法  

```xml
<bean id="stu" class="Student" p:age="22" />
```

#### 各种类型的赋值  
> 给 Bean 的不同类型成员属性赋值  

- 字面量 : 表示字符串  

```xml
<bean id="student" class="Student" p:name="randy" />
```

- null :   

```xml
<bean id="student" class="Student" p:name="#{null}" />
```  

- Bean 级联属性赋值
> 给 Bean 引用的对象直接赋值并装载 

```xml
<bean id="student" class="Student">
      <property name="birth.year" value="2000">
</bean>
```

- 引用外部声明的 bean  

```xml
<bean name="date" class="Date">
<bean name="birth" ref="date">
```

- 引用内部定义的 bean  

```xml
<bean id="student" class="Student">
      <property name="birth">
            <bean class="Date" p:year="2000">
      </property>
</bean>
```

#### 集合类型的赋值  

- list  

```xml
<bean class="Student">
      <property name="subjects">
            <list>
                  <value>历史<value>
            </list>
      <property>
      <property name="books">
            <list>
                  <ref bean="book1"/>
                  <ref bean="book2"/>
            </list>
      </property>
</bean>
```  

- set  

```xml
<bean>
      <property name="subjects">
            <set>
                  <value>Math</value>
                  <value>Science</value>
            </set>
      </property>
</bean>
```  

- map  

```xml
<bean>
      <property name="score">
            <map>
                  <entry> 
                        <key>
                              <value>Math</value>
                        </key>
                        <ref bean="33" />
                  </entry>
            </map>
      </property>
</bean>
```  

### Bean 的分类
#### 普通 bean  
从容器中获取这个 Bean，返回的就是 Bean 类型的就是普通 Bean.  
####  FactoryBean  
从容器中获取工厂 Bean，得到的资源是这个工厂 Bean getObject() 返回的 Bean 。 可以通过实现 `org.springframework.beans.factory.FactoryBean` 来定义一个 FactoryBean.

### Bean 的声命周期  
> Bean 通过 scope 这个属性来设置 bean 的作用域   

```xml
<bean class="Student" scope="protorype" />
```

| 值 |说明 |
| :-----:| :----: | 
|  singleton | IOC容器中只有一个 Bean 实例， Bean 以单例模式存在 |
| prototype| 每次 getBean() 时都会返回一个新的实例 |
| request  | 每次 Http 都会创建一个 Bean, 仅适用于 WebApplicationContext 环境|
| session  | 同一个 HTTP Session 共享一个 Bean， 仅适用于 WebApplicationContext 环境|  

> 默认的 scope 是 singleton.  


### 引用外部文件赋值  
> 读取 .properties 配置文件中的值为 Bean 赋值  

**xx.properties:**  

```properties
info.name = randy
```   

**spring.xml:**  

```xml
<context:property-placeholder location="classpath:xx.properties"/>
<bean>
      <property name="name" value="${info.name}"/>
</bean>
```  

### 自动装配  

**什么是自动装配**  
非自动装配，就是上文中通过 xml 配置文件明确指定 bean 的属性值的方式。 自动装配就是不需要手动指定， Spring 将容器中匹配的属性自动注入到 bean 中。  

实现自动装配的步骤:  
1. 在容器中生成对象  
2. 在指定的位置注入这些对象  

将一个 Bean 放入到容器中，首先要在 Bean 上加上注解让 Spring 容器来管理这些 Bean.  

| 注解 |说明 |
| :-----:| :----: | 
|  @Component| 标识一个受 Spring 容器管理的普通组件|
|  @Repository| 标识一个受 Spring 容器管理的持久化层组件|



#### 在容器中生成对象