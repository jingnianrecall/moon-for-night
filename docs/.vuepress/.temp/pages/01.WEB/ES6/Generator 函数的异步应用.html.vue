<template><div><blockquote></blockquote>
<h1 id="generator-函数的异步应用" tabindex="-1"><a class="header-anchor" href="#generator-函数的异步应用" aria-hidden="true">#</a> Generator 函数的异步应用</h1>
<h2 id="一、传统方法" tabindex="-1"><a class="header-anchor" href="#一、传统方法" aria-hidden="true">#</a> 一、传统方法</h2>
<p>ES6 诞生以前，异步编程的方法，大概有下面四种。</p>
<ul>
<li>回调函数</li>
<li>事件监听</li>
<li>发布/订阅</li>
<li>Promise 对象(社区版本，ES6对Promise进行了规范)</li>
</ul>
<p>Generator 函数将 JavaScript 异步编程带入了一个全新的阶段。</p>
<h2 id="二、基本概念" tabindex="-1"><a class="header-anchor" href="#二、基本概念" aria-hidden="true">#</a> 二、基本概念</h2>
<h3 id="异步" tabindex="-1"><a class="header-anchor" href="#异步" aria-hidden="true">#</a> 异步</h3>
<p>所谓&quot;异步&quot;，简单说就是一个任务不是连续完成的，可以理解成该任务被人为分成两段，先执行第一段，然后转而执行其他任务，等做好了准备，再回过头执行第二段。</p>
<h3 id="回调函数" tabindex="-1"><a class="header-anchor" href="#回调函数" aria-hidden="true">#</a> 回调函数</h3>
<p>JavaScript 语言对异步编程的实现，就是回调函数。所谓回调函数，就是把任务的第二段单独写在一个函数里面，等到重新执行这个任务的时候，就直接调用这个函数。回调函数的英语名字callback，直译过来就是&quot;重新调用&quot;。</p>
<p>读取文件进行处理，是这样写的。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">'/etc/passwd'</span><span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token keyword">throw</span> err<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，readFile函数的第三个参数，就是回调函数，也就是任务的第二段。等到操作系统返回了/etc/passwd这个文件以后，回调函数才会执行。</p>
<p>一个有趣的问题是，为什么 Node 约定，回调函数的第一个参数，必须是错误对象err（如果没有错误，该参数就是null）？</p>
<p>原因是执行分成两段，第一段执行完以后，任务所在的上下文环境就已经结束了。在这以后抛出的错误，原来的上下文环境已经无法捕捉，只能当作参数，传入第二段。</p>
<h3 id="promise" tabindex="-1"><a class="header-anchor" href="#promise" aria-hidden="true">#</a> Promise</h3>
<p>回调函数本身并没有问题，它的问题出现在多个回调函数嵌套。假定读取A文件之后，再读取B文件，代码如下。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>fileA<span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>fileB<span class="token punctuation">,</span> <span class="token string">'utf-8'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果依次读取两个以上的文件，就会出现多重嵌套。代码不是纵向发展，而是横向发展，很快就会乱成一团，无法管理。因为多个异步操作形成了强耦合，只要有一个操作需要修改，它的上层回调函数和下层回调函数，可能都要跟着修改。
这种情况就称为<code v-pre>&quot;回调函数地狱&quot;（callback hell）</code>。</p>
<p>Promise 对象就是为了解决这个问题而提出的。它不是新的语法功能，而是一种新的写法，允许将回调函数的嵌套，改成<code v-pre>链式调用</code>。采用 Promise，连续读取多个文件，写法如下。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> readFile <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'fs-readfile-promise'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token function">readFile</span><span class="token punctuation">(</span>fileA<span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token function">readFile</span><span class="token punctuation">(</span>fileB<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，我使用了fs-readfile-promise模块，它的作用就是返回一个 Promise 版本的readFile函数。Promise 提供then方法加载回调函数，catch方法捕捉执行过程中抛出的错误。</p>
<p>可以看到，Promise 的写法只是<code v-pre>回调函数的改进</code>，使用then方法以后，异步任务的两段执行看得更清楚了，除此以外，并无新意。</p>
<p>Promise 的最大问题是代码冗余，原来的任务被 Promise 包装了一下，不管什么操作，一眼看去都是一堆then，原来的语义变得很不清楚。</p>
<p>那么，有没有更好的写法呢？</p>
<h2 id="三、generator-函数" tabindex="-1"><a class="header-anchor" href="#三、generator-函数" aria-hidden="true">#</a> 三、Generator 函数</h2>
<h3 id="协程" tabindex="-1"><a class="header-anchor" href="#协程" aria-hidden="true">#</a> 协程</h3>
<p>传统的编程语言，早有异步编程的解决方案（其实是多任务的解决方案）。其中有一种叫做&quot;协程&quot;（coroutine），意思是多个线程互相协作，完成异步任务。</p>
<p>协程有点像函数，又有点像线程。它的运行流程大致如下。</p>
<p>第一步，协程<code v-pre>A</code>开始执行。
第二步，协程<code v-pre>A</code>执行到一半，进入暂停，执行权转移到协程<code v-pre>B</code>。
第三步，（一段时间后）协程<code v-pre>B</code>交还执行权。
第四步，协程<code v-pre>A</code>恢复执行。
上面流程的协程<code v-pre>A</code>，就是异步任务，因为它分成两段（或多段）执行。</p>
<p>举例来说，读取文件的协程写法如下。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">asyncJob</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...其他代码</span>
  <span class="token keyword">var</span> f <span class="token operator">=</span> <span class="token keyword">yield</span> <span class="token function">readFile</span><span class="token punctuation">(</span>fileA<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// ...其他代码</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码的函数<code v-pre>asyncJob</code>是一个协程，它的奥妙就在其中的<code v-pre>yield</code>命令。它表示执行到此处，执行权将交给其他协程。也就是说，<code v-pre>yield</code>命令是异步两个阶段的分界线。</p>
<p>协程遇到<code v-pre>yield</code>命令就暂停，等到执行权返回，再从暂停的地方继续往后执行。它的最大优点，就是代码的写法非常像同步操作，如果去除<code v-pre>yield</code>命令，简直一模一样。</p>
<h3 id="协程的-generator-函数实现" tabindex="-1"><a class="header-anchor" href="#协程的-generator-函数实现" aria-hidden="true">#</a> 协程的 Generator 函数实现</h3>
<p>协程的 Generator 函数实现
Generator 函数是协程在 ES6 的实现，最大特点就是可以交出函数的执行权（即暂停执行）。</p>
<p>整个 <code v-pre>Generator</code> 函数就是一个封装的异步任务，或者说是异步任务的容器。异步操作需要暂停的地方，都用yield语句注明。Generator 函数的执行方法如下。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token keyword">yield</span> x <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> g <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: 3, done: false }</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: undefined, done: true }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，调用 Generator 函数，会返回一个内部指针（即遍历器）<code v-pre>g</code>。这是 Generator 函数不同于普通函数的另一个地方，即执行它不会返回结果，返回的是指针对象。调用指针<code v-pre>g</code>的<code v-pre>next</code>方法，会移动内部指针（即执行异步任务的第一段），指向第一个遇到的<code v-pre>yield</code>语句，上例是执行到<code v-pre>x + 2</code>为止。</p>
<p>换言之，<code v-pre>next</code>方法的作用是分阶段执行<code v-pre>Generator</code>函数。每次调用<code v-pre>next</code>方法，会返回一个对象，表示当前阶段的信息（value属性和done属性）。<code v-pre>value</code>属性是<code v-pre>yield</code>语句后面表达式的值，表示当前阶段的值；<code v-pre>done</code>属性是一个布尔值，表示 Generator 函数是否执行完毕，即是否还有下一个阶段。</p>
<h3 id="generator-函数的数据交换和错误处理" tabindex="-1"><a class="header-anchor" href="#generator-函数的数据交换和错误处理" aria-hidden="true">#</a> Generator 函数的数据交换和错误处理</h3>
<p>next返回值的 value 属性，是 Generator 函数向外输出数据；next方法还可以接受参数，向 Generator 函数体内输入数据。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token keyword">yield</span> x <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> g <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { value: 3, done: false }</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span> <span class="token comment">// { value: 2, done: true }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Generator 函数体外，使用指针对象的throw方法抛出的错误，可以被函数体内的try...catch代码块捕获。出错的代码与处理错误的代码，实现了时间和空间上的分离，这对于异步编程无疑是很重要的。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span><span class="token operator">*</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> y <span class="token operator">=</span> <span class="token keyword">yield</span> x <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> g <span class="token operator">=</span> <span class="token function">gen</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
g<span class="token punctuation">.</span><span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
g<span class="token punctuation">.</span><span class="token function">throw</span><span class="token punctuation">(</span><span class="token string">'出错了'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 出错了</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="异步任务的封装" tabindex="-1"><a class="header-anchor" href="#异步任务的封装" aria-hidden="true">#</a> 异步任务的封装</h3>
<h2 id="四、thunk-函数" tabindex="-1"><a class="header-anchor" href="#四、thunk-函数" aria-hidden="true">#</a> 四、Thunk 函数</h2>
<p>Thunk 函数是自动执行 Generator 函数的一种方法。</p>
<h2 id="四、thunk-函数-1" tabindex="-1"><a class="header-anchor" href="#四、thunk-函数-1" aria-hidden="true">#</a> 四、Thunk 函数</h2>
<p>Thunk 函数是自动执行 Generator 函数的一种方法。</p>
<h2 id="五、co-模块" tabindex="-1"><a class="header-anchor" href="#五、co-模块" aria-hidden="true">#</a> 五、co 模块</h2>
<p>co 模块可以让你不用编写 Generator 函数的执行器。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> co <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'co'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">co</span><span class="token punctuation">(</span>gen<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，Generator 函数只要传入co函数，就会自动执行。</p>
<p>co函数返回一个Promise对象，因此可以用then方法添加回调函数。</p>
<h3 id="co-模块的原理" tabindex="-1"><a class="header-anchor" href="#co-模块的原理" aria-hidden="true">#</a> co 模块的原理</h3>
<p>为什么 co 可以自动执行 Generator 函数？</p>
<p>Generator 就是一个异步操作的容器。它的自动执行需要一种机制，当异步操作有了结果，能够自动交回执行权。</p>
<p>两种方法可以做到这一点。</p>
<p>（1）回调函数。将异步操作包装成 Thunk 函数，在回调函数里面交回执行权。</p>
<p>（2）Promise 对象。将异步操作包装成 Promise 对象，用then方法交回执行权。</p>
<p>co 模块其实就是将两种自动执行器（Thunk 函数和 Promise 对象），包装成一个模块。使用 co 的前提条件是，Generator 函数的yield命令后面，只能是 Thunk 函数或 Promise 对象。如果数组或对象的成员，全部都是 Promise 对象，也可以使用 co，详见后文的例子。</p>
<p>上一节已经介绍了基于 Thunk 函数的自动执行器。下面来看，基于 Promise 对象的自动执行器。这是理解 co 模块必须的。</p>
<h2 id="六、总结" tabindex="-1"><a class="header-anchor" href="#六、总结" aria-hidden="true">#</a> 六、总结</h2>
<ul>
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
</div></template>


