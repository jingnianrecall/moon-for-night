<template><div><h2 id="一、基础" tabindex="-1"><a class="header-anchor" href="#一、基础" aria-hidden="true">#</a> 一、基础</h2>
<h4 id="javascript包含几种数据类型-分别是-判断数据类型的方法" tabindex="-1"><a class="header-anchor" href="#javascript包含几种数据类型-分别是-判断数据类型的方法" aria-hidden="true">#</a> JavaScript包含几种数据类型，分别是？判断数据类型的方法？</h4>
<p>undefined、null、布尔值（Boolean）、字符串（String）、数值（Number）、大整数（BigInt）、对象（Object）、Symbol。</p>
<h4 id="javascript常用的数组方法" tabindex="-1"><a class="header-anchor" href="#javascript常用的数组方法" aria-hidden="true">#</a> JavaScript常用的数组方法</h4>
<h2 id="二、进阶" tabindex="-1"><a class="header-anchor" href="#二、进阶" aria-hidden="true">#</a> 二、进阶</h2>
<h4 id="javascript运行机制" tabindex="-1"><a class="header-anchor" href="#javascript运行机制" aria-hidden="true">#</a> JavaScript运行机制</h4>
<p>答：js是一门单线程语言，js的任务也要一个一个顺序执行。但如果一个任务耗时过长，那么后一个任务也必须等着。因此将任务分为同步任务和异步任务两类，比如我们浏览网页的时候，网页中包含的高清图片加载很慢。为了防止阻塞，加载图片等占用资源大耗时久的任务就需要用异步任务。先执行同步任务，把页面骨架和页面元素渲染出来，再执行异步任务，获取静态资源和后台数据，异步任务都要等待同步任务执行完成后执行。</p>
<p>同步任务和异步任务执行的过程，</p>
<p>这个过程会不断重复，就是事件循环 Event Loop。</p>
<p>比如setTimeout这个函数，是经过指定时间后，把要执行的任务（如一个函数）加入到Event Queue(事件队列)中，又因为是单线程任务要一个一个执行，如果前面的任务需要的时间太久，那么只能等着，导致真正的延迟时间就可能会大于预设时间。</p>
<h4 id="作用域和闭包" tabindex="-1"><a class="header-anchor" href="#作用域和闭包" aria-hidden="true">#</a> 作用域和闭包</h4>
<h4 id="原型和原型链" tabindex="-1"><a class="header-anchor" href="#原型和原型链" aria-hidden="true">#</a> 原型和原型链</h4>
<p>js的每个构造函数都有一个prototype属性，这个属性指向构造函数的实例原型，比如说构造函数生成一个实例，实例会有一个__proto__属性指向构造函数的prototype，原型也有__proto__属性指向上级的原型，一直到Object.prototype, Object.prototype的__proto__属性是null。</p>
<p>读取实例的属性时，如果找不到，就会查找与对象关联的原型中的属性，依次向上查找直到最顶层，查找的这个链路就是原型链。</p>
<p>JavaScript 只是在两个对象之间创建一个关联，每一个对象都会从原型‘继承’属性”，这就是原型链继承，缺点就是所有实例会共享原型链上的属性</p>
<h4 id="继承" tabindex="-1"><a class="header-anchor" href="#继承" aria-hidden="true">#</a> 继承</h4>
<p>继承包括原型链继承，借用构造函数(经典继承)，组合继承等</p>
<p>原型链继承就是JavaScript 对象有一个指向一个原型对象的链。当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾，“每一个对象都会从原型‘继承’属性”。</p>
<p>问题就是引用类型的属性被所有实例共享</p>
<p>借用构造函数(经典继承)</p>
<p>组合继承</p>
<h4 id="设计模式" tabindex="-1"><a class="header-anchor" href="#设计模式" aria-hidden="true">#</a> 设计模式</h4>
</div></template>


