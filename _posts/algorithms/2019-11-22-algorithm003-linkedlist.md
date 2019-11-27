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

### 关于 flag 的作用
在删除、增加、更新中都有 flag 变量，首先要理解的是 while(true) 循环只是为了定位到要操作元素, 真正的操作元素的动作发生在 ```while(true)``` 外， 而在循环内部的情况只能通过 flag 反应出来。最佳的编码方式是在 while(true) 外编写操作链表的代码。


### 关于 temp 变量的赋值问题
在单向链表的几种操作中, temp 变量初始值有时是 ```head```, 有的时候是 ```head.next```。这两个变量的选择主要取决于 要进行的操作是否与前节点相关联。
- 增加到末尾，需要前节点的 next 域指向新增节点， 所以 temp = head;
- 按顺序添加, 同上需要前节点的 next 域指向新节点, 所以 temp = head;
- 删除节点, 需要前节点 next 域指向下个节点, 所以 temp = head;
- 更新节点, 只需要关注当前节点, 所以 temp = head.next;


> 双向链表

双向链表与单项链表的不同点：
- 双向链表相邻的两个节点有两种关联关系: a.next = b; b.pre = a
- 双向链表操作不需要前节点辅助

双向链表的几种操作:
- 增加到末尾: 定位到最后一个元素, tail.next = node; node.pre = tail
- 按顺序添加: 定位好位置, (原来顺序:a.next = b) node.next = a.next; a.next.pre = node; node.pre = a; a.next = node;
- 更新: temp.xxx = node.xxx
- 删除: temp.pre.next = temp.next; if(temp.next != null) temp.next.pre = temp.prei

双向链表节点的最简单结构：
```java
class HeroNode2 {
    public int no;
    public String name;
    public String nickname;
    public HeroNode2 pre;
    public HeroNode2 next;

    public HeroNode2(int no, String name, String nickname) {
        this.no = no;
        this.name = name;
        this.nickname = nickname;
    }

    @Override
    public String toString() {
        return "[ no=" + this.no + ", name=" + this.name + ",nickname=" + this.nickname + "]";
    }
}
```

双向链表类:
```java
class NodeManager {
    public HeroNode2 head = new HeroNode2(0," "," ");

    public void add(HeroNode2 node) {
        // 找到最后一个节点，然后添加即可
        HeroNode2 temp = head;

        while(true) {
            if(temp.next == null) {
                break;  // 当前temp指向最后一个节点
            }

            temp = temp.next;
        }

        temp.next = node;
    }

    public void addByOrder(HeroNode2 node) {
        HeroNode2 temp = head;
        boolean flag = false;   // 用于标记是否存在 no 相同节点

        while(true) {
            if(temp.next == null) {
                break;
            }
            if(temp.next.no > node.no) {
                break;
            }else if(temp.next.no == node.no) {
                flag = true;
                break;
            }
            temp = temp.next;
        }

        if(!flag) {
            temp.next.pre = node;
            node.next = temp.next;
            temp.next = node;
            node.pre = temp;
        } else {
            System.out.println("存在相同的节点");
        }
    }

    public void delete(HeroNode2 node) {
        HeroNode2 temp = head.next;
        boolean flag = false;   // 是否执行了删除，默认未执行

        while(true) {
            if(temp == null) {
                break;
            }
            if(temp.no == node.no) {
                flag = true;
                break;
            }

            temp = temp.next;
        }

        if(flag) {
            temp.pre.next = temp.next;
            // 如果是最后一个节点就不需要操作后节点
            if(temp.next != null) {
                temp.next.pre = temp.pre;
            }
            System.out.println("成功删除节点：[no=" + node.no + "]");
        } else {
            System.out.println("未能找到对应节点用于删除");
        }
    }

    public void update(HeroNode2 node) {
        HeroNode2 temp = head.next;
        boolean flag = false;   // 用于标记是否修改，默认未修改

        while(true) {
            if(temp == null) {
                break;
            }

            if(temp.no == node.no) {
                flag = true;
                break;
            }

            temp = temp.next;
        }

        if(flag) {
            temp.name = node.name;
            temp.nickname = node.nickname;
        }else {
            System.out.println("未能找到对应节点");
        }
    }

    public void list() {
        HeroNode2 temp = head.next;
        while(true) {
            if(temp == null) {
                break;
            }
            System.out.println(temp);
            temp = temp.next;
        }
    }

}
```

> 环形链表


