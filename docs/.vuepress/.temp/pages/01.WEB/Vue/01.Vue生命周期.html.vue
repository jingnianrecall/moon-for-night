<template><div><blockquote></blockquote>
<h1 id="vue-生命周期" tabindex="-1"><a class="header-anchor" href="#vue-生命周期" aria-hidden="true">#</a> Vue 生命周期</h1>
<h2 id="一、简介" tabindex="-1"><a class="header-anchor" href="#一、简介" aria-hidden="true">#</a> 一、简介</h2>
<h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3>
<p>每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，可以在不同阶段添加自己的代码。</p>
<p>的函数，这给了用户在不同阶段添加自己的代码的机会。</p>
<p>比如 created 钩子可以用来在一个实例被创建之后执行代码：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function-variable function">created</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// `this` 指向 vm 实例</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'a is: '</span> <span class="token operator">+</span> <span class="token keyword">this</span><span class="token punctuation">.</span>a<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// => "a is: 1"</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也有一些其它的钩子，在实例生命周期的不同阶段被调用，如 mounted、updated 和 destroyed。生命周期钩子的 this 上下文指向调用它的 Vue 实例。</p>
<h2 id="二、各个生命周期的作用" tabindex="-1"><a class="header-anchor" href="#二、各个生命周期的作用" aria-hidden="true">#</a> 二、各个生命周期的作用</h2>
<table>
<thead>
<tr>
<th style="text-align:center">生命周期(V2)</th>
<th style="text-align:center">生命周期(V3)</th>
<th style="text-align:center">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">beforeCreate</td>
<td style="text-align:center">beforeCreate</td>
<td style="text-align:center">实例初始化完成, props 解析之后、data() 和 computed 等选项处理之前立即调用。</td>
</tr>
<tr>
<td style="text-align:center">created</td>
<td style="text-align:center">created</td>
<td style="text-align:center">组件实例已经完全创建，响应式数据、计算属性、方法和侦听器设置完成，但真实 dom 还没有生成，$el 还不可用</td>
</tr>
<tr>
<td style="text-align:center">beforeMount</td>
<td style="text-align:center">beforeMount</td>
<td style="text-align:center">在挂载开始之前被调用，组件已经完成了其响应式状态的设置，但还没有创建 DOM 节点。它即将首次执行 DOM 渲染过程。</td>
</tr>
<tr>
<td style="text-align:center">mounted</td>
<td style="text-align:center">mounted</td>
<td style="text-align:center">el 被新创建的 vm.$el 替换，所有同步子组件都已经被挂载。</td>
</tr>
<tr>
<td style="text-align:center">beforeUpdate</td>
<td style="text-align:center">beforeUpdate</td>
<td style="text-align:center">组件数据更新之前调用，可以用来在 Vue 更新 DOM 之前访问 DOM 状态。</td>
</tr>
<tr>
<td style="text-align:center">updated</td>
<td style="text-align:center">updated</td>
<td style="text-align:center">在数据更改导致的虚拟 DOM 重新渲染和更新完毕之后被调用。</td>
</tr>
<tr>
<td style="text-align:center">activited</td>
<td style="text-align:center">activited</td>
<td style="text-align:center">被 keep-alive 缓存的组件激活时调用。</td>
</tr>
<tr>
<td style="text-align:center">deactivated</td>
<td style="text-align:center">deactivated</td>
<td style="text-align:center">被 keep-alive 缓存的组件失活时调用。</td>
</tr>
<tr>
<td style="text-align:center">beforeDestory</td>
<td style="text-align:center"><strong>beforeUnmount</strong></td>
<td style="text-align:center">组件销毁前调用</td>
</tr>
<tr>
<td style="text-align:center">destoryed</td>
<td style="text-align:center"><strong>unmounted</strong></td>
<td style="text-align:center">组件销毁后调用</td>
</tr>
<tr>
<td style="text-align:center">errorCaptured</td>
<td style="text-align:center">errorCaptured</td>
<td style="text-align:center">捕获一个来自子孙组件的错误时被调用</td>
</tr>
<tr>
<td style="text-align:center">-</td>
<td style="text-align:center"><strong>renderTracked</strong></td>
<td style="text-align:center">调试钩子，响应式依赖被收集时调用</td>
</tr>
<tr>
<td style="text-align:center">-</td>
<td style="text-align:center"><strong>renderTriggered</strong></td>
<td style="text-align:center">调试钩子，响应式依赖被触发时调用</td>
</tr>
<tr>
<td style="text-align:center">-</td>
<td style="text-align:center"><strong>serverPrefetch</strong></td>
<td style="text-align:center">ssr only，组件实例在服务器上被渲染前调用</td>
</tr>
</tbody>
</table>
<h2 id="三、生命周期图示-vue-2" tabindex="-1"><a class="header-anchor" href="#三、生命周期图示-vue-2" aria-hidden="true">#</a> 三、生命周期图示(Vue 2)</h2>
<p><img src="@source/../docs/.vuepress/public/01.WEB/Vue/lifecycle.png" alt="生命周期"></p>
<h2 id="四、生命周期图示-vue-3" tabindex="-1"><a class="header-anchor" href="#四、生命周期图示-vue-3" aria-hidden="true">#</a> 四、生命周期图示(Vue 3)</h2>
<p><img src="@source/../docs/.vuepress/public/01.WEB/Vue/lifecycle-vue3.png" alt="生命周期"></p>
<h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结" aria-hidden="true">#</a> 五、总结</h2>
<ul>
<li>
<p>1、每个 Vue 组件实例被创建后都会经过一系列初始化步骤，比如，它需要数据观测，模板编译，挂载实例到dom上，以及数据变化时更新dom。这个过程中会运行叫做生命周期钩子的函数，在开发过程中就可以根据自己的需要在特定阶段添加自己的代码逻辑。</p>
</li>
<li>
<p>2、Vue生命周期总共可以分为8个阶段：创建前后, 载入前后, 更新前后, 销毁前后，以及一些特殊场景的生命周期。</p>
</li>
<li>
<p>3、vue3中新增了三个用于调试和服务端渲染场景。</p>
</li>
<li>
<p>4、Vue 3 组合式 API 中的 setup() 钩子会在所有选项式 API 钩子之前调用</p>
</li>
<li>
<p>5、mounted 不会保证所有的子组件也都被挂载完成。如果你希望等到整个视图都渲染完毕再执行某些操作，可以在 mounted 内部使用 vm.$nextTick：</p>
</li>
</ul>
</div></template>


