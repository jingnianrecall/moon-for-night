<template><div><blockquote>
<p>说明：本内容转自MDN，来源<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript<ExternalLinkIcon/></a>，版权归原作者所有。</p>
</blockquote>
<h1 id="javascript常用的数组方法" tabindex="-1"><a class="header-anchor" href="#javascript常用的数组方法" aria-hidden="true">#</a> JavaScript常用的数组方法</h1>
<h2 id="一、" tabindex="-1"><a class="header-anchor" href="#一、" aria-hidden="true">#</a> 一、~~</h2>
<h3 id="下表列出了会修改原始数组的方法-以及相应的非修改方法" tabindex="-1"><a class="header-anchor" href="#下表列出了会修改原始数组的方法-以及相应的非修改方法" aria-hidden="true">#</a> 下表列出了会修改原始数组的方法，以及相应的非修改方法：</h3>
<table>
<thead>
<tr>
<th>修改方法</th>
<th>相应的非修改方法</th>
<th>注释</th>
</tr>
</thead>
<tbody>
<tr>
<td>copyWithin()</td>
<td>没有相应的非修改方法</td>
<td>在数组内复制数组元素序列</td>
</tr>
<tr>
<td>fill()</td>
<td>没有相应的非修改方法</td>
<td>用静态值填充数组中从开始索引到结束索引的所有元素</td>
</tr>
<tr>
<td>pop()</td>
<td>slice(0, -1)</td>
<td>从数组中移除最后一个元素并返回该元素</td>
</tr>
<tr>
<td>push(v1, v2)</td>
<td>concat([v1, v2])</td>
<td>在数组末尾添加一个或多个元素，并返回数组新的 length</td>
</tr>
<tr>
<td>reverse()</td>
<td>toReversed()</td>
<td>就地反转数组中元素的顺序（前面变成后面，后面变成前面）</td>
</tr>
<tr>
<td>shift()</td>
<td>slice(1)</td>
<td>从数组中移除第一个元素并返回该元素</td>
</tr>
<tr>
<td>sort()</td>
<td>toSorted()</td>
<td>对数组的元素进行排序并返回该数组</td>
</tr>
<tr>
<td>splice()</td>
<td>toSpliced()</td>
<td>从数组中添加和/或删除元素</td>
</tr>
<tr>
<td>unshift(v1, v2)</td>
<td>toSpliced(0, 0, v1, v2)</td>
<td>在数组的前面添加一个或多个元素，并返回数组新的 length</td>
</tr>
</tbody>
</table>
<h2 id="二、静态方法" tabindex="-1"><a class="header-anchor" href="#二、静态方法" aria-hidden="true">#</a> 二、静态方法</h2>
<h3 id="array-from" tabindex="-1"><a class="header-anchor" href="#array-from" aria-hidden="true">#</a> Array.from()</h3>
<p>ES6新增，可以将类数组对象或可迭代对象转换为 Array 数组（浅拷贝）。</p>
<h4 id="从类数组对象构建数组-arguments" tabindex="-1"><a class="header-anchor" href="#从类数组对象构建数组-arguments" aria-hidden="true">#</a> 从类数组对象构建数组（arguments）</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">f</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ 1, 2, 3 ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="从-set-构建数组-可实现去重" tabindex="-1"><a class="header-anchor" href="#从-set-构建数组-可实现去重" aria-hidden="true">#</a> 从 Set 构建数组（可实现去重）</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> set <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"foo"</span><span class="token punctuation">,</span> <span class="token string">"bar"</span><span class="token punctuation">,</span> <span class="token string">"baz"</span><span class="token punctuation">,</span> <span class="token string">"foo"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>set<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// [ "foo", "bar", "baz" ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-isarray" tabindex="-1"><a class="header-anchor" href="#array-isarray" aria-hidden="true">#</a> Array.isArray()</h3>
<p>判断是否为数组，如果参数是数组则返回 true ，否则返回 false 。</p>
<h3 id="array-of" tabindex="-1"><a class="header-anchor" href="#array-of" aria-hidden="true">#</a> Array.of()</h3>
<p>ES6新增，可传入任意数量及类型的参数，创建一个新数组。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token string">'foo'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">'bar'</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: Array ["foo", 2, "bar", true]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个方法的主要目的，是弥补数组构造函数 <code v-pre>Array()</code> 的不足。因为参数个数的不同，会导致 <code v-pre>Array()</code> 的行为有差异。</p>
<p><code v-pre>Array.of()</code> 基本上可以用来替代 <code v-pre>Array()</code> 或 <code v-pre>new Array()</code>，并且不存在由于参数不同而导致的重载。它的行为非常统一。</p>
<h2 id="三、实例方法" tabindex="-1"><a class="header-anchor" href="#三、实例方法" aria-hidden="true">#</a> 三、实例方法</h2>
<h3 id="array-prototype-concat" tabindex="-1"><a class="header-anchor" href="#array-prototype-concat" aria-hidden="true">#</a> Array.prototype.concat()</h3>
<p><code v-pre>concat()</code> 可以合并两个或多个数组，<code v-pre>不会更改</code> 现有数组，而是返回一个新数组。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> letters <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"a"</span><span class="token punctuation">,</span> <span class="token string">"b"</span><span class="token punctuation">,</span> <span class="token string">"c"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> numbers <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> alphaNumeric <span class="token operator">=</span> letters<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>numbers<span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>alphaNumeric<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// results in ['a', 'b', 'c', 1, 2, 3]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-includes" tabindex="-1"><a class="header-anchor" href="#array-prototype-includes" aria-hidden="true">#</a> Array.prototype.includes()</h3>
<p>ES6新增，<code v-pre>includes()</code> 判断数组中是否存在给定的值，返回一个布尔值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>     <span class="token comment">// true</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>     <span class="token comment">// false</span>
<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token number">NaN</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-join" tabindex="-1"><a class="header-anchor" href="#array-prototype-join" aria-hidden="true">#</a> Array.prototype.join()</h3>
<p><code v-pre>join()</code> 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串，用逗号或指定的分隔符字符串分隔。如果数组只有一个元素，那么将返回该元素而不使用分隔符。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> elements <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Fire'</span><span class="token punctuation">,</span> <span class="token string">'Air'</span><span class="token punctuation">,</span> <span class="token string">'Water'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>elements<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: "Fire,Air,Water"</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>elements<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">''</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: "FireAirWater"</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>elements<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">'-'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: "Fire-Air-Water"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-indexof" tabindex="-1"><a class="header-anchor" href="#array-prototype-indexof" aria-hidden="true">#</a> Array.prototype.indexOf()</h3>
<p><code v-pre>indexOf()</code> 方法返回数组中第一次出现给定元素的下标，如果不存在则返回 -1。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> beasts <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'ant'</span><span class="token punctuation">,</span> <span class="token string">'bison'</span><span class="token punctuation">,</span> <span class="token string">'camel'</span><span class="token punctuation">,</span> <span class="token string">'duck'</span><span class="token punctuation">,</span> <span class="token string">'bison'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>beasts<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'bison'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: 1</span>

<span class="token comment">// Start from index 2</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>beasts<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'bison'</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: 4</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>beasts<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">'giraffe'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: -1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-flat" tabindex="-1"><a class="header-anchor" href="#array-prototype-flat" aria-hidden="true">#</a> Array.prototype.flat()</h3>
<p>ES6新增，<code v-pre>flat()</code> 用于将嵌套的数组扁平化，变成一维的数组。该方法返回一个新数组，对原数据没有影响。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">flat</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// [1, 2, 3, 4]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-push" tabindex="-1"><a class="header-anchor" href="#array-prototype-push" aria-hidden="true">#</a> Array.prototype.push()</h3>
<p><code v-pre>push()</code> 方法将指定的元素添加到数组的末尾，并返回新的数组长度。</p>
<h3 id="array-prototype-unshift" tabindex="-1"><a class="header-anchor" href="#array-prototype-unshift" aria-hidden="true">#</a> Array.prototype.unshift()</h3>
<p><code v-pre>unshift()</code> 方法将指定元素添加到数组的开头，并返回数组的新长度。</p>
<h3 id="array-prototype-pop" tabindex="-1"><a class="header-anchor" href="#array-prototype-pop" aria-hidden="true">#</a> Array.prototype.pop()</h3>
<p><code v-pre>pop()</code> 方法从数组中删除最后一个元素，并返回该元素的值。此方法会更改数组的长度。</p>
<h3 id="array-prototype-shift" tabindex="-1"><a class="header-anchor" href="#array-prototype-shift" aria-hidden="true">#</a> Array.prototype.shift()</h3>
<p><code v-pre>shift()</code> 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。</p>
<h3 id="array-prototype-reverse" tabindex="-1"><a class="header-anchor" href="#array-prototype-reverse" aria-hidden="true">#</a> Array.prototype.reverse()</h3>
<p><code v-pre>reverse()</code> 方法就地反转数组中的元素，并返回同一数组的引用，会改变原数组。</p>
<h3 id="array-prototype-slice" tabindex="-1"><a class="header-anchor" href="#array-prototype-slice" aria-hidden="true">#</a> Array.prototype.slice()</h3>
<p><code v-pre>slice()</code> 方法返回一个新的数组对象，这一对象是一个由 start 和 end 决定的原数组的浅拷贝（包括 start，不包括 end），其中 start 和 end 代表了数组元素的索引。原始数组不会被改变。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> animals <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'ant'</span><span class="token punctuation">,</span> <span class="token string">'bison'</span><span class="token punctuation">,</span> <span class="token string">'camel'</span><span class="token punctuation">,</span> <span class="token string">'duck'</span><span class="token punctuation">,</span> <span class="token string">'elephant'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>animals<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: Array ["camel", "duck", "elephant"]</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>animals<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: Array ["camel", "duck"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-splice" tabindex="-1"><a class="header-anchor" href="#array-prototype-splice" aria-hidden="true">#</a> Array.prototype.splice()</h3>
<p>splice() 方法通过移除或者替换已存在的元素和/或添加新元素就地改变一个数组的内容。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> months <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'Jan'</span><span class="token punctuation">,</span> <span class="token string">'March'</span><span class="token punctuation">,</span> <span class="token string">'April'</span><span class="token punctuation">,</span> <span class="token string">'June'</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
months<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token string">'Feb'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Inserts at index 1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>months<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: Array ["Jan", "Feb", "March", "April", "June"]</span>

months<span class="token punctuation">.</span><span class="token function">splice</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">'May'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Replaces 1 element at index 4</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>months<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: Array ["Jan", "Feb", "March", "April", "May"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-sort" tabindex="-1"><a class="header-anchor" href="#array-prototype-sort" aria-hidden="true">#</a> Array.prototype.sort()</h3>
<p>sort() 方法就地对数组的元素进行排序，并返回对相同数组的引用。</p>
<h2 id="四、迭代方法" tabindex="-1"><a class="header-anchor" href="#四、迭代方法" aria-hidden="true">#</a> 四、迭代方法</h2>
<h3 id="array-prototype-foreach" tabindex="-1"><a class="header-anchor" href="#array-prototype-foreach" aria-hidden="true">#</a> Array.prototype.forEach()</h3>
<p><code v-pre>forEach()</code> 方法对数组的每个元素执行一次给定的函数。</p>
<p><code v-pre>forEach()</code> 循环无法使用 <code v-pre>break</code> <code v-pre>return</code> 中断。</p>
<h3 id="array-prototype-map" tabindex="-1"><a class="header-anchor" href="#array-prototype-map" aria-hidden="true">#</a> Array.prototype.map()</h3>
<p>map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> array1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">9</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Pass a function to map</span>
<span class="token keyword">const</span> map1 <span class="token operator">=</span> array1<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token parameter">x</span> <span class="token operator">=></span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>map1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: Array [2, 8, 18, 32]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-reduce" tabindex="-1"><a class="header-anchor" href="#array-prototype-reduce" aria-hidden="true">#</a> Array.prototype.reduce() **</h3>
<p><code v-pre>reduce()</code> 方法对数组中的每个元素按序执行一个提供的 <code v-pre>reducer</code> 函数，每一次运行 <code v-pre>reducer</code> 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> array1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// 0 + 1 + 2 + 3 + 4</span>
<span class="token keyword">const</span> initialValue <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sumWithInitial <span class="token operator">=</span> array1<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">accumulator<span class="token punctuation">,</span> currentValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> accumulator <span class="token operator">+</span> currentValue<span class="token punctuation">,</span>
  initialValue
<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sumWithInitial<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: 10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h4>
<p>callbackFn
为数组中每个元素执行的函数。其返回值将作为下一次调用 <code v-pre>callbackFn</code> 时的 <code v-pre>accumulator</code> 参数。对于最后一次调用，返回值将作为 <code v-pre>reduce()</code> 的返回值。该函数被调用时将传入以下参数：</p>
<h4 id="accumulator" tabindex="-1"><a class="header-anchor" href="#accumulator" aria-hidden="true">#</a> accumulator</h4>
<p>上一次调用 <code v-pre>callbackFn</code> 的结果。在第一次调用时，如果指定了 <code v-pre>initialValue</code> 则为指定的值，否则为 array[0] 的值。</p>
<h4 id="currentvalue" tabindex="-1"><a class="header-anchor" href="#currentvalue" aria-hidden="true">#</a> currentValue</h4>
<p>当前元素的值。在第一次调用时，如果指定了 <code v-pre>initialValue</code>，则为 array[0] 的值，否则为 array[1]。</p>
<h4 id="currentindex" tabindex="-1"><a class="header-anchor" href="#currentindex" aria-hidden="true">#</a> currentIndex</h4>
<p>currentValue 在数组中的索引位置。在第一次调用时，如果指定了 <code v-pre>initialValue</code> 则为 <code v-pre>0</code>，否则为 <code v-pre>1</code>。</p>
<h4 id="array" tabindex="-1"><a class="header-anchor" href="#array" aria-hidden="true">#</a> array</h4>
<p>调用了 reduce() 的数组本身。</p>
<h4 id="应用" tabindex="-1"><a class="header-anchor" href="#应用" aria-hidden="true">#</a> 应用</h4>
<ul>
<li>求对象数组中值的总和
为了对包含在对象数组中的值进行求和，必须提供一个 <code v-pre>initialValue</code>，以便每个项都通过回调函数处理。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> objects <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> sum <span class="token operator">=</span> objects<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">accumulator<span class="token punctuation">,</span> currentValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> accumulator <span class="token operator">+</span> currentValue<span class="token punctuation">.</span>x<span class="token punctuation">,</span>
  <span class="token number">0</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>sum<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>展平嵌套数组</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> flattened <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">accumulator<span class="token punctuation">,</span> currentValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> accumulator<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>currentValue<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// flattened 的值是 [0, 1, 2, 3, 4, 5]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-every" tabindex="-1"><a class="header-anchor" href="#array-prototype-every" aria-hidden="true">#</a> Array.prototype.every()</h3>
<p><code v-pre>every()</code> 方法测试一个数组内的所有元素是否都能通过指定函数的测试。它返回一个布尔值。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">isBelowThreshold</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">currentValue</span><span class="token punctuation">)</span> <span class="token operator">=></span> currentValue <span class="token operator">&lt;</span> <span class="token number">40</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> array1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token number">39</span><span class="token punctuation">,</span> <span class="token number">29</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">13</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array1<span class="token punctuation">.</span><span class="token function">every</span><span class="token punctuation">(</span>isBelowThreshold<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-some" tabindex="-1"><a class="header-anchor" href="#array-prototype-some" aria-hidden="true">#</a> Array.prototype.some()</h3>
<p>some() 方法测试数组中是否至少有一个元素通过了由提供的函数实现的测试。如果在数组中找到一个元素使得提供的函数返回 true，则返回 true；否则返回 false。它不会修改数组。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token comment">// Checks whether an element is even</span>
<span class="token keyword">const</span> <span class="token function-variable function">even</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token operator">=></span> element <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array<span class="token punctuation">.</span><span class="token function">some</span><span class="token punctuation">(</span>even<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-filter" tabindex="-1"><a class="header-anchor" href="#array-prototype-filter" aria-hidden="true">#</a> Array.prototype.filter()</h3>
<p><code v-pre>filter()</code> 方法按条件进行筛选过滤数组内元素，返回一个新数组。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 使用 filter() 创建一个过滤数组，该数组删除了所有值小于 10 的元素。</span>
<span class="token keyword">function</span> <span class="token function">isBigEnough</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> value <span class="token operator">>=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> filtered <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>isBigEnough<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// filtered is [12, 130, 44]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-find" tabindex="-1"><a class="header-anchor" href="#array-prototype-find" aria-hidden="true">#</a> Array.prototype.find()</h3>
<p>ES6新增，<code v-pre>find()</code> 方法返回数组中满足条件的第一个元素的值，否则返回 undefined。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> array1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> found <span class="token operator">=</span> array1<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token parameter">element</span> <span class="token operator">=></span> element <span class="token operator">></span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>found<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: 12</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-findlast" tabindex="-1"><a class="header-anchor" href="#array-prototype-findlast" aria-hidden="true">#</a> Array.prototype.findLast()</h3>
<h3 id="array-prototype-findindex" tabindex="-1"><a class="header-anchor" href="#array-prototype-findindex" aria-hidden="true">#</a> Array.prototype.findIndex()</h3>
<p>ES6新增，<code v-pre>findIndex()</code> 方法返回数组中满足条件的第一个元素的索引，若没有找到对应元素则返回 -1。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> array1 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">isLargeNumber</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token operator">=></span> element <span class="token operator">></span> <span class="token number">13</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>array1<span class="token punctuation">.</span><span class="token function">findIndex</span><span class="token punctuation">(</span>isLargeNumber<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// Expected output: 3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="array-prototype-findlastindex" tabindex="-1"><a class="header-anchor" href="#array-prototype-findlastindex" aria-hidden="true">#</a> Array.prototype.findLastIndex()</h3>
<h3 id="array-prototype-group-实验性" tabindex="-1"><a class="header-anchor" href="#array-prototype-group-实验性" aria-hidden="true">#</a> Array.prototype.group() 实验性</h3>
<p>ES6新增，用于实现数组成员分组，比如 SQL 有 GROUP BY 子句和函数式编程有 MapReduce 方法。现在有一个提案，为 JavaScript 新增了数组实例方法group()和groupToMap()，它们可以根据分组函数的运行结果，将数组成员分组。</p>
<p>group()的参数是一个分组函数，原数组的每个成员都会依次执行这个函数，确定自己是哪一个组。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> array <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

array<span class="token punctuation">.</span><span class="token function">group</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">num<span class="token punctuation">,</span> index<span class="token punctuation">,</span> array</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> num <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span> <span class="token operator">?</span> <span class="token string">'even'</span><span class="token operator">:</span> <span class="token string">'odd'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// { odd: [1, 3, 5], even: [2, 4] }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、实例方法-toreversed-tosorted-tospliced-with" tabindex="-1"><a class="header-anchor" href="#五、实例方法-toreversed-tosorted-tospliced-with" aria-hidden="true">#</a> 五、实例方法：toReversed()，toSorted()，toSpliced()，with()</h2>
<p>很多数组的传统方法会改变原数组，比如push()、pop()、shift()、unshift()等等。数组只要调用了这些方法，它的值就变了。现在有一个提案，允许对数组进行操作时，不改变原数组，而返回一个原数组的拷贝。</p>
<p>这样的方法一共有四个。</p>
<ul>
<li>Array.prototype.toReversed() -&gt; Array</li>
<li>Array.prototype.toSorted(compareFn) -&gt; Array</li>
<li>Array.prototype.toSpliced(start, deleteCount, ...items) -&gt; Array</li>
<li>Array.prototype.with(index, value) -&gt; Array</li>
</ul>
<p>它们分别对应数组的原有方法。</p>
<ul>
<li>toReversed()对应reverse()，用来颠倒数组成员的位置。</li>
<li>toSorted()对应sort()，用来对数组成员排序。</li>
<li>toSpliced()对应splice()，用来在指定位置，删除指定数量的成员，并插入新成员。</li>
<li>with(index, value)对应splice(index, 1, value)，用来将指定位置的成员替换为新的值。</li>
</ul>
<p>上面是这四个新方法对应的原有方法，含义和用法完全一样，唯一不同的是不会改变原数组，而是返回原数组操作后的拷贝。</p>
<h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结" aria-hidden="true">#</a> 五、总结</h2>
<ul>
<li></li>
</ul>
</div></template>


