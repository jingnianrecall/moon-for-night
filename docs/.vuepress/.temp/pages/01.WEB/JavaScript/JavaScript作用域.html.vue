<template><div><blockquote>
<p>说明：本内容转自MDN，来源<a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/JavaScript<ExternalLinkIcon/></a>，版权归原作者所有。</p>
</blockquote>
<h1 id="javascript作用域" tabindex="-1"><a class="header-anchor" href="#javascript作用域" aria-hidden="true">#</a> JavaScript作用域</h1>
<h2 id="一、词法作用域和动态作用域" tabindex="-1"><a class="header-anchor" href="#一、词法作用域和动态作用域" aria-hidden="true">#</a> 一、词法作用域和动态作用域</h2>
<p>作用域是程序源代码中定义变量的区域，规定了如何查找变量，也就是确定当前执行代码对变量的访问权限。
ES6 之前只有全局作用域和函数作用域。
JavaScript采用词法作用域(lexical scoping)，也就是静态作用域。</p>
<h3 id="静态作用域与动态作用域" tabindex="-1"><a class="header-anchor" href="#静态作用域与动态作用域" aria-hidden="true">#</a> 静态作用域与动态作用域</h3>
<p>因为采用词法作用域，函数的作用域在函数定义的时候就决定了。</p>
<p>与词法作用域相对的是动态作用域，函数的作用域在函数调用的时候才决定。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> value <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当采用静态作用域时，执行foo函数，先从foo函数内部查找是否有局部变量value，如果没有，就根据书写的位置，查找上面一层的代码，在这里是全局作用域，也就是value等于1，所以最后会打印1
当采用动态作用域时，执行foo函数，依然是从foo函数内部查找是否有局部变量value。如果没有，就从调用函数的作用域，也就是bar函数内部查找value变量，所以最后会打印2</p>
<h2 id="二、执行上下文栈" tabindex="-1"><a class="header-anchor" href="#二、执行上下文栈" aria-hidden="true">#</a> 二、执行上下文栈</h2>
<p>JavaScript 引擎并非一行一行地分析和执行程序，而是一段一段地分析执行。当执行一段代码的时候，会进行一个“准备工作”，存在变量提升和函数提升。</p>
<p>JavaScript 的可执行代码(executable code)分三种，全局代码、函数代码、eval代码，当执行到一个函数的时候，就会进行准备工作，即 &quot;执行上下文(execution contexts)&quot;。</p>
<p>代码中会创建很多函数，所以JavaScript 引擎创建了执行上下文栈（Execution context stack，ECS）来管理执行上下文。</p>
<p>当执行一个函数的时候，就会创建一个执行上下文，并且压入执行上下文栈，当函数执行完毕的时候，就会将函数的执行上下文从栈中弹出。</p>
<h2 id="三、变量对象" tabindex="-1"><a class="header-anchor" href="#三、变量对象" aria-hidden="true">#</a> 三、变量对象</h2>
<p>每个执行上下文，都有三个重要属性：</p>
<ul>
<li>变量对象(Variable object，VO)</li>
<li>作用域链(Scope chain)</li>
<li>this</li>
</ul>
<p>变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明。</p>
<h3 id="全局上下文" tabindex="-1"><a class="header-anchor" href="#全局上下文" aria-hidden="true">#</a> 全局上下文</h3>
<p>全局对象是预定义的对象，作为 JavaScript 的全局函数和全局属性的占位符。通过使用全局对象，可以访问所有其他所有预定义的对象、函数和属性。
在顶层 JavaScript 代码中，可以用关键字 <code v-pre>this</code> 引用全局对象。因为全局对象是作用域链的头，这意味着所有非限定性的变量和函数名都会作为该对象的属性来查询。
例如，当JavaScript 代码引用 <code v-pre>parseInt()</code> 函数时，它引用的是全局对象的 <code v-pre>parseInt</code> 属性。全局对象是作用域链的头，还意味着在顶层 JavaScript 代码中声明的所有变量都将成为全局对象的属性。</p>
<p>全局上下文中的变量对象就是全局对象。</p>
<h3 id="函数上下文" tabindex="-1"><a class="header-anchor" href="#函数上下文" aria-hidden="true">#</a> 函数上下文</h3>
<p>在函数上下文中，我们用活动对象(activation object, AO)来表示变量对象。
活动对象和变量对象其实是一个东西，只是变量对象是规范上的或者说是引擎实现上的，不可在 JavaScript 环境中访问，只有到当进入一个执行上下文中，这个执行上下文的变量对象才会被激活，所以才叫 activation object 呐，而只有被激活的变量对象，也就是活动对象上的各种属性才能被访问。
活动对象是在进入函数上下文时刻被创建的，它通过函数的 arguments 属性初始化。arguments 属性值是 Arguments 对象。</p>
<ul>
<li>
<p>全局上下文的变量对象初始化是全局对象</p>
</li>
<li>
<p>函数上下文的变量对象初始化只包括 Arguments 对象</p>
</li>
<li>
<p>在进入执行上下文时会给变量对象添加形参、函数声明、变量声明等初始的属性值</p>
</li>
<li>
<p>在代码执行阶段，会再次修改变量对象的属性值</p>
</li>
</ul>
<h2 id="四、作用域链" tabindex="-1"><a class="header-anchor" href="#四、作用域链" aria-hidden="true">#</a> 四、作用域链</h2>
<p>当查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。</p>
<h3 id="函数创建" tabindex="-1"><a class="header-anchor" href="#函数创建" aria-hidden="true">#</a> 函数创建</h3>
<p>函数的作用域在函数定义的时候就决定了。</p>
<p>这是因为函数有一个内部属性 [[scope]]，当函数创建的时候，就会保存所有父变量对象到其中，你可以理解 [[scope]] 就是所有父变量对象的层级链，但是注意：[[scope]] 并不代表完整的作用域链！</p>
<h3 id="函数激活" tabindex="-1"><a class="header-anchor" href="#函数激活" aria-hidden="true">#</a> 函数激活</h3>
<p>当函数激活时，进入函数上下文，创建 VO/AO 后，就会将活动对象添加到作用链的前端。</p>
<p>这时候执行上下文的作用域链，我们命名为 Scope：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>Scope <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token constant">AO</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span>Scope<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>至此，作用域链创建完毕。</p>
<h2 id="五、this" tabindex="-1"><a class="header-anchor" href="#五、this" aria-hidden="true">#</a> 五、this</h2>
<h2 id="六、总结" tabindex="-1"><a class="header-anchor" href="#六、总结" aria-hidden="true">#</a> 六、总结</h2>
<ul>
<li>
<p>作用域是定义变量的区域，规定了如何查找变量，确定了当前执行代码对变量的访问权限。</p>
</li>
<li>
<p>Js代码执行时，会创建执行上下文栈管理执行上下文，每个执行上下文包括三个重要属性：</p>
</li>
<li>
<p>变量对象(Variable object，VO)</p>
</li>
<li>
<p>作用域链(Scope chain)</p>
</li>
<li>
<p>this</p>
</li>
<li>
<p>查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链</p>
</li>
</ul>
</div></template>


