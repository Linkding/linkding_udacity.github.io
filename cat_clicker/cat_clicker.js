var count = 1;
var p = $('#showclicker')

$('#count').click(function() {
  var html = "<p>" + count + "</p>";
  p.html(html);
  count = count + 1;
});
