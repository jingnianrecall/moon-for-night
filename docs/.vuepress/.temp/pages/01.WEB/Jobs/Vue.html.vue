<template><div><h2 id="一、vue-基础" tabindex="-1"><a class="header-anchor" href="#一、vue-基础" aria-hidden="true">#</a> 一、Vue 基础</h2>
<h3 id="_1、对-spa-单页面的理解-它的优缺点分别是什么" tabindex="-1"><a class="header-anchor" href="#_1、对-spa-单页面的理解-它的优缺点分别是什么" aria-hidden="true">#</a> 1、对 SPA 单页面的理解，它的优缺点分别是什么？</h3>
<p>SPA 仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。</p>
<h4 id="优点" tabindex="-1"><a class="header-anchor" href="#优点" aria-hidden="true">#</a> 优点：</h4>
<p>用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；
基于上面一点，SPA 相对对服务器压力小；
前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；</p>
<h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点：</h4>
<p>初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；
前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；
SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。</p>
<h3 id="_2、什么是-mvvm" tabindex="-1"><a class="header-anchor" href="#_2、什么是-mvvm" aria-hidden="true">#</a> 2、什么是 MVVM？</h3>
<p>Model–View–ViewModel 是一个软件架构设计模式，Model层主要是管理数据，ViewModel 层负责视图数据的一些逻辑处理，该层向上与视图层进行双向数据绑定，向下与 Model 层通过接口请求进行数据交互。</p>
<h4 id="_1、view-层" tabindex="-1"><a class="header-anchor" href="#_1、view-层" aria-hidden="true">#</a> 1、View 层</h4>
<p>View 是视图层，也就是用户界面。前端主要由 HTML 和 CSS 来构建 。</p>
<h4 id="_2、model-层" tabindex="-1"><a class="header-anchor" href="#_2、model-层" aria-hidden="true">#</a> 2、Model 层</h4>
<p>Model 是指数据模型，泛指后端进行的各种业务逻辑处理和数据操控，对于前端来说就是后端提供的 api 接口。</p>
<h4 id="_3、viewmodel-层" tabindex="-1"><a class="header-anchor" href="#_3、viewmodel-层" aria-hidden="true">#</a> 3、ViewModel 层</h4>
<p>ViewModel 是由前端开发人员组织生成和维护的视图数据层。在这一层，前端开发者对从后端获取的 Model 数据进行转换处理，做二次封装，以生成符合 View 层使用预期的视图数据模型。需要注意的是 ViewModel 所封装出来的数据模型包括视图的状态和行为两部分，而 Model 层的数据模型是只包含状态的，比如页面的这一块展示什么，而页面加载进来时发生什么，点击这一块发生什么，这一块滚动时发生什么这些都属于视图行为（交互），视图状态和行为都封装在了 ViewModel 里。这样的封装使得 ViewModel 可以完整地去描述 View 层。
MVVM 框架实现了双向绑定，这样 ViewModel 的内容会实时展现在 View 层，前端开发者再也不必低效又麻烦地通过操纵 DOM 去更新视图，MVVM 框架已经把最脏最累的一块做好了，我们开发者只需要处理和维护 ViewModel，更新数据视图就会自动得到相应更新。这样 View 层展现的不是 Model 层的数据，而是 ViewModel 的数据，由 ViewModel 负责与 Model 层交互，这就完全解耦了 View 层和 Model 层，这个解耦是至关重要的，它是前后端分离方案实施的重要一环。</p>
<h3 id="_14、v-show-与-v-if-有什么区别" tabindex="-1"><a class="header-anchor" href="#_14、v-show-与-v-if-有什么区别" aria-hidden="true">#</a> 14、v-show 与 v-if 有什么区别？</h3>
<p><code v-pre>v-if</code> 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。</p>
<p><code v-pre>v-if</code> 也是惰性的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。</p>
<p>相比之下，<code v-pre>v-show</code> 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS display 属性会被切换。</p>
<p>总的来说，<code v-pre>v-if</code> 有更高的切换开销，而 <code v-pre>v-show</code> 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 <code v-pre>v-show</code> 较好；如果在运行时绑定条件很少改变，则 <code v-pre>v-if</code> 会更合适。</p>
<h3 id="_2、v-if和v-for哪个优先级更高" tabindex="-1"><a class="header-anchor" href="#_2、v-if和v-for哪个优先级更高" aria-hidden="true">#</a> 2、v-if和v-for哪个优先级更高？</h3>
<p>在 <code v-pre>Vue2</code> 中当它们处于同一节点，<code v-pre>v-for</code> 的优先级比 <code v-pre>v-if</code> 更高，<code v-pre>v-for</code> 每次循环都要进行 <code v-pre>v-if</code> 判断，浪费性能。</p>
<p>在 <code v-pre>Vue3</code> 中当它们同时存在于一个节点上时，<code v-pre>v-if</code> 比 <code v-pre>v-for</code> 的优先级更高。 <code v-pre>v-if</code> 进行判断时调用的变量还不存在，会导致异常。</p>
<h4 id="场景" tabindex="-1"><a class="header-anchor" href="#场景" aria-hidden="true">#</a> 场景</h4>
<p>官方文档不推荐<code v-pre>v-if</code> 和 <code v-pre>v-for</code>写在同一级元素上，如果需要同时使用，应该在外包装一层 <code v-pre>&lt;div&gt;</code> , 代码可读性也更好。</p>
<h3 id="_2、vue中如何扩展一个组件" tabindex="-1"><a class="header-anchor" href="#_2、vue中如何扩展一个组件" aria-hidden="true">#</a> 2、Vue中如何扩展一个组件</h3>
<p>常见的组件扩展方法有：mixins，slots，extends等</p>
<h4 id="混入mixins是分发-vue-组件中可复用功能的非常灵活的方式。" tabindex="-1"><a class="header-anchor" href="#混入mixins是分发-vue-组件中可复用功能的非常灵活的方式。" aria-hidden="true">#</a> 混入mixins是分发 Vue 组件中可复用功能的非常灵活的方式。</h4>
<p>混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 复用代码：它是一个配置对象，选项和组件里面一样</span>
<span class="token keyword">const</span> mymixin <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">dosomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 全局混入：将混入对象传入</span>
Vue<span class="token punctuation">.</span><span class="token function">mixin</span><span class="token punctuation">(</span>mymixin<span class="token punctuation">)</span>

<span class="token comment">// 局部混入：做数组项设置到mixins选项，仅作用于当前组件</span>
<span class="token keyword">const</span> Comp <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>mymixin<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="插槽主要用于vue组件中的内容分发-也可以用于组件扩展。" tabindex="-1"><a class="header-anchor" href="#插槽主要用于vue组件中的内容分发-也可以用于组件扩展。" aria-hidden="true">#</a> 插槽主要用于vue组件中的内容分发，也可以用于组件扩展。</h4>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- 子组件Child --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slot</span><span class="token punctuation">></span></span>这个内容会被父组件传递的内容替换<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slot</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!-- 父组件Parent --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
   <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Child</span><span class="token punctuation">></span></span>天命神授<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Child</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果要精确分发到不同位置可以使用具名插槽，如果要使用子组件中的数据可以使用作用域插槽。</p>
<h4 id="组件选项中还有一个不太常用的选项extends-也可以起到扩展组件的目的" tabindex="-1"><a class="header-anchor" href="#组件选项中还有一个不太常用的选项extends-也可以起到扩展组件的目的" aria-hidden="true">#</a> 组件选项中还有一个不太常用的选项extends，也可以起到扩展组件的目的</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 扩展对象</span>
<span class="token keyword">const</span> myextends <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">dosomething</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// 组件扩展：做数组项设置到extends选项，仅作用于当前组件</span>
<span class="token comment">// 跟混入的不同是它只能扩展单个对象</span>
<span class="token comment">// 另外如果和混入发生冲突，该选项优先级较高，优先起作用</span>
<span class="token keyword">const</span> Comp <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token keyword">extends</span><span class="token operator">:</span> myextends
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="组合式-api-composition-api" tabindex="-1"><a class="header-anchor" href="#组合式-api-composition-api" aria-hidden="true">#</a> 组合式 API (Composition API)</h4>
<p>混入的数据和方法不能明确判断来源且可能和当前组件内变量产生命名冲突，vue3中引入的composition api，可以很好解决这些问题，利用独立出来的响应式模块可以很方便的编写独立逻辑并提供响应式的数据，然后在setup选项中组合使用，增强代码的可读性和维护性。例如：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 复用逻辑1</span>
<span class="token keyword">function</span> <span class="token function">useXX</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 复用逻辑2</span>
<span class="token keyword">function</span> <span class="token function">useYY</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 逻辑组合</span>
<span class="token keyword">const</span> Comp <span class="token operator">=</span> <span class="token punctuation">{</span>
   <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span>xx<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useXX</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span>yy<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useYY</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>xx<span class="token punctuation">,</span> yy<span class="token punctuation">}</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3、子组件可以直接改变父组件的数据么-说明原因" tabindex="-1"><a class="header-anchor" href="#_3、子组件可以直接改变父组件的数据么-说明原因" aria-hidden="true">#</a> 3、子组件可以直接改变父组件的数据么，说明原因</h3>
<h4 id="单项数据流原则" tabindex="-1"><a class="header-anchor" href="#单项数据流原则" aria-hidden="true">#</a> 单项数据流原则</h4>
<p>所有的 props 都遵循着单向绑定原则，props 因父组件的更新而变化，反之则不行。这避免了子组件意外修改父组件的状态的情况，不然应用的数据流将很容易变得混乱而难以理解。</p>
<p>另外，每次父组件更新后，所有的子组件中的 props 都会被更新到最新值，这意味着你不应该在子组件中去更改一个 prop。若你这么做了，Vue 会在控制台上向你抛出警告：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'foo'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">created</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// ❌ 警告！prop 是只读的！</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>foo <span class="token operator">=</span> <span class="token string">'bar'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>导致你想要更改一个 prop 的需求通常来源于以下两种场景：</p>
<p>1、prop 被用于传入初始值；而子组件想在之后将其作为一个局部数据属性。在这种情况下，最好是新定义一个局部数据属性，从 props 上获取初始值即可：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'initialCounter'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
      <span class="token comment">// 计数器只是将 this.initialCounter 作为初始值</span>
      <span class="token comment">// 像下面这样做就使 prop 和后续更新无关了</span>
      <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>initialCounter
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、需要对传入的 prop 值做进一步的转换。在这种情况中，最好是基于该 prop 值定义一个计算属性：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'size'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token literal-property property">computed</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">// 该 prop 变更时计算属性也会自动更新</span>
    <span class="token function">normalizedSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>size<span class="token punctuation">.</span><span class="token function">trim</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、如果确实想要改变父组件属性，应该 <code v-pre>emit</code> 一个事件通知父组件去做这个变更。
注意虽然我们不能直接修改一个传入的对象或者数组类型的prop，但是我们还是能够直接改内嵌的对象或属性。</p>
<h3 id="_18、组件中-data-为什么是一个函数" tabindex="-1"><a class="header-anchor" href="#_18、组件中-data-为什么是一个函数" aria-hidden="true">#</a> 18、组件中 data 为什么是一个函数？</h3>
<p>因为组件是用来<strong>复用</strong>的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，类似于给每个组件实例创建一个私有的数据空间，组件实例之间的 data 属性值不会互相影响。</p>
<p>而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。</p>
<h3 id="_15、class-与-style-如何动态绑定" tabindex="-1"><a class="header-anchor" href="#_15、class-与-style-如何动态绑定" aria-hidden="true">#</a> 15、Class 与 Style 如何动态绑定？</h3>
<p>可以通过对象语法和数组语法进行动态绑定</p>
<h4 id="绑定对象​" tabindex="-1"><a class="header-anchor" href="#绑定对象​" aria-hidden="true">#</a> 绑定对象​</h4>
<p>我们可以给 :class (v-bind:class 的缩写) 传递一个对象来动态切换 class：</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ active: isActive }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="我们可以给-class-绑定一个数组来渲染多个-css-class" tabindex="-1"><a class="header-anchor" href="#我们可以给-class-绑定一个数组来渲染多个-css-class" aria-hidden="true">#</a> 我们可以给 :class 绑定一个数组来渲染多个 CSS class</h4>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">activeClass</span><span class="token operator">:</span> <span class="token string">'active'</span><span class="token punctuation">,</span>
    <span class="token literal-property property">errorClass</span><span class="token operator">:</span> <span class="token string">'text-danger'</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">:class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>[activeClass, errorClass]<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_6、vue-框架怎么实现对象和数组的监听" tabindex="-1"><a class="header-anchor" href="#_6、vue-框架怎么实现对象和数组的监听" aria-hidden="true">#</a> 6、Vue 框架怎么实现对象和数组的监听？</h3>
<p>Vue 框架是通过遍历数组 和递归遍历对象，从而达到利用 <code v-pre>Object.defineProperty()</code> 对对象和数组（部分方法的操作）进行监听。</p>
<p>数组考虑性能原因没有用 <code v-pre>Object.defineProperty()</code> 对数组的每一项进行拦截，而是选择对 7 种数组（push, shift, pop, splice, unshift,sort, reverse）方法进行重写(AOP 切片思想)。</p>
<p>所以在 Vue 中修改数组的索引和长度是无法监控到的。需要通过以上 7 种变异方法修改数组才会触发数组对应的 watcher 进行更新。</p>
<h3 id="_7、vue-怎么用-vm-set-解决对象新增属性不能响应的问题" tabindex="-1"><a class="header-anchor" href="#_7、vue-怎么用-vm-set-解决对象新增属性不能响应的问题" aria-hidden="true">#</a> 7、Vue 怎么用 vm.$set() 解决对象新增属性不能响应的问题 ？</h3>
<p>受现代 JavaScript 的限制 ，Vue 无法检测到对象属性的添加或删除。
由于 Vue 会在初始化实例时对属性执行 getter/setter 转化，所以属性必须在 data 对象上定义才能让 Vue 将它转换为响应式的。
Vue 提供了 Vue.set (object, propertyName, value) 来实现为对象添加响应式属性。</p>
<h4 id="vm-set-的实现原理是" tabindex="-1"><a class="header-anchor" href="#vm-set-的实现原理是" aria-hidden="true">#</a> vm.$set 的实现原理是：</h4>
<p>如果目标是数组，直接使用数组的 <code v-pre>splice</code> 方法触发相应式；</p>
<p>如果目标是对象，会先判读属性是否存在、对象是否是响应式，最终如果要对属性进行响应式处理，则是通过调用 <code v-pre>defineReactive</code> 方法进行响应式处理（ <code v-pre>defineReactive</code> 方法就是 Vue 在初始化对象时，给对象属性采用 <code v-pre>Object.defineProperty</code> 动态添加 <code v-pre>getter</code> 和 <code v-pre>setter</code> 的功能所调用的方法）。</p>
<h3 id="_8、vue-生命周期" tabindex="-1"><a class="header-anchor" href="#_8、vue-生命周期" aria-hidden="true">#</a> 8、Vue 生命周期</h3>
<p>1、每个 Vue 组件实例被创建后都会经过一系列初始化步骤，比如，它需要数据观测，模板编译，挂载实例到dom上，以及数据变化时更新dom。这个过程中会运行叫做生命周期钩子的函数，在开发过程中就可以根据自己的需要在特定阶段添加自己的代码逻辑。</p>
<p>2、Vue生命周期总共可以分为8个阶段：创建前后, 载入前后, 更新前后, 销毁前后，以及一些特殊场景的生命周期。</p>
<p>3、vue3中新增了三个用于调试和服务端渲染场景。</p>
<ul>
<li><code v-pre>beforeCreate</code>：主要是进行一些初始化任务，引入插件</li>
<li><code v-pre>created</code>：组件初始化完毕，可以访问各种数据，获取接口数据等</li>
<li><code v-pre>mounted</code>：dom已创建，可用于获取访问数据和dom元素；访问子组件等。</li>
<li><code v-pre>beforeUpdate</code>：此时view层还未更新，可用于获取更新前各种状态</li>
<li><code v-pre>updated</code>：完成view层的更新，更新后，所有状态已是最新</li>
<li><code v-pre>beforeDestory/beforeunmount</code>：实例被销毁前调用，可用于一些定时器或订阅的取消</li>
<li><code v-pre>destoryed/unmounted</code>：销毁一个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器</li>
</ul>
<h3 id="_10、在哪个生命周期内调用异步请求" tabindex="-1"><a class="header-anchor" href="#_10、在哪个生命周期内调用异步请求" aria-hidden="true">#</a> 10、在哪个生命周期内调用异步请求？</h3>
<p>可以在钩子函数 <code v-pre>created</code>、<code v-pre>beforeMount</code>、<code v-pre>mounted</code> 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。
建议在 <code v-pre>created</code> 钩子函数中调用异步请求，因为在 <code v-pre>created</code> 钩子函数中调用异步请求能更快获取到服务端数据，减少页面 loading 时间。</p>
<h3 id="_12、vue-组件间通信有哪几种方式" tabindex="-1"><a class="header-anchor" href="#_12、vue-组件间通信有哪几种方式" aria-hidden="true">#</a> 12、Vue 组件间通信有哪几种方式？</h3>
<p>主要有三类通信：父子组件通信、兄弟组件通信、隔代组件通信</p>
<ul>
<li>
<p>1、父子组件通信可以使用 props/$emit，也可以使用 $parent 获取父组件实例、ref获取组件实例</p>
</li>
<li>
<p>2、兄弟组件通信可以使用 Eventbus，通过一个空的 Vue 实例作为事件中心，用它来触发事件和监听事件，也可以使用 $parent 、vueX</p>
</li>
<li>
<p>3、跨层级通信可以使用 Eventbus，也可以使用 vuex/provide+inject</p>
</li>
</ul>
<h3 id="_3、vue要做权限管理该怎么做-控制到按钮级别的权限怎么做" tabindex="-1"><a class="header-anchor" href="#_3、vue要做权限管理该怎么做-控制到按钮级别的权限怎么做" aria-hidden="true">#</a> 3、Vue要做权限管理该怎么做？控制到按钮级别的权限怎么做？</h3>
<p>1、权限管理一般需求是 <code v-pre>页面</code> 权限和 <code v-pre>按钮</code> 权限的管理</p>
<p>2、具体实现的时候分后端和前端两种方案：</p>
<h4 id="页面权限" tabindex="-1"><a class="header-anchor" href="#页面权限" aria-hidden="true">#</a> 页面权限</h4>
<p>前端方案会把所有路由信息在前端配置，通过路由守卫要求用户登录，用户登录后根据角色过滤出路由表。比如我会配置一个 <code v-pre>asyncRoutes</code> 数组，需要认证的页面在其路由的 <code v-pre>meta</code> 中添加一个 <code v-pre>roles</code> 字段，等获取用户角色之后取两者的交集，若结果不为空则说明可以访问。此过滤过程结束，剩下的路由就是该用户能访问的页面，最后通过 <code v-pre>router.addRoutes(accessRoutes)</code> 方式动态添加路由即可。</p>
<p>后端方案会把所有页面路由信息存在数据库中，用户登录的时候根据其角色查询得到其能访问的所有页面路由信息返回给前端，前端再通过 <code v-pre>addRoutes</code> 动态添加路由信息</p>
<h4 id="按钮权限" tabindex="-1"><a class="header-anchor" href="#按钮权限" aria-hidden="true">#</a> 按钮权限</h4>
<p>1、通过一个统一的权限判断方法 <code v-pre>hasPermission</code> ，从全局 <code v-pre>store</code> 中获取当前用户的权限码列表，然后判断其中是否存在当前按钮需要的权限码，如果有多个权限码，只要满足其中一个就可以。
2、可以实现一个指令，例如 <code v-pre>v-permission</code> ，将按钮要求角色通过值传给 <code v-pre>v-permission</code> 指令，在指令的 <code v-pre>moutned</code> 钩子中可以判断当前用户角色和按钮是否存在交集，有则保留按钮，无则移除按钮。</p>
<h3 id="_3、虚拟-dom" tabindex="-1"><a class="header-anchor" href="#_3、虚拟-dom" aria-hidden="true">#</a> 3、虚拟 DOM</h3>
<ul>
<li>虚拟 DOM 就是虚拟的 DOM 对象，它本身就是一个 JavaScript 对象，只不过它是通过不同的属性去描述一个视图结构。</li>
</ul>
<h4 id="虚拟-dom-实现原理" tabindex="-1"><a class="header-anchor" href="#虚拟-dom-实现原理" aria-hidden="true">#</a> 虚拟 DOM 实现原理</h4>
<ul>
<li>
<p>用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象。</p>
</li>
<li>
<p>diff 算法 — 比较两棵虚拟 DOM 树的差异。</p>
</li>
<li>
<p>patch 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。</p>
</li>
</ul>
<h4 id="虚拟-dom-生成过程" tabindex="-1"><a class="header-anchor" href="#虚拟-dom-生成过程" aria-hidden="true">#</a> 虚拟 DOM 生成过程</h4>
<ul>
<li>
<p>Vue 模板（<code v-pre>Template</code>）会被编译器 <code v-pre>compiler</code> 编译为渲染函数，然后调用渲染函数 render 函数返回虚拟 DOM 树对象，并基于虚拟 DOM 创建真实DOM。</p>
</li>
<li>
<p>当一个依赖发生变化后，渲染函数会重新运行，这时候会创建一个更新后的虚拟 DOM 树。运行时渲染器遍历这棵新树，将它与旧树进行比较（diff），然后将必要的更新应用（patch）到真实 DOM 上去。</p>
</li>
</ul>
<h4 id="虚拟-dom-优缺点" tabindex="-1"><a class="header-anchor" href="#虚拟-dom-优缺点" aria-hidden="true">#</a> 虚拟 DOM 优缺点</h4>
<ul>
<li>将真实元素节点抽象成 VNode，有效减少直接操作 dom 次数，避免性能浪费，提高开发效率。</li>
<li>方便实现跨平台，同一 VNode 节点可以渲染成不同平台上的对应的内容，比如：渲染在浏览器是 dom 元素节点，渲染在 Native( iOS、Android) 变为对应的控件、可以实现 SSR 、渲染到 WebGL 中等等</li>
</ul>
<h3 id="_3、你了解diff算法吗" tabindex="-1"><a class="header-anchor" href="#_3、你了解diff算法吗" aria-hidden="true">#</a> 3、你了解diff算法吗？</h3>
<h3 id="_3、说一说你对vue响应式理解" tabindex="-1"><a class="header-anchor" href="#_3、说一说你对vue响应式理解" aria-hidden="true">#</a> 3、说一说你对vue响应式理解？</h3>
<p>所谓数据响应式就是能够使数据变化可以被检测并对这种变化做出响应的机制。</p>
<p>MVVM框架中要解决的一个核心问题是连接数据层和视图层，通过数据驱动应用，数据变化，视图更新，要做到这点的就需要对数据做响应式处理，这样一旦数据发生变化就可以立即做出更新处理。</p>
<h4 id="好处" tabindex="-1"><a class="header-anchor" href="#好处" aria-hidden="true">#</a> 好处</h4>
<p>以vue为例说明，通过数据响应式加上虚拟 DOM 和 patch 算法，开发人员只需要操作数据，关心业务，完全不用接触繁琐的DOM操作，从而大大提升开发效率，降低开发难度。</p>
<h4 id="vue的响应式是怎么实现的-有哪些优缺点" tabindex="-1"><a class="header-anchor" href="#vue的响应式是怎么实现的-有哪些优缺点" aria-hidden="true">#</a> vue的响应式是怎么实现的？有哪些优缺点？</h4>
<p><code v-pre>vue2</code> 中的数据响应式会根据数据类型来做不同处理，如果是对象则采用 <code v-pre>Object.defineProperty()</code> 的方式定义数据拦截，当数据被访问或发生变化时，我们感知并作出响应。
如果是数组则通过覆盖数组对象原型的7个变更方法，使这些方法可以额外的做更新通知，从而作出响应。
这种机制很好的解决了数据响应化的问题，但在实际使用中也存在一些缺点：比如初始化时的递归遍历会造成性能损失；新增或删除属性时需要用户使用 <code v-pre>Vue.set/delete</code> 这样特殊的api才能生效；对于 es6 中新产生的 Map、Set 这些数据结构不支持等问题。</p>
<h4 id="vue3" tabindex="-1"><a class="header-anchor" href="#vue3" aria-hidden="true">#</a> vue3</h4>
<p>为了解决这些问题，<code v-pre>vue3</code> 重新编写了这一部分的实现：利用 ES6 的 <code v-pre>Proxy</code>代理要响应化的数据，它有很多好处，编程体验是一致的，不需要使用特殊api，初始化性能和内存消耗都得到了大幅改善；另外由于响应化的实现代码抽取为独立的 <code v-pre>reactivity</code> 包，使得我们可以更灵活的使用它，第三方的扩展开发起来更加灵活了。</p>
<h3 id="_4、v-model-的原理" tabindex="-1"><a class="header-anchor" href="#_4、v-model-的原理" aria-hidden="true">#</a> 4、v-model 的原理？</h3>
<p><code v-pre>v-model</code> 可以在组件上使用以实现双向绑定。</p>
<p><code v-pre>v-model</code> 本质是语法糖，默认情况下相当于 <code v-pre>:value</code> 和 <code v-pre>@input</code> ，在内部为不同的输入元素使用不同的属性并抛出不同的事件：</p>
<ul>
<li>text 和 textarea 元素使用 value 属性和 input 事件；</li>
<li>checkbox 和 radio 使用 checked 属性和 change 事件；</li>
<li>select 字段将 value 作为 prop 并将 change 作为事件。</li>
</ul>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>searchText<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>

<span class="token comment">&lt;!-- 上面的代码其实等价于下面这段： --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
  <span class="token attr-name">:value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>searchText<span class="token punctuation">"</span></span>
  <span class="token attr-name">@input</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>searchText = $event.target.value<span class="token punctuation">"</span></span>
<span class="token punctuation">/></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="v-model-修饰符" tabindex="-1"><a class="header-anchor" href="#v-model-修饰符" aria-hidden="true">#</a> v-model 修饰符</h4>
<p><code v-pre>v-model</code> 有一些内置的修饰符，例如 <code v-pre>.trim</code>，<code v-pre>.number</code> 和 <code v-pre>.lazy</code>。
<code v-pre>v-model</code> 支持自定义的修饰符。</p>
<h3 id="_5、vue-是如何实现数据双向绑定的" tabindex="-1"><a class="header-anchor" href="#_5、vue-是如何实现数据双向绑定的" aria-hidden="true">#</a> 5、Vue 是如何实现数据双向绑定的？</h3>
<p>Vue 主要通过以下 4 个步骤来实现数据双向绑定的：</p>
<p>1、实现一个监听器 <code v-pre>Observer</code>：对数据对象进行遍历，包括子属性对象的属性，利用 <code v-pre>Object.defineProperty()</code> 对属性都加上 <code v-pre>setter</code> 和 <code v-pre>getter</code>。这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。</p>
<p>2、实现一个解析器 <code v-pre>Compile</code>：解析 Vue 模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。</p>
<p>3、实现一个订阅者 <code v-pre>Watcher</code>：Watcher 订阅者是 <code v-pre>Observer</code> 和 <code v-pre>Compile</code> 之间通信的桥梁 ，主要的任务是订阅 <code v-pre>Observer</code> 中的属性值变化的消息，当收到属性值变化的消息时，触发解析器 Compile 中对应的更新函数。</p>
<p>4、实现一个订阅器 <code v-pre>Dep</code>：订阅器采用 发布-订阅 设计模式，用来收集订阅者 <code v-pre>Watcher</code>，对监听器 <code v-pre>Observer</code> 和 订阅者 <code v-pre>Watcher</code> 进行统一管理。</p>
<h3 id="_16、谈谈你对-keep-alive-的了解" tabindex="-1"><a class="header-anchor" href="#_16、谈谈你对-keep-alive-的了解" aria-hidden="true">#</a> 16、谈谈你对 keep-alive 的了解？</h3>
<p>keep-alive 主要用于用于缓存组件，可以使被包含的组件保留状态，一般结合路由和动态组件一起使用，避免重新渲染。</p>
<p>提供 <code v-pre>include</code> 和 <code v-pre>exclude</code> 属性，include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存，其中 exclude 的优先级比 include 高。</p>
<p>对应两个钩子函数 <code v-pre>activated</code> 和 <code v-pre>deactivated</code>, 当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。</p>
<h3 id="_17、从0到1自己构架一个vue项目-说说有哪些步骤、哪些重要插件、目录结构你会怎么组织" tabindex="-1"><a class="header-anchor" href="#_17、从0到1自己构架一个vue项目-说说有哪些步骤、哪些重要插件、目录结构你会怎么组织" aria-hidden="true">#</a> 17、从0到1自己构架一个vue项目，说说有哪些步骤、哪些重要插件、目录结构你会怎么组织</h3>
<ul>
<li>
<p>1、步骤大致有 项目构建、引入必要插件、代码规范、提交规范、常用库和组件</p>
</li>
<li>
<p>2、目前vue3项目我会用vite或者create-vue创建项目</p>
</li>
<li>
<p>3、接下来引入必要插件：路由插件vue-router、状态管理vuex/pinia、ui库我比较喜欢element-plus和antd-vue、http工具我会选axios</p>
</li>
<li>
<p>4、其他比较常用的库有vueuse，nprogress，图标可以使用vite-svg-loader</p>
</li>
<li>
<p>5、下面是代码规范：结合prettier和eslint即可</p>
</li>
<li>
<p>6、最后是提交规范，可以使用husky，lint-staged，commitlint</p>
</li>
</ul>
<h3 id="_17、vue-中的-key-有什么作用" tabindex="-1"><a class="header-anchor" href="#_17、vue-中的-key-有什么作用" aria-hidden="true">#</a> 17、Vue 中的 key 有什么作用？</h3>
<p>key的作用主要是为了更高效的更新虚拟DOM。</p>
<p>vue 在 patch 过程中判断两个节点是否是相同节点是 key 是一个必要条件，渲染一组列表时，key往往是唯一标识，所以如果不定义key的话，vue只能认为比较的两个节点是同一个，哪怕它们实际上不是，这导致了频繁更新元素，使得整个patch过程比较低效，影响性能。</p>
<p>实际使用中在渲染一组列表时key必须设置，而且必须是唯一标识，应该避免使用数组索引作为key，这可能导致一些隐蔽的bug；vue中在使用相同标签元素过渡切换时，也会使用key属性，其目的也是为了让vue可以区分它们，否则vue只会替换其内部属性而不会触发过渡效果。</p>
<p>从源码中可以知道，vue判断两个节点是否相同时主要判断两者的key和元素类型等，因此如果不设置key，它的值就是undefined，则可能永远认为这是两个相同节点，只能去做更新操作，这造成了大量的dom更新操作，明显是不可取的。</p>
<h3 id="_18、watch-和-computed-的区别以及选择" tabindex="-1"><a class="header-anchor" href="#_18、watch-和-computed-的区别以及选择" aria-hidden="true">#</a> 18、watch 和 computed 的区别以及选择?</h3>
<h4 id="区别" tabindex="-1"><a class="header-anchor" href="#区别" aria-hidden="true">#</a> 区别</h4>
<p>计算属性可以<strong>从组件数据派生出新数据</strong>，最常见的使用方式是设置一个函数，返回计算之后的结果，<code v-pre>computed</code> 和 <code v-pre>methods</code> 的差异是它具备缓存性，如果依赖项不变时不会重新计算。
侦听器可以<strong>侦测某个响应式数据的变化</strong>，常见用法是传递一个函数，执行副作用，<code v-pre>watch</code> 没有返回值，但可以执行异步操作等复杂逻辑。</p>
<h4 id="选择" tabindex="-1"><a class="header-anchor" href="#选择" aria-hidden="true">#</a> 选择</h4>
<p>计算属性常用场景是<strong>简化行内模板中的复杂表达式</strong>，模板中出现太多逻辑会是模板变得臃肿不易维护。
侦听器常用场景是<strong>状态变化之后做一些额外的DOM操作或者异步操作</strong>。选择采用何用方案时首先看是否需要派生出新值，基本能用计算属性实现的方式<strong>首选计算属性</strong>。</p>
<h4 id="扩展" tabindex="-1"><a class="header-anchor" href="#扩展" aria-hidden="true">#</a> 扩展</h4>
<p>使用过程中有一些细节，比如计算属性也是可以传递对象，成为既可读又可写的计算属性。watch可以传递对象，设置deep、immediate等选项。</p>
<p>vue3中watch选项发生了一些变化，例如不再能侦测一个点操作符之外的字符串形式的表达式； reactivity API中新出现了watch、watchEffect可以完全替代目前的watch选项，且功能更加强大。</p>
<h3 id="_16、怎么缓存当前的组件-缓存后怎么更新" tabindex="-1"><a class="header-anchor" href="#_16、怎么缓存当前的组件-缓存后怎么更新" aria-hidden="true">#</a> 16、怎么缓存当前的组件？缓存后怎么更新？</h3>
<p>开发中缓存组件使用 <code v-pre>keep-alive</code> 组件，<code v-pre>keep-alive</code> 是 vue 内置组件，<code v-pre>keep-alive</code> 包裹动态组件 <code v-pre>component</code> 时，会缓存不活动的组件实例，而不是销毁它们，这样在组件切换过程中将状态保留在内存中，防止重复渲染DOM。</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>keep<span class="token operator">-</span>alive<span class="token operator">></span>
  <span class="token operator">&lt;</span>component <span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">"view"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>component<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>keep<span class="token operator">-</span>alive<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="缓存指定-排除、结合router" tabindex="-1"><a class="header-anchor" href="#缓存指定-排除、结合router" aria-hidden="true">#</a> 缓存指定/排除、结合router</h4>
<p>结合属性include和exclude可以明确指定缓存哪些组件或排除缓存指定组件。vue3中结合vue-router时变化较大，之前是keep-alive包裹router-view，现在需要反过来用router-view包裹keep-alive：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>router<span class="token operator">-</span>view v<span class="token operator">-</span>slot<span class="token operator">=</span><span class="token string">"{ Component }"</span><span class="token operator">></span>
  <span class="token operator">&lt;</span>keep<span class="token operator">-</span>alive<span class="token operator">></span>
    <span class="token operator">&lt;</span>component <span class="token operator">:</span>is<span class="token operator">=</span><span class="token string">"Component"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>component<span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>keep<span class="token operator">-</span>alive<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>router<span class="token operator">-</span>view<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="组件缓存后更新" tabindex="-1"><a class="header-anchor" href="#组件缓存后更新" aria-hidden="true">#</a> 组件缓存后更新</h4>
<ul>
<li>beforeRouteEnter：在有vue-router的项目，每次进入路由的时候，都会执行 <code v-pre>beforeRouteEnter</code></li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">beforeRouteEnter</span><span class="token punctuation">(</span><span class="token parameter">to<span class="token punctuation">,</span> from<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">next</span><span class="token punctuation">(</span><span class="token parameter">vm</span><span class="token operator">=></span><span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span>
    <span class="token comment">// 每次进入路由执行</span>
    vm<span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// 获取数据</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>actived：在keep-alive缓存的组件被激活的时候，都会执行 <code v-pre>actived</code> 钩子</li>
</ul>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token function">activated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getData</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 获取数据</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h4>
<p>keep-alive是一个通用组件，它内部定义了一个map，缓存创建过的组件实例，它返回的渲染函数内部会查找内嵌的component组件对应组件的vnode，如果该组件在map中存在就直接返回它。由于component的is属性是个响应式数据，因此只要它变化，keep-alive的render函数就会重新执行。</p>
<h3 id="_18、nexttick的使用和原理" tabindex="-1"><a class="header-anchor" href="#_18、nexttick的使用和原理" aria-hidden="true">#</a> 18、nextTick的使用和原理？</h3>
<p>nextTick是等待下一次 DOM 更新刷新的工具方法。</p>
<p>Vue有个异步更新策略，如果数据变化，Vue不会立刻更新DOM，而是开启一个队列，把组件更新函数保存在队列中，在同一事件循环中发生的所有数据变更会异步的批量更新。这一策略导致我们对数据的修改不会立刻体现在DOM上，此时如果想要获取更新后的DOM状态，就需要使用nextTick。</p>
<p>在Vue内部，nextTick之所以能够让我们看到DOM更新后的结果，是因为我们传入的callback会被添加到队列刷新函数(flushSchedulerQueue)的后面，这样等队列内部的更新函数都执行完毕，所有DOM操作也就结束了，callback自然能够获取到最新的DOM值。</p>
<h4 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景" aria-hidden="true">#</a> 应用场景</h4>
<p>做动态表单，有时候需要获取 DOM 更新后的内容。
响应式数据变化后获取DOM更新后的状态，比如希望获取列表更新后的高度。</p>
<h3 id="_18、说一下-vue-子组件和父组件创建和挂载顺序" tabindex="-1"><a class="header-anchor" href="#_18、说一下-vue-子组件和父组件创建和挂载顺序" aria-hidden="true">#</a> 18、说一下 Vue 子组件和父组件创建和挂载顺序</h3>
<p>创建过程自上而下，挂载过程自下而上；即：</p>
<ul>
<li>parent created</li>
<li>child created</li>
<li>child mounted</li>
<li>parent mounted</li>
</ul>
<p>之所以会这样是因为Vue创建过程是一个递归过程，先创建父组件，有子组件就会创建子组件，因此创建时先有父组件再有子组件；子组件首次创建时会添加mounted 钩子到队列，等到 patch 结束再执行它们，可见子组件的 mounted 钩子是先进入到队列中的，因此等到 patch 结束执行这些钩子时也先执行。</p>
<h3 id="_18、vue实例挂载的过程中发生了什么" tabindex="-1"><a class="header-anchor" href="#_18、vue实例挂载的过程中发生了什么" aria-hidden="true">#</a> 18、Vue实例挂载的过程中发生了什么?</h3>
<h3 id="_18、说说从-template-到-render-处理过程-vue编译器工作原理" tabindex="-1"><a class="header-anchor" href="#_18、说说从-template-到-render-处理过程-vue编译器工作原理" aria-hidden="true">#</a> 18、说说从 template 到 render 处理过程（vue编译器工作原理）</h3>
<p>Vue 中有个独特的编译器模块，称为 “compiler” ，它的主要作用是将用户编写的 template 编译为 js 中可执行的 render 函数。
之所以需要这个编译过程是为了便于前端程序员能高效的编写视图模板。相比而言，我们还是更愿意用HTML来编写视图，直观且高效。手写render函数不仅效率底下，而且失去了编译期的优化能力。
在Vue中编译器会先对template进行解析，这一步称为parse，结束之后会得到一个JS对象，我们成为抽象语法树AST，然后是对AST进行深加工的转换过程，这一步成为transform，最后将前面得到的AST生成为JS代码，也就是render函数。</p>
<h3 id="_19、vue-项目可以进行哪些优化" tabindex="-1"><a class="header-anchor" href="#_19、vue-项目可以进行哪些优化" aria-hidden="true">#</a> 19、Vue 项目可以进行哪些优化？</h3>
<h3 id="_19、实际工作中-你总结的vue最佳实践有哪些" tabindex="-1"><a class="header-anchor" href="#_19、实际工作中-你总结的vue最佳实践有哪些" aria-hidden="true">#</a> 19、实际工作中，你总结的vue最佳实践有哪些？</h3>
<h2 id="二、vuex" tabindex="-1"><a class="header-anchor" href="#二、vuex" aria-hidden="true">#</a> 二、VueX</h2>
<h3 id="_1、说一说你对vuex理解" tabindex="-1"><a class="header-anchor" href="#_1、说一说你对vuex理解" aria-hidden="true">#</a> 1、说一说你对vuex理解？</h3>
<p>Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。</p>
<p>我们期待以一种简单的“单向数据流”的方式管理应用，即状态 -&gt; 视图 -&gt; 操作单向循环的方式。</p>
<p>当遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏：</p>
<ul>
<li>多个视图依赖于同一状态。</li>
<li>来自不同视图的行为需要变更同一状态。</li>
</ul>
<p>对于问题一，传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。
对于问题二，我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。</p>
<p>所以需要把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！</p>
<h4 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h4>
<p>1、Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
2、改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样可以轻松地跟踪状态的变化，也可以避免无意中从不同的组件中直接修改 store 导致的代码难以维护和调试的问题。</p>
<p>主要包括以下几个模块：</p>
<ul>
<li>
<p>State：基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。定义了应用状态的数据结构，可以在这里设置默认的初始状态。</p>
</li>
<li>
<p>Getter：如果有多个组件需要用到同一属性，复制这个函数会比较麻烦，代码不易维护，可以使用 Getter 修饰。</p>
</li>
<li>
<p>Mutation：是唯一更改 store 中状态的方法，使用 commit 提交 通知 vuex修改，且必须是<strong>同步</strong>函数（不能使用异步函数）。</p>
</li>
<li>
<p>Action：用于提交 mutation，而不是直接变更状态，可以包含任意<strong>异步</strong>操作。</p>
</li>
<li>
<p>Module：当应用变得非常复杂时，store 对象就有可能变得相当臃肿。为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter。</p>
</li>
<li>
<p>配置vuex，读取state的值，甚至修饰读(Getter)，然后你会修改里面的值了(Mutation)，假如你有异步操作并且需要修改state，那你就要使用Action</p>
</li>
</ul>
<h3 id="_2、action-和-mutation-的区别是什么-为什么要区分它们" tabindex="-1"><a class="header-anchor" href="#_2、action-和-mutation-的区别是什么-为什么要区分它们" aria-hidden="true">#</a> 2、action 和 mutation 的区别是什么？为什么要区分它们？</h3>
<ul>
<li>
<p>Mutation：是唯一更改 store 中状态的方法，使用 commit 提交 通知 vuex修改，且必须是<strong>同步</strong>函数（不能使用异步函数）。</p>
</li>
<li>
<p>Action：用于提交 mutation，而不是直接变更状态，可以包含任意<strong>异步</strong>操作。</p>
</li>
</ul>
<h3 id="_3、pinia-对比-vuex-3-x-4-x" tabindex="-1"><a class="header-anchor" href="#_3、pinia-对比-vuex-3-x-4-x" aria-hidden="true">#</a> 3、Pinia 对比 Vuex 3.x/4.x</h3>
<p>Vuex 3.x 只适配 Vue 2，而 Vuex 4.x 是适配 Vue 3 的。</p>
<p>Pinia API 与 Vuex(&lt;=4) 也有很多不同，即：</p>
<ul>
<li>mutation 已被弃用。它们经常被认为是极其冗余的。它们初衷是带来 devtools 的集成方案，但这已不再是一个问题了。</li>
<li>无需要创建自定义的复杂包装器来支持 TypeScript，一切都可标注类型，API 的设计方式是尽可能地利用 TS 类型推理。</li>
<li>无过多的魔法字符串注入，只需要导入函数并调用它们，然后享受自动补全的乐趣就好。</li>
<li>无需要动态添加 Store，它们默认都是动态的，甚至你可能都不会注意到这点。注意，你仍然可以在任何时候手动使用一个 Store 来注册它，但因为它是自动的，所以你不需要担心它。</li>
<li>不再有嵌套结构的模块。你仍然可以通过导入和使用另一个 Store 来隐含地嵌套 stores 空间。虽然 Pinia 从设计上提供的是一个扁平的结构，但仍然能够在 Store 之间进行交叉组合。你甚至可以让 Stores 有循环依赖关系。</li>
<li>不再有可命名的模块。考虑到 Store 的扁平架构，Store 的命名取决于它们的定义方式，你甚至可以说所有 Store 都应该命名。</li>
</ul>
<h2 id="三、vue-router" tabindex="-1"><a class="header-anchor" href="#三、vue-router" aria-hidden="true">#</a> 三、Vue Router</h2>
<h3 id="_1、vue-router-路由模式有几种" tabindex="-1"><a class="header-anchor" href="#_1、vue-router-路由模式有几种" aria-hidden="true">#</a> 1、vue-router 路由模式有几种？</h3>
<p>vue-router 有 3 种路由模式：hash、history、abstract(NodeJS环境)</p>
<ul>
<li>
<p>hash: 它在内部传递的实际 URL 之前使用了一个哈希字符（#）。由于这部分 URL 从未被发送到服务器，所以它不需要在服务器层面上进行任何特殊处理。(SEO 不友好)</p>
</li>
<li>
<p>history : 使用历史模式时，URL 会看起来很 &quot;正常&quot;，例如 https://example.com/user/id。</p>
</li>
</ul>
<p>但由于我们的应用是一个单页的客户端应用，如果没有适当的服务器配置，用户在浏览器中直接访问 https://example.com/user/id，就会得到一个 404 错误。
要解决这个问题，需要在服务器上添加一个简单的<strong>回退路由</strong>。如果 URL 不匹配任何静态资源，它应提供与你的应用程序中的 index.html 相同的页面。</p>
<ul>
<li>abstract : 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.</li>
</ul>
<h3 id="_2、vue-router-中常用的-hash-和-history-路由模式实现原理" tabindex="-1"><a class="header-anchor" href="#_2、vue-router-中常用的-hash-和-history-路由模式实现原理" aria-hidden="true">#</a> 2、vue-router 中常用的 hash 和 history 路由模式实现原理</h3>
<h4 id="hash-模式的实现原理" tabindex="-1"><a class="header-anchor" href="#hash-模式的实现原理" aria-hidden="true">#</a> hash 模式的实现原理</h4>
<p>早期的前端路由的实现就是基于 location.hash 来实现的。其实现原理很简单，location.hash 的值就是 URL 中 # 后面的内容。比如下面这个网站，它的 location.hash 的值为 '#search'：
<code v-pre>https://www.word.com#search</code></p>
<p>hash  路由模式的实现主要是基于下面几个特性：</p>
<ul>
<li>URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送。</li>
<li>hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制 hash 的切换。</li>
<li>可以通过 a 标签，并设置 href 属性，当用户点击这个标签后，URL 的 hash 值会发生改变，或者使用  JavaScript 来对 loaction.hash 进行赋值，改变 URL 的 hash 值。</li>
<li>我们可以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转（渲染）。</li>
</ul>
<h4 id="history-模式的实现原理" tabindex="-1"><a class="header-anchor" href="#history-模式的实现原理" aria-hidden="true">#</a> history 模式的实现原理</h4>
<p>HTML5 提供了 History API 来实现 URL 的变化。其中做最主要的 API 有以下两个：<code v-pre>history.pushState()</code> 和 <code v-pre>history.repalceState()</code>。这两个 API 可以在不进行刷新的情况下，操作浏览器的历史记录。</p>
<p>前者是新增一个历史记录，后者是直接替换当前的历史记录，如下所示：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">pushState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
window<span class="token punctuation">.</span>history<span class="token punctuation">.</span><span class="token function">replaceState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> path<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>history 路由模式的实现主要基于存在下面几个特性：</p>
<ul>
<li>pushState 和 repalceState 两个 API 来操作实现 URL 的变化 ；</li>
<li>我们可以使用 popstate 事件来监听 url 的变化，从而对页面进行跳转（渲染）；</li>
<li>history.pushState() 或 history.replaceState() 不会触发 popstate 事件，这时我们需要手动触发页面跳转（渲染）。</li>
</ul>
<h3 id="_3、怎么定义动态路由匹配-怎么获取传过来的动态参数" tabindex="-1"><a class="header-anchor" href="#_3、怎么定义动态路由匹配-怎么获取传过来的动态参数" aria-hidden="true">#</a> 3、怎么定义动态路由匹配？怎么获取传过来的动态参数？</h3>
<p>很多时候，我们需要将给定匹配模式的路由映射到同一个组件，这种情况就需要定义动态路由。</p>
<p>例如，我们可能有一个 User 组件，它应该对所有用户进行渲染，但用户 ID 不同。在 Vue Router 中，我们可以在路径中使用一个动态字段来实现，例如：{ path: '/users/:id', component: User }，其中:id就是路径参数</p>
<p>路径参数 用冒号 <code v-pre>:</code> 表示。当一个路由被匹配时，它的 <code v-pre>params</code> 的值将在每个组件中以 <code v-pre>this.$route.params</code> 的形式暴露出来。
参数还可以有多个，例如<code v-pre>/users/:username/posts/:postId</code>；除了 <code v-pre>$route.params</code> 之外，<code v-pre>$route</code> 对象还公开了其他有用的信息，如 <code v-pre>$route.query</code>、<code v-pre>$route.hash</code> 等。</p>
<h3 id="_4、如果让你从零开始写一个vue路由-说说你的思路" tabindex="-1"><a class="header-anchor" href="#_4、如果让你从零开始写一个vue路由-说说你的思路" aria-hidden="true">#</a> 4、如果让你从零开始写一个vue路由，说说你的思路</h3>
<p>一个 SPA 应用的路由需要解决的问题是页面跳转内容改变同时不刷新，同时路由还需要以插件形式存在，所以：</p>
<p>首先我会定义一个 createRouter 函数，返回路由器实例，实例内部做几件事：</p>
<ul>
<li>保存用户传入的配置项</li>
<li>监听 <code v-pre>hash</code> 或者 <code v-pre>popstate</code> 事件</li>
<li>回调里根据 <code v-pre>path</code> 匹配对应路由</li>
</ul>
<p>将router定义成一个Vue插件，即实现install方法，内部做两件事：</p>
<ul>
<li>实现两个全局组件：<code v-pre>router-link</code> 和 <code v-pre>router-view</code> ，分别实现页面跳转和内容显示</li>
<li>定义两个全局变量：<code v-pre>$route</code> 和 <code v-pre>$router</code> ，组件内可以访问当前路由和路由器实例</li>
</ul>
<h2 id="四、vue2-和-vue3-的区别" tabindex="-1"><a class="header-anchor" href="#四、vue2-和-vue3-的区别" aria-hidden="true">#</a> 四、Vue2 和 Vue3 的区别</h2>
</div></template>


