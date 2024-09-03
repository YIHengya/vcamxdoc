import comp from "D:/project/nuxtp/vcamxdoc/docs/.vuepress/.temp/pages/get-started.html.vue"
const data = JSON.parse("{\"path\":\"/get-started.html\",\"title\":\"无界直播使用教程\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"无界直播使用教程\",\"slug\":\"无界直播使用教程-1\",\"link\":\"#无界直播使用教程-1\",\"children\":[]},{\"level\":2,\"title\":\"环境隐藏\",\"slug\":\"环境隐藏\",\"link\":\"#环境隐藏\",\"children\":[]},{\"level\":2,\"title\":\"版本更新内容\",\"slug\":\"版本更新内容\",\"link\":\"#版本更新内容\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"get-started.md\"}")
export { comp, data }

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
