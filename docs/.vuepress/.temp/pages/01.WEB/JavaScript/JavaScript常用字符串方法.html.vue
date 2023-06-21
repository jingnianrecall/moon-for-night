<template><div><blockquote>
<p>说明：本内容转自MDN，来源<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript<ExternalLinkIcon/></a>，版权归原作者所有。</p>
</blockquote>
<h1 id="javascript常用字符串方法" tabindex="-1"><a class="header-anchor" href="#javascript常用字符串方法" aria-hidden="true">#</a> JavaScript常用字符串方法</h1>
<h2 id="一、" tabindex="-1"><a class="header-anchor" href="#一、" aria-hidden="true">#</a> 一、~~</h2>
<h3 id="" tabindex="-1"><a class="header-anchor" href="#" aria-hidden="true">#</a> </h3>
<h2 id="二、静态方法" tabindex="-1"><a class="header-anchor" href="#二、静态方法" aria-hidden="true">#</a> 二、静态方法</h2>
<h3 id="string-fromcharcode" tabindex="-1"><a class="header-anchor" href="#string-fromcharcode" aria-hidden="true">#</a> String.fromCharCode()</h3>
<p>返回使用指定的 Unicode 值序列创建的字符串。</p>
<h3 id="string-fromcodepoint" tabindex="-1"><a class="header-anchor" href="#string-fromcodepoint" aria-hidden="true">#</a> String.fromCodePoint()</h3>
<p>返回使用指定的码位序列创建的字符串。</p>
<h3 id="string-raw" tabindex="-1"><a class="header-anchor" href="#string-raw" aria-hidden="true">#</a> String.raw()</h3>
<p>返回从原始模板字符串创建的字符串。</p>
<h2 id="三、实例方法" tabindex="-1"><a class="header-anchor" href="#三、实例方法" aria-hidden="true">#</a> 三、实例方法</h2>
<h3 id="string-prototype-includes" tabindex="-1"><a class="header-anchor" href="#string-prototype-includes" aria-hidden="true">#</a> String.prototype.includes()</h3>
<p>确定调用字符串是否包含 searchString。</p>
<h3 id="string-prototype-indexof" tabindex="-1"><a class="header-anchor" href="#string-prototype-indexof" aria-hidden="true">#</a> String.prototype.indexOf()</h3>
<p>返回在调用 String 对象中第一次出现的 searchValue 的索引，如果未找到则返回 -1。</p>
<h3 id="string-prototype-replace" tabindex="-1"><a class="header-anchor" href="#string-prototype-replace" aria-hidden="true">#</a> String.prototype.replace()</h3>
<p>替换指定字符串内容。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token string">'The quick brown fox jumps over the lazy dog. '</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>p<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">'dog'</span><span class="token punctuation">,</span> <span class="token string">'monkey'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: "The quick brown fox jumps over the lazy monkey. "</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string-prototype-slice" tabindex="-1"><a class="header-anchor" href="#string-prototype-slice" aria-hidden="true">#</a> String.prototype.slice()</h3>
<p>slice() 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">'The quick brown fox jumps over the lazy dog.'</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">31</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: "the lazy dog."</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>str<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">19</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: "quick brown fox"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string-prototype-split" tabindex="-1"><a class="header-anchor" href="#string-prototype-split" aria-hidden="true">#</a> String.prototype.split()</h3>
<p>split() 方法接受一个模式，通过搜索模式将字符串分割成一个有序的子串列表，将这些子串放入一个数组，并返回该数组。</p>
<h3 id="string-prototype-substring" tabindex="-1"><a class="header-anchor" href="#string-prototype-substring" aria-hidden="true">#</a> String.prototype.substring()</h3>
<p>substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集，或从开始索引直到字符串的末尾的一个子集。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> anyString <span class="token operator">=</span> <span class="token string">"Mozilla"</span><span class="token punctuation">;</span>

<span class="token comment">// 输出 "Moz"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>anyString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 输出 "lla"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>anyString<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string-prototype-trim" tabindex="-1"><a class="header-anchor" href="#string-prototype-trim" aria-hidden="true">#</a> String.prototype.trim()</h3>
<p>trim() 方法从字符串的两端清除空格，返回一个新的字符串，而不修改原始字符串。</p>
<h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结" aria-hidden="true">#</a> 五、总结</h2>
<ul>
<li></li>
</ul>
</div></template>


