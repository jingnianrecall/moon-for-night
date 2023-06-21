---
title: JavaScript常用的数组方法
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

# JavaScript常用的数组方法

## 一、~~

### 下表列出了会修改原始数组的方法，以及相应的非修改方法：

| 修改方法  | 相应的非修改方法 | 注释 | 
| ------------- | ------------- |  ------------- |
| copyWithin()	| 没有相应的非修改方法 |  在数组内复制数组元素序列 | 
| fill()	| 没有相应的非修改方法 |  用静态值填充数组中从开始索引到结束索引的所有元素 | 
| pop()	| slice(0, -1) |  从数组中移除最后一个元素并返回该元素 | 
| push(v1, v2)	| concat([v1, v2]) |  在数组末尾添加一个或多个元素，并返回数组新的 length | 
| reverse()	| toReversed() |  就地反转数组中元素的顺序（前面变成后面，后面变成前面） | 
| shift()	| slice(1) |  从数组中移除第一个元素并返回该元素 | 
| sort()	| toSorted() |  对数组的元素进行排序并返回该数组 | 
| splice()	| toSpliced() |  从数组中添加和/或删除元素 | 
| unshift(v1, v2)	| toSpliced(0, 0, v1, v2) |  在数组的前面添加一个或多个元素，并返回数组新的 length | 


## 二、静态方法

### Array.from()
ES6新增，可以将类数组对象或可迭代对象转换为 Array 数组（浅拷贝）。

#### 从类数组对象构建数组（arguments）
```js
function f() {
  return Array.from(arguments);
}
f(1, 2, 3);
// [ 1, 2, 3 ]
```

#### 从 Set 构建数组（可实现去重）
```js
const set = new Set(["foo", "bar", "baz", "foo"]);
Array.from(set);
// [ "foo", "bar", "baz" ]
```

### Array.isArray()
判断是否为数组，如果参数是数组则返回 true ，否则返回 false 。

### Array.of()
ES6新增，可传入任意数量及类型的参数，创建一个新数组。
```js
console.log(Array.of('foo', 2, 'bar', true));
// Expected output: Array ["foo", 2, "bar", true]
```
这个方法的主要目的，是弥补数组构造函数 `Array()` 的不足。因为参数个数的不同，会导致 `Array()` 的行为有差异。

`Array.of()` 基本上可以用来替代 `Array()` 或 `new Array()`，并且不存在由于参数不同而导致的重载。它的行为非常统一。

## 三、实例方法

### Array.prototype.concat()

`concat()` 可以合并两个或多个数组，`不会更改` 现有数组，而是返回一个新数组。

```js
const letters = ["a", "b", "c"];
const numbers = [1, 2, 3];

const alphaNumeric = letters.concat(numbers);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

### Array.prototype.includes()

ES6新增，`includes()` 判断数组中是否存在给定的值，返回一个布尔值。
```js
[1, 2, 3].includes(2)     // true
[1, 2, 3].includes(4)     // false
[1, 2, NaN].includes(NaN) // true
```

### Array.prototype.join()

`join()` 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符。
```js
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"
```

### Array.prototype.indexOf()
`indexOf()` 方法返回数组中第一次出现给定元素的下标，如果不存在则返回 -1。
```js
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1
```


### Array.prototype.flat()

ES6新增，`flat()` 用于将嵌套的数组扁平化，变成一维的数组。该方法返回一个新数组，对原数据没有影响。

```js
[1, 2, [3, 4]].flat()
// [1, 2, 3, 4]
```

### Array.prototype.push()
`push()` 方法将指定的元素添加到数组的末尾，并返回新的数组长度。

### Array.prototype.unshift()
`unshift()` 方法将指定元素添加到数组的开头，并返回数组的新长度。

### Array.prototype.pop()
`pop()` 方法从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。

### Array.prototype.shift()
`shift()` 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

### Array.prototype.reverse()
`reverse()` 方法就地反转数组中的元素，并返回同一数组的引用，会改变原数组。

### Array.prototype.slice()
`slice()` 方法返回一个新的数组对象，这一对象是一个由 start 和 end 决定的原数组的浅拷贝（包括 start，不包括 end），其中 start 和 end 代表了数组元素的索引。原始数组不会被改变。
```js
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]
```

### Array.prototype.splice()
splice() 方法通过移除或者替换已存在的元素和/或添加新元素就地改变一个数组的内容。
```js
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]
```

### Array.prototype.sort()
sort() 方法就地对数组的元素进行排序，并返回对相同数组的引用。

## 四、迭代方法

### Array.prototype.forEach()

`forEach()` 方法对数组的每个元素执行一次给定的函数。

`forEach()` 循环无法使用 `break` `return` 中断。

### Array.prototype.map()
map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
```js
const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]
```

### Array.prototype.reduce() **
`reduce()` 方法对数组中的每个元素按序执行一个提供的 `reducer` 函数，每一次运行 `reducer` 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。
```js
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sumWithInitial);
// Expected output: 10
```

#### 参数
callbackFn
为数组中每个元素执行的函数。其返回值将作为下一次调用 `callbackFn` 时的 `accumulator` 参数。对于最后一次调用，返回值将作为 `reduce()` 的返回值。该函数被调用时将传入以下参数：

#### accumulator
上一次调用 `callbackFn` 的结果。在第一次调用时，如果指定了 `initialValue` 则为指定的值，否则为 array[0] 的值。

#### currentValue
当前元素的值。在第一次调用时，如果指定了 `initialValue`，则为 array[0] 的值，否则为 array[1]。

#### currentIndex
currentValue 在数组中的索引位置。在第一次调用时，如果指定了 `initialValue` 则为 `0`，否则为 `1`。

#### array
调用了 reduce() 的数组本身。

#### 应用

* 求对象数组中值的总和
为了对包含在对象数组中的值进行求和，必须提供一个 `initialValue`，以便每个项都通过回调函数处理。
```js
const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0,
);

console.log(sum); // 6
```

* 展平嵌套数组
```js
const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
// flattened 的值是 [0, 1, 2, 3, 4, 5]
```

### Array.prototype.every()

`every()` 方法测试一个数组内的所有元素是否都能通过指定函数的测试。它返回一个布尔值。

```js
const isBelowThreshold = (currentValue) => currentValue < 40;

const array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// Expected output: true
```

### Array.prototype.some()
some() 方法测试数组中是否至少有一个元素通过了由提供的函数实现的测试。如果在数组中找到一个元素使得提供的函数返回 true，则返回 true；否则返回 false。它不会修改数组。
```js
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
```




### Array.prototype.filter()

`filter()` 方法按条件进行筛选过滤数组内元素，返回一个新数组。

```js
// 使用 filter() 创建一个过滤数组，该数组删除了所有值小于 10 的元素。
function isBigEnough(value) {
  return value >= 10;
}

const filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

### Array.prototype.find()

ES6新增，`find()` 方法返回数组中满足条件的第一个元素的值，否则返回 undefined。

```js
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// Expected output: 12
```

### Array.prototype.findLast()

### Array.prototype.findIndex()

ES6新增，`findIndex()` 方法返回数组中满足条件的第一个元素的索引，若没有找到对应元素则返回 -1。

```js
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// Expected output: 3
```

### Array.prototype.findLastIndex()


### Array.prototype.group() 实验性

ES6新增，用于实现数组成员分组，比如 SQL 有 GROUP BY 子句和函数式编程有 MapReduce 方法。现在有一个提案，为 JavaScript 新增了数组实例方法group()和groupToMap()，它们可以根据分组函数的运行结果，将数组成员分组。

group()的参数是一个分组函数，原数组的每个成员都会依次执行这个函数，确定自己是哪一个组。
```js
const array = [1, 2, 3, 4, 5];

array.group((num, index, array) => {
  return num % 2 === 0 ? 'even': 'odd';
});
// { odd: [1, 3, 5], even: [2, 4] }
```

## 五、实例方法：toReversed()，toSorted()，toSpliced()，with()
很多数组的传统方法会改变原数组，比如push()、pop()、shift()、unshift()等等。数组只要调用了这些方法，它的值就变了。现在有一个提案，允许对数组进行操作时，不改变原数组，而返回一个原数组的拷贝。

这样的方法一共有四个。

* Array.prototype.toReversed() -> Array
* Array.prototype.toSorted(compareFn) -> Array
* Array.prototype.toSpliced(start, deleteCount, ...items) -> Array
* Array.prototype.with(index, value) -> Array

它们分别对应数组的原有方法。

* toReversed()对应reverse()，用来颠倒数组成员的位置。
* toSorted()对应sort()，用来对数组成员排序。
* toSpliced()对应splice()，用来在指定位置，删除指定数量的成员，并插入新成员。
* with(index, value)对应splice(index, 1, value)，用来将指定位置的成员替换为新的值。

上面是这四个新方法对应的原有方法，含义和用法完全一样，唯一不同的是不会改变原数组，而是返回原数组操作后的拷贝。

## 五、总结

* 

