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
              text: '作用域与闭包',
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
