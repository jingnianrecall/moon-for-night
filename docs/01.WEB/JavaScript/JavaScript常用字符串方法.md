---
title: JavaScript常用字符串方法
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

> 说明：本内容转自MDN，来源<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript>，版权归原作者所有。

# JavaScript常用字符串方法

## 一、~~

### 

## 二、静态方法

### String.fromCharCode()
返回使用指定的 Unicode 值序列创建的字符串。

### String.fromCodePoint()
返回使用指定的码位序列创建的字符串。

### String.raw()
返回从原始模板字符串创建的字符串。

## 三、实例方法

### String.prototype.includes()
确定调用字符串是否包含 searchString。

### String.prototype.indexOf()
返回在调用 String 对象中第一次出现的 searchValue 的索引，如果未找到则返回 -1。

### String.prototype.replace()
替换指定字符串内容。

```js
const p = 'The quick brown fox jumps over the lazy dog. ';

console.log(p.replace('dog', 'monkey'));
// Expected output: "The quick brown fox jumps over the lazy monkey. "
```

### String.prototype.slice()
slice() 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。
```js
const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"
```

### String.prototype.split()
split() 方法接受一个模式，通过搜索模式将字符串分割成一个有序的子串列表，将这些子串放入一个数组，并返回该数组。

### String.prototype.substring()
substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集，或从开始索引直到字符串的末尾的一个子集。
```js
var anyString = "Mozilla";

// 输出 "Moz"
console.log(anyString.substring(0,3));
// 输出 "lla"
console.log(anyString.substring(4,7));
```

### String.prototype.trim()
trim() 方法从字符串的两端清除空格，返回一个新的字符串，而不修改原始字符串。


## 五、总结

* 

