
var $body = $('body');
var $wikiElem = $('#wikipedia-links');
var $nytHeaderElem = $('#nytimes-header');
var $nytElem = $('#nytimes-articles');
var $greeting = $('#greeting');
var inputstreet = $('input#street')
var inputcity = $('input#city')
var livephoto = $('#photo-live')
// var street
// var city
// clear out old data before new request
$wikiElem.text("");
$nytElem.text("");
var street = inputstreet.val()
var city = inputcity.val()

function loadData() {
    // load streetview
    var street = inputstreet.val()
    var city = inputcity.val()
    var get_google_street_api ='https://maps.googleapis.com/maps/api/streetview?size=400x400&location=' + street + ','+ city
    $body.append('<img class="bgimg" src="'+ get_google_street_api  + '">')

    //load NYTimes api

    url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
    url += '?' + $.param({
      'api-key': "108db213584046a3bd5d287a0086c22d",
      'q': street
    });

    $.ajax({
      url: url,
      method: 'GET',
      error: function(){
        $nytElem.html('<p>the api  can not work </p>')
      }
    })
    .done(function(data){
        console.log("data:", data);
        len = data.response.docs.length
        headline = data.response.docs[0].headline.print_headline
        link = data.response.docs[0].web_url
        console.log(len,headline,link)
        var add = []
        for (i=0;i < len; i ++){
          headline = data.response.docs[i].headline.print_headline
          link = data.response.docs[i].web_url
          var html = "<li class='articl'>" + "<a href= " + link +  ">" + headline + "</a></li>";
          //console.log(html)
          add.push(html)
        }
        $nytElem.html(add)
      });

    //YOUR CODE GOES HERE!

    return false;
};

function loadwikiapi(){
  var street = inputstreet.val()
  var city = inputcity.val()
  // mediawiki api
  //https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json
  mediawiki_url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search=' + city + '&prop=revisions&rvprop=content&format=json'
  $.ajax( {
    url: mediawiki_url,
    //data: queryData,
    dataType: 'JSONP',
    //type: 'POST',
    headers: { 'Api-User-Agent': 'Example/1.0' },
    method: 'GET',
    } )
    .done(function(data) {
             // do something with data
             var a = []
             for (i = 0; i < data.length;i ++){
               link = 'https://en.wikipedia.org/wiki/' + data[3][i]
               html = "<li><a href='" + link  + "'>" + data[1][i] + "</a></li>"
               a.push(html)
             }
             $wikiElem.html(a)
             //console.log(data.query.normalize);
             //console.log(data[1])
          }
        )

    return false;

};

$('#form-container').submit(loadData);
