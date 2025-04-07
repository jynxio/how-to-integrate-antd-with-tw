<h2><samp>这是什么？</samp></h2>

<samp>这是博文《如何将 Antd 集成进 Tailwind CSS》的配套代码，它的具体操作和博文的阐述是不一致的，因为博文的阐述是经过刻意简化的。</samp>

<br />

<h2><samp>如何使用？</samp></h2>

<samp>1）安装依赖，请执行命令 `pnpm i`；</samp>

<samp>2）获取 Antd 的 Design Token 与 CSS Variables，对应步骤 [获取 Token](https://www.jynxio.com/post/how-to-integrate-antd-with-tw#1%EF%BC%89%E8%8E%B7%E5%8F%96-Token) 与 [获取 CSS 变量](https://www.jynxio.com/post/how-to-integrate-antd-with-tw#2%EF%BC%89%E8%8E%B7%E5%8F%96-CSS-%E5%8F%98%E9%87%8F)，请执行命令 `pnpm gen:table`，其将自动生成 `/src/ref/autogen-token.json` 文件；</samp>

<samp>3）根据 `autogen-token.json` 来 **手工** 分类 CSS 变量，对应步骤 [分类 CSS 变量](https://www.jynxio.com/post/how-to-integrate-antd-with-tw#3%EF%BC%89%E5%88%86%E7%B1%BB-CSS-%E5%8F%98%E9%87%8F)，分类结果已上传，见 `/src/ref/handmade-theme.json` 和 `/src/ref/handmade-utility.json`；</samp>

<samp>4）根据 `handmade-theme.json` 和 `handmade-utility.json` 来生成 Tailwind CSS 的注册文件，对应步骤 [注册 CSS 变量](https://www.jynxio.com/post/how-to-integrate-antd-with-tw#4%EF%BC%89%E6%B3%A8%E5%86%8C-CSS-%E5%8F%98%E9%87%8F)，请执行命令 `pnpm gen:tw`，其将自动生成 `/src/css/redirect.css`、`/src/css/theme.css`、`/src/css/utility.css`；</samp>
