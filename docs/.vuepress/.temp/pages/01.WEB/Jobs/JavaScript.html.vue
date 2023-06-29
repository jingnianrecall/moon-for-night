<template><div><h2 id="一、基础" tabindex="-1"><a class="header-anchor" href="#一、基础" aria-hidden="true">#</a> 一、基础</h2>
<h3 id="_1、javascript包含几种数据类型-分别是" tabindex="-1"><a class="header-anchor" href="#_1、javascript包含几种数据类型-分别是" aria-hidden="true">#</a> 1、JavaScript包含几种数据类型，分别是？</h3>
<h4 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型" aria-hidden="true">#</a> 数据类型</h4>
<p><code v-pre>undefined</code>、<code v-pre>null</code>、布尔值（<code v-pre>Boolean</code>）、字符串（<code v-pre>String</code>）、数值（<code v-pre>Number</code>）、大整数（<code v-pre>BigInt</code>）、对象（<code v-pre>Object</code>）、<code v-pre>Symbol</code>。</p>
<h4 id="引用数据类型" tabindex="-1"><a class="header-anchor" href="#引用数据类型" aria-hidden="true">#</a> 引用数据类型</h4>
<p><code v-pre>Object</code> 属于引用数据类型，包括 <code v-pre>Array</code>、<code v-pre>Function</code>、<code v-pre>Date</code>、<code v-pre>RegExp</code>、<code v-pre>Error</code>、<code v-pre>Arguments</code> 等。</p>
<h4 id="es6-新增" tabindex="-1"><a class="header-anchor" href="#es6-新增" aria-hidden="true">#</a> ES6 新增</h4>
<p><code v-pre>Symbol</code> 表示唯一值。
<code v-pre>BigInt</code>（ES2020） 用来表示整数，没有位数的限制。</p>
<h3 id="_2、typeof-和-instanceof-的区别" tabindex="-1"><a class="header-anchor" href="#_2、typeof-和-instanceof-的区别" aria-hidden="true">#</a> 2、typeof 和 instanceof 的区别</h3>
<ul>
<li><code v-pre>typeof</code> 用来判断原始数据类型（<code v-pre>null</code> 除外），返回一个字符串</li>
<li><code v-pre>instanceof</code> 用来判断引用数据类型（<code v-pre>function</code> 除外），返回的是布尔值</li>
<li><code v-pre>Object.prototype.toString</code>，返回如 [object,class] 的字符串，<code v-pre>class</code> 指代的是其检测出的数据类型。</li>
</ul>
<p>注：调用 <code v-pre>typeof null</code>返回的是<code v-pre>object</code>，这是因为特殊值 <code v-pre>null</code> 被认为是一个对空对象的引用（也叫空对象指针）。</p>
<h4 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h4>
<ul>
<li>
<p><code v-pre>instanceof</code> 主要实现原理是只要右边变量的 <code v-pre>prototype</code> 在左边变量的原型链上</p>
</li>
<li>
<p><code v-pre>typeof</code> 主要实现原理是 <code v-pre>js</code> 在底层存储变量的时候，会在变量的机器码的低位1-3位存储其类型信息，通过机器码判断。</p>
</li>
</ul>
<h3 id="_3、javascript常用的数组方法" tabindex="-1"><a class="header-anchor" href="#_3、javascript常用的数组方法" aria-hidden="true">#</a> 3、JavaScript常用的数组方法</h3>
<h4 id="改变原数组" tabindex="-1"><a class="header-anchor" href="#改变原数组" aria-hidden="true">#</a> 改变原数组</h4>
<p><code v-pre>push()</code> : 添加元素（<strong>数组末尾</strong>）</p>
<p><code v-pre>unshift()</code> : 添加元素（<strong>数组头部</strong>）</p>
<p><code v-pre>pop()</code> : 删除数组 <strong>最后一个</strong> 元素</p>
<p><code v-pre>shift()</code> : 删除数组 <strong>第一个</strong> 元素</p>
<p><code v-pre>reverse()</code> : 数组反转</p>
<p><code v-pre>sort()</code> : 排序</p>
<p><code v-pre>splice</code> : 移除或替换已存在的元素和/或添加新元素就地改变一个数组的内容。</p>
<h4 id="不改变原数组" tabindex="-1"><a class="header-anchor" href="#不改变原数组" aria-hidden="true">#</a> 不改变原数组</h4>
<p><code v-pre>concat()</code> : 可以合并两个或多个数组，<strong>不会更改</strong> 数组，返回一个 <strong>新数组</strong>。</p>
<p><code v-pre>join()</code> : 可以把数组（或一个类数组对象）的所有元素连接成一个字符串并返回，用 <strong>逗号</strong> 或指定的分隔符字符串分隔。</p>
<p><code v-pre>slice()</code> : 返回一个新的数组对象，这一对象是一个由 start 和 end 决定的原数组的浅拷贝（包括 start，不包括 end）。</p>
<p><code v-pre>flat()</code> : 用于将嵌套的数组扁平化，变成一维的数组。</p>
<p><code v-pre>filter()</code> : 按条件进行筛选过滤数组内元素，返回一个新数组。</p>
<p><code v-pre>some()</code> : 测试数组中是否至少有一个元素通过了由提供的函数实现的测试。</p>
<p><code v-pre>reduce</code> : 每次传入上次运算的结果和当前循环的元素值，可用于数组求和等实现</p>
<p><code v-pre>find</code> : 返回数组中满足条件的第一个元素的值。</p>
<p><code v-pre>findIndex</code> : 返回数组中满足条件的第一个元素的索引。</p>
<h3 id="_4、javascript常用的字符串方法" tabindex="-1"><a class="header-anchor" href="#_4、javascript常用的字符串方法" aria-hidden="true">#</a> 4、JavaScript常用的字符串方法</h3>
<p><code v-pre>includes()</code> : 确定调用字符串是否包含 searchString。</p>
<p><code v-pre>indexOf</code> : 返回在调用 String 对象中第一次出现的 searchValue 的索引，如果未找到则返回 -1。</p>
<p><code v-pre>replace</code> : 替换指定字符串内容。</p>
<p><code v-pre>slice</code> : 截取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。</p>
<p><code v-pre>split</code> : 接受一个模式，比如通过逗号将字符串分割成一个有序的子串列表，将这些子串放入一个数组，并返回该数组。</p>
<p><code v-pre>trim</code> : 清除字符串两端空格。</p>
<h3 id="_5、javascript-深浅拷贝" tabindex="-1"><a class="header-anchor" href="#_5、javascript-深浅拷贝" aria-hidden="true">#</a> 5、JavaScript 深浅拷贝</h3>
<h4 id="浅拷贝" tabindex="-1"><a class="header-anchor" href="#浅拷贝" aria-hidden="true">#</a> 浅拷贝</h4>
<p>可以利用数组的一些方法比如：slice、concat 返回一个新数组的特性来实现拷贝。
如果数组元素是基本类型，就会拷贝一份，互不影响，而如果是对象或者数组，就会只拷贝对象和数组的引用，这样我们无论在新旧数组进行了修改，两者都会发生变化。</p>
<h4 id="深拷贝" tabindex="-1"><a class="header-anchor" href="#深拷贝" aria-hidden="true">#</a> 深拷贝</h4>
<p>可以使用 <code v-pre>JSON.parse(JSON.stringify(arr))</code> 实现深拷贝。</p>
<h4 id="实现" tabindex="-1"><a class="header-anchor" href="#实现" aria-hidden="true">#</a> 实现</h4>
<p>浅拷贝可以通过循环遍历把元素放入新对象即可。
深拷贝拷贝的时候判断一下属性值的类型，如果是对象，使用递归调用深拷贝函数。</p>
<h2 id="二、进阶" tabindex="-1"><a class="header-anchor" href="#二、进阶" aria-hidden="true">#</a> 二、进阶</h2>
<h3 id="javascript运行机制" tabindex="-1"><a class="header-anchor" href="#javascript运行机制" aria-hidden="true">#</a> JavaScript运行机制</h3>
<p>答：js是一门单线程语言，js的任务也要一个一个顺序执行。但如果一个任务耗时过长，那么后一个任务也必须等着。因此将任务分为同步任务和异步任务两类，比如我们浏览网页的时候，网页中包含的高清图片加载很慢。为了防止阻塞，加载图片等占用资源大耗时久的任务就需要用异步任务。先执行同步任务，把页面骨架和页面元素渲染出来，再执行异步任务，获取静态资源和后台数据，异步任务都要等待同步任务执行完成后执行。</p>
<p>同步任务和异步任务执行的过程会不断重复，就是事件循环 <code v-pre>Event Loop</code>。</p>
<p>异步任务又分宏任务和微任务（都属于异步任务），宏任务主要是原始的异步任务，比如定时器，微任务主要是ES6新出的一些异步规范，比如说promise。</p>
<p>宏任务执行前会先检查事件队列内是否有微任务，如果有先执行微任务，再执行宏任务。</p>
<p>执行顺序：同步任务 &gt; 微任务 &gt; 宏任务 优秀级从左到右</p>
<p>比如 <code v-pre>setTimeout</code> 这个函数，是经过指定时间后，把要执行的任务（如一个函数）加入到 Event Queue (事件队列)中，又因为是单线程任务要一个一个执行，如果前面的任务需要的时间太久，那么只能等着，导致真正的延迟时间就可能会大于预设时间。</p>
<h3 id="作用域和闭包" tabindex="-1"><a class="header-anchor" href="#作用域和闭包" aria-hidden="true">#</a> 作用域和闭包</h3>
<h4 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域" aria-hidden="true">#</a> 作用域</h4>
<p>答：作用域主要规定了如何查找变量，确定当前执行代码对变量的访问权限。
js执行代码的时候，每到一个函数会创建一个执行上下文，然后把执行上下文压入执行上下文栈，函数执行完，就会把函数的执行上下文栈弹出。
每个执行上下文都有三个属性：变量对象、作用域链、this</p>
<h4 id="闭包" tabindex="-1"><a class="header-anchor" href="#闭包" aria-hidden="true">#</a> 闭包</h4>
<p>答：闭包就是即使创建它的上下文已经销毁了，闭包函数依然可以访问到他的父级函数的变量。</p>
<p>比如说 <code v-pre>a</code> 函数中有变量 <code v-pre>name</code>, 内部函数 <code v-pre>b</code> 引用了 <code v-pre>a</code> 函数中的变量 <code v-pre>name</code>, 即使 <code v-pre>a</code> 函数的执行上下文已经销毁了，内部函数 <code v-pre>b</code> 也可以访问到 <code v-pre>a</code> 函数的 <code v-pre>name</code> 属性，这是因为内部函数 <code v-pre>b</code> 维护了一个作用域链，如果有引用的话js依然会让 <code v-pre>aFunContext.AO</code> 留在内存中，这就是闭包。</p>
<p>因为被引用的变量不会被回收，所以闭包可能会造成内存泄漏，但也不是所有的内存泄露都需要手动收回，也可能是代码逻辑写的有问题。</p>
<h3 id="原型和原型链" tabindex="-1"><a class="header-anchor" href="#原型和原型链" aria-hidden="true">#</a> 原型和原型链</h3>
<p>js的每个构造函数都有一个 <code v-pre>prototype</code> 属性，这个属性指向构造函数的实例原型，比如说构造函数生成一个实例，实例会有一个 <code v-pre>__proto__</code>属性指向构造函数的 <code v-pre>prototype</code> ，原型也有 <code v-pre>__proto__</code> 属性指向上级的原型，一直到 <code v-pre>Object.prototype</code> , <code v-pre>Object.prototype</code> 的<code v-pre>__proto__</code> 属性是 <code v-pre>null</code> 。</p>
<p>读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，依次向上查找直到最顶层，查找的这个链路就是原型链。</p>
<p>JavaScript 只是在两个对象之间创建一个关联，每一个对象都会从原型‘继承’属性”，这就是原型链继承，缺点就是所有实例会共享原型链上的属性</p>
<h3 id="继承-待完善" tabindex="-1"><a class="header-anchor" href="#继承-待完善" aria-hidden="true">#</a> 继承（<em><strong>待完善</strong></em>）</h3>
<p>继承包括原型链继承，借用构造函数(经典继承)，组合继承等</p>
<p>原型链继承就是JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾，“每一个对象都会从原型‘继承’属性”。</p>
<p>问题就是引用类型的属性被所有实例共享</p>
<p>借用构造函数(经典继承)</p>
<p>组合继承</p>
<h3 id="设计模式-待完善" tabindex="-1"><a class="header-anchor" href="#设计模式-待完善" aria-hidden="true">#</a> 设计模式（<em><strong>待完善</strong></em>）</h3>
</div></template>


