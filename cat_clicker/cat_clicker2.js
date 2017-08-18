var p = $('body')
//model
var model = [
  {
    name : 'andy',
  },
  {
    name : 'kate',
  }
]

//render
var view = function(num){
  // len = model.length;
  // var a = []
  // console.log(len)
  // for (i = 0; i < len; i ++){
  var name = model[num].name
  //var src = model[i].src
  var html = "<ul><li>" + name + "</li>" +
   "<li id='xiaomao" + num + "'>0</li>" +
  "<li><img id=img_id" + num  + ' ' + "src='../img/xiaomao00" + num + ".jpg'" + "></li></ul>" ;
  // a.push(html)
  // }

  //注意juqery.html()和jquery.append()的差别。
  console.log(html)
  // p.html(html);
  $('body').append(html)

}


//count click number
var count = function(num){
    var clicknum = '#xiaomao' + num;
    var img_id = '#img_id' + num;

    $(img_id).click(function(){
      var catnum = $(clicknum).text();
      catnum = parseInt(catnum);
      catnum += 1;
      console.log(catnum)
      $(clicknum).text(catnum)
    });
  }

var catmachin = function (num){
  for (var i = 0; i < num; i++) {
    view(i);
    count(i);
  }
}

catmachin(2)
// var count = 1;
//
// var num = $('#count').text();
// console.log(num)
//
// $('#img').click(function(numcopy) {
//   numcopy =  count ++
//   return function (){
//     num = numcopy
//   }
// }(num));
