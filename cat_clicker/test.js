function catBody(id) {
  $('body').append('<img id="img_cat' + id + '"' + 'src="../img/xiaomao00' + id +'.jpg" alt="Cat' + id+ '">');
  $('body').append('<p id="count_cat' + id + '">0</p>');
}

function catClicker(id) {
  var img_id = '#img_cat' + id;
  var count_id = '#count_cat' + id;

  $(img_id).on('click', function() {
    var count = $(count_id).text();
    count = parseInt(count);
    count += 1;
    $(count_id).text(count);
  });
}

function catMachine(count) {
  for (var i = 1; i <= count; i++) {
    catBody(i);
    catClicker(i);
  }
}

catMachine(2);
