---
layout: post
title: Java SE
categories: [Java]
description: Learn Java Programming Language
keywords: java se

---

> 来点Java~

## 面向对象编程(部分)

#### 继承  

- Java 只允许单继承;
- Protected 允许子类访问父类的字段和方法;
- 子类的构造方法首先隐式调用 ```super()```;如果父类构造函数有形参，那么需要显示调用 ```super(参数)```  为父类构造函数提供参数, 否则会报错。
- 可以安全地向上转型为更抽象的类型；向下强制转型，借助 ```instanceof``` 判断；
- 子类和父类的关系是 is, has关系不能用继承。
- 具体使用 ``` class Stu extends Person{}```

#### 多态  

##### override 和 overload

Overload: “重载”, 子类中定义了相同方法名，但是签名与父类不相同的方法。

> 方法签名包括:函数名、参数列表、返回值类型 .  

  Override: 子类中定义了一个与父类方法签名完全相同的方法,覆盖了父类方法。 

>  ```@override``` 可以让编译器检查是否进行了正确的复写。签名与父类方法不同时，不加则为重载，加了则会报错。   

##### 多态

> Java的实例方法调用是运行的实际类型的动态调用,而非变量的声明类型。    

```java
public class main{
  public static void main(String[] args) {
    	Income[] incomes = new Income[] {
        new Income(3000);
        new Salary(7000);
        newe StateCouncilSpecialAllowance(15000);
      }
    	double total = 0;
    	for(Income income : incomes) {
        total = total + income.getTax();
      }
    	System.out.println("Total Tax is: " + total);
  }
  
  class Income {
    protected double income;
    
    public Income(double income) {
      this.income = income;
    }
    
    public double getTax() {
      return income * 0.1;
    }
  }
  
  class Salary extends Income{
    public Salary(double income) {
      super(income);
    }
    
    @Override
    public double getTax() {
      if(income < 5000) {
        return 0;
      }
      return (income - 5000) * 0.2;
    }
  }
  
  class StateCouncilSpecialAllowance extends Income {
    public StateCouncilSpecialAllowance(double income) {
      super(income);
    }
    
    @Override
    public double getTax() {
      return 0;
    }
  }
}  
```

父类的方法被多个子类重写时,调用这个方法，不同的子类表现出独有的特性。 

##### final 

> final 修饰的类不能被继承。final修饰的方法不能被重写。

##### super

> 调用被子类重写的父类方法,用  ```super.method()```



#### 抽象类

- 通过 ```abstract``` 定义抽象类 (```abstract calss Hello```)和抽象方法(```public abstract void hello();```),含有抽象方法的类必须被定义成抽象类。
- 继承 抽象类，要么实现其中所有方法，要么本身还是抽象类。

#### 接口

> 一个抽象类如果没有字段， 就可以把这个抽象类写成接口： ```interface```

```java
interface Person {
  void run();
  String getName();
}

class Doctor implements Person {
  
}
```

- Java类可以实现多个接口; 接口之间可以有继承的关系
- 接口是数据类型,可以用于定义变量。
- 接口所有的方法都是抽象方法, 默认为 ``` public abstract ``` .可以省略。
- 接口可以定义 ```default``` 方法，含函数体。default 方法不用修改所有子类。  

#### 静态方法  

- 静态方法是所有实例共享的字段,只能通过类名访问静态方法。

```java
class Person {
  public static int age;
  public static void mai(String[] args){}
}
```

##### 接口的静态字段

> ```interface``` 不能定义实例字段,但是可以有静态字段。静态字段默认为 ```public static``` 且用必须用 final 修饰，这些修饰可以省去。

```java
public interface Person {
  public static final int MALE = 1;
  int FEMAL = 2;
}
```



## Java核心类

### 字符串和编码  

```Java
String s1 = "Hello";
String s2 = new String(new char[]{'H','e','l','l','o'});
```

一些常用函数:  

```java
s1.equals(s2);			// 判断是否相等, == 用作判断是否引用同一变量。
s1.contains(s2);		// 是否包含
"China".indexOf("i");	//2
"Chill".lastindexOf("l");	//4
"China".startWith("Ch");	//true

"Hello".substring(2);	//"llo"
"Hello".substring(2, 4);	//ll [2,4)
"Hello".substring("Hello".indexOf("e"));	//ello

”\tHello\r\n".trim();		//"Hello"
"\u3000Hello".strip();	//"Hello"

" ".isEmpty();	//false, length !=0
" ".isBlank();	//true

s.replace(search, replace);
s.replaceAll("[\\,\\;\s]+");			//正则替换

String[] ss = "A,B,C".split(",");
String s = String.join(",", ss);

String.valueOf(123);		//转Stirng
Integer.parseInt("123");	//String转int
Boolean.parseBoolean("true");	//String转boolean
Integer.getInteger("java.version");	//获悉系统变量

char[] cs = "hello".toCharArray();
String s = new String(cs);

byte[] b1 = "Hello".getBytes(StandardCharsets.UTF_8);
String s1 = new String(b1, StandardCharsets.UTF_8);
```



