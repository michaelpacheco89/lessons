var http = require("http");
var PORT1 = 7000;
var PORT2 = 7500;

var server1 = http.createServer(port7K);
var server2 = http.createServer(port7500);

// ==============
function port7K(request, response) {


  response.end("YOU ARE AWESOME!!");
}
// listener
server1.listen(PORT1, function() {
  console.log("Server listening on: http://localhost:%s", PORT1);
});




// ==============
function port7500(request, response){
  response.end("YOU SMELL, TAKE A SHOWER!!");
}

// listener
server2.listen(PORT2, function() {
  console.log("Server listening on: http://localhost:%s", PORT2);
});
