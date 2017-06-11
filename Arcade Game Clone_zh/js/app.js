// 这是我们的玩家要躲避的敌人
var Enemy = function(x,y,speed) {
    // 要应用到每个敌人的实例的变量写在这里
    // 我们已经提供了一个来帮助你实现更多
    this.x = x;
    this.y = y;
    this.speed = speed
    // 敌人的图片或者雪碧图，用一个我们提供的工具函数来轻松的加载文件
    this.sprite = 'images/enemy-bug.png';
};

// 此为游戏必须的函数，用来更新敌人的位置
// 参数: dt ，表示时间间隙
Enemy.prototype.update = function(dt) {
    // 你应该给每一次的移动都乘以 dt 参数，以此来保证游戏在所有的电脑上
    // 都是以同样的速度运行的
    this.x += dt * this.speed
    //console.log(`enemy.x: ${this.x}, enemy.y: ${this.y}`)
    // enemy超出框后重设
    if (this.x > 83 * 3 + 75*4 ){
      this.x = 0;
    }
};

// 此为游戏必须的函数，用来在屏幕上画出敌人，
Enemy.prototype.render = function() {

    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);

};

// 现在实现你自己的玩家类
// 这个类需要一个 update() 函数， render() 函数和一个 handleInput()函数
var  Player = function (x,y) {
  //Enemy.call(this);
  this.x = x;
  this.y = y;

  this.sprite = 'images/char-boy.png';
  //this.star = 'images/star.png';
}

Player.prototype.update = function (Enemy) {
  console.log(`player.x: ${player.x},player.y: ${player.y}`)
  // 碰撞测试
  len = allEnemies.length
  for (var i = 0;i < len; i++)
  {
    if (this.y  === allEnemies[i].y && 0 < this.x - allEnemies[i].x &&  this.x - allEnemies[i].x  < 75)
    {
       player.y = 83 * 3 + 75
       player.x = 202
       //console.log(`you hit me`)
    }
  }

  y_up = -8 //最上沿
  y_low = 407 //最下沿
  x_up = 407 //最右沿
  x_low = 0//最左沿
  // 过河成功显示
  if (this.y <= y_up) {
    //player.y = y_up
    /*setTimeout(function()
    {
      console.log("THIS IS");
    }, 6000);*/
    player.y = 83 * 3 + 75
    player.x = 202
    var img = new Image();
    img.src = "images/star.png";
    img.onload = function () {
      //ctx.drawImage(img,0,0)
      alert("恭喜你，过河成功！");
    }
    /*ctx.fillStyle = 'red'
    ctx.font = "36px Impact"
    ctx.fillText('恭喜你：' ,0, 83 * 0 + 75)*/
  }
  // player防止出框
  else if (this.y > y_low) {
    player.y = y_low
  }
  else if (this.x > 407) {
    player.x = 407

  }
  else if (this.x < 0) {
    player.x = 0
  }
  // 奖励

  /*if (this.y = y_up){
    //record += 1
    ctx.fillStyle = 'red'
    ctx.font = "36px Impact"
    ctx.fillText('恭喜你：' ,0, 83 * 0 + 75)
    console.log("add +")
  }*/

}

Player.prototype.render = function (){
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.handleInput = function(movement){
  switch(movement){
    case 'left' : this.x -= 101; break;
    case 'right': this.x += 101; break;
    case 'up': this.y -= 83; break;
    case 'down': this.y += 83; break;
  }
}
// 现在实例化你的所有对象
// 把所有敌人的对象都放进一个叫 allEnemies 的数组里面
// 把玩家对象放进一个叫 player 的变量里面
var allEnemies = [new Enemy(0, 83 * 0 + 75,120),new Enemy(0, 83 * 1 + 75,170),new Enemy(0, 83 * 2 + 75,60)]
//var allEnemies = [new Enemy(0, 83 * 0 + 75,40)]
var player = new Player(202, 83 * 3 + 75)
//allEnemies.prototype.checkCollision()


// 这段代码监听游戏玩家的键盘点击事件并且代表将按键的关键数字送到 Play.handleInput()
// 方法里面。你不需要再更改这段代码了。
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
