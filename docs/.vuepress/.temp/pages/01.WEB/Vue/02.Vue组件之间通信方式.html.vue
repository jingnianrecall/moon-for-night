<template><div><blockquote></blockquote>
<h1 id="vue-生命周期" tabindex="-1"><a class="header-anchor" href="#vue-生命周期" aria-hidden="true">#</a> Vue 生命周期</h1>
<h2 id="一、简介" tabindex="-1"><a class="header-anchor" href="#一、简介" aria-hidden="true">#</a> 一、简介</h2>
<h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念" aria-hidden="true">#</a> 基本概念</h3>
<p>Vue 组件间通信主要指父子组件通信、隔代组件通信、兄弟组件通信这三类通信。</p>
<h3 id="组件通信图示" tabindex="-1"><a class="header-anchor" href="#组件通信图示" aria-hidden="true">#</a> 组件通信图示</h3>
<p><img src="@source/../docs/.vuepress/public/01.WEB/Vue/component.png" alt="组件通信"></p>
<h2 id="二、组件通信常用方式" tabindex="-1"><a class="header-anchor" href="#二、组件通信常用方式" aria-hidden="true">#</a> 二、组件通信常用方式</h2>
<p>1、 <code v-pre>props/$emit</code> 适用父子组件通信</p>
<p>2、 <code v-pre>Eventbus</code>（$emit/<s>$on</s>） 适用于 父子、隔代、兄弟组件通信</p>
<ul>
<li>通过一个空的 Vue 实例作为事件中），用它来触发事件和监听事件，从而实现任何组件间的通信，包括父子、隔代、兄弟组件。</li>
</ul>
<p>3、 <code v-pre>$parent</code>/<s>$children</s> 适用父子组件通信</p>
<ul>
<li><code v-pre>$parent / $children</code>：访问父 / 子实例</li>
</ul>
<p>4、 <code v-pre>$attrs</code>/<s>$listeners</s>  适用于 隔代组件通信</p>
<p>5、 <code v-pre>ref</code> 适用父子组件通信</p>
<ul>
<li><code v-pre>ref</code>：如果在普通的 DOM 元素上使用，引用指向的就是 DOM 元素；如果用在子组件上，引用就指向组件实例</li>
</ul>
<p>6、 $root</p>
<p>7、 vuex 用于 父子、隔代、兄弟组件通信</p>
<ul>
<li><code v-pre>Vuex</code> 的状态存储是响应式的。当 Vue 组件从 <code v-pre>store</code> 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。</li>
<li>改变 <code v-pre>store</code> 中的状态的唯一途径就是显式地提交  (commit) <code v-pre>mutation</code>。这样使得我们可以方便地跟踪每一个状态的变化。</li>
</ul>
<p>8、 provide / inject 适用于 隔代组件通信
祖先组件中通过 <code v-pre>provider</code> 来提供变量，然后在子孙组件中通过 <code v-pre>inject</code> 来注入变量。 <code v-pre>provide / inject</code> API 主要解决了跨级组件间的通信问题，不过它的使用场景，主要是子组件获取上级组件的状态，跨级组件间建立了一种主动提供与依赖注入的关系。</p>
<h2 id="三、归类" tabindex="-1"><a class="header-anchor" href="#三、归类" aria-hidden="true">#</a> 三、归类</h2>
<p>根据组件之间关系讨论组件通信</p>
<ul>
<li>
<p>父子组件：props/$emit/$parent/ref/$attrs</p>
</li>
<li>
<p>兄弟组件：$parent/$root/eventbus/vuex</p>
</li>
<li>
<p>跨层级关：系eventbus/vuex/provide+inject</p>
</li>
</ul>
<h2 id="五、总结" tabindex="-1"><a class="header-anchor" href="#五、总结" aria-hidden="true">#</a> 五、总结</h2>
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
<li>
<p>注意vue3中废弃的几个API</p>
</li>
</ul>
<p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fv3-migration.vuejs.org%2Fbreaking-changes%2Fchildren.html" target="_blank" rel="noopener noreferrer"><s>$children</s><ExternalLinkIcon/></a></p>
<p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fv3-migration.vuejs.org%2Fbreaking-changes%2Flisteners-removed.html" target="_blank" rel="noopener noreferrer"><s>$listeners</s><ExternalLinkIcon/></a></p>
<p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fv3-migration.vuejs.org%2Fbreaking-changes%2Fevents-api.html%23overview" target="_blank" rel="noopener noreferrer"><s>$on</s><ExternalLinkIcon/></a></p>
</div></template>


