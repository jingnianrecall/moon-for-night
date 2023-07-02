<template><div><blockquote></blockquote>
<h1 id="_04-虚拟-dom-实现原理" tabindex="-1"><a class="header-anchor" href="#_04-虚拟-dom-实现原理" aria-hidden="true">#</a> 04.虚拟 DOM 实现原理</h1>
<h2 id="一、基本概念" tabindex="-1"><a class="header-anchor" href="#一、基本概念" aria-hidden="true">#</a> 一、基本概念</h2>
<p>虚拟 DOM (Virtual DOM，简称 VDOM) 是一种编程概念，意为将目标所需的 UI 通过数据结构“虚拟”地表示出来，保存在内存中，然后将真实的 DOM 与之保持同步。这个概念是由 React 率先开拓，随后被许多不同的框架采用，也包括 Vue。</p>
<p>与其说虚拟 DOM 是一种具体的技术，不如说是一种模式，所以并没有一个标准的实现。我们可以用一个简单的例子来说明：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> vnode <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'div'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">'hello'</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token comment">/* 更多 vnode */</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里所说的 vnode 即一个纯 JavaScript 的对象 (一个“虚拟节点”)，它代表着一个 <code v-pre>&lt;div&gt;</code> 元素。它包含我们创建实际元素所需的所有信息。它还包含更多的子节点，这使它成为虚拟 DOM 树的根节点。</p>
<p>一个运行时渲染器将会遍历整个虚拟 DOM 树，并据此构建真实的 DOM 树。这个过程被称为挂载 (mount)。</p>
<p>如果我们有两份虚拟 DOM 树，渲染器将会有比较地遍历它们，找出它们之间的区别，并应用这其中的变化到真实的 DOM 上。这个过程被称为更新 (<code v-pre>patch</code>)，又被称为 “比对” (<code v-pre>diffing</code>) 或“协调”(<code v-pre>reconciliation</code>)。</p>
<h3 id="真实-dom-及其解析流程" tabindex="-1"><a class="header-anchor" href="#真实-dom-及其解析流程" aria-hidden="true">#</a> 真实 DOM 及其解析流程</h3>
<p>浏览器渲染引擎工作流程大致分为5步：创建 DOM 树 —&gt; 创建 Style Rules -&gt; 构建 Render 树 —&gt; 布局 Layout -—&gt; 绘制 Painting。</p>
<p>传统的开发模式，原生 JS 或 JQ 操作 DOM 时，浏览器会从构建 DOM 树开始从头到尾执行一遍流程，浪费性能。</p>
<h2 id="二、渲染管线" tabindex="-1"><a class="header-anchor" href="#二、渲染管线" aria-hidden="true">#</a> 二、渲染管线</h2>
<h3 id="vue-组件挂载时会发生如下几件事" tabindex="-1"><a class="header-anchor" href="#vue-组件挂载时会发生如下几件事" aria-hidden="true">#</a> Vue 组件挂载时会发生如下几件事：</h3>
<p><strong>编译</strong>：Vue 模板被编译为<strong>渲染函数</strong>：即用来返回虚拟 DOM 树的函数。这一步骤可以通过构建步骤提前完成，也可以通过使用运行时编译器即时完成。</p>
<p><strong>挂载</strong>：运行时渲染器调用渲染函数，遍历返回的虚拟 DOM 树，并基于它创建实际的 DOM 节点。这一步会作为响应式副作用执行，因此它会追踪其中所用到的所有响应式依赖。</p>
<p><strong>更新</strong>：当一个依赖发生变化后，副作用会重新运行，这时候会创建一个更新后的虚拟 DOM 树。运行时渲染器遍历这棵新树，将它与旧树进行比较，然后将必要的更新应用到真实 DOM 上去。</p>
<p><img src="@source/../docs/.vuepress/public/01.WEB/Vue/vdom.png" alt="Virtual DOM"></p>
<h2 id="三、diff-算法" tabindex="-1"><a class="header-anchor" href="#三、diff-算法" aria-hidden="true">#</a> 三、DIFF 算法</h2>
<p>vue中 diff 执行的时刻是组件内响应式数据变更触发实例执行其更新函数时，更新函数会再次执行render函数获得最新的虚拟DOM，然后执行patch函数，并传入新旧两次虚拟DOM，通过比对两者找到变化的地方，最后将其转化为对应的DOM操作。</p>
<h3 id="patch过程是一个递归过程-遵循深度优先、同层比较的策略-以vue3的patch为例" tabindex="-1"><a class="header-anchor" href="#patch过程是一个递归过程-遵循深度优先、同层比较的策略-以vue3的patch为例" aria-hidden="true">#</a> patch过程是一个递归过程，遵循深度优先、同层比较的策略；以vue3的patch为例：</h3>
<p>首先判断两个节点是否为相同同类节点，不同则删除重新创建
如果双方都是文本则更新文本内容
如果双方都是元素节点则递归更新子元素，同时更新元素属性
更新子节点时又分了几种情况：</p>
<p>新的子节点是文本，老的子节点是数组则清空，并设置文本；
新的子节点是文本，老的子节点是文本则直接更新文本；
新的子节点是数组，老的子节点是文本则清空文本，并创建新子节点数组中的子元素；
新的子节点是数组，老的子节点也是数组，那么比较两组子节点，更新细节blabla</p>
<p>vue3中引入的更新策略：编译期优化patchFlags、block等</p>
<h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结" aria-hidden="true">#</a> 五、总结</h2>
<ul>
<li>虚拟 DOM 就是虚拟的 DOM 对象，它本身就是一个 JavaScript 对象，只不过它是通过不同的属性去描述一个视图结构。</li>
</ul>
<h3 id="虚拟-dom-实现原理" tabindex="-1"><a class="header-anchor" href="#虚拟-dom-实现原理" aria-hidden="true">#</a> 虚拟 DOM 实现原理</h3>
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
<h3 id="虚拟-dom-生成过程" tabindex="-1"><a class="header-anchor" href="#虚拟-dom-生成过程" aria-hidden="true">#</a> 虚拟 DOM 生成过程</h3>
<ul>
<li>
<p>Vue 模板（<code v-pre>Template</code>）会被编译器 <code v-pre>compiler</code> 编译为渲染函数，然后调用渲染函数 render 函数返回虚拟 DOM 树对象，并基于虚拟 DOM 创建真实DOM。</p>
</li>
<li>
<p>当一个依赖发生变化后，渲染函数会重新运行，这时候会创建一个更新后的虚拟 DOM 树。运行时渲染器遍历这棵新树，将它与旧树进行比较（diff），然后将必要的更新应用（patch）到真实 DOM 上去。</p>
</li>
</ul>
<h3 id="虚拟-dom-优缺点" tabindex="-1"><a class="header-anchor" href="#虚拟-dom-优缺点" aria-hidden="true">#</a> 虚拟 DOM 优缺点</h3>
<ul>
<li>将真实元素节点抽象成 VNode，有效减少直接操作 dom 次数，避免性能浪费，提高开发效率。</li>
<li>方便实现跨平台，同一 VNode 节点可以渲染成不同平台上的对应的内容，比如：渲染在浏览器是 dom 元素节点，渲染在 Native( iOS、Android) 变为对应的控件、可以实现 SSR 、渲染到 WebGL 中等等</li>
</ul>
</div></template>


