<template><div><blockquote></blockquote>
<h1 id="变量的解构赋值" tabindex="-1"><a class="header-anchor" href="#变量的解构赋值" aria-hidden="true">#</a> 变量的解构赋值</h1>
<h2 id="一、数组的解构赋值" tabindex="-1"><a class="header-anchor" href="#一、数组的解构赋值" aria-hidden="true">#</a> 一、数组的解构赋值</h2>
<p>ES6 允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构（Destructuring）。</p>
<p>以前，为变量赋值，只能直接指定值。
以前，为变量赋值，只能直接指定值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> c <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6 允许写成下面这样。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>上面代码表示，可以从数组中提取值，按照对应位置，对变量赋值。</p>
<h2 id="二、对象的解构赋值" tabindex="-1"><a class="header-anchor" href="#二、对象的解构赋值" aria-hidden="true">#</a> 二、对象的解构赋值</h2>
<p>解构不仅可以用于数组，还可以用于对象。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'aaa'</span><span class="token punctuation">,</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">'bbb'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
foo <span class="token comment">// "aaa"</span>
bar <span class="token comment">// "bbb"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。</p>
<h3 id="变量重命名" tabindex="-1"><a class="header-anchor" href="#变量重命名" aria-hidden="true">#</a> 变量重命名</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> baz <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token string">'aaa'</span><span class="token punctuation">,</span> <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token string">'bbb'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>baz<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "aaa"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象的深度解构" tabindex="-1"><a class="header-anchor" href="#对象的深度解构" aria-hidden="true">#</a> 对象的深度解构</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> node <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">loc</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">line</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token number">5</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> <span class="token punctuation">{</span> loc<span class="token punctuation">,</span> <span class="token literal-property property">loc</span><span class="token operator">:</span> <span class="token punctuation">{</span> start <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">loc</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token punctuation">{</span> line <span class="token punctuation">}</span><span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">=</span> node<span class="token punctuation">;</span>
line <span class="token comment">// 1</span>
loc  <span class="token comment">// Object {start: Object}</span>
start <span class="token comment">// Object {line: 1, column: 5}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码有三次解构赋值，分别是对loc、start、line三个属性的解构赋值。注意，最后一次对line属性的解构赋值之中，只有line是变量，loc和start都是模式，不是变量。</p>
<h2 id="三、应用场景" tabindex="-1"><a class="header-anchor" href="#三、应用场景" aria-hidden="true">#</a> 三、应用场景</h2>
<h3 id="交换变量的值" tabindex="-1"><a class="header-anchor" href="#交换变量的值" aria-hidden="true">#</a> 交换变量的值</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span>x<span class="token punctuation">,</span> y<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>y<span class="token punctuation">,</span> x<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码交换变量x和y的值，这样的写法不仅简洁，而且易读，语义非常清晰。</p>
<h3 id="从函数返回多个值" tabindex="-1"><a class="header-anchor" href="#从函数返回多个值" aria-hidden="true">#</a> 从函数返回多个值</h3>
<p>函数只能返回一个值，如果要返回多个值，只能将它们放在数组或对象里返回。有了解构赋值，取出这些值就非常方便。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 返回一个数组</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token punctuation">[</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token comment">// 返回一个对象</span>
<span class="token keyword">function</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">foo</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token literal-property property">bar</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> foo<span class="token punctuation">,</span> bar <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">example</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结" aria-hidden="true">#</a> 五、总结</h2>
<ul>
<li>
<p>从数组和对象中提取值，对变量进行赋值，这被称为解构赋值</p>
</li>
<li>
<p>可以用在数组、对象、字符串、函数参数等，方便取值 语法清晰</p>
</li>
</ul>
</div></template>


