---
layout: post
title: 数据结构与算法【003】
categories: [算法]
description: 来点算法
keywords: 算法, 数据结构
---

> 链表

区别于数组的顺序存储结构，链表采用链式存储结构。

一个简单的单向链表的节点应该包括以下信息: ```节点内容``` 和 ```指向下一个节点的指针```。以下是一个最精简的节点类:  

```java
class LinkedListNode {
	private int no;
	private String name;	// 内容
	private LinkedListNode next;	// 下一节点指针

	public LinkedListNode(int no, String name) {
		this.no = no;
		this.name = name;
	}

	@Override
	public String toString() {
		return "no: " + this.no + ", name: " + this.name;
	}
}
```

为了方便使用，应该将链表数据和操作链表的方法封装起来。
```java
class LinkedList {
	private LinkedListNode head = new LinkedListNode(0, " ");	// 头结点



	// add to the end 
	public add(LinkedListNode node) 
	{
		LinkedListNode temp = head;

		while(true) {
			if(temp.next == null) {
				break;			// 如果temp移到最后一个位置, 跳出循环添加节点。
			}

			temp = temp.next;
		}

		temp.next = node;
	}

	// add to linkedlist order by no
	public void addByOrder(LinkedListNode) {
		LinkedListNode temp = head;
		boolean flag = false;	// 标记是否存在相同 no 的节点， 默认不存在

		while(true) {
			if(temp.next = null) {
				break;
			}

			if(temp.next.no > node.no) {
				flag = true;
				break;
			}

			temp = temp.next;
		}

		if(flag) {
			node.next = temp.next;
			temp.next = node;
		}else {
			temp.next = node;
		}
	}

	// update LinkedListNode by no
	public void update(LinkedListNode node) {
		if(head.next == null) {
			System.out.println("LinkedList is empty.");
			return;
		}

		LinkedListNode temp = head.next;
		boolean flag = false;		// 标记是否执行修改,默认为false

		while(true) {
			if(temp == null) {
				break;
			}

			if(temp.no == no) {
				flag = true;
				break;
			}

			temp = temp.next;
		}

		if(flag) {
			temp.name = node.name;
		}else {
			System.out.println("Node do not exists.");
		}
	}

	// delete Node by no
	public void delete(int no) {
		LinkedListNode temp = head;
		boolean flag = false;	// 删除节点是佛存在, 默认不存在。

		while(true) {

			if(temp.next = null) {
				break;
			}

			if(temp.next.no == no) {
				flag = true;
				break;
			}

			temp = temp.next;
		}

		if(flag) {
			temp.next = temp.next.next;
		}else {
			System.out.println("Node do not exists.");
		}
	}
}
```