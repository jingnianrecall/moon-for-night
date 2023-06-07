<template><div><blockquote>
<p>说明：本内容转自MDN，来源<a href="https://developer.mozilla.org/zh-CN/docs/" target="_blank" rel="noopener noreferrer">https://developer.mozilla.org/zh-CN/docs/<ExternalLinkIcon/></a>，版权归原作者所有。</p>
</blockquote>
<h1 id="web-workers" tabindex="-1"><a class="header-anchor" href="#web-workers" aria-hidden="true">#</a> Web Workers</h1>
<p>通过使用 Web Workers，Web 应用程序可以在独立于主线程的后台线程中，运行一个脚本操作。这样做的好处是可以在独立线程中执行费时的处理任务，从而允许主线程（通常是 UI 线程）不会因此被阻塞/放慢。</p>
<ul>
<li>JavaScript是单线程运行, 我们在界面上看到的所谓同时的操作，其实都是任务之间的不断切换造成的假象(事件循环机制)</li>
<li>Web Workers每创建一个新的Worker，就会产生一个真正操作系统级别的线程出来，我们可以把一定的任务量交给Worker来完成，但这其实是单线程模拟出来的。至少在worker内，是不能操作DOM节点的，也不能使用window对象默认的方法和属性。</li>
</ul>
<h2 id="一、web-workers-概念与用法" tabindex="-1"><a class="header-anchor" href="#一、web-workers-概念与用法" aria-hidden="true">#</a> 一、Web Workers 概念与用法</h2>
<p>使用构造函数（例如，Worker()）创建一个 worker 对象，构造函数接受一个 JavaScript 文件 URL — 这个文件包含了将在 worker 线程中运行的代码。worker 将运行在与当前 window不同的另一个全局上下文中，这个上下文由一个对象表示，标准情况下为DedicatedWorkerGlobalScope （标准 workers 由单个脚本使用; 共享 workers 使用SharedWorkerGlobalScope (en-US)）。</p>
<p>你可以在 worker 线程中运行任意的代码，但注意存在一些例外：你不能直接在 worker 线程中操纵 DOM 元素；或使用window 对象中的某些方法和属性。大部分 window 对象的方法和属性是可以使用的，包括 WebSockets (en-US)，以及诸如 IndexedDB 和 FireFox OS 中独有的 Data Store API 这一类数据存储机制。</p>
<p>主线程和 worker 线程相互之间使用 postMessage() 方法来发送信息，并且通过 onmessage 这个 event handler 来接收信息（传递的信息包含在 message 这个事件的data属性内) 。数据的交互方式为传递副本，而不是直接共享数据。</p>
<p>worker 可以另外生成新的 worker，这些 worker 与它们父页面的宿主相同。此外，worker 可以通过 XMLHttpRequest 来访问网络，只不过 XMLHttpRequest 的 responseXML 和 channel 这两个属性的值将总是 null 。</p>
</div></template>


