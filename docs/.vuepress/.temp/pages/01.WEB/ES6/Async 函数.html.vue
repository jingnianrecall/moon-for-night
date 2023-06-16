<template><div><blockquote></blockquote>
<h1 id="async-函数" tabindex="-1"><a class="header-anchor" href="#async-函数" aria-hidden="true">#</a> Async 函数</h1>
<h2 id="一、async-函数含义" tabindex="-1"><a class="header-anchor" href="#一、async-函数含义" aria-hidden="true">#</a> 一、Async 函数含义</h2>
<p>ES2017 标准引入了 <code v-pre>async</code> 函数，使得异步操作变得更加方便。</p>
<p><code v-pre>async</code> 函数是什么？一句话，它就是 Generator 函数的语法糖。</p>
<p><code v-pre>async</code> 函数就是将 Generator 函数的<code v-pre>星号（*）</code>替换成<code v-pre>async</code>，将<code v-pre>yield</code>替换成<code v-pre>await</code>，仅此而已。</p>
<p><code v-pre>async</code> 函数对 Generator 函数的改进，体现在以下四点。</p>
<h3 id="_1-内置执行器" tabindex="-1"><a class="header-anchor" href="#_1-内置执行器" aria-hidden="true">#</a> 1.内置执行器</h3>
<p>Generator 函数的执行必须靠执行器，所以才有了<code v-pre>co</code>模块，而<code v-pre>async</code>函数自带执行器。
也就是说，<code v-pre>async</code>函数的执行，与普通函数一模一样，调用了<code v-pre>async function</code>函数，然后它就会自动执行。
不像 Generator 函数，需要调用<code v-pre>next</code>方法，或者用<code v-pre>co</code>模块，才能真正执行，得到最后结果。</p>
<h3 id="_2-更好的语义" tabindex="-1"><a class="header-anchor" href="#_2-更好的语义" aria-hidden="true">#</a> 2.更好的语义</h3>
<p><code v-pre>async</code>和<code v-pre>await</code>，比起<code v-pre>星号</code>和<code v-pre>yield</code>，语义更清楚了。<code v-pre>async</code>表示函数里有异步操作，<code v-pre>await</code>表示紧跟在后面的表达式需要等待结果。</p>
<h3 id="_3-更广的适用性" tabindex="-1"><a class="header-anchor" href="#_3-更广的适用性" aria-hidden="true">#</a> 3.更广的适用性</h3>
<p><code v-pre>co</code>模块约定，<code v-pre>yield</code>命令后面只能是 <code v-pre>Thunk</code> 函数或 <code v-pre>Promise</code> 对象，而<code v-pre>async</code>函数的<code v-pre>await</code>命令后面，可以是 <code v-pre>Promise</code> 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 <code v-pre>resolved</code> 的 <code v-pre>Promise</code> 对象）。</p>
<h3 id="_4-返回值是-promise" tabindex="-1"><a class="header-anchor" href="#_4-返回值是-promise" aria-hidden="true">#</a> 4.返回值是 Promise</h3>
<p>async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 <code v-pre>Iterator</code> 对象方便多了。你可以用<code v-pre>then</code>方法指定下一步的操作。</p>
<p>进一步说，<code v-pre>async</code>函数完全可以看作多个异步操作，包装成的一个 <code v-pre>Promise</code> 对象，而<code v-pre>await</code>命令就是内部<code v-pre>then</code>命令的语法糖。</p>
<h2 id="二、基本用法" tabindex="-1"><a class="header-anchor" href="#二、基本用法" aria-hidden="true">#</a> 二、基本用法</h2>
<p>async函数返回一个 Promise 对象，可以使用then方法添加回调函数。当函数执行的时候，一旦遇到await就会先返回，等到异步操作完成，再接着执行函数体内后面的语句。
下面是一个例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getStockPriceByName</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> symbol <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getStockSymbol</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> stockPrice <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getStockPrice</span><span class="token punctuation">(</span>symbol<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> stockPrice<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">getStockPriceByName</span><span class="token punctuation">(</span><span class="token string">'goog'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码是一个获取股票报价的函数，函数前面的async关键字，表明该函数内部有异步操作。调用该函数时，会立即返回一个Promise对象。</p>
<p>async 函数有多种使用形式。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 函数声明</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token comment">// 函数表达式</span>
<span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 对象的方法</span>
<span class="token keyword">let</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token keyword">async</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
obj<span class="token punctuation">.</span><span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>

<span class="token comment">// Class 的方法</span>
<span class="token keyword">class</span> <span class="token class-name">Storage</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>cachePromise <span class="token operator">=</span> caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">'avatars'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token function">getAvatar</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>cachePromise<span class="token punctuation">;</span>
    <span class="token keyword">return</span> cache<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">/avatars/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.jpg</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> storage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Storage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
storage<span class="token punctuation">.</span><span class="token function">getAvatar</span><span class="token punctuation">(</span><span class="token string">'jake'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>…<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 箭头函数</span>
<span class="token keyword">const</span> <span class="token function-variable function">foo</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、语法" tabindex="-1"><a class="header-anchor" href="#三、语法" aria-hidden="true">#</a> 三、语法</h2>
<p>async函数的语法规则总体上比较简单，难点是错误处理机制。</p>
<h3 id="返回-promise-对象" tabindex="-1"><a class="header-anchor" href="#返回-promise-对象" aria-hidden="true">#</a> 返回 Promise 对象</h3>
<p>async函数返回一个 Promise 对象。</p>
<p>async函数内部return语句返回的值，会成为then方法回调函数的参数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">'hello world'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// "hello world"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，函数f内部return命令返回的值，会被then方法回调函数接收到。</p>
<p>async函数内部抛出错误，会导致返回的 Promise 对象变为reject状态。抛出的错误对象会被catch方法回调函数接收到。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'出错了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token parameter">v</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'resolve'</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token parameter">e</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'reject'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span>
<span class="token punctuation">)</span>

<span class="token comment">//reject Error: 出错了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="promise-对象的状态变化" tabindex="-1"><a class="header-anchor" href="#promise-对象的状态变化" aria-hidden="true">#</a> Promise 对象的状态变化</h3>
<p>async函数返回的 Promise 对象，必须等到内部所有await命令后面的 Promise 对象执行完，才会发生状态改变，除非遇到return语句或者抛出错误。也就是说，只有async函数内部的异步操作执行完，才会执行then方法指定的回调函数。</p>
<p>下面是一个例子。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">getTitle</span><span class="token punctuation">(</span><span class="token parameter">url</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">fetch</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> html <span class="token operator">=</span> <span class="token keyword">await</span> response<span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> html<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;title>([\s\S]+)&lt;\/title></span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">getTitle</span><span class="token punctuation">(</span><span class="token string">'https://tc39.github.io/ecma262/'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>console<span class="token punctuation">.</span>log<span class="token punctuation">)</span>
<span class="token comment">// "ECMAScript 2017 Language Specification"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，函数getTitle内部有三个操作：抓取网页、取出文本、匹配页面标题。只有这三个操作全部完成，才会执行then方法里面的console.log。</p>
<h3 id="await-命令" tabindex="-1"><a class="header-anchor" href="#await-命令" aria-hidden="true">#</a> await 命令</h3>
<p>正常情况下，await命令后面是一个 Promise 对象，返回该对象的结果。如果不是 Promise 对象，就直接返回对应的值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 等同于</span>
  <span class="token comment">// return 123;</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> <span class="token number">123</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 123</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，await命令的参数是数值123，这时等同于return 123。</p>
<p>另一种情况是，await命令后面是一个thenable对象（即定义了then方法的对象），那么await会将其等同于 Promise 对象。</p>
<p>任何一个await语句后面的 Promise 对象变为reject状态，那么整个async函数都会中断执行。</p>
<p>有时，我们希望即使前一个异步操作失败，也不要中断后面的异步操作。这时可以将第一个await放在try...catch结构里面，这样不管这个异步操作是否成功，第二个await都会执行。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">'出错了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// hello world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一种方法是await后面的 Promise 对象再跟一个catch方法，处理前面可能出现的错误。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">'出错了'</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">e</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token keyword">await</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'hello world'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">v</span> <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// 出错了</span>
<span class="token comment">// hello world</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="错误处理" tabindex="-1"><a class="header-anchor" href="#错误处理" aria-hidden="true">#</a> 错误处理</h3>
<p>可以将await放在try...catch代码块之中。</p>
<h3 id="使用注意点" tabindex="-1"><a class="header-anchor" href="#使用注意点" aria-hidden="true">#</a> 使用注意点</h3>
<ul>
<li>1、await命令后面的Promise对象，运行结果可能是rejected，所以最好把await命令放在try...catch代码块中。</li>
<li>2、多个await命令后面的异步操作，如果不存在继发关系，最好让它们同时触发。</li>
<li>3、await命令只能用在async函数之中，如果用在普通函数，就会报错。（可能有新提案）</li>
<li>4、async 函数可以保留运行堆栈</li>
</ul>
<h2 id="四、async-函数的实现原理" tabindex="-1"><a class="header-anchor" href="#四、async-函数的实现原理" aria-hidden="true">#</a> 四、async 函数的实现原理</h2>
<p>async 函数的实现原理，就是将 Generator 函数和自动执行器，包装在一个函数里。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>

<span class="token keyword">function</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token parameter">args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">spawn</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token operator">*</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所有的async函数都可以写成上面的第二种形式，其中的spawn函数就是自动执行器。</p>
<p>spawn函数(自动执行器)的实现（暂时略）。</p>
<h2 id="五、与其他异步处理方法的比较" tabindex="-1"><a class="header-anchor" href="#五、与其他异步处理方法的比较" aria-hidden="true">#</a> 五、与其他异步处理方法的比较</h2>
<p>Promise 的写法比回调函数的写法大大改进，但代码中全是 Promise 的 API（then、catch等等），操作本身的语义反而不容易看出来，易造成语义不清。</p>
<p>Generator 函数语义比 Promise 写法更清晰，但必须有一个任务运行器，自动执行 Generator 函数（自动执行器）。
它返回一个 Promise 对象，而且必须保证yield语句后面的表达式，必须返回一个 Promise。</p>
<p>Async 函数的实现最简洁，最符合语义，几乎没有语义不相关的代码。它将 Generator 写法中的自动执行器，改在语言层面提供，不暴露给用户，因此代码量最少。</p>
<h2 id="五、顶层-await" tabindex="-1"><a class="header-anchor" href="#五、顶层-await" aria-hidden="true">#</a> 五、顶层 await</h2>
<p>早期的语法规定是，<code v-pre>await</code>命令只能出现在 <code v-pre>async</code> 函数内部，否则都会报错。</p>
<p>从 ES2022 开始，允许在模块的顶层独立使用<code v-pre>await</code>命令，使得上面那行代码不会报错了。</p>
<p>它的主要目的是使用await解决模块异步加载的问题。</p>
<p>注：<code v-pre>顶层await</code>只能用在 <code v-pre>ES6</code> 模块，不能用在 <code v-pre>CommonJS</code> 模块。这是因为 <code v-pre>CommonJS</code> 模块的<code v-pre>require()</code>是同步加载，如果有<code v-pre>顶层await</code>，就没法处理加载了。</p>
<h2 id="六、async-的一些讨论" tabindex="-1"><a class="header-anchor" href="#六、async-的一些讨论" aria-hidden="true">#</a> 六、async 的一些讨论</h2>
<h3 id="async-会取代-generator-吗" tabindex="-1"><a class="header-anchor" href="#async-会取代-generator-吗" aria-hidden="true">#</a> async 会取代 Generator 吗？</h3>
<p>Generator 本来是用作生成器，使用 Generator 处理异步请求只是一个比较 hack 的用法，在异步方面，async 可以取代 Generator，但是 async 和 Generator 两个语法本身是用来解决不同的问题的。</p>
<h3 id="async-会取代-promise-吗" tabindex="-1"><a class="header-anchor" href="#async-会取代-promise-吗" aria-hidden="true">#</a> async 会取代 Promise 吗？</h3>
<p>async 函数返回一个 Promise 对象
面对复杂的异步流程，Promise 提供的 all 和 race 会更加好用
Promise 本身是一个对象，所以可以在代码中任意传递
async 的支持率还很低，即使有 Babel，编译后也要增加 1000 行左右。</p>
<h2 id="七、总结" tabindex="-1"><a class="header-anchor" href="#七、总结" aria-hidden="true">#</a> 七、总结</h2>
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
<li>
<p><code v-pre>ES2022</code> 开始，允许在模块的顶层独立使用<code v-pre>await</code>命令，主要目的是使用<code v-pre>await</code>解决模块异步加载的问题。</p>
</li>
</ul>
</div></template>


