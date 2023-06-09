<template><div><blockquote></blockquote>
<h1 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h1>
<h2 id="一、promise含义" tabindex="-1"><a class="header-anchor" href="#一、promise含义" aria-hidden="true">#</a> 一、Promise含义</h2>
<p>Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。
从语法上说，Promise 是一个对象，可以获取异步操作的消息。</p>
<p>Promise 的三种状态：</p>
<ul>
<li>进行中（pending）：已开始，但还没有返回成功（完成）或失败。</li>
<li>已成功（fulfilled）：意味着操作成功完成。</li>
<li>已失败（rejected）：意味着操作失败。</li>
</ul>
<p>Promise 对象的两个特点:</p>
<ul>
<li>对象的状态不受外界影响，只有异步操作的结果，可以决定当前是哪一种状态。</li>
<li>一旦状态改变，就不会再变。Promise对象的状态改变，只有两种可能：从pending变为<code v-pre>fulfilled</code>和从pending变为<code v-pre>rejected</code>，会一直保持这个结果，这时就称为 <code v-pre>resolved（已定型）</code>。</li>
</ul>
<p>有了Promise对象，就可以将异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。</p>
<p>Promise 缺点。</p>
<ul>
<li>首先，无法取消Promise，一旦新建它就会立即执行，无法中途取消。</li>
<li>其次，如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。</li>
<li>第三，当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。</li>
</ul>
<h2 id="二、promise构造函数及实例方法" tabindex="-1"><a class="header-anchor" href="#二、promise构造函数及实例方法" aria-hidden="true">#</a> 二、Promise构造函数及实例方法</h2>
<h3 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数" aria-hidden="true">#</a> 构造函数</h3>
<h4 id="promise-1" tabindex="-1"><a class="header-anchor" href="#promise-1" aria-hidden="true">#</a> Promise()</h4>
<p>Promise对象是一个构造函数，用来生成Promise实例。</p>
<h3 id="实例方法" tabindex="-1"><a class="header-anchor" href="#实例方法" aria-hidden="true">#</a> 实例方法</h3>
<h4 id="promise-prototype-then" tabindex="-1"><a class="header-anchor" href="#promise-prototype-then" aria-hidden="true">#</a> Promise.prototype.then()</h4>
<p>Promise 实例具有then方法，也就是说，then方法是定义在原型对象 <code v-pre>Promise.prototype</code> 上的。
它的作用是为 Promise 实例添加状态改变时的回调函数。
then方法的第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数，它们都是可选的。</p>
<p>then方法返回的是一个新的Promise实例（注意，不是原来那个Promise实例）。因此可以采用链式写法，即then方法后面再调用另一个then方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token string">"/post/1.json"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">post</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">getJSON</span><span class="token punctuation">(</span>post<span class="token punctuation">.</span>commentURL<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">comments</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"resolved: "</span><span class="token punctuation">,</span> comments<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"rejected: "</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，第一个then方法指定的回调函数，返回的是另一个Promise对象。这时，第二个then方法指定的回调函数，就会等待这个新的Promise对象状态发生变化。如果变为resolved，就调用第一个回调函数，如果状态变为rejected，就调用第二个回调函数。</p>
<h4 id="promise-prototype-catch" tabindex="-1"><a class="header-anchor" href="#promise-prototype-catch" aria-hidden="true">#</a> Promise.prototype.catch()</h4>
<p>Promise.prototype.catch()方法是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">getJSON</span><span class="token punctuation">(</span><span class="token string">'/posts.json'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">posts</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// 处理 getJSON 和 前一个回调函数运行时发生的错误</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'发生错误！'</span><span class="token punctuation">,</span> error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Promise 对象状态变为resolved，则会调用then()方法指定的回调函数；如果异步操作抛出错误，状态就会变为rejected，就会调用catch()方法指定的回调函数，处理这个错误。另外，then()方法指定的回调函数，如果运行中抛出错误，也会被catch()方法捕获。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 写法一 （不推荐）</span>
promise
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// success</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// error</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 写法二 （推荐） 第二种写法可以捕获前面then方法执行中的错误，也更接近同步的写法（try/catch）</span>
promise
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//cb</span>
    <span class="token comment">// success</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// error</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>建议不要在then()方法里面定义 Reject 状态的回调函数（即then的第二个参数），总是使用catch方法。</p>
<h5 id="promise-会吃掉错误" tabindex="-1"><a class="header-anchor" href="#promise-会吃掉错误" aria-hidden="true">#</a> Promise 会吃掉错误</h5>
<p>跟传统的try/catch代码块不同的是，如果没有使用catch()方法指定错误处理的回调函数，Promise 对象抛出的错误不会传递到外层代码，即不会有任何反应。</p>
<p>建议Promise 对象后面要跟catch()方法，这样可以处理 Promise 内部发生的错误。catch()方法返回的还是一个 Promise 对象，因此后面还可以接着调用then()方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>promise
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">//cb</span>
    <span class="token comment">// success</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// 下面一行会报错，因为 y 没有声明</span>
    y <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// error</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>catch()方法之中，还能再抛出错误，可以链式书写第二个catch方法，第二个catch()方法用来捕获前一个catch()方法抛出的错误。</p>
<h4 id="promise-prototype-finally" tabindex="-1"><a class="header-anchor" href="#promise-prototype-finally" aria-hidden="true">#</a> Promise.prototype.finally()</h4>
<p>finally()方法用于指定不管 Promise 对象最后状态如何，都会执行的操作。该方法是 ES2018 引入标准的。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>promise
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span>···<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span> <span class="token operator">=></span> <span class="token punctuation">{</span>···<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>···<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。</p>
<p>下面是一个例子，服务器使用 Promise 处理请求，然后使用finally方法关掉服务器。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>server<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">finally</span><span class="token punctuation">(</span>server<span class="token punctuation">.</span>stop<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>finally方法的回调函数不接受任何参数，不会知道 Promise 状态到底是成功还是失败。这表明，finally方法里面的操作，应该是与状态无关的，不依赖于 Promise 的执行结果。</p>
<h3 id="链式调用" tabindex="-1"><a class="header-anchor" href="#链式调用" aria-hidden="true">#</a> 链式调用</h3>
<p>连续执行两个或者多个异步操作是一个常见的需求，在上一个操作执行成功之后，开始下一个的操作，并带着上一步操作所返回的结果。我们可以通过创造一个 Promise 链来实现这种需求。</p>
<p>在过去，要想做多重的异步操作，会导致经典的<code v-pre>回调地狱</code>：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">doSomethingElse</span><span class="token punctuation">(</span>result<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newResult</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">doThirdThing</span><span class="token punctuation">(</span>newResult<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">finalResult</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Got the final result: '</span> <span class="token operator">+</span> finalResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> failureCallback<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> failureCallback<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> failureCallback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，我们可以把回调绑定到返回的 Promise 上，形成一个 Promise 链：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">doSomethingElse</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">newResult</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">doThirdThing</span><span class="token punctuation">(</span>newResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">finalResult</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Got the final result: '</span> <span class="token operator">+</span> finalResult<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span>failureCallback<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="回调地狱造成的问题" tabindex="-1"><a class="header-anchor" href="#回调地狱造成的问题" aria-hidden="true">#</a> 回调地狱造成的问题</h3>
<p>1.难以复用
回调的顺序确定下来之后，想对其中的某些环节进行复用也很困难，牵一发而动全身。
举个例子，如果你想对 fs.stat 读取文件信息这段代码复用，因为回调中引用了外层的变量，提取出来后还需要对外层的代码进行修改。</p>
<p>2.堆栈信息被断开
我们知道，JavaScript 引擎维护了一个执行上下文栈，当函数执行的时候，会创建该函数的执行上下文压入栈中，当函数执行完毕后，会将该执行上下文出栈。
嵌套大量异步回调函数会导致发生异常错误时难以定位。</p>
<p>3.借助外层变量
当多个异步计算同时进行，比如这里遍历读取文件信息，由于无法预期完成顺序，必须借助外层作用域的变量，书写繁琐，也可能被其它同一作用域的函数访问并且修改，容易造成误操作。</p>
<p>4.大量嵌套可读性降低。</p>
<h2 id="三、promise静态方法" tabindex="-1"><a class="header-anchor" href="#三、promise静态方法" aria-hidden="true">#</a> 三、Promise静态方法</h2>
<h3 id="promise-all-iterable" tabindex="-1"><a class="header-anchor" href="#promise-all-iterable" aria-hidden="true">#</a> Promise.all(iterable)</h3>
<p>Promise.all()方法用于将多个 Promise 实例，包装成一个新的 Promise 实例。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，Promise.all()方法接受一个数组作为参数，p1、p2、p3都是 Promise 实例，如果不是，就会先调用下面讲到的Promise.resolve方法，将参数转为 Promise 实例，再进一步处理。
另外，Promise.all()方法的参数可以不是数组，但必须具有 Iterator 接口，且返回的每个成员都是 Promise 实例。</p>
<ul>
<li>（注：Array，Map，Set 都属于 ES6 的 iterable 类型）</li>
</ul>
<p>p的状态由p1、p2、p3决定，分成两种情况。</p>
<p>（1）只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数。</p>
<p>（2）只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数。</p>
<p>注：如果作为参数的 Promise 实例，自己定义了catch方法，那么它一旦被rejected，catch()方法返回的是一个新的 Promise 实例。该实例执行完catch方法后，也会变成resolved，导致Promise.all()方法参数里面的两个实例都会resolved,并不会触发Promise.all()的catch方法。</p>
<h3 id="promise-allsettled-iterable" tabindex="-1"><a class="header-anchor" href="#promise-allsettled-iterable" aria-hidden="true">#</a> Promise.allSettled(iterable)</h3>
<p>有时候我们希望等到一组异步操作都结束了，不管每一个操作是成功还是失败，再进行下一步操作。但是，现有的 Promise 方法很难实现这个要求。</p>
<p>Promise.all()方法只适合所有异步操作都成功的情况，如果有一个操作失败，就无法满足要求。</p>
<p>为了解决这个问题，ES2020 引入了<code v-pre>Promise.allSettled()</code>方法，用来确定一组异步操作是否都结束了（不管成功或失败）。所以，它的名字叫做”Settled“，包含了”fulfilled“和”rejected“两种情况。</p>
<h3 id="promise-any-iterable" tabindex="-1"><a class="header-anchor" href="#promise-any-iterable" aria-hidden="true">#</a> Promise.any(iterable)</h3>
<p>ES2021 引入了<code v-pre>Promise.any()</code>方法。该方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例返回。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Promise<span class="token punctuation">.</span><span class="token function">any</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://v8.dev/'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'home'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://v8.dev/blog'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'blog'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token function">fetch</span><span class="token punctuation">(</span><span class="token string">'https://v8.dev/docs'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token string">'docs'</span><span class="token punctuation">)</span>
<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">first</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>  <span class="token comment">// 只要有一个 fetch() 请求成功</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>first<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">// 所有三个 fetch() 全部请求失败</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>只要参数实例有一个变成fulfilled 成功状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。</p>
<p>Promise.any()跟Promise.race()方法很像，只有一点不同，就是Promise.any()不会因为某个 Promise 变成rejected状态而结束，必须等到所有参数 Promise 变成rejected状态才会结束。</p>
<h3 id="promise-race-iterable" tabindex="-1"><a class="header-anchor" href="#promise-race-iterable" aria-hidden="true">#</a> Promise.race(iterable)</h3>
<p>Promise.race()方法同样是将多个 Promise 实例，包装成一个新的 Promise 实例。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">race</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">,</span> p3<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码中，只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改变。那个率先改变的 Promise 实例的返回值，就传递给p的回调函数。</p>
<p>就是p1, p2, p3谁最先执行完成，就返回谁的结果。不管是成功还是失败，只返回最快的结果。</p>
<h3 id="promise-resolve-value" tabindex="-1"><a class="header-anchor" href="#promise-resolve-value" aria-hidden="true">#</a> Promise.resolve(value)</h3>
<p>有时需要将现有对象转为 Promise 对象，Promise.resolve()方法就起到这个作用。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span>
<span class="token comment">// 等价于</span>
<span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=></span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Promise.resolve()方法的参数分成四种情况。</p>
<p>（1）参数是一个 Promise 实例</p>
<p>（2）参数是一个thenable对象</p>
<p>（3）参数不是具有then()方法的对象，或根本就不是对象</p>
<p>（4）不带有任何参数</p>
<p>Promise.resolve()方法允许调用时不带参数，直接返回一个resolved状态的 Promise 对象。</p>
<p>注：立即resolve()的 Promise 对象，是在本轮“事件循环”（event loop）的结束时执行，而不是在下一轮“事件循环”的开始时。</p>
<h3 id="promise-reject-reason" tabindex="-1"><a class="header-anchor" href="#promise-reject-reason" aria-hidden="true">#</a> Promise.reject(reason)</h3>
<p>Promise.reject(reason)方法也会返回一个新的 Promise 实例，该实例的状态为rejected（失败）。</p>
<h2 id="四、应用场景" tabindex="-1"><a class="header-anchor" href="#四、应用场景" aria-hidden="true">#</a> 四、应用场景</h2>
<h2 id="五、红绿灯问题" tabindex="-1"><a class="header-anchor" href="#五、红绿灯问题" aria-hidden="true">#</a> 五、红绿灯问题</h2>
<p>题目：红灯三秒亮一次，绿灯一秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用 Promise 实现）
三个亮灯函数已经存在：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">red</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'red'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">green</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'green'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">yellow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用 then 和递归实现：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">red</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'red'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">green</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'green'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">yellow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'yellow'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">light</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">timmer<span class="token punctuation">,</span> cb</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">cb</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> timmer<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> <span class="token function-variable function">step</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">light</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> red<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">light</span><span class="token punctuation">(</span><span class="token number">2000</span><span class="token punctuation">,</span> green<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token function">light</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> yellow<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">step</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">step</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、总结" tabindex="-1"><a class="header-anchor" href="#六、总结" aria-hidden="true">#</a> 六、总结</h2>
<ul>
<li>
<p>Promise 是一个对象，可以获取异步操作的消息。</p>
</li>
<li>
<p>Promise 有三种状态：进行中（pending）、成功（fulfilled）、失败（rejected）</p>
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
</div></template>


