---
title: Async 函数
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

# Async 函数

## 一、Async 函数含义

ES2017 标准引入了 `async` 函数，使得异步操作变得更加方便。

`async` 函数是什么？一句话，它就是 Generator 函数的语法糖。

`async` 函数就是将 Generator 函数的`星号（*）`替换成`async`，将`yield`替换成`await`，仅此而已。

`async` 函数对 Generator 函数的改进，体现在以下四点。

### 1.内置执行器
Generator 函数的执行必须靠执行器，所以才有了`co`模块，而`async`函数自带执行器。
也就是说，`async`函数的执行，与普通函数一模一样，调用了`async function`函数，然后它就会自动执行。
不像 Generator 函数，需要调用`next`方法，或者用`co`模块，才能真正执行，得到最后结果。

### 2.更好的语义

`async`和`await`，比起`星号`和`yield`，语义更清楚了。`async`表示函数里有异步操作，`await`表示紧跟在后面的表达式需要等待结果。

### 3.更广的适用性

`co`模块约定，`yield`命令后面只能是 `Thunk` 函数或 `Promise` 对象，而`async`函数的`await`命令后面，可以是 `Promise` 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 `resolved` 的 `Promise` 对象）。

### 4.返回值是 Promise

async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 `Iterator` 对象方便多了。你可以用`then`方法指定下一步的操作。

进一步说，`async`函数完全可以看作多个异步操作，包装成的一个 `Promise` 对象，而`await`命令就是内部`then`命令的语法糖。

## 二、基本用法
async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
下面是一个例子。
```js
async function getStockPriceByName(name) {
  const symbol = await getStockSymbol(name);
  const stockPrice = await getStockPrice(symbol);
  return stockPrice;
}

getStockPriceByName('goog').then(function (result) {
  console.log(result);
});
```
上面代码是一个获取股票报价的函数，函数前面的async关键字，表明该函数内部有异步操作。调用该函数时，会立即返回一个Promise对象。

async 函数有多种使用形式。
```js
// 函数声明
async function foo() {}

// 函数表达式
const foo = async function () {};

// 对象的方法
let obj = { async foo() {} };
obj.foo().then(...)

// Class 的方法
class Storage {
  constructor() {
    this.cachePromise = caches.open('avatars');
  }

  async getAvatar(name) {
    const cache = await this.cachePromise;
    return cache.match(`/avatars/${name}.jpg`);
  }
}

const storage = new Storage();
storage.getAvatar('jake').then(…);

// 箭头函数
const foo = async () => {};
```

## 三、语法

async函数的语法规则总体上比较简单，难点是错误处理机制。

### 返回 Promise 对象
async函数返回一个 Promise 对象。

async函数内部return语句返回的值，会成为then方法回调函数的参数。
```js
async function f() {
  return 'hello world';
}

f().then(v => console.log(v))
// "hello world"
```
上面代码中，函数f内部return命令返回的值，会被then方法回调函数接收到。

async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到。
```js
async function f() {
  throw new Error('出错了');
}

f().then(
  v => console.log('resolve', v),
  e => console.log('reject', e)
)

//reject Error: 出错了
```

### Promise 对象的状态变化
async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。

下面是一个例子。
```js
async function getTitle(url) {
  let response = await fetch(url);
  let html = await response.text();
  return html.match(/<title>([\s\S]+)<\/title>/i)[1];
}
getTitle('https://tc39.github.io/ecma262/').then(console.log)
// "ECMAScript 2017 Language Specification"
```
上面代码中，函数getTitle内部有三个操作：抓取网页、取出文本、匹配页面标题。只有这三个操作全部完成，才会执行then方法里面的console.log。

### await 命令
正常情况下，await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。
```js
async function f() {
  // 等同于
  // return 123;
  return await 123;
}

f().then(v => console.log(v))
// 123
```
上面代码中，await命令的参数是数值123，这时等同于return 123。

另一种情况是，await命令后面是一个thenable对象（即定义了then方法的对象），那么await会将其等同于 Promise 对象。

任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行。

有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。这时可以将第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，第二个await都会执行。
```js
async function f() {
  try {
    await Promise.reject('出错了');
  } catch(e) {
  }
  return await Promise.resolve('hello world');
}

f()
.then(v => console.log(v))
// hello world
```

另一种方法是await后面的 Promise 对象再跟一个catch方法，处理前面可能出现的错误。

```js
async function f() {
  await Promise.reject('出错了')
    .catch(e => console.log(e));
  return await Promise.resolve('hello world');
}

f()
.then(v => console.log(v))
// 出错了
// hello world
```

### 错误处理
可以将await放在try...catch代码块之中。

### 使用注意点
* 1、await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。
* 2、多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。
* 3、await命令只能用在async函数之中，如果用在普通函数，就会报错。（可能有新提案）
* 4、async 函数可以保留运行堆栈

## 四、async 函数的实现原理
async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里。
```js
async function fn(args) {
  // ...
}

// 等同于

function fn(args) {
  return spawn(function* () {
    // ...
  });
}
```
所有的async函数都可以写成上面的第二种形式，其中的spawn函数就是自动执行器。


spawn函数(自动执行器)的实现（暂时略）。


## 五、与其他异步处理方法的比较
Promise 的写法比回调函数的写法大大改进，但代码中全是 Promise 的 API（then、catch等等），操作本身的语义反而不容易看出来，易造成语义不清。

Generator 函数语义比 Promise 写法更清晰，但必须有一个任务运行器，自动执行 Generator 函数（自动执行器）。
它返回一个 Promise 对象，而且必须保证yield语句后面的表达式，必须返回一个 Promise。

Async 函数的实现最简洁，最符合语义，几乎没有语义不相关的代码。它将 Generator 写法中的自动执行器，改在语言层面提供，不暴露给用户，因此代码量最少。


## 五、顶层 await
早期的语法规定是，`await`命令只能出现在 `async` 函数内部，否则都会报错。

从 ES2022 开始，允许在模块的顶层独立使用`await`命令，使得上面那行代码不会报错了。

它的主要目的是使用await解决模块异步加载的问题。

注：`顶层await`只能用在 `ES6` 模块，不能用在 `CommonJS` 模块。这是因为 `CommonJS` 模块的`require()`是同步加载，如果有`顶层await`，就没法处理加载了。

## 六、async 的一些讨论
### async 会取代 Generator 吗？
Generator 本来是用作生成器，使用 Generator 处理异步请求只是一个比较 hack 的用法，在异步方面，async 可以取代 Generator，但是 async 和 Generator 两个语法本身是用来解决不同的问题的。

### async 会取代 Promise 吗？
async 函数返回一个 Promise 对象
面对复杂的异步流程，Promise 提供的 all 和 race 会更加好用
Promise 本身是一个对象，所以可以在代码中任意传递
async 的支持率还很低，即使有 Babel，编译后也要增加 1000 行左右。

## 七、总结

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

* `ES2022` 开始，允许在模块的顶层独立使用`await`命令，主要目的是使用`await`解决模块异步加载的问题。
