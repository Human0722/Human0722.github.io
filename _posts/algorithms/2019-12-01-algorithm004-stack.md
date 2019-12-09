---
layout: post
title: 数据结构与算法【004】
categories: [算法]
description: 来点算法
keywords: 算法, 数据结构
---

> 栈 (Stack)

栈是一种先进后出的数据结构(FILO)。 只能在栈的一段进行增加和删除操作，可以操作的这一端称为 ```栈顶(top)```， 与之相对的另一端称为 ```栈底```。栈常应用于 子程序的调用、递归的调用、逆波兰表达式等等。 可以通过数组和链表实现栈的结构。

### 通过数组实现栈  

数组栈类应该包含的属性及意义。

prop | desc
-|-
maxSize | 队列的最大长度
Stack   | 队列数组
cursor  | 辅助指针，指向栈顶, default: -1

数组栈类成员方法列表：  

func | core | desc
-|-|-
boolean isFull() | (cursor == maxSize -1) | 辅助指针指向最后一个元素为满
boolean isEmpty() | (curosr == -1)?			| cursor默认值为-1，也是为空的状态值
void push(val)		| stack[++cursor] = val | 指针后移后操作后移的位置，要先判断是否为满
val	pop()		| return stack[cursor--]	| 返回值后，指针前移
void list()		|	stack[cursorR--]		| 利用额外辅助指针遍历

附上栈的数组实现代码:

```java
class Stack {
    private int maxSize;
    private int[] stack;
    private int cursor;

    public Stack(int size) {
        this.maxSize = size;
        this.stack = new int[maxSize];
        this.cursor = -1;
    }

    public boolean isFull() {
        return cursor == maxSize - 1;
    }

    public boolean isEmpty() {
        return cursor == -1;
    }

    public void push(int val) {
        if(isFull()) {
            System.out.println("Stack is full!");
            return;
        }
        stack[++cursor] = val;
    }

    public int pop() {
        if(isEmpty()) {
            throw new RuntimeException("Stack is empty.");
        }
        return stack[cursor--];
    }

    public void list() {
        if(isEmpty()) {
            System.out.println("Stack is empty.");
            return;
        }
        int cursorR = cursor;
        while(true) {
            if(cursorR == -1) {
                break;
            }
            System.out.println(stack[cursorR--]);
        }
    }
}
``` 

### 通过 链表实现栈

链表栈应有的属性值:

prop | desc
-|-
a | a

链表栈应有的成员方法:



```java
class ListStack {
    private StackNode cursor = new StackNode(0);
    private int maxSize;

    public ListStack(int size) {
        this.maxSize = size;
    }

    public  boolean isEmpty() {
        return cursor.getNext() == null;
    }

    public boolean isFull() {
        return cursor.getNo() == this.maxSize;
    }

    public void push(int val) {
        if(isFull()) {
            System.out.println("Stack is Full");
            return;
        }
        StackNode node = new StackNode(cursor.getNo() + 1);
        node.setVal(val);
        node.setNext(cursor);
        cursor = node;
    }

    public int pop() {
        if(isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        int tmp = cursor.getVal();
        cursor = cursor.getNext();
        return tmp;
    }

    public void list()
    {
        if(isEmpty()){
            System.out.println("Stack is empty");
            return;
        }

        StackNode fakeCursor = cursor;
        while(true) {

            if(fakeCursor.getNext() == null) {
                break;
            }
            System.out.println(fakeCursor.getVal());
            fakeCursor = fakeCursor.getNext();
        }
    }
}


class StackNode {
    private int no;
    private int val;
    private StackNode next;



    public StackNode(int no) {
        this.no = no;
        this.val = val;
    }

    public void setVal(int val) {
        this.val = val;
    }

    public int getVal() {
        return this.val;
    }

    public int getNo() {
        return this.no;
    }

    public void setNext(StackNode node) {
        this.next = node;
    }

    public StackNode getNext() {
        return this.next;
    }
}
```


### 通过中缀表达式来计算多项式
通过栈的数据结构可以实现计算类似于 ``` 3+20*4-6/3``` 这样的表达式。中缀表达式的操作步骤如下:

- 首先，准备两个栈，一个数栈用于存放多项式中的数,另一个存放多项式中的操作符。
- 从表达式左侧挨个字符读入数据, 如果是数则直接入数栈。
- 如果是读取的字符是操作符，当操作栈为空时直接入栈； 当不为空时，1.当读取的操作符的优先级大于操作栈栈顶操作符的优先级，则直接入栈， 2. 当读取的操作符优先级小于或者等于栈顶的操作符优先级, 则将栈顶的操作符弹出记为 ```oper``` , 再按顺序从数栈中弹出 ```num1``` 和 ```num2```（注意顺序，先弹出的是 num1, 紧接着是num2)， 然后计算 ```num2 oper num1``` 的结果入数栈，然后再将操作符入操作栈，此时不用再比较操作符优先级问题。( 但是也可以继续循环操作，直到操作栈栈顶优先级小于操作符优先级，这种做法会节省栈的容量).
- 当表达式读取完毕, 数栈和操作栈会有一些数据。循环从操作栈中取运算符，计算数栈栈顶的两个数，直到操作栈为空时计算结束。
![proxy]({{site.url}}/assets/images/algorithm/stackCal01.jpg)  

利用栈直接计算中缀表达式:  


```java
public class Calcltor {
    public static void main(String[] argv) {
        String expression = "1+3*2+5-1";
        Stack numStack = new Stack(10);
        Stack opeStack = new Stack(10);
        int num1 = 0;
        int num2 = 0;
        char ch;
        int oper;	// 容易写成 char
        int index = 0;
        String number;	// 非个位数存储变量

        while(true) {
            ch = expression.substring(index, index+1).charAt(0);

            if(numStack.isOper(ch)) {
                // 如果字符是操作符
                if(opeStack.isEmpty()) {
                    opeStack.push(ch);
                } else {
                    if(opeStack.priority(ch) <= opeStack.priority(opeStack.peek())) {
                        num1 = numStack.pop();
                        num2 = numStack.pop();
                        oper =  opeStack.pop();
                        numStack.push(numStack.calc(num1, num2, oper));
                    }

                    opeStack.push(ch);

                }
            } else {
                // 如果是数字， 对多位数进行处理
                // numStack.push(ch - 48); 如果计算的是个位数，用这一行即可
                number += ch;
                if(index == expression.length() -1) {
                	// 如果是最后一个数
                	numStack.push(Integer.parseInt(number));
                } else {

	                if(opeStack.isOper(expression.substring(index+1, index + 2).charAt(0))) {
	                	numStack.push(Integer.parseInt(number));
	                	number = "";
	                }
                }

            }
            if(index == expression.length() -1) {
                break;
            }
            index++;
        }

        // 处理栈内数据
        while(true) {
            if(opeStack.isEmpty()) {
                break;
            }
            num1 = numStack.pop();
            num2 = numStack.pop();
            oper = opeStack.pop();
            numStack.push(numStack.calc(num1, num2, oper));
        }

        System.out.println(expression + "=" + numStack.pop());
    }
}


class Stack {
    private int maxSize;
    private int[] stack;
    private int cursor;

    public Stack(int size) {
        this.maxSize = size;
        this.stack = new int[maxSize];
        this.cursor = -1;
    }

    public boolean isEmpty() {
        return this.cursor == -1;
    }

    public boolean isFull() {
        return this.cursor == this.maxSize -1;
    }

    public void push(int val) {
        if(isFull()) {
            throw new RuntimeException("Stack is full!");
        }
        this.stack[++this.cursor] = val;
    }

    public int pop() {
        if(isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return this.stack[this.cursor--];
    }

    public int peek() {
        if(isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return this.stack[this.cursor];
    }

    public boolean isOper(char ch) {
        return ch == '+' || ch == '-' || ch == '*' || ch == '/';
    }

    public int priority(int oper) {
        if(oper == '*' || oper == '/') {
            return 1;
        } else {
            return 0;
        }
    }

    public int calc(int num1, int num2, int oper) {
        int res = 0;
        switch(oper) {
            case '+':
                res = num1 + num2;
                break;
            case '-':
                res = num2 - num1;
                break;
            case '*':
                res = num1 * num2;
                break;
            case '/':
                res = num2 / num1;
        }
        return res;
    }
}
```  

说明:  
上述代码中数栈和操作栈所用的栈类型相同，都是 ```int``` 类型, char 数据直接写入 int 是可行的（会自动转为ASCII表中对应的值）, 但是将 int 类型数据返回给 char 确实不可行的。！！！


### 后缀表达式的计算及中缀表达式转后缀表达式的方法
后缀表达式就是运算符在操作数后边的表达式。例如 ```(3+4)x5-6``` 的后缀表达式就是 ```3 4 + 5 x 6 -```。后缀表达式又叫逆波兰表达式，波兰表达式是前缀表达式的昵称。后缀表达式的计算比较简单，首先1. 从左向右扫描表达式；2.遇到数压入数栈，遇到操作符则从数栈按次序弹出num1 和 num2, 然后计算 ```num2 运算符 num1``` ，并将结果压入数栈。

下边是代码实现计算后缀表达式：

```java
import java.util.Stack;

public class SuffixCal {
    public static void main(String[] argv) {
        String expression = "3 4 + 5 x 6 -";	// 空格隔开方便操作
        String[] list = expression.split(" ");
        Stack<String> ss = new Stack<String> ();	// 字符串栈
        int num1;
        int num2;
        for(String item : list) {
            if(isOper(item)) {
                num1 = Integer.parseInt(ss.pop());
                num2 = Integer.parseInt(ss.pop());
                ss.push(Integer.toString(calc(num1, num2, item)));
            } else {
                ss.push(item);
            }
        }

        System.out.println(ss.pop());

    }

    // 判断是否是计算符
    public static boolean isOper(String str) {
        return str.equals("+") || str.equals("-") || str.equals("x") || str.equals("/");
    }

    // 计算
    public static int calc(int num1, int num2, String oper) {
        int res = 0;
        switch(oper) {
            case "+":
                res = num1 + num2;
                break;
            case "-":
                res = num2 - num1;
                break;
            case "x" :
                res = num2 * num1;
                break;
            case "/":
                res = num2 / num1;
                break;
        }
        return res;
    }
}
```

> 后缀表达式计算相比于之前的中缀表达式计算简便了很多， 下边讨论如何将 中缀表达式转为后缀表达式~

#### 中缀表达式转后缀表达式的规则
1. 准备一个运算符栈 S1 和一个操作符栈 S2.

2. 从左向右扫描中缀表达式, 如果遇到数字, 直接入数栈 S2。

3. 如果遇到操作符,按一下顺序判断:  
	3.1 S1 为空时, 或者 S1 栈顶为 ```)``` 时，直接入栈。  

	3.2 否则， 如果操作符的优先级大于 S1 栈顶 元素的优先级时， 直接入栈。  

	3.3 否则，将 S1 栈顶的元素弹出并压入数栈 S2, 在将操作符与栈顶元素比较, 重复 3.2 ~3.3 直到操作符入栈。  

4. 遇到括号时：  

	4.1 如果是 ```(``` 时，则直接入栈 S1.  

	4.2 如果是 ```)```, 从运算符栈 S1中弹出元素压入数栈 S2 中，直到遇到 ```(```, 弹出 ```(``` 并将这对 ```()``` 舍弃。

5. 重复 2-4， 直到扫描完毕。

6. 将 数栈S2 中的元素弹出并压入 符号栈S1，然后从S1 中弹出的顺序就是中缀表达式对应的后缀表达式了。



附上转换代码:
```java
public class Translate {
    public static void main(String[] argv) {
        String expression = "(30+4)*5-6";
        Stack<String> numStack = new Stack<String> ();
        Stack<String> oprStack = new Stack<String> ();
        int index = 0;
        String ch;
        String number = "";


        while(true) {
            ch = expression.substring(index, index+1);


            if(isOper(ch)){
                if(oprStack.isEmpty() || oprStack.peek().equals("(")) {
                    oprStack.push(ch);
                } else {

                    if(ch.equals(")")){
                        while(true){
                            if(oprStack.peek().equals("(")) {
                                oprStack.pop();
                                break;
                            }
                            numStack.push(oprStack.pop());
                        }
                    } else {
                        while(!oprStack.isEmpty() &&  priority(ch) <= priority(oprStack.peek())) {
                            numStack.push(oprStack.pop());
                        }
                        oprStack.push(ch);
                    }

                }
            }else {
                number += ch;
                if(index == expression.length() -1) {
                    numStack.push(number);
                }else {
                    if(isOper(expression.substring(index+1, index+2))) {
                        numStack.push(number);
                        number = "";
                    }
                }
            }


            if(index == expression.length() -1) {
                break;
            }
            index++;
        }
        numStack.push(oprStack.pop());
        System.out.println(numStack);
    }


    public static boolean isOper(String ch)
    {
        return ch.equals("+") || ch.equals("-")|| ch.equals("*")|| ch.equals("/") || ch.equals("(") || ch.equals(")");
    }

    public static int priority(String ch) {
        if(ch.equals("/") || ch.equals("*")) {
            return 1;
        }else {
            return 0;
        }
    }
}
```

之前的规则叙述判断是罗列形式的，和代码的逻辑不太相同。从代码中可以看出: 1. 是否为数字， 2. 栈是否为空/栈顶是否为’(' , 3. 操作符是 ')'时的操作, 4. 优先级操作

```java
if(不是数) {
	if(为空 || 栈顶为'(' ) {
		push
	} else {
		if( ch == ')' ) {
			xxx;
		} else {
			比较优先级
		}
	}
}else {
	//是数
}
```
上面代码的输出为：

```shell
[30, 4, +, 5, *, 6, -]
```
再结合上面的后缀表达式计算方法，多项式的计算功能。这一切，都是基于 <strong>栈</strong>.