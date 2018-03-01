 var http = require("http");
var fs = require("fs");
var url = require("url");

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
  console.log("Server listening on: http://localhost:%s", PORT);
});
// ==================

function handleRequest(req, res){
  var urlParts = url.parse(req.url);
console.log(urlParts);
  switch (urlParts.pathname) {
    case "/":
      displayIndex(urlParts.pathname, req, res);
      break;

    case "/favorite_food":
      displayFood(urlParts.pathname, req, res);
      break;


    case "/favorite_movies":
      displayMovies(urlParts.pathname, req, res);
      break;

    case "/favorite_frameworks":
      displayFramework(urlParts.pathname, req, res);
      break;

    default:
      display404(urlParts.pathname, req, res);
  }
}

// *display index
function displayIndex(url, req, res){
  fs.readFile(__dirname + "/index.html", function(err, data){
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}
// *display Food
function displayFood(url, req, res){
  fs.readFile(__dirname + "/food.html", function(err, data){
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// * display Movies
function displayMovies(url, req, res){
  fs.readFile(__dirname + "/movies.html", function(err, data){
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}

// *displayFramework
function displayFramework(url, req, res){
  fs.readFile(__dirname + "/frameworks.html", function(err, data){
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
}
