## 网站优化
打开网页地址：https://linkding.github.io/linkding_udacity.github.io/Website_Optimization_zh/

#### index.html已做尝试
* css／js文件压缩
  ```
  <img style="width: 100px;" src="views/images/pizzeria.jpg">
  <a href="views/pizza.html">Cam's Pizzeria</a>
  ```
  将pizzaria.jpg的width设置成100px，缩减宽长以及大小
* 图片压缩
  * 2次压缩`img/profilepic.jpg`图片大小；
* css文件使用media属性
  * 将`style-min.css`文件的内容直接内联到index.html文件，加快页面渲染;
  * 设置媒体查询避免加载一些不太必要的 CSS 资源，media='print';
* js文件异步加载(async)

* google font异步加载
  * 使用Webfont.load方式，应对[FOUT](http://help.typekit.com/customer/portal/articles/6852)
  ```
  .wf-loading html { font-family: 'Simsun';}
  .wf-active html {font-family: 'Open Sans';}
  ```
  在css设置wf-loading和wf-active状态来设置默认使用的字体，不过似乎适配性不够高；

#### pizza.html
* css／js文件压缩
* 更改pizza size的代码优化
  * 减少pizza的个数至40；
  ```
  document.addEventListener('DOMContentLoaded', function() {
    var cols = 8;
    var s = 256;
    for (var i = 0; i < 40; i++) {
      var elem = document.createElement('img');
      elem.className = 'mover';
      elem.src = "images/pizza.png";
      elem.style.height = "100px";
      elem.style.width = "73.333px";
      elem.basicLeft = (i % cols) * s;
      elem.style.top = (Math.floor(i / cols) * s) + 'px';
      document.getElementById("movingPizzas1").appendChild(elem);
    }
  ```
  * 用`getElementById`代替`querySelector`，用`getElementsByClassName`代替`querySelectorAll`;
