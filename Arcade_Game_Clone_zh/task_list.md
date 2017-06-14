### 青蛙过河任务列表
#### 基本任务
* 获取到任务代码，在本地用IDE打开阅读；
* 阅读项目要求和提示，尝试寻找解决的路径；
* 阅读app.js文件中的注释，了解游戏的结构，思考如何运作起来；


####  首要任务
让游戏运作起来，让游戏页面，人物，虫子出现在页面上，具体游戏功能暂且不纠结；
  * ~~完成虫子实例化，包括添加初始坐标(x,y)，和移动速率speed，正常出现在画面中；~~
  * ~~完成player的实例化，并能成功上下左右移动；~~

#### 核心任务
   * ~~碰撞检测~~
    * 代码写在什么位置，如何调用（自动生效）？
      * 碰撞后，如何让player回到初始位置？
        * 第一次老师review后，提供的资料 [参考](https://aotu.io/notes/2017/02/16/2d-collision-detection/)
   * ~~虫子重复跑位~~


#### 边缘任务
  * 完成过河后的奖励
    * ~~判断过河完成；~~
    * 奖励图显示；
      * 未完成，用alert弹窗替代
      * 第一次老师review后，提示了实现方法
        >在 engine.js 里面的 Resources.load 方法内添加上星星的图片 'images/Star.png'。在 Player.prototype.render 方法内设置一个条件判断，当满足条件时调用下方渲染函数来显示星星ctx.drawImage(Resources.get("images/Star.png"), 0 , 0);

    * 奖励数据加总;
      * 未完成

#### 思维工具/设计工具
* [ linesh：TDD 方法论、刻意练习与最佳实践](https://github.com/linesh-simplicity/TDD-methodology-and-deliberate-practice)
