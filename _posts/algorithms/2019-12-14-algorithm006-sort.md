---
layout: post
title: 数据结构与算法【006】
categories: [算法]
description: 来点算法
keywords: 算法, 数据结构
---

> 排序算法

![sortCls]({{site.url}}/assets/images/algorithm/sort001.svg)

排序算法可以分为内部排序法(一次性加载所有数据到内存中)和外部排序法(分批次加载到内存中处理).  

### 时间复杂度

时间复杂度是程序运行时间和输出数据的规模的关联关系,用```O(n)```来表示。```时间频率``` 是精准的程序运行次数,用 ```T(n)```来表示。  

有以下代码:  
```java
int n = 10;
for(int i=0; i<2n; i++) {
	for(int j=0; j<n; i++)
	{
		xxxx;
	}
}
```
上述代码, 当输入数据量为 n 时， 运行次数为 2n^2。 则 ```T(n) = 2n^2```。  

时间复杂度可以由时间频度转换而来，转换规则如下:  
1. 所有常数项用 1 替代。  
2. 修改后的 T(n) ,只保留最高阶。如 T(n) = n^2 + n   =>  O(n) = n^2  
3. 去除最高阶的系数。 如 T(n) = 2n^2  => O(n) = n^2  

  
 通过上面的转换，即使两个时间频度不同的算法，时间复杂度也可能相同。比如: ```T(n)=n^2 + 7n + 8``` 和 ```T(n)=3n^2 + 2n + 3``` 的两个时间频度对应的时间复杂度都是 ```O(n^2)```.  
 只要没有循环等复杂结构，那么算法的时间复杂度就是 ```O(1)```.   
 如果时间复杂度为log，那么底数就变得不再重要。有时候为了简便可以直接写成 ```lgn```, 无论底数应该是多少。
  
常见的时间复杂度排序: O(1) < O(lgn) < O(n) < O(nlogn) < O(n^2) < O(n^3) < O(n^k) < O(2^n)  

我们通常讨论算法的最坏时间复杂度。

### 冒泡排序  
> 冒泡排序的原理就是，对于长度为 N 的数列。进行 N-1 (最后只剩一个数的循环可以省去) 次整体循环，每次循环后，将参与循环的所有数的最大值放在最后，然后进行下一次循环，将第二大的数放在倒数第二,.......。循环结束后，就会得到一个有序的数列。
如何在每一次循环中获得最大的值： 依次前后比较，将较大的数放在后边，数列循环完后，最大的数就会放在末尾。 

时间频度： T(n) = (n) * ((n+1)/2) = 1/2 n^2 + 1/2n	=> 时间复杂度: O(n) = n^2.  

冒泡的优化: 如果某一次循环中，  一次交换都没有进行，那么数列就已经有序了，后边的排序就可以不用执行。  

![sortCls]({{site.url}}/assets/images/algorithm/bubbleSort.gif)

```java
public class BubbleSort {
    public static void main(String[] args) {
        int[] numList = {5,2,4,6,1,3};

        boolean flag = false;

        for(int i=0; i < numList.length -1; i++) {
            for(int j=0; j< numList.length - 1 - i; j++) {
                if(numList[j] > numList[j+1]) {
                    flag = true;
                    int tmp = numList[j];
                    numList[j] = numList[j+1];
                    numList[j+1] = tmp;
                }
            }
            if(!flag) {
                break;      // 没有交换，则证明已经有序，直接退出。
            } else {
                flag = false;   // 有交换，将 flag 重置为 false, 为下一次循环使用。
            }
        }

        showList(numList);
    }



    public static void showList(int[] list)
    {
        for(int i=0; i<list.length; i++) {
            System.out.printf("%d ", list[i]);
        }
    }
}
```  


Output； 

```java
 1 2 3 4 5 6 
```


### 