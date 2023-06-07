<template><div><blockquote></blockquote>
<h1 id="简介" tabindex="-1"><a class="header-anchor" href="#简介" aria-hidden="true">#</a> 简介</h1>
<h2 id="一、javascript" tabindex="-1"><a class="header-anchor" href="#一、javascript" aria-hidden="true">#</a> 一、JavaScript</h2>
<h4 id="什么是-javascript" tabindex="-1"><a class="header-anchor" href="#什么是-javascript" aria-hidden="true">#</a> 什么是 JavaScript?</h4>
<p>JavaScript 是一门跨平台、面向对象的脚本语言，它能使网页可交互（例如拥有复杂的动画，可点击的按钮，通俗的菜单等）。另外还有高级的服务端 Javascript 版本，例如 Node.js，它可以让你在网页上添加更多功能，不仅仅是下载文件（例如在多台电脑之间的协同合作）。在宿主环境（例如 web 浏览器）中，JavaScript 能够通过其所连接的环境提供的编程接口进行控制。</p>
<p>JavaScript 内置了一些对象的标准库，比如数组（Array），日期（Date），数学（Math）和一套核心语句，包括运算符、流程控制符以及声明方式等。JavaScript 的核心部分可以通过添加对象来扩展语言以适应不同用途；例如：</p>
<ul>
<li>客户端的 JavaScript 通过提供对象，控制浏览器及其文档对象模型（DOM），来扩展语言核心。例如：客户端的拓展代码允许应用程序将元素放在某个 HTML 表单中，并且支持响应用户事件，比如鼠标点击、表单提交和页面导航。</li>
<li>服务端的 JavaScript 则通过提供有关在服务器上运行 JavaScript 的对象来可扩展语言核心。例如：服务端版本直接支持应用和数据库通信，提供应用不同调用间的信息连续性，或者在服务器上执行文件操作。</li>
</ul>
<p>这意味着，在浏览器中，JavaScript 可以改变网页（DOM）的外观与样式。同样地，在服务器上，Node.js 中的 JavaScript 可以对浏览器上编写的代码发出的客户端请求做出响应。</p>
<p>JavaScript（JS）是一种具有函数优先特性的轻量级、解释型或者说即时编译型的编程语言。虽然作为 Web 页面中的脚本语言被人所熟知，但是它也被用到了很多非浏览器环境中，例如 Node.js、Apache CouchDB等。</p>
<p>进一步说，JavaScript 是一种基于原型、多范式、单线程的动态语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。</p>
<p>简单来说，JavaScript可以在网页上实现复杂的功能，网页展现给你的不再是简单的静态信息，而是实时的内容更新，交互式的地图，2D/3D 动画，滚动播放的视频等等</p>
<h4 id="javascript-和-java" tabindex="-1"><a class="header-anchor" href="#javascript-和-java" aria-hidden="true">#</a> JavaScript 和 Java</h4>
<p>JavaScript 和 Java 有一些共性但是在另一些方面有着根本性区别。JavaScript 语言类似 Java 但是并没有 Java 的静态类型和强类型检查特性。JavaScript 遵循了 Java 的表达式语法，命名规范以及基础流程控制，这也是 JavaScript 从 LiveScript 更名的原因。</p>
<p>与 Java 通过声明的方式构建类的编译时系统不同，JavaScript 采用基于少量的数据类型如数字、布尔、字符串值的运行时系统。JavaScript 拥有基于原型的对象模型提供的动态继承；也就是说，独立对象的继承是可以改变的。JavaScript 支持匿名函数。函数也可以作为对象的属性被当做宽松的类型方式执行。</p>
<p>与 Java 相比，Javascript 是一门形式自由的语言。你不必声明所有的变量，类和方法。你不必关心方法是否是公有、私有或者受保护的，也不需要实现接口。无需显式指定变量、参数、方法返回值的数据类型。</p>
<p>Java 是基于类的编程语言，设计的初衷就是为了确保快速执行和类型安全。类型安全，举个例子，你不能将一个 Java 整数变量转化为一个对象引用，或者由 Java 字节码访问专有存储器。Java 基于类的模型，意味着程序包含专有的类及其方法。Java 的类继承和强类型要求紧耦合的对象层级结构。这些要求使得 Java 编程比 JavaScript 要复杂的多。</p>
<p>相比之下，JavaScript 传承了 HyperTalk 和 dBASE 语句精简、动态类型等精髓，这些脚本语言为更多开发者提供了一种语法简单、内置功能强大以及用最小需求创建对象的编程工具。</p>
<table>
<thead>
<tr>
<th>JavaScript</th>
<th>Java</th>
</tr>
</thead>
<tbody>
<tr>
<td>面向对象。不区分对象类型。通过原型机制继承，任何对象的属性和方法均可以被动态添加。</td>
<td>基于类系统。分为类和实例，通过类层级的定义实现继承。不能动态增加对象或类的属性或方法。</td>
</tr>
<tr>
<td>变量类型不需要提前声明 (动态类型)。</td>
<td>变量类型必须提前声明 (静态类型)。</td>
</tr>
<tr>
<td>不能直接自动写入硬盘。</td>
<td>可以直接自动写入硬盘。</td>
</tr>
</tbody>
</table>
<h4 id="javascript-和-ecmascript-规范" tabindex="-1"><a class="header-anchor" href="#javascript-和-ecmascript-规范" aria-hidden="true">#</a> JavaScript 和 ECMAScript 规范</h4>
<p>JavaScript 的核心语言是 ECMAScript，是一门由 ECMA TC39 委员会标准化的编程语言。“ECMAScript”是语言标准的术语，但“ECMAScript”和“JavaScript”是可以互换使用的。</p>
<p>JavaScript 的标准化组织是 ECMA ——这个欧洲信息与通信系统标准化协会提供基于 Javascript 的标准化方案（ECMA 原先是欧洲计算机制造商协会的首字母缩写）。这种标准化版本的 JavaScript 被称作 ECMAScript，在所有支持该标准的应用中以相同的方式工作。</p>
<p>ECMAScript是规范，JavaScript是ECMAScript的标准化实现。</p>
<h4 id="javascript-在页面上做了什么" tabindex="-1"><a class="header-anchor" href="#javascript-在页面上做了什么" aria-hidden="true">#</a> JavaScript 在页面上做了什么？</h4>
<p>浏览器在读取一个网页时，代码（HTML, CSS 和 JavaScript）将在一个运行环境（浏览器标签页）中得到执行。就像一间工厂，将原材料（代码）加工为一件产品（网页）。</p>
<p>在 HTML 和 CSS 集合组装成一个网页后，浏览器的 JavaScript 引擎将执行 JavaScript 代码。这保证了当 JavaScript 开始运行之前，网页的结构和样式已经就位。</p>
<p>这样很好，因为 JavaScript 最普遍的用处是通过 DOM API（见上文）动态修改 HTML 和 CSS 来更新用户界面（user interface）。如果 JavaScript 在 HTML 和 CSS 就位之前加载运行，就会引发错误。</p>
</div></template>


