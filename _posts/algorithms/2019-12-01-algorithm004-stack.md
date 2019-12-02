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