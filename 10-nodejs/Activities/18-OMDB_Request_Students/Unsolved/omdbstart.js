// INSTRUCTIONS:
// ---------------------------------------------------------------------------------------------------------
// Level 1:
// Take any movie with a word title (ex: Cinderella) as a Node argument and retrieve the year it was created

// Level 2 (More Challenging):
// Take a move with multiple words (ex: Forrest Gump) as a Node argument and retrieve the year it was created.
// ---------------------------------------------------------------------------------------------------------

// Include the request npm package (Don't forget to run "npm install request" in this folder first!)
// ...
var request = require("request");




// Grab or assemble the movie name and store it in a variable called "movieName"
var input = process.argv.slice(2).join("+").split(",");
// ...
var movieName = input[0];

var year = input[1].trim();

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=" + year + "&plot=short&apikey=40e9cece";


// This line is just to help us debug against the actual URL.
// console.log(queryUrl);


// Then create a request to the queryUrl
// ...

request(queryUrl, function(error, response, body){
    if(!error && response.statusCode ===200){
      console.log("Title: " + JSON.parse(body).Title)
        console.log("Rating: " + JSON.parse(body).Rated)
          console.log("Release Date: " + JSON.parse(body).Released)
    }

});


  // If the request is successful
  // ...

  // Then log the Release Year for the movie
  // ...
