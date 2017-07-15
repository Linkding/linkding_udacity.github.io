作业记录：
* 完成，利用nrgok实现使用pagespeed来计算初始分数（76/83）；
* 第二步，学会使用Chrome DevTools查看网页加载过程，分析性能；
* 学习最后，列一份优化检查清单
#### 优化尝试：
* 压缩图片

##### 优化css
* 使用media属性


增加2分
```
<link href="css/print.css" rel="stylesheet" media="print">
```

##### 优化渲染路径js
* 进行异步处理
```
<script async src="http://www.google-analytics.com/analytics.js"></script>
```

---
>cnpm install --save-dev jshint gulp-minify-css gulp-uglify gulp-jshint gulp-rename
---
提问：将google font字体进行异步加载，但是pagespeed分数反而降低

在尚未更改前，测试pagespeed分数，移动／桌面分数：72/88。

更改代码
```
<script  src="https://staticfile.qnssl.com/webfont/1.6.16/webfontloader.js"></script>
<script>
  WebFont.load({
    google: {
      families: ['Open Sans'],
      api: 'https://fonts.lug.ustc.edu.cn/css'
      //api: 'https://lug.ustc.edu.cn/wiki/lug/services/googlefonts'
      //api: 'https://cdn.moefont.com/fonts/css'
    }
  });
</script>
```
测试的pagespeed分数，移动／桌面：59/79

PS:css未做更改。


个人推测：使用的webfont是七牛的cdn，难道这个因为在国内，变成瓶颈？

求搭救。
