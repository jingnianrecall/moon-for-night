<template><div><blockquote></blockquote>
<h1 id="字符串的扩展" tabindex="-1"><a class="header-anchor" href="#字符串的扩展" aria-hidden="true">#</a> 字符串的扩展</h1>
<h2 id="一、模版字符串" tabindex="-1"><a class="header-anchor" href="#一、模版字符串" aria-hidden="true">#</a> 一、模版字符串</h2>
<p>模板字符串（template string）是增强版的字符串，用反引号（`）标识。它可以当作普通字符串使用，也可以用来定义多行字符串，或者在字符串中嵌入变量。</p>
<ul>
<li>在模板字符串中，空格、缩进、换行都会被保留</li>
<li>模板字符串支持嵌入变量，只需要将变量名写在 ${} 之中，其实不止变量，任意的 JavaScript 表达式都是可以的。</li>
</ul>
<h2 id="二、标签模板" tabindex="-1"><a class="header-anchor" href="#二、标签模板" aria-hidden="true">#</a> 二、标签模板</h2>
<p>模板字符串的功能，不仅仅是上面这些。它可以紧跟在一个函数名后面，该函数将被调用来处理这个模板字符串。这被称为“标签模板”功能（tagged template）。</p>
<p>标签模板其实不是模板，而是函数调用的一种特殊形式。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数。</p>
<p>但是，如果模板字符里面有变量，就不是简单的调用了，而是会将模板字符串先处理成多个参数，再调用函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> a <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>

tag<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Hello </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> a <span class="token operator">+</span> b <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> world </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> a <span class="token operator">*</span> b <span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>
<span class="token comment">// 等同于</span>
<span class="token function">tag</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'Hello '</span><span class="token punctuation">,</span> <span class="token string">' world '</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、字符串的其他拓展" tabindex="-1"><a class="header-anchor" href="#三、字符串的其他拓展" aria-hidden="true">#</a> 三、字符串的其他拓展</h2>
<p>1、ES6 加强了对 Unicode 的支持
2、ES6 为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历。
3、JSON.stringify() 的改造</p>
<h2 id="四、总结" tabindex="-1"><a class="header-anchor" href="#四、总结" aria-hidden="true">#</a> 四、总结</h2>
<ul>
<li>
<p>模版字符串用反引号（`）标识, 可以用来定义多行字符串，或者在字符串中嵌入变量和js表达式。</p>
</li>
<li>
<p>标签模板指函数后紧跟模板字符串，是函数调用的一种特殊形式。“标签”指的就是函数，紧跟在后面的模板字符串就是它的参数。</p>
</li>
</ul>
</div></template>


