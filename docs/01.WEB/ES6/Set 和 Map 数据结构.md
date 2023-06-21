---
title: Set 和 Map 数据结构
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

# Set 和 Map 数据结构

## 一、Set
Set 类似于数组，但是成员的值都是唯一的，没有重复的值。

Set本身是一个构造函数，用来生成 Set 数据结构。

```js
const s = new Set();

[2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

for (let i of s) {
  console.log(i);
}
// 2 3 5 4
```
### Set 实例的属性和方法
#### Set 结构的实例有以下属性。

* Set.prototype.constructor：构造函数，默认就是Set函数。
* Set.prototype.size：返回Set实例的成员总数。

#### Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。

* Set.prototype.add(value)：添加某个值，返回 Set 结构本身。
* Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。
* Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。
* Set.prototype.clear()：清除所有成员，没有返回值。

#### Set 结构的实例有四个遍历方法，可以用于遍历成员。

* Set.prototype.keys()：返回键名的遍历器
* Set.prototype.values()：返回键值的遍历器
* Set.prototype.entries()：返回键值对的遍历器
* Set.prototype.forEach()：使用回调函数遍历每个成员

## 二、WeakSet 

### 特性
#### 1. 储存 DOM 节点
 WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。

#### 2. WeakSet 的键名所引用的对象是弱引用

垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

#### 3. 应用场景

WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。
如数据缓存，在不修改原有对象的情况下储存某些属性或者根据对象储存一些计算的值等，而又不想管理这些数据的死活时非常适合考虑使用 WeakMap。

## 三、Map
Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应。
```js
const m = new Map();
const o = {p: 'Hello World'};

m.set(o, 'content')
m.get(o) // "content"

m.has(o) // true
m.delete(o) // true
m.has(o) // false
```

## 四、WeakMap

### 特性
#### 1. WeakMap 只接受对象作为键名
```js
const map = new WeakMap();
map.set(1, 2);
// TypeError: Invalid value used as weak map key
map.set(null, 2);
// TypeError: Invalid value used as weak map key
```
#### 2. WeakMap 的键名所引用的对象是弱引用

垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。

#### 3. 应用场景

WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。
如数据缓存，在不修改原有对象的情况下储存某些属性或者根据对象储存一些计算的值等，而又不想管理这些数据的死活时非常适合考虑使用 WeakMap。


## 五、总结

* Set 类似于数组，但是成员的值都是唯一的，没有重复的值。使用 `Array.from` 方法可以实现数组去重

* Map 数据结构类似于对象，“键”的范围不限于对象的字符串，各种类型的值（包括对象）都可以当作键。

* WeakMap、WeakSet 属于弱引用，不可遍历。可以用在存储dom节点、和一些临时缓存数据等，防止内存泄漏。

