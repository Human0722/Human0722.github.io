---
layout: wiki
title: Vue
categories: [Vue]
description: 后端的Vue指南
keywords: Vuejs
---

<span class="ec ec-nerd-face"></span><span class="ec ec-nerd-face"></span><span class="ec ec-nerd-face"></span> Vue.js笔记本

## vue-cli搭建vue项目基础框架。  

1. 安装vue
```shell
npm install -g @vue/cli
yarn global add @vue/cli
```
2. 创建项目
``` shell
vue create my-project
||
vue ui
```

## Vue对象

```javascript
<script>
  var app = new Vue({
    el: '#app', // 绑定容器
    data(): {   // 渲染的数据
      return {
        name: 'vue-project'
      }
    }
    methods: {  // 方法s

    },
    computed: {
      prices: function() {
        return 1+2;
      }
    },
    props: ['name'], // 接受属性值

    filters: {    // 格式化数据
      formateDate: function (value) {
        return 'value:' + value;
      }
    },
    mounted: {  //挂载前调用

    },
    beforeDestory: {  // 销毁前调用

    }

  });
</script>
```  

### 计算属性  
> 完成各种复杂逻辑操作，操作数据后返回一个结果。只要所操作数中的任一个被触发，就会重新执行计算属性。每个计算属性包含一个 getter 和 setter。修改数据触发 setter, 读取数据出发 getter。  

```Javascript
<div>
  {{ prices }}
</div>
var app = new Vue({
  el: '#app',
  computed: {
    prices: function () {
      return 1+2;
    }
  }
});
```  
计算属性和方法的区别就是：  计算属性有缓存，只有所依赖数据被改动则重新计算。而 methods 中的方法，只要是重新渲染就会被调用。选择取决于是否需要缓存~
