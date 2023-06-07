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
            text: 'HTML',
            link: '/01.WEB/HTML'
          }
        ]
      },
      {
        text: 'GIS',
        children: [
          {
            text: '记录',
            link: '/02.GIS/记录/Cesium调用GeoServer服务.md'
          },
          {
            text: 'HTML',
            link: '/02.GIS/HTML'
          }
        ]
      },
    ],
    // sidebar: [
    //   // SidebarItem
    //   {
    //     text: 'JavaScript',
    //     link: '/javaScript/',
    //     children: [
    //       // SidebarItem
    //       {
    //         text: '简介',
    //         link: '/JavaScript/01.简介.md',
    //         children: [],
    //       },
    //     ],
    //   },
    // ]
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
              text: 'JavaScript运行机制',
              link: '/01.WEB/JavaScript/JavaScript运行机制.md',
            },
            {
              text: '继承与原型链',
              link: '/01.WEB/JavaScript/继承与原型链.md',
            },
          ],
        },
      ],
      '/HTML/': [
        {
          text: 'HTML',
          children: ['/reference/cli.md', '/reference/config.md'],
        },
      ],
      '/02.GIS/记录': [
        // SidebarItem
        {
          text: '记录',
          children: [
            // SidebarItem
            {
              text: 'Cesium调用GeoServer服务',
              link: '/02.GIS/记录/Cesium调用GeoServer服务.md',
            },
            {
              text: '语法和数据类型',
              link: '/02.GIS/记录/GeoServer发布Tif格式影像文件.md',
            },
          ],
        },
      ],
    },
  }),
})
