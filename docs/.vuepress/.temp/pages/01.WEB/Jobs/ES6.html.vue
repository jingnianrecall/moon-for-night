<template><div><h2 id="一、基础" tabindex="-1"><a class="header-anchor" href="#一、基础" aria-hidden="true">#</a> 一、基础</h2>
<h3 id="_1-let-和-const" tabindex="-1"><a class="header-anchor" href="#_1-let-和-const" aria-hidden="true">#</a> 1. let 和 const</h3>
<p>答：</p>
<ul>
<li>1、let 和 const 声明的变量不会提升，可以避免产生一些错误。</li>
<li>2、const 可以声明常量，不可修改，建议默认使用const。</li>
<li>3、不可以在生命变量前访问，此时块级绑定还在临时死区（TDZ）中。</li>
<li>4、let 和 const 在循环中的行为，是ECMA标准中专门定义的。</li>
</ul>
<h3 id="_2-模板字符串" tabindex="-1"><a class="header-anchor" href="#_2-模板字符串" aria-hidden="true">#</a> 2. 模板字符串</h3>
<p>答：</p>
<ul>
<li>
<p>模版字符串用反引号（`）标识, 可以用来定义多行字符串，或者在字符串中嵌入变量和js表达式。</p>
</li>
<li>
<p>标签模板指函数后紧跟模板字符串，是函数调用的一种特殊形式。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数。</p>
</li>
</ul>
<h3 id="_3-箭头函数" tabindex="-1"><a class="header-anchor" href="#_3-箭头函数" aria-hidden="true">#</a> 3. 箭头函数</h3>
<p>答：</p>
<ul>
<li>使用箭头函数可以让语法更加简洁，并且不绑定自己的<code v-pre>this</code>，<code v-pre>arguments</code>，<code v-pre>super</code>或 <code v-pre>new.target</code>。</li>
<li>箭头函数 <code v-pre>this</code> 绑定的就是最近一层非箭头函数的 <code v-pre>this</code></li>
<li>需要动态 <code v-pre>this</code> 或 函数体很复杂，有许多行，或者函数内部有大量的读写操作，不应使用箭头函数。</li>
</ul>
<h4 id="和普通函数的区别" tabindex="-1"><a class="header-anchor" href="#和普通函数的区别" aria-hidden="true">#</a> 和普通函数的区别</h4>
<ul>
<li>箭头函数没有 <code v-pre>this</code> 、<code v-pre>arguments</code>，也没有原型和 <code v-pre>super</code>。</li>
<li><code v-pre>this</code> 、<code v-pre>arguments</code>在最近一层的非箭头函数</li>
<li>箭头函数没有 <code v-pre>[[Construct]]</code> 方法，不能被用作构造函数，不能通过 <code v-pre>new</code> 方式调用。</li>
</ul>
<h3 id="_4-symbol" tabindex="-1"><a class="header-anchor" href="#_4-symbol" aria-hidden="true">#</a> 4. Symbol</h3>
<p>答：</p>
<ul>
<li><code v-pre>Symbol</code> 函数主要用于生成唯一值，类似字符串。</li>
<li>用于对象属性名时，可以避免出现同名属性。</li>
</ul>
<h3 id="_5-set-和-map" tabindex="-1"><a class="header-anchor" href="#_5-set-和-map" aria-hidden="true">#</a> 5. Set 和 Map</h3>
<ul>
<li>
<p><code v-pre>Set</code> 类似于数组，但是成员的值都是唯一的，没有重复的值。配合 <code v-pre>Array.from</code> 方法可以实现数组去重</p>
</li>
<li>
<p><code v-pre>Map</code> 数据结构类似于对象，“键”的范围不限于对象的字符串，各种类型的值（包括对象）都可以当作键。</p>
</li>
<li>
<p><code v-pre>WeakMap</code>、<code v-pre>WeakSet</code> 属于弱引用，不可遍历。可以用在存储dom节点、和一些临时缓存数据等，防止内存泄漏。</p>
</li>
</ul>
<h3 id="_6-for-of" tabindex="-1"><a class="header-anchor" href="#_6-for-of" aria-hidden="true">#</a> 6. for of</h3>
<ul>
<li>for 循环原始写法在写双重循环时代码可读性差，for of 可以让语法更简洁。</li>
<li><code v-pre>for...in</code> 循环主要是为遍历对象而设计的，不适用于遍历数组。</li>
<li><code v-pre>for...of</code> 循环比传统 <code v-pre>for</code> 循环更简洁，也不像 <code v-pre>forEach</code> 方法不能中断</li>
</ul>
<h4 id="迭代器" tabindex="-1"><a class="header-anchor" href="#迭代器" aria-hidden="true">#</a> 迭代器</h4>
<p>迭代器，其实就是一个具有 <code v-pre>next()</code> 方法的对象，每次调用 <code v-pre>next()</code> 都会返回一个结果对象，该结果对象有两个属性，<code v-pre>value</code> 表示当前的值，<code v-pre>done</code> 表示遍历是否结束。</p>
<h3 id="_7-解构赋值" tabindex="-1"><a class="header-anchor" href="#_7-解构赋值" aria-hidden="true">#</a> 7. 解构赋值</h3>
<ul>
<li>
<p>从数组和对象中提取值，对变量进行赋值，这被称为解构赋值</p>
</li>
<li>
<p>可以用在数组、对象、字符串、函数参数等，方便取值 语法清晰</p>
</li>
</ul>
<h3 id="_8-增强的对象字面量" tabindex="-1"><a class="header-anchor" href="#_8-增强的对象字面量" aria-hidden="true">#</a> 8. 增强的对象字面量</h3>
<p>答：</p>
<h4 id="对象键值对-key-value名称相同时-可以简写。" tabindex="-1"><a class="header-anchor" href="#对象键值对-key-value名称相同时-可以简写。" aria-hidden="true">#</a> 对象键值对 key value名称相同时，可以简写。</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> something <span class="token operator">=</span> <span class="token string">'y'</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">something</span><span class="token operator">:</span> something
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> something <span class="token operator">=</span> <span class="token string">'y'</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token punctuation">{</span>
  something
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="动态属性" tabindex="-1"><a class="header-anchor" href="#动态属性" aria-hidden="true">#</a> 动态属性</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token string">'a'</span> <span class="token operator">+</span> <span class="token string">'_'</span> <span class="token operator">+</span> <span class="token string">'b'</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">'z'</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>a_b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// z</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、重点" tabindex="-1"><a class="header-anchor" href="#二、重点" aria-hidden="true">#</a> 二、重点</h2>
<h4 id="promise-对象" tabindex="-1"><a class="header-anchor" href="#promise-对象" aria-hidden="true">#</a> Promise 对象</h4>
<p>答：</p>
<ul>
<li>
<p>Promise 可以获取异步操作的消息，有三种状态：进行中（pending）、成功（fulfilled）、失败（rejected）。</p>
</li>
<li>
<p>Promise 对象的两个特点: 1、对象的状态不受外界影响 2、一旦状态改变，就不会再变。</p>
</li>
<li>
<p>Promise 缺点：
1、无法取消Promise，一旦新建它就会立即执行，无法中途取消。
2、如果不设置回调函数 如catch()，Promise内部抛出的错误，不会反应到外部。
3、当处于pending状态时，无法得知目前执行进度。</p>
</li>
<li>
<p>Promise.prototype.then()方法
状态改变时的回调函数，第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数，它们都是可选的。
then方法返回的是一个新的Promise实例，可以进行链式调用（解决回调地狱）。</p>
</li>
<li>
<p>Promise.prototype.catch()方法，发生异常错误的回调函数，推荐使用（then方法的第二个参数形式不推荐）。</p>
</li>
<li>
<p>Promise.prototype.finally()方法，无论状态成功还是失败都会执行。（ES2018）</p>
</li>
<li>
<p>Promise.prototype.all()方法，参数必须为数组或可迭代类型，参数中所有promise实例都执行成功才会进入成功状态，有一个失败即进入catch。（如果参数内部（promise实例）写了catch方法例外。）</p>
</li>
<li>
<p>Promise.prototype.allSettled()方法，无论参数内部（promise实例）状态成功还是失败都会返回fulfilled。（ES2020）</p>
</li>
<li>
<p>Promise.prototype.any()方法，参数实例有一个变成fulfilled 成功状态，包装实例就会变成fulfilled状态；所有参数实例都变成rejected状态，包装实例才会变成rejected状态。</p>
</li>
<li>
<p>Promise.prototype.race()方法，参数实例谁最先执行完成，就返回谁的结果。不管是成功还是失败，只返回最快的结果。</p>
</li>
<li>
<p>Promise.resolve()方法，将现有对象转为 Promise 对象。</p>
</li>
<li>
<p>Promise.reject()方法，返回一个新的 Promise 实例(失败状态)。</p>
</li>
</ul>
<h4 id="generator-函数" tabindex="-1"><a class="header-anchor" href="#generator-函数" aria-hidden="true">#</a> Generator 函数</h4>
<p>答：</p>
<ul>
<li>
<p>Generator 函数是 ES6 提供的一种异步编程解决方案，Generator 可以封装了多个内部状态，执行 Generator 函数会返回一个遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。</p>
</li>
<li>
<p>Generator 有两个特征，一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态。</p>
</li>
<li>
<p>ES6 诞生以前，异步编程一般通过回调函数、事件监听、发布/订阅、Promise 对象(社区版本，ES6对Promise进行了规范) 解决</p>
</li>
<li>
<p>由于回调函数多层嵌套会导致回调地狱问题、Promise只是回调函数的改进写法，链式调用易造成代码冗余、语义不清，所以 Generator 成为新的异步解决方案。</p>
</li>
<li>
<p>Generator 函数是 “协程” 在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）。</p>
</li>
<li>
<p>整个 <code v-pre>Generator</code> 函数就是一个封装的异步任务，或者说是异步任务的容器。异步操作需要暂停的地方，都用yield语句注明。</p>
</li>
<li>
<p><code v-pre>Thunk 函数</code> 和 <code v-pre>co 模块</code> 都是为了解决 <code v-pre>Generator</code> 函数自动执行的问题。</p>
</li>
</ul>
<h4 id="async-函数" tabindex="-1"><a class="header-anchor" href="#async-函数" aria-hidden="true">#</a> Async 函数</h4>
<p>答：</p>
<ul>
<li>
<p><code v-pre>async</code> 就是 <code v-pre>Generator</code> 函数的语法糖，<code v-pre>async</code> 函数就是将 <code v-pre>Generator</code> 函数的<code v-pre>星号（*）</code>替换成<code v-pre>async</code>，将<code v-pre>yield</code>替换成<code v-pre>await</code>，仅此而已。</p>
</li>
<li>
<p>async 函数对比 Generator 的四个优点：1、内置执行器。2、更好的语义。3.更广的适用性。4.返回值是 Promise</p>
</li>
<li>
<p>async 函数写法：<code v-pre>async function() {}</code>,可以用在函数声明、函数表达式、对象中的方法、Class的方法、箭头函数。</p>
</li>
<li>
<p>async函数返回一个 Promise 对象，只有async函数内部的异步操作执行完，才会执行返回的Promise 对象的then方法指定的回调函数。</p>
</li>
<li>
<p>错误处理可以将<code v-pre>await</code>放在<code v-pre>try...catch</code>代码块之中</p>
</li>
<li>
<p><code v-pre>async</code> 函数的实现原理，就是将 <code v-pre>Generator</code> 函数和自动执行器，包装在一个函数里。</p>
</li>
<li>
<p>比较：
<code v-pre>Promise</code> 存在语义不清的问题。
<code v-pre>Generator</code> 函数需要自动执行器。
<code v-pre>Async</code> 函数的实现最简洁，最符合语义。它将 <code v-pre>Generator</code> 写法中的自动执行器，改在语言层面提供，代码量最少。</p>
</li>
</ul>
<h4 id="class-类" tabindex="-1"><a class="header-anchor" href="#class-类" aria-hidden="true">#</a> Class 类</h4>
<p>答：</p>
<ul>
<li>
<p>JavaScript 生成实例对象的传统方法是通过构造函数, ES6 的<code v-pre>class</code>只是一个语法糖，新的<code v-pre>class</code>写法只是让对象原型的写法更加清晰、更像面向对象编程的语法。</p>
</li>
<li>
<p>使用 <code v-pre>new</code> 命令生成对象实例时，自动调用<code v-pre>constructor()</code>方法，如果没有显式定义，一个空的<code v-pre>constructor()</code>方法会被默认添加。</p>
</li>
<li>
<p>类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。</p>
</li>
<li>
<p>在 <code v-pre>“类”</code> 的内部可以使用 <code v-pre>get</code> 和 <code v-pre>set</code> 关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。</p>
</li>
<li>
<p>使用 <code v-pre>static</code> 可以在类中定义静态方法和静态属性，使其不可在外部被调用。但是 <code v-pre>子类</code> 和 <code v-pre>super对象</code>可以调用。</p>
</li>
<li>
<p>使用 <code v-pre>#</code> 可以定义私有方法和私有属性</p>
</li>
<li>
<p>Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。</p>
</li>
</ul>
<h4 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h4>
<p>答：<code v-pre>装饰器（Decorator）</code>作用是增强 JavaScript <code v-pre>类（class）</code>的功能，可以装饰类、装饰方法或属性。</p>
<ul>
<li>应用场景有log输出日志、防抖节流、对象方法混入类等</li>
</ul>
<h2 id="三、es6有哪些新特性-概述" tabindex="-1"><a class="header-anchor" href="#三、es6有哪些新特性-概述" aria-hidden="true">#</a> 三、ES6有哪些新特性（概述）</h2>
<p>常用的主要有
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
11、装饰器</p>
</div></template>


