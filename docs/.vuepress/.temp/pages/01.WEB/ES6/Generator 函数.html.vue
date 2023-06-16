<template><div><blockquote></blockquote>
<h1 id="generator-函数" tabindex="-1"><a class="header-anchor" href="#generator-函数" aria-hidden="true">#</a> Generator 函数</h1>
<h2 id="一、generator-函数简介" tabindex="-1"><a class="header-anchor" href="#一、generator-函数简介" aria-hidden="true">#</a> 一、Generator 函数简介</h2>
<h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3>
<p>Generator 函数是 ES6 提供的一种异步编程解决方案，Generator 函数是一个状态机，封装了多个内部状态。
执行 Generator 函数会返回一个遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。
形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">helloWorldGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>
  <span class="token keyword">yield</span> <span class="token string">'world'</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token string">'ending'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> hw <span class="token operator">=</span> <span class="token function">helloWorldGenerator</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用 Generator 函数后，该函数并不执行，返回的也不是函数运行结果，而是一个指向内部状态的指针对象，也就是一个遍历器对象（Iterator Object）。</p>
<p>必须调用遍历器对象的next方法，使得指针移向下一个状态。也就是说，每次调用next方法，内部指针就从函数头部或上一次停下来的地方开始执行，直到遇到下一个yield表达式（或return语句）为止。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>hw<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// { value: 'hello', done: false }</span>

hw<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// { value: 'world', done: false }</span>

hw<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// { value: 'ending', done: true }</span>

hw<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// { value: undefined, done: true }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>总结一下，调用 Generator 函数，返回一个遍历器对象，代表 Generator 函数的内部指针。以后，每次调用遍历器对象的next方法，就会返回一个有着value和done两个属性的对象。value属性表示当前的内部状态的值，是yield表达式后面那个表达式的值；done属性是一个布尔值，表示是否遍历结束。</p>
<h3 id="yield表达式" tabindex="-1"><a class="header-anchor" href="#yield表达式" aria-hidden="true">#</a> yield表达式</h3>
<p>yield表达式后面的表达式，只有当调用next方法、内部指针指向该语句时才会执行，因此等于为 JavaScript 提供了手动的“惰性求值”（Lazy Evaluation）的语法功能。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">yield</span>  <span class="token number">123</span> <span class="token operator">+</span> <span class="token number">456</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，yield后面的表达式123 + 456，不会立即求值，只会在next方法将指针移到这一句时，才会求值。</p>
<p>yield表达式与return语句既有相似之处，也有区别。相似之处在于，都能返回紧跟在语句后面的那个表达式的值。区别在于每次遇到yield，函数暂停执行，下一次再从该位置继续向后执行，而return语句不具备位置记忆的功能。一个函数里面，只能执行一次（或者说一个）return语句，但是可以执行多次（或者说多个）yield表达式。</p>
<p>Generator 函数可以返回一系列的值,使用 <code v-pre>yield（暂停标志）</code> 和 <code v-pre>.next()</code> 组合，可以实现手动执行每一步操作。</p>
<h2 id="二、next-方法的参数" tabindex="-1"><a class="header-anchor" href="#二、next-方法的参数" aria-hidden="true">#</a> 二、next 方法的参数</h2>
<p>Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的。通过next方法的参数，就有办法在 Generator 函数开始运行之后，继续向函数体内部注入值。
也就是说，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。</p>
<h2 id="三、实例方法" tabindex="-1"><a class="header-anchor" href="#三、实例方法" aria-hidden="true">#</a> 三、实例方法</h2>
<h3 id="generator-prototype-throw" tabindex="-1"><a class="header-anchor" href="#generator-prototype-throw" aria-hidden="true">#</a> Generator.prototype.throw()</h3>
<p>Generator 函数返回的遍历器对象，都有一个throw方法，可以在函数体外抛出错误，然后在 Generator 函数体内捕获。</p>
<h3 id="generator-prototype-return" tabindex="-1"><a class="header-anchor" href="#generator-prototype-return" aria-hidden="true">#</a> Generator.prototype.return()</h3>
<p>Generator 函数返回的遍历器对象，还有一个return()方法，可以返回给定的值，并且终结遍历 Generator 函数。</p>
<h3 id="next-、throw-、return-共同点" tabindex="-1"><a class="header-anchor" href="#next-、throw-、return-共同点" aria-hidden="true">#</a> next()、throw()、return() 共同点</h3>
<p>next()、throw()、return()这三个方法本质上是同一件事，可以放在一起理解。它们的作用都是让 Generator 函数恢复执行，并且使用不同的语句替换yield表达式。</p>
<p>next()是将yield表达式替换成一个值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">g</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">yield</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
  <span class="token keyword">return</span> result<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> gen <span class="token operator">=</span> <span class="token function">g</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Object {value: 3, done: false}</span>

gen<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Object {value: 1, done: true}</span>
<span class="token comment">// 相当于将 let result = yield x + y</span>
<span class="token comment">// 替换成 let result = 1;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，第二个next(1)方法就相当于将yield表达式替换成一个值1。如果next方法没有参数，就相当于替换成undefined。</p>
<p>throw()是将yield表达式替换成一个throw语句。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>gen<span class="token punctuation">.</span><span class="token function">throw</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'出错了'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught Error: 出错了</span>
<span class="token comment">// 相当于将 let result = yield x + y</span>
<span class="token comment">// 替换成 let result = throw(new Error('出错了'));</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>return()是将yield表达式替换成一个return语句。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>gen<span class="token punctuation">.</span><span class="token function">return</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Object {value: 2, done: true}</span>
<span class="token comment">// 相当于将 let result = yield x + y</span>
<span class="token comment">// 替换成 let result = return 2;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、应用场景" tabindex="-1"><a class="header-anchor" href="#四、应用场景" aria-hidden="true">#</a> 四、应用场景</h2>
<h3 id="_1-异步操作的同步化表达" tabindex="-1"><a class="header-anchor" href="#_1-异步操作的同步化表达" aria-hidden="true">#</a> 1.异步操作的同步化表达</h3>
<h3 id="_2-控制流管理" tabindex="-1"><a class="header-anchor" href="#_2-控制流管理" aria-hidden="true">#</a> 2.控制流管理</h3>
<p>按顺序执行，相较于回调函数和Promise链式调用可以进一步改善代码运行流程。</p>
<h3 id="_3-部署-iterator-接口" tabindex="-1"><a class="header-anchor" href="#_3-部署-iterator-接口" aria-hidden="true">#</a> 3.部署 Iterator 接口</h3>
<p>利用 Generator 函数，可以在任意对象上部署 Iterator 接口。</p>
<h3 id="_4-作为数据结构" tabindex="-1"><a class="header-anchor" href="#_4-作为数据结构" aria-hidden="true">#</a> 4.作为数据结构</h3>
<p>Generator 可以看作是数据结构，更确切地说，可以看作是一个数组结构，因为 Generator 函数可以返回一系列的值，这意味着它可以对任意表达式，提供类似数组的接口。</p>
<h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结" aria-hidden="true">#</a> 五、总结</h2>
<ul>
<li>
<p>Generator 函数是 ES6 提供的一种异步编程解决方案，Generator 可以封装了多个内部状态，执行 Generator 函数会返回一个遍历器对象，可以依次遍历 Generator 函数内部的每一个状态。</p>
</li>
<li>
<p>Generator 有两个特征，一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态。</p>
</li>
<li>
<p>Generator next方法可以接受参数，可以在 Generator 函数运行的不同阶段，从外部向内部注入不同的值，从而调整函数行为。</p>
</li>
<li>
<p>next()、throw()、return()这三个方法本质上是同一件事，可以放在一起理解。它们的作用都是让 Generator 函数恢复执行，并且使用不同的语句替换yield表达式。</p>
</li>
</ul>
</div></template>


