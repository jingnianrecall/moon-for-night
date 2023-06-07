export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"一事\",\"link\":\"/\"},{\"text\":\"无成\",\"children\":[{\"text\":\"JavaScript\",\"link\":\"/01.WEB/JavaScript\"},{\"text\":\"HTML\",\"link\":\"/01.WEB/HTML\"}]},{\"text\":\"GIS\",\"children\":[{\"text\":\"记录\",\"link\":\"/02.GIS/记录/Cesium调用GeoServer服务.md\"},{\"text\":\"HTML\",\"link\":\"/02.GIS/HTML\"}]}],\"sidebar\":{\"/01.WEB/JavaScript\":[{\"text\":\"JavaScript\",\"children\":[{\"text\":\"简介\",\"link\":\"/01.WEB/JavaScript/01.简介.md\"},{\"text\":\"JavaScript运行机制\",\"link\":\"/01.WEB/JavaScript/JavaScript运行机制.md\"},{\"text\":\"继承与原型链\",\"link\":\"/01.WEB/JavaScript/继承与原型链.md\"}]}],\"/HTML/\":[{\"text\":\"HTML\",\"children\":[\"/reference/cli.md\",\"/reference/config.md\"]}],\"/02.GIS/记录\":[{\"text\":\"记录\",\"children\":[{\"text\":\"Cesium调用GeoServer服务\",\"link\":\"/02.GIS/记录/Cesium调用GeoServer服务.md\"},{\"text\":\"语法和数据类型\",\"link\":\"/02.GIS/记录/GeoServer发布Tif格式影像文件.md\"}]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
