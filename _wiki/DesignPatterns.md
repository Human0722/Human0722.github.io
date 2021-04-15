---
layout: wiki
title:  Design Patterns
categories: [设计模式]
description: Design Patterns 
keywords: Design Patterns
---

#### 单例模式
> 一个类只有一个实例对象.   


实现单例模式有三个关键点: 
 - 私有化构造器
 - 静态私有本类类型的属性值
 - 静态公有返回本类类型实例的方法

```java
public class Person {
    private Person(){}      
    private Person person;
    public static Person getSingletonInstance() {
        if(person == null)
            person = new Person();
        return person;
    }
    // other attribute
}
```  
如上定义后，以为构造器被私有化，就无法通过 ```new``` 来构造对象了。  
```java
Person person = new Person();  //error
```  
但是可以使用静态方法获取对象，无论使用这个方法获取多少次对象，返回的都是同一个对象。  
```java
Person person = Person.getInstance();
Person person1 = Person.getInstance();
person.equals(person1);         // true
```

#### 工厂模式

