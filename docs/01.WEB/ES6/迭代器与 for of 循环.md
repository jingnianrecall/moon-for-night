---
title: 迭代器与 for of 循环
date: 2023-05-09 13:49:16
# permalink: /pages/0796ba76b4b55368
categories:
  - JavaScript
tags:
  - JavaScript
author:
  name: zhang
  # link: https://github.com
---

> 

# 迭代器与 for of 循环

## 一、ES6 之前的循环

传统的 `for` 循环 需要提前获取数组长度，声明索引变量等，尤其当多个循环嵌套的时候，更需要使用多个索引变量，代码的复杂度就会大大增加，比如我们使用双重循环进行去重：
```js
function unique(array) {
    var res = [];
    for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++) {
            if (array[i] === res[j]) {
                break;
            }
        }
        if (j === resLen) {
            res.push(array[i]);
        }
    }
    return res;
}
```
为了消除这种复杂度以及减少循环中的错误(比如错误使用其他循环中的变量)，ES6 提供了迭代器和 `for of` 循环共同解决这个问题。

## 二、Iterator（遍历器）

迭代器，其实就是一个具有 `next()` 方法的对象，每次调用 `next()` 都会返回一个结果对象，该结果对象有两个属性，`value` 表示当前的值，`done` 表示遍历是否结束。

## 二、for of
ES6 引入了`for...of`循环，作为遍历所有数据结构的统一的方法。

一个数据结构只要部署了`Symbol.iterator`属性，就被视为具有 `iterator` 接口，就可以用`for...of`循环遍历它的成员。也就是说，`for...of`循环内部调用的是数据结构的`Symbol.iterator`方法。

for...of循环可以使用的范围包括:
* 数组
* `Set` 和 `Map` 结构
* 字符串
* 某些类似数组的对象（比如`arguments`对象、`DOM NodeList` 对象）
* `Generator` 对象


## 三、与其他遍历语法的比较

### 原始写法的 for 循环。
```js
// 这种写法比较麻烦
for (var index = 0; index < myArray.length; index++) {
  console.log(myArray[index]);
}
```

### 数组内置的forEach方法
```js
// 这种写法的问题在于，无法中途跳出forEach循环，break命令或return命令都不能奏效。
myArray.forEach(function (value) {
  console.log(value);
});
```

### for...in循环
```js
for (var index in myArray) {
  console.log(myArray[index]);
}
```
for...in循环有几个缺点。

* 数组的键名是数字，但是`for...in`循环是以字符串作为键名“0”、“1”、“2”等等。
* `for...in`循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。
* 某些情况下，`for...in`循环会以任意顺序遍历键名。
总之，`for...in`循环主要是为遍历对象而设计的，不适用于遍历数组。


### for...of循环相比上面几种做法，有一些显著的优点。

* 有着同`for...in`一样的简洁语法，但是没有`for...in`那些缺点。
* 不同于`forEach`方法，它可以与`break`、`continue`和`return`配合使用。
* 提供了遍历所有数据结构的统一操作接口。

## 四、总结

* 传统的 `for` 循环 有时（双重循环）会增加代码的复杂度，ES6 提供了迭代器和 `for of` 循环共同解决这个问题。

* 迭代器，其实就是一个具有 `next()` 方法的对象，每次调用 `next()` 都会返回一个结果对象，该结果对象有两个属性，`value` 表示当前的值，`done` 表示遍历是否结束。

* `for...in` 循环主要是为遍历对象而设计的，不适用于遍历数组。

* `for...of` 循环比传统 `for` 循环更简洁，也不像 `forEach` 方法不能中断

