<template><div><blockquote></blockquote>
<h1 id="函数的扩展" tabindex="-1"><a class="header-anchor" href="#函数的扩展" aria-hidden="true">#</a> 函数的扩展</h1>
<h2 id="一、箭头函数" tabindex="-1"><a class="header-anchor" href="#一、箭头函数" aria-hidden="true">#</a> 一、箭头函数</h2>
<p>ES6 允许使用“箭头”（<code v-pre>=&gt;</code>）定义函数。</p>
<h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法" aria-hidden="true">#</a> 基本语法</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token parameter">value</span> <span class="token operator">=></span> value<span class="token punctuation">;</span>

<span class="token comment">// 相当于：</span>
<span class="token keyword">let</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> value<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="如果需要给函数传入多个参数" tabindex="-1"><a class="header-anchor" href="#如果需要给函数传入多个参数" aria-hidden="true">#</a> 如果需要给函数传入多个参数：</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token operator">=></span> value <span class="token operator">*</span> num<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="如果函数的代码块需要多条语句" tabindex="-1"><a class="header-anchor" href="#如果函数的代码块需要多条语句" aria-hidden="true">#</a> 如果函数的代码块需要多条语句：</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> value <span class="token operator">*</span> num
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="如果需要直接返回一个对象" tabindex="-1"><a class="header-anchor" href="#如果需要直接返回一个对象" aria-hidden="true">#</a> 如果需要直接返回一个对象：</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">value<span class="token punctuation">,</span> num</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">total</span><span class="token operator">:</span> value <span class="token operator">*</span> num<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="箭头函数可以与变量解构结合使用。" tabindex="-1"><a class="header-anchor" href="#箭头函数可以与变量解构结合使用。" aria-hidden="true">#</a> 箭头函数可以与变量解构结合使用。</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">full</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span> first<span class="token punctuation">,</span> last <span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=></span> first <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> last<span class="token punctuation">;</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">function</span> <span class="token function">full</span><span class="token punctuation">(</span><span class="token parameter">person</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> person<span class="token punctuation">.</span>first <span class="token operator">+</span> <span class="token string">' '</span> <span class="token operator">+</span> person<span class="token punctuation">.</span>last<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="简化回调函数。" tabindex="-1"><a class="header-anchor" href="#简化回调函数。" aria-hidden="true">#</a> 简化回调函数。</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 普通函数写法</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">x</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 箭头函数写法</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">*</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="和普通函数的区别" tabindex="-1"><a class="header-anchor" href="#和普通函数的区别" aria-hidden="true">#</a> 和普通函数的区别</h3>
<h4 id="_1、没有-this" tabindex="-1"><a class="header-anchor" href="#_1、没有-this" aria-hidden="true">#</a> 1、没有 this</h4>
<p>箭头函数没有 <code v-pre>this</code>，所以需要通过查找作用域链来确定 <code v-pre>this</code> 的值。如果箭头函数被非箭头函数包含，this 绑定的就是最近一层非箭头函数的 this。
箭头函数没有 <code v-pre>this</code>，所以也不能用 <code v-pre>call()</code>、<code v-pre>apply()</code>、<code v-pre>bind()</code> 这些方法改变 <code v-pre>this</code> 的指向。</p>
<h4 id="_2、没有-arguments" tabindex="-1"><a class="header-anchor" href="#_2、没有-arguments" aria-hidden="true">#</a> 2、没有 arguments</h4>
<p>箭头函数没有自己的 <code v-pre>arguments</code> 对象，这不一定是件坏事，因为箭头函数可以访问外围函数的 <code v-pre>arguments</code> 对象：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">constant</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">constant</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>访问箭头函数的参数可以通过命名参数或者 <code v-pre>rest</code> 参数的形式访问参数:</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token function-variable function">nums</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>nums</span><span class="token punctuation">)</span> <span class="token operator">=></span> nums<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3、不能通过-new-关键字调用" tabindex="-1"><a class="header-anchor" href="#_3、不能通过-new-关键字调用" aria-hidden="true">#</a> 3、不能通过 new 关键字调用</h4>
<p>JavaScript 函数有两个内部方法：<code v-pre>[[Call]]</code> 和 <code v-pre>[[Construct]]</code>。
当通过 new 调用函数时，执行 <code v-pre>[[Construct]]</code> 方法，创建一个实例对象，然后再执行函数体，将 <code v-pre>this</code> 绑定到实例上。
当直接调用的时候，执行 <code v-pre>[[Call]]</code> 方法，直接执行函数体。
箭头函数并没有 <code v-pre>[[Construct]]</code> 方法，不能被用作构造函数，如果通过 <code v-pre>new</code> 的方式调用，会报错。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">Foo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// TypeError: Foo is not a constructor</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4、没有-new-target" tabindex="-1"><a class="header-anchor" href="#_4、没有-new-target" aria-hidden="true">#</a> 4、没有 new.target</h4>
<p>因为不能使用 <code v-pre>new</code> 调用，所以也没有 <code v-pre>new.target</code> 值。</p>
<p>注：<code v-pre>new.target</code> 一般用在构造函数之中，返回<code v-pre>new</code>命令作用于的那个构造函数。如果构造函数不是通过<code v-pre>new</code>命令或<code v-pre>Reflect.construct()</code>调用的，new.target会返回<code v-pre>undefined</code>，因此这个属性可以用来确定构造函数是怎么调用的。</p>
<h4 id="_5、没有原型" tabindex="-1"><a class="header-anchor" href="#_5、没有原型" aria-hidden="true">#</a> 5、没有原型</h4>
<p>由于不能使用 <code v-pre>new</code> 调用箭头函数，所以也没有构建原型的需求，于是箭头函数也不存在 <code v-pre>prototype</code> 这个属性。</p>
<h4 id="_6、没有-super" tabindex="-1"><a class="header-anchor" href="#_6、没有-super" aria-hidden="true">#</a> 6、没有 super</h4>
<p>连原型都没有，自然也不能通过 <code v-pre>super</code> 来访问原型的属性，所以箭头函数也是没有 <code v-pre>super</code> 的，不过跟 <code v-pre>this</code>、<code v-pre>arguments</code>、<code v-pre>new.target</code> 一样，这些值由外围最近一层非箭头函数决定。</p>
<h3 id="使用注意" tabindex="-1"><a class="header-anchor" href="#使用注意" aria-hidden="true">#</a> 使用注意</h3>
<h4 id="_1、不适合用来定义对象的方法-且该方法内部包含-this-。" tabindex="-1"><a class="header-anchor" href="#_1、不适合用来定义对象的方法-且该方法内部包含-this-。" aria-hidden="true">#</a> 1、不适合用来定义对象的方法，且该方法内部包含 this 。</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 调用cat.jumps()时，如果是普通函数，该方法内部的this指向cat；</span>
<span class="token keyword">const</span> cat <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">lives</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
  <span class="token function-variable function">jumps</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>lives<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 如果使用箭头函数，会使得this指向全局对象，</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2、需要动态-this-或-函数体很复杂-有许多行-或者函数内部有大量的读写操作-不应使用箭头函数。使用普通函数-这样可以提高代码可读性。" tabindex="-1"><a class="header-anchor" href="#_2、需要动态-this-或-函数体很复杂-有许多行-或者函数内部有大量的读写操作-不应使用箭头函数。使用普通函数-这样可以提高代码可读性。" aria-hidden="true">#</a> 2、需要动态 this 或 函数体很复杂，有许多行，或者函数内部有大量的读写操作，不应使用箭头函数。使用普通函数，这样可以提高代码可读性。</h4>
<h2 id="二、函数参数的默认值" tabindex="-1"><a class="header-anchor" href="#二、函数参数的默认值" aria-hidden="true">#</a> 二、函数参数的默认值</h2>
<p>ES6 之前，不能直接为函数的参数指定默认值，只能采用变通的方法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  y <span class="token operator">=</span> y <span class="token operator">||</span> <span class="token string">'World'</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6 允许为函数的参数设置默认值，即直接写在参数定义的后面。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token string">'World'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">)</span> <span class="token comment">// Hello World</span>
<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">,</span> <span class="token string">'China'</span><span class="token punctuation">)</span> <span class="token comment">// Hello China</span>
<span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Hello'</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">)</span> <span class="token comment">// Hello</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、rest-参数" tabindex="-1"><a class="header-anchor" href="#三、rest-参数" aria-hidden="true">#</a> 三、rest 参数</h2>
<p>ES6 引入 <code v-pre>rest</code> 参数（形式为...变量名），用于获取函数的多余参数，这样就不需要使用<code v-pre>arguments</code>对象了。<code v-pre>rest</code> 参数搭配的变量是一个数组，该变量将多余的参数放入数组中。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>values</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> sum <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> val <span class="token keyword">of</span> values<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    sum <span class="token operator">+=</span> val<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> sum<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">add</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>原来的<code v-pre>arguments</code>对象是类数组对象，不能使用数组方法，为了使用数组的方法，必须使用<code v-pre>Array.from</code>先将其转为数组。<code v-pre>rest</code> 参数就不存在这个问题。</p>
<p>注：<code v-pre>rest</code> 参数之后不能再有其他参数（即只能是最后一个参数），否则会报错。</p>
<h2 id="四、尾调用优化" tabindex="-1"><a class="header-anchor" href="#四、尾调用优化" aria-hidden="true">#</a> 四、尾调用优化</h2>
<p><code v-pre>尾调用（Tail Call）</code>是函数式编程的一个重要概念，本身非常简单，一句话就能说清楚，就是指某个函数的最后一步是调用另一个函数。</p>
<h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结" aria-hidden="true">#</a> 五、总结</h2>
<ul>
<li>
<p>箭头函数表达式的语法更加简洁，并且不绑定自己的<code v-pre>this</code>，<code v-pre>arguments</code>，<code v-pre>super</code>或 <code v-pre>new.target</code>。</p>
</li>
<li>
<p>箭头函数 <code v-pre>this</code> 绑定的就是最近一层非箭头函数的 <code v-pre>this</code></p>
</li>
<li>
<p>需要动态 <code v-pre>this</code> 或 函数体很复杂，有许多行，或者函数内部有大量的读写操作，不应使用箭头函数。</p>
</li>
<li>
<p>函数参数可以设置默认值</p>
</li>
<li>
<p><code v-pre>rest</code> 参数可以将变量放进数组中（原 <code v-pre>arguments</code> 对象属于类数组对象，不能使用数组方法）</p>
</li>
</ul>
</div></template>


