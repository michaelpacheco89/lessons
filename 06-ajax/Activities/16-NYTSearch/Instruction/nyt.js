https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=843e016050524efaab2b592ef43e877b





https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=843e016050524efaab2b592ef43e877b&q=abraham+lincoln





// VARIABLES
// ===========================
var name= "abraham+lincoln";

var queryUrl= "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=843e016050524efaab2b592ef43e877b&q=" + name;



// AJAX GET 
// ==========================

$.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response) {
      console.log(response);
    });