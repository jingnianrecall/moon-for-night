---
title: Decorator 装饰器
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

# Decorator 装饰器

## 一、简介

`装饰器（Decorator）`用来增强 JavaScript `类（class）`的功能，许多面向对象的语言都有这种语法（有点类似java的注解），目前有一个提案将其引入了 ECMAScript。

装饰器是一种函数，写成@ + 函数名，可以用来装饰四种类型的值。

* 类
* 类的属性
* 类的方法
* 属性存取器（accessor）

```js
@frozen class Foo {
  @configurable(false)
  @enumerable(true)
  method() {}

  @throttle(500)
  expensiveMethod() {}
}
```
上面代码一共使用了四个装饰器，一个用在类本身（@frozen），另外三个用在类方法（@configurable()、@enumerable()、@throttle()）。它们不仅增加了代码的可读性，清晰地表达了意图，而且提供一种方便的手段，增加或修改类的功能。


## 二、应用场景

### 1.log输出日志
为一个方法添加 log 函数，检查输入的参数：
```js
class Math {
  @log
  add(a, b) {
    return a + b;
  }
}

function log(target, name, descriptor) {
  var oldValue = descriptor.value;

  descriptor.value = function(...args) {
    console.log(`Calling ${name} with`, args);
    return oldValue.apply(this, args);
  };

  return descriptor;
}

const math = new Math();

// Calling add with [2, 4]
math.add(2, 4);
```

### 2.debounce 防抖处理
有的时候，我们需要对执行的方法进行防抖处理:
```js
class Toggle extends React.Component {

  @debounce(500, true)
  handleClick() {
    console.log('toggle')
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        button
      </button>
    );
  }
}
```

### 3.mixin 对象混入
用于将对象的方法混入 Class 中：
```js
const SingerMixin = {
  sing(sound) {
    alert(sound);
  }
};

const FlyMixin = {
  // All types of property descriptors are supported
  get speed() {},
  fly() {},
  land() {}
};

@mixin(SingerMixin, FlyMixin)
class Bird {
  singMatingCall() {
    this.sing('tweet tweet');
  }
}

var bird = new Bird();
bird.singMatingCall();
// alerts "tweet tweet"
```

## 三、总结

* 装饰器主要用于:装饰类、装饰方法或属性。

* 应用场景有log输出日志、防抖节流、对象方法混入类等

