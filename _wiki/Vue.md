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

## 计算属性  
> 完成各种复杂逻辑操作，操作数据后返回一个结果。只要所操作数中的任一个被触发，就会重新执行计算属性。每个计算属性包含一个 getter 和 setter。修改数据触发 setter, 读取数据出发 getter。  

```javascript
<div>{% raw %}
  {{ prices }}
{% endraw %}</div>
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

## class 与 style 的绑定   
> 常用的绑定样式的方法: 在标签上使用对象语法、数组语法快速绑定多个样式、内联样式

```javascript
// 对象语法
<div :class="{'active': isActive', 'border': isBorder}">Content</div>
new Vue({
  ...
  data() {
    return {
      isActive: true,
      isBorder: true
    }
  }
});

// 数组语法快速绑定多个样式
<div :class="[isActive, isBorder]">Content</div>
new Vue({
  ...
  data(): {
    return {
      isActive: 'active',
      isBorder: 'border',
    }
  }
});

// 通过计算属性绑定
<div :class="classes">Content</div>
new Vue({
  ...
  computed: {
    classes: function() {
      return {
        'active': true,
        'border': this.isBorder
      }
    }
  }
});

// 通过内联样式
<div :style="{ 'color': color, 'fontSize': fontSize + 'px'}">Content</div>
new Vue({
  ...
  data() {
    return {
      color: 'red',
      fontSize: 14
    }
  }
});
```  

## 常见的数组操作函数
> push pop shift unshift splice sort replace

```javascript
this.books.push({'xx': 'xx'});  //向数组 books 末尾追加
this.books.pop(); // 从数组 books 末尾弹出
this.books.shift(); // 从数组 books 头部弹出
this.books.unshift({'xx': 'xx'}); // 向数组 books 头部添加元素
this.books.splice(index, len, [item]);  //
  splice(1,1); // 删除第二个元素
  splice(1,1,'ttt');  // 替换第二个元素
  splice(1,0, 'ttt'); // 在第二个位置添加元素
this.books.sort();    // 神仙语法糖，还没搞懂
this.books.reverse(); // 将数组反转  
```  

## v-click 事件  

```javascript
// 简写
<button @click="xxx">按钮</button>   // 调用方法，计算属性...
<button @click="var++">按钮</button>  //直接执行 js 语句

// 传入参数
<button @click="xxx(10)">Button</button>
// 传入元素本身
<button @click="xxx(10,$event)"></button>
new Vue({
  ...
  xxx(num, event) {
    event.preventDefault();
  }
});

// 一些快捷修饰符: stop prevent, capture, self, once
<a @click.stop="handle"></a>    // 阻住默认跳转事件
<form @submit.prevent="handle"></form>    // 阻止表单默认提交事件
<input @keyup.enter="handle"></form>
```

## 表单与 v-model

```javascript
<input type="text" v-model.lazy="xxx">  // lost focus才会更新数据
<input type="text" v-model.number="xxx"> // 保存为数而非字符串
<input type="text" v-model.trim="xxx">  // 去除首尾的空格
```  


## 组件相关  

### 父组件通过 props 传值  

1.传递一个字符串

```javascript
// 父组件
<my-component name="myName"></my-component>
...
new Vue({
  component: {
    my-componet: require('./component/xxxComponent.vue').default;
  }
});

// 子组件中:
{% raw %}
<div>{{ name }}</div>
{% endraw %}
...
export default{
  props: ['name']
};

```  

2.传递一个对象   
>只要在父组件中属性名前面家上 : 即可。  

```javascript
<my-component :message="{name: 'xxx'}"></my-component>
```  

3.一些数据流  
当父组件传递属性值的时候，值会先存储在 props 列表中。此时的数据只能读，不能修改。  
如果数据是需要频繁修改的属性，则用 data(){} 转存，再操作 data 中的数据即可。 data 中的数据名称可以和 props 中的同名, 在末班中访问的时候会优先访问 data 中的数据。  

```javascript
// location: 子组件
<h3>{{ name }} </name>
export default{
  props: ['name'],
  data() {
    return {
      name: this.name
    }
  }
}
```  
如果数据是需要处理一次使用而无需多次更改， 这里使用 computed 来处理 props 属性值。但是 computed 属性名不能和 props 相同。
```javascript
// location: 子组件
export default {
  props: ['width'],
  computed: {
    style: function() {
      return {
        width: this.width + 'px'
      }
    }
  }
}
```  
4.数据过滤
> 主要是严格约束来自父组件的属性数据类型 ,数据类型有: String, Number, Bookean, Object, Array, Function   

```javascript
...
props: {
  propA: Number,
  PropB: [String, Number],
  PropC: {
    type: Boolean,
    default: true
  },
  PropD: {
    type: Number,
    required: true
  },
  PorpE: {
    type: Array,
    default: function() {
      return []
    }
  },
  propF: {
    validator: function(value) {
      return value > 10
    }
  }
}
```
