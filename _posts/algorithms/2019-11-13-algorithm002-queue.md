---
layout: post
title: 数据结构与算法 【002】
categories: [算法]
description: 来点算法
keywords: 算法, 数据结构
---

> 队列

### 概述
队列是 ```FIFO``` 的数据结构。  


### 普通数组队列
普通不可复用数组队列属性值及其含义:  

prop | desc
-|-
maxSize | 定义队列长度
head | 队列首元素前一个位置指针, default: -1
tail | 队列尾元素指针, default: -1

普通不可复用数组队列属性值及其含义： 

func | core | desc
-|-
isEmpty() | （tail == head) ?			| 首尾指针是否相遇
ifFull() |	(tail == maxSize -1) ?		| 尾指针是否到最后一个位置
add(value) | queue(++tail) = value 		| 先将尾指针向后移， 再赋值
get() | return queue(++head)			| 先将头指针向后移, 在返回后移后对应的值。
peek() | return queue(head + 1)			| 返回头指针后（首）的值，不动首指针


更多判断逻辑见下队列类:


```java
class ArrayQueue {

	private int maxSize;	// 队列长度
	private int head;		// 队列首前一个元素指针
	private int tail;		// 队列尾部指针
	private int[] queue;	// 队列

	public ArrayQueue(int size) {
		maxSize = size;
		head = -1;
		tail = -1;
		queue = new int[maxSize];
	}

	// 是否为空？
	public boolean isEmpty() {
		return tail == head;
	}
	// 是否满 ？
	public boolean isFull() {
		return tail == maxSize-1;
	}

	// 向队列尾部添加元素
	public void add(int item) {
		if(isFull()) {
			throw new RuntimeException("Queue is Full.");
		}
		queue[++tail] = item;
	}

	// 从队列头部获取元素
	public int get() {
		if(isEmpty()) {
			throw new RuntimeException("Queue is empty");
		}
		return queue[++head];
	}

	// 查看队列头部第一个元素
	public int peek() {
		if(isEmpty()) {
			throw new RuntimeException("Queue is empty");
		}
		return queue[head+1];
	}

}
```

这是最基础的队列, 存在空间利用率低且只能使用一次的缺点。

### 环形队列

环形队列属性值及其含义: （<span class="ec ec-clown-face"></span> 为与普通不可复用队列不同点）

prop|desc
-|-
maxSize | 定义队列的长度
head 	| 队列首元素的指针, 默认为0 <span class="ec ec-clown-face"></span> 
tail 	| 队列尾元素后一个位置的指针, 默认为0 <span class="ec ec-clown-face"></span>

环形队列成员方法:

func | core | desc
-|-|-
isEmpty() | tail == head ? | 一些解释
isFull()  | (tail + 1) % maxSize == head ? | 一些解释
size()	  | (tail + maxSize - front) % maxSize | 一些解释

> 约定： 环形队列中保留一个位置为空，这个位置位于队尾和队头之间， tail 指针所指位置。

更多判断逻辑见下队列类:

```java
class CircleQueue {
	private int maxSize;		// 队列长度
	private int head;			// 队首指针
	private int tail;			// 队尾后一个位置指针
	private int[] queue;		// 队列数组

	public CircleQueue(int size) {
		this.maxSize = size;
		this.head = 0;
		this.tail = 0;
		this.queue = new int[maxSize];
	} 

	public boolean isEmpty() {
		return this.head == this.tail;
	}

	public boolean isFull() {
		return (this.tail + 1) % this.maxSize == this.head;
	}

	public int size() {
		return (tail + maxSize - head) % maxSize;
	}

	public void add(int value) {
		if(isFull()) {
			throw new RuntimeException("Queue is Full.");
		}
		queue[this.tail] = value;

		this.tail = (this.tail + 1) % this.maxSize;
	}

	public int get() {
		if(isEmptu()) {
			throw new RuntimeException("Queue is empty!");
		}
		int returnVal = queue[this.head];
		this.head = (this.head + 1) % this.maxSize
		return returnVal;
	}

	public void show() {
		for(int i=front; i<this.size(); i++) {
			System.out.println("i: " + i + ", value: " + queue[(this.front + i) % maxSize]);
		}
	}

}
```


















