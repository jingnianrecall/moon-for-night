<template><div><blockquote></blockquote>
<h1 id="块级作用域let和const" tabindex="-1"><a class="header-anchor" href="#块级作用域let和const" aria-hidden="true">#</a> 块级作用域let和const</h1>
<h2 id="一、为什么需要块级声明" tabindex="-1"><a class="header-anchor" href="#一、为什么需要块级声明" aria-hidden="true">#</a> 一、为什么需要块级声明</h2>
<h3 id="var声明及变量提升机制" tabindex="-1"><a class="header-anchor" href="#var声明及变量提升机制" aria-hidden="true">#</a> var声明及变量提升机制</h3>
<p>通过var声明的变量，无论在哪里声明都会被当成在当前作用域顶部声明的变量，这就是变量提升机制。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hoisting</span><span class="token punctuation">(</span><span class="token parameter">condition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token string">'六月十日晴'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上代码，<code v-pre>condition</code>即使为false，value值也会被创建，在预编译阶段JavaScript引擎会将函数修改成下面这样：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">hoisting</span><span class="token punctuation">(</span><span class="token parameter">condition</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> value<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>condition<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        value <span class="token operator">=</span> <span class="token string">'六月十日晴'</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>变量value声明会被提升至函数顶部。</p>
<p>在for循环中，用<code v-pre>var</code>声明变量，即使循环已经结束，还是可以访问到变量<code v-pre>i</code>的值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="块级声明" tabindex="-1"><a class="header-anchor" href="#块级声明" aria-hidden="true">#</a> 块级声明</h3>
<p>为了加强对变量生命周期的控制，ES6引入了块级块级作用域。
块级作用域存在于：</p>
<ul>
<li>函数内部</li>
<li>块中（字符{和}之间的区域）</li>
</ul>
<h3 id="let-和-const" tabindex="-1"><a class="header-anchor" href="#let-和-const" aria-hidden="true">#</a> let 和 const</h3>
<h4 id="let-声明" tabindex="-1"><a class="header-anchor" href="#let-声明" aria-hidden="true">#</a> let 声明</h4>
<p>使用 let 来替代 var 声明变量，可以把变量的作用域限制在当前的代码块中。
let声明不会被提升，执行离开代码块后即被销毁。
禁止重复声明。</p>
<h4 id="const-声明" tabindex="-1"><a class="header-anchor" href="#const-声明" aria-hidden="true">#</a> const 声明</h4>
<p>const 声明的是常量，值一旦被设定后不可更改，且必须进行初始化。
const 声明对象时，不可以修改绑定，但可以修改值。</p>
<h3 id="临时死区" tabindex="-1"><a class="header-anchor" href="#临时死区" aria-hidden="true">#</a> 临时死区</h3>
<p>临时死区(Temporal Dead Zone)，简写为 TDZ。</p>
<p>let 和 const 声明的变量不会被提升到作用域顶部，如果在声明之前访问这些变量，会导致报错：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Uncaught ReferenceError: value is not defined</span>
<span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这是因为 JavaScript 引擎在扫描代码发现变量声明时，要么将它们提升到作用域顶部(遇到 var 声明)，要么将声明放在 TDZ 中(遇到 let 和 const 声明)。访问 TDZ 中的变量会触发运行时错误。只有执行过变量声明语句后，变量才会从 TDZ 中移出，然后方可访问。</p>
<h2 id="二、循环中的块级作用域" tabindex="-1"><a class="header-anchor" href="#二、循环中的块级作用域" aria-hidden="true">#</a> 二、循环中的块级作用域</h2>
<p>经典面试题，因为var创建的变量到了循环之外仍可以访问</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> funcs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    funcs<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
funcs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6之前的解决方案，可以在循环中使用立即调用函数表达式（IIFE），强制生成变量副本。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> funcs <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    funcs<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
funcs<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="循环中的-let-声明" tabindex="-1"><a class="header-anchor" href="#循环中的-let-声明" aria-hidden="true">#</a> 循环中的 let 声明</h3>
<p>每次迭代循环时 <code v-pre>let</code> 声明都创建一个新变量，并以之前迭代中同名变量的值将其初始化，<code v-pre>let 声明在循环内部的行为是标准中专门定义的</code>，不一定就与 let 的不提升特性有关，其实，在早期的 let 实现中就不包含这一行为。</p>
<h3 id="循环中的-const-声明" tabindex="-1"><a class="header-anchor" href="#循环中的-const-声明" aria-hidden="true">#</a> 循环中的 const 声明</h3>
<p>循环中使用const 声明会是报错，因为虽然我们每次都创建了一个新的变量，然而我们却在迭代中尝试修改 const 的值，所以最终会报错。
使用<code v-pre>for in 或者 for of </code>循环可以，因为在 <code v-pre>for in 或者 for of </code> 循环中，每次迭代不会修改已有的绑定，而是会创建一个新的绑定。</p>
<h2 id="三、全局块作用域绑定" tabindex="-1"><a class="header-anchor" href="#三、全局块作用域绑定" aria-hidden="true">#</a> 三、全局块作用域绑定</h2>
<p>使用var声明可能会覆盖一个已经存在的全局对象属性（浏览器中的 window 对象）。
如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> RegExp <span class="token operator">=</span> <span class="token string">"Hello"</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>RegExp<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">// "Hello" 原来应该是RegExp正则对象</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用let或const则不会，因为会在全局作用域下创建一个新的绑定。</p>
<h2 id="四、总结" tabindex="-1"><a class="header-anchor" href="#四、总结" aria-hidden="true">#</a> 四、总结</h2>
<ul>
<li>
<p>let 和 const 声明的变量不会提升，降低产生错误的机率。</p>
</li>
<li>
<p>不能在声明变量前访问他们，因为此时块级绑定还在临时死区（TDZ）中。</p>
</li>
<li>
<p>注意let 和 const 在循环中的行为，是ECMA标准中专门定义的。</p>
</li>
<li>
<p>在我们开发的时候，可能认为应该默认使用 let 而不是 var ，这种情况下，对于需要写保护的变量要使用 const。然而另一种做法日益普及：<code v-pre>默认使用 const</code>，只有当确实需要改变变量的值的时候才使用 let。这是因为大部分的变量的值在初始化后不应再改变，而预料之外的变量之的改变是很多 bug 的源头。</p>
</li>
</ul>
</div></template>


