<template><div><blockquote></blockquote>
<h1 id="class-类的基本语法" tabindex="-1"><a class="header-anchor" href="#class-类的基本语法" aria-hidden="true">#</a> Class 类的基本语法</h1>
<h2 id="一、类的由来" tabindex="-1"><a class="header-anchor" href="#一、类的由来" aria-hidden="true">#</a> 一、类的由来</h2>
<p>JavaScript 语言中，生成实例对象的传统方法是通过构造函数。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Point</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Point</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">toString</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token string">'('</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token string">', '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token string">')'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Point</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6 提供了更接近传统语言（Java、C#）的写法，引入了 <code v-pre>Class（类）</code>这个概念，作为对象的模板。通过<code v-pre>class</code>关键字，可以定义类。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 上面得方法用class类改写</span>
<span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token comment">// 构造方法</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">=</span> x<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">=</span> y<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token comment">// 类的方法都定义在prototype原型对象上</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'('</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>x <span class="token operator">+</span> <span class="token string">', '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>y <span class="token operator">+</span> <span class="token string">')'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6 的<code v-pre>class</code>可以看作只是一个语法糖，它的绝大部分功能，ES5 都可以做到，新的<code v-pre>class</code>写法只是让对象原型的写法更加清晰、更像面向对象编程的语法而已。</p>
<h2 id="二、基本使用" tabindex="-1"><a class="header-anchor" href="#二、基本使用" aria-hidden="true">#</a> 二、基本使用</h2>
<h3 id="constructor-方法" tabindex="-1"><a class="header-anchor" href="#constructor-方法" aria-hidden="true">#</a> constructor 方法</h3>
<p>constructor()方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor()方法，如果没有显式定义，一个空的constructor()方法会被默认添加。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。</p>
<h3 id="类的实例" tabindex="-1"><a class="header-anchor" href="#类的实例" aria-hidden="true">#</a> 类的实例</h3>
<p>使用new命令生成类的实例，类的属性和方法，除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。</p>
<p>与 ES5 一样，类的所有实例共享一个原型对象。</p>
<h3 id="实例属性的新写法" tabindex="-1"><a class="header-anchor" href="#实例属性的新写法" aria-hidden="true">#</a> 实例属性的新写法</h3>
<p>ES2022 为类的实例属性，又规定了一种新写法。实例属性现在除了可以定义在constructor()方法里面的this上面，也可以定义在类内部的最顶层。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 原来的写法</span>
<span class="token keyword">class</span> <span class="token class-name">IncreasingCounter</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Getting the current value!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_count<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面示例中，实例属性_count定义在constructor()方法里面的this上面。</p>
<p>现在的新写法是，这个属性也可以定义在类的最顶层，其他都不变。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">IncreasingCounter</span> <span class="token punctuation">{</span>
  _count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Getting the current value!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>_count<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注：新写法定义的属性是实例对象自身的属性，而不是定义在实例对象的原型上面。</p>
<h3 id="取值函数-getter-和存值函数-setter" tabindex="-1"><a class="header-anchor" href="#取值函数-getter-和存值函数-setter" aria-hidden="true">#</a> 取值函数（getter）和存值函数（setter）</h3>
<p>与 ES5 一样，在“类”的内部可以使用get和set关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。</p>
<h3 id="表达式定义" tabindex="-1"><a class="header-anchor" href="#表达式定义" aria-hidden="true">#</a> 表达式定义</h3>
<ul>
<li>类的属性名，可以采用表达式。</li>
<li>与函数一样，类也可以使用表达式的形式定义。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> methodName <span class="token operator">=</span> <span class="token string">'getArea'</span><span class="token punctuation">;</span>
<span class="token comment">// 类 表达式形式</span>
<span class="token keyword">const</span> MyClass <span class="token operator">=</span> <span class="token keyword">class</span> <span class="token class-name">Me</span> <span class="token punctuation">{</span>
  <span class="token function">getClassName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> Me<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token comment">// 类属性名 表达式形式</span>
  <span class="token punctuation">[</span>methodName<span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ...</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="静态方法" tabindex="-1"><a class="header-anchor" href="#静态方法" aria-hidden="true">#</a> 静态方法</h3>
<p>类相当于实例的原型，所有在类中定义的方法，都会被实例继承。如果在一个方法前，加上static关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。</p>
<p>父类的静态方法，可以被子类继承。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> <span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">'hello'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Bar</span> <span class="token keyword">extends</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token comment">// 父类Foo有一个静态方法，子类Bar可以调用这个方法。</span>
Bar<span class="token punctuation">.</span><span class="token function">classMethod</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 'hello'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>静态方法也是可以从super对象上调用的。</p>
<h3 id="静态属性" tabindex="-1"><a class="header-anchor" href="#静态属性" aria-hidden="true">#</a> 静态属性</h3>
<p>静态属性指的是 Class 本身的属性，即Class.propName，而不是定义在实例对象（this）上的属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 老写法</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
Foo<span class="token punctuation">.</span>prop <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

<span class="token comment">// 新写法</span>
<span class="token keyword">class</span> <span class="token class-name">Foo</span> <span class="token punctuation">{</span>
  <span class="token keyword">static</span> prop <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的写法为Foo类定义了一个静态属性prop。</p>
<h3 id="私有方法和私有属性" tabindex="-1"><a class="header-anchor" href="#私有方法和私有属性" aria-hidden="true">#</a> 私有方法和私有属性</h3>
<h4 id="早期解决方案" tabindex="-1"><a class="header-anchor" href="#早期解决方案" aria-hidden="true">#</a> 早期解决方案</h4>
<p>私有方法和私有属性，是只能在类的内部访问的方法和属性，外部不能访问。这是常见需求，有利于代码的封装，但早期的 ES6 不提供，只能通过变通方法模拟实现。</p>
<ul>
<li>一种做法是在命名上加以区别，如 <code v-pre>_方法名</code>。但是，这种命名是不保险的，在类的外部，还是可以调用到这个方法。</li>
<li>利用Symbol值的唯一性，将私有方法的名字命名为一个Symbol值。</li>
</ul>
<h4 id="私有属性正式写法" tabindex="-1"><a class="header-anchor" href="#私有属性正式写法" aria-hidden="true">#</a> 私有属性正式写法</h4>
<p>ES2022正式为class添加了私有属性，方法是在属性名之前使用#表示。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">IncreasingCounter</span> <span class="token punctuation">{</span>
  #count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
  <span class="token keyword">get</span> <span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Getting the current value!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>#count<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>#count<span class="token operator">++</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，#count就是私有属性，只能在类的内部使用（this.#count）。如果在类的外部使用，就会报错。</p>
<h4 id="in-运算符" tabindex="-1"><a class="header-anchor" href="#in-运算符" aria-hidden="true">#</a> in 运算符</h4>
<p>直接访问某个类不存在的私有属性会报错，但是访问不存在的公开属性不会报错。这个特性可以用来判断，某个对象是否为类的实例。
ES2022 改进了in运算符，使它也可以用来判断私有属性。返回一个布尔值。</p>
<h2 id="三、class类-的注意点" tabindex="-1"><a class="header-anchor" href="#三、class类-的注意点" aria-hidden="true">#</a> 三、Class类 的注意点</h2>
<ul>
<li>默认使用严格模式</li>
<li>不存在变量提升</li>
<li>类的方法内部如果含有this，它默认指向类的实例。</li>
<li>默认使用严格模式</li>
</ul>
<h2 id="四、class-的继承" tabindex="-1"><a class="header-anchor" href="#四、class-的继承" aria-hidden="true">#</a> 四、Class 的继承</h2>
<p>Class 可以通过 <code v-pre>extends</code> 关键字实现继承，让子类继承父类的属性和方法。<code v-pre>extends</code> 的写法比 <code v-pre>ES5</code> 的原型链继承，要清晰和方便很多。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ColorPoint</span> <span class="token keyword">extends</span> <span class="token class-name">Point</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ES6 规定，子类必须在<code v-pre>constructor()</code>方法中调用<code v-pre>super()</code>，否则就会报错。这是因为子类自己的<code v-pre>this</code>对象，必须先通过父类的构造函数完成塑造，得到与父类同样的实例属性和方法，然后再对其进行加工，添加子类自己的实例属性和方法。如果不调用<code v-pre>super()</code>方法，子类就得不到自己的<code v-pre>this</code>对象。</p>
<h3 id="为什么子类的构造函数-一定要调用super" tabindex="-1"><a class="header-anchor" href="#为什么子类的构造函数-一定要调用super" aria-hidden="true">#</a> 为什么子类的构造函数，一定要调用super()？</h3>
<p>因为 <code v-pre>ES6</code> 的继承机制，与 <code v-pre>ES5</code> 完全不同。ES5 的继承机制，是先创造一个独立的子类的实例对象，然后再将父类的方法添加到这个对象上面，即“实例在前，继承在后”。ES6 的继承机制，则是先将父类的属性和方法，加到一个空的对象上面，然后再将该对象作为子类的实例，即“继承在前，实例在后”。这就是为什么 ES6 的继承必须先调用<code v-pre>super()</code>方法，因为这一步会生成一个继承父类的<code v-pre>this</code>对象，没有这一步就无法继承父类。</p>
<p>注意，这意味着新建子类实例时，父类的构造函数必定会先运行一次。</p>
<h3 id="私有属性和私有方法的继承" tabindex="-1"><a class="header-anchor" href="#私有属性和私有方法的继承" aria-hidden="true">#</a> 私有属性和私有方法的继承</h3>
<p>父类所有的属性和方法，都会被子类继承（包括静态方法），除了私有的属性和方法。</p>
<p>注：如果父类定义了私有属性的读写方法，子类就可以通过这些方法，读写私有属性。</p>
<h3 id="super-关键字" tabindex="-1"><a class="header-anchor" href="#super-关键字" aria-hidden="true">#</a> super 关键字</h3>
<p>super这个关键字，既可以当作函数使用，也可以当作对象使用。在这两种情况下，它的用法完全不同。</p>
<p>第一种情况，super作为函数调用时，代表父类的构造函数。ES6 要求，子类的构造函数必须执行一次super()函数。
第二种情况，super作为对象时，在普通方法中，指向父类的原型对象；在静态方法中，指向父类。</p>
<h3 id="类的-prototype-属性和-proto-属性" tabindex="-1"><a class="header-anchor" href="#类的-prototype-属性和-proto-属性" aria-hidden="true">#</a> 类的 prototype 属性和__proto__属性</h3>
<p>ES5 实现之中，每一个对象都有__proto__属性，指向对应的构造函数的prototype属性。Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。</p>
<p>（1）子类的__proto__属性，表示构造函数的继承，总是指向父类。</p>
<p>（2）子类prototype属性的__proto__属性，表示方法的继承，总是指向父类的prototype属性。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>

<span class="token constant">B</span><span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token constant">A</span> <span class="token comment">// true</span>
<span class="token class-name">B</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">A</span><span class="token punctuation">.</span>prototype <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面代码中，子类B的__proto__属性指向父类A，子类B的prototype属性的__proto__属性指向父类A的prototype属性。</p>
<h3 id="mixin-模式的实现" tabindex="-1"><a class="header-anchor" href="#mixin-模式的实现" aria-hidden="true">#</a> Mixin 模式的实现</h3>
<p>Mixin 指的是多个对象合成一个新的对象，新对象具有各个组成成员的接口。</p>
<h2 id="五、babel-是如何编译-class-的" tabindex="-1"><a class="header-anchor" href="#五、babel-是如何编译-class-的" aria-hidden="true">#</a> 五、Babel 是如何编译 Class 的</h2>
<p>我们可以在 Babel 官网的 Try it out 页面查看 ES6 的代码编译成什么样子。</p>
<p>ES6 代码为：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Babel 编译为：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token string">"use strict"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">_classCallCheck</span><span class="token punctuation">(</span><span class="token parameter">instance<span class="token punctuation">,</span> Constructor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token punctuation">(</span>instance <span class="token keyword">instanceof</span> <span class="token class-name">Constructor</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">TypeError</span><span class="token punctuation">(</span><span class="token string">"Cannot call a class as a function"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> <span class="token function-variable function">Person</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">_classCallCheck</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> Person<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>_classCallCheck 的作用是检查 Person 是否是通过 new 的方式调用，在上面，我们也说过，类必须使用 new 调用，否则会报错。
当我们使用 var person = Person() 的形式调用的时候，this 指向 window，所以 instance instanceof Constructor 就会为 false，与 ES6 的要求一致。</p>
<h2 id="六、总结" tabindex="-1"><a class="header-anchor" href="#六、总结" aria-hidden="true">#</a> 六、总结</h2>
<ul>
<li>
<p>JavaScript 生成实例对象的传统方法是通过构造函数, ES6 的<code v-pre>class</code>只是一个语法糖，新的<code v-pre>class</code>写法只是让对象原型的写法更加清晰、更像面向对象编程的语法。</p>
</li>
<li>
<p>使用 <code v-pre>new</code> 命令生成对象实例时，自动调用<code v-pre>constructor()</code>方法，如果没有显式定义，一个空的<code v-pre>constructor()</code>方法会被默认添加。</p>
</li>
<li>
<p>类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。</p>
</li>
<li>
<p>在 <code v-pre>“类”</code> 的内部可以使用 <code v-pre>get</code> 和 <code v-pre>set</code> 关键字，对某个属性设置存值函数和取值函数，拦截该属性的存取行为。</p>
</li>
<li>
<p>使用 <code v-pre>static</code> 可以在类中定义静态方法和静态属性，使其不可在外部被调用。但是 <code v-pre>子类</code> 和 <code v-pre>super对象</code>可以调用。</p>
</li>
<li>
<p>使用 <code v-pre>#</code> 可以定义私有方法和私有属性</p>
</li>
<li>
<p>Class 作为构造函数的语法糖，同时有prototype属性和__proto__属性，因此同时存在两条继承链。</p>
</li>
</ul>
</div></template>


