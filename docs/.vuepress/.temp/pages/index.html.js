export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"heroImage\":\"/images/hero.jpg\",\"heroText\":\"人生碌碌，竟短论长\",\"tagline\":\"若布衣暖，菜饭饱，一室雍雍，优游泉石，真成烟火神仙矣。\",\"actions\":[{\"text\":\"呆坐良久\",\"link\":\"/componentDocs/Install\",\"type\":\"primary\"}]},\"headers\":[],\"git\":{\"updatedTime\":1686101541000,\"contributors\":[{\"name\":\"zhang\",\"email\":\"zy5444697@163.com\",\"commits\":1}]},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
