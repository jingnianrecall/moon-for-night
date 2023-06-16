<template><div><blockquote>
<p>说明：本内容转自MDN，来源<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript<ExternalLinkIcon/></a>，版权归原作者所有。</p>
</blockquote>
<h1 id="javascript的闭包-closure" tabindex="-1"><a class="header-anchor" href="#javascript的闭包-closure" aria-hidden="true">#</a> JavaScript的闭包 -- Closure</h1>
<h2 id="一、闭包是什么" tabindex="-1"><a class="header-anchor" href="#一、闭包是什么" aria-hidden="true">#</a> 一、闭包是什么</h2>
<p>MDN 对闭包的定义为：</p>
<ul>
<li>
<p>闭包（closure）是一个函数以及其捆绑的周边环境状态（lexical environment，词法环境）的引用的组合。换而言之，闭包让开发者可以从内部函数访问外部函数的作用域。在 JavaScript 中，闭包会随着函数的创建而被同时创建。</p>
</li>
<li>
<p>闭包是指那些能够访问自由变量的函数。</p>
</li>
</ul>
<p>简单理解：闭包 = 内层函数 + 引用的外层函数变量</p>
<p>ECMAScript中，闭包指的是：</p>
<p>从理论角度：
所有的函数。因为它们都在创建的时候就将上层上下文的数据保存起来了。哪怕是简单的全局变量也是如此，因为函数中访问全局变量就相当于是在访问自由变量，这个时候使用最外层的作用域。</p>
<p>从实践角度：以下函数才算是闭包：
1、即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）
2、在代码中引用了自由变量</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">makeFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"Recall"</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">displayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// displayName() 是内部函数，一个闭包</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 使用了父函数中声明的变量</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> displayName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> myFunc <span class="token operator">=</span> <span class="token function">makeFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们了解了具体的执行过程后，我们知道 内部函数：displayName 执行上下文维护了一个作用域链：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>displayNameContext <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">Scope</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token constant">AO</span><span class="token punctuation">,</span> makeFuncContext<span class="token punctuation">.</span><span class="token constant">AO</span><span class="token punctuation">,</span> globalContext<span class="token punctuation">.</span><span class="token constant">VO</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对的，就是因为这个作用域链，内部函数：displayName 依然可以读取到 makeFuncContext.AO 的值，说明当 内部函数：displayName 引用了 makeFuncContext.AO 中的值的时候，即使 makeFuncContext 被销毁了，但是 JavaScript 依然会让 makeFuncContext.AO 活在内存中，内部函数：displayName 依然可以通过 内部函数：displayName 的作用域链找到它，正是因为 JavaScript 做到了这一点，从而实现了闭包这个概念。</p>
<h2 id="二、闭包使用场景" tabindex="-1"><a class="header-anchor" href="#二、闭包使用场景" aria-hidden="true">#</a> 二、闭包使用场景</h2>
<h3 id="常见应用" tabindex="-1"><a class="header-anchor" href="#常见应用" aria-hidden="true">#</a> 常见应用</h3>
<h4 id="变量私有化-实现数据私有-外部可以使用-但无法修改。" tabindex="-1"><a class="header-anchor" href="#变量私有化-实现数据私有-外部可以使用-但无法修改。" aria-hidden="true">#</a> 变量私有化，实现数据私有，外部可以使用，但无法修改。</h4>
<h3 id="闭包场景" tabindex="-1"><a class="header-anchor" href="#闭包场景" aria-hidden="true">#</a> 闭包场景</h3>
<h4 id="节流、防抖" tabindex="-1"><a class="header-anchor" href="#节流、防抖" aria-hidden="true">#</a> 节流、防抖</h4>
<h4 id="vue3、react-hooks大量使用闭包" tabindex="-1"><a class="header-anchor" href="#vue3、react-hooks大量使用闭包" aria-hidden="true">#</a> vue3、react hooks大量使用闭包</h4>
<p>注意点：
什么时候用到return？
当外部想要使用闭包的变量时，使用return。</p>
<h2 id="三、闭包内存泄露问题" tabindex="-1"><a class="header-anchor" href="#三、闭包内存泄露问题" aria-hidden="true">#</a> 三、闭包内存泄露问题</h2>
<h4 id="为什么会存在内存泄漏" tabindex="-1"><a class="header-anchor" href="#为什么会存在内存泄漏" aria-hidden="true">#</a> 为什么会存在内存泄漏?</h4>
<p>闭包函数内引用的变量（代码中 name ）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">makeFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> name <span class="token operator">=</span> <span class="token string">"Recall"</span><span class="token punctuation">;</span>
    <span class="token keyword">function</span> <span class="token function">displayName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// displayName() 是内部函数，一个闭包</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 使用了父函数中声明的变量</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> displayName<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> myFunc <span class="token operator">=</span> <span class="token function">makeFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">myFunc</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>借助于垃圾回收机制的，标记清除法可以看出</p>
<p>1.myFunc 是一个全局变量，代码执行完毕不会立即销毁
2.myFunc 使用 makeFunc 函数
3.makeFunc 用到 displayName 函数
4.displayName 函数里面用到 name
5.name 被引用就不会被回收，所以一直存在，就会引起内存泄漏</p>
<p>注：不是所有的内存泄露都需要手动收回，代码异常导致的内存泄露考虑解决方案。</p>
<h2 id="四、经典闭包问题" tabindex="-1"><a class="header-anchor" href="#四、经典闭包问题" aria-hidden="true">#</a> 四、经典闭包问题</h2>
<h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结" aria-hidden="true">#</a> 五、总结</h2>
<ul>
<li>闭包就是即使创建它的上下文已经销毁，比如父函数，但因为内部函数引用了外层函数的变量，它仍然存在（比如，内部函数从父函数中返回）。</li>
</ul>
</div></template>


