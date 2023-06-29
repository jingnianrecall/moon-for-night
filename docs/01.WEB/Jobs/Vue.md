---
title: Vue
date: 2023-05-09 13:49:16
# permalink: /pages/0796ba76b4b55368
categories:
  - 01.WEB
tags:
  - 01.WEB
author:
  name: zhang
  # link: https://github.com
---

## 一、Vue 基础

### 1、对 SPA 单页面的理解，它的优缺点分别是什么？
SPA 仅在 Web 页面初始化时加载相应的 HTML、JavaScript 和 CSS。一旦页面加载完成，SPA 不会因为用户的操作而进行页面的重新加载或跳转；取而代之的是利用路由机制实现 HTML 内容的变换，UI 与用户的交互，避免页面的重新加载。

#### 优点：
用户体验好、快，内容的改变不需要重新加载整个页面，避免了不必要的跳转和重复渲染；
基于上面一点，SPA 相对对服务器压力小；
前后端职责分离，架构清晰，前端进行交互逻辑，后端负责数据处理；

#### 缺点：
初次加载耗时多：为实现单页 Web 应用功能及显示效果，需要在加载页面的时候将 JavaScript、CSS 统一加载，部分页面按需加载；
前进后退路由管理：由于单页应用在一个页面中显示所有的内容，所以不能使用浏览器的前进后退功能，所有的页面切换需要自己建立堆栈管理；
SEO 难度较大：由于所有的内容都在一个页面中动态替换显示，所以在 SEO 上其有着天然的弱势。

### 2、什么是 MVVM？
Model–View–ViewModel 是一个软件架构设计模式，Model层主要是管理数据，ViewModel 层负责视图数据的一些逻辑处理，该层向上与视图层进行双向数据绑定，向下与 Model 层通过接口请求进行数据交互。

#### 1、View 层
View 是视图层，也就是用户界面。前端主要由 HTML 和 CSS 来构建 。
#### 2、Model 层
Model 是指数据模型，泛指后端进行的各种业务逻辑处理和数据操控，对于前端来说就是后端提供的 api 接口。
#### 3、ViewModel 层
ViewModel 是由前端开发人员组织生成和维护的视图数据层。在这一层，前端开发者对从后端获取的 Model 数据进行转换处理，做二次封装，以生成符合 View 层使用预期的视图数据模型。需要注意的是 ViewModel 所封装出来的数据模型包括视图的状态和行为两部分，而 Model 层的数据模型是只包含状态的，比如页面的这一块展示什么，而页面加载进来时发生什么，点击这一块发生什么，这一块滚动时发生什么这些都属于视图行为（交互），视图状态和行为都封装在了 ViewModel 里。这样的封装使得 ViewModel 可以完整地去描述 View 层。
MVVM 框架实现了双向绑定，这样 ViewModel 的内容会实时展现在 View 层，前端开发者再也不必低效又麻烦地通过操纵 DOM 去更新视图，MVVM 框架已经把最脏最累的一块做好了，我们开发者只需要处理和维护 ViewModel，更新数据视图就会自动得到相应更新。这样 View 层展现的不是 Model 层的数据，而是 ViewModel 的数据，由 ViewModel 负责与 Model 层交互，这就完全解耦了 View 层和 Model 层，这个解耦是至关重要的，它是前后端分离方案实施的重要一环。

### 14、v-show 与 v-if 有什么区别？
`v-if` 是“真实的”按条件渲染，因为它确保了在切换时，条件区块内的事件监听器和子组件都会被销毁与重建。

`v-if` 也是惰性的：如果在初次渲染时条件值为 false，则不会做任何事。条件区块只有当条件首次变为 true 时才被渲染。

相比之下，`v-show` 简单许多，元素无论初始条件如何，始终会被渲染，只有 CSS display 属性会被切换。

总的来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要频繁切换，则使用 `v-show` 较好；如果在运行时绑定条件很少改变，则 `v-if` 会更合适。

### 2、v-if和v-for哪个优先级更高？

在 `Vue2` 中当它们处于同一节点，`v-for` 的优先级比 `v-if` 更高，`v-for` 每次循环都要进行 `v-if` 判断，浪费性能。

在 `Vue3` 中当它们同时存在于一个节点上时，`v-if` 比 `v-for` 的优先级更高。 `v-if` 进行判断时调用的变量还不存在，会导致异常。

#### 场景
官方文档不推荐`v-if` 和 `v-for`写在同一级元素上，如果需要同时使用，应该在外包装一层 `<div>` , 代码可读性也更好。

### 2、Vue中如何扩展一个组件
常见的组件扩展方法有：mixins，slots，extends等

#### 混入mixins是分发 Vue 组件中可复用功能的非常灵活的方式。
混入对象可以包含任意组件选项。当组件使用混入对象时，所有混入对象的选项将被混入该组件本身的选项。

```js
// 复用代码：它是一个配置对象，选项和组件里面一样
const mymixin = {
   methods: {
      dosomething(){}
   }
}
// 全局混入：将混入对象传入
Vue.mixin(mymixin)

// 局部混入：做数组项设置到mixins选项，仅作用于当前组件
const Comp = {
   mixins: [mymixin]
}
```

#### 插槽主要用于vue组件中的内容分发，也可以用于组件扩展。
```html
<!-- 子组件Child -->
<div>
  <slot>这个内容会被父组件传递的内容替换</slot>
</div>

<!-- 父组件Parent -->
<div>
   <Child>天命神授</Child>
</div>
```

如果要精确分发到不同位置可以使用具名插槽，如果要使用子组件中的数据可以使用作用域插槽。

#### 组件选项中还有一个不太常用的选项extends，也可以起到扩展组件的目的

```js
// 扩展对象
const myextends = {
   methods: {
      dosomething(){}
   }
}
// 组件扩展：做数组项设置到extends选项，仅作用于当前组件
// 跟混入的不同是它只能扩展单个对象
// 另外如果和混入发生冲突，该选项优先级较高，优先起作用
const Comp = {
   extends: myextends
}
```
#### 组合式 API (Composition API) 
混入的数据和方法不能明确判断来源且可能和当前组件内变量产生命名冲突，vue3中引入的composition api，可以很好解决这些问题，利用独立出来的响应式模块可以很方便的编写独立逻辑并提供响应式的数据，然后在setup选项中组合使用，增强代码的可读性和维护性。例如：
```js
// 复用逻辑1
function useXX() {}
// 复用逻辑2
function useYY() {}
// 逻辑组合
const Comp = {
   setup() {
      const {xx} = useXX()
      const {yy} = useYY()
      return {xx, yy}
   }
}
```


### 3、子组件可以直接改变父组件的数据么，说明原因
#### 单项数据流原则
所有的 props 都遵循着单向绑定原则，props 因父组件的更新而变化，反之则不行。这避免了子组件意外修改父组件的状态的情况，不然应用的数据流将很容易变得混乱而难以理解。

另外，每次父组件更新后，所有的子组件中的 props 都会被更新到最新值，这意味着你不应该在子组件中去更改一个 prop。若你这么做了，Vue 会在控制台上向你抛出警告：
```js
export default {
  props: ['foo'],
  created() {
    // ❌ 警告！prop 是只读的！
    this.foo = 'bar'
  }
}
```
导致你想要更改一个 prop 的需求通常来源于以下两种场景：

1、prop 被用于传入初始值；而子组件想在之后将其作为一个局部数据属性。在这种情况下，最好是新定义一个局部数据属性，从 props 上获取初始值即可：
```js
export default {
  props: ['initialCounter'],
  data() {
    return {
      // 计数器只是将 this.initialCounter 作为初始值
      // 像下面这样做就使 prop 和后续更新无关了
      counter: this.initialCounter
    }
  }
}
```
2、需要对传入的 prop 值做进一步的转换。在这种情况中，最好是基于该 prop 值定义一个计算属性：

```js
export default {
  props: ['size'],
  computed: {
    // 该 prop 变更时计算属性也会自动更新
    normalizedSize() {
      return this.size.trim().toLowerCase()
    }
  }
}
```
3、如果确实想要改变父组件属性，应该 `emit` 一个事件通知父组件去做这个变更。
注意虽然我们不能直接修改一个传入的对象或者数组类型的prop，但是我们还是能够直接改内嵌的对象或属性。


### 18、组件中 data 为什么是一个函数？
因为组件是用来**复用**的，且 JS 里对象是引用关系，如果组件中 data 是一个对象，那么这样作用域没有隔离，子组件中的 data 属性值会相互影响，如果组件中 data 选项是一个函数，那么每个实例可以维护一份被返回对象的独立的拷贝，类似于给每个组件实例创建一个私有的数据空间，组件实例之间的 data 属性值不会互相影响。

而 new Vue 的实例，是不会被复用的，因此不存在引用对象的问题。


### 15、Class 与 Style 如何动态绑定？
可以通过对象语法和数组语法进行动态绑定
#### 绑定对象​
我们可以给 :class (v-bind:class 的缩写) 传递一个对象来动态切换 class：

```html
<div :class="{ active: isActive }"></div>
```
#### 我们可以给 :class 绑定一个数组来渲染多个 CSS class
```js
data() {
  return {
    activeClass: 'active',
    errorClass: 'text-danger'
  }
}
```

```html
<div :class="[activeClass, errorClass]"></div>
```

### 6、Vue 框架怎么实现对象和数组的监听？
Vue 框架是通过遍历数组 和递归遍历对象，从而达到利用 `Object.defineProperty()` 对对象和数组（部分方法的操作）进行监听。

数组考虑性能原因没有用 `Object.defineProperty()` 对数组的每一项进行拦截，而是选择对 7 种数组（push, shift, pop, splice, unshift,sort, reverse）方法进行重写(AOP 切片思想)。

所以在 Vue 中修改数组的索引和长度是无法监控到的。需要通过以上 7 种变异方法修改数组才会触发数组对应的 watcher 进行更新。

### 7、Vue 怎么用 vm.$set() 解决对象新增属性不能响应的问题 ？

受现代 JavaScript 的限制 ，Vue 无法检测到对象属性的添加或删除。
由于 Vue 会在初始化实例时对属性执行 getter/setter 转化，所以属性必须在 data 对象上定义才能让 Vue 将它转换为响应式的。
Vue 提供了 Vue.set (object, propertyName, value) 来实现为对象添加响应式属性。

#### vm.$set 的实现原理是：

如果目标是数组，直接使用数组的 `splice` 方法触发相应式；

如果目标是对象，会先判读属性是否存在、对象是否是响应式，最终如果要对属性进行响应式处理，则是通过调用 `defineReactive` 方法进行响应式处理（ `defineReactive` 方法就是 Vue 在初始化对象时，给对象属性采用 `Object.defineProperty` 动态添加 `getter` 和 `setter` 的功能所调用的方法）。

### 8、Vue 生命周期

1、每个 Vue 组件实例被创建后都会经过一系列初始化步骤，比如，它需要数据观测，模板编译，挂载实例到dom上，以及数据变化时更新dom。这个过程中会运行叫做生命周期钩子的函数，在开发过程中就可以根据自己的需要在特定阶段添加自己的代码逻辑。

2、Vue生命周期总共可以分为8个阶段：创建前后, 载入前后, 更新前后, 销毁前后，以及一些特殊场景的生命周期。

3、vue3中新增了三个用于调试和服务端渲染场景。

* `beforeCreate`：主要是进行一些初始化任务，引入插件
* `created`：组件初始化完毕，可以访问各种数据，获取接口数据等
* `mounted`：dom已创建，可用于获取访问数据和dom元素；访问子组件等。
* `beforeUpdate`：此时view层还未更新，可用于获取更新前各种状态
* `updated`：完成view层的更新，更新后，所有状态已是最新
* `beforeDestory/beforeunmount`：实例被销毁前调用，可用于一些定时器或订阅的取消
* `destoryed/unmounted`：销毁一个实例。可清理它与其它实例的连接，解绑它的全部指令及事件监听器

### 10、在哪个生命周期内调用异步请求？

可以在钩子函数 `created`、`beforeMount`、`mounted` 中进行调用，因为在这三个钩子函数中，data 已经创建，可以将服务端端返回的数据进行赋值。
建议在 `created` 钩子函数中调用异步请求，因为在 `created` 钩子函数中调用异步请求能更快获取到服务端数据，减少页面 loading 时间。

### 12、Vue 组件间通信有哪几种方式？
主要有三类通信：父子组件通信、兄弟组件通信、隔代组件通信

* 1、父子组件通信可以使用 props/$emit，也可以使用 $parent 获取父组件实例、ref获取组件实例

* 2、兄弟组件通信可以使用 Eventbus，通过一个空的 Vue 实例作为事件中心，用它来触发事件和监听事件，也可以使用 $parent 、vueX

* 3、跨层级通信可以使用 Eventbus，也可以使用 vuex/provide+inject

### 3、Vue要做权限管理该怎么做？控制到按钮级别的权限怎么做？

1、权限管理一般需求是 `页面` 权限和 `按钮` 权限的管理

2、具体实现的时候分后端和前端两种方案：
#### 页面权限
前端方案会把所有路由信息在前端配置，通过路由守卫要求用户登录，用户登录后根据角色过滤出路由表。比如我会配置一个 `asyncRoutes` 数组，需要认证的页面在其路由的 `meta` 中添加一个 `roles` 字段，等获取用户角色之后取两者的交集，若结果不为空则说明可以访问。此过滤过程结束，剩下的路由就是该用户能访问的页面，最后通过 `router.addRoutes(accessRoutes)` 方式动态添加路由即可。

后端方案会把所有页面路由信息存在数据库中，用户登录的时候根据其角色查询得到其能访问的所有页面路由信息返回给前端，前端再通过 `addRoutes` 动态添加路由信息

#### 按钮权限
1、通过一个统一的权限判断方法 `hasPermission` ，从全局 `store` 中获取当前用户的权限码列表，然后判断其中是否存在当前按钮需要的权限码，如果有多个权限码，只要满足其中一个就可以。
2、可以实现一个指令，例如 `v-permission` ，将按钮要求角色通过值传给 `v-permission` 指令，在指令的 `moutned` 钩子中可以判断当前用户角色和按钮是否存在交集，有则保留按钮，无则移除按钮。


### 3、虚拟 DOM

* 虚拟 DOM 就是虚拟的 DOM 对象，它本身就是一个 JavaScript 对象，只不过它是通过不同的属性去描述一个视图结构。

#### 虚拟 DOM 实现原理
* 用 JavaScript 对象模拟真实 DOM 树，对真实 DOM 进行抽象。

* diff 算法 — 比较两棵虚拟 DOM 树的差异。

* patch 算法 — 将两个虚拟 DOM 对象的差异应用到真正的 DOM 树。

#### 虚拟 DOM 生成过程
* Vue 模板（`Template`）会被编译器 `compiler` 编译为渲染函数，然后调用渲染函数 render 函数返回虚拟 DOM 树对象，并基于虚拟 DOM 创建真实DOM。

* 当一个依赖发生变化后，渲染函数会重新运行，这时候会创建一个更新后的虚拟 DOM 树。运行时渲染器遍历这棵新树，将它与旧树进行比较（diff），然后将必要的更新应用（patch）到真实 DOM 上去。

#### 虚拟 DOM 优缺点
* 将真实元素节点抽象成 VNode，有效减少直接操作 dom 次数，避免性能浪费，提高开发效率。
* 方便实现跨平台，同一 VNode 节点可以渲染成不同平台上的对应的内容，比如：渲染在浏览器是 dom 元素节点，渲染在 Native( iOS、Android) 变为对应的控件、可以实现 SSR 、渲染到 WebGL 中等等

### 3、你了解diff算法吗？


### 3、说一说你对vue响应式理解？

所谓数据响应式就是能够使数据变化可以被检测并对这种变化做出响应的机制。

MVVM框架中要解决的一个核心问题是连接数据层和视图层，通过数据驱动应用，数据变化，视图更新，要做到这点的就需要对数据做响应式处理，这样一旦数据发生变化就可以立即做出更新处理。
#### 好处
以vue为例说明，通过数据响应式加上虚拟 DOM 和 patch 算法，开发人员只需要操作数据，关心业务，完全不用接触繁琐的DOM操作，从而大大提升开发效率，降低开发难度。
#### vue的响应式是怎么实现的？有哪些优缺点？
`vue2` 中的数据响应式会根据数据类型来做不同处理，如果是对象则采用 `Object.defineProperty()` 的方式定义数据拦截，当数据被访问或发生变化时，我们感知并作出响应。
如果是数组则通过覆盖数组对象原型的7个变更方法，使这些方法可以额外的做更新通知，从而作出响应。
这种机制很好的解决了数据响应化的问题，但在实际使用中也存在一些缺点：比如初始化时的递归遍历会造成性能损失；新增或删除属性时需要用户使用 `Vue.set/delete` 这样特殊的api才能生效；对于 es6 中新产生的 Map、Set 这些数据结构不支持等问题。
#### vue3
为了解决这些问题，`vue3` 重新编写了这一部分的实现：利用 ES6 的 `Proxy`代理要响应化的数据，它有很多好处，编程体验是一致的，不需要使用特殊api，初始化性能和内存消耗都得到了大幅改善；另外由于响应化的实现代码抽取为独立的 `reactivity` 包，使得我们可以更灵活的使用它，第三方的扩展开发起来更加灵活了。


### 4、v-model 的原理？
`v-model` 可以在组件上使用以实现双向绑定。

`v-model` 本质是语法糖，默认情况下相当于 `:value` 和 `@input` ，在内部为不同的输入元素使用不同的属性并抛出不同的事件：

* text 和 textarea 元素使用 value 属性和 input 事件；
* checkbox 和 radio 使用 checked 属性和 change 事件；
* select 字段将 value 作为 prop 并将 change 作为事件。

```html
<input v-model="searchText" />

<!-- 上面的代码其实等价于下面这段： -->
<input
  :value="searchText"
  @input="searchText = $event.target.value"
/>
```
#### v-model 修饰符
`v-model` 有一些内置的修饰符，例如 `.trim`，`.number` 和 `.lazy`。
`v-model` 支持自定义的修饰符。

### 5、Vue 是如何实现数据双向绑定的？

Vue 主要通过以下 4 个步骤来实现数据双向绑定的：

1、实现一个监听器 `Observer`：对数据对象进行遍历，包括子属性对象的属性，利用 `Object.defineProperty()` 对属性都加上 `setter` 和 `getter`。这样的话，给这个对象的某个值赋值，就会触发 setter，那么就能监听到了数据变化。

2、实现一个解析器 `Compile`：解析 Vue 模板指令，将模板中的变量都替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者，一旦数据有变动，收到通知，调用更新函数进行数据更新。

3、实现一个订阅者 `Watcher`：Watcher 订阅者是 `Observer` 和 `Compile` 之间通信的桥梁 ，主要的任务是订阅 `Observer` 中的属性值变化的消息，当收到属性值变化的消息时，触发解析器 Compile 中对应的更新函数。

4、实现一个订阅器 `Dep`：订阅器采用 发布-订阅 设计模式，用来收集订阅者 `Watcher`，对监听器 `Observer` 和 订阅者 `Watcher` 进行统一管理。

### 16、谈谈你对 keep-alive 的了解？
keep-alive 主要用于用于缓存组件，可以使被包含的组件保留状态，一般结合路由和动态组件一起使用，避免重新渲染。

提供 `include` 和 `exclude` 属性，include 表示只有名称匹配的组件会被缓存，exclude 表示任何名称匹配的组件都不会被缓存，其中 exclude 的优先级比 include 高。

对应两个钩子函数 `activated` 和 `deactivated`, 当组件被激活时，触发钩子函数 activated，当组件被移除时，触发钩子函数 deactivated。


### 17、从0到1自己构架一个vue项目，说说有哪些步骤、哪些重要插件、目录结构你会怎么组织

* 1、步骤大致有 项目构建、引入必要插件、代码规范、提交规范、常用库和组件

* 2、目前vue3项目我会用vite或者create-vue创建项目

* 3、接下来引入必要插件：路由插件vue-router、状态管理vuex/pinia、ui库我比较喜欢element-plus和antd-vue、http工具我会选axios

* 4、其他比较常用的库有vueuse，nprogress，图标可以使用vite-svg-loader

* 5、下面是代码规范：结合prettier和eslint即可

* 6、最后是提交规范，可以使用husky，lint-staged，commitlint


### 17、Vue 中的 key 有什么作用？

key的作用主要是为了更高效的更新虚拟DOM。

vue 在 patch 过程中判断两个节点是否是相同节点是 key 是一个必要条件，渲染一组列表时，key往往是唯一标识，所以如果不定义key的话，vue只能认为比较的两个节点是同一个，哪怕它们实际上不是，这导致了频繁更新元素，使得整个patch过程比较低效，影响性能。

实际使用中在渲染一组列表时key必须设置，而且必须是唯一标识，应该避免使用数组索引作为key，这可能导致一些隐蔽的bug；vue中在使用相同标签元素过渡切换时，也会使用key属性，其目的也是为了让vue可以区分它们，否则vue只会替换其内部属性而不会触发过渡效果。

从源码中可以知道，vue判断两个节点是否相同时主要判断两者的key和元素类型等，因此如果不设置key，它的值就是undefined，则可能永远认为这是两个相同节点，只能去做更新操作，这造成了大量的dom更新操作，明显是不可取的。

### 18、watch 和 computed 的区别以及选择?

#### 区别
计算属性可以**从组件数据派生出新数据**，最常见的使用方式是设置一个函数，返回计算之后的结果，`computed` 和 `methods` 的差异是它具备缓存性，如果依赖项不变时不会重新计算。
侦听器可以**侦测某个响应式数据的变化**，常见用法是传递一个函数，执行副作用，`watch` 没有返回值，但可以执行异步操作等复杂逻辑。

#### 选择
计算属性常用场景是**简化行内模板中的复杂表达式**，模板中出现太多逻辑会是模板变得臃肿不易维护。
侦听器常用场景是**状态变化之后做一些额外的DOM操作或者异步操作**。选择采用何用方案时首先看是否需要派生出新值，基本能用计算属性实现的方式**首选计算属性**。

#### 扩展
使用过程中有一些细节，比如计算属性也是可以传递对象，成为既可读又可写的计算属性。watch可以传递对象，设置deep、immediate等选项。

vue3中watch选项发生了一些变化，例如不再能侦测一个点操作符之外的字符串形式的表达式； reactivity API中新出现了watch、watchEffect可以完全替代目前的watch选项，且功能更加强大。


### 16、怎么缓存当前的组件？缓存后怎么更新？
开发中缓存组件使用 `keep-alive` 组件，`keep-alive` 是 vue 内置组件，`keep-alive` 包裹动态组件 `component` 时，会缓存不活动的组件实例，而不是销毁它们，这样在组件切换过程中将状态保留在内存中，防止重复渲染DOM。

```js
<keep-alive>
  <component :is="view"></component>
</keep-alive>
```

#### 缓存指定/排除、结合router
结合属性include和exclude可以明确指定缓存哪些组件或排除缓存指定组件。vue3中结合vue-router时变化较大，之前是keep-alive包裹router-view，现在需要反过来用router-view包裹keep-alive：

```js
<router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component"></component>
  </keep-alive>
</router-view>
```

#### 组件缓存后更新

* beforeRouteEnter：在有vue-router的项目，每次进入路由的时候，都会执行 `beforeRouteEnter`
```js
beforeRouteEnter(to, from, next) {
  next(vm=>{
    console.log(vm)
    // 每次进入路由执行
    vm.getData()  // 获取数据
  })
},
```

* actived：在keep-alive缓存的组件被激活的时候，都会执行 `actived` 钩子
```js
activated() {
	  this.getData() // 获取数据
},
```

#### 原理
keep-alive是一个通用组件，它内部定义了一个map，缓存创建过的组件实例，它返回的渲染函数内部会查找内嵌的component组件对应组件的vnode，如果该组件在map中存在就直接返回它。由于component的is属性是个响应式数据，因此只要它变化，keep-alive的render函数就会重新执行。

### 18、nextTick的使用和原理？

nextTick是等待下一次 DOM 更新刷新的工具方法。

Vue有个异步更新策略，如果数据变化，Vue不会立刻更新DOM，而是开启一个队列，把组件更新函数保存在队列中，在同一事件循环中发生的所有数据变更会异步的批量更新。这一策略导致我们对数据的修改不会立刻体现在DOM上，此时如果想要获取更新后的DOM状态，就需要使用nextTick。

在Vue内部，nextTick之所以能够让我们看到DOM更新后的结果，是因为我们传入的callback会被添加到队列刷新函数(flushSchedulerQueue)的后面，这样等队列内部的更新函数都执行完毕，所有DOM操作也就结束了，callback自然能够获取到最新的DOM值。

#### 应用场景

做动态表单，有时候需要获取 DOM 更新后的内容。
响应式数据变化后获取DOM更新后的状态，比如希望获取列表更新后的高度。

### 18、说一下 Vue 子组件和父组件创建和挂载顺序

创建过程自上而下，挂载过程自下而上；即：

* parent created
* child created
* child mounted
* parent mounted

之所以会这样是因为Vue创建过程是一个递归过程，先创建父组件，有子组件就会创建子组件，因此创建时先有父组件再有子组件；子组件首次创建时会添加mounted 钩子到队列，等到 patch 结束再执行它们，可见子组件的 mounted 钩子是先进入到队列中的，因此等到 patch 结束执行这些钩子时也先执行。


### 18、Vue实例挂载的过程中发生了什么?


### 18、说说从 template 到 render 处理过程（vue编译器工作原理）
Vue 中有个独特的编译器模块，称为 “compiler” ，它的主要作用是将用户编写的 template 编译为 js 中可执行的 render 函数。
之所以需要这个编译过程是为了便于前端程序员能高效的编写视图模板。相比而言，我们还是更愿意用HTML来编写视图，直观且高效。手写render函数不仅效率底下，而且失去了编译期的优化能力。
在Vue中编译器会先对template进行解析，这一步称为parse，结束之后会得到一个JS对象，我们成为抽象语法树AST，然后是对AST进行深加工的转换过程，这一步成为transform，最后将前面得到的AST生成为JS代码，也就是render函数。

### 19、Vue 项目可以进行哪些优化？



## 二、VueX
### 1、说一说你对vuex理解？
Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式 + 库。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。

我们期待以一种简单的“单向数据流”的方式管理应用，即状态 -> 视图 -> 操作单向循环的方式。

当遇到多个组件共享状态时，单向数据流的简洁性很容易被破坏：
* 多个视图依赖于同一状态。
* 来自不同视图的行为需要变更同一状态。

对于问题一，传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。
对于问题二，我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致无法维护的代码。

所以需要把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，我们的组件树构成了一个巨大的“视图”，不管在树的哪个位置，任何组件都能获取状态或者触发行为！

#### 使用
1、Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。
2、改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样可以轻松地跟踪状态的变化，也可以避免无意中从不同的组件中直接修改 store 导致的代码难以维护和调试的问题。

主要包括以下几个模块：
* State：基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。定义了应用状态的数据结构，可以在这里设置默认的初始状态。

* Getter：如果有多个组件需要用到同一属性，复制这个函数会比较麻烦，代码不易维护，可以使用 Getter 修饰。

* Mutation：是唯一更改 store 中状态的方法，使用 commit 提交 通知 vuex修改，且必须是**同步**函数（不能使用异步函数）。

* Action：用于提交 mutation，而不是直接变更状态，可以包含任意**异步**操作。

* Module：当应用变得非常复杂时，store 对象就有可能变得相当臃肿。为了解决以上问题，Vuex 允许我们将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter。

* 配置vuex，读取state的值，甚至修饰读(Getter)，然后你会修改里面的值了(Mutation)，假如你有异步操作并且需要修改state，那你就要使用Action

### 2、action 和 mutation 的区别是什么？为什么要区分它们？

* Mutation：是唯一更改 store 中状态的方法，使用 commit 提交 通知 vuex修改，且必须是**同步**函数（不能使用异步函数）。

* Action：用于提交 mutation，而不是直接变更状态，可以包含任意**异步**操作。

### 3、Pinia 对比 Vuex 3.x/4.x
Vuex 3.x 只适配 Vue 2，而 Vuex 4.x 是适配 Vue 3 的。

Pinia API 与 Vuex(<=4) 也有很多不同，即：

* mutation 已被弃用。它们经常被认为是极其冗余的。它们初衷是带来 devtools 的集成方案，但这已不再是一个问题了。
* 无需要创建自定义的复杂包装器来支持 TypeScript，一切都可标注类型，API 的设计方式是尽可能地利用 TS 类型推理。
* 无过多的魔法字符串注入，只需要导入函数并调用它们，然后享受自动补全的乐趣就好。
* 无需要动态添加 Store，它们默认都是动态的，甚至你可能都不会注意到这点。注意，你仍然可以在任何时候手动使用一个 Store 来注册它，但因为它是自动的，所以你不需要担心它。
* 不再有嵌套结构的模块。你仍然可以通过导入和使用另一个 Store 来隐含地嵌套 stores 空间。虽然 Pinia 从设计上提供的是一个扁平的结构，但仍然能够在 Store 之间进行交叉组合。你甚至可以让 Stores 有循环依赖关系。
* 不再有可命名的模块。考虑到 Store 的扁平架构，Store 的命名取决于它们的定义方式，你甚至可以说所有 Store 都应该命名。

## 三、Vue Router

### 1、vue-router 路由模式有几种？
vue-router 有 3 种路由模式：hash、history、abstract(NodeJS环境)

* hash: 它在内部传递的实际 URL 之前使用了一个哈希字符（#）。由于这部分 URL 从未被发送到服务器，所以它不需要在服务器层面上进行任何特殊处理。(SEO 不友好)

* history : 使用历史模式时，URL 会看起来很 "正常"，例如 https://example.com/user/id。

但由于我们的应用是一个单页的客户端应用，如果没有适当的服务器配置，用户在浏览器中直接访问 https://example.com/user/id，就会得到一个 404 错误。
要解决这个问题，需要在服务器上添加一个简单的**回退路由**。如果 URL 不匹配任何静态资源，它应提供与你的应用程序中的 index.html 相同的页面。

* abstract : 支持所有 JavaScript 运行环境，如 Node.js 服务器端。如果发现没有浏览器的 API，路由会自动强制进入这个模式.

### 2、vue-router 中常用的 hash 和 history 路由模式实现原理

#### hash 模式的实现原理
早期的前端路由的实现就是基于 location.hash 来实现的。其实现原理很简单，location.hash 的值就是 URL 中 # 后面的内容。比如下面这个网站，它的 location.hash 的值为 '#search'：
`https://www.word.com#search`

hash  路由模式的实现主要是基于下面几个特性：
* URL 中 hash 值只是客户端的一种状态，也就是说当向服务器端发出请求时，hash 部分不会被发送。
* hash 值的改变，都会在浏览器的访问历史中增加一个记录。因此我们能通过浏览器的回退、前进按钮控制 hash 的切换。
* 可以通过 a 标签，并设置 href 属性，当用户点击这个标签后，URL 的 hash 值会发生改变，或者使用  JavaScript 来对 loaction.hash 进行赋值，改变 URL 的 hash 值。
* 我们可以使用 hashchange 事件来监听 hash 值的变化，从而对页面进行跳转（渲染）。

#### history 模式的实现原理
HTML5 提供了 History API 来实现 URL 的变化。其中做最主要的 API 有以下两个：`history.pushState()` 和 `history.repalceState()`。这两个 API 可以在不进行刷新的情况下，操作浏览器的历史记录。

前者是新增一个历史记录，后者是直接替换当前的历史记录，如下所示：
```js
window.history.pushState(null, null, path);
window.history.replaceState(null, null, path);
```

history 路由模式的实现主要基于存在下面几个特性：

* pushState 和 repalceState 两个 API 来操作实现 URL 的变化 ；
* 我们可以使用 popstate 事件来监听 url 的变化，从而对页面进行跳转（渲染）；
* history.pushState() 或 history.replaceState() 不会触发 popstate 事件，这时我们需要手动触发页面跳转（渲染）。

### 3、怎么定义动态路由匹配？怎么获取传过来的动态参数？

很多时候，我们需要将给定匹配模式的路由映射到同一个组件，这种情况就需要定义动态路由。

例如，我们可能有一个 User 组件，它应该对所有用户进行渲染，但用户 ID 不同。在 Vue Router 中，我们可以在路径中使用一个动态字段来实现，例如：{ path: '/users/:id', component: User }，其中:id就是路径参数

路径参数 用冒号 `:` 表示。当一个路由被匹配时，它的 `params` 的值将在每个组件中以 `this.$route.params` 的形式暴露出来。
参数还可以有多个，例如`/users/:username/posts/:postId`；除了 `$route.params` 之外，`$route` 对象还公开了其他有用的信息，如 `$route.query`、`$route.hash` 等。

### 4、如果让你从零开始写一个vue路由，说说你的思路
一个 SPA 应用的路由需要解决的问题是页面跳转内容改变同时不刷新，同时路由还需要以插件形式存在，所以：

首先我会定义一个 createRouter 函数，返回路由器实例，实例内部做几件事：

* 保存用户传入的配置项
* 监听 `hash` 或者 `popstate` 事件
* 回调里根据 `path` 匹配对应路由

将router定义成一个Vue插件，即实现install方法，内部做两件事：

* 实现两个全局组件：`router-link` 和 `router-view` ，分别实现页面跳转和内容显示
* 定义两个全局变量：`$route` 和 `$router` ，组件内可以访问当前路由和路由器实例


## 四、Vue2 和 Vue3 的区别

