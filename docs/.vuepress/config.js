import { defaultTheme } from "vuepress";
import latexPlugin from "markdown-it-mathjax3";

module.exports = {
  base: "/cslearn/", //<仓库名>
  plugins: [
    'mermaidjs',
    'vuepress-plugin-mermaidjs'
  ],
  extendsMarkdown: (md) => {
    md.use(latexPlugin);
    md.linkify.set({ fuzzyEmail: false });
  },
  theme: defaultTheme({
    // url
    logo: "https://vuejs.org/images/logo.png",
    // 默认主题配置
    navbar: [
      {
        text: "首页",
        link: "/",
      },
      {
        text: "UNIX",
        link: "/unix/",
      },
      {
        text: "软件工程",
        children: [
          {
            text: "Always active",
            link: "/",
            // this item will always be active
            activeMatch: "/",
          },
          {
            text: "Active on /foo/",
            link: "/not-foo/",
            // this item will be active when current route path starts with /foo/
            // regular expression is supported
            activeMatch: "^/foo/",
          },
        ],
      },
    ],
  }),
};
