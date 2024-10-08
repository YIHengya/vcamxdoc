export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"D:/project/nuxtp/vcamxdoc/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"无界直播使用教程"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/project/nuxtp/vcamxdoc/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/project/nuxtp/vcamxdoc/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
