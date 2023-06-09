---
title: Promise
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

# Promise

## 一、Promise含义

Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
从语法上说，Promise 是一个对象，可以获取异步操作的消息。

Promise 的三种状态：

* 进行中（pending）：已开始，但还没有返回成功（完成）或失败。
* 已成功（fulfilled）：意味着操作成功完成。
* 已失败（rejected）：意味着操作失败。

Promise 对象的两个特点:

* 对象的状态不受外界影响，只有异步操作的结果，可以决定当前是哪一种状态。
* 一旦状态改变，就不会再变。Promise对象的状态改变，只有两种可能：从pending变为`fulfilled`和从pending变为`rejected`，会一直保持这个结果，这时就称为 `resolved（已定型）`。

有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。

Promise 缺点。
* 首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。
* 其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
* 第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。


## 二、Promise构造函数及实例方法

### 构造函数
#### Promise()
Promise对象是一个构造函数，用来生成Promise实例。

### 实例方法
#### Promise.prototype.then()
Promise 实例具有then方法，也就是说，then方法是定义在原型对象 `Promise.prototype` 上的。
它的作用是为 Promise 实例添加状态改变时的回调函数。
then方法的第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数，它们都是可选的。

then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。

```js
getJSON("/post/1.json").then(function(post) {
  return getJSON(post.commentURL);
}).then(function (comments) {
  console.log("resolved: ", comments);
}, function (err){
  console.log("rejected: ", err);
});
```
上面代码中，第一个then方法指定的回调函数，返回的是另一个Promise对象。这时，第二个then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。如果变为resolved，就调用第一个回调函数，如果状态变为rejected，就调用第二个回调函数。

#### Promise.prototype.catch()
Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。
```js
getJSON('/posts.json').then(function(posts) {
  // ...
}).catch(function(error) {
  // 处理 getJSON 和 前一个回调函数运行时发生的错误
  console.log('发生错误！', error);
});
```
Promise 对象状态变为resolved，则会调用then()方法指定的回调函数；如果异步操作抛出错误，状态就会变为rejected，就会调用catch()方法指定的回调函数，处理这个错误。另外，then()方法指定的回调函数，如果运行中抛出错误，也会被catch()方法捕获。

```js
// 写法一 （不推荐）
promise
  .then(function(data) {
    // success
  }, function(err) {
    // error
  });

// 写法二 （推荐） 第二种写法可以捕获前面then方法执行中的错误，也更接近同步的写法（try/catch）
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // error
  });
```
建议不要在then()方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。

##### Promise 会吃掉错误

跟传统的try/catch代码块不同的是，如果没有使用catch()方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。

建议Promise 对象后面要跟catch()方法，这样可以处理 Promise 内部发生的错误。catch()方法返回的还是一个 Promise 对象，因此后面还可以接着调用then()方法。

```js
promise
  .then(function(data) { //cb
    // success
  })
  .catch(function(err) {
    // 下面一行会报错，因为 y 没有声明
    y + 2;
  })
  .catch(function(err) {
    // error
  });
```
catch()方法之中，还能再抛出错误，可以链式书写第二个catch方法，第二个catch()方法用来捕获前一个catch()方法抛出的错误。

#### Promise.prototype.finally()

finally()方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。
```js
promise
.then(result => {···})
.catch(error => {···})
.finally(() => {···});
```
上面代码中，不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。

下面是一个例子，服务器使用 Promise 处理请求，然后使用finally方法关掉服务器。
```js
server.listen(port)
  .then(function () {
    // ...
  })
  .finally(server.stop);
```
finally方法的回调函数不接受任何参数，不会知道 Promise 状态到底是成功还是失败。这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。

### 链式调用

连续执行两个或者多个异步操作是一个常见的需求，在上一个操作执行成功之后，开始下一个的操作，并带着上一步操作所返回的结果。我们可以通过创造一个 Promise 链来实现这种需求。

在过去，要想做多重的异步操作，会导致经典的`回调地狱`：
```js
doSomething(function(result) {
  doSomethingElse(result, function(newResult) {
    doThirdThing(newResult, function(finalResult) {
      console.log('Got the final result: ' + finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

现在，我们可以把回调绑定到返回的 Promise 上，形成一个 Promise 链：
```js
doSomething().then(function(result) {
  return doSomethingElse(result);
})
.then(function(newResult) {
  return doThirdThing(newResult);
})
.then(function(finalResult) {
  console.log('Got the final result: ' + finalResult);
})
.catch(failureCallback);
```

### 回调地狱造成的问题

1.难以复用
回调的顺序确定下来之后，想对其中的某些环节进行复用也很困难，牵一发而动全身。
举个例子，如果你想对 fs.stat 读取文件信息这段代码复用，因为回调中引用了外层的变量，提取出来后还需要对外层的代码进行修改。

2.堆栈信息被断开
我们知道，JavaScript 引擎维护了一个执行上下文栈，当函数执行的时候，会创建该函数的执行上下文压入栈中，当函数执行完毕后，会将该执行上下文出栈。
嵌套大量异步回调函数会导致发生异常错误时难以定位。

3.借助外层变量
当多个异步计算同时进行，比如这里遍历读取文件信息，由于无法预期完成顺序，必须借助外层作用域的变量，书写繁琐，也可能被其它同一作用域的函数访问并且修改，容易造成误操作。

4.大量嵌套可读性降低。

## 三、Promise静态方法

### Promise.all(iterable)
Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。
```js
const p = Promise.all([p1, p2, p3]);
```
上面代码中，Promise.all()方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。
另外，Promise.all()方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。

* （注：Array，Map，Set 都属于 ES6 的 iterable 类型）

p的状态由p1、p2、p3决定，分成两种情况。

（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。

（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。

注：如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，catch()方法返回的是一个新的 Promise 实例。该实例执行完catch方法后，也会变成resolved，导致Promise.all()方法参数里面的两个实例都会resolved,并不会触发Promise.all()的catch方法。


### Promise.allSettled(iterable)

有时候我们希望等到一组异步操作都结束了，不管每一个操作是成功还是失败，再进行下一步操作。但是，现有的 Promise 方法很难实现这个要求。

Promise.all()方法只适合所有异步操作都成功的情况，如果有一个操作失败，就无法满足要求。

为了解决这个问题，ES2020 引入了`Promise.allSettled()`方法，用来确定一组异步操作是否都结束了（不管成功或失败）。所以，它的名字叫做”Settled“，包含了”fulfilled“和”rejected“两种情况。

### Promise.any(iterable)

ES2021 引入了`Promise.any()`方法。该方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例返回。

```js
Promise.any([
  fetch('https://v8.dev/').then(() => 'home'),
  fetch('https://v8.dev/blog').then(() => 'blog'),
  fetch('https://v8.dev/docs').then(() => 'docs')
]).then((first) => {  // 只要有一个 fetch() 请求成功
  console.log(first);
}).catch((error) => { // 所有三个 fetch() 全部请求失败
  console.log(error);
});
```
只要参数实例有一个变成fulfilled 成功状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。

Promise.any()跟Promise.race()方法很像，只有一点不同，就是Promise.any()不会因为某个 Promise 变成rejected状态而结束，必须等到所有参数 Promise 变成rejected状态才会结束。

### Promise.race(iterable)

Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。
```js
const p = Promise.race([p1, p2, p3]);
```
上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。

就是p1, p2, p3谁最先执行完成，就返回谁的结果。不管是成功还是失败，只返回最快的结果。

### Promise.resolve(value)

有时需要将现有对象转为 Promise 对象，Promise.resolve()方法就起到这个作用。

```js
Promise.resolve('foo')
// 等价于
new Promise(resolve => resolve('foo'))
```

Promise.resolve()方法的参数分成四种情况。

（1）参数是一个 Promise 实例

（2）参数是一个thenable对象

（3）参数不是具有then()方法的对象，或根本就不是对象

（4）不带有任何参数

  Promise.resolve()方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。

注：立即resolve()的 Promise 对象，是在本轮“事件循环”（event loop）的结束时执行，而不是在下一轮“事件循环”的开始时。


### Promise.reject(reason)

Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected（失败）。


## 四、应用场景





## 五、红绿灯问题

题目：红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用 Promise 实现）
三个亮灯函数已经存在：

```js
function red(){
    console.log('red');
}
function green(){
    console.log('green');
}
function yellow(){
    console.log('yellow');
}
```

利用 then 和递归实现：

```js
function red(){
    console.log('red');
}
function green(){
    console.log('green');
}
function yellow(){
    console.log('yellow');
}

var light = function(timmer, cb){
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            cb();
            resolve();
        }, timmer);
    });
};

var step = function() {
    Promise.resolve().then(function(){
        return light(3000, red);
    }).then(function(){
        return light(2000, green);
    }).then(function(){
        return light(1000, yellow);
    }).then(function(){
        step();
    });
}

step();
```

## 六、总结

* Promise 是一个对象，可以获取异步操作的消息。

* Promise 有三种状态：进行中（pending）、成功（fulfilled）、失败（rejected）

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