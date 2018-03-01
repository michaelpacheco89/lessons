var mysql = require("mysql");
var inquirer = require("inquirer");
var chalk = require("chalk");
var figlet = require("figlet");
var clear =  require("clear");
var columnify = require("columnify");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "top_songsDB"
});

connection.connect(function(err) {
  if (err) throw err;
  // console.log("connected as id " + connection.threadId);
  startApp();

});


function startApp(){
clear();
console.log(
  chalk.red(
    figlet.textSync("Top  Songs", {horizontalLayout: "full "})
  )
);

connection.query("SELECT * FROM Top5000", function (error, results, fields) {
if (error) throw error;
// console.log(columnify(results, {columns: ['position', 'artist','song','release_year','total_score']}));
    inquirer.prompt([
      {
      type: "list",
      message: "How would you like to search??",
      choices: ["Show All", "By Artist", "By Year", "By Song"],
      default: "Show All",
      name: "Top5000"
      }]).then(function(response){
        if(response.Top5000 === "Show All"){

        }
        else if (response.Top5000 === "By Artist") {
            byArtist();
        }
        else if (response.Top5000 === "By Year") {

        }
        else{
          // by song
        }
      });

});
}

function byArtist(){
  inquirer.prompt([
    {
      type: "input",
      message: "Which artist would you like to look up?",
      name: "artist"
    }]).then(function(response){
      var query = "SELECT position, song, year FROM top5000 WHERE ?";

      connection.query(query, { artist: answer.artist }, function(err, res) {
        for (var i = 0; i < res.length; i++) {
          console.log("Position: " + res[i].position + " || Song: " + res[i].song + " || Year: " + res[i].year);
        }
        runSearch();
      });
    });
}



function byYear(){


}

function bySong(){
  inquirer
  .prompt({
    name: "song",
    type: "input",
    message: "What song would you like to look for?"
  })
  .then(function(answer) {
    console.log(answer.song);
    connection.query("SELECT * FROM top5000 WHERE ?", { song: answer.song }, function(err, res) {
      console.log(
        "Position: " +
          res[0].position +
          " || Song: " +
          res[0].song +
          " || Artist: " +
          res[0].artist +
          " || Year: " +
          res[0].year
      );
      runSearch();
    });
  });
}

function showAll(){}
