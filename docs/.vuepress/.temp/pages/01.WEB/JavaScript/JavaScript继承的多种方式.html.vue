<template><div><h1 id="javascript继承的多种方式" tabindex="-1"><a class="header-anchor" href="#javascript继承的多种方式" aria-hidden="true">#</a> JavaScript继承的多种方式</h1>
<h2 id="一、原型链继承" tabindex="-1"><a class="header-anchor" href="#一、原型链继承" aria-hidden="true">#</a> 一、原型链继承</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Parent</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'kevin'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// kevin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>问题：
1.引用类型的属性被所有实例共享, 因为所有实例都可以访问原型链上的属性
2.在创建 Child 的实例时，不能向Parent传参</p>
<h2 id="二、借用构造函数-经典继承" tabindex="-1"><a class="header-anchor" href="#二、借用构造函数-经典继承" aria-hidden="true">#</a> 二、借用构造函数(经典继承)</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Parent</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>names <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'kevin'</span><span class="token punctuation">,</span> <span class="token string">'daisy'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">Parent</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

child1<span class="token punctuation">.</span>names<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'yayu'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>names<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["kevin", "daisy", "yayu"]</span>

<span class="token keyword">var</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>names<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["kevin", "daisy"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点：</p>
<p>1.避免了引用类型的属性被所有实例共享</p>
<p>2.可以在 Child 中向 Parent 传参</p>
<p>缺点：</p>
<p>方法都在构造函数中定义，每次创建实例都会创建一遍方法。</p>
<h2 id="三、组合继承" tabindex="-1"><a class="header-anchor" href="#三、组合继承" aria-hidden="true">#</a> 三、组合继承</h2>
<p>原型链继承和经典继承双剑合璧。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Parent</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'red'</span><span class="token punctuation">,</span> <span class="token string">'blue'</span><span class="token punctuation">,</span> <span class="token string">'green'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Parent</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">getName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Child</span> <span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

    <span class="token function">Parent</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token class-name">Child</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Parent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> child1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">'kevin'</span><span class="token punctuation">,</span> <span class="token string">'18'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

child1<span class="token punctuation">.</span>colors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">'black'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// kevin</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 18</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child1<span class="token punctuation">.</span>colors<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["red", "blue", "green", "black"]</span>

<span class="token keyword">var</span> child2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Child</span><span class="token punctuation">(</span><span class="token string">'daisy'</span><span class="token punctuation">,</span> <span class="token string">'20'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// daisy</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>age<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 20</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>child2<span class="token punctuation">.</span>colors<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// ["red", "blue", "green"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>优点：融合原型链继承和构造函数的优点，是 JavaScript 中最常用的继承模式。</p>
</div></template>


