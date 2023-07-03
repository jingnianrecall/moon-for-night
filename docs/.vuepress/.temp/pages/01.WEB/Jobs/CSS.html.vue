<template><div><h2 id="一、基础" tabindex="-1"><a class="header-anchor" href="#一、基础" aria-hidden="true">#</a> 一、基础</h2>
<h3 id="_1、css-选择器及其优先级" tabindex="-1"><a class="header-anchor" href="#_1、css-选择器及其优先级" aria-hidden="true">#</a> 1、CSS 选择器及其优先级</h3>
<ul>
<li>id选择器(#id)</li>
<li>元素（标签）选择器(div)</li>
<li>类选择器(class类名)</li>
<li>通配选择器(通配符)</li>
<li>属性选择器([attr])</li>
</ul>
<h4 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级" aria-hidden="true">#</a> 优先级</h4>
<p>标签选择器、伪元素选择器：1</p>
<p>类选择器、伪类选择器、属性选择器：10</p>
<p>id 选择器：100</p>
<p>内联样式：1000</p>
<h4 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h4>
<p>!important声明的样式的优先级最高；</p>
<p>如果优先级相同，则最后出现的样式生效；继承得到的样式的优先级最低；</p>
<p>通用选择器（*）、子选择器（&gt;）和相邻同胞选择器（+）并不在这四个等级中，所以它们的权值都为 0 ；</p>
<p>样式表的来源不同时，优先级顺序为：内联样式 &gt; 内部样式 &gt; 外部样式 &gt; 浏览器用户自定义样式 &gt; 浏览器默认样式。</p>
<h3 id="_2、对盒型的理解" tabindex="-1"><a class="header-anchor" href="#_2、对盒型的理解" aria-hidden="true">#</a> 2、对盒型的理解</h3>
<p>CSS3中的盒模型有以下两种：标准盒子模型、IE盒子模型</p>
<p>盒模型都是由四个部分组成的，分别是<code v-pre>margin</code>、<code v-pre>border</code>、<code v-pre>padding</code>和<code v-pre>content</code>。
标准盒模型和IE盒模型的区别在于设置<code v-pre>width</code>和<code v-pre>height</code>时，所对应的范围不同：</p>
<p><strong>标准盒模型</strong>的 <code v-pre>width</code> 和 <code v-pre>height</code> 属性的范围只包含了 <code v-pre>content</code>，
<strong>IE盒模型</strong>的 <code v-pre>width</code> 和 <code v-pre>height</code> 属性的范围包含了 <code v-pre>border</code>、<code v-pre>padding</code> 和 <code v-pre>content</code>。</p>
<p>可以通过修改元素的<code v-pre>box-sizing</code>属性来改变元素的盒模型：</p>
<p>box-sizeing: <code v-pre>content-box</code> 表示标准盒模型（默认值）
box-sizeing: <code v-pre>border-box</code> 表示IE盒模型（怪异盒模型）</p>
<h3 id="_3、隐藏元素的方法有哪些" tabindex="-1"><a class="header-anchor" href="#_3、隐藏元素的方法有哪些" aria-hidden="true">#</a> 3、隐藏元素的方法有哪些</h3>
<ul>
<li>display: none：渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件。</li>
<li>visibility: hidden：元素在页面中仍占据空间，但是不会响应绑定的监听事件。</li>
<li>opacity: 0：将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件。</li>
<li>z-index: 负值：来使其他元素遮盖住该元素，以此来实现隐藏。</li>
<li>position: absolute：通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏。</li>
<li>clip/clip-path ：使用元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。</li>
<li>transform: scale(0,0)：将元素缩放为 0，来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件。</li>
</ul>
<h3 id="_4、display-的属性值及其作用-block、inline和inline-block的区别" tabindex="-1"><a class="header-anchor" href="#_4、display-的属性值及其作用-block、inline和inline-block的区别" aria-hidden="true">#</a> 4、display 的属性值及其作用，block、inline和inline-block的区别</h3>
<h4 id="属性值及其作用" tabindex="-1"><a class="header-anchor" href="#属性值及其作用" aria-hidden="true">#</a> 属性值及其作用</h4>
<ul>
<li>none : 元素不显示，并且会从文档流中移除。</li>
<li>block : 块类型。默认宽度为父元素宽度，可设置宽高，换行显示。</li>
<li>inline : 行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。</li>
<li>inline-block : 默认宽度为内容宽度，可以设置宽高，同行显示。</li>
<li>list-item : 像块类型元素一样显示，并添加样式列表标记。</li>
<li>table : 此元素会作为块级表格来显示。</li>
<li>inherit : 规定应该从父元素继承display属性的值。</li>
</ul>
<h4 id="block、inline和inline-block的区别" tabindex="-1"><a class="header-anchor" href="#block、inline和inline-block的区别" aria-hidden="true">#</a> block、inline和inline-block的区别</h4>
<p>（1）block： 会独占一行，多个元素会另起一行，可以设置width、height、margin 和 padding 属性；</p>
<p>（2）inline： 元素不会独占一行，设置width、height属性无效。但可以设置水平方向的 margin 和 padding 属性，不能设置垂直方向的 padding 和 margin；</p>
<p>（3）inline-block： 将对象设置为 inline 对象，但对象的内容作为 block 对象呈现，之后的内联对象会被排列在同一行内。</p>
<p>对于行内元素和块级元素，其特点如下：</p>
<ul>
<li>
<p>行内元素
设置宽高无效；
可以设置水平方向的<code v-pre>margin</code>和<code v-pre>padding</code>属性，不能设置垂直方向的<code v-pre>padding</code>和<code v-pre>margin</code>；
不会自动换行；</p>
</li>
<li>
<p>块级元素
可以设置宽高；
设置<code v-pre>margin</code>和<code v-pre>padding</code>都有效；
可以自动换行；
多个块状，默认排列从上到下。</p>
</li>
</ul>
<h3 id="_5、display-none-与-visibility-hidden-的区别" tabindex="-1"><a class="header-anchor" href="#_5、display-none-与-visibility-hidden-的区别" aria-hidden="true">#</a> 5、display:none 与 visibility-hidden 的区别</h3>
<p>这两个属性都是让元素隐藏，不可见。两者区别如下：</p>
<h4 id="_1-在渲染树中" tabindex="-1"><a class="header-anchor" href="#_1-在渲染树中" aria-hidden="true">#</a> （1）在渲染树中</h4>
<p>display:none会让元素完全从渲染树中消失，渲染时不会占据任何空间；
visibility:hidden不会让元素从渲染树中消失，渲染的元素还会占据相应的空间，只是内容不可见。</p>
<h4 id="_2-是否是继承属性" tabindex="-1"><a class="header-anchor" href="#_2-是否是继承属性" aria-hidden="true">#</a> （2）是否是继承属性</h4>
<p>display:none是非继承属性，子孙节点会随着父节点从渲染树消失，通过修改子孙节点的属性也无法显示；
visibility:hidden是继承属性，子孙节点消失是由于继承了hidden，通过设置visibility:visible可以让子孙节点显示；</p>
<h4 id="_3-修改常规文档流中元素的-display-通常会造成文档的重排-但是修改visibility属性只会造成本元素的重绘" tabindex="-1"><a class="header-anchor" href="#_3-修改常规文档流中元素的-display-通常会造成文档的重排-但是修改visibility属性只会造成本元素的重绘" aria-hidden="true">#</a> （3）修改常规文档流中元素的 display 通常会造成文档的重排，但是修改visibility属性只会造成本元素的重绘；</h4>
<h4 id="_4-如果使用读屏器-设置为display-none的内容不会被读取-设置为visibility-hidden的内容会被读取。" tabindex="-1"><a class="header-anchor" href="#_4-如果使用读屏器-设置为display-none的内容不会被读取-设置为visibility-hidden的内容会被读取。" aria-hidden="true">#</a> （4）如果使用读屏器，设置为display:none的内容不会被读取，设置为visibility:hidden的内容会被读取。</h4>
<h3 id="_6、单行、多行文本溢出隐藏" tabindex="-1"><a class="header-anchor" href="#_6、单行、多行文本溢出隐藏" aria-hidden="true">#</a> 6、单行、多行文本溢出隐藏</h3>
<h4 id="单行文本溢出" tabindex="-1"><a class="header-anchor" href="#单行文本溢出" aria-hidden="true">#</a> 单行文本溢出</h4>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>                   // 溢出隐藏
<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>            // 溢出用省略号显示
<span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>                // 规定段落中的文本不进行换行
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多行文本溢出" tabindex="-1"><a class="header-anchor" href="#多行文本溢出" aria-hidden="true">#</a> 多行文本溢出</h4>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>                   // 溢出隐藏
<span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>            // 溢出用省略号显示
<span class="token property">display</span><span class="token punctuation">:</span>-webkit-box<span class="token punctuation">;</span>                // 作为弹性伸缩盒子模型显示。
<span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span>vertical<span class="token punctuation">;</span>        // 设置伸缩盒子的子元素排列方式：从上到下垂直排列
<span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span>3<span class="token punctuation">;</span>               // 显示的行数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：由于上面的三个属性都是 CSS3 的属性，没有浏览器可以兼容，所以要在前面加一个 <code v-pre>-webkit-</code> 来兼容一部分浏览器。</p>
<h2 id="二、页面布局" tabindex="-1"><a class="header-anchor" href="#二、页面布局" aria-hidden="true">#</a> 二、页面布局</h2>
<h3 id="_1、水平垂直居中的实现" tabindex="-1"><a class="header-anchor" href="#_1、水平垂直居中的实现" aria-hidden="true">#</a> 1、水平垂直居中的实现</h3>
<p>利用绝对定位，先将元素的左上角通过top:50%和left:50%定位到页面的中心，然后再通过translate来调整元素的中心点到页面的中心。该方法需要考虑浏览器兼容问题。</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span> <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span><span class="token punctuation">}</span> 
<span class="token selector">.child</span> <span class="token punctuation">{</span> <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span> <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span> <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span> <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">translate</span><span class="token punctuation">(</span>-50%<span class="token punctuation">,</span>-50%<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用绝对定位，设置四个方向的值都为0，并将margin设置为auto，由于宽高固定，因此对应方向实现平分，可以实现水平和垂直方向上的居中。该方法适用于盒子有宽高的情况：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token selector">.child</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用绝对定位，先将元素的左上角通过top:50%和left:50%定位到页面的中心，然后再通过margin负值来调整元素的中心点到页面的中心。该方法适用于盒子宽高已知的情况</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> relative<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
 
<span class="token selector">.child</span> <span class="token punctuation">{</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>     <span class="token comment">/* 自身 height 的一半 */</span>
    <span class="token property">margin-left</span><span class="token punctuation">:</span> -50px<span class="token punctuation">;</span>    <span class="token comment">/* 自身 width 的一半 */</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用flex布局，通过align-items:center和justify-content:center设置容器的垂直和水平方向上为居中对齐，然后它的子元素也可以实现垂直和水平的居中。该方法要考虑兼容的问题，该方法在移动端用的较多：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.parent</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">justify-content</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
    <span class="token property">align-items</span><span class="token punctuation">:</span>center<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、对flex布局的理解及其使用场景" tabindex="-1"><a class="header-anchor" href="#_2、对flex布局的理解及其使用场景" aria-hidden="true">#</a> 2、对Flex布局的理解及其使用场景</h3>
<p>flex（弹性布局）布局是CSS3新增的一种布局方式，可以通过将一个元素的display属性值设置为flex从而使它成为一个flex容器，它的所有子元素都会成为它的项目。</p>
<h3 id="_3、常见的-css-布局单位" tabindex="-1"><a class="header-anchor" href="#_3、常见的-css-布局单位" aria-hidden="true">#</a> 3、常见的 CSS 布局单位</h3>
<p>常用的布局单位包括像素（<code v-pre>px</code>），百分比（<code v-pre>%</code>），<code v-pre>em</code>，<code v-pre>rem</code>，<code v-pre>vw/vh</code>。</p>
<p>（1）像素（<code v-pre>px</code>）是页面布局的基础，一个像素表示终端（电脑、手机、平板等）屏幕所能显示的最小的区域，像素分为两种类型：CSS 像素和物理像素：</p>
<ul>
<li>CSS像素：为 web 开发者提供，在 CSS 中使用的一个抽象单位；</li>
<li>物理像素：只与设备的硬件密度有关，任何设备的物理像素都是固定的。</li>
</ul>
<p>（2）百分比（<code v-pre>%</code>），当浏览器的宽度或者高度发生变化时，通过百分比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。一般认为子元素的百分比相对于直接父元素。
（3）<code v-pre>em</code>和<code v-pre>rem</code>相对于px更具灵活性，它们都是相对长度单位，它们之间的区别：em相对于父元素，rem相对于根元素。</p>
<ul>
<li>em： 文本相对长度单位。相对于当前对象内文本的字体尺寸。如果当前行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸(默认16px)。(相对父元素的字体大小倍数)。</li>
<li>rem： rem是CSS3新增的一个相对单位，相对于根元素（html元素）的font-size的倍数。作用：利用rem可以实现简单的响应式布局，可以利用html元素中字体的大小与屏幕间的比值来设置font-size的值，以此实现当屏幕分辨率变化时让元素也随之变化。</li>
</ul>
<p>（4）<code v-pre>vw/vh</code>是与视图窗口有关的单位，<code v-pre>vw</code>表示相对于视图窗口的宽度，<code v-pre>vh</code>表示相对于视图窗口高度，除了vw和vh外，还有vmin和vmax两个相关的单位。</p>
<ul>
<li>vw：相对于视窗的宽度，视窗宽度是100vw；</li>
<li>vh：相对于视窗的高度，视窗高度是100vh；</li>
<li>vmin：vw和vh中的较小值；</li>
<li>vmax：vw和vh中的较大值；</li>
</ul>
<p>vw/vh 和百分比很类似，两者的区别：</p>
<ul>
<li>百分比（%）：大部分相对于祖先元素，也有相对于自身的情况比如（border-radius、translate等)</li>
<li>vw/vm：相对于视窗的尺寸</li>
</ul>
<h3 id="_4、px、em、rem-的区别及使用场景" tabindex="-1"><a class="header-anchor" href="#_4、px、em、rem-的区别及使用场景" aria-hidden="true">#</a> 4、px、em、rem 的区别及使用场景</h3>
<h4 id="三者的区别" tabindex="-1"><a class="header-anchor" href="#三者的区别" aria-hidden="true">#</a> 三者的区别：</h4>
<p>px是固定的像素，一旦设置了就无法因为适应页面大小而改变。
em和rem相对于px更具有灵活性，他们是相对长度单位，其长度不是固定的，更适用于响应式布局。
em是相对于其父元素来设置字体大小，这样就会存在一个问题，进行任何元素设置，都有可能需要知道他父元素的大小。而rem是相对于根元素，这样就意味着，只需要在根元素确定一个参考值。</p>
<h4 id="使用场景" tabindex="-1"><a class="header-anchor" href="#使用场景" aria-hidden="true">#</a> 使用场景：</h4>
<p>对于只需要适配少部分移动设备，且分辨率对页面影响不大的，使用px即可 。
对于需要适配各种移动设备，使用rem，例如需要适配iPhone和iPad等分辨率差别比较挺大的设备。</p>
<h3 id="_5、两栏布局的实现" tabindex="-1"><a class="header-anchor" href="#_5、两栏布局的实现" aria-hidden="true">#</a> 5、两栏布局的实现</h3>
<h2 id="二、定位与浮动" tabindex="-1"><a class="header-anchor" href="#二、定位与浮动" aria-hidden="true">#</a> 二、定位与浮动</h2>
<h3 id="为什么需要清除浮动-清除浮动的方式" tabindex="-1"><a class="header-anchor" href="#为什么需要清除浮动-清除浮动的方式" aria-hidden="true">#</a> 为什么需要清除浮动？清除浮动的方式</h3>
<h3 id="对-bfc-的理解-如何创建-bfc" tabindex="-1"><a class="header-anchor" href="#对-bfc-的理解-如何创建-bfc" aria-hidden="true">#</a> 对 BFC 的理解, 如何创建 BFC</h3>
<h3 id="使用-clear-属性清除浮动的原理" tabindex="-1"><a class="header-anchor" href="#使用-clear-属性清除浮动的原理" aria-hidden="true">#</a> 使用 clear 属性清除浮动的原理</h3>
<h3 id="什么是-margin-重叠问题-如何解决" tabindex="-1"><a class="header-anchor" href="#什么是-margin-重叠问题-如何解决" aria-hidden="true">#</a> 什么是 margin 重叠问题？如何解决</h3>
<h3 id="position-的属性有哪些-区别是什么" tabindex="-1"><a class="header-anchor" href="#position-的属性有哪些-区别是什么" aria-hidden="true">#</a> position 的属性有哪些，区别是什么</h3>
<h3 id="display、float、position的关系" tabindex="-1"><a class="header-anchor" href="#display、float、position的关系" aria-hidden="true">#</a> display、float、position的关系</h3>
<h2 id="二、定位与浮动-1" tabindex="-1"><a class="header-anchor" href="#二、定位与浮动-1" aria-hidden="true">#</a> 二、定位与浮动</h2>
<h3 id="实现一个三角形" tabindex="-1"><a class="header-anchor" href="#实现一个三角形" aria-hidden="true">#</a> 实现一个三角形</h3>
<h3 id="如何解决-1px-问题" tabindex="-1"><a class="header-anchor" href="#如何解决-1px-问题" aria-hidden="true">#</a> 如何解决 1px 问题？</h3>
<h3 id="设置小于-12px-的字体" tabindex="-1"><a class="header-anchor" href="#设置小于-12px-的字体" aria-hidden="true">#</a> 设置小于 12px 的字体</h3>
<h3 id="画一条-0-5px-的线" tabindex="-1"><a class="header-anchor" href="#画一条-0-5px-的线" aria-hidden="true">#</a> 画一条 0.5px 的线</h3>
</div></template>


