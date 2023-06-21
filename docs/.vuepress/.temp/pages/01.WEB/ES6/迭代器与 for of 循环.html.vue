<template><div><blockquote></blockquote>
<h1 id="迭代器与-for-of-循环" tabindex="-1"><a class="header-anchor" href="#迭代器与-for-of-循环" aria-hidden="true">#</a> 迭代器与 for of 循环</h1>
<h2 id="一、es6-之前的循环" tabindex="-1"><a class="header-anchor" href="#一、es6-之前的循环" aria-hidden="true">#</a> 一、ES6 之前的循环</h2>
<p>传统的 <code v-pre>for</code> 循环 需要提前获取数组长度，声明索引变量等，尤其当多个循环嵌套的时候，更需要使用多个索引变量，代码的复杂度就会大大增加，比如我们使用双重循环进行去重：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">unique</span><span class="token punctuation">(</span><span class="token parameter">array</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> arrayLen <span class="token operator">=</span> array<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arrayLen<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> resLen <span class="token operator">=</span> res<span class="token punctuation">.</span>length<span class="token punctuation">;</span> j <span class="token operator">&lt;</span> resLen<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">===</span> res<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>j <span class="token operator">===</span> resLen<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为了消除这种复杂度以及减少循环中的错误(比如错误使用其他循环中的变量)，ES6 提供了迭代器和 <code v-pre>for of</code> 循环共同解决这个问题。</p>
<h2 id="二、iterator-遍历器" tabindex="-1"><a class="header-anchor" href="#二、iterator-遍历器" aria-hidden="true">#</a> 二、Iterator（遍历器）</h2>
<p>迭代器，其实就是一个具有 <code v-pre>next()</code> 方法的对象，每次调用 <code v-pre>next()</code> 都会返回一个结果对象，该结果对象有两个属性，<code v-pre>value</code> 表示当前的值，<code v-pre>done</code> 表示遍历是否结束。</p>
<h2 id="二、for-of" tabindex="-1"><a class="header-anchor" href="#二、for-of" aria-hidden="true">#</a> 二、for of</h2>
<p>ES6 引入了<code v-pre>for...of</code>循环，作为遍历所有数据结构的统一的方法。</p>
<p>一个数据结构只要部署了<code v-pre>Symbol.iterator</code>属性，就被视为具有 <code v-pre>iterator</code> 接口，就可以用<code v-pre>for...of</code>循环遍历它的成员。也就是说，<code v-pre>for...of</code>循环内部调用的是数据结构的<code v-pre>Symbol.iterator</code>方法。</p>
<p>for...of循环可以使用的范围包括:</p>
<ul>
<li>数组</li>
<li><code v-pre>Set</code> 和 <code v-pre>Map</code> 结构</li>
<li>字符串</li>
<li>某些类似数组的对象（比如<code v-pre>arguments</code>对象、<code v-pre>DOM NodeList</code> 对象）</li>
<li><code v-pre>Generator</code> 对象</li>
</ul>
<h2 id="三、与其他遍历语法的比较" tabindex="-1"><a class="header-anchor" href="#三、与其他遍历语法的比较" aria-hidden="true">#</a> 三、与其他遍历语法的比较</h2>
<h3 id="原始写法的-for-循环。" tabindex="-1"><a class="header-anchor" href="#原始写法的-for-循环。" aria-hidden="true">#</a> 原始写法的 for 循环。</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 这种写法比较麻烦</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> index <span class="token operator">&lt;</span> myArray<span class="token punctuation">.</span>length<span class="token punctuation">;</span> index<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArray<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数组内置的foreach方法" tabindex="-1"><a class="header-anchor" href="#数组内置的foreach方法" aria-hidden="true">#</a> 数组内置的forEach方法</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 这种写法的问题在于，无法中途跳出forEach循环，break命令或return命令都不能奏效。</span>
myArray<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-in循环" tabindex="-1"><a class="header-anchor" href="#for-in循环" aria-hidden="true">#</a> for...in循环</h3>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> index <span class="token keyword">in</span> myArray<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myArray<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>for...in循环有几个缺点。</p>
<ul>
<li>数组的键名是数字，但是<code v-pre>for...in</code>循环是以字符串作为键名“0”、“1”、“2”等等。</li>
<li><code v-pre>for...in</code>循环不仅遍历数字键名，还会遍历手动添加的其他键，甚至包括原型链上的键。</li>
<li>某些情况下，<code v-pre>for...in</code>循环会以任意顺序遍历键名。
总之，<code v-pre>for...in</code>循环主要是为遍历对象而设计的，不适用于遍历数组。</li>
</ul>
<h3 id="for-of循环相比上面几种做法-有一些显著的优点。" tabindex="-1"><a class="header-anchor" href="#for-of循环相比上面几种做法-有一些显著的优点。" aria-hidden="true">#</a> for...of循环相比上面几种做法，有一些显著的优点。</h3>
<ul>
<li>有着同<code v-pre>for...in</code>一样的简洁语法，但是没有<code v-pre>for...in</code>那些缺点。</li>
<li>不同于<code v-pre>forEach</code>方法，它可以与<code v-pre>break</code>、<code v-pre>continue</code>和<code v-pre>return</code>配合使用。</li>
<li>提供了遍历所有数据结构的统一操作接口。</li>
</ul>
<h2 id="四、总结" tabindex="-1"><a class="header-anchor" href="#四、总结" aria-hidden="true">#</a> 四、总结</h2>
<ul>
<li>
<p>传统的 <code v-pre>for</code> 循环 有时（双重循环）会增加代码的复杂度，ES6 提供了迭代器和 <code v-pre>for of</code> 循环共同解决这个问题。</p>
</li>
<li>
<p>迭代器，其实就是一个具有 <code v-pre>next()</code> 方法的对象，每次调用 <code v-pre>next()</code> 都会返回一个结果对象，该结果对象有两个属性，<code v-pre>value</code> 表示当前的值，<code v-pre>done</code> 表示遍历是否结束。</p>
</li>
<li>
<p><code v-pre>for...in</code> 循环主要是为遍历对象而设计的，不适用于遍历数组。</p>
</li>
<li>
<p><code v-pre>for...of</code> 循环比传统 <code v-pre>for</code> 循环更简洁，也不像 <code v-pre>forEach</code> 方法不能中断</p>
</li>
</ul>
</div></template>


