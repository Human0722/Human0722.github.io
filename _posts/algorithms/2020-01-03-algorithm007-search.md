---
layout: post
title: 数据结构与算法【007】
categories: [算法]
description: 来点算法
keywords: 算法, 数据结构
---

> 查找算法  


### 线性查找
> 简单暴力缓慢地挨个找。  

```java
public class LinerSearch {
    public static void main(String[] args) {

        int[] arr = {55, 33, 22, 99, 76};
        int index = linearSearch(arr, 22);

        System.out.println("Target's index is "+ index);

    }

    public static int linearSearch(int[] arr, int target) {

        for(int i=0; i<arr.length; i++) {
            if(arr[i] == target) {
                return i;
            }
        }
        return -1;
    }
}

```  


### 二分查找 

> 前置条件： 数列有序。二分查找像极了快速排序，只不过快排需要同时处理 mid 的两遍，而查找只需要寻找一边。      


假设在一个从小打大排列的有序数列中寻找一个值，首先寻找有序数列位于中间的值 arr[(hi + lo) / 2], 与寻找的值作比较。如果目标值比中间值大，则在有序数列的右侧部分继续以同样的方法（递归)寻找,反之在有序数列的左侧进行寻值。当最后数列仅剩一个元素 (lo == hi) 时且这个元素不是目标值（ arr[lo] != target) 那么久意味着这个数列不存在这个值。  



![sortCls]({{site.url}}/assets/images/algorithm/binarySearch.gif)

实现代码：

```java
public class BinarySearch {

    public static void main(String[] args) {
        int[] arr = {0, 4, 7, 10, 14, 23, 45, 47, 53};
        int location = binarySearch(arr, 47, 0, 9);
        System.out.println(location);
    }

    public static int binarySearch(int[] arr, int target, int lo, int hi) {
        if(lo == hi && arr[hi] != target)
            return -1;

        int mid = (lo + hi) / 2;
        if(target > arr[mid]) {
            return binarySearch(arr, target, mid+1, hi);
        }else if(target < arr[mid]){
            return binarySearch(arr, target, lo, mid-1);
        }else {
            return mid;
        }
    }
}
```  

Output:   

```java
7
```  


### 插值查找

> 二分查找对比值确定算法。  

如果运用二分查找的思想，当我们在一个 1000 页的字典中寻找第900页， 首先是找到中间的第 500 页， 然后是第 750 页，...  
显然在日常生活中，我们会往后定位点，第一次可能翻到 800 页或者 950页, 这样查找就会更快些。   



```java
package search;

public class InsertValueSearch {

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15};

        int location = insertValueSearch(arr, 9, 0, 14);

        System.out.println(location);
    }


    public static int insertValueSearch(int[] arr, int target, int lo, int hi) {
        if(lo == hi && arr[lo] != target)
            return -1;

        int mid = lo + (target - arr[lo]) / (arr[hi] - arr[lo]) * (hi - lo);

        if(target > arr[mid]) {
            return insertValueSearch(arr, target, mid+1, hi);
        }else if(target < arr[mid]) {
            return insertValueSearch(arr, target, lo, mid -1);
        }else {
            return mid;
        }
    }
}

```
