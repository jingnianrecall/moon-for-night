---
title: Class 类的基本语法
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

# Class 类的基本语法

## 一、类的由来

JavaScript 语言中，生成实例对象的传统方法是通过构造函数。
```js
function Point(x, y) {
  this.x = x;
  this.y = y;
}

Point.prototype.toString = function () {
  return '(' + this.x + ', ' + this.y + ')';
};

var p = new Point(1, 2);
```
ES6 提供了更接近传统语言（Java、C#）的写法，引入了 `Class（类）`这个概念，作为对象的模板。通过`class`关键字，可以定义类。
```js
// 上面得方法用class类改写
class Point {
  // 构造方法
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  // 类的方法都定义在prototype原型对象上
  toString() {
    return '(' + this.x + ', ' + this.y + ')';
  }
}
```
ES6 的`class`可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的`class`写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。

## 二、基本使用

### constructor 方法
constructor()方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor()方法，如果没有显式定义，一个空的constructor()方法会被默认添加。

```js
class Point {
}

// 等同于
class Point {
  constructor() {}
}
```
类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。

### 类的实例
使用new命令生成类的实例，类的属性和方法，除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。

与 ES5 一样，类的所有实例共享一个原型对象。

### 实例属性的新写法
ES2022 为类的实例属性，又规定了一种新写法。实例属性现在除了可以定义在constructor()方法里面的this上面，也可以定义在类内部的最顶层。

```js
// 原来的写法
class IncreasingCounter {
  constructor() {
    this._count = 0;
  }
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}
```
上面示例中，实例属性_count定义在constructor()方法里面的this上面。

现在的新写法是，这个属性也可以定义在类的最顶层，其他都不变。
```js
class IncreasingCounter {
  _count = 0;
  get value() {
    console.log('Getting the current value!');
    return this._count;
  }
  increment() {
    this._count++;
  }
}
```
注：新写法定义的属性是实例对象自身的属性，而不是定义在实例对象的原型上面。

### 取值函数（getter）和存值函数（setter）
与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。

### 表达式定义
* 类的属性名，可以采用表达式。
* 与函数一样，类也可以使用表达式的形式定义。
```js
let methodName = 'getArea';
// 类 表达式形式
const MyClass = class Me {
  getClassName() {
    return Me.name;
  }

  // 类属性名 表达式形式
  [methodName]() {
    // ...
  }
};
```

### 静态方法
类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

父类的静态方法，可以被子类继承。
```js
class Foo {
  static classMethod() {
    return 'hello';
  }
}

class Bar extends Foo {
}

// 父类Foo有一个静态方法，子类Bar可以调用这个方法。
Bar.classMethod() // 'hello'
```
静态方法也是可以从super对象上调用的。


### 静态属性
静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。
```js
// 老写法
class Foo {
  // ...
}
Foo.prop = 1;

// 新写法
class Foo {
  static prop = 1;
}
```
上面的写法为Foo类定义了一个静态属性prop。

### 私有方法和私有属性

#### 早期解决方案
私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。这是常见需求，有利于代码的封装，但早期的 ES6 不提供，只能通过变通方法模拟实现。

* 一种做法是在命名上加以区别，如 `_方法名`。但是，这种命名是不保险的，在类的外部，还是可以调用到这个方法。
* 利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。

#### 私有属性正式写法
ES2022正式为class添加了私有属性，方法是在属性名之前使用#表示。
```js
class IncreasingCounter {
  #count = 0;
  get value() {
    console.log('Getting the current value!');
    return this.#count;
  }
  increment() {
    this.#count++;
  }
}
```
上面代码中，#count就是私有属性，只能在类的内部使用（this.#count）。如果在类的外部使用，就会报错。

#### in 运算符
直接访问某个类不存在的私有属性会报错，但是访问不存在的公开属性不会报错。这个特性可以用来判断，某个对象是否为类的实例。
ES2022 改进了in运算符，使它也可以用来判断私有属性。返回一个布尔值。


## 三、Class类 的注意点
* 默认使用严格模式
* 不存在变量提升
* 类的方法内部如果含有this，它默认指向类的实例。
* 默认使用严格模式

## 四、Class 的继承
Class 可以通过 `extends` 关键字实现继承，让子类继承父类的属性和方法。`extends` 的写法比 `ES5` 的原型链继承，要清晰和方便很多。
```js
class Point {
}

class ColorPoint extends Point {
}
```
ES6 规定，子类必须在`constructor()`方法中调用`super()`，否则就会报错。这是因为子类自己的`this`对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，添加子类自己的实例属性和方法。如果不调用`super()`方法，子类就得不到自己的`this`对象。

### 为什么子类的构造函数，一定要调用super()？
 因为 `ES6` 的继承机制，与 `ES5` 完全不同。ES5 的继承机制，是先创造一个独立的子类的实例对象，然后再将父类的方法添加到这个对象上面，即“实例在前，继承在后”。ES6 的继承机制，则是先将父类的属性和方法，加到一个空的对象上面，然后再将该对象作为子类的实例，即“继承在前，实例在后”。这就是为什么 ES6 的继承必须先调用`super()`方法，因为这一步会生成一个继承父类的`this`对象，没有这一步就无法继承父类。

注意，这意味着新建子类实例时，父类的构造函数必定会先运行一次。

### 私有属性和私有方法的继承
父类所有的属性和方法，都会被子类继承（包括静态方法），除了私有的属性和方法。

注：如果父类定义了私有属性的读写方法，子类就可以通过这些方法，读写私有属性。

### super 关键字
super这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。

第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super()函数。
第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。

### 类的 prototype 属性和__proto__属性
ES5 实现之中，每一个对象都有__proto__属性，指向对应的构造函数的prototype属性。Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。

（1）子类的__proto__属性，表示构造函数的继承，总是指向父类。

（2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。
```js
class A {
}

class B extends A {
}

B.__proto__ === A // true
B.prototype.__proto__ === A.prototype // true
```
上面代码中，子类B的__proto__属性指向父类A，子类B的prototype属性的__proto__属性指向父类A的prototype属性。

### Mixin 模式的实现

Mixin 指的是多个对象合成一个新的对象，新对象具有各个组成成员的接口。

## 五、Babel 是如何编译 Class 的

我们可以在 Babel 官网的 Try it out 页面查看 ES6 的代码编译成什么样子。

ES6 代码为：
```js
class Person {
    constructor(name) {
        this.name = name;
    }
}
```
Babel 编译为：
```js
"use strict";

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var Person = function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
};
```
_classCallCheck 的作用是检查 Person 是否是通过 new 的方式调用，在上面，我们也说过，类必须使用 new 调用，否则会报错。
当我们使用 var person = Person() 的形式调用的时候，this 指向 window，所以 instance instanceof Constructor 就会为 false，与 ES6 的要求一致。

## 六、总结

* JavaScript 生成实例对象的传统方法是通过构造函数, ES6 的`class`只是一个语法糖，新的`class`写法只是让对象原型的写法更加清晰、更像面向对象编程的语法。

* 使用 `new` 命令生成对象实例时，自动调用`constructor()`方法，如果没有显式定义，一个空的`constructor()`方法会被默认添加。

* 类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。

* 在 `“类”` 的内部可以使用 `get` 和 `set` 关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。

* 使用 `static` 可以在类中定义静态方法和静态属性，使其不可在外部被调用。但是 `子类` 和 `super对象`可以调用。

* 使用 `#` 可以定义私有方法和私有属性

* Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。

