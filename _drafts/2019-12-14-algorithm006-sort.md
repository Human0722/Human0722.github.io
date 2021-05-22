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
<font color="red">相邻比较，把最值放最后边</font>
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

### 选择排序  

<font color="red">假设第一个最小,向后挨个比较找到最小与第一个互换。</font>  

> 选择排序的原理就是，从 arr[0 ~ length -1]挨个假设为最值, 从假设位置后一个位置到最后，找到比假设位置值小的最小的值与假设位置交换，即可得到有序数列。  

时间频度： T(n) = (n-1) * n/2 = 1/2n^2 - 1/2n => 时间复杂度: O(n) = n^2.  

选择排序的技巧: 最后的 ```minIndex``` 如果和假设位置相同，则不用交换。   

![sortCls]({{site.url}}/assets/images/algorithm/selectionSort.jpg)

```java
public class SelectionSort {
    public static void main(String[] args) {
        int arr[] = {8, 5, 7, 1, 9, 3};
        int minIndex = 0;
        for(int i = 0; i < arr.length - 1; i++) {
            minIndex = i;
            for(int j = i+1; j< arr.length; j++) {
                if(arr[j] < arr[minIndex]) {
                    minIndex = j;
                }
            }
            if(i != minIndex) {
                int tmp = arr[i];
                arr[i] = arr[minIndex];
                arr[minIndex] = tmp;
            }
        }
        showList(arr);
    }

    public static void showList(int[] arr) {
        for(int i=0; i<arr.length; i++) {
            System.out.printf("%d ", arr[i]);
        }
    }
}
```   

Output:   

```java
1 3 5 7 8 9 
```   

### 插入排序
<font color="red">指针遍历数列，指针后移新元素在指针前寻找合适位置，保证指针前都是有序的。</font>

> 插入排序的原理是,让 ```Index``` 从 1 遍历到最后 。 数列可以分为[0 ~ index]和[index+1 ~ length]两个部分。每当指针后移，新加入的 arr[index+1] 就要在 [0 ~ index+1 ] 中寻找合适的位置， 插入。当遍历完[1~最后],整个数列就是有序的了。 

时间频度: T(n)=  (n-1) * n  => O(n) = n^2  

插入排序如果用 for 循环 嵌套 for 循环边缘元素不好控制, 改用 while 之后出奇地顺利，指针可以伪指向 arr[-1]，这样操作就统一了， 不用很多的边缘 if-else 判断。  

![sortCls]({{site.url}}/assets/images/algorithm/insertionSort.gif)

```java
public static void main(String[] args) {
        int arr[] = {6, 5, 3, 1, 8, 7, 2, 4};
        for(int i=1; i<arr.length; i++) {
            int currentVal = arr[i];
            int cursor = i-1;
            while(cursor >=0 && currentVal < arr[cursor]) {
                arr[cursor+1] = arr[cursor];
                cursor--;   // 如果cursor==0, 这步操作后 cursor == -1， 用 for 循环不可控, 这是while的好处。
            }
            arr[cursor+1] = currentVal;
        }
        System.out.println(Arrays.toString(arr));
    }
```  

Output: 

```java
[1, 2, 3, 4, 5, 6, 7, 8]
```  

### 希尔排序  

> 希尔排序是插入排序的优化排序算法，由于优化元素距离对应位置过远的问题。对于插入排序而言，新加入的元素寻址(暂且把元素寻找对应位置的过程叫做寻址)是相邻位置比较，如果用 ```gap```来描述相互比较的元素的距离, 则对于插入排序而言: ```gap=1```。 而希尔排序就是 gap 从 ```length/2``` 逐渐折半直到小于1（大于0)，在这个过程中，对索引为 0、gap、gap x 2、gap x 3....进行一次插入排序。当 gap 逐渐变小，整个数列的顺序就会趋于有序，不会出现元素距离对应的排序位置过远的情况，直到最后一次 gap = 1, 就进行了一次整体的插入排序，从而达到避免操作次数过多且完成排序的目的。   

![sortCls]({{site.url}}/assets/images/algorithm/ShellSort.jpg)  

通过 gap 切分的小数列的排序分为两种，一种是挨个比较大小并交换的交换法，另外一种是寻址法，先保留要排序的值，然后将前面的元素后移动，找到合适的位置将保存的值放入即可。  

```java
package sort;

import java.util.Arrays;

public class ShellSort {
    public static void main(String[] args) {
        int[] arr = {8, 9, 1, 7, 2, 3, 5, 4, 6, 0};
        shellSort02(arr);
    }
    
    // 依次交换的交换法

    public static void shellSort(int[] arr) {
        int temp = 0;

        for(int gap = arr.length/2; gap > 0; gap /= 2) {
            for(int i=gap; i< arr.length; i++) {
                for(int j=i-gap; j>=0; j-=gap) {
                    if(arr[j] > arr[j+gap]) {
                        temp = arr[j];
                        arr[j] = arr[j+gap];
                        arr[j+gap] = temp;
                    }
                }
            }
        }


        System.out.println(Arrays.toString(arr));
    }

    
    // 使用插入排序的移动法
    
    public static void shellSort02(int[] arr) {
        int temp = 0;

        for(int gap = arr.length/2; gap > 0; gap /= 2) {
            for(int i=gap; i< arr.length; i++) {
                 int j=i;
                 temp = arr[j];
                 if(arr[j] < arr[j-gap]) {
                     while(j - gap >=0 && temp < arr[j-gap]) {
                         arr[j] = arr[j-gap];
                         j-=gap;
                     }
                     arr[j] = temp;
                 }
            }
        }


        System.out.println(Arrays.toString(arr));
    }
}

```  

Output:  

```java
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```   


### 快速排序  

> 快速排序的原理就是找到一个(pivot)作为比较标准，比其小的数放在这个数的左边，比其大的数放在右边。然后以相同的方法处理左边的数列,再处理右边的数列，以此形成递归。最终整个数列就会趋于有序。 


这里将数组第一数定为 pivot 讲解。  

```java
public class QuickSort {
    public static void main(String[] args) {
        int [] arr = {4, 10, 8, 7, 6, 5, 3, 12, 14, 2};
        sort(arr, 0, arr.length - 1);

        System.out.println(Arrays.toString(arr));
    }

    public static void sort(int[] arr, int lo, int hi)
    {

        if(lo >= hi) return;
        int j = partition(arr, lo, hi);
        sort(arr, lo, j-1);
        sort(arr, j+1, hi);
    }

    public static int partition(int[] arr, int lo, int hi)
    {
        int i = lo, j = hi + 1;
        int temp = 0;
        int pivot = arr[lo];
        while(true)
        {
            while(arr[++i] < pivot)
                if(i == hi)
                    break;

            while(arr[--j] > pivot)
                if(j == lo)
                    break;

            if(i >= j)
                break;

            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
        temp = arr[j];
        arr[j] = arr[lo];
        arr[lo] = temp;

        return j;
    }
}
```   

![sortCls]({{site.url}}/assets/images/algorithm/QuickSort.jpg) 

快速排序的算法核心:  
 1. 会有一个输入的乱序数列, 假设为 arr。定义变量 lo（low） 指向第一个元素, 变量 hi (high) 指向最后一个元素， 这两个元素不能动，用作下次递归的数列边界值。  然后定义 i = lo、 j = hi + 1。 这里解释一下为什么 j = hi +1 ,很是费解的一个问题。【以第一个元素为 pivot 值时, i 实际上是从第二个元素开始后移的, 因为后边第一次调用 i 的形式是 ++i，同理， 因为第一次调用 j 的方式是 - -j, 为了不漏掉尾部元素，只好将 j 赋值为 hi+1 】。  

 2. 然后指针 i 开始后移，直到遇到大于 divot(5) 的数停止， j 开始前移，遇到小于 divot(5) 的数停止。当 i、 j 确定时， 首先要判断 ``` i、j是否已经到达边界``` 和 ```i 是否大于等于 j```。当满足 为到达边界，且 i < j 时，交换指针 i、 j所对应的元素。 图中第二行、第三行都是描述这个过程。  

 3. 如图第四行，当 i<=j 时候, 就不能再交换 i、 j 指针对应的值了。此时应该将 j 指针所对应的值和 divot 交换，得到第五行的结果。如图中所示， 5左侧的值全部小于5， 右侧的值全部大于5.这就是快速排序递归调用中的一个完整案例。  

 4. 上一步操作中，应该返回 divot 的位置索引 j，用于递归定义下次数据的边界。向递归调用传入边界 （lo, j-1） 和 （j+1, hi)。 

 5. 递归调用返回条件就是， 当数列小到只有一个元素时（i == j) 则返回。
   

### 归并排序

> 归并排序(MergeSort)是一种基于递归的排序算法。先将折半分为两个数列，将两个数列排序后，再将这两个数列通过比较第一个元素大小选择性取出的方式合并为一个数列。而将两个数列排序的方法也是分别将数列拆分为两个数列进行单独排序后再合并。

![sortCls]({{site.url}}/assets/images/algorithm/MergeSort.gif) 


```java
public class MergeSort {
    public static int[] aux = new int[8];
    public static void main(String[] args) {
        int arr[] = {6, 5, 3, 1, 8, 7, 2, 4};
        MergeSort(arr, 0, arr.length - 1);
        System.out.println(Arrays.toString(arr));

    }

    public static void MergeSort(int[] arr, int lo, int hi)
    {
        if(lo == hi)
            return;
        int mid = (lo + hi) /2;
        MergeSort(arr, lo, mid);
        MergeSort(arr, mid+1, hi);
        Merge(arr, lo, mid, hi);
    }

    public static void Merge(int[] arr, int lo, int mid, int hi)
    {
        for(int k=lo; k<=hi; k++)
        {
            MergeSort.aux[k] = arr[k];
        }
        int i = lo, j = mid + 1;
        for(int k=lo; k<=hi; k++) {
            if(i>mid)   arr[k] = MergeSort.aux[j++];
            else if(j > hi) arr[k] = MergeSort.aux[i++];
            else if(MergeSort.aux[i] > MergeSort.aux[j])    arr[k] = MergeSort.aux[j++];
            else arr[k] = MergeSort.aux[i++];
        }
    }
}
```  

Output:  

```java
[1, 2, 3, 4, 5, 6, 7, 8]
```  

### 基数排序  

> Magic of Math~  。   

#### 基数排序的步骤:  

假设排序的数据是: 170, 45, 75, 90, 802, 24, 2, 6  

因为数列中最大的数是 170 ， 这是一个三位数。所以将所有的数填充到三位:   

```
170, 045, 075, 090, 802, 024, 002, 006  
```  

提取个位数，并按照从左到右的顺序根据个位数的大小排序: 

```
170, 045, 075, 090, 802, 024, 002, 006      【原数列】
  0,   5,   5,   0,   2,   4,   2,   6      【个位数】

  0,   0,   2,   2,   4,   5,   5,   6      【个位数排序】
170, 090, 802, 002, 024, 045, 075, 006      【跟随排序后的数列】
``` 

提取十位数，并按照从左到右的顺序根据个位数的大小排序:   

```
  0,   0,   2,   2,   4,   5,   5,   6      【个位数排序】
170, 090, 802, 002, 024, 045, 075, 006      【跟随排序后的数列】
 7,   9,   0,   0,   2,   4,   7,   0       【提取的十位数】

 0,   0,   0,   2,   4,   7,   7,   9       【按十位数排序】
802, 002, 006, 024, 045, 170, 075, 090      【跟随排序后的数列】
```  

提取百位数，并按照从左到右的顺序根据个位数的大小排序: 
```
 0,   0,   0,   2,   4,   7,   7,   9       【按十位数排序】
802, 002, 006, 024, 045, 170, 075, 090      【跟随排序后的数列】
8,   0,   0,   0,   0,   1,   0,   0        【提取的百位数】

0,   0,   0,   0,   0,   0,   1,   8        【按百位排序】
002, 006, 024, 045, 075, 090, 170, 802      【跟随排序后的数列】 <---已经是有序数列

```    

#### 提取数字小技巧:  

个位提取：  (num % 10) / 1  

十位提取：  (num % 100) / 10  

百位提取：  (num % 1000) / 100

#### 代码思路：  
假设需要排序 N 个数， 首先需要一个 10*N 的二维数组 map ，作为排序的暂存区。 另外需要 1*10 的一维数组 countArr 来记录 二维数组中每一个一维数组存放的数据个数。   

遍历排序数列, 取每一个数的个位数 n , 将 这个数存放到 map[n][countArr[n]++], 一轮过后，将数从二维数组中取出..

按照同样方法处理十位，百位...

最终的数列就是有序的数列。


#### 代码实现:

```java
public class RadixSort {
    public static void main(String[] args) {
        int[] arr = {170, 45, 75, 90, 802, 24, 2, 6};
        RadixSort(arr,3);
    }

    public static void RadixSort(int arr[], int maxLength) {
        int[] countArr = new int[10];
        int[][] map = new int[10][arr.length];
        int num = 0;
        // 从个位、十位...遍历每一位
        for(int i=0; i<maxLength; i++) {
            int index = 0;
            // 遍历每一个数
            for(int j=0; j< arr.length; j++) {
                num = (int)((arr[j] % Math.pow(10, i+1)) / Math.pow(10, i));
                map[num][countArr[num]++] = arr[j];
            }
            // 将数放回 arr
            for(int j=0; j<countArr.length; j++) {
                for(int k=0; k<countArr[j];k++) {
                    arr[index++]= map[j][k];
                    System.out.printf("%d ", map[j][k]);
                    map[j][k] = 0;          //重置countArr/map/index
                }
                countArr[j] = 0;            //重置countArr/map/index
            }
            index = 0;                      //重置countArr/map/index
            System.out.println();
        }
    }
}
```  

Output:  

```java
170 90 802 2 24 45 75 6 
802 2 6 24 45 170 75 90 
2 6 24 45 75 90 170 802 
```  


### 完结，鸣谢  


![sortCls]({{site.url}}/assets/images/algorithm/Teachers.jpg)   

- [最好懂的快排](https://www.youtube.com/watch?v=7h1s2SojIRw)
- [最好懂搞得希尔排序](https://www.youtube.com/watch?v=ddeLSDsYVp8&t=318s)
- [最好懂的归并排序](https://www.youtube.com/watch?v=JMlYkE8hGJM&t=627s)
- [韩顺平的算法课](https://www.youtube.com/watch?v=BVtO_Oi3VMc&list=PLmOn9nNkQxJFvyhDYx0ya4F75uTtUHA_f)

































