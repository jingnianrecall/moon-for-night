<template><div><h2 id="一、基础" tabindex="-1"><a class="header-anchor" href="#一、基础" aria-hidden="true">#</a> 一、基础</h2>
<h3 id="_1-let-和-const" tabindex="-1"><a class="header-anchor" href="#_1-let-和-const" aria-hidden="true">#</a> 1. let 和 const</h3>
<p>答：</p>
<h3 id="_2-模板字符串" tabindex="-1"><a class="header-anchor" href="#_2-模板字符串" aria-hidden="true">#</a> 2. 模板字符串</h3>
<p>答：</p>
<h3 id="_3-箭头函数" tabindex="-1"><a class="header-anchor" href="#_3-箭头函数" aria-hidden="true">#</a> 3. 箭头函数</h3>
<p>答：</p>
<h3 id="_4-symbol" tabindex="-1"><a class="header-anchor" href="#_4-symbol" aria-hidden="true">#</a> 4. Symbol</h3>
<h3 id="_5-set-和-map" tabindex="-1"><a class="header-anchor" href="#_5-set-和-map" aria-hidden="true">#</a> 5. Set 和 Map</h3>
<h3 id="_6-for-of" tabindex="-1"><a class="header-anchor" href="#_6-for-of" aria-hidden="true">#</a> 6. for of</h3>
<h3 id="_7-解构赋值" tabindex="-1"><a class="header-anchor" href="#_7-解构赋值" aria-hidden="true">#</a> 7. 解构赋值</h3>
<h3 id="_8-增强的对象字面量" tabindex="-1"><a class="header-anchor" href="#_8-增强的对象字面量" aria-hidden="true">#</a> 8. 增强的对象字面量</h3>
<p>答：</p>
<h4 id="对象键值对-key-value名称相同时-可以简写。" tabindex="-1"><a class="header-anchor" href="#对象键值对-key-value名称相同时-可以简写。" aria-hidden="true">#</a> 对象键值对 key value名称相同时，可以简写。</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// bad</span>
<span class="token keyword">const</span> something <span class="token operator">=</span> <span class="token string">'y'</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">something</span><span class="token operator">:</span> something
<span class="token punctuation">}</span>

<span class="token comment">// good</span>
<span class="token keyword">const</span> something <span class="token operator">=</span> <span class="token string">'y'</span>
<span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token punctuation">{</span>
  something
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="动态属性" tabindex="-1"><a class="header-anchor" href="#动态属性" aria-hidden="true">#</a> 动态属性</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> x <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span><span class="token string">'a'</span> <span class="token operator">+</span> <span class="token string">'_'</span> <span class="token operator">+</span> <span class="token string">'b'</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token string">'z'</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>x<span class="token punctuation">.</span>a_b<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// z</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、重点" tabindex="-1"><a class="header-anchor" href="#二、重点" aria-hidden="true">#</a> 二、重点</h2>
<h4 id="promise-对象" tabindex="-1"><a class="header-anchor" href="#promise-对象" aria-hidden="true">#</a> Promise 对象</h4>
<p>答：</p>
<h4 id="generator-函数" tabindex="-1"><a class="header-anchor" href="#generator-函数" aria-hidden="true">#</a> Generator 函数</h4>
<p>答：</p>
<h4 id="async-函数" tabindex="-1"><a class="header-anchor" href="#async-函数" aria-hidden="true">#</a> Async 函数</h4>
<p>答：</p>
<h4 id="class-类" tabindex="-1"><a class="header-anchor" href="#class-类" aria-hidden="true">#</a> Class 类</h4>
<p>答：</p>
<h4 id="装饰器" tabindex="-1"><a class="header-anchor" href="#装饰器" aria-hidden="true">#</a> 装饰器</h4>
<p>答：</p>
<h2 id="三、es6有哪些新特性-概述" tabindex="-1"><a class="header-anchor" href="#三、es6有哪些新特性-概述" aria-hidden="true">#</a> 三、ES6有哪些新特性（概述）</h2>
</div></template>


