<template><div><h2 id="一、前端性能优化" tabindex="-1"><a class="header-anchor" href="#一、前端性能优化" aria-hidden="true">#</a> 一、前端性能优化</h2>
<p>主要从资源加载问题、文件大小问题、代码逻辑问题、交互体验问题来解决</p>
<h3 id="_1、vue路由懒加载" tabindex="-1"><a class="header-anchor" href="#_1、vue路由懒加载" aria-hidden="true">#</a> 1、Vue路由懒加载</h3>
<p>当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。</p>
<p>Vue Router 支持开箱即用的动态导入，这意味着你可以用动态导入代替静态导入，最好使用动态导入</p>
<p>扩展：
// 此时import 为静态导入，静态型的 import 是初始化加载依赖项的最优选择
import UserDetails from './views/UserDetails.vue'</p>
<p>//  import() 为动态导入，按照一定的条件或者按需加载模块的时使用
const UserDetails = () =&gt; import('./views/UserDetails.vue')</p>
<h3 id="_2、组件懒加载" tabindex="-1"><a class="header-anchor" href="#_2、组件懒加载" aria-hidden="true">#</a> 2、组件懒加载</h3>
<p>1）该页面的 JS 文件体积大，导致页面打开慢，可以通过组件懒加载进行资源拆分，利用浏览器并行下载资源，提升下载速度（比如首页）
2）该组件不是一进入页面就展示，需要一定条件下才触发（比如弹框组件）
3）该组件复用性高，很多页面都有引入，利用组件懒加载抽离出该组件，一方面可以很好利用缓存，同时也可以减少页面的 JS 文件大小（比如表格组件、图形组件等）</p>
<h3 id="_3、tree-shaking" tabindex="-1"><a class="header-anchor" href="#_3、tree-shaking" aria-hidden="true">#</a> 3、Tree Shaking</h3>
<p>Tree Shaking中文含义是摇树，在webpack中指的是打包时把无用的代码摇掉，以优化打包结果。
而webpack5已经自带了这个功能了，当打包环境为production时，默认开启tree-shaking功能。
tree-shaking 原理：
依赖于ES6的模块特性，ES6模块依赖关系是确定的，和运行时的状态无关，可以进行可靠的静态分析，这就是 tree-shaking 的基础
静态分析就是不需要执行代码，就可以从字面量上对代码进行分析。ES6之前的模块化，比如 CommonJS 是动态加载，只有执行后才知道引用的什么模块，就不能通过静态分析去做优化，正是基于这个基础上，才使得 tree-shaking 成为可能</p>
<p>Tree shaking 的作用：消除无用的 JS 代码，减少代码体积</p>
<h3 id="_4、长列表虚拟滚动" tabindex="-1"><a class="header-anchor" href="#_4、长列表虚拟滚动" aria-hidden="true">#</a> 4、长列表虚拟滚动</h3>
<p>首页中不乏有需要渲染长列表的场景，当渲染条数过多时，所需要的渲染时间会很长，滚动时还会造成页面卡顿，整体体验非常不好
虚拟滚动——指的是只渲染可视区域的列表项，非可见区域的不渲染，在滚动时动态更新可视区域，该方案在优化大量数据渲染时效果是很明显的</p>
<p>虚拟滚动基本原理：
计算出 totalHeight 列表总高度，并在触发时滚动事件时根据 scrollTop 值不断更新 startIndex 以及 endIndex ，以此从列表数据 listData 中截取对应元素</p>
<h3 id="_5、图片优化、图片懒加载、字体图标" tabindex="-1"><a class="header-anchor" href="#_5、图片优化、图片懒加载、字体图标" aria-hidden="true">#</a> 5、图片优化、图片懒加载、字体图标</h3>
<h3 id="_6、js文件加载-js-会阻塞-dom-渲染" tabindex="-1"><a class="header-anchor" href="#_6、js文件加载-js-会阻塞-dom-渲染" aria-hidden="true">#</a> 6、JS文件加载，JS 会阻塞 dom 渲染</h3>
<p>async 模式下，它的加载是异步的，JS 不会阻塞 DOM 的渲染，async 加载是无顺序的
Defer有序异步</p>
<h3 id="_7-内存优化" tabindex="-1"><a class="header-anchor" href="#_7-内存优化" aria-hidden="true">#</a> 7.内存优化</h3>
<p>1、对于一些数据量较大的场景，会造成页面加载缓慢，内存占用较高
比如tree目录加载，考虑使用懒加载方式
数据懒加载、组件懒加载、虚拟滚动、数据分页等方式，来减少组件的 DOM 渲染式</p>
<p>2、页面卸载时主动移除监听事件</p>
<p>3、调试用的console.log(), 用完注释</p>
<p>JS
1、JS 执行流程
初始化内存中的堆和栈结构——》JS全局执行上下文——》全局作用域——》初始化消息循环系统（消息驱动器、消息队列）
V8将JS字符串转换成AST（抽象语法树）——》解释器
JIT编译器（JUST IN TIME）
为了更好的利用CPU资源，提升效率，混合编译执行和解释执行两种手段。</p>
<p>2、数据类型
1.Undefined 2.null 3.boolean 4.String 5.Number 6.Symbol(es6)  7.BigInt(es2020)  8.Object
（1-7）存储在栈内存（基本数据类型）
（8）存储在堆内存（引用数据类型）
扩展：
Object包括一些细分类型（Array、Function、Date、RegExp、Error 等）
Typeof都会返回‘object’,可以用Obejct.prototype.toString检测类型</p>
<p>3、判断数据类型
Typeof
Typeof null 返回 ‘object’</p>
<p>Obejct.prototype.toString
通过规范，我们至少知道了调用 Object.prototype.toString 会返回一个由 &quot;[object &quot; 和 class 和 &quot;]&quot; 组成的字符串，而 class 是要判断的对象的内部属性。</p>
<p>var number = 1;          // [object Number]
var string = '123';      // [object String]
var boolean = true;      // [object Boolean]
var und = undefined;     // [object Undefined]
var nul = null;          // [object Null]
var obj = {a: 1}         // [object Object]
var array = [1, 2, 3];   // [object Array]
var date = new Date();   // [object Date]
var error = new Error(); // [object Error]
var reg = /a/g;          // [object RegExp]
var func = function a(){}; // [object Function]</p>
<p>4、</p>
<p>ES6
1、新特性</p>
<p>1、箭头函数和普通函数的区别
语法简洁清晰，没有prototype原型，函数本身没有this
箭头函数的this继承于外层函数
不能作为构造函数使用
2、Promise VS async/await</p>
<p>1、WeakSet和WeakMap 弱引用
WeakSet只可以存储对象类型数据，并在没有其他对象对该对象进行引用时，会被垃圾回收机制自动回收（不会考虑WeakSet）
不支持被遍历
扩展：
global.gc() // 强制节点运行垃圾回收
process.memoryUsage() // Nodejs 的内存占用情况
应用场景：
存储dom节点，dom被移除时WeakSet内存储的对象会被回收，防止内存泄漏。</p>
</div></template>


