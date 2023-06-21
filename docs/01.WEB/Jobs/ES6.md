---
title: ES6
date: 2023-05-09 13:49:16
# permalink: /pages/0796ba76b4b55368
categories:
  - ES6
tags:
  - ES6
author:
  name: zhang
  # link: https://github.com
---

## 一、基础

### 1. let 和 const

答：

### 2. 模板字符串

答：

### 3. 箭头函数

答：

### 4. Symbol

答：

### 5. Set 和 Map

答：

### 6. for of

### 7. 解构赋值

答：

### 8. 增强的对象字面量

答：
#### 对象键值对 key value名称相同时，可以简写。
```js
// bad
const something = 'y'
const x = {
  something: something
}

// good
const something = 'y'
const x = {
  something
};
```

#### 动态属性
```js
const x = {
  ['a' + '_' + 'b']: 'z'
}

console.log(x.a_b); // z
```


## 二、重点

#### Promise 对象

答：

#### Generator 函数

答：

#### Async 函数

答：

#### Class 类

答：

#### 装饰器

答：


## 三、ES6有哪些新特性（概述）