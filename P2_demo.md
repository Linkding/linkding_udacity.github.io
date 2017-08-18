# 前置知识
要对网站进行优化，首先要了解网页构建页面但每个细致但工作流程是如何。简单可以分为两个类型但构建过程：
* 文档对象类型(DOM)
* css对象类型(CSSOM)

阅读[谷歌文档相关文档](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model)

# css优化

# JS优化
## 使用 JavaScript 添加交互
* JavaScript 可以查询和修改 DOM 与 CSSOM。
* JavaScript 执行会阻止 CSSOM。
* 除非将 JavaScript 显式声明为异步，否则它会阻止构建 DOM

异步的关键字`async`,但内连Javascript时无效
```
<html>
  <head>
    <meta name="viewport" content="width=device-width,initial-scale=1">
    <link href="style.css" rel="stylesheet">
    <title>Critical Path: Script Async</title>
  </head>
  <body>
    <p>Hello <span>web performance</span> students!</p>
    <div><img src="awesome-photo.jpg"></div>
    <script src="app.js" async></script>
  </body>
</html>
```
此外，你还可以向脚本标记添加 defer 属性，告诉解析程序脚本应该等到文档加载后执行。[详细了解 defer 属性](https://hacks.mozilla.org/2009/06/defer/)

[详细了解解析程序阻止与异步 JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript

测试要领：如何区分Blocking，Inline，Async
*  阻止（Blocking）: <script src="anExteralScript.js"></script>
* 内联（Inline）: <script>document.write("this is an inline script")</script>
* 异步（Async）: <script async src="anExternalScript.js"></script>

>注意：
1、「inline」观察request，它不会这么快就请求javascript；
2、「blocking」如果浏览器尚未完成 CSSOM 的下载和构建，而我们却想在此时运行脚本，会怎样？答案很简单，对性能不利：浏览器将延迟脚本执行和 DOM 构建，直至其完成 CSSOM 的下载和构建；
3、「async」加载并执行js，不会被cssom的构建所打断；



![](https://ooo.0o0.ooo/2017/06/27/59527a6a3cd18.png)

#### [预加载扫描程序](https://andydavies.me/blog/2013/10/22/how-the-browser-pre-loader-makes-pages-load-faster/)


预加载扫描程序是为了提升网页加载速度的一种加载机制，可以在创建DOM的blocking情况下，预先加载css和js文件。

---
## 优化三个部分：
*  压缩大小（使用html、css、js）
* css优化 （媒体查询）
* js 优化 （async异步）

###  优化三个方向：
* Minimize bytes
* reduce civitcd resource
* shorten critical-rendering-path length

阅读材料：
[优化关键渲染路径](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path)
[分析关键渲染路径性能](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp#performance-patterns)

* 网页背后加载的原理和过程？
* CRP（critical rendering path）计算
* css媒体查询？
