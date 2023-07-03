<template><div><blockquote></blockquote>
<h1 id="_04-vue-3中的响应式系统" tabindex="-1"><a class="header-anchor" href="#_04-vue-3中的响应式系统" aria-hidden="true">#</a> 04.Vue 3中的响应式系统</h1>
<h2 id="一、如何追踪变化" tabindex="-1"><a class="header-anchor" href="#一、如何追踪变化" aria-hidden="true">#</a> 一、如何追踪变化</h2>
<p>我们无法直接追踪对上述示例中局部变量的读写，原生 JavaScript 没有提供任何机制能做到这一点。但是，我们是可以追踪对象属性的读写的。</p>
<p>在 JavaScript 中有两种劫持 property 访问的方式：getter / setters 和 <code v-pre>Proxies</code>。Vue 2 使用 getter / setters 完全是出于支持旧版本浏览器的限制。而在 Vue 3 中则使用了 <code v-pre>Proxy</code> 来创建响应式对象，仅将 getter / setter 用于 <code v-pre>ref</code>。下面的伪代码将会说明它们是如何工作的：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Proxy</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">track</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
      <span class="token keyword">return</span> target<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      target<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> value
      <span class="token function">trigger</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> refObject <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">track</span><span class="token punctuation">(</span>refObject<span class="token punctuation">,</span> <span class="token string">'value'</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> value
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token keyword">set</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token parameter">newValue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      value <span class="token operator">=</span> newValue
      <span class="token function">trigger</span><span class="token punctuation">(</span>refObject<span class="token punctuation">,</span> <span class="token string">'value'</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> refObject
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结" aria-hidden="true">#</a> 五、总结</h2>
<ul>
<li>Vue 3 中则使用了 Proxy 来创建响应式对象</li>
</ul>
</div></template>


