<template><div><blockquote></blockquote>
<h1 id="javascript继承与原型链" tabindex="-1"><a class="header-anchor" href="#javascript继承与原型链" aria-hidden="true">#</a> JavaScript继承与原型链</h1>
<h2 id="一、mdn-对继承与原型链的定义" tabindex="-1"><a class="header-anchor" href="#一、mdn-对继承与原型链的定义" aria-hidden="true">#</a> 一、MDN 对继承与原型链的定义</h2>
<p>对于使用过基于类的语言（如 Java 或 C++）的开发者来说，JavaScript 实在是有些令人困惑——JavaScript 是动态的且没有静态类型。</p>
<p>当谈到继承时，JavaScript 只有一种结构：对象。每个对象（object）都有一个私有属性指向另一个名为原型（prototype）的对象。原型对象也有一个自己的原型，层层向上直到一个对象的原型为 null。根据定义，null 没有原型，并作为这个原型链（prototype chain）中的最后一个环节。可以改变原型链中的任何成员，甚至可以在运行时换出原型，因此 JavaScript 中不存在静态分派的概念。</p>
<p>尽管这种混杂通常被认为是 JavaScript 的弱点之一，但是原型继承模型本身实际上比类式模型更强大。例如，在原型模型的基础上构建类式模型（即类的实现方式）相当简单。</p>
<p>尽管类现在被广泛采用并成为 JavaScript 中新的范式，但类并没有带来新的继承模式。虽然类为大部分原型的机制提供了抽象，但了解原型在底层是如何工作的仍然十分有用。</p>
<h2 id="二、原型与原型链" tabindex="-1"><a class="header-anchor" href="#二、原型与原型链" aria-hidden="true">#</a> 二、原型与原型链</h2>
<h3 id="prototype" tabindex="-1"><a class="header-anchor" href="#prototype" aria-hidden="true">#</a> prototype</h3>
<p>每个函数都有一个 <code v-pre>prototype</code> 属性，就是我们经常在各种例子中看到的那个 prototype ，比如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token comment">// 虽然写在注释里，但是你要注意：</span>
<span class="token comment">// prototype是函数才会有的属性</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Kevin'</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> person1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> person2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person1<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// Kevin</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person2<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// Kevin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/../docs/.vuepress/public/01.WEB/JavaScript/函数原型.png" alt="函数原型"></p>
<p>函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型，也就是这个例子中的 person1 和 person2 的原型。</p>
<p>那什么是原型呢？你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型&quot;继承&quot;属性。</p>
<p>让我们用一张图表示构造函数和实例原型之间的关系：</p>
<p><img src="@source/../docs/.vuepress/public/01.WEB/JavaScript/函数原型1.png" alt="函数原型"></p>
<h3 id="proto" tabindex="-1"><a class="header-anchor" href="#proto" aria-hidden="true">#</a> <code v-pre>__proto__</code></h3>
<p>这是每一个JavaScript对象(除了 null )都具有的一个属性，叫<code v-pre>__proto__</code>，这个属性会指向该对象的原型。</p>
<p>为了证明这一点,我们可以在火狐或者谷歌中输入：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>于是我们更新下关系图：</p>
<p><img src="@source/../docs/.vuepress/public/01.WEB/JavaScript/函数原型2.png" alt="函数原型"></p>
<p>注：<code v-pre>__proto__</code> 是绝大部分浏览器都支持这个非标准的方法访问原型，然而它并不存在于 Person.prototype 中，实际上，它是来自于 Object.prototype ，与其说是一个属性，不如说是一个 getter/setter，当使用 <code v-pre>obj.__proto__</code> 时，可以理解成返回了 Object.getPrototypeOf(obj)。</p>
<h3 id="constructor" tabindex="-1"><a class="header-anchor" href="#constructor" aria-hidden="true">#</a> constructor</h3>
<p>每个原型都有一个 constructor 属性指向关联的构造函数。</p>
<p>为了验证这一点，我们可以尝试：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Person <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>所以再更新下关系图：</p>
<p><img src="@source/../docs/.vuepress/public/01.WEB/JavaScript/函数原型3.png" alt="函数原型"></p>
<p>综上我们已经得出：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>__proto__ <span class="token operator">==</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// true</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">==</span> Person<span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token comment">// 顺便学习一个ES5的方法,可以获得对象的原型</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">getPrototypeOf</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span> <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>了解了构造函数、实例原型、和实例之间的关系，接下来我们讲讲实例和原型的关系：</p>
<p>当读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止。</p>
<p>举个例子：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Kevin'</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> person <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

person<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'Daisy'</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// Daisy</span>

<span class="token keyword">delete</span> person<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">// Kevin</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，我们给实例对象 person 添加了 name 属性，当我们打印 person.name 的时候，结果自然为 Daisy。</p>
<p>但是当我们删除了 person 的 name 属性时，读取 person.name，从 person 对象中找不到 name 属性就会从 person 的原型也就是 <code v-pre>person.__proto__</code> ，也就是 Person.prototype中查找，幸运的是我们找到了 name 属性，结果为 Kevin。</p>
<p>在前面，我们已经讲了原型也是一个对象，既然是对象，我们就可以用最原始的方式创建它，那就是：</p>
<p>var obj = new Object();
obj.name = 'Kevin'
console.log(obj.name) // Kevin
其实原型对象就是通过 Object 构造函数生成的，结合之前所讲，实例的 <code v-pre>__proto__</code> 指向构造函数的 prototype ，所以我们再更新下关系图：</p>
<p><img src="@source/../docs/.vuepress/public/01.WEB/JavaScript/函数原型4.png" alt="函数原型"></p>
<h3 id="原型链总结" tabindex="-1"><a class="header-anchor" href="#原型链总结" aria-hidden="true">#</a> 原型链总结</h3>
<p>那 Object.prototype 的原型呢？</p>
<p>null，我们可以打印：</p>
<p><code v-pre>console.log(Object.prototype.__proto__ === null)</code> // true
然而 null 究竟代表了什么呢？</p>
<p>引用阮一峰老师的 《undefined与null的区别》 就是：</p>
<p>null 表示“没有对象”，即该处不应该有值。</p>
<p>所以 <code v-pre>Object.prototype.__proto__</code> 的值为 null 跟 Object.prototype 没有原型，其实表达了一个意思。</p>
<p>所以查找属性的时候查到 Object.prototype 就可以停止查找了。</p>
<p>最后一张关系图也可以更新为：</p>
<p><img src="@source/../docs/.vuepress/public/01.WEB/JavaScript/函数原型5.png" alt="函数原型"></p>
<h2 id="三、基于原型链的继承" tabindex="-1"><a class="header-anchor" href="#三、基于原型链的继承" aria-hidden="true">#</a> 三、基于原型链的继承</h2>
<h3 id="继承属性" tabindex="-1"><a class="header-anchor" href="#继承属性" aria-hidden="true">#</a> 继承属性</h3>
<p>JavaScript 对象是动态的属性（指其自有属性）“包”。JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。</p>
<p>前面我们讲到“每一个对象都会从原型‘继承’属性”，实际上，继承是一个十分具有迷惑性的说法，引用《你不知道的JavaScript》中的话，就是：
继承意味着复制操作，然而 JavaScript 默认并不会复制对象的属性，相反，JavaScript 只是在两个对象之间创建一个关联，这样，一个对象就可以通过委托访问另一个对象的属性和函数，所以与其叫继承，委托的说法反而更准确些。</p>
<h3 id="继承属性-1" tabindex="-1"><a class="header-anchor" href="#继承属性-1" aria-hidden="true">#</a> 继承属性</h3>
<p>原型的好处在于一些重复的方法可以重用。</p>
<p>存在大量方法引用相同的函数时，可以降低了内存使用率。
但是，手动绑定每个对象创建的 <strong>proto</strong> 仍旧非常不方便。这时，我们就可以使用构造函数，它会自动为每个构造的对象设置 [[Prototype]]。构造函数是使用 <code v-pre>new</code> 调用的函数。</p>
<p>构造函数可以重写为类，类是构造函数的语法糖。</p>
<h4 id="构建更长的继承链" tabindex="-1"><a class="header-anchor" href="#构建更长的继承链" aria-hidden="true">#</a> 构建更长的继承链</h4>
<p>要构建更长的原型链，我们可用通过 <code v-pre>Object.setPrototypeOf()</code> 函数设置 Constructor.prototype 的 [[Prototype]]。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Base</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">Derived</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 将 `Derived.prototype` 的 `[[Prototype]]`</span>
<span class="token comment">// 设置为 `Base.prototype`</span>
Object<span class="token punctuation">.</span><span class="token function">setPrototypeOf</span><span class="token punctuation">(</span><span class="token class-name">Derived</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> <span class="token class-name">Base</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Derived</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在类的术语中，这等同于使用 extends 语法。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">Derived</span> <span class="token keyword">extends</span> <span class="token class-name">Base</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Derived</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// obj ---> Derived.prototype ---> Base.prototype ---> Object.prototype ---> null</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、检查原型-更深入的研究" tabindex="-1"><a class="header-anchor" href="#四、检查原型-更深入的研究" aria-hidden="true">#</a> 四、检查原型：更深入的研究</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">doSomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doSomething<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 你如何声明函数并不重要；</span>
<span class="token comment">// JavaScript 中的函数总有一个默认的</span>
<span class="token comment">// 原型属性——有一个例外：</span>
<span class="token comment">// 箭头函数没有默认的原型属性：</span>
<span class="token keyword">const</span> <span class="token function-variable function">doSomethingFromArrowFunction</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>doSomethingFromArrowFunction<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上所示，doSomething() 有一个默认的 prototype 属性（正如控制台所示）。运行这段代码后，控制台应该显示一个类似于下面的对象。</p>
<p><img src="@source/../docs/.vuepress/public/01.WEB/JavaScript/函数原型6.png" alt="函数原型"></p>
<h2 id="五、性能" tabindex="-1"><a class="header-anchor" href="#五、性能" aria-hidden="true">#</a> 五、性能</h2>
<p>原型链上较深层的属性的查找时间可能会对性能产生负面影响，这在性能至关重要的代码中可能会非常明显。此外，尝试访问不存在的属性始终会遍历整个原型链。</p>
<p>此外，在遍历对象的属性时，原型链中的每个可枚举属性都将被枚举。要检查对象是否具有在其自身上定义的属性，而不是在其原型链上的某个地方，则有必要使用 <code v-pre>hasOwnProperty</code> 或 <code v-pre>Object.hasOwn</code> 方法。除 <code v-pre>[[Prototype]]</code> 为 null 的对象外，所有对象都从 <code v-pre>Object.prototype</code> 继承 hasOwnProperty——除非它已经在原型链的更深处被覆盖。</p>
<h2 id="六、总结" tabindex="-1"><a class="header-anchor" href="#六、总结" aria-hidden="true">#</a> 六、总结</h2>
<ul>
<li>
<p>JavaScript 中的所有构造函数都有一个被称为 <code v-pre>prototype</code> 的特殊属性，它与 <code v-pre>new</code> 运算符一起使用。对原型对象的引用被复制到新实例的内部属性 [[Prototype]] 中。</p>
</li>
<li>
<p>读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，如果还查不到，就去找原型的原型，一直找到最顶层为止，这个查询的链条就是原型链。</p>
</li>
<li>
<p>原型中的属性关联，就是原型链继承。</p>
</li>
<li>
<p>prototype 上定义的所有属性实际上都由所有实例共享，并且甚至可以更改 prototype 的部分内容，使得更改被应用到所有现有的实例中。</p>
</li>
<li>
<p>要注意代码中原型链的长度，在必要时可以将其分解，以避免潜在的性能问题。</p>
</li>
<li>
<p>构造函数可以重写为类，类 <code v-pre>Class</code> 是构造函数的语法糖。 <code v-pre>extends</code> 语法相当于 <code v-pre>Object.setPrototypeOf()</code>的语法糖。</p>
</li>
</ul>
</div></template>


