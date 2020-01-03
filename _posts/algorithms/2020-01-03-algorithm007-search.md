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

> 前置条件： 有序。