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
<h3 id="_7、link和-import的区别" tabindex="-1"><a class="header-anchor" href="#_7、link和-import的区别" aria-hidden="true">#</a> 7、link和@import的区别</h3>
<p>两者都是外部引用CSS的方式，它们的区别如下：</p>
<ul>
<li>link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。</li>
<li>link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。</li>
<li>link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。</li>
<li>link支持使用Javascript控制DOM去改变样式；而@import不支持。</li>
</ul>
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
<h4 id="浮动的定义" tabindex="-1"><a class="header-anchor" href="#浮动的定义" aria-hidden="true">#</a> 浮动的定义</h4>
<p>非IE浏览器下，容器不设高度且子元素浮动时，容器高度不能被内容撑开。 此时，内容会溢出到容器外面而影响布局。这种现象被称为浮动（溢出）。</p>
<h4 id="浮动的工作原理" tabindex="-1"><a class="header-anchor" href="#浮动的工作原理" aria-hidden="true">#</a> 浮动的工作原理：</h4>
<ul>
<li>浮动元素脱离文档流，不占据空间（引起“高度塌陷”现象）</li>
<li>浮动元素碰到包含它的边框或者其他浮动元素的边框停留</li>
</ul>
<p>浮动元素可以左右移动，直到遇到另一个浮动元素或者遇到它外边缘的包含框。浮动框不属于文档流中的普通流，当元素浮动之后，不会影响块级元素的布局，只会影响内联元素布局。此时文档流中的普通流就会表现得该浮动框不存在一样的布局模式。当包含框的高度小于浮动框的时候，此时就会出现“高度塌陷”。</p>
<h4 id="浮动元素引起的问题" tabindex="-1"><a class="header-anchor" href="#浮动元素引起的问题" aria-hidden="true">#</a> 浮动元素引起的问题？</h4>
<p>父元素的高度无法被撑开，影响与父元素同级的元素
与浮动元素同级的非浮动元素会跟随其后
若浮动的元素不是第一个元素，则该元素之前的元素也要浮动，否则会影响页面的显示结构</p>
<h4 id="清除浮动的方式如下" tabindex="-1"><a class="header-anchor" href="#清除浮动的方式如下" aria-hidden="true">#</a> 清除浮动的方式如下：</h4>
<ul>
<li>利用 clear 样式</li>
<li>给父级div定义height属性,最后一个浮动元素之后添加一个空的 div 标签，并添加 <code v-pre>clear:both</code> 样式</li>
<li>包含浮动元素的父级标签添加 <code v-pre>overflow:hidden</code> 或者 <code v-pre>overflow:auto</code> (overflow的作用就是为了构建一个BFC区域，让内部浮动的影响都得以“内化”。)</li>
<li>使用 :after 伪元素。由于IE6-7不支持 :after，使用 zoom:1 触发 hasLayout**</li>
</ul>
<h3 id="使用-clear-属性清除浮动的原理" tabindex="-1"><a class="header-anchor" href="#使用-clear-属性清除浮动的原理" aria-hidden="true">#</a> 使用 clear 属性清除浮动的原理</h3>
<p>使用 clear 属性清除浮动语法： clear:none|left|right|both</p>
<p>单看字面意思，clear:left 是“清除左浮动”，clear:right 是“清除右浮动”，实际上，这种解释是有问题的，因为浮动一直还在，并没有清除。
官方对clear属性解释：<strong>“元素盒子的边不能和前面的浮动元素相邻”</strong>，对元素设置clear属性是为了避免浮动元素对该元素的影响，而不是清除掉浮动。</p>
<p>还需要注意 <code v-pre>clear</code> 属性指的是元素盒子的边不能和前面的浮动元素相邻，注意这里“前面的”3个字，也就是 <code v-pre>clear</code> 属性对“后面的”浮动元素是不闻不问的。考虑到 float 属性要么是 <code v-pre>left</code>，要么是 <code v-pre>right</code>，不可能同时存在，同时由于 <code v-pre>clear</code> 属性对“后面的”浮动元素不闻不问，因此，当<code v-pre>clear:left</code>有效的时候，<code v-pre>clear:right</code> 必定无效，也就是此时 <code v-pre>clear:left</code> 等同于设置 <code v-pre>clear:both</code>；同样地，<code v-pre>clear:right</code> 如果有效也是等同于设置 <code v-pre>clear:both</code> 。由此可见，<code v-pre>clear:left</code> 和 <code v-pre>clear:right</code> 这两个声明就没有任何使用的价值，至少在CSS世界中是如此，直接使用 <code v-pre>clear:both</code> 吧。</p>
<p>一般使用伪元素的方式清除浮动：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.clear::after</span><span class="token punctuation">{</span> <span class="token property">content</span><span class="token punctuation">:</span><span class="token string">''</span><span class="token punctuation">;</span> <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span> <span class="token property">clear</span><span class="token punctuation">:</span>both<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>clear属性只有块级元素才有效的，而::after等伪元素默认都是内联水平，这就是借助伪元素清除浮动影响时需要设置display属性值的原因。</p>
<h3 id="对-bfc-的理解-如何创建-bfc" tabindex="-1"><a class="header-anchor" href="#对-bfc-的理解-如何创建-bfc" aria-hidden="true">#</a> 对 BFC 的理解, 如何创建 BFC</h3>
<p>先来看两个相关的概念：</p>
<ul>
<li>
<p>Box: Box 是 CSS 布局的对象和基本单位，⼀个⻚⾯是由很多个 Box 组成的，这个Box就是我们所说的盒模型。
Formatting context：块级上下⽂格式化，它是⻚⾯中的⼀块渲染区域，并且有⼀套渲染规则，它决定了其⼦元素将如何定位，以及和其他元素的关系和相互作⽤。</p>
</li>
<li>
<p>块格式化上下文（Block Formatting Context，BFC）是Web页面的可视化CSS渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。</p>
</li>
</ul>
<p>通俗来讲：<strong>BFC是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，并且不会影响其它环境中的物品。</strong> 如果一个元素符合触发 <code v-pre>BFC</code> 的条件，则 <code v-pre>BFC</code> 中的元素布局不受外部影响。</p>
<h4 id="创建bfc的条件" tabindex="-1"><a class="header-anchor" href="#创建bfc的条件" aria-hidden="true">#</a> 创建BFC的条件：</h4>
<ul>
<li>根元素：body；</li>
<li>元素设置浮动：float 除 none 以外的值；</li>
<li>元素设置绝对定位：position (absolute、fixed)；</li>
<li>display 值为：inline-block、table-cell、table-caption、flex等；</li>
<li>overflow 值为：hidden、auto、scroll；</li>
</ul>
<h4 id="bfc的特点" tabindex="-1"><a class="header-anchor" href="#bfc的特点" aria-hidden="true">#</a> BFC的特点：</h4>
<ul>
<li>垂直方向上，自上而下排列，和文档流的排列方式一致。</li>
<li>在BFC中上下相邻的两个容器的margin会重叠</li>
<li>计算BFC的高度时，需要计算浮动元素的高度</li>
<li>BFC区域不会与浮动的容器发生重叠</li>
<li>BFC是独立的容器，容器内部元素不会影响外部元素</li>
<li>每个元素的左margin值和容器的左border相接触</li>
</ul>
<h4 id="bfc的作用" tabindex="-1"><a class="header-anchor" href="#bfc的作用" aria-hidden="true">#</a> BFC的作用：</h4>
<ul>
<li><strong>解决margin的重叠问题</strong>：由于BFC是一个独立的区域，内部的元素和外部的元素互不影响，将两个元素变为两个BFC，就解决了margin重叠的问题。</li>
<li><strong>解决高度塌陷的问题</strong>：在对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为0。解决这个问题，只需要把父元素变成一个BFC。常用的办法是给父元素设置overflow:hidden。</li>
<li><strong>创建自适应两栏布局</strong>：可以用来创建自适应两栏布局：左边的宽度固定，右边的宽度自适应。</li>
</ul>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">.left</span><span class="token punctuation">{</span>
     <span class="token property">width</span><span class="token punctuation">:</span> 100px<span class="token punctuation">;</span>
     <span class="token property">height</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
     <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
     <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 <span class="token selector">.right</span><span class="token punctuation">{</span>
     <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
     <span class="token property">background</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
     <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
 <span class="token punctuation">}</span>
 
&lt;div class=<span class="token string">"left"</span>>&lt;/div>
&lt;div class=<span class="token string">"right"</span>>&lt;/div>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>左侧设置float:left，右侧设置overflow: hidden。这样右边就触发了BFC，BFC的区域不会与浮动元素发生重叠，所以两侧就不会发生重叠，实现了自适应两栏布局。</p>
<h3 id="什么是-margin-重叠问题-如何解决" tabindex="-1"><a class="header-anchor" href="#什么是-margin-重叠问题-如何解决" aria-hidden="true">#</a> 什么是 margin 重叠问题？如何解决</h3>
<h4 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述：</h4>
<p>两个块级元素的上外边距和下外边距可能会合并（折叠）为一个外边距，其大小会取其中外边距值大的那个，这种行为就是外边距折叠。需要注意的是，<strong>浮动的元素和绝对定位</strong>这种脱离文档流的元素的外边距不会折叠。重叠只会出现在<strong>垂直方向</strong>。</p>
<h4 id="解决办法" tabindex="-1"><a class="header-anchor" href="#解决办法" aria-hidden="true">#</a> 解决办法：</h4>
<p>对于折叠的情况，主要有两种：<strong>兄弟之间重叠</strong>和<strong>父子之间重叠</strong></p>
<p>（1）兄弟之间重叠</p>
<ul>
<li>底部元素变为行内盒子：<code v-pre>display: inline-block</code></li>
<li>底部元素设置浮动：<code v-pre>float</code></li>
<li>底部元素的position的值为<code v-pre>absolute/fixed</code></li>
</ul>
<p>（2）父子之间重叠</p>
<ul>
<li>父元素加入：<code v-pre>overflow: hidden</code></li>
<li>父元素添加透明边框：<code v-pre>border:1px solid transparent</code></li>
<li>子元素变为行内盒子：<code v-pre>display: inline-block</code></li>
<li>子元素加入浮动属性或定位</li>
</ul>
<h3 id="position-的属性有哪些-区别是什么" tabindex="-1"><a class="header-anchor" href="#position-的属性有哪些-区别是什么" aria-hidden="true">#</a> position 的属性有哪些，区别是什么</h3>
<h4 id="position有以下属性值" tabindex="-1"><a class="header-anchor" href="#position有以下属性值" aria-hidden="true">#</a> position有以下属性值：</h4>
<ul>
<li>
<p>absolute生成绝对定位的元素，相对于static定位以外的一个父元素进行定位。元素的位置通过left、top、right、bottom属性进行规定。</p>
</li>
<li>
<p>relative生成相对定位的元素，相对于其原来的位置进行定位。元素的位置通过left、top、right、bottom属性进行规定。</p>
</li>
<li>
<p>fixed生成绝对定位的元素，指定元素相对于屏幕视⼝（viewport）的位置来指定元素位置。元素的位置在屏幕滚动时不会改变，⽐如回到顶部的按钮⼀般都是⽤此定位⽅式。</p>
</li>
<li>
<p>static默认值，没有定位，元素出现在正常的文档流中，会忽略 top, bottom, left, right 或者 z-index 声明，块级元素从上往下纵向排布，⾏级元素从左向右排列。</p>
</li>
<li>
<p>inherit规定从父元素继承position属性的值</p>
</li>
</ul>
<h4 id="前面三者的定位方式如下" tabindex="-1"><a class="header-anchor" href="#前面三者的定位方式如下" aria-hidden="true">#</a> 前面三者的定位方式如下：</h4>
<p>relative： 元素的定位永远是相对于元素自身位置的，和其他元素没关系，也不会影响其他元素。</p>
<p>fixed： 元素的定位是相对于 window （或者 iframe）边界的，和其他元素没有关系。但是它具有破坏性，会导致其他元素位置的变化。</p>
<p>absolute： 元素的定位相对于前两者要复杂许多。如果为 absolute 设置了 top、left，浏览器会根据什么去确定它的纵向和横向的偏移量呢？
答案是浏览器会递归查找该元素的所有父元素，如果找到一个设置了 <code v-pre>position:relative/absolute/fixed</code> 的元素，就以该元素为基准定位，如果没找到，就以浏览器边界定位。如下两个图所示：</p>
<h3 id="display、float、position的关系" tabindex="-1"><a class="header-anchor" href="#display、float、position的关系" aria-hidden="true">#</a> display、float、position的关系</h3>
<p>（1）首先判断display属性是否为none，如果为none，则position和float属性的值不影响元素最后的表现。</p>
<p>（2）然后判断position的值是否为absolute或者fixed，如果是，则float属性失效，并且display的值应该被设置为table或者block，具体转换需要看初始转换值。</p>
<p>（3）如果position的值不为absolute或者fixed，则判断float属性的值是否为none，如果不是，则display的值则按上面的规则转换。注意，如果position的值为relative并且float属性的值存在，则relative相对于浮动后的最终位置定位。</p>
<p>（4）如果float的值为none，则判断元素是否为根元素，如果是根元素则display属性按照上面的规则转换，如果不是，则保持指定的display属性值不变。
总的来说，可以把它看作是一个类似优先级的机制，&quot;position:absolute&quot;和&quot;position:fixed&quot;优先级最高，有它存在的时候，浮动不起作用，'display'的值也需要调整；其次，元素的'float'特性的值不是&quot;none&quot;的时候或者它是根元素的时候，调整'display'的值；最后，非根元素，并且非浮动元素，并且非绝对定位的元素，'display'特性值同设置值。</p>
<h2 id="三、场景应用" tabindex="-1"><a class="header-anchor" href="#三、场景应用" aria-hidden="true">#</a> 三、场景应用</h2>
<h3 id="实现一个三角形" tabindex="-1"><a class="header-anchor" href="#实现一个三角形" aria-hidden="true">#</a> 实现一个三角形</h3>
<p>CSS绘制三角形主要用到的是border属性，也就是边框。
平时在给盒子设置边框时，往往都设置很窄，就可能误以为边框是由矩形组成的。实际上，border属性是右三角形组成的，下面看一个例子：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token selector">div</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">height</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 100px solid<span class="token punctuation">;</span>
    <span class="token property">border-color</span><span class="token punctuation">:</span> orange blue red green<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="如何解决-1px-问题" tabindex="-1"><a class="header-anchor" href="#如何解决-1px-问题" aria-hidden="true">#</a> 如何解决 1px 问题？</h3>
<p>1px 问题指的是：在一些 Retina屏幕 的机型上，移动端页面的 1px 会变得很粗，呈现出不止 1px 的效果。原因很简单——CSS 中的 1px 并不能和移动设备上的 1px 划等号。它们之间的比例关系有一个专门的属性来描述：</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>window<span class="token punctuation">.</span>devicePixelRatio <span class="token operator">=</span> 设备的物理像素 <span class="token operator">/</span> <span class="token constant">CSS</span>像素。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>思路一：直接写 0.5px</p>
<p>思路二：伪元素先放大后缩小</p>
<p>思路三：viewport 缩放来解决</p>
<h3 id="设置小于-12px-的字体" tabindex="-1"><a class="header-anchor" href="#设置小于-12px-的字体" aria-hidden="true">#</a> 设置小于 12px 的字体</h3>
<p>在谷歌下css设置字体大小为12px及以下时，显示都是一样大小，都是默认12px。</p>
<h4 id="解决办法-1" tabindex="-1"><a class="header-anchor" href="#解决办法-1" aria-hidden="true">#</a> 解决办法：</h4>
<p>使用css3的transform缩放属性-webkit-transform:scale(0.5); 注意-webkit-transform:scale(0.75);收缩的是整个元素的大小，这时候，如果是内联元素，必须要将内联元素转换成块元素，可以使用display：block/inline-block/...；</p>
<p>使用图片：如果是内容固定不变情况下，使用将小于12px文字内容切出做图片，这样不影响兼容也不影响美观。</p>
<p>使用Webkit的内核的-webkit-text-size-adjust的私有CSS属性来解决，只要加了-webkit-text-size-adjust:none;字体大小就不受限制了。但是chrome更新到27版本之后就不可以用了。所以高版本chrome谷歌浏览器已经不再支持-webkit-text-size-adjust样式，所以要使用时候慎用。</p>
<h3 id="画一条-0-5px-的线" tabindex="-1"><a class="header-anchor" href="#画一条-0-5px-的线" aria-hidden="true">#</a> 画一条 0.5px 的线</h3>
<p>采用transform: scale()的方式，该方法用来定义元素的2D 缩放转换：</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code><span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>0.5<span class="token punctuation">,</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>采用meta viewport的方式</p>
<div class="language-css line-numbers-mode" data-ext="css"><pre v-pre class="language-css"><code>&lt;meta name=<span class="token string">"viewport"</span> content=<span class="token string">"width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5"</span>/>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这样就能缩放到原来的0.5倍，如果是1px那么就会变成0.5px。viewport只针对于移动端，只在移动端上才能看到效果</p>
</div></template>


