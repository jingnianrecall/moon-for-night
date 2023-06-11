---
title: 块级作用域let和const
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

# 块级作用域let和const

## 一、为什么需要块级声明
### var声明及变量提升机制
通过var声明的变量，无论在哪里声明都会被当成在当前作用域顶部声明的变量，这就是变量提升机制。
```js
function hoisting(condition) {
    if (condition) {
        var value = '六月十日晴'
    }
}
```
以上代码，`condition`即使为false，value值也会被创建，在预编译阶段JavaScript引擎会将函数修改成下面这样：
```js
function hoisting(condition) {
    var value;
    if (condition) {
        value = '六月十日晴'
    }
}
```
变量value声明会被提升至函数顶部。

在for循环中，用`var`声明变量，即使循环已经结束，还是可以访问到变量`i`的值。
```js
for (var i = 0; i < 10; i++) {
    ...
}
console.log(i); // 10
```

### 块级声明
为了加强对变量生命周期的控制，ES6引入了块级块级作用域。
块级作用域存在于：
* 函数内部
* 块中（字符{和}之间的区域）

### let 和 const

#### let 声明
使用 let 来替代 var 声明变量，可以把变量的作用域限制在当前的代码块中。
let声明不会被提升，执行离开代码块后即被销毁。
禁止重复声明。

#### const 声明
const 声明的是常量，值一旦被设定后不可更改，且必须进行初始化。
const 声明对象时，不可以修改绑定，但可以修改值。

### 临时死区
临时死区(Temporal Dead Zone)，简写为 TDZ。

let 和 const 声明的变量不会被提升到作用域顶部，如果在声明之前访问这些变量，会导致报错：
```js
console.log(typeof value); // Uncaught ReferenceError: value is not defined
let value = 1;
```
这是因为 JavaScript 引擎在扫描代码发现变量声明时，要么将它们提升到作用域顶部(遇到 var 声明)，要么将声明放在 TDZ 中(遇到 let 和 const 声明)。访问 TDZ 中的变量会触发运行时错误。只有执行过变量声明语句后，变量才会从 TDZ 中移出，然后方可访问。

## 二、循环中的块级作用域
经典面试题，因为var创建的变量到了循环之外仍可以访问
```js
var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs[i] = function () {
        console.log(i);
    };
}
funcs[0](); // 3
```
ES6之前的解决方案，可以在循环中使用立即调用函数表达式（IIFE），强制生成变量副本。
```js
var funcs = [];
for (var i = 0; i < 3; i++) {
    funcs[i] = (function(i){
        return function() {
            console.log(i);
        }
    }(i))
}
funcs[0](); // 0
```
### 循环中的 let 声明
 每次迭代循环时 `let` 声明都创建一个新变量，并以之前迭代中同名变量的值将其初始化，`let 声明在循环内部的行为是标准中专门定义的`，不一定就与 let 的不提升特性有关，其实，在早期的 let 实现中就不包含这一行为。

### 循环中的 const 声明
循环中使用const 声明会是报错，因为虽然我们每次都创建了一个新的变量，然而我们却在迭代中尝试修改 const 的值，所以最终会报错。
使用`for in 或者 for of `循环可以，因为在 `for in 或者 for of ` 循环中，每次迭代不会修改已有的绑定，而是会创建一个新的绑定。

## 三、全局块作用域绑定
使用var声明可能会覆盖一个已经存在的全局对象属性（浏览器中的 window 对象）。
如：
```js
var RegExp = "Hello";
console.log(window.RegExp);     // "Hello" 原来应该是RegExp正则对象
```
使用let或const则不会，因为会在全局作用域下创建一个新的绑定。

## 四、总结

* let 和 const 声明的变量不会提升，降低产生错误的机率。

* 不能在声明变量前访问他们，因为此时块级绑定还在临时死区（TDZ）中。

* 注意let 和 const 在循环中的行为，是ECMA标准中专门定义的。

* 在我们开发的时候，可能认为应该默认使用 let 而不是 var ，这种情况下，对于需要写保护的变量要使用 const。然而另一种做法日益普及：`默认使用 const`，只有当确实需要改变变量的值的时候才使用 let。这是因为大部分的变量的值在初始化后不应再改变，而预料之外的变量之的改变是很多 bug 的源头。


