<template><div><blockquote></blockquote>
<h1 id="set-和-map-数据结构" tabindex="-1"><a class="header-anchor" href="#set-和-map-数据结构" aria-hidden="true">#</a> Set 和 Map 数据结构</h1>
<h2 id="一、set" tabindex="-1"><a class="header-anchor" href="#一、set" aria-hidden="true">#</a> 一、Set</h2>
<p>Set 类似于数组，但是成员的值都是唯一的，没有重复的值。</p>
<p>Set本身是一个构造函数，用来生成 Set 数据结构。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> s <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> s<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token keyword">of</span> s<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>i<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">// 2 3 5 4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="set-实例的属性和方法" tabindex="-1"><a class="header-anchor" href="#set-实例的属性和方法" aria-hidden="true">#</a> Set 实例的属性和方法</h3>
<h4 id="set-结构的实例有以下属性。" tabindex="-1"><a class="header-anchor" href="#set-结构的实例有以下属性。" aria-hidden="true">#</a> Set 结构的实例有以下属性。</h4>
<ul>
<li>Set.prototype.constructor：构造函数，默认就是Set函数。</li>
<li>Set.prototype.size：返回Set实例的成员总数。</li>
</ul>
<h4 id="set-实例的方法分为两大类-操作方法-用于操作数据-和遍历方法-用于遍历成员-。下面先介绍四个操作方法。" tabindex="-1"><a class="header-anchor" href="#set-实例的方法分为两大类-操作方法-用于操作数据-和遍历方法-用于遍历成员-。下面先介绍四个操作方法。" aria-hidden="true">#</a> Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。</h4>
<ul>
<li>Set.prototype.add(value)：添加某个值，返回 Set 结构本身。</li>
<li>Set.prototype.delete(value)：删除某个值，返回一个布尔值，表示删除是否成功。</li>
<li>Set.prototype.has(value)：返回一个布尔值，表示该值是否为Set的成员。</li>
<li>Set.prototype.clear()：清除所有成员，没有返回值。</li>
</ul>
<h4 id="set-结构的实例有四个遍历方法-可以用于遍历成员。" tabindex="-1"><a class="header-anchor" href="#set-结构的实例有四个遍历方法-可以用于遍历成员。" aria-hidden="true">#</a> Set 结构的实例有四个遍历方法，可以用于遍历成员。</h4>
<ul>
<li>Set.prototype.keys()：返回键名的遍历器</li>
<li>Set.prototype.values()：返回键值的遍历器</li>
<li>Set.prototype.entries()：返回键值对的遍历器</li>
<li>Set.prototype.forEach()：使用回调函数遍历每个成员</li>
</ul>
<h2 id="二、weakset" tabindex="-1"><a class="header-anchor" href="#二、weakset" aria-hidden="true">#</a> 二、WeakSet</h2>
<h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性" aria-hidden="true">#</a> 特性</h3>
<h4 id="_1-储存-dom-节点" tabindex="-1"><a class="header-anchor" href="#_1-储存-dom-节点" aria-hidden="true">#</a> 1. 储存 DOM 节点</h4>
<p>WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。</p>
<h4 id="_2-weakset-的键名所引用的对象是弱引用" tabindex="-1"><a class="header-anchor" href="#_2-weakset-的键名所引用的对象是弱引用" aria-hidden="true">#</a> 2. WeakSet 的键名所引用的对象是弱引用</h4>
<p>垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。</p>
<h4 id="_3-应用场景" tabindex="-1"><a class="header-anchor" href="#_3-应用场景" aria-hidden="true">#</a> 3. 应用场景</h4>
<p>WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。
如数据缓存，在不修改原有对象的情况下储存某些属性或者根据对象储存一些计算的值等，而又不想管理这些数据的死活时非常适合考虑使用 WeakMap。</p>
<h2 id="三、map" tabindex="-1"><a class="header-anchor" href="#三、map" aria-hidden="true">#</a> 三、Map</h2>
<p>Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> m <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> o <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">p</span><span class="token operator">:</span> <span class="token string">'Hello World'</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

m<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>o<span class="token punctuation">,</span> <span class="token string">'content'</span><span class="token punctuation">)</span>
m<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token comment">// "content"</span>

m<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token comment">// true</span>
m<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token comment">// true</span>
m<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>o<span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、weakmap" tabindex="-1"><a class="header-anchor" href="#四、weakmap" aria-hidden="true">#</a> 四、WeakMap</h2>
<h3 id="特性-1" tabindex="-1"><a class="header-anchor" href="#特性-1" aria-hidden="true">#</a> 特性</h3>
<h4 id="_1-weakmap-只接受对象作为键名" tabindex="-1"><a class="header-anchor" href="#_1-weakmap-只接受对象作为键名" aria-hidden="true">#</a> 1. WeakMap 只接受对象作为键名</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// TypeError: Invalid value used as weak map key</span>
map<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// TypeError: Invalid value used as weak map key</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-weakmap-的键名所引用的对象是弱引用" tabindex="-1"><a class="header-anchor" href="#_2-weakmap-的键名所引用的对象是弱引用" aria-hidden="true">#</a> 2. WeakMap 的键名所引用的对象是弱引用</h4>
<p>垃圾回收机制不考虑 WeakSet 对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于 WeakSet 之中。</p>
<h4 id="_3-应用场景-1" tabindex="-1"><a class="header-anchor" href="#_3-应用场景-1" aria-hidden="true">#</a> 3. 应用场景</h4>
<p>WeakSet 适合临时存放一组对象，以及存放跟对象绑定的信息。
如数据缓存，在不修改原有对象的情况下储存某些属性或者根据对象储存一些计算的值等，而又不想管理这些数据的死活时非常适合考虑使用 WeakMap。</p>
<h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结" aria-hidden="true">#</a> 五、总结</h2>
<ul>
<li>
<p>Set 类似于数组，但是成员的值都是唯一的，没有重复的值。使用 <code v-pre>Array.from</code> 方法可以实现数组去重</p>
</li>
<li>
<p>Map 数据结构类似于对象，“键”的范围不限于对象的字符串，各种类型的值（包括对象）都可以当作键。</p>
</li>
<li>
<p>WeakMap、WeakSet 属于弱引用，不可遍历。可以用在存储dom节点、和一些临时缓存数据等，防止内存泄漏。</p>
</li>
</ul>
</div></template>


