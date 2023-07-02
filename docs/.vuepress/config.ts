import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '一日看尽长安花',
  description: '一日看尽长安花',
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '一事',
        link: '/',
      },
      {
        text: '无成',
        children: [
          {
            text: 'JavaScript',
            link: '/01.WEB/JavaScript'
          },
          {
            text: 'ES6',
            link: '/01.WEB/ES6'
          },
          {
            text: 'Vue',
            link: '/01.WEB/Vue'
          },
          {
            text: 'HTML',
            link: '/01.WEB/HTML'
          }
        ]
      },
      {
        text: '做个',
        children: [
          {
            text: 'Notes',
            link: '/02.GIS/Notes'
          },
        ]
      },
      {
        text: '废人',
        children: [
          {
            text: '混碗饭',
            link: '/01.WEB/Jobs'
          }
        ]
      },
    ],
    sidebar: {
      '/01.WEB/JavaScript': [
        // SidebarItem
        {
          text: 'JavaScript',
          children: [
            // SidebarItem
            {
              text: '简介',
              link: '/01.WEB/JavaScript/01.简介.md',
            },
            {
              text: 'JavaScript常用的数组方法',
              link: '/01.WEB/JavaScript/JavaScript常用的数组方法.md',
            },
            {
              text: 'JavaScript常用字符串方法',
              link: '/01.WEB/JavaScript/JavaScript常用字符串方法.md',
            },
            {
              text: 'JavaScript运行机制',
              link: '/01.WEB/JavaScript/JavaScript运行机制.md',
            },
            {
              text: 'JavaScript作用域',
              link: '/01.WEB/JavaScript/JavaScript作用域.md',
            },
            {
              text: 'JavaScript的闭包',
              link: '/01.WEB/JavaScript/JavaScript的闭包.md',
            },
            {
              text: '继承与原型链',
              link: '/01.WEB/JavaScript/继承与原型链.md',
            },
            {
              text: 'JavaScript继承的多种方式',
              link: '/01.WEB/JavaScript/JavaScript继承的多种方式.md',
            }
          ],
        },
      ],
      '/01.WEB/ES6': [
        // SidebarItem
        {
          text: 'ES6',
          children: [
            // SidebarItem
            {
              text: '块级作用域let和const',
              link: '/01.WEB/ES6/块级作用域let和const.md',
            },
            {
              text: '变量的解构赋值',
              link: '/01.WEB/ES6/变量的解构赋值.md',
            },
            {
              text: '字符串的扩展',
              link: '/01.WEB/ES6/字符串的扩展.md',
            },
            {
              text: '函数的扩展',
              link: '/01.WEB/ES6/函数的扩展.md',
            },
            {
              text: 'Symbol',
              link: '/01.WEB/ES6/Symbol.md',
            },
            {
              text: '迭代器与 for of 循环',
              link: '/01.WEB/ES6/迭代器与 for of 循环.md',
            },
            {
              text: 'Promise 对象',
              link: '/01.WEB/ES6/Promise 对象.md',
            },
            {
              text: 'Generator 函数',
              link: '/01.WEB/ES6/Generator 函数.md',
            },
            {
              text: 'Generator 函数的异步应用',
              link: '/01.WEB/ES6/Generator 函数的异步应用.md',
            },
            {
              text: 'Async 函数',
              link: '/01.WEB/ES6/Async 函数.md',
            },
            {
              text: 'Class 类的基本语法',
              link: '/01.WEB/ES6/Class 类的基本语法.md',
            },
            {
              text: 'Proxy',
              link: '/01.WEB/ES6/Proxy.md',
            },
          ],
        },
      ],
      '/01.WEB/Vue': [
        // SidebarItem
        {
          text: 'Vue',
          children: [
            // SidebarItem
            {
              text: '01.Vue 生命周期',
              link: '/01.WEB/Vue/01.Vue生命周期.md',
            },
            {
              text: '02.Vue 组件之间通信方式',
              link: '/01.WEB/Vue/02.Vue组件之间通信方式.md',
            },
            {
              text: '03.Vue 2中的响应式系统',
              link: '/01.WEB/Vue/03.Vue 2中的响应式系统.md',
            },
            {
              text: '04.Vue 3中的响应式系统',
              link: '/01.WEB/Vue/04.Vue 3中的响应式系统.md',
            },
            {
              text: '05.虚拟DOM实现原理',
              link: '/01.WEB/Vue/05.虚拟DOM实现原理.md',
            },
            {
              text: '06.组合式 API ',
              link: '/01.WEB/Vue/06.组合式 API .md',
            },
            // {
            //   text: '迭代器与 for of 循环',
            //   link: '/01.WEB/Vue/迭代器与 for of 循环.md',
            // },
            // {
            //   text: 'Promise 对象',
            //   link: '/01.WEB/Vue/Promise 对象.md',
            // },
            // {
            //   text: 'Generator 函数',
            //   link: '/01.WEB/Vue/Generator 函数.md',
            // },
            // {
            //   text: 'Generator 函数的异步应用',
            //   link: '/01.WEB/Vue/Generator 函数的异步应用.md',
            // },
            // {
            //   text: 'Async 函数',
            //   link: '/01.WEB/Vue/Async 函数.md',
            // },
            // {
            //   text: 'Class 类的基本语法',
            //   link: '/01.WEB/Vue/Class 类的基本语法.md',
            // },
          ],
        },
      ],
      '/01.WEB/HTML': [
        // SidebarItem
        {
          text: 'HTML',
          children: [
            // SidebarItem
            {
              text: 'Web Workers',
              link: '/01.WEB/HTML/Web Workers.md',
            }
          ],
        },
      ],
      '/01.WEB/Jobs': [
        // SidebarItem
        {
          text: '混碗饭',
          children: [
            // SidebarItem
            {
              text: 'JavaScript',
              link: '/01.WEB/Jobs/JavaScript.md',
            },
            {
              text: 'ES6',
              link: '/01.WEB/Jobs/ES6.md',
            },
            {
              text: 'Vue',
              link: '/01.WEB/Jobs/Vue.md',
            },
          ],
        },
      ],
      '/02.GIS/Notes': [
        // SidebarItem
        {
          text: 'Notes',
          children: [
            // SidebarItem
            {
              text: 'Cesium调用GeoServer服务',
              link: '/02.GIS/Notes/Cesium调用GeoServer服务.md',
            },
            {
              text: 'GeoServer发布Tif格式影像文件',
              link: '/02.GIS/Notes/GeoServer发布Tif格式影像文件.md',
            },
          ],
        },
      ],
    },
  }),
})
