---
layout: post
title: 数据结构与算法【001】
categories: [算法]
description: 来点算法
keywords: 数据结构, 算法
---

### 概述

> 稀疏数组

下图左侧的含有大量空值的数组可以用稀疏数组来表示, 右侧为稀疏数组。

![稀疏数组]({{site.url}}/assets/images/algorithm/algorithm001.jpg)

左侧的为 11x11 的二维数组, 假设为 a。 数组中有两个非空值:
```java
a[1][2] = 1;	// 1 2 1 刚好是稀疏数组第二行的值
a[2][4] = 2;	// 2 4 2 刚好是稀疏数组第三行的值
```
右侧的数组是 N*3 的数组, 假设为 b. ```b[0][0]``` 存储着原数组的行数, ```b[0][1]``` 存储着原数组的列数。```b[0][3]``` 存储着原数组的非空值的个数。下边每一行的第一个值是 非空值的第一个索引值, 第二个值是非空值的第二个索引值， 第三个值是非空值。


### Show me code
> 下面是将原始大量空值数组转换为稀疏数组的代码

```java
public static void main(String argv[]) {
	// 实例化左侧的数组
	int rawArr[][] = new int[11][11];
	rawArr[1][2] = 1;
	rawArr[2][34] = 2;

	// 为了构建稀疏数组第一行, 同时也为了得到稀疏数组的行数, 需要统计原数组的非空值个数
	int num = 0;
	for(int[] row : rawArr) {
		for(int item : row) {
			if(item != 0) {
				num++;
			}
		}
	}

	int sparseArr[][] = new int[num][3];
	sparseArr[0][0] = 11;
	sparseArr[0][1] = 11;
	sparseArr[0][2] = num;

	// line 纪录稀疏数组操作到第几行
	int line = 1;
	for(int i=0; i<sparseArr[0][0]; i++) {
		for(int j=0; j<sparseArr[0][1]; j++) {
			if(rawArr[i][j] != 0) {
				sparseArr[line][0] = i;
				sparseArr[line][1] = j;
				sparseArr[line][2] = rawArr[i][j];
				line++;
			}
		}
	}

	// sparseArr 即为转换后的数组。

}
``` 

> 下面是将稀疏数组转换为原数组的的代码  

```java
public static void main(String[] args) {
	// 虚构出一个稀疏数组
	int[][] sparseArr = {
		{11, 11, 2},
		{1, 2, 1},
		{2, 4, 2}
	};

	// 开始还原原始数组
	int [][] rawArr = new int[sparseArr[0][0]][sparseArr[0][1]];
	for(int i=1; i<sparseArr.length; i++) {
		rawArr[sparseArr[i][0]][sparseArr[i][1]] = sparseArr[i][2];
	}

	// rawArr 即为原始数组。
}
```

### 有个锤子用？
用于含有大量相同数据的数组的压缩。如棋盘的保存。