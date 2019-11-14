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
维护一个数组队列的属性值:
- maxSize: 用于控制队列长度, 初始化队列数组。
- head: 队列首元素前面位置的指针, 默认为-1。
- tail: 队列尾元素的指针, 默认为 -1。

数组队列的成员方法:
- isEmpty ( ) : 只要判断 ```tail``` 是否等于 ```head```。
- isFull ( ): 只要判断 ```tail``` 是否等于 ```maxSize-1```。
- add (int value): queue[++tail] = value, 向队列尾部添加元素
- get ( ): queue[++head], 从队列头部取出元素
- peek ( ) : queue[font+1], 仅查看队列头部元素

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
