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
* 1、let 和 const 声明的变量不会提升，可以避免产生一些错误。
* 2、const 可以声明常量，不可修改，建议默认使用const。
* 3、不可以在生命变量前访问，此时块级绑定还在临时死区（TDZ）中。
* 4、let 和 const 在循环中的行为，是ECMA标准中专门定义的。

### 2. 模板字符串

答：
* 模版字符串用反引号（`）标识, 可以用来定义多行字符串，或者在字符串中嵌入变量和js表达式。

* 标签模板指函数后紧跟模板字符串，是函数调用的一种特殊形式。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数。

### 3. 箭头函数

答：
* 使用箭头函数可以让语法更加简洁，并且不绑定自己的`this`，`arguments`，`super`或 `new.target`。
* 箭头函数 `this` 绑定的就是最近一层非箭头函数的 `this`
* 需要动态 `this` 或 函数体很复杂，有许多行，或者函数内部有大量的读写操作，不应使用箭头函数。

#### 和普通函数的区别
* 箭头函数没有 `this` 、`arguments`，也没有原型和 `super`。
* `this` 、`arguments`在最近一层的非箭头函数
* 箭头函数没有 `[[Construct]]` 方法，不能被用作构造函数，不能通过 `new` 方式调用。

### 4. Symbol
答：
* `Symbol` 函数主要用于生成唯一值，类似字符串。
* 用于对象属性名时，可以避免出现同名属性。

### 5. Set 和 Map

* `Set` 类似于数组，但是成员的值都是唯一的，没有重复的值。配合 `Array.from` 方法可以实现数组去重

* `Map` 数据结构类似于对象，“键”的范围不限于对象的字符串，各种类型的值（包括对象）都可以当作键。

* `WeakMap`、`WeakSet` 属于弱引用，不可遍历。可以用在存储dom节点、和一些临时缓存数据等，防止内存泄漏。

### 6. for of
* for 循环原始写法在写双重循环时代码可读性差，for of 可以让语法更简洁。
* `for...in` 循环主要是为遍历对象而设计的，不适用于遍历数组。
* `for...of` 循环比传统 `for` 循环更简洁，也不像 `forEach` 方法不能中断

#### 迭代器
迭代器，其实就是一个具有 `next()` 方法的对象，每次调用 `next()` 都会返回一个结果对象，该结果对象有两个属性，`value` 表示当前的值，`done` 表示遍历是否结束。 

### 7. 解构赋值
* 从数组和对象中提取值，对变量进行赋值，这被称为解构赋值

* 可以用在数组、对象、字符串、函数参数等，方便取值 语法清晰

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
* Promise 可以获取异步操作的消息，有三种状态：进行中（pending）、成功（fulfilled）、失败（rejected）。

* Promise 对象的两个特点: 1、对象的状态不受外界影响 2、一旦状态改变，就不会再变。

* Promise 缺点：
1、无法取消Promise，一旦新建它就会立即执行，无法中途取消。
2、如果不设置回调函数 如catch()，Promise内部抛出的错误，不会反应到外部。
3、当处于pending状态时，无法得知目前执行进度。

* Promise.prototype.then()方法
状态改变时的回调函数，第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数，它们都是可选的。
then方法返回的是一个新的Promise实例，可以进行链式调用（解决回调地狱）。

* Promise.prototype.catch()方法，发生异常错误的回调函数，推荐使用（then方法的第二个参数形式不推荐）。

* Promise.prototype.finally()方法，无论状态成功还是失败都会执行。（ES2018）

* Promise.prototype.all()方法，参数必须为数组或可迭代类型，参数中所有promise实例都执行成功才会进入成功状态，有一个失败即进入catch。（如果参数内部（promise实例）写了catch方法例外。）

* Promise.prototype.allSettled()方法，无论参数内部（promise实例）状态成功还是失败都会返回fulfilled。（ES2020）

* Promise.prototype.any()方法，参数实例有一个变成fulfilled 成功状态，包装实例就会变成fulfilled状态；所有参数实例都变成rejected状态，包装实例才会变成rejected状态。

* Promise.prototype.race()方法，参数实例谁最先执行完成，就返回谁的结果。不管是成功还是失败，只返回最快的结果。

* Promise.resolve()方法，将现有对象转为 Promise 对象。

* Promise.reject()方法，返回一个新的 Promise 实例(失败状态)。

#### Generator 函数

答：
* Generator 函数是 ES6 提供的一种异步编程解决方案，Generator 可以封装了多个内部状态，执行 Generator 函数会返回一个遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。

* Generator 有两个特征，一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态。

* ES6 诞生以前，异步编程一般通过回调函数、事件监听、发布/订阅、Promise 对象(社区版本，ES6对Promise进行了规范) 解决

* 由于回调函数多层嵌套会导致回调地狱问题、Promise只是回调函数的改进写法，链式调用易造成代码冗余、语义不清，所以 Generator 成为新的异步解决方案。

* Generator 函数是 “协程” 在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）。

* 整个 `Generator` 函数就是一个封装的异步任务，或者说是异步任务的容器。异步操作需要暂停的地方，都用yield语句注明。

* `Thunk 函数` 和 `co 模块` 都是为了解决 `Generator` 函数自动执行的问题。

#### Async 函数

答：
* `async` 就是 `Generator` 函数的语法糖，`async` 函数就是将 `Generator` 函数的`星号（*）`替换成`async`，将`yield`替换成`await`，仅此而已。

* async 函数对比 Generator 的四个优点：1、内置执行器。2、更好的语义。3.更广的适用性。4.返回值是 Promise

* async 函数写法：`async function() {}`,可以用在函数声明、函数表达式、对象中的方法、Class的方法、箭头函数。

* async函数返回一个 Promise 对象，只有async函数内部的异步操作执行完，才会执行返回的Promise 对象的then方法指定的回调函数。

* 错误处理可以将`await`放在`try...catch`代码块之中

* `async` 函数的实现原理，就是将 `Generator` 函数和自动执行器，包装在一个函数里。

* 比较：
  `Promise` 存在语义不清的问题。
  `Generator` 函数需要自动执行器。
  `Async` 函数的实现最简洁，最符合语义。它将 `Generator` 写法中的自动执行器，改在语言层面提供，代码量最少。


#### Class 类

答：
* JavaScript 生成实例对象的传统方法是通过构造函数, ES6 的`class`只是一个语法糖，新的`class`写法只是让对象原型的写法更加清晰、更像面向对象编程的语法。

* 使用 `new` 命令生成对象实例时，自动调用`constructor()`方法，如果没有显式定义，一个空的`constructor()`方法会被默认添加。

* 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。

* 在 `“类”` 的内部可以使用 `get` 和 `set` 关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。

* 使用 `static` 可以在类中定义静态方法和静态属性，使其不可在外部被调用。但是 `子类` 和 `super对象`可以调用。

* 使用 `#` 可以定义私有方法和私有属性

* Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。

#### 装饰器

答：`装饰器（Decorator）`作用是增强 JavaScript `类（class）`的功能，可以装饰类、装饰方法或属性。

* 应用场景有log输出日志、防抖节流、对象方法混入类等


## 三、ES6有哪些新特性（概述）

常用的主要有
1、let 和 const 块级作用域，变量不会提升。
2、变量解构赋值
3、对数组和字符串的一些扩展
4、箭头函数
5、Symbol 唯一值
6、Set 和 Map 数据结构
7、对 Promise 对象的规范
8、迭代器和for of循环
9、async 函数
10、Class 语法糖，extends 继承语法糖
11、装饰器