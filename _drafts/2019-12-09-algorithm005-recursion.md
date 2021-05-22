---
layout: post
title: 数据结构与算法【005】
categories: [算法]
description: 来点算法
keywords: 算法, 数据结构
---

> 递归算法


### 迷宫回溯

```java

public class Recursion002 {
    public static void main(String[] args) {
        // init arr
        int[][] map = new int[8][7];
        for(int i=0; i<7; i++) {
            map[0][i] = 1;
            map[7][i] = 1;
        }

        for(int i=0; i<8; i++) {
            map[i][0] = 1;
            map[i][6] = 1;
        }

        map[3][1] = 1;
        map[3][2] = 1;
        map[3][3] = 1;
        map[3][5] = 1;

        setWay(map, 1,1);

        arrPrint(map);
    }

    // 找到路返回true,否则返回false
    // map[6][5] 则找到
    // 0 表示该店没有走过
    // 1 表示墙
    // 2 表示通路可以走
    // 3 表示该点已经走过但是走不通
    // 下 右 上  左
    public static boolean setWay(int[][] map, int i, int j) {
        if(map[6][5] == 2) {
            return true;
        } else {
            if(map[i][j] == 0) {
                map[i][j] = 2;
                if(setWay(map, i+1, j)) {
                    return true;
                } else if(setWay(map, i, j+1)) {
                    return true;
                } else if(setWay(map, i-1, j)) {
                    return true;
                } else if(setWay(map, i, j-1)) {
                    return true;
                }else {
                    map[i][j] = 3;
                    return false;
                }
            } else {
                return false;
            }
        }
    }

    public static void arrPrint(int[][] arr) {
        for(int[] line : arr) {
            for(int item : line) {
                System.out.printf("%d ", item);
            }
            System.out.println();
        }
    }
}

```  

输出:
```shell
1 1 1 1 1 1 1 
1 2 0 0 0 0 1 
1 2 2 2 2 0 1 
1 1 1 1 2 1 1 
1 0 0 0 2 0 1 
1 0 0 0 2 0 1 
1 0 0 0 2 2 1 
1 1 1 1 1 1 1 
```



### 八皇后问题

```java
package Recursion;

public class Recursion003 {
    int max = 8;
    int [] array = new int[max];
    public static void main(String[] args) {
        Recursion003 queue = new Recursion003();
        queue.cheak(0);
    }
    // 编写一个方法，防止第N个皇后
    // 特别注意， check是每一次递归时, 进入到check 都有 for(int i=0; i<max;i++)， 因此会有回溯
    private void cheak(int n) {
        if(n == max) { // 8个皇后放好
            print();
            return;
        }

        //一次放入皇后，并判断是否冲突
        for(int i=0; i<max; i++) {
            array[n] = i;
            if(judge(n)) {
                // 接着放 n+1 Hang 的皇后
                cheak(n+1);
            }

            // 如果冲突, 执行 array[i+1], 即处理同一行的下一列
        }
    }

    private  boolean judge(int n) {
        for(int i=0; i<n; i++) {
            if(array[i] == array[n] || Math.abs(n-i) == Math.abs(array[n] - array[i])) {
                return false;
            }
        }
        return true;
    }

    private  void print() {
        for(int i = 0; i < array.length; i++) {
            System.out.print(array[i] + " ");
        }
        System.out.println();
    }
}

```

输出:

```shell
0 4 7 5 2 6 1 3 
0 5 7 2 6 3 1 4 
0 6 3 5 7 1 4 2 
0 6 4 7 1 3 5 2 
...............
6 3 1 4 7 0 2 5 
6 3 1 7 5 0 2 4 
6 4 2 0 5 7 1 3 
7 1 3 0 6 4 2 5 
7 1 4 2 0 6 3 5 
7 2 0 5 1 4 6 3 
7 3 0 2 5 1 6 4 

```