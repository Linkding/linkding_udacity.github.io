function test_ajax(){
  const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'
  const key = '108db213584046a3bd5d287a0086c22d'
  const query = marker.title
  const params = $.param({
    'q' : query,
    'api-key' : key
  })

  const settings = {
    method: 'GET',
    dataType: 'json'
  }

  const endpoint = '${url}?${params}'

  window.open(endpoint)

  $.ajax(endpoint,settings).done(data =>{
    console.log(data)
  })
  .fail(error => {
    console.log(error)
  })
}
